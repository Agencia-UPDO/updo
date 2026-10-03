'use client';

import { cn } from '@/novo/utils/cn';
import { TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

// Visual do topo montado a partir de dados: barras de funil e/ou cartões de métricas.
// Usado nas páginas de setor, que trazem o visual da página atual com os números dela.
export interface CartaoDados {
  rotulo: string;
  status?: string;
  titulo: string;
  barras?: { label: string; valor: string; largura: number; detalhe?: string }[];
  metricas?: { label: string; valor: string; detalhe?: string }[];
  indicadores?: { label: string; valor: string }[];
  nota?: string;
}

const VisualCartao = ({ dados }: { dados: CartaoDados }) => {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAtivo(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-secondary shadow-6 relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="bg-primary-500 text-secondary flex size-8 items-center justify-center rounded-lg">
              <TrendingUp className="size-4" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-tagline-2 font-medium text-white">{dados.rotulo}</p>
          </div>
          <span className="text-tagline-3 flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 whitespace-nowrap text-white/70">
            <span className="bg-primary-500 size-1.5 animate-pulse rounded-full" />
            {dados.status ?? 'case real'}
          </span>
        </div>
        <p className="font-titulo text-heading-6 mt-4 font-medium text-white">{dados.titulo}</p>
      </div>

      {dados.barras && (
        <div className="mt-5 space-y-3.5">
          {dados.barras.map((barra, index) => (
            <div key={barra.label}>
              <div className="text-tagline-3 flex items-center justify-between gap-3">
                <span className="text-white/60">{barra.label}</span>
                <span className="font-medium text-white">{barra.valor}</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-white/10">
                <div
                  style={{
                    width: ativo ? `${Math.max(barra.largura, 3)}%` : '0%',
                    transitionDelay: `${index * 140}ms`,
                  }}
                  className={cn(
                    'h-full rounded-full transition-[width] duration-1000 ease-out',
                    index === dados.barras!.length - 1 ? 'bg-primary-500' : 'bg-lilas-500'
                  )}
                />
              </div>
              {barra.detalhe && <p className="text-tagline-3 mt-1 text-white/40">{barra.detalhe}</p>}
            </div>
          ))}
        </div>
      )}

      {dados.metricas && (
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {dados.metricas.map((metrica, index) => (
            <div
              key={metrica.label}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={cn(
                'rounded-2xl bg-white/5 p-4 transition-all duration-700',
                ativo ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              )}
            >
              <span className="text-tagline-3 text-white/55">{metrica.label}</span>
              <p className="font-titulo text-primary-500 mt-2 text-[1.5rem] leading-none font-medium whitespace-nowrap md:text-[1.75rem]">
                {metrica.valor}
              </p>
              {metrica.detalhe && (
                <p className="text-tagline-3 mt-1.5 text-white/45">{metrica.detalhe}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {dados.indicadores && (
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {dados.indicadores.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 p-3">
              <span className="text-tagline-3 text-white/55">{item.label}</span>
              <p className="font-titulo mt-1.5 text-[1.375rem] leading-none font-medium whitespace-nowrap text-white">
                {item.valor}
              </p>
            </div>
          ))}
        </div>
      )}

      {dados.nota && (
        <p className="text-tagline-2 mt-2.5 rounded-2xl bg-white/5 p-4 text-white/60">{dados.nota}</p>
      )}
    </div>
  );
};

export default VisualCartao;
