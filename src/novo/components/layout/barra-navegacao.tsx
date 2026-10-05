'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/**
 * Barra fina no topo durante a troca de página. Começa no clique de um link interno
 * e completa quando a nova rota aparece, para a pessoa saber que algo está carregando.
 */
const BarraNavegacao = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progresso, setProgresso] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const aoClicar = (evento: MouseEvent) => {
      if (evento.defaultPrevented || evento.button !== 0) return;
      if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
      const link = (evento.target as HTMLElement | null)?.closest('a');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
      const destino = new URL(link.href, window.location.href);
      if (destino.origin !== window.location.origin) return;
      if (destino.pathname === window.location.pathname && destino.search === window.location.search) return;

      window.clearInterval(timer.current);
      setVisivel(true);
      setProgresso(12);
      // Avança devagar até perto do fim enquanto a página carrega.
      timer.current = window.setInterval(() => {
        setProgresso((atual) => (atual < 85 ? atual + (85 - atual) * 0.12 : atual));
      }, 180);
    };

    document.addEventListener('click', aoClicar, true);
    return () => document.removeEventListener('click', aoClicar, true);
  }, []);

  // Nova rota na tela: completa a barra e some.
  useEffect(() => {
    window.clearInterval(timer.current);
    const completar = window.requestAnimationFrame(() => setProgresso((atual) => (atual > 0 ? 100 : 0)));
    const esconder = window.setTimeout(() => {
      setVisivel(false);
      setProgresso(0);
    }, 350);
    return () => {
      window.cancelAnimationFrame(completar);
      window.clearTimeout(esconder);
    };
  }, [pathname, searchParams]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px]"
      style={{ opacity: visivel ? 1 : 0, transition: 'opacity 300ms ease' }}
    >
      <div
        className="bg-primary-500 h-full shadow-[0_0_10px_rgba(86,254,213,0.8)]"
        style={{ width: `${progresso}%`, transition: 'width 250ms ease-out' }}
      />
    </div>
  );
};

export default BarraNavegacao;
