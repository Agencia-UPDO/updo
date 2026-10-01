import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { ArrowRightIcon } from '@/novo/components/shared/icons';
import SectionHeading from '@/novo/components/shared/section-heading';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import { servicosHome } from '@/novo/data/home';
import Link from 'next/link';

const Servicos = () => {
  return (
    <section id="servicos" className="bg-white py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            badge="Serviços"
            title="Do anúncio ao caixa, cada etapa com dono e meta"
            description="Você contrata o que a operação precisa agora e integra o resto quando fizer sentido. Tudo conversa com o mesmo funil e os mesmos números."
            className="max-lg:text-center [&_div]:max-lg:justify-center [&_p]:max-lg:mx-auto"
          />
          <RevealAnimation delay={0.3}>
            <Link href="/diagnostico" className="inline-flex shrink-0">
              <ButtonPrimary text="Montar meu plano" />
            </Link>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {servicosHome.map((servico, index) => (
            <RevealAnimation
              key={servico.href}
              delay={0.1 + (index % 4) * 0.08}
              className="col-span-12 sm:col-span-6 xl:col-span-3"
            >
              <Link
                href={servico.href}
                className="group bg-background-13 hover:bg-secondary flex h-full min-h-[300px] flex-col rounded-2xl p-7 transition-colors duration-500"
              >
                <span className="text-tagline-2 text-secondary/45 transition-colors duration-500 group-hover:text-white/50">
                  ({String(index + 1).padStart(2, '0')}) {servico.tag}
                </span>
                <h3 className="text-heading-6 md:text-heading-5 mt-3 font-normal transition-colors duration-500 group-hover:text-white">
                  {servico.title}
                </h3>
                <p className="text-tagline-2 mt-3 transition-colors duration-500 group-hover:text-white/65">
                  {servico.description}
                </p>
                <span className="text-tagline-2 text-secondary group-hover:text-primary-500 mt-auto flex items-center gap-2 pt-8 font-medium transition-colors duration-500">
                  Conhecer serviço
                  <ArrowRightIcon className="size-4 stroke-current transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
