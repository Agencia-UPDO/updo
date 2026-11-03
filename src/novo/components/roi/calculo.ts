// Contas da calculadora de ROI e ROAS (base: aba "Calculadora de ROI" da planilha da UPDO), sem nada de tela.
// A pessoa informa o que investiu numa campanha (ou num período), quantas vendas fez, o faturamento e a margem;
// a calculadora mostra o ROI e o ROAS diretos e, se o cliente volta a comprar, os mesmos números na vida do cliente.

export type Entradas = {
  investimento: number;
  vendas: number;
  faturamento: number;
  // Margem de contribuição: em % do faturamento ou em R$ por venda
  margemModo: '%' | 'R$';
  margem: number;
  // Quantas vezes, em média, o cliente compra (ou paga a mensalidade) na vida; 0 ou 1 = só a venda da campanha
  vezes: number;
};

// Exemplo fictício (não é de nenhum cliente): campanha de R$ 8 mil com 40 vendas de R$ 900, margem de 35% e 3 compras na vida
export const EXEMPLO: Entradas = { investimento: 8000, vendas: 40, faturamento: 36000, margemModo: '%', margem: 35, vezes: 3 };

export const VAZIO: Entradas = { investimento: 0, vendas: 0, faturamento: 0, margemModo: '%', margem: 0, vezes: 0 };

export type Veredito = 'lucro' | 'empate' | 'prejuizo';

export type Resultado = ReturnType<typeof calcular>;

// Até 2% do investimento para cima ou para baixo conta como empate
const FOLGA_EMPATE = 0.02;
const veredito = (lucro: number, inv: number): Veredito => (Math.abs(lucro) <= inv * FOLGA_EMPATE ? 'empate' : lucro > 0 ? 'lucro' : 'prejuizo');

export function calcular(e: Entradas) {
  const inv = Math.max(e.investimento, 0);
  const vendas = Math.max(e.vendas, 0);
  const faturamento = Math.max(e.faturamento, 0);
  const margemTotal = e.margemModo === '%' ? (faturamento * e.margem) / 100 : vendas * e.margem;
  const margemPct = faturamento > 0 ? margemTotal / faturamento : 0;

  const cac = vendas > 0 ? inv / vendas : null;
  const ticket = vendas > 0 ? faturamento / vendas : null;

  // Direto: só as vendas da campanha
  const roas = inv > 0 ? faturamento / inv : null;
  const lucro = margemTotal - inv;
  const roi = inv > 0 ? lucro / inv : null;
  // ROAS em que a margem paga exatamente o investimento
  const roasEmpate = margemPct > 0 ? 1 / margemPct : null;

  // Na vida do cliente: cada cliente compra "vezes" vezes no mesmo ticket e na mesma margem
  const vezes = Math.max(e.vezes, 1);
  const temVida = vezes > 1;
  const faturamentoVida = faturamento * vezes;
  const margemVida = margemTotal * vezes;
  const roasVida = inv > 0 ? faturamentoVida / inv : null;
  const lucroVida = margemVida - inv;
  const roiVida = inv > 0 ? lucroVida / inv : null;
  // LTV (margem que cada cliente deixa na vida) e quantas vezes ele devolve o que custou
  const ltv = vendas > 0 ? margemVida / vendas : null;
  const ltvCac = ltv != null && cac ? ltv / cac : null;

  const direto = veredito(lucro, inv);
  const naVida = veredito(lucroVida, inv);

  return {
    inv,
    vendas,
    faturamento,
    margemTotal,
    margemPct,
    cac,
    ticket,
    roas,
    lucro,
    roi,
    roasEmpate,
    vezes,
    temVida,
    faturamentoVida,
    margemVida,
    roasVida,
    lucroVida,
    roiVida,
    ltv,
    ltvCac,
    direto,
    naVida,
  };
}

// Tem o mínimo para calcular
export const completo = (e: Entradas) => e.investimento > 0 && e.vendas > 0 && e.faturamento > 0 && e.margem > 0;

// ROI como múltiplo ("1,5x"), igual à calculadora de CAC
export const roiMultiplo = (roi: number | null) => (roi == null || !Number.isFinite(roi) ? '—' : `${roi.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}x`);

// O ROI numa frase simples: "Cada R$ 1 investido voltou R$ 0,58 de lucro."
export const roiFrase = (roi: number | null, quando = '') => {
  if (roi == null || !Number.isFinite(roi)) return '';
  const valor = Math.abs(roi).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return roi >= 0 ? `Cada R$ 1 investido voltou R$ ${valor} de lucro${quando}, depois de pagar o investimento.` : `Cada R$ 1 investido deu R$ ${valor} de prejuízo${quando}.`;
};

// Leitura do resultado em uma frase, com a cor (verde, amarelo, vermelho)
export function leitura(r: Resultado): { cor: 'verde' | 'amarelo' | 'vermelho'; titulo: string; texto: string } {
  const vida = `na vida do cliente (${r.vezes.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} compras)`;
  if (r.direto === 'lucro') return { cor: 'verde', titulo: 'A campanha deu lucro', texto: 'A margem das vendas já pagou o investimento e sobrou lucro, sem contar recompra.' };
  if (r.direto === 'empate')
    return r.temVida && r.naVida === 'lucro'
      ? { cor: 'amarelo', titulo: 'A campanha empatou', texto: `Na primeira venda, a margem só pagou o investimento. O lucro vem com a recompra, ${vida}.` }
      : { cor: 'amarelo', titulo: 'A campanha empatou', texto: 'A margem das vendas pagou o investimento, mas não sobrou lucro.' };
  if (r.temVida && r.naVida === 'lucro') return { cor: 'amarelo', titulo: 'Deu prejuízo na primeira venda, mas se paga depois', texto: `A margem da primeira venda não pagou o investimento. Com a recompra, ${vida}, o cliente se paga e dá lucro.` };
  return { cor: 'vermelho', titulo: 'A campanha deu prejuízo', texto: r.temVida ? `Nem com a recompra, ${vida}, a margem paga o investimento.` : 'A margem das vendas não pagou o investimento.' };
}
