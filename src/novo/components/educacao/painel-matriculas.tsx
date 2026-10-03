'use client';

import { cn } from '@/novo/utils/cn';
import { ChevronUp, Target, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

// Matrículas de 2025 (realizado x meta) do case educacional da página atual.
const meses = [
  { mes: 'Jan', realizado: 485812, meta: 470727 },
  { mes: 'Fev', realizado: 427563, meta: 441447 },
  { mes: 'Mar', realizado: 462578, meta: 450130 },
  { mes: 'Abr', realizado: 520556, meta: 472681 },
  { mes: 'Mai', realizado: 560176, meta: 473065 },
  { mes: 'Jun', realizado: 570437, meta: 475920 },
  { mes: 'Jul', realizado: 553029, meta: 493489 },
  { mes: 'Ago', realizado: 820837, meta: 511484 },
  { mes: 'Set', realizado: 592763, meta: 531708 },
  { mes: 'Out', realizado: 573343, meta: 514676 },
  { mes: 'Nov', realizado: 538264, meta: 486986 },
  { mes: 'Dez', realizado: 473646, meta: 477470 },
];

const L = 440;
const A = 140;
const MIN = 380000;
const MAX = 860000;
const x = (i: number) => (L / (meses.length - 1)) * i;
const y = (v: number) => A - ((v - MIN) / (MAX - MIN)) * A;
// Curva suave passando por todos os pontos (Catmull-Rom convertido em Bézier)
const caminho = (campo: 'realizado' | 'meta') => {
  const p = meses.map((m, i) => [x(i), y(m[campo])]);
  let d = `M ${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
};

const PainelMatriculas = () => {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAtivo(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  const realizado = caminho('realizado');
  const area = `${realizado} L ${L} ${A} L 0 ${A} Z`;

  return (
    <div className="bg-secondary shadow-6 relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="bg-primary-500 text-secondary flex size-8 items-center justify-center rounded-lg">
              <TrendingUp className="size-4" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-tagline-2 font-medium text-white">Performance de Captação</p>
          </div>
          <span className="text-tagline-3 flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 whitespace-nowrap text-white/70">
            <span className="bg-primary-500 size-1.5 animate-pulse rounded-full" />
            Estudo de Caso Real
          </span>
        </div>
        <p className="font-titulo text-heading-6 mt-4 font-medium text-white">
          Crescimento estruturado de matrículas
        </p>
      </div>

      <div className="mt-5 rounded-2xl bg-white/5 p-3">
        <div className="text-tagline-3 flex items-center justify-between text-white/55">
          <span>Matrículas em 2025</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="bg-primary-500 h-0.5 w-3 rounded-full" />
              Matrículas Realizadas
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-0 w-3 border-t border-dashed border-white/40" />
              Projeção de Matrículas
            </span>
          </span>
        </div>
        <svg viewBox={`0 -6 ${L} ${A + 24}`} className="mt-3 h-40 w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="edu-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--color-primary-500)" stopOpacity="0.3" />
              <stop offset="1" stopColor="var(--color-primary-500)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2={L} y1={A * f} y2={A * f} strokeDasharray="2 4" className="stroke-white/10" />
          ))}
          <path
            d={caminho('meta')}
            fill="none"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="stroke-white/35"
          />
          <path
            d={area}
            fill="url(#edu-area)"
            className={cn('transition-opacity delay-[1400ms] duration-700', ativo ? 'opacity-100' : 'opacity-0')}
          />
          <path
            d={realizado}
            fill="none"
            pathLength={1}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1"
            strokeDashoffset={ativo ? 0 : 1}
            className="stroke-primary-500 transition-[stroke-dashoffset] delay-[500ms] duration-[1800ms] ease-out"
          />
          {meses.map((m, i) => (
            <text key={m.mes} x={x(i)} y={A + 16} textAnchor="middle" className="fill-white/40 text-[17px] sm:text-[10px]">
              {i % 2 === 0 ? m.mes : ''}
            </text>
          ))}
        </svg>
        <p className="text-tagline-3 mt-2 text-center text-white/45">
          Previsibilidade de matrículas vem de estrutura, não de sorte.
        </p>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        {[
          { icone: Target, label: 'Meta de Matrículas', valor: '104%', detalhe: 'Meta Batida Out/25' },
          { icone: TrendingUp, label: 'Custo por Matrícula', valor: '-15%', detalhe: 'Otimização vs 2024' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-white/5 p-4">
            <span className="text-tagline-3 flex items-center gap-1.5 text-white/55">
              <item.icone className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              {item.label}
            </span>
            <p className="font-titulo mt-2 text-[1.5rem] leading-none font-medium text-white">{item.valor}</p>
            <p className="text-tagline-3 text-primary-500 mt-1.5 flex items-center gap-0.5">
              <ChevronUp className="size-3" aria-hidden="true" />
              {item.detalhe}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelMatriculas;
