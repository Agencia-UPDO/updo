'use client';

import { cn } from '@/novo/utils/cn';
import { TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface PainelServicoDados {
  titulo: string;
  subtitulo: string;
  kpis: { label: string; valor: string; variacao: string }[];
  barrasTitulo: string;
  barras: { label: string; valor: string; largura: number }[];
  serieTitulo: string;
  serie: { rotulo: string; valor: number }[];
  destaque: string;
}

const cores = ['bg-primary-500', 'bg-primary-600', 'bg-lilas-500', 'bg-lilas-700'];

const GRAF_L = 440;
const GRAF_A = 100;

// Versão do painel do Radar UPDO para as páginas de serviço, com o resultado do case.
const PainelServico = ({ dados }: { dados: PainelServicoDados }) => {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAtivo(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  const valores = dados.serie.map((ponto) => ponto.valor);
  const max = Math.max(...valores);
  const min = Math.min(...valores);
  const passo = GRAF_L / dados.serie.length;
  const centroX = (i: number) => passo * i + passo / 2;
  const y = (v: number) => 30 + ((max - v) / (max - min || 1)) * (GRAF_A - 44);
  const linha = dados.serie
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${centroX(i).toFixed(1)} ${y(p.valor).toFixed(1)}`)
    .join(' ');
  const area = `${linha} L ${centroX(dados.serie.length - 1).toFixed(1)} ${GRAF_A} L ${centroX(0).toFixed(1)} ${GRAF_A} Z`;
  const ultimo = dados.serie.length - 1;

  return (
    <div className="bg-secondary shadow-6 relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="bg-primary-500 text-secondary flex size-8 items-center justify-center rounded-lg">
            <TrendingUp className="size-4" strokeWidth={2} aria-hidden="true" />
          </span>
          <div>
            <p className="text-tagline-2 font-medium text-white">{dados.titulo}</p>
            <p className="text-tagline-3 text-white/45">{dados.subtitulo}</p>
          </div>
        </div>
        <span className="text-tagline-3 flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 whitespace-nowrap text-white/70">
          <span className="bg-primary-500 size-1.5 animate-pulse rounded-full" />
          ao vivo
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {dados.kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl bg-white/5 p-3">
            <span className="text-tagline-3 text-white/55">{kpi.label}</span>
            <p className="font-titulo mt-1.5 text-[1.5rem] leading-none font-medium text-white">
              {kpi.valor}
            </p>
            <p className="text-tagline-3 text-primary-500 mt-1">{kpi.variacao}</p>
          </div>
        ))}
      </div>

      <p className="text-tagline-3 mt-5 text-white/55">{dados.barrasTitulo}</p>
      <div className="mt-2.5 space-y-2">
        {dados.barras.map((barra, index) => (
          <div key={barra.label} className="flex items-center gap-3">
            <span className="text-tagline-3 w-24 shrink-0 text-white/55">{barra.label}</span>
            <div className="h-7 flex-1">
              <div
                style={{
                  width: ativo ? `${barra.largura}%` : '0%',
                  transitionDelay: `${index * 150}ms`,
                }}
                className={cn(
                  'flex h-full min-w-12 items-center justify-end rounded-lg pr-2.5 transition-[width] duration-1000 ease-out',
                  cores[index % cores.length]
                )}
              >
                <span
                  className={cn(
                    'text-tagline-3 font-medium whitespace-nowrap',
                    index < 2 ? 'text-secondary' : 'text-white'
                  )}
                >
                  {barra.valor}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-white/5 p-3">
        <span className="text-tagline-3 text-white/55">{dados.serieTitulo}</span>
        <div className="relative mt-3">
          <svg
            viewBox={`0 0 ${GRAF_L} ${GRAF_A + 16}`}
            className="h-36 w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="painel-servico-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--color-primary-500)" stopOpacity="0.35" />
                <stop offset="1" stopColor="var(--color-primary-500)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[0.25, 0.5, 0.75].map((f) => (
              <line
                key={f}
                x1="0"
                x2={GRAF_L}
                y1={GRAF_A * f}
                y2={GRAF_A * f}
                strokeDasharray="2 4"
                className="stroke-white/10"
              />
            ))}

            <path
              d={area}
              fill="url(#painel-servico-area)"
              className={cn(
                'transition-opacity delay-[1400ms] duration-700',
                ativo ? 'opacity-100' : 'opacity-0'
              )}
            />
            <path
              d={linha}
              fill="none"
              pathLength={1}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1"
              strokeDashoffset={ativo ? 0 : 1}
              className="stroke-primary-500 transition-[stroke-dashoffset] delay-[600ms] duration-[1600ms] ease-out"
            />
            {dados.serie.map((p, i) => (
              <g key={p.rotulo}>
                <circle
                  cx={centroX(i)}
                  cy={y(p.valor)}
                  r={i === ultimo ? 4.5 : 2.5}
                  strokeWidth="2"
                  className={cn(
                    'fill-secondary stroke-primary-500 transition-opacity duration-300',
                    ativo ? 'opacity-100' : 'opacity-0'
                  )}
                  style={{ transitionDelay: `${700 + i * 180}ms` }}
                />
                <text
                  x={centroX(i)}
                  y={GRAF_A + 13}
                  textAnchor="middle"
                  className="fill-white/40 text-[17px] sm:text-[9px]"
                >
                  {p.rotulo}
                </text>
              </g>
            ))}
          </svg>

          <div
            style={{
              left: `${(centroX(ultimo) / GRAF_L) * 100}%`,
              top: `${(y(dados.serie[ultimo].valor) / (GRAF_A + 16)) * 100}%`,
            }}
            className={cn(
              'bg-primary-500 text-secondary text-tagline-3 absolute -translate-x-[108%] -translate-y-[140%] rounded-lg px-2 py-1 font-medium whitespace-nowrap shadow-lg transition-all delay-[2200ms] duration-500',
              ativo ? 'opacity-100' : 'opacity-0'
            )}
          >
            {dados.destaque}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelServico;
