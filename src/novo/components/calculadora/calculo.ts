// Contas da calculadora de CAC e LTV (base: planilha LTV x CAC da UPDO), sem nada de tela.

export type TipoNegocio = 'unica' | 'recompra' | 'recorrente' | 'setup';

export type Custo = {
  id: string;
  nome: string;
  modo: '%' | 'R$';
  valor: number;
  // Custo que a pessoa adicionou (nome editável, pode remover)
  extra?: boolean;
};

export type CustoAquisicao = { id: string; nome: string; valor: number };

export type Entradas = {
  tipo: TipoNegocio;
  // Preço de cada compra, ou a mensalidade na recorrência
  ticket: number;
  // Taxa de implantação (só em setup + mensalidade)
  setup: number;
  // Venda única com recompra
  comprasAno: number;
  anos: number;
  // Cancelamento por mês, em % (recorrência e setup + mensalidade)
  churn: number;
  custos: Custo[];
  investimento: number;
  // Outros custos de aquisição por mês (time comercial, agência, ferramentas): entram no CAC, não no ROAS
  custosAquisicao: CustoAquisicao[];
  clientesNovos: number;
  // Taxa de conversão de lead em venda, em % (opcional: 0 = não informada)
  conversaoLead: number;
};

// Cenários de CAC máximo, em % do LTV (os da planilha)
export const CENARIOS = [
  { id: 'conservador', nome: 'Conservador', pct: 0.3 },
  { id: 'moderado', nome: 'Moderado', pct: 0.4 },
  { id: 'agressivo', nome: 'Agressivo', pct: 0.55 },
] as const;

export const TIPOS: { id: TipoNegocio; nome: string; descricao: string }[] = [
  { id: 'unica', nome: 'Venda única', descricao: 'O cliente compra uma vez (imóvel, curso, projeto, equipamento).' },
  { id: 'recompra', nome: 'Venda com recompra', descricao: 'O cliente volta a comprar de tempos em tempos (loja, clínica, insumos).' },
  { id: 'recorrente', nome: 'Assinatura', descricao: 'Mensalidade até o cliente cancelar (SaaS, academia, clube).' },
  { id: 'setup', nome: 'Setup + mensalidade', descricao: 'Uma taxa de entrada e depois mensalidade (agência, software, consultoria).' },
];

// Exemplo fictício que vem preenchido (não é de nenhum cliente): loja com recompra, ticket de R$ 290, 10 compras por ano durante 2 anos
export const EXEMPLO: Entradas = {
  tipo: 'recompra',
  ticket: 290,
  setup: 1200,
  comprasAno: 10,
  anos: 2,
  churn: 4,
  custos: [
    { id: 'imposto', nome: 'Imposto', modo: '%', valor: 8 },
    { id: 'cartao', nome: 'Cartão / gateway', modo: '%', valor: 3.5 },
    { id: 'plataforma', nome: 'Plataforma', modo: 'R$', valor: 18 },
    { id: 'comissao', nome: 'Comissão', modo: '%', valor: 4 },
    { id: 'cpv', nome: 'Produto / matéria-prima', modo: 'R$', valor: 62 },
  ],
  investimento: 14500,
  custosAquisicao: [],
  clientesNovos: 11,
  conversaoLead: 8,
};

// Ajustes do simulador: ticket e CAC em % sobre o informado; churn substitui o informado (null = sem ajuste)
export type Ajustes = { ticketPct: number; cacPct: number; churn: number | null };

export type Resultado = ReturnType<typeof calcular>;

const custoDe = (custos: Custo[], preco: number) => custos.reduce((t, c) => t + (c.modo === '%' ? (preco * c.valor) / 100 : c.valor), 0);

