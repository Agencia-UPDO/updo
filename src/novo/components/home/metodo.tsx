'use client';

import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import SectionHeading from '@/novo/components/shared/section-heading';
import { etapasMetodo } from '@/novo/data/home';
import { cn } from '@/novo/utils/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TOTAL = etapasMetodo.length;
const CENTRO = 250;
const RAIO = 190;
const INTERVALO = 3200;
// Folga em graus entre o nó e o começo/fim da seta
const FOLGA = 17;

const ponto = (anguloGraus: number, raio = RAIO) => {
  const rad = ((anguloGraus - 90) * Math.PI) / 180;
  return { x: CENTRO + raio * Math.cos(rad), y: CENTRO + raio * Math.sin(rad) };
};

const anguloDaEtapa = (index: number) => (360 / TOTAL) * index;

const arco = (index: number) => {
  const inicio = ponto(anguloDaEtapa(index) + FOLGA);
  const fim = ponto(anguloDaEtapa(index + 1) - FOLGA);
  return `M ${inicio.x} ${inicio.y} A ${RAIO} ${RAIO} 0 0 1 ${fim.x} ${fim.y}`;
};

const Metodo = () => {
  const [ativa, setAtiva] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => setAtiva((atual) => (atual + 1) % TOTAL), INTERVALO);
    return () => window.clearInterval(timer);
  }, [pausado]);

  const etapa = etapasMetodo[ativa];
  const Icone = etapa.icon;

  return (
    <section id="metodologia" className="relative isolate overflow-hidden py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle,var(--color-lilas-200)_1px,transparent_1.5px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_55%_50%_at_32%_62%,#000_15%,transparent_75%)] opacity-70 max-lg:mask-[radial-gradient(ellipse_80%_45%_at_50%_55%,#000_15%,transparent_75%)]"
      />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Método UPDO"
          contador="03 / 08"
          title="Um ciclo de *cinco etapas*, da hipótese ao caixa"
          description="Cada volta do ciclo gera dados que alimentam a próxima. Você acompanha o que está sendo feito e por quê em reuniões semanais."
        />

        <RevealAnimation delay={0.3}>
          <div
            className="grid items-center gap-10 lg:grid-cols-12"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
          >
            <div className="relative isolate mx-auto aspect-square w-full max-w-[560px] lg:col-span-7">
              <div
                aria-hidden="true"
                className="bg-primary-500/25 absolute inset-[18%] -z-10 rounded-full blur-3xl"
              />
              <svg viewBox="0 0 500 500" className="absolute inset-0 size-full" aria-hidden="true">
                <defs>
                  <marker
                    id="seta-metodo"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-lilas-200" />
                  </marker>
                  <marker
                    id="seta-metodo-ativa"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary-700" />
                  </marker>
                </defs>

                <g className="origin-center [transform-box:fill-box] animate-[spin_60s_linear_infinite] motion-reduce:animate-none">
                  <circle
                    cx={CENTRO}
                    cy={CENTRO}
                    r={RAIO + 34}
                    fill="none"
                    className="stroke-lilas-200"
                    strokeWidth="1.5"
                    strokeDasharray="2 10"
                    strokeLinecap="round"
                  />
                </g>
                <circle cx={CENTRO} cy={CENTRO} r={RAIO - 52} className="fill-white" />

                {etapasMetodo.map((item, index) => {
                  const destaque = index === ativa;
                  return (
                    <path
                      key={item.step}
                      d={arco(index)}
                      fill="none"
                      strokeWidth={destaque ? 3 : 2}
                      strokeLinecap="round"
                      markerEnd={destaque ? 'url(#seta-metodo-ativa)' : 'url(#seta-metodo)'}
                      className={cn(
                        'transition-colors duration-500',
                        destaque
                          ? 'stroke-primary-700 animate-[metodo-fluxo_1s_linear_infinite] [stroke-dasharray:8_6] motion-reduce:animate-none'
                          : 'stroke-lilas-200'
                      )}
                    />
                  );
                })}
              </svg>

              {etapasMetodo.map((item, index) => {
                const { x, y } = ponto(anguloDaEtapa(index));
                const ItemIcone = item.icon;
                const destaque = index === ativa;

                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setAtiva(index)}
                    aria-pressed={destaque}
                    aria-label={`Etapa ${item.step}: ${item.title}`}
                    style={{ left: `${(x / 500) * 100}%`, top: `${(y / 500) * 100}%` }}
                    className="group absolute flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center gap-2"
                  >
                    <span
                      className={cn(
                        'flex size-14 items-center justify-center rounded-full border-4 transition-all duration-500 md:size-18',
                        destaque
                          ? 'bg-secondary text-primary-500 border-primary-500 scale-110 shadow-[0_12px_30px_rgba(7,17,31,0.25)]'
                          : 'bg-lilas-100 text-lilas-700 border-background-13 group-hover:bg-lilas-200'
                      )}
                    >
                      <ItemIcone className="size-6 md:size-7" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        'text-tagline-3 md:text-tagline-2 rounded-full px-2.5 py-0.5 font-medium whitespace-nowrap transition-colors duration-500',
                        destaque ? 'bg-primary-500 text-secondary' : 'text-secondary/70 bg-white'
                      )}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}

              <div className="absolute top-1/2 left-1/2 flex w-[40%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center">
                <Image
                  src="/Imagens/favicon agencia updo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="size-10 md:size-16"
                />
                <p className="font-titulo text-tagline-1 md:text-heading-6 text-secondary">
                  Ciclo contínuo de crescimento
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div
                key={ativa}
                className="animate-[metodo-entra_0.5s_ease-out] rounded-3xl bg-white p-7 md:p-9"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-secondary text-primary-500 flex size-12 items-center justify-center rounded-xl">
                    <Icone className="size-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-tagline-2 text-lilas-500 font-medium">
                      Etapa {etapa.step} de 0{TOTAL}
                    </p>
                    <p className="font-titulo font-medium text-heading-5 text-secondary">{etapa.title}</p>
                  </div>
                </div>
                <p className="text-tagline-1 mt-5">{etapa.description}</p>
              </div>

              <div className="flex gap-2">
                {etapasMetodo.map((item, index) => (
                  <button
                    key={`${item.step}-${index === ativa ? ativa : 'x'}`}
                    type="button"
                    onClick={() => setAtiva(index)}
                    aria-label={`Ver etapa ${item.title}`}
                    className="bg-lilas-100 relative h-1.5 flex-1 cursor-pointer overflow-hidden rounded-full"
                  >
                    <span
                      className={cn(
                        'absolute inset-y-0 left-0 w-full rounded-full',
                        index < ativa && 'bg-lilas-500',
                        index === ativa && 'bg-primary-700',
                        index === ativa &&
                          !pausado &&
                          'origin-left animate-[metodo-progresso_3.2s_linear] motion-reduce:animate-none',
                        index > ativa && 'hidden'
                      )}
                    />
                  </button>
                ))}
              </div>
              <p className="text-tagline-2">
                Depois da otimização, o ciclo recomeça com um novo diagnóstico, já com os números da
                rodada anterior.
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Metodo;
