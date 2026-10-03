'use client';

import { cn } from '@/novo/utils/cn';
import { type ReactNode, useEffect, useState } from 'react';

interface Pilar {
  icone?: ReactNode;
  label: string;
  description: string;
  resultado: string;
}

const INTERVALO = 1800;
const LEADS = [0, 1.2, 2.4];

// Pilares como um fluxo: leads percorrem a linha e cada etapa acende quando o fluxo chega nela.
const FluxoPilares = ({ itens }: { itens: Pilar[] }) => {
  const total = itens.length;
  const [ativa, setAtiva] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAtiva(total - 1);
      return;
    }
    const timer = window.setInterval(() => setAtiva((atual) => (atual + 1) % total), INTERVALO);
    return () => window.clearInterval(timer);
  }, [total]);

  const progresso = total > 1 ? (ativa / (total - 1)) * 100 : 100;

  return (
    <div className="relative">
      {/* Trilho horizontal (desktop) */}
      <div
        aria-hidden="true"
        style={{ left: `${50 / total}%`, right: `${50 / total}%` }}
        className="absolute top-8 hidden h-0.5 rounded-full bg-white/10 md:block"
      >
        <div
          style={{ width: `${progresso}%` }}
          className="from-lilas-500 to-primary-500 h-full rounded-full bg-linear-to-r transition-[width] duration-700 ease-out"
        />
        {LEADS.map((atraso) => (
          <span
            key={atraso}
            style={{ animationDelay: `${atraso}s` }}
            className="bg-primary-500 animate-fluxo-lead-x absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_3px_var(--color-primary-500)]"
          />
        ))}
      </div>

      {/* Trilho vertical (celular) */}
      <div
        aria-hidden="true"
        className="absolute top-8 bottom-8 left-8 w-0.5 -translate-x-1/2 rounded-full bg-white/10 md:hidden"
      >
        <div
          style={{ height: `${progresso}%` }}
          className="from-lilas-500 to-primary-500 w-full rounded-full bg-linear-to-b transition-[height] duration-700 ease-out"
        />
        {LEADS.map((atraso) => (
          <span
            key={atraso}
            style={{ animationDelay: `${atraso}s` }}
            className="bg-primary-500 animate-fluxo-lead-y absolute left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_3px_var(--color-primary-500)]"
          />
        ))}
      </div>

      <ol
        style={{ ['--colunas' as string]: total }}
        className="relative grid gap-10 md:grid-cols-[repeat(var(--colunas),minmax(0,1fr))] md:gap-6"
      >
        {itens.map((item, index) => {
          const acesa = index <= ativa;
          const atual = index === ativa;
          return (
            <li
              key={item.label}
              className="flex gap-5 md:flex-col md:items-center md:gap-6 md:text-center"
            >
              <span
                className={cn(
                  'relative flex size-16 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                  acesa
                    ? 'bg-primary-500 text-secondary border-primary-500'
                    : 'border-white/15 bg-[#0d1424] text-white/50',
                  atual && 'shadow-[0_0_0_8px_rgb(86_254_213/0.12),0_0_32px_rgb(86_254_213/0.45)]'
                )}
              >
                {item.icone}
                <span
                  className={cn(
                    'font-titulo absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full text-[0.75rem] font-medium transition-colors duration-500',
                    acesa ? 'bg-secondary text-primary-500' : 'bg-white/10 text-white/60'
                  )}
                >
                  {index + 1}
                </span>
              </span>

              <div className="space-y-2 md:space-y-3">
                <p
                  className={cn(
                    'font-titulo text-heading-6 font-medium transition-colors duration-500',
                    acesa ? 'text-white' : 'text-white/60'
                  )}
                >
                  {item.label}
                </p>
                <p className="text-tagline-2 text-white/60 md:mx-auto md:max-w-[240px]">
                  {item.description}
                </p>
                {item.resultado && (
                  <span
                    className={cn(
                      'text-tagline-3 inline-flex rounded-full border px-3 py-1 font-medium transition-all duration-500',
                      acesa
                        ? 'border-primary-500/40 bg-primary-500/10 text-primary-500'
                        : 'border-white/10 text-white/40'
                    )}
                  >
                    {item.resultado}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default FluxoPilares;
