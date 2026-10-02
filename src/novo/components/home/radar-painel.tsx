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
  { icon: Handshake, label: 'Vendas', valor: 180, sufixo: '', variacao: '+150%' },
];

const funil = [
  { etapa: 'Sessões', valor: '35 mil', largura: 100, cor: 'bg-primary-500' },
  { etapa: 'Leads', valor: '2,4 mil', largura: 78, cor: 'bg-primary-600' },
  { etapa: 'Reuniões', valor: '610', largura: 56, cor: 'bg-lilas-500' },
  { etapa: 'Vendas', valor: '180', largura: 38, cor: 'bg-lilas-700' },
];

const pontos = [12, 18, 15, 26, 22, 34, 30, 41, 38, 52, 47, 63];

const caminho = (altura: number, largura: number) => {
  const max = Math.max(...pontos);
  const passo = largura / (pontos.length - 1);
  return pontos
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i * passo).toFixed(1)} ${(altura - (p / max) * (altura - 6)).toFixed(1)}`)
    .join(' ');
};

const RadarPainel = () => {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAtivo(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  const linha = caminho(70, 300);

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
          <span className="text-tagline-3 text-white/55">Vendas por semana</span>
          <span className="text-tagline-3 text-primary-500 font-medium">+150%</span>
        </div>
        <svg viewBox="0 0 300 70" className="mt-2 h-16 w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="radar-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--color-primary-500)" stopOpacity="0.35" />
              <stop offset="1" stopColor="var(--color-primary-500)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${linha} L 300 70 L 0 70 Z`}
            fill="url(#radar-area)"
            className={cn('transition-opacity delay-700 duration-1000', ativo ? 'opacity-100' : 'opacity-0')}
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
            className="stroke-primary-500 transition-[stroke-dashoffset] delay-300 duration-[1800ms] ease-out"
          />
        </svg>
      </div>

    </div>
  );
};

export default RadarPainel;
