'use client';

import CounterNumberOnScroll from '@/novo/components/animation/counter-number-on-scroll';
import { cn } from '@/novo/utils/cn';
import { CalendarCheck, Handshake, TrendingUp, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';

// Versão enxuta e ilustrativa do Radar UPDO para o hero. Números arredondados
// e sem identificação de cliente.
const kpis = [
  { icon: UserPlus, label: 'Leads', valor: 2400, sufixo: '', variacao: '+54%' },
  { icon: CalendarCheck, label: 'Reuniões', valor: 610, sufixo: '', variacao: '+38%' },
  { icon: Handshake, label: 'Vendas', valor: 264, sufixo: '', variacao: '+150%' },
];

const funil = [
  { etapa: 'Sessões', valor: '35 mil', largura: 100, cor: 'bg-primary-500' },
  { etapa: 'Leads', valor: '2,4 mil', largura: 78, cor: 'bg-primary-600' },
  { etapa: 'Reuniões', valor: '610', largura: 56, cor: 'bg-lilas-500' },
  { etapa: 'Vendas', valor: '264', largura: 44, cor: 'bg-lilas-700' },
];

// Vendas (barras) e receita (linha) por mês, só ilustrativo
const meses = [
  { rotulo: 'Abr', vendas: 106, receita: 260 },
  { rotulo: 'Mai', vendas: 129, receita: 310 },
  { rotulo: 'Jun', vendas: 148, receita: 365 },
  { rotulo: 'Jul', vendas: 175, receita: 430 },
  { rotulo: 'Ago', vendas: 214, receita: 520 },
  { rotulo: 'Set', vendas: 264, receita: 647 },
];

const GRAF_L = 440;
const GRAF_A = 100;
const MAX_VENDAS = 290;
const MAX_RECEITA = 700;
const passo = GRAF_L / meses.length;
const centroX = (i: number) => passo * i + passo / 2;
const yReceita = (v: number) => GRAF_A - (v / MAX_RECEITA) * (GRAF_A - 36);
const linhaReceita = meses
  .map((s, i) => `${i === 0 ? 'M' : 'L'} ${centroX(i).toFixed(1)} ${yReceita(s.receita).toFixed(1)}`)
  .join(' ');

const RadarPainel = () => {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAtivo(true), 500);
    return () => window.clearTimeout(timer);
  }, []);


  return (
    <div className="bg-secondary shadow-6 relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="bg-primary-500 text-secondary flex size-8 items-center justify-center rounded-lg">
            <TrendingUp className="size-4" strokeWidth={2} aria-hidden="true" />
          </span>
          <div>
            <p className="text-tagline-2 font-medium text-white">Radar UPDO</p>
            <p className="text-tagline-3 text-white/45">Funil de vendas · últimos 30 dias</p>
          </div>
        </div>
        <span className="text-tagline-3 flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 whitespace-nowrap text-white/70">
          <span className="bg-primary-500 size-1.5 animate-pulse rounded-full" />
          ao vivo
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl bg-white/5 p-3">
            <span className="text-tagline-3 flex items-center gap-1.5 text-white/55">
              <kpi.icon className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              {kpi.label}
            </span>
            <p className="font-titulo mt-1.5 text-[1.5rem] leading-none font-medium text-white">
              <CounterNumberOnScroll value={kpi.valor} />
              {kpi.sufixo}
            </p>
            <p className="text-tagline-3 text-primary-500 mt-1">{kpi.variacao}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        {funil.map((item, index) => (
          <div key={item.etapa} className="flex items-center gap-3">
            <span className="text-tagline-3 w-16 shrink-0 text-white/55">{item.etapa}</span>
            <div className="h-7 flex-1">
              <div
                style={{
                  width: ativo ? `${item.largura}%` : '0%',
                  transitionDelay: `${index * 150}ms`,
                }}
                className={cn(
                  'flex h-full items-center justify-end rounded-lg pr-2.5 transition-[width] duration-1000 ease-out',
                  item.cor
                )}
              >
                <span
                  className={cn(
                    'text-tagline-3 font-medium whitespace-nowrap',
                    index < 2 ? 'text-secondary' : 'text-white'
                  )}
                >
                  {item.valor}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-white/5 p-3">
        <div className="flex items-center justify-between">
          <span className="text-tagline-3 text-white/55">Vendas por mês</span>
          <span className="text-tagline-3 flex items-center gap-3 text-white/55">
            <span className="flex items-center gap-1.5">
              <span className="bg-lilas-500 size-2 rounded-sm" />
              vendas
            </span>
            <span className="flex items-center gap-1.5">
              <span className="bg-primary-500 h-0.5 w-3 rounded-full" />
              receita
            </span>
          </span>
        </div>
        <div className="relative mt-3">
          <svg viewBox={`0 0 ${GRAF_L} ${GRAF_A + 16}`} className="h-36 w-full overflow-visible" aria-hidden="true">
            <defs>
              <linearGradient id="radar-barra" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--color-lilas-500)" />
                <stop offset="1" stopColor="var(--color-lilas-700)" stopOpacity="0.5" />
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

            {meses.map((s, i) => {
              const altura = (s.vendas / MAX_VENDAS) * (GRAF_A - 36);
              const ultimaBarra = i === meses.length - 1;
              return (
                <g key={s.rotulo}>
                  <rect
                    x={centroX(i) - passo * 0.22}
                    width={passo * 0.44}
                    y={GRAF_A - altura}
                    height={altura}
                    rx="4"
                    fill={ultimaBarra ? 'var(--color-primary-500)' : 'url(#radar-barra)'}
                    style={{
                      transform: ativo ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: `0 ${GRAF_A}px`,
                      transition: 'transform 900ms cubic-bezier(0.34, 1.3, 0.64, 1)',
                      transitionDelay: `${300 + i * 90}ms`,
                    }}
                  />
                  <text
                    x={centroX(i)}
                    y={GRAF_A + 13}
                    textAnchor="middle"
                    className="fill-white/40 text-[9px]"
                  >
                    {s.rotulo}
                  </text>
                </g>
              );
            })}

            <path
              d={linhaReceita}
              fill="none"
              pathLength={1}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1"
              strokeDashoffset={ativo ? 0 : 1}
              className="stroke-primary-500 transition-[stroke-dashoffset] delay-[900ms] duration-[1600ms] ease-out"
            />
            {meses.map((s, i) => (
              <circle
                key={`p-${s.rotulo}`}
                cx={centroX(i)}
                cy={yReceita(s.receita)}
                r={i === meses.length - 1 ? 4.5 : 2.5}
                className={cn(
                  'fill-secondary stroke-primary-500 transition-opacity duration-300',
                  ativo ? 'opacity-100' : 'opacity-0'
                )}
                strokeWidth="2"
                style={{ transitionDelay: `${1000 + i * 180}ms` }}
              />
            ))}
          </svg>

          <div
            style={{
              left: `${(centroX(meses.length - 1) / GRAF_L) * 100}%`,
              top: `${(yReceita(meses[meses.length - 1].receita) / (GRAF_A + 16)) * 100}%`,
            }}
            className={cn(
              'bg-primary-500 text-secondary text-tagline-3 absolute -translate-x-[108%] -translate-y-[140%] rounded-lg px-2 py-1 font-medium whitespace-nowrap shadow-lg transition-all delay-[2400ms] duration-500',
              ativo ? "opacity-100" : "opacity-0"
            )}
          >
            R$ 647 mil · +150%
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarPainel;
