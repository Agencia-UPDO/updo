// Contas da projeção de vendas e sazonalidade (base: planilha "Projeção com regressão" da UPDO), sem nada de tela.
// Decomposição clássica multiplicativa: tendência pela média móvel centrada 2x12, índice sazonal = real ÷ tendência
// (média de todos os anos, sem os pontos fora da curva), projeção pela regressão dos totais anuais.
// Os anos são sempre relativos a hoje: o histórico são os anos fechados antes do ano atual, o ano atual vai até o último mês fechado
// e a meta é a do próximo ano.

export const MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
export const MESES_CURTOS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

export type Medida = 'faturamento' | 'vendas';
export type Ano = { ano: number; valores: (number | null)[] };
export type Cenario = 'conservador' | 'tendencia' | 'agressivo' | 'meta';

export type Entradas = {
  medida: Medida;
  // Anos fechados antes do ano atual (12 meses cada), do mais antigo ao mais recente
  historico: Ano[];
  // Realizado do ano atual, mês a mês (null = mês ainda não fechou ou não informado)
  atual: (number | null)[];
  // Quanto o agressivo fica acima da tendência, em %
  extraAgressivo: number;
  // Meta do próximo ano digitada pela pessoa (0 = não informou)
  metaPropria: number;
};

// Ano atual e último mês fechado (hoje: novembro/2026 → outubro, índice 9). Em janeiro, nenhum mês do ano fechou ainda (-1)
export function hoje(data = new Date()) {
  return { ano: data.getFullYear(), ultimoMes: data.getMonth() - 1 };
}

// Projeção em branco: 3 anos fechados antes do atual e o ano atual sem realizado
export const vazio = (data = new Date()): Entradas => ({ medida: 'faturamento', historico: historicoVazio(3, data), atual: Array(12).fill(null), extraAgressivo: 10, metaPropria: 0 });

// Histórico vazio com N anos fechados antes do atual
export const historicoVazio = (n: number, data = new Date()): Ano[] => Array.from({ length: n }, (_, i) => ({ ano: hoje(data).ano - n + i, valores: Array(12).fill(null) }));

const media = (v: number[]) => (v.length ? v.reduce((t, x) => t + x, 0) / v.length : 0);
function regressao(xs: number[], ys: number[]) {
  const mx = media(xs);
  const my = media(ys);
  const den = xs.reduce((t, x) => t + (x - mx) ** 2, 0);
  const b = den ? xs.reduce((t, x, i) => t + (x - mx) * (ys[i] - my), 0) / den : 0;
  return { a: my - b * mx, b };
}

// Anos com os 12 meses preenchidos
export const anosCompletos = (h: Ano[]) => h.filter((a) => a.valores.length === 12 && a.valores.every((v) => v != null && Number.isFinite(v) && v >= 0));

