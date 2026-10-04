'use client';

import { cn } from '@/novo/utils/cn';
import { useEffect, useRef, useState } from 'react';

// Peças visuais reaproveitadas pelos cases: gráfico de barras agrupadas e funil animado.

export const useVisivel = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visivel };
};

const coresSerie = ['bg-lilas-500', 'bg-primary-500', 'bg-secondary'];
const pontosSerie = ['bg-lilas-500', 'bg-primary-500', 'bg-secondary'];

export interface SerieGrafico {
  nome: string;
  formato: 'moeda' | 'percentual' | 'multiplo' | 'numero';
}

const formatar = (valor: number, formato: SerieGrafico['formato']) => {
  if (formato === 'moeda' && valor >= 1000)
    return `R$ ${(valor / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} mil`;
  if (formato === 'moeda')
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: valor < 100 ? 2 : 0,
    });
  if (formato === 'percentual') return `${valor.toLocaleString('pt-BR')}%`;
  if (formato === 'multiplo') return `${valor.toLocaleString('pt-BR')}x`;
  return valor.toLocaleString('pt-BR');
};

export interface GrupoGrafico {
  rotulo: string;
  valores: number[];
}

/** Barras agrupadas; cada série usa a própria escala, como nos gráficos de dois eixos. */
export const GraficoBarras = ({
  titulo,
  series,
  grupos,
}: {
  titulo: string;
  series: SerieGrafico[];
  grupos: GrupoGrafico[];
}) => {
  const { ref, visivel } = useVisivel();
  const maximos = series.map((_, s) => Math.max(...grupos.map((g) => g.valores[s])));

  return (
    <div ref={ref} className="border-stroke-3 h-full rounded-3xl border bg-white p-7">
      <p className="text-tagline-2 text-secondary/60 flex items-center gap-2 font-medium">
        <span className="bg-lilas-500 size-1.5 rounded-full" />
        {titulo}
      </p>
      <div className="mt-6 grid gap-4" style={{ gridTemplateColumns: `repeat(${grupos.length}, minmax(0, 1fr))` }}>
        {grupos.map((grupo, g) => (
          <div key={grupo.rotulo} className="flex flex-col items-center">
            <div className="flex h-52 items-end gap-2.5">
              {grupo.valores.map((valor, s) => {
                const ordem = g * series.length + s;
                return (
                  <div key={series[s].nome} className="flex h-full w-12 flex-col items-center justify-end gap-2 sm:w-14">
                    <span
                      className={cn(
                        'text-[0.6875rem] sm:text-tagline-3 text-secondary text-center leading-tight font-medium sm:whitespace-nowrap transition-opacity duration-500',
                        visivel ? 'opacity-100' : 'opacity-0'
                      )}
                      style={{ transitionDelay: `${700 + ordem * 120}ms` }}
                    >
                      {formatar(valor, series[s].formato)}
                    </span>
                    <div
                      className={cn('w-full rounded-t-xl transition-[height] duration-1000 ease-out', coresSerie[s])}
                      style={{
                        height: visivel ? `${Math.max((valor / maximos[s]) * 75, 3)}%` : '0%',
                        transitionDelay: `${ordem * 120}ms`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <span className="text-tagline-3 text-secondary/55 mt-2 text-center">{grupo.rotulo}</span>
          </div>
        ))}
      </div>
      <div className="text-tagline-3 text-secondary/60 mt-5 flex flex-wrap justify-center gap-5">
        {series.map((serie, s) => (
          <span key={serie.nome} className="flex items-center gap-1.5">
            <span className={cn('size-2.5 rounded-full', pontosSerie[s])} />
            {serie.nome}
          </span>
        ))}
      </div>
    </div>
  );
};

export interface EtapaFunil {
  etapa: string;
  valor: string;
  custo: string;
  custoRotulo: string;
  taxa: string;
  taxaRotulo: string;
  largura: number;
}

/** Funil de conversão com barras que se preenchem em sequência. */
export const FunilAnimado = ({ etapas }: { etapas: EtapaFunil[] }) => {
  const { ref, visivel } = useVisivel<HTMLOListElement>();
  const ultima = etapas.length - 1;

  return (
    <ol ref={ref} className="border-stroke-3 divide-stroke-3 divide-y overflow-hidden rounded-3xl border bg-white">
      {etapas.map((e, i) => (
        <li
          key={e.etapa}
          className={cn(
            'grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-5 py-4 md:grid-cols-[140px_1fr_120px_140px] md:px-7',
            i === ultima && 'bg-primary-50'
          )}
        >
          <span className="text-tagline-2 text-secondary font-medium">{e.etapa}</span>
          <div className="col-span-2 row-start-2 h-9 md:col-span-1 md:row-start-auto">
            <div
              className={cn(
                'flex h-full items-center rounded-lg px-3 transition-[width] duration-1000 ease-out',
                i === ultima ? 'bg-primary-500' : 'bg-lilas-500'
              )}
              style={{ width: visivel ? `${Math.max(e.largura, 18)}%` : '0%', transitionDelay: `${i * 120}ms` }}
            >
              <span
                className={cn(
                  'text-tagline-2 font-medium whitespace-nowrap',
                  i === ultima ? 'text-secondary' : 'text-white'
                )}
              >
                {e.valor}
              </span>
            </div>
          </div>
          <span className="text-tagline-2 text-secondary/70 hidden md:block">
            <span className="text-secondary font-medium">{e.custo}</span> {e.custoRotulo}
          </span>
          <span className="text-tagline-2 text-right md:text-left">
            <span className={cn('font-medium', i === ultima ? 'text-primary-700' : 'text-lilas-500')}>
              {i === ultima ? e.taxa : `→ ${e.taxa}`}
            </span>{' '}
            <span className="text-secondary/55">{e.taxaRotulo}</span>
          </span>
          <span className="text-tagline-3 text-secondary/55 col-span-2 md:hidden">
            {e.custo} {e.custoRotulo}
          </span>
        </li>
      ))}
    </ol>
  );
};
