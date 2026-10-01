'use client';

import RevealAnimation from '@/novo/components/animation/reveal-animation';
import IconChip from '@/novo/components/shared/icon-chip';
import SectionHeading from '@/novo/components/shared/section-heading';
import { etapasMetodo } from '@/novo/data/home';
import { useMediaQuery } from '@/novo/hooks/useMediaQuery';
import { cn } from '@/novo/utils/cn';
import { useState } from 'react';

const Metodo = () => {
  const [ativa, setAtiva] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="metodologia" className="py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Método UPDO"
          title="Cinco etapas, da hipótese ao caixa"
          description="Cada etapa tem entregáveis, métricas e responsáveis definidos. Você acompanha o que está sendo feito e por quê em reuniões semanais."
        />

        <RevealAnimation delay={0.3}>
          <div className="flex flex-col gap-4 lg:h-[420px] lg:flex-row">
            {etapasMetodo.map((etapa, index) => {
              const aberta = !isDesktop || ativa === index;

              return (
                <div
                  key={etapa.step}
                  onMouseEnter={() => setAtiva(index)}
                  className={cn(
                    'relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-700 ease-out',
                    aberta
                      ? 'bg-secondary border-secondary lg:flex-[2.4]'
                      : 'border-stroke-3 bg-white lg:flex-1'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <IconChip icon={etapa.icon} tone={aberta ? 'claro' : 'lilas'} size="lg" />
                    <span
                      className={cn(
                        'text-heading-5 font-normal transition-colors duration-500',
                        aberta ? 'text-white/40' : 'text-secondary/25'
                      )}
                    >
                      {etapa.step}
                    </span>
                  </div>
                  <div className="mt-10 space-y-3 lg:mt-0">
                    <h3
                      className={cn(
                        'font-normal transition-colors duration-500',
                        aberta ? 'text-heading-5 text-white' : 'text-heading-6 text-secondary'
                      )}
                    >
                      {etapa.title}
                    </h3>
                    <p
                      className={cn(
                        'text-tagline-1 max-w-[340px] transition-all duration-500',
                        aberta ? 'text-white/65 opacity-100' : 'opacity-0 lg:h-0'
                      )}
                    >
                      {etapa.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Metodo;
