'use client';

import { COR, Grafico, eixoBase, tooltipBase } from '@/novo/components/ferramentas/grafico';
import { useMemo } from 'react';
import { MESES, MESES_CURTOS, type Resultado } from './calculo';

// Gráficos da projeção de vendas (ECharts). fmt formata no modo escolhido: R$ no faturamento, quantidade no número de vendas
type Fmt = (v: number, curto?: boolean) => string;

const VERDE = '#10c49c';
const VERMELHO = '#ef4444';
const AZUL = '#6575ff';
const LARANJA = '#f59e0b';
const CINZA_BARRA = 'rgba(148,163,184,0.28)';
// Linha da receita acumulada (laranja escuro, como na planilha)
const ACUM = '#ea580c';
// Tons de lilás para os anos do histórico (do mais antigo, mais claro, ao mais recente)
const TONS_ANOS = ['#d5d9ff', '#b4bcff', '#8e9aff', '#6575ff', '#3f4bd1'];
// Legenda no estilo de cada série: linha com bolinha, linha tracejada ou quadradinho (barras)
const legenda = { top: 0, left: 0, itemWidth: 26, itemHeight: 11, itemGap: 16, textStyle: { color: COR.cinza, fontSize: 11 } };
const gradiente = (cor: string, a = 0.18) => ({ type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: hexA(cor, a) }, { offset: 1, color: hexA(cor, 0) }] });
function hexA(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
const linhaTooltip = (cor: string, nome: string, valor: string) =>
  `<div style="display:flex;justify-content:space-between;gap:24px"><span><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${cor};margin-right:6px"></span>${nome}</span><b>${valor}</b></div>`;
const atingido = (feito: number, alvo: number) => {
  const v = Math.round((feito / alvo) * 100);
  return ` <span style="font-weight:600;color:${v >= 100 ? '#56fed5' : '#fca5a5'}">· ${v}%</span>`;
};

// 1. Acumulado do ano × meta (como o gráfico de projeção do Radar): meta acumulada pontilhada, realizado verde acima e vermelho abaixo,
// projeção no ritmo tracejada até dezembro, vendas de cada mês em barras e o ano anterior de referência
export function GraficoAcumulado({ r, fmt }: { r: Resultado; fmt: Fmt }) {
  const option = useMemo(() => {
    const ate = r.ateMes;
    const metaAc = r.acompanhamento.map((l) => l.metaAcum);
    const realAc: number[] = [];
    r.realizado.forEach((v, m) => {
      if (m <= ate) realAc.push((realAc[m - 1] ?? 0) + (v ?? 0));
    });
    // Projeção: reta independente do realizado (ritmo do ano pela origem até dezembro), como no Radar.
    // Sem nenhum mês fechado, vale a previsão com sazonalidade
    const projAc: number[] =
      r.ritmoMes != null ? MESES.map((_, m) => r.ritmoMes! * (m + 1)) : r.previstoMes.reduce<number[]>((a, v, m) => [...a, (a[m - 1] ?? 0) + v], []);
    const anterior = r.anos[r.anos.length - 1];
    const antAc = anterior ? (anterior.valores as number[]).reduce<number[]>((a, v, k) => [...a, (a[k - 1] ?? 0) + v], []) : [];

    // Realizado cortado no cruzamento com a meta (eixo x numérico escondido), para pintar de verde o que está acima e de vermelho o que está abaixo
    const pedacos: { de: number[]; ate: number[]; verde: boolean }[] = [];
    for (let i = 1; i <= ate; i++) {
      const d0 = realAc[i - 1] - metaAc[i - 1];
      const d1 = realAc[i] - metaAc[i];
      const de = [i - 1, realAc[i - 1]];
      const fim = [i, realAc[i]];
      if ((d0 < 0 && d1 > 0) || (d0 > 0 && d1 < 0)) {
        const t = d0 / (d0 - d1);
        const corte = [i - 1 + t, realAc[i - 1] + t * (realAc[i] - realAc[i - 1])];
        pedacos.push({ de, ate: corte, verde: d0 > 0 }, { de: corte, ate: fim, verde: d1 > 0 });
      } else pedacos.push({ de, ate: fim, verde: d0 >= 0 && d1 >= 0 });
    }
    if (ate === 0) pedacos.push({ de: [0, realAc[0]], ate: [0, realAc[0]], verde: realAc[0] >= metaAc[0] });
    const fechamento = projAc[11] ?? 0;

    return {
      animationDuration: 800,
      grid: { left: 8, right: Math.max(fmt(fechamento, true).length + 9, fmt(metaAc[11], true).length + 5) * 7.3 + 10, top: 34, bottom: 4, containLabel: true },
      legend: { ...legenda, data: ['Realizado acima da meta', 'Realizado abaixo da meta', 'Meta acumulada', 'Projeção', `${anterior?.ano ?? ''} acumulado`] },
      tooltip: {
        ...tooltipBase,
        confine: true,
        formatter: (params: { dataIndex: number }[]) => {
          const i = params[0]?.dataIndex ?? 0;
          const passado = i <= ate;
          const metaMes = r.acompanhamento[i].meta;
          const sep = (cor: string, nome: string, valor: string) =>
            `<div style="margin-top:6px;padding-top:6px;border-top:1px solid #1f3048;display:flex;justify-content:space-between;gap:24px;color:${cor}"><span>${nome}</span><b>${valor}</b></div>`;
          const titulo = (t: string) => `<div style="margin:6px 0 2px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#7c8ea5">${t}</div>`;
          const mes = passado
            ? linhaTooltip('#94a3b8', 'Vendas no mês', fmt(r.realizado[i] ?? 0)) + linhaTooltip(AZUL, 'Meta do mês', fmt(metaMes) + atingido(r.realizado[i] ?? 0, metaMes))
            : linhaTooltip(LARANJA, 'Previsto no mês', fmt(r.previstoMes[i])) + linhaTooltip(AZUL, 'Meta do mês', fmt(metaMes));
          const acum = passado
            ? linhaTooltip(realAc[i] >= metaAc[i] ? VERDE : VERMELHO, 'Acumulado no ano', fmt(realAc[i])) +
              linhaTooltip(AZUL, 'Meta até este mês', fmt(metaAc[i]) + atingido(realAc[i], metaAc[i])) +
              (realAc[i] >= metaAc[i] ? sep('#56fed5', 'Acima da meta', '+' + fmt(realAc[i] - metaAc[i])) : sep('#fca5a5', 'Abaixo da meta', '−' + fmt(metaAc[i] - realAc[i])))
            : linhaTooltip(LARANJA, 'Projeção no ritmo do ano', fmt(projAc[i])) + linhaTooltip(AZUL, 'Meta até este mês', fmt(metaAc[i]));
          // Contra o ano anterior até o mesmo mês
          const ant = antAc[i];
          const comAnterior =
            anterior && ant != null
              ? linhaTooltip('#cbd5e1', `${anterior.ano} até este mês`, fmt(ant)) +
                (passado
                  ? (() => {
                      const d = realAc[i] - ant;
                      const cor = d >= 0 ? '#56fed5' : '#fca5a5';
                      return `<div style="display:flex;justify-content:space-between;gap:24px;color:${cor}"><span>vs ${anterior.ano}</span><b>${d >= 0 ? '+' : '−'}${fmt(Math.abs(d))} (${d >= 0 ? '+' : '−'}${Math.round(Math.abs(d / ant) * 100)}%)</b></div>`;
                    })()
                  : '')
              : '';
          return `<div style="min-width:250px"><div style="color:#9aa8bb">${MESES[i]} de ${r.anoAtual}</div>${titulo('Mês')}${mes}${titulo('Ano')}${acum}${comAnterior ? titulo(`Contra ${anterior?.ano}`) + comAnterior : ''}</div>`;
        },
      },
      xAxis: [
        { type: 'category', data: MESES_CURTOS, boundaryGap: false, ...eixoBase, splitLine: { show: false } },
        { type: 'value', min: 0, max: 11, show: false },
      ],
      yAxis: [
        { type: 'value', min: 0, ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
        { type: 'value', min: 0, max: (v: { max: number }) => Math.max(v.max * 2.4, 1), show: false },
      ],
      series: [
        {
          name: 'Vendas no mês',
          type: 'bar',
          yAxisIndex: 1,
          barMaxWidth: 26,
          silent: true,
          data: r.realizado.map((v, m) => (m <= ate ? v : null)),
          itemStyle: { color: CINZA_BARRA, borderRadius: [4, 4, 0, 0] },
          markLine:
            ate >= 0
              ? {
                  silent: true,
                  symbol: 'none',
                  lineStyle: { color: '#94a3b8', type: 'solid', width: 1 },
                  label: { formatter: 'HOJE', color: COR.cinza, fontSize: 10, fontWeight: 700, position: 'end' },
                  data: [{ xAxis: MESES_CURTOS[ate] }],
                }
              : undefined,
        },
        {
          name: `${anterior?.ano ?? ''} acumulado`,
          type: 'line',
          smooth: 0.3,
          symbol: 'none',
          data: antAc,
          lineStyle: { color: '#cbd5e1', width: 1.5 },
          itemStyle: { color: '#cbd5e1' },
        },
        {
          name: 'Meta acumulada',
          type: 'line',
          symbol: 'none',
          data: metaAc,
          lineStyle: { color: AZUL, width: 2, type: 'dotted' },
          itemStyle: { color: AZUL },
          endLabel: { show: true, formatter: () => `meta ${fmt(metaAc[11], true)}`, color: AZUL, fontSize: 11.5, fontWeight: 600, offset: [0, metaAc[11] >= fechamento ? -9 : 9] },
        },
        {
          name: 'Projeção',
          type: 'line',
          symbol: 'none',
          data: projAc,
          lineStyle: { color: LARANJA, width: 2.5, type: 'dashed' },
          itemStyle: { color: LARANJA },
          endLabel: { show: true, formatter: () => `no ritmo ${fmt(fechamento, true)}`, color: LARANJA, fontSize: 12.5, fontWeight: 700, offset: [0, metaAc[11] >= fechamento ? 9 : -9] },
        },
        {
          name: 'Realizado (meses)',
          type: 'line',
          symbol: 'circle',
          symbolSize: 9,
          z: 6,
          lineStyle: { width: 0, opacity: 0 },
          tooltip: { show: false },
          data: realAc.map((v, m) => ({ value: v, itemStyle: { color: '#ffffff', borderColor: v >= metaAc[m] ? VERDE : VERMELHO, borderWidth: 2.5 } })),
        },
        ...pedacos.map((p) => ({
          // Mesmo nome para os trechos da mesma cor: a legenda mostra "Acima da meta" (verde) e "Abaixo da meta" (vermelho)
          name: p.verde ? 'Realizado acima da meta' : 'Realizado abaixo da meta',
          type: 'line',
          xAxisIndex: 1,
          silent: true,
          // Bolinha só na legenda (linha com bolinha branca, como no gráfico); nos pontos, as bolinhas são da série de baixo
          symbol: 'circle',
          showSymbol: false,
          z: 4,
          data: [p.de, p.ate],
          lineStyle: { color: p.verde ? VERDE : VERMELHO, width: 3.5 },
          itemStyle: { color: '#ffffff', borderColor: p.verde ? VERDE : VERMELHO, borderWidth: 2.5 },
        })),
      ],
    };
  }, [r, fmt]);
  return <Grafico option={option} altura={340} rotulo={`Acumulado de ${r.anoAtual} contra a meta acumulada, com a projeção até dezembro`} />;
}

// Barras sobrepostas da planilha: a previsão larga e clara atrás, a receita estreita na frente (verde quando bate, vermelha quando não),
// e nos meses que faltam a receita prevista no ritmo do ano. Cada uma num eixo x próprio (igual), para as duas ficarem centralizadas
// acumuladas: as linhas acumuladas da planilha no eixo da direita (previsão e receita, com bolinhas) e a tendência pontilhada da receita
function opcaoSobreposta({
  r,
  fmt,
  previsao,
  receita,
  futuro,
  rotuloPct,
  acumuladas,
}: {
  r: Resultado;
  fmt: Fmt;
  previsao: number[];
  receita: (number | null)[];
  futuro: (number | null)[];
  rotuloPct?: boolean;
  acumuladas?: { previsao: number[]; receita: (number | null)[]; tendencia: number[] | null };
}) {
  return {
    animationDuration: 700,
    grid: { left: 8, right: 8, top: 40, bottom: 4, containLabel: true },
    legend: { ...legenda, data: ['Previsão (meta)', 'Receita acima da previsão', 'Receita abaixo da previsão', `Previsto ${r.anoAtual}`, ...(acumuladas ? ['Previsão acumulada', 'Receita acumulada', ...(acumuladas.tendencia ? ['Tendência acumulada'] : [])] : [])] },
    tooltip: {
      ...tooltipBase,
      formatter: (params: { dataIndex: number }[]) => {
        const i = params[0]?.dataIndex ?? 0;
        const real = receita[i];
        const prev = futuro[i];
        const corpo =
          linhaTooltip('#c7cdff', 'Previsão (meta)', fmt(previsao[i])) +
          (real != null ? linhaTooltip(real >= previsao[i] ? VERDE : VERMELHO, 'Receita', fmt(real) + atingido(real, previsao[i])) : prev != null ? linhaTooltip(LARANJA, 'Previsto no ritmo', fmt(prev) + atingido(prev, previsao[i])) : '');
        const ra = acumuladas?.receita[i];
        const acum = acumuladas
          ? `<div style="margin-top:6px;padding-top:6px;border-top:1px solid #1f3048">${linhaTooltip('#94a3b8', 'Previsão acumulada', fmt(acumuladas.previsao[i]))}${ra != null ? linhaTooltip(ACUM, 'Receita acumulada', fmt(ra) + atingido(ra, acumuladas.previsao[i])) : ''}</div>`
          : '';
        return `<div style="min-width:230px"><div style="color:#9aa8bb;margin-bottom:4px">${MESES[i]} de ${r.anoAtual}</div>${corpo}${acum}</div>`;
      },
    },
    xAxis: [
      { type: 'category', data: MESES_CURTOS, ...eixoBase, splitLine: { show: false } },
      { type: 'category', data: MESES_CURTOS, show: false },
    ],
    yAxis: [
      { type: 'value', min: 0, ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
      { type: 'value', min: 0, show: Boolean(acumuladas), position: 'right', ...eixoBase, splitLine: { show: false }, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
    ],
    series: [
      { name: 'Previsão (meta)', type: 'bar', barWidth: '64%', data: previsao, itemStyle: { color: '#dfe3ff', borderRadius: [6, 6, 0, 0] } },
      ...[
        { nome: 'Receita acima da previsão', cor: VERDE, entra: (v: number, m: number) => v >= previsao[m] },
        { nome: 'Receita abaixo da previsão', cor: VERMELHO, entra: (v: number, m: number) => v < previsao[m] },
      ].map((serie) => ({
        name: serie.nome,
        type: 'bar',
        xAxisIndex: 1,
        stack: 'receita',
        barWidth: '30%',
        z: 3,
        data: receita.map((v, m) => (v != null && serie.entra(v, m) ? v : null)),
        itemStyle: { color: serie.cor, borderRadius: [5, 5, 0, 0] },
        label: rotuloPct
          ? { show: true, position: 'top', distance: 9, fontSize: 10, fontWeight: 600, color: COR.navy, backgroundColor: 'rgba(255,255,255,0.85)', padding: [1, 3], borderRadius: 4, formatter: (p: { dataIndex: number; value: number }) => `${Math.round((p.value / previsao[p.dataIndex]) * 100)}%` }
          : undefined,
      })),
      {
        name: `Previsto ${r.anoAtual}`,
        type: 'bar',
        xAxisIndex: 1,
        stack: 'receita',
        barWidth: '30%',
        z: 3,
        data: futuro,
        itemStyle: { color: hexA(LARANJA, 0.4), borderColor: LARANJA, borderType: 'dashed', borderWidth: 1, borderRadius: [5, 5, 0, 0] },
      },
      ...(acumuladas
        ? [
            { name: 'Previsão acumulada', type: 'line', yAxisIndex: 1, symbol: 'circle', symbolSize: 9, data: acumuladas.previsao, lineStyle: { color: '#94a3b8', width: 3 }, itemStyle: { color: '#ffffff', borderColor: '#94a3b8', borderWidth: 2.5 }, z: 5 },
            { name: 'Receita acumulada', type: 'line', yAxisIndex: 1, symbol: 'circle', symbolSize: 9, data: acumuladas.receita, lineStyle: { color: ACUM, width: 3 }, itemStyle: { color: '#ffffff', borderColor: ACUM, borderWidth: 2.5 }, z: 6 },
            ...(acumuladas.tendencia
              ? [{ name: 'Tendência acumulada', type: 'line', yAxisIndex: 1, symbol: 'none', data: acumuladas.tendencia, lineStyle: { color: ACUM, width: 1.5, type: 'dotted' }, itemStyle: { color: ACUM }, z: 4 }]
              : []),
          ]
        : []),
    ],
  };
}

// 3. Previsão × receita – mensal (gráfico da planilha): barras do mês com o % atingido e, no eixo da direita, as linhas acumuladas e a tendência
export function GraficoMensal({ r, fmt }: { r: Resultado; fmt: Fmt }) {
  const option = useMemo(() => {
    return opcaoSobreposta({
      r,
      fmt,
      previsao: r.acompanhamento.map((l) => l.meta),
      receita: r.acompanhamento.map((l) => l.real),
      futuro: r.acompanhamento.map((l) => l.previsto),
      rotuloPct: true,
      acumuladas: {
        previsao: r.acompanhamento.map((l) => l.metaAcum),
        receita: r.acompanhamento.map((_, m) => (m <= r.ateMes ? r.acumReal[m] : null)),
        // A mesma reta de ritmo do gráfico de acumulado (regressão do acumulado pela origem)
        tendencia: r.ritmoMes == null ? null : MESES.map((_, m) => r.ritmoMes! * (m + 1)),
      },
    });
  }, [r, fmt]);
  return <Grafico option={option} altura={310} rotulo={`Previsão e receita de cada mês de ${r.anoAtual}`} />;
}

// 4. Previsão × receita – acumulado (gráfico da planilha): o mesmo, somando mês a mês, com o % atingido em cima
export function GraficoAcumuladoBarras({ r, fmt }: { r: Resultado; fmt: Fmt }) {
  const option = useMemo(() => {
    // Soma mês a mês: o realizado até o último mês fechado e, depois, o previsto
    const acumulado = r.previstoMes.reduce<number[]>((a, v, m) => [...a, (a[m - 1] ?? 0) + (r.realizado[m] ?? v)], []);
    const receita = acumulado.map((v, m) => (m <= r.ateMes ? v : null));
    const futuro = acumulado.map((v, m) => (m > r.ateMes ? v : null));
    return opcaoSobreposta({ r, fmt, previsao: r.acompanhamento.map((l) => l.metaAcum), receita, futuro, rotuloPct: true });
  }, [r, fmt]);
  return <Grafico option={option} altura={310} rotulo={`Previsão e receita acumuladas de ${r.anoAtual}`} />;
}

// 3. % da meta acumulada atingido mês a mês (verde a partir de 100%)
export function GraficoPctAcumulado({ r }: { r: Resultado }) {
  const option = useMemo(() => {
    const dados = r.acompanhamento.map((l) => (l.pctAcum == null ? null : Math.round(l.pctAcum * 1000) / 10));
    const max = Math.max(110, ...dados.filter((v): v is number => v != null).map((v) => Math.ceil(v / 10) * 10 + 10));
    return {
      animationDuration: 700,
      grid: { left: 8, right: 34, top: 24, bottom: 4, containLabel: true },
      tooltip: { ...tooltipBase, valueFormatter: (v: unknown) => (typeof v === 'number' ? `${v.toLocaleString('pt-BR')}% da meta acumulada` : '—') },
      xAxis: { type: 'category', data: MESES_CURTOS, ...eixoBase, splitLine: { show: false } },
      yAxis: { type: 'value', min: 0, max, ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => `${v}%` } },
      series: [
        {
          name: '% acumulado',
          type: 'bar',
          barMaxWidth: 26,
          data: dados.map((v) => (v == null ? null : { value: v, itemStyle: { color: v >= 100 ? { ...gradiente(VERDE, 1), colorStops: [{ offset: 0, color: '#56fed5' }, { offset: 1, color: VERDE }] } : { ...gradiente(VERMELHO, 1), colorStops: [{ offset: 0, color: '#fca5a5' }, { offset: 1, color: VERMELHO }] }, borderRadius: [6, 6, 0, 0] } })),
          label: { show: true, position: 'top', distance: 9, fontSize: 10.5, fontWeight: 600, color: COR.navy, formatter: (p: { value: number }) => `${Math.round(p.value)}%` },
          markLine: { silent: true, symbol: 'none', lineStyle: { color: AZUL, type: 'dashed', width: 1.5 }, label: { formatter: 'meta', color: AZUL, fontSize: 10, position: 'end' }, data: [{ yAxis: 100 }] },
        },
      ],
    };
  }, [r]);
  return <Grafico option={option} altura={300} rotulo={`Percentual da meta acumulada atingido em cada mês de ${r.anoAtual}`} />;
}

// 4. Total por ano com a reta de tendência (regressão), o fechamento previsto do ano atual e a projeção do próximo
export function GraficoAnual({ r, fmt }: { r: Resultado; fmt: Fmt }) {
  const option = useMemo(() => {
    const anos = [...r.anos.map((a) => a.ano), r.anoAtual, r.proximoAno];
    const valores = [...r.totais, r.fechamentoAtual, r.tendenciaProx];
    const reta = anos.map((_, i) => Math.max(r.regProx.a + r.regProx.b * i, 0));
    return {
      animationDuration: 800,
      grid: { left: 8, right: 8, top: 34, bottom: 4, containLabel: true },
      legend: { ...legenda, data: ['Total do ano', 'Tendência'] },
      tooltip: { ...tooltipBase, valueFormatter: (v: unknown) => (typeof v === 'number' ? fmt(v) : '—') },
      xAxis: { type: 'category', data: anos.map((a, i) => (i === anos.length - 2 ? `${a} (prev.)` : i === anos.length - 1 ? `${a} (proj.)` : String(a))), ...eixoBase, splitLine: { show: false } },
      yAxis: { type: 'value', min: 0, ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
      series: [
        {
          name: 'Total do ano',
          type: 'bar',
          barMaxWidth: 54,
          data: valores.map((v, i) => ({
            value: v,
            itemStyle:
              i < r.totais.length
                ? { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#8e9aff' }, { offset: 1, color: '#6575ff' }] }, borderRadius: [8, 8, 0, 0] }
                : i === r.totais.length
                  ? { color: hexA(LARANJA, 0.75), borderRadius: [8, 8, 0, 0] }
                  : { color: hexA(AZUL, 0.12), borderColor: AZUL, borderType: 'dashed', borderWidth: 1.5, borderRadius: [8, 8, 0, 0] },
          })),
          label: { show: true, position: 'top', fontSize: 11, fontWeight: 600, color: COR.navy, formatter: (p: { value: number }) => fmt(p.value, true) },
        },
        { name: 'Tendência', type: 'line', smooth: false, symbol: 'circle', symbolSize: 9, data: reta, lineStyle: { color: VERDE, width: 2.5 }, itemStyle: { color: '#ffffff', borderColor: VERDE, borderWidth: 2.5 } },
      ],
    };
  }, [r, fmt]);
  return <Grafico option={option} altura={300} rotulo="Total por ano com a reta de tendência" />;
}

// 5. Dessazonalização: a série real mês a mês contra a média móvel centrada de 12 meses (2x12) e a série sem sazonalidade
export function GraficoDessazonalizado({ r, fmt }: { r: Resultado; fmt: Fmt }) {
  const option = useMemo(() => {
    const anos = [...r.anos.map((a) => a.ano), r.anoAtual];
    const rotulos = anos.flatMap((ano) => MESES_CURTOS.map((m) => `${m}/${ano}`));
    const real = [...r.x, ...r.realizado.map((v, m) => (m <= r.ateMes ? v : null))];
    return {
      animationDuration: 800,
      grid: { left: 8, right: 12, top: 34, bottom: 4, containLabel: true },
      legend: { ...legenda, data: ['Real', 'Média móvel 12 meses', 'Sem sazonalidade'] },
      tooltip: { ...tooltipBase, valueFormatter: (v: unknown) => (typeof v === 'number' ? fmt(v) : '—') },
      xAxis: { type: 'category', data: rotulos, boundaryGap: false, ...eixoBase, splitLine: { show: false }, axisLabel: { ...eixoBase.axisLabel, interval: 11, formatter: (v: string) => v.split('/')[1] } },
      yAxis: { type: 'value', min: 0, ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
      series: [
        { name: 'Real', type: 'line', smooth: 0.2, symbol: 'none', data: real, lineStyle: { color: COR.navy, width: 1.6 }, itemStyle: { color: COR.navy }, areaStyle: { color: gradiente('#07111f', 0.08) } },
        { name: 'Sem sazonalidade', type: 'line', smooth: 0.2, symbol: 'none', data: r.dessazonalizado, lineStyle: { color: AZUL, width: 1.6, type: 'dotted' }, itemStyle: { color: AZUL } },
        { name: 'Média móvel 12 meses', type: 'line', smooth: 0.4, symbol: 'none', data: [...r.mm, ...Array(12).fill(null)], lineStyle: { color: VERDE, width: 3.5 }, itemStyle: { color: VERDE } },
      ],
    };
  }, [r, fmt]);
  return <Grafico option={option} altura={320} rotulo="Série real, média móvel de 12 meses e série sem sazonalidade" />;
}

// Os anos sobrepostos mês a mês: histórico em tons de lilás, o ano atual em âmbar (realizado) e a previsão tracejada
export function GraficoAnos({ r, fmt }: { r: Resultado; fmt: Fmt }) {
  const option = useMemo(() => {
    // Uma cor bem diferente por ano; o ano atual em laranja, em destaque
    const cores = ['#38bdf8', '#a78bfa', '#f472b6', '#10c49c', '#6575ff'];
    return {
      animationDuration: 700,
      grid: { left: 8, right: 16, top: 40, bottom: 8, containLabel: true },
      legend: legenda,
      tooltip: { ...tooltipBase, valueFormatter: (v: unknown) => (typeof v === 'number' ? fmt(v) : '—') },
      xAxis: { type: 'category', data: MESES_CURTOS, boundaryGap: false, ...eixoBase, splitLine: { show: false } },
      yAxis: { type: 'value', ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
      series: [
        ...r.anos.map((a, i) => {
          const cor = cores[(cores.length - r.anos.length + i) % cores.length];
          return { name: String(a.ano), type: 'line', smooth: 0.3, symbol: 'circle', symbolSize: 9, data: a.valores, lineStyle: { width: 2, color: cor, opacity: 0.85 }, itemStyle: { color: cor } };
        }),
        { name: `${r.anoAtual}`, type: 'line', smooth: 0.3, symbol: 'circle', symbolSize: 11, data: r.realizado, lineStyle: { width: 3.5, color: LARANJA }, itemStyle: { color: LARANJA }, z: 5 },
        {
          name: `${r.anoAtual} previsto`,
          type: 'line',
          smooth: 0.3,
          symbol: 'none',
          data: r.previstoMes.map((v, m) => (r.ateMes < 0 || m >= r.ateMes ? (m === r.ateMes ? r.realizado[m] : v) : null)),
          lineStyle: { width: 2.5, type: 'dashed', color: LARANJA },
          itemStyle: { color: LARANJA },
        },
      ],
    };
  }, [r, fmt]);
  return <Grafico option={option} altura={340} rotulo={`Comparação mês a mês de ${r.anoAtual} com os anos anteriores`} />;
}

// Sazonalidade: barras acima (verde) e abaixo (vermelho) da média
export function GraficoSazonalidade({ r }: { r: Resultado }) {
  const option = useMemo(
    () => ({
      animationDuration: 700,
      grid: { left: 8, right: 8, top: 24, bottom: 8, containLabel: true },
      tooltip: { ...tooltipBase, valueFormatter: (v: unknown) => (typeof v === 'number' ? `${v >= 0 ? '+' : ''}${v.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}% vs média` : '') },
      xAxis: { type: 'category', data: MESES_CURTOS, ...eixoBase, splitLine: { show: false } },
      yAxis: { type: 'value', ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => `${v > 0 ? '+' : ''}${v}%` } },
      series: [
        {
          name: 'Sazonalidade',
          type: 'bar',
          barMaxWidth: 34,
          data: r.indice.map((v) => ({
            value: Math.round((v - 1) * 1000) / 10,
            itemStyle: {
              borderRadius: v >= 1 ? [8, 8, 2, 2] : [2, 2, 8, 8],
              color:
                v >= 1
                  ? { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#56fed5' }, { offset: 1, color: VERDE }] }
                  : { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#fca5a5' }, { offset: 1, color: VERMELHO }] },
            },
          })),
          label: { show: true, position: 'outside', fontSize: 10.5, fontWeight: 600, color: COR.navy, formatter: (p: { value: number }) => `${p.value > 0 ? '+' : ''}${Math.round(p.value)}%` },
        },
      ],
    }),
    [r],
  );
  return <Grafico option={option} altura={280} rotulo="Índice de sazonalidade por mês" />;
}

// Série completa com as metas do próximo ano: histórico, tendência, previsão do ano atual e meta mês a mês
export function GraficoSerie({ r, metasProx, fmt }: { r: Resultado; metasProx: number[]; fmt: Fmt }) {
  const option = useMemo(() => {
    const rotulos = [...r.anos.map((a) => a.ano), r.anoAtual, r.proximoAno].flatMap((ano) => MESES_CURTOS.map((m) => `${m}/${ano}`));
    const n = r.x.length;
    const vazio = (k: number) => Array(k).fill(null);
    return {
      animationDuration: 800,
      grid: { left: 8, right: 16, top: 40, bottom: 8, containLabel: true },
      legend: legenda,
      tooltip: { ...tooltipBase, valueFormatter: (v: unknown) => (typeof v === 'number' ? fmt(v) : '—') },
      xAxis: { type: 'category', data: rotulos, boundaryGap: false, ...eixoBase, splitLine: { show: false }, axisLabel: { ...eixoBase.axisLabel, interval: 11, formatter: (v: string) => v.split('/')[1] } },
      yAxis: { type: 'value', ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
      series: [
        { name: 'Real', type: 'line', smooth: 0.25, symbol: 'none', data: [...r.x, ...r.realizado, ...vazio(12)], lineStyle: { width: 2, color: COR.navy }, itemStyle: { color: COR.navy }, areaStyle: { color: gradiente('#07111f', 0.1) } },
        { name: 'Tendência', type: 'line', smooth: 0.4, symbol: 'none', data: [...r.tendencia, ...vazio(24)], lineStyle: { width: 3, color: VERDE }, itemStyle: { color: VERDE } },
        {
          name: `${r.anoAtual} previsto`,
          type: 'line',
          smooth: 0.25,
          symbol: 'none',
          data: [...vazio(n), ...r.previstoMes.map((v, m) => (r.ateMes < 0 || m >= r.ateMes ? (m === r.ateMes ? r.realizado[m] : v) : null)), ...vazio(12)],
          lineStyle: { width: 2.5, type: 'dashed', color: LARANJA },
          itemStyle: { color: LARANJA },
        },
        {
          name: `Meta ${r.proximoAno}`,
          type: 'line',
          smooth: 0.25,
          symbol: 'none',
          data: [...vazio(n + 11), r.previstoMes[11], ...metasProx],
          lineStyle: { width: 2.5, type: 'dashed', color: AZUL },
          itemStyle: { color: AZUL },
          areaStyle: { color: gradiente(AZUL, 0.18) },
          markArea: { silent: true, itemStyle: { color: 'rgba(101,117,255,0.06)' }, data: [[{ xAxis: rotulos[n + 12] }, { xAxis: rotulos[n + 23] }]] },
        },
      ],
    };
  }, [r, metasProx, fmt]);
  return <Grafico option={option} altura={340} rotulo="Série mensal com tendência, previsão do ano atual e metas do próximo ano" />;
}

// 6. Dessazonalização ano a ano (gráfico da planilha): a tendência sem sazonalidade de cada ano, mês a mês, uma linha por ano.
// No ano atual, o real dividido pelo índice de cada mês (o que já aconteceu, sem a sazonalidade)
export function GraficoDessazAnos({ r, fmt }: { r: Resultado; fmt: Fmt }) {
  const option = useMemo(() => {
    const atual = r.dessazonalizado.slice(r.x.length, r.x.length + 12);
    return {
      animationDuration: 700,
      grid: { left: 8, right: 16, top: 40, bottom: 8, containLabel: true },
      legend: legenda,
      tooltip: { ...tooltipBase, valueFormatter: (v: unknown) => (typeof v === 'number' ? fmt(v) : '—') },
      xAxis: { type: 'category', data: MESES_CURTOS, boundaryGap: false, ...eixoBase, splitLine: { show: false } },
      yAxis: { type: 'value', scale: true, ...eixoBase, axisLabel: { ...eixoBase.axisLabel, formatter: (v: number) => fmt(v, true) } },
      series: [
        ...r.anos.map((a, i) => {
          const cor = TONS_ANOS[TONS_ANOS.length - r.anos.length + i] ?? AZUL;
          return { name: String(a.ano), type: 'line', smooth: 0.3, symbol: 'circle', symbolSize: 9, data: r.tendencia.slice(i * 12, i * 12 + 12), lineStyle: { width: 2.5, color: cor }, itemStyle: { color: '#ffffff', borderColor: cor, borderWidth: 2.5 } };
        }),
        { name: `${r.anoAtual}`, type: 'line', smooth: 0.3, symbol: 'circle', symbolSize: 9, data: atual, lineStyle: { width: 3, color: LARANJA }, itemStyle: { color: '#ffffff', borderColor: LARANJA, borderWidth: 2.5 }, z: 5 },
      ],
    };
  }, [r, fmt]);
  return <Grafico option={option} altura={320} rotulo="Tendência sem sazonalidade de cada ano, mês a mês" />;
}
