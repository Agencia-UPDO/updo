import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import { ArrowRightIcon } from '@/novo/components/shared/icons';
import IconChip from '@/novo/components/shared/icon-chip';
import SectionHeading from '@/novo/components/shared/section-heading';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import { servicosHome } from '@/novo/data/home';
import { servicos } from '@/novo/data/navegacao';
import Link from 'next/link';

const icones = Object.fromEntries(servicos.map((servico) => [servico.href, servico.icon]));

const Servicos = () => {
  return (
    <section id="servicos" className="bg-lilas-50 relative isolate py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            badge="Serviços"
          contador="02 / 08"
            title="Do anúncio ao caixa, cada etapa com *dono e meta*"
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
                className="group hover:bg-secondary flex h-full bg-white shadow-2 flex-col rounded-2xl p-5 sm:min-h-[320px] sm:p-7 transition-colors duration-500"
              >
                <div className="flex items-center justify-between gap-4">
                  {icones[servico.href] && (
                    <IconChip
                      icon={icones[servico.href]!}
                      tone={index % 2 === 0 ? 'menta' : 'lilas'}
                      className="transition-colors duration-500 group-hover:bg-white/10 group-hover:text-primary-500"
                    />
                  )}
                  <span className="text-tagline-3 bg-background-13 text-secondary/60 rounded-full px-3 py-1 transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white/60">
                    {servico.tag}
                  </span>
                </div>
                <div className="font-titulo text-[1.125rem] leading-[1.45] tracking-[-0.01em] md:text-[1.25rem] mt-6">
                  <h3 className="font-titulo text-[1.125rem] leading-[1.45] tracking-[-0.01em] md:text-[1.25rem] text-secondary inline font-medium transition-colors duration-500 group-hover:text-white">
                    {servico.title}.
                  </h3>{' '}
                  <p className="font-titulo text-[1.125rem] leading-[1.45] tracking-[-0.01em] md:text-[1.25rem] text-secondary/50 inline transition-colors duration-500 group-hover:text-white/60">
                    {servico.description}
                  </p>
                </div>
                <span className="text-tagline-2 text-secondary group-hover:text-primary-500 mt-auto flex items-center gap-2 pt-5 font-medium sm:pt-8 transition-colors duration-500">
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