export function calcular(e: Entradas, data = new Date()) {
  const { ano: anoAtual, ultimoMes } = hoje(data);
  const anos = anosCompletos(e.historico).filter((a) => a.ano < anoAtual);
  const x = anos.flatMap((a) => a.valores as number[]);
  const n = x.length;
  const ok = anos.length >= 2;

  // Média móvel centrada 2x12 (pesos 1/24 nas pontas e 1/12 no meio): a tendência sem a sazonalidade
  const mm: (number | null)[] = x.map((_, t) => {
    if (t < 6 || t > n - 7) return null;
    let s = 0.5 * x[t - 6] + 0.5 * x[t + 6];
    for (let k = t - 5; k <= t + 5; k++) s += x[k];
    return s / 12;
  });
  // Pontas (6 meses de cada lado) pela regressão linear da média móvel
  const pts = mm.map((v, t) => (v == null ? null : ([t, v] as const))).filter((p): p is readonly [number, number] => p != null);
  const reg = regressao(
    pts.map((p) => p[0]),
    pts.map((p) => p[1]),
  );
  const tendencia = mm.map((v, t) => v ?? reg.a + reg.b * t);

  // Índice sazonal: real ÷ tendência, por mês, na média de todos os anos (sem os pontos fora da curva)
  const razoes = x.map((v, t) => (tendencia[t] > 0 ? v / tendencia[t] : 1));
  const brutoMes = MESES.map((_, m) => razoes.filter((_, t) => t % 12 === m));
  const mediaMes = brutoMes.map(media);
  const desvios = razoes.map((r, t) => r - mediaMes[t % 12]);
  const dp = Math.sqrt(media(desvios.map((d) => d * d)));
  const foraDaCurva = anos.length >= 3 && dp > 0 ? razoes.map((_, t) => Math.abs(desvios[t]) > 2 * dp) : razoes.map(() => false);
  const indiceBruto = MESES.map((_, m) => {
    const bons = razoes.filter((_, t) => t % 12 === m && !foraDaCurva[t]);
    return media(bons.length ? bons : brutoMes[m]);
  });
  const somaIdx = indiceBruto.reduce((t, v) => t + v, 0) || 12;
  const indice = indiceBruto.map((v) => (v * 12) / somaIdx);
  const peso = indice.map((v) => v / 12);

  // Totais anuais e crescimento
  const totais = anos.map((a) => (a.valores as number[]).reduce((t, v) => t + v, 0));
  const ultimo = totais[totais.length - 1] ?? 0;
  const cagr = totais.length >= 2 && totais[0] > 0 ? (ultimo / totais[0]) ** (1 / (totais.length - 1)) - 1 : null;
  const regAno = regressao(
    totais.map((_, i) => i),
    totais,
  );
  // Meta do ano atual pela tendência dos anos fechados
  const metaAtual = Math.max(regAno.a + regAno.b * totais.length, 0);

  // Ano atual: realizado até o último mês fechado
  const realizado = e.atual.map((v, m) => (m <= ultimoMes && v != null && Number.isFinite(v) ? v : null));
  const mesesReal = realizado.map((v, m) => (v != null ? m : -1)).filter((m) => m >= 0);
  const ateMes = mesesReal.length ? Math.max(...mesesReal) : -1;
  const ytdAtual = realizado.reduce<number>((t, v) => t + (v ?? 0), 0);
  // Mesmo período (jan até o último mês com realizado) em cada ano do histórico
  const ytdAnos = anos.map((a) => ({ ano: a.ano, valor: (a.valores as number[]).reduce((t, v, m) => (realizado[m] != null ? t + v : t), 0) }));
  const ytdAnterior = ytdAnos[ytdAnos.length - 1]?.valor ?? 0;

  // Modelo do ano atual (tendência levada adiante × sazonalidade), ajustado ao ritmo do que já aconteceu no ano
  const modeloAtual = MESES.map((_, m) => Math.max(reg.a + reg.b * (n + m), 0) * indice[m]);
  const modeloYtd = modeloAtual.reduce((t, v, m) => (realizado[m] != null ? t + v : t), 0);
  const ritmo = mesesReal.length && modeloYtd > 0 ? Math.min(Math.max(ytdAtual / modeloYtd, 0.5), 1.5) : 1;
  const previstoMes = MESES.map((_, m) => realizado[m] ?? modeloAtual[m] * ritmo);
  const fechamentoAtual = previstoMes.reduce((t, v) => t + v, 0);
  // Ritmo linear do ano (regra do Radar): reta pela origem ajustada ao acumulado realizado mês a mês (mínimos quadrados),
  // independente da sazonalidade. ritmoMes = quanto o ano acumula por mês nesse ritmo; ritmoAno = onde a reta chega em dezembro
  const acumReal = realizado.reduce<number[]>((a, v, m) => (m <= ateMes ? [...a, (a[m - 1] ?? 0) + (v ?? 0)] : a), []);
  const sxy = acumReal.reduce((t, y, m) => t + (m + 1) * y, 0);
  const sxx = acumReal.reduce((t, _, m) => t + (m + 1) ** 2, 0);
  const ritmoMes = sxx ? sxy / sxx : null;
  const ritmoAno = ritmoMes == null ? null : ritmoMes * 12;

  // Próximo ano: regressão dos totais incluindo o fechamento previsto do ano atual
  const totaisComAtual = [...totais, fechamentoAtual];
  const regProx = regressao(
    totaisComAtual.map((_, i) => i),
    totaisComAtual,
  );
  const tendenciaProx = Math.max(regProx.a + regProx.b * totaisComAtual.length, 0);
  // Qualidade do ajuste da reta anual (R²): perto de 1 = crescimento bem regular
  const mediaTot = media(totaisComAtual);
  const ssTot = totaisComAtual.reduce((t, v) => t + (v - mediaTot) ** 2, 0);
  const ssRes = totaisComAtual.reduce((t, v, i) => t + (v - (regProx.a + regProx.b * i)) ** 2, 0);
  const r2Ano = ssTot > 0 ? 1 - ssRes / ssTot : null;
  const crescTend = fechamentoAtual > 0 ? tendenciaProx / fechamentoAtual - 1 : 0;
  const cenarios: Record<Exclude<Cenario, 'meta'>, number> = {
    conservador: crescTend > 0 ? fechamentoAtual * (1 + crescTend / 2) : tendenciaProx * 0.97,
    tendencia: tendenciaProx,
    agressivo: tendenciaProx * (1 + e.extraAgressivo / 100),
  };

  // Ano atual mês a mês: meta (tendência × peso), realizado e previsto para os meses que faltam
  let accMeta = 0;
  let accReal = 0;
  const acompanhamento = MESES.map((_, m) => {
    const meta = metaAtual * peso[m];
    accMeta += meta;
    const real = realizado[m];
    if (real != null) accReal += real;
    return { mes: m, meta, metaAcum: accMeta, real, previsto: real == null ? previstoMes[m] : null, pctMes: real != null && meta ? real / meta : null, pctAcum: real != null && accMeta ? accReal / accMeta : null };
  });
  // Próximo ano mês a mês
  const planejar = (anual: number) => {
    let acc = 0;
    return MESES.map((_, m) => {
      const meta = anual * peso[m];
      acc += meta;
      return { mes: m, peso: peso[m], indice: indice[m], meta, metaAcum: acc };
    });
  };

  const ordem = indice.map((v, m) => ({ m, v })).sort((a, b) => b.v - a.v);
  const pontosFora = foraDaCurva
    .map((f, t) => (f ? { ano: anos[Math.floor(t / 12)].ano, mes: t % 12 } : null))
    .filter((p): p is { ano: number; mes: number } => p != null);

  return {
    ok,
    anoAtual,
    proximoAno: anoAtual + 1,
    ultimoMes,
    anos,
    x,
    mm,
    tendencia,
    // Série sem a sazonalidade (real ÷ índice do mês), do histórico e do ano atual
    dessazonalizado: [...x, ...realizado].map((v, t) => (v == null ? null : v / (indice[t % 12] || 1))),
    totaisComAtual,
    regProx,
    r2Ano,
    indice,
    peso,
    totais,
    ultimo,
    cagr,
    metaAtual,
    realizado,
    ateMes,
    ytdAtual,
    ytdAnos,
    ytdAnterior,
    ritmo,
    previstoMes,
    fechamentoAtual,
    acumReal,
    ritmoMes,
    ritmoAno,
    tendenciaProx,
    cenarios,
    acompanhamento,
    planejar,
    forte: ordem[0],
    fraco: ordem[ordem.length - 1],
    ranking: ordem,
    amplitude: ordem.length ? ordem[0].v / Math.max(ordem[ordem.length - 1].v, 0.0001) - 1 : 0,
    pontosFora,
  };
}

