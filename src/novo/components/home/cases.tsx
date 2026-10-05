import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import { ArrowUpRightIcon } from '@/novo/components/shared/icons';
import SectionHeading from '@/novo/components/shared/section-heading';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { casesHome } from '@/novo/data/home';
import { cn } from '@/novo/utils/cn';
import Link from 'next/link';

const Cases = () => {
  return (
    <section id="cases" className="relative isolate bg-white py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            badge="Cases"
          contador="04 / 08"
            title="Resultados com *nome de setor*, período e número"
            description="Cada case mostra o ponto de partida, o que foi feito e o que mudou nos números do cliente."
            className="max-lg:text-center [&_div]:max-lg:justify-center [&_p]:max-lg:mx-auto"
          />
          <RevealAnimation delay={0.3}>
            <Link href="/cases" className="inline-flex shrink-0">
              <ButtonWhite text="Ver todos os cases" />
            </Link>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {casesHome.map((item, index) => {
            const escuro = index === 0 || index === 3;

            return (
              <RevealAnimation
                key={item.href}
                delay={0.1 + index * 0.08}
                className="col-span-12 md:col-span-6"
              >
                <Link
                  href={item.href}
                  className={cn(
                    'group flex h-full flex-col justify-between gap-12 rounded-3xl p-7 md:p-9',
                    escuro ? 'bg-secondary' : index === 1 ? 'bg-primary-50' : 'bg-lilas-50'
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-4">
                      <p
                        className={cn(
                          'text-tagline-2',
                          escuro ? 'text-primary-500' : 'text-secondary/55'
                        )}
                      >
                        {item.sector} · {item.client}
                      </p>
                      <h3
                        className={cn(
                          'text-heading-5 md:text-heading-4 max-w-[440px] font-normal',
                          escuro && 'text-white'
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={cn(
                        'flex size-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
                        escuro ? 'bg-white/10 group-hover:bg-primary-500' : 'bg-white group-hover:bg-primary-500'
                      )}
                    >
                      <ArrowUpRightIcon
                        className={cn(
                          'size-5 transition-transform duration-300 group-hover:rotate-45',
                          escuro ? 'stroke-white group-hover:stroke-black' : 'stroke-black'
                        )}
                      />
                    </span>
                  </div>

                  <div
                    className={cn(
                      'grid grid-cols-3 gap-4 border-t pt-6',
                      escuro ? 'border-white/10' : 'border-stroke-3'
                    )}
                  >
                    {item.metrics.map((metric) => (
                      <div key={metric.label} className="space-y-1">
                        <p
                          className={cn(
                            'font-titulo font-medium text-heading-6 md:text-heading-5',
                            escuro ? 'text-white' : 'text-secondary'
                          )}
                        >
                          {metric.value}
                        </p>
                        <p className={cn('text-tagline-3', escuro ? 'text-white/55' : 'text-secondary/55')}>
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Link>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cases;
