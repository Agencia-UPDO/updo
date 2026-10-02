'use client';

import SimboloUpdo from '@/novo/components/shared/simbolo-updo';
import { useEffect, useRef } from 'react';

// Fundo do hero: textura de pontos e o símbolo da UPDO grande, que flutua
// e acompanha levemente o mouse.
const HeroFundo = () => {
  const simboloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 30;
        const y = (event.clientY / window.innerHeight - 0.5) * 30;
        if (simboloRef.current) {
          simboloRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-lilas-200)_1px,transparent_1.5px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_70%_60%_at_70%_30%,#000_20%,transparent_75%)] opacity-70" />

      <div
        ref={simboloRef}
        className="absolute top-20 -right-48 opacity-60 transition-transform duration-700 ease-out md:top-6 md:-right-40 lg:-right-32"
      >
        <div className="animate-[simbolo-flutua_9s_ease-in-out_infinite] motion-reduce:animate-none">
          <SimboloUpdo contorno animado className="text-lilas-200 size-[460px] md:size-[680px]" />
        </div>
      </div>

      <div className="bg-primary-500/25 absolute top-24 right-[18%] size-40 animate-[simbolo-flutua_7s_ease-in-out_infinite_reverse] rounded-full blur-3xl motion-reduce:animate-none" />
    </div>
  );
};

export default HeroFundo;