export type Resultado = ReturnType<typeof calcular>;

export const valorDoCenario = (r: Resultado, c: Cenario, metaPropria: number) => (c === 'meta' ? metaPropria : r.cenarios[c]);

// "jan a out" (período do acumulado do ano)
export const periodoYtd = (r: Resultado) => (r.ateMes < 0 ? '' : r.ateMes === 0 ? 'jan' : `jan a ${MESES_CURTOS[r.ateMes]}`);

// Leitura em linguagem simples (aparece na tela e no PDF)
export function insights(r: Resultado, e: Entradas, anualProx: number) {
  const fmt = (v: number) => `${Math.round(Math.abs(v) * 100)}%`;
  const valor = (v: number) => (e.medida === 'faturamento' ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }) : `${Math.round(v).toLocaleString('pt-BR')} vendas`);
  const lista: string[] = [];
  if (!r.ok) return lista;
  if (r.ateMes >= 0 && r.ytdAnterior) {
    const d = r.ytdAtual / r.ytdAnterior - 1;
    lista.push(`${r.ateMes === 0 ? 'Em' : 'De'} ${periodoYtd(r)} de ${r.anoAtual}: ${valor(r.ytdAtual)}, ${d >= 0 ? `${fmt(d)} acima` : `${fmt(d)} abaixo`} do mesmo período de ${r.anoAtual - 1}.`);
  }
  if (r.ultimo) {
    const d = r.fechamentoAtual / r.ultimo - 1;
    lista.push(`${r.ateMes >= 0 ? 'No ritmo atual' : 'Pela tendência'}, ${r.anoAtual} fecha em torno de ${valor(r.fechamentoAtual)}, ${d >= 0 ? `${fmt(d)} acima` : `${fmt(d)} abaixo`} de ${r.anoAtual - 1}${r.metaAtual ? ` e ${r.fechamentoAtual >= r.metaAtual ? 'acima' : 'abaixo'} da tendência (${valor(r.metaAtual)})` : ''}.`);
  }
  lista.push(`${MESES[r.forte.m]} é o mês mais forte: vende ${fmt(r.forte.v - 1)} acima da média. Prepare estoque, equipe e mídia antes dele.`);
  lista.push(`${MESES[r.fraco.m]} é o mês mais fraco: ${fmt(1 - r.fraco.v)} abaixo da média. Bom momento para promoções, relacionamento ou campanhas para puxar a demanda.`);
  const fortes = r.ranking.filter((x) => x.v >= 1.1);
  const fracos = r.ranking.filter((x) => x.v <= 0.9).reverse();
  if (fortes.length > 1) lista.push(`Meses acima da média (10% ou mais): ${fortes.map((x) => MESES[x.m].toLowerCase()).join(', ')}.`);
  if (fracos.length > 1) lista.push(`Meses abaixo da média (10% ou mais): ${fracos.map((x) => MESES[x.m].toLowerCase()).join(', ')}.`);
  if (r.cagr != null) lista.push(`${r.cagr >= 0 ? 'Crescimento' : 'Queda'} médio de ${fmt(r.cagr)} ao ano de ${r.anos[0].ano} a ${r.anos[r.anos.length - 1].ano}.`);
  if (r.fechamentoAtual) lista.push(`A meta de ${r.proximoAno} (${valor(anualProx)}) é ${anualProx >= r.fechamentoAtual ? `${fmt(anualProx / r.fechamentoAtual - 1)} acima` : `${fmt(1 - anualProx / r.fechamentoAtual)} abaixo`} do fechamento previsto de ${r.anoAtual}.`);
  if (r.pontosFora.length) lista.push(`Pontos fora da curva (não entraram na sazonalidade): ${r.pontosFora.map((p) => `${MESES_CURTOS[p.mes]}/${String(p.ano).slice(2)}`).join(', ')}. Vale entender o que aconteceu nesses meses.`);
  return lista;
}

