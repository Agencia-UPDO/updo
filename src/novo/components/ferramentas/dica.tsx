'use client';

import { cn } from '@/novo/utils/cn';
import { useId, useState } from 'react';

// "?" pequeno ao lado de um termo: abre ao passar o mouse, ao focar com o teclado ou ao tocar (celular)
export function Dica({ texto, claro = false }: { texto: string; claro?: boolean }) {
  const [aberta, setAberta] = useState(false);
  const id = useId();
  return (
    <span className="relative inline-flex align-middle" onMouseEnter={() => setAberta(true)} onMouseLeave={() => setAberta(false)}>
      <button
        type="button"
        aria-label="O que é isso?"
        aria-describedby={aberta ? id : undefined}
        aria-expanded={aberta}
        onClick={(ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          setAberta((a) => !a);
        }}
        onFocus={() => setAberta(true)}
        onBlur={() => setAberta(false)}
        className={cn(
          'ml-1 inline-flex size-4 items-center justify-center rounded-full border text-[0.625rem] leading-none font-semibold transition-colors',
          claro ? 'border-white/40 text-white/70 hover:border-white hover:text-white' : 'border-secondary/30 text-secondary/55 hover:border-secondary hover:text-secondary',
        )}
      >
        ?
      </button>
      {aberta && (
        <span
          id={id}
          role="tooltip"
          className="bg-secondary text-tagline-3 absolute bottom-full left-1/2 z-30 mb-2 w-64 max-w-[80vw] -translate-x-1/2 rounded-xl px-3.5 py-2.5 text-left font-normal whitespace-normal text-white shadow-[0_12px_32px_-12px_rgba(7,17,31,0.6)]"
        >
          {texto}
        </span>
      )}
    </span>
  );
}
