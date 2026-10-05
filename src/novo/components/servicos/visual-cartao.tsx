'use client';

import { cn } from '@/novo/utils/cn';
import { TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

// Separa o primeiro número do texto (ex.: "+R$ 1,2M" vira "+R$ ", 1,2 e "M").
const lerNumero = (texto: string) => {
  const m = texto.match(/\d[\d.]*(?:,\d+)?/);
  if (!m || m.index === undefined) return null;
  const bruto = m[0];
  const decimais = bruto.includes(',') ? bruto.split(',')[1].length : 0;
  return {
    antes: texto.slice(0, m.index),
    depois: texto.slice(m.index + bruto.length),
    valor: Number(bruto.replace(/\./g, '').replace(',', '.')),
    decimais,
    agrupar: bruto.includes('.'),
  };
};

/**
 * Número que conta até o valor real ao aparecer e, de tempos em tempos,
 * reconta a partir de perto do fim, como um painel atualizando. Sempre termina no valor real.
 */
const NumeroVivo = ({ texto, ativo, atraso = 0 }: { texto: string; ativo: boolean; atraso?: number }) => {
  const info = lerNumero(texto);
  const [fracao, setFracao] = useState(1);
  const quadro = useRef(0);

  useEffect(() => {
    if (!info || !ativo) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const contar = (inicio: number, duracao: number) => {
      const t0 = performance.now();
      const passo = (agora: number) => {
        const t = Math.min((agora - t0) / duracao, 1);
        setFracao(inicio + (1 - inicio) * (1 - Math.pow(1 - t, 3)));
        if (t < 1) quadro.current = requestAnimationFrame(passo);
      };
      cancelAnimationFrame(quadro.current);
      quadro.current = requestAnimationFrame(passo);
    };

    const primeiro = window.setTimeout(() => contar(0, 1400), atraso);
    const ciclo = window.setInterval(() => contar(0.86, 1100), 7000 + atraso);
    return () => {
      window.clearTimeout(primeiro);
      window.clearInterval(ciclo);
      cancelAnimationFrame(quadro.current);
    };
  }, [ativo, atraso, info?.valor]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!info) return <>{texto}</>;
  const atual = (info.valor * fracao).toLocaleString('pt-BR', {
    minimumFractionDigits: info.decimais,
    maximumFractionDigits: info.decimais,
    useGrouping: info.agrupar,
  });
  return (
    <span className="tabular-nums">
      {info.antes}
      {atual}
      {info.depois}
    </span>
  );
};

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
                <span className="font-medium text-white">
                  <NumeroVivo texto={barra.valor} ativo={ativo} atraso={index * 140} />
                </span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-white/10">
                <div
                  style={{
                    width: ativo ? `${Math.max(barra.largura, 3)}%` : '0%',
                    transitionDelay: `${index * 140}ms`,
                  }}
                  className={cn(
                    'relative h-full rounded-full transition-[width] duration-1000 ease-out',
                    index === dados.barras!.length - 1 ? 'bg-primary-500' : 'bg-lilas-500'
                  )}
                >
                  {/* Brilho passando pela barra */}
                  <span className="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
                    <span
                      style={{ animationDelay: `${1600 + index * 350}ms` }}
                      className="animate-brilho-barra absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-white/45 to-transparent motion-reduce:hidden"
                    />
                  </span>
                  {/* Lead correndo até o fim da barra */}
                  {ativo && (
                    <span
                      style={{ animationDelay: `${1200 + index * 600}ms` }}
                      className="animate-lead-barra absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-[0_0_10px_2px_rgba(86,254,213,0.7)] motion-reduce:hidden"
                      aria-hidden="true"
                    />
                  )}
                </div>
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
                <NumeroVivo texto={metrica.valor} ativo={ativo} atraso={300 + index * 120} />
              </p>
              {metrica.detalhe && (
                <p className="text-tagline-3 mt-1.5 text-white/45">{metrica.detalhe}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {dados.indicadores && (
        <div
          className={cn(
            'mt-5 grid gap-2.5',
            dados.indicadores.length === 3 ? 'grid-cols-3' : 'grid-cols-2'
          )}
        >
          {dados.indicadores.map((item, index) => (
            <div key={item.label} className="min-w-0 rounded-2xl bg-white/5 p-2.5 sm:p-3">
              <span className="block text-[0.6875rem] text-white/55 sm:text-tagline-3">{item.label}</span>
              <p className="font-titulo mt-1.5 text-[1.2rem] leading-none sm:text-[1.375rem] font-medium whitespace-nowrap text-white">
                <NumeroVivo texto={item.valor} ativo={ativo} atraso={500 + index * 120} />
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