// Lê números colados do Excel ("184.234,13", "R$ 1.234", "184234.13")
export function lerNumero(s: string): number | null {
  let t = s.replace(/R\$|\s/g, '');
  if (!t) return null;
  if (t.includes(',')) t = t.replace(/\./g, '').replace(',', '.');
  else if ((t.match(/\./g) ?? []).length > 1) t = t.replace(/\./g, '');
  const v = Number(t);
  return Number.isFinite(v) ? v : null;
}

// Texto colado → anos. Aceita uma linha por ano (12 colunas, com ou sem o ano na frente) ou 12 linhas (meses) com um ano por coluna.
// Sem o ano escrito, os anos terminam no ano anterior ao atual
export function lerColado(texto: string, data = new Date()): Ano[] {
  const linhas = texto
    .split(/\r?\n/)
    .map((l) => l.split(/\t|;/).map((c) => c.trim()))
    .filter((l) => l.some((c) => c));
  if (!linhas.length) return [];
  const ehAno = (c: string) => /^(19|20)\d{2}$/.test(c);
  const semRotulo = linhas.map((l) => (lerNumero(l[0]) == null || ehAno(l[0]) ? { rotulo: l[0], cels: l.slice(1) } : { rotulo: '', cels: l }));
  const numeros = semRotulo.map((l) => l.cels.map(lerNumero));
  const ultimoAno = hoje(data).ano - 1;
  if (numeros.length >= 12 && numeros.every((l) => l.length <= 6)) {
    const cols = Math.max(...numeros.slice(0, 12).map((l) => l.length));
    return Array.from({ length: cols }, (_, c) => ({ ano: ultimoAno - cols + 1 + c, valores: numeros.slice(0, 12).map((l) => l[c] ?? null) }));
  }
  return numeros.map((l, i) => ({
    ano: ehAno(semRotulo[i].rotulo) ? Number(semRotulo[i].rotulo) : ultimoAno - numeros.length + 1 + i,
    valores: Array.from({ length: 12 }, (_, m) => l[m] ?? null),
  }));
}
