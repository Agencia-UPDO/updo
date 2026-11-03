'use client';

import type { EChartsCoreOption } from 'echarts/core';
import { useEffect, useRef } from 'react';

// Gráfico ECharts das ferramentas: carrega a biblioteca só quando o gráfico aparece (não pesa o resto do site)
// e acompanha o tamanho do card. A configuração (option) vem pronta de quem usa.
// Ícones da legenda para linhas sem bolinha: traço contínuo ou tracejado, igual à linha do gráfico
const ICONE_LINHA = 'path://M0,4.25h24v2.5h-24z';
const ICONE_TRACEJADO = 'path://M0,4.25h6v2.5h-6zM9,4.25h6v2.5h-6zM18,4.25h6v2.5h-6z';
type Serie = { name?: string; type?: string; symbol?: string; lineStyle?: { type?: string } };
type Legenda = { data?: (string | { name: string })[] } & Record<string, unknown>;
// O ícone de linha sem bolinha vai no item da legenda (no ECharts, o ícone da série de linha sempre desenha uma bolinha)
function comLegendas(option: EChartsCoreOption): EChartsCoreOption {
  const o = option as { series?: Serie[]; legend?: Legenda };
  if (!Array.isArray(o.series) || !o.legend) return option;
  const nomes = o.legend.data?.map((d) => (typeof d === 'string' ? d : d.name)) ?? [...new Set(o.series.map((x) => x.name).filter((n): n is string => Boolean(n)))];
  const data = nomes.map((nome) => {
    const serie = o.series!.find((x) => x.name === nome);
    if (serie?.type !== 'line' || serie.symbol !== 'none') return nome;
    return { name: nome, icon: serie.lineStyle?.type === 'dashed' || serie.lineStyle?.type === 'dotted' ? ICONE_TRACEJADO : ICONE_LINHA };
  });
  return { ...option, legend: { ...o.legend, data } };
}

export function Grafico({ option, altura = 320, rotulo }: { option: EChartsCoreOption; altura?: number; rotulo: string }) {
  const caixa = useRef<HTMLDivElement>(null);
  const grafico = useRef<{ setOption: (o: EChartsCoreOption, notMerge?: boolean) => void; resize: () => void; dispose: () => void } | null>(null);

  useEffect(() => {
    let vivo = true;
    let observador: ResizeObserver | null = null;
    (async () => {
      const [core, charts, componentes, render] = await Promise.all([import('echarts/core'), import('echarts/charts'), import('echarts/components'), import('echarts/renderers')]);
      core.use([charts.LineChart, charts.BarChart, componentes.GridComponent, componentes.TooltipComponent, componentes.LegendComponent, componentes.MarkAreaComponent, componentes.MarkLineComponent, render.SVGRenderer]);
      if (!vivo || !caixa.current) return;
      const g = core.init(caixa.current, undefined, { renderer: 'svg' });
      grafico.current = g;
      g.setOption(comLegendas(option), true);
      observador = new ResizeObserver(() => g.resize());
      observador.observe(caixa.current);
    })();
    return () => {
      vivo = false;
      observador?.disconnect();
      grafico.current?.dispose();
      grafico.current = null;
    };
    // A configuração muda pelo efeito de baixo; este só cria e destrói o gráfico
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    grafico.current?.setOption(comLegendas(option), true);
  }, [option]);

  return <div ref={caixa} role="img" aria-label={rotulo} style={{ height: altura }} className="w-full" />;
}

// Estilo comum dos gráficos (paleta do site)
export const COR = { navy: '#07111f', menta: '#56fed5', mentaEscuro: '#10c49c', lilas: '#6575ff', ambar: '#f59e0b', vermelho: '#ef4444', cinza: '#7c8ea5', linha: '#e3e7ed' };

export const tooltipBase = {
  trigger: 'axis' as const,
  backgroundColor: '#07111f',
  borderWidth: 0,
  padding: [10, 14],
  textStyle: { color: '#ffffff', fontSize: 12, fontFamily: 'Inter, sans-serif' },
  extraCssText: 'border-radius:12px;box-shadow:0 12px 32px -12px rgba(7,17,31,.5);',
};

export const eixoBase = {
  axisLine: { lineStyle: { color: COR.linha } },
  axisTick: { show: false },
  axisLabel: { color: COR.cinza, fontSize: 11, fontFamily: 'Inter, sans-serif' },
  splitLine: { lineStyle: { color: COR.linha, type: 'dashed' as const } },
};
