import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { ArrowUpRightIcon } from '@/novo/components/shared/icons';
import SectionHeading from '@/novo/components/shared/section-heading';
import { setores } from '@/novo/data/navegacao';
import Link from 'next/link';

const Setores = () => {
  return (
    <section id="setores" className="pt-6 pb-18 md:pb-28 xl:pb-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Setores"
          title="Cada mercado compra de um jeito"
          description="Começamos pelo funcionamento do seu setor: ciclo de venda, ticket, sazonalidade e quem decide a compra."
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {setores.map((setor, index) => (
            <RevealAnimation
              key={setor.href}
              delay={0.1 + index * 0.05}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <Link
                href={setor.href}
                className="group border-stroke-3 hover:border-secondary flex h-full min-h-[220px] flex-col justify-between rounded-2xl border bg-white p-7 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-tagline-2 text-secondary/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="bg-background-3 group-hover:bg-primary-500 flex size-10 items-center justify-center rounded-full transition-colors duration-300">
                    <ArrowUpRightIcon className="size-5 stroke-black transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 font-normal">{setor.title}</h3>
                  <p className="text-tagline-2">{setor.description}</p>
                </div>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Setores;
