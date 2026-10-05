'use client';

import { cn } from '@/novo/utils/cn';
import { useEffect, useRef, useState } from 'react';

// Gráficos de antes e depois do case, animados quando entram na tela.
const useVisivel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visivel };
};

interface Barra {
  rotulo: string;
  valor: number;
  texto: string;
  destaque?: boolean;
}

const GrupoBarras = ({ barras, max, visivel }: { barras: Barra[]; max: number; visivel: boolean }) => (
  <div className="flex h-52 items-end justify-center gap-6">
    {barras.map((barra, index) => (
      <div key={barra.rotulo} className="flex h-full w-20 flex-col items-center justify-end gap-2">
        <span
          className={cn(
            'text-tagline-2 font-medium transition-opacity duration-500',
            visivel ? 'opacity-100' : 'opacity-0',
            barra.destaque ? 'text-secondary' : 'text-secondary/50'
          )}
          style={{ transitionDelay: `${700 + index * 200}ms` }}
        >
          {barra.texto}
        </span>
        <div
          className={cn(
            'w-full rounded-t-xl transition-[height] duration-1000 ease-out',
            barra.destaque ? 'bg-lilas-500' : 'bg-stroke-3'
          )}
          style={{
            height: visivel ? `${(barra.valor / max) * 75}%` : '0%',
            transitionDelay: `${index * 200}ms`,
          }}
        />
      </div>
    ))}
  </div>
);

const Cartao = ({ titulo, children }: { titulo: string; children: React.ReactNode }) => (
  <div className="border-stroke-3 h-full rounded-3xl border bg-white p-7">
    <p className="text-tagline-2 text-secondary/60 flex items-center gap-2 font-medium">
      <span className="bg-lilas-500 size-1.5 rounded-full" />
      {titulo}
    </p>
    <div className="mt-6">{children}</div>
  </div>
);

const Legenda = ({ itens }: { itens: { cor: string; texto: string }[] }) => (
  <div className="text-tagline-3 text-secondary/60 mt-5 flex justify-center gap-5">
    {itens.map((item) => (
      <span key={item.texto} className="flex items-center gap-1.5">
        <span className={cn('size-2.5 rounded-full', item.cor)} />
        {item.texto}
      </span>
    ))}
  </div>
);

export const GraficoLeads = () => {
  const { ref, visivel } = useVisivel();
  return (
    <div ref={ref} className="h-full">
      <Cartao titulo="Geração de Leads (mês)">
        <GrupoBarras
          visivel={visivel}
          max={1400}
          barras={[
            { rotulo: 'Antes da UPDO', valor: 450, texto: '450' },
            { rotulo: 'Com a UPDO', valor: 1400, texto: '1.400', destaque: true },
          ]}
        />
        <div className="text-tagline-3 text-secondary/50 mt-2 flex justify-center gap-6">
          <span className="w-20 text-center">Antes da UPDO</span>
          <span className="w-20 text-center">Com a UPDO</span>
        </div>
        <Legenda
          itens={[
            { cor: 'bg-stroke-3', texto: 'Antes' },
            { cor: 'bg-lilas-500', texto: 'Com UPDO' },
          ]}
        />
      </Cartao>
    </div>
  );
};

export const GraficoEficiencia = () => {
  const { ref, visivel } = useVisivel();
  const grupos = [
    { cenario: 'Antes da UPDO', conversao: 6, ticket: 2500 },
    { cenario: 'Com a UPDO', conversao: 16, ticket: 3500 },
  ];
  return (
    <div ref={ref} className="h-full">
      <Cartao titulo="Eficiência Comercial">
        <div className="grid grid-cols-2 gap-4">
          {grupos.map((grupo, g) => (
            <div key={grupo.cenario} className="flex flex-col items-center">
              <div className="flex h-52 items-end gap-3">
                {[
                  { valor: grupo.conversao, max: 16, texto: `${grupo.conversao}%`, cor: 'bg-lilas-500' },
                  {
                    valor: grupo.ticket,
                    max: 3500,
                    texto: `R$ ${grupo.ticket.toLocaleString('pt-BR')}`,
                    cor: 'bg-primary-500',
                  },
                ].map((barra, b) => (
                  <div key={barra.texto} className="flex h-full w-14 flex-col items-center justify-end gap-2">
                    <span
                      className={cn(
                        'text-tagline-3 text-secondary font-medium whitespace-nowrap transition-opacity duration-500',
                        visivel ? 'opacity-100' : 'opacity-0'
                      )}
                      style={{ transitionDelay: `${700 + (g * 2 + b) * 150}ms` }}
                    >
                      {barra.texto}
                    </span>
                    <div
                      className={cn(
                        'w-full rounded-t-xl transition-[height] duration-1000 ease-out',
                        barra.cor,
                        g === 0 && 'opacity-40'
                      )}
                      style={{
                        height: visivel ? `${(barra.valor / barra.max) * 75}%` : '0%',
                        transitionDelay: `${(g * 2 + b) * 150}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
              <span className="text-tagline-3 text-secondary/50 mt-2">{grupo.cenario}</span>
            </div>
          ))}
        </div>
        <Legenda
          itens={[
            { cor: 'bg-lilas-500', texto: 'Tx. Conversão' },
            { cor: 'bg-primary-500', texto: 'Ticket Médio' },
          ]}
        />
      </Cartao>
    </div>
  );
};