export function calcular(e: Entradas, aj: Ajustes = { ticketPct: 0, cacPct: 0, churn: null }) {
  const ticket = e.ticket * (1 + aj.ticketPct / 100);
  const churn = Math.max(aj.churn ?? e.churn, 0.1) / 100;
  const temSetup = e.tipo === 'setup';
  const setup = temSetup ? e.setup * (1 + aj.ticketPct / 100) : 0;

  // Margem de contribuição de cada compra (ou mês): o preço menos os custos variáveis
  const margem = ticket - custoDe(e.custos, ticket);
  const margemPct = ticket > 0 ? margem / ticket : 0;
  // No setup só valem os custos em % (imposto, cartão, comissão)
  const margemSetup = temSetup ? setup - custoDe(e.custos.filter((c) => c.modo === '%'), setup) : 0;

  // Quantas compras (ou meses pagos) o cliente faz na vida e por quanto tempo fica
  const compras = e.tipo === 'unica' ? 1 : e.tipo === 'recompra' ? Math.max(e.comprasAno * e.anos, 1) : 1 / churn;
  const vidaMeses = e.tipo === 'unica' ? null : e.tipo === 'recompra' ? e.anos * 12 : 1 / churn;
  // Margem que o cliente deixa por mês, para o payback
  const margemMes = e.tipo === 'unica' ? null : e.tipo === 'recompra' ? (margem * e.comprasAno) / 12 : margem;

  const receitaVida = ticket * compras + setup;
  const ltv = margem * compras + margemSetup;
  // Receita e margem da 1ª compra (ou 1º mês com o setup)
  const receitaPrimeira = ticket + setup;
  const margemPrimeira = margem + margemSetup;

  const outrosAquisicao = e.custosAquisicao.reduce((t, c) => t + c.valor, 0);
  const cacInformado = e.clientesNovos > 0 ? (e.investimento + outrosAquisicao) / e.clientesNovos : 0;
  const cac = cacInformado * (1 + aj.cacPct / 100);
  // Quanto do CAC é mídia e quanto é time/ferramentas (com o ajuste do simulador)
  const cacMidia = e.clientesNovos > 0 ? (e.investimento * (1 + aj.cacPct / 100)) / e.clientesNovos : 0;
  const ltvCac = cac > 0 ? ltv / cac : null;
  const cacMaximo = CENARIOS.map((c) => ({ ...c, valor: Math.max(ltv, 0) * c.pct }));
  const moderado = cacMaximo[1].valor;

  // Payback (fórmula da planilha): CAC ÷ margem que o cliente deixa por mês. O setup, que entra na hora, abate o CAC antes
  const faltaPagar = Math.max(cac - margemSetup, 0);
  const paybackMeses = margemMes == null ? null : faltaPagar === 0 ? 0 : margemMes > 0 ? faltaPagar / margemMes : Infinity;
  // Venda única: quantas vendas de margem pagam um CAC
  const vendasParaPagar = margemPrimeira > 0 ? cac / margemPrimeira : Infinity;

  const clientes = e.clientesNovos;
  // Investimento total (mídia + outros custos de aquisição) para o ROI; o ROAS é só sobre a mídia
  const investimento = cac * clientes;
  const midia = cacMidia * clientes;
  const roasPrimeira = midia > 0 ? (clientes * receitaPrimeira) / midia : null;
  const roasVida = midia > 0 ? (clientes * receitaVida) / midia : null;
  const roiPrimeira = investimento > 0 ? (clientes * margemPrimeira - investimento) / investimento : null;
  const roiVida = investimento > 0 ? (clientes * ltv - investimento) / investimento : null;
  // ROAS que empata a mídia com a margem da 1ª venda: abaixo disso, cada venda nova dá prejuízo até recomprar
  const roasEmpate = margemPct > 0 ? 1 / margemPct : null;
  const cplMaximo = e.conversaoLead > 0 ? moderado * (e.conversaoLead / 100) : null;

  return {
    ticket,
    setup,
    margem,
    margemPct,
    margemSetup,
    compras,
    vidaMeses,
    receitaVida,
    ltv,
    cac,
    cacInformado,
    cacMidia,
    outrosAquisicao,
    ltvCac,
    cacMaximo,
    paybackMeses,
    vendasParaPagar,
    roasPrimeira,
    roasVida,
    roiPrimeira,
    roiVida,
    roasEmpate,
    cplMaximo,
    churn: churn * 100,
  };
}

// Leitura do LTV:CAC: abaixo de 1 perde dinheiro, de 1 a 3 paga mas aperta, 3 ou mais é saudável
export function saudeLtvCac(r: number | null) {
  if (r == null) return { tom: 'neutro' as const, rotulo: 'Informe investimento e clientes' };
  if (r < 1) return { tom: 'ruim' as const, rotulo: 'Cada cliente custa mais do que deixa' };
  if (r < 3) return { tom: 'atencao' as const, rotulo: 'Paga a aquisição, mas com pouca folga' };
  return { tom: 'bom' as const, rotulo: 'Saudável: espaço para investir mais' };
}

// Calculadora em branco (versão final: a pessoa preenche ou usa o exemplo)
export const VAZIO: Entradas = {
  ...EXEMPLO,
  tipo: 'unica',
  ticket: 0,
  setup: 0,
  custos: EXEMPLO.custos.map((c) => ({ ...c, valor: 0 })),
  investimento: 0,
  clientesNovos: 0,
  conversaoLead: 0,
};
