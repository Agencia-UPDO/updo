// Contas da calculadora de CAC e LTV (base: planilha LTV x CAC da UPDO), sem nada de tela.
// A pessoa diz o que vende e quantos clientes novos quer por mês; a calculadora mostra quanto ela pode pagar por cliente
// e quanto investir, em 3 cenários de CAC máximo (30%, 40% e 55% do LTV).

export type TipoNegocio = 'unica' | 'recompra' | 'recorrente' | 'setup';

export type Custo = {
  id: string;
  nome: string;
  modo: '%' | 'R$';
  valor: number;
  // Custo que a pessoa adicionou (nome editável, pode remover)
  extra?: boolean;
};

export type Entradas = {
  // Nome do produto ou serviço (opcional; sem nome vira "Produto 1", "Produto 2"...)
  nome: string;
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
  // Quantos clientes novos por mês a pessoa quer
  clientesDesejados: number;
  // De cada 100 leads, quantos viram venda
  conversaoLead: number;
  // A pessoa não sabe a taxa: usamos uma referência conservadora (CONVERSAO_PADRAO), avisando que é estimativa
  conversaoNaoSei: boolean;
  // Segmento do negócio (vai para a RD no campo "Setor da empresa"); "Outro" com o que a pessoa vende
  segmento: string;
  segmentoOutro: string;
};

// Taxa de lead em venda usada quando a pessoa não sabe a dela (conservadora)
export const CONVERSAO_PADRAO = 5;

// Segmentos (os setores do site e os mais comuns entre quem anuncia)
export const SEGMENTOS = [
  'SaaS / Software',
  'Serviços B2B (para empresas)',
  'Serviços B2C (para pessoa física)',
  'Consultoria e serviços profissionais',
  'Advocacia e contabilidade',
  'Indústria',
  'E-commerce',
  'Varejo / Loja física',
  'Educação',
  'Cursos online / Infoprodutos',
  'Saúde / Clínicas',
  'Estética e beleza',
  'Imobiliário / Construção',
  'Financeiro / seguros / consórcio',
  'Franquias',
  'Turismo e eventos',
  'Alimentação',
  'Automotivo',
  'Agronegócio',
  'Outro',
];

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
  nome: 'Linha de cosméticos',
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
  clientesDesejados: 20,
  conversaoLead: 8,
  conversaoNaoSei: false,
  segmento: 'Varejo / Loja física',
  segmentoOutro: '',
};

// Calculadora em branco (a pessoa preenche ou usa o exemplo)
export const VAZIO: Entradas = {
  ...EXEMPLO,
  nome: '',
  tipo: 'unica',
  ticket: 0,
  setup: 0,
  custos: EXEMPLO.custos.map((c) => ({ ...c, valor: 0 })),
  clientesDesejados: 0,
  conversaoLead: 0,
  conversaoNaoSei: false,
  segmento: '',
};

// Ajustes do simulador: ticket em % sobre o informado; churn e clientes substituem o informado (null = sem ajuste)
export type Ajustes = { ticketPct: number; churn: number | null; clientes: number | null };

export type Resultado = ReturnType<typeof calcular>;

const custoDe = (custos: Custo[], preco: number) => custos.reduce((t, c) => t + (c.modo === '%' ? (preco * c.valor) / 100 : c.valor), 0);

export function calcular(e: Entradas, aj: Ajustes = { ticketPct: 0, churn: null, clientes: null }) {
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
  const margemPrimeira = margem + margemSetup;
  // ROAS que empata a mídia com a margem da 1ª venda: abaixo disso, cada venda nova dá prejuízo até recomprar
  const roasEmpate = margemPct > 0 ? 1 / margemPct : null;

  // Plano para trazer N clientes por mês em cada cenário (planilha LTV x CAC):
  // CAC máximo = % do LTV; investimento = clientes × CAC; o retorno é na vida dos clientes
  const desejados = Math.max(aj.clientes ?? e.clientesDesejados, 0);
  const conversaoUsada = e.conversaoNaoSei ? CONVERSAO_PADRAO : e.conversaoLead;
  const conversao = conversaoUsada > 0 ? conversaoUsada / 100 : null;
  const plano = CENARIOS.map((cen) => {
    const cac = Math.max(ltv, 0) * cen.pct;
    const investimento = cac * desejados;
    const receita = receitaVida * desejados;
    const lucro = ltv * desejados - investimento;
    // Payback: CAC ÷ margem por mês (o setup, que entra na hora, abate antes). Venda única: quantas vendas de margem pagam o CAC
    const faltaPagar = Math.max(cac - margemSetup, 0);
    const payback = margemMes == null ? null : faltaPagar === 0 ? 0 : margemMes > 0 ? faltaPagar / margemMes : Infinity;
    return {
      ...cen,
      cac,
      investimento,
      receita,
      lucro,
      roi: investimento > 0 ? lucro / investimento : null,
      roas: investimento > 0 ? receita / investimento : null,
      ltvCac: 1 / cen.pct,
      payback,
      vendasParaPagar: margemPrimeira > 0 ? cac / margemPrimeira : Infinity,
      // Com a taxa de lead em venda: quantos leads por mês e quanto cada lead pode custar
      leads: conversao ? desejados / conversao : null,
      cpl: conversao ? cac * conversao : null,
    };
  });

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
    roasEmpate,
    desejados,
    plano,
    // Taxa de lead em venda usada nas contas (em %) e se é a referência padrão
    conversaoUsada,
    conversaoEstimada: e.conversaoNaoSei,
    churn: churn * 100,
  };
}

// Em quanto tempo o retorno acontece (a vida do cliente): "em 20 meses", ou "na venda" quando é venda única
export const horizonte = (r: Resultado) => (r.vidaMeses == null ? 'na venda' : `em ${Math.round(r.vidaMeses)} meses`);

// ROI como múltiplo ("2,3x") e em uma frase simples, para não parecer exagerado
export const roiMultiplo = (roi: number | null) => (roi == null || !Number.isFinite(roi) ? '—' : `${roi.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}x`);
export const roiFrase = (roi: number | null, r: Resultado) =>
  roi == null || !Number.isFinite(roi)
    ? ''
    : roi >= 0
      ? `Cada R$ 1 investido volta R$ ${roi.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} de lucro ${horizonte(r)}.`
      : `Cada R$ 1 investido perde R$ ${Math.abs(roi).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${horizonte(r)}.`;

// Vários produtos na mesma calculadora (análise por produto)
export type Produto = { id: string; e: Entradas };
export const MAX_PRODUTOS = 6;
export const nomeProduto = (p: Produto, i: number) => p.e.nome.trim() || `Produto ${i + 1}`;
