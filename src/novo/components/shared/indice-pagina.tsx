import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import Cta from '@/novo/components/shared/cta';
import { ArrowRightIcon } from '@/novo/components/shared/icons';
import IconChip from '@/novo/components/shared/icon-chip';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import ProvaSocial from '@/novo/components/shared/prova-social';
import { realce } from '@/novo/components/shared/realce';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { balance } from '@/novo/utils/balance';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

export interface ItemIndice {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  tag?: string;
}

interface IndicePaginaProps {
  badge: string;
  title: string;
  description: string;
  secao: { badge: string; title: string; description: string };
  itens: ItemIndice[];
  rotuloLink: string;
  secundario: { text: string; href: string };
  /** Quatro colunas no computador (para 8 itens), senão três. */
  quatroColunas?: boolean;
}

// Página de entrada para todos os serviços ou todos os setores.
const IndicePagina = ({
  badge,
  title,
  description,
  secao,
  itens,
  rotuloLink,
  secundario,
  quatroColunas,
}: IndicePaginaProps) => (
  <>
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div className="main-container">
        <div className="mx-auto max-w-[860px] space-y-6 text-center">
          <RevealAnimation delay={0.1}>
            <div className="flex justify-center">
              <Badge text={badge} />
            </div>
          </RevealAnimation>
          <TextReveal delay={0.15}>
            <h1 style={balance}>{realce(title)}</h1>
          </TextReveal>
          <TextReveal delay={0.25}>
            <p className="mx-auto max-w-[640px]">{description}</p>
          </TextReveal>
          <RevealAnimation delay={0.35}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/diagnostico" className="inline-flex w-full sm:w-auto">
                <ButtonPrimary text="Agendar diagnóstico" className="w-full" />
              </Link>
              <Link href={secundario.href} className="inline-flex w-full sm:w-auto">
                <ButtonWhite text={secundario.text} className="w-full" />
              </Link>
            </div>
          </RevealAnimation>
        </div>
        <ProvaSocial className="mt-14 md:mt-18" />
      </div>
    </section>

    <section className="bg-lilas-50 relative isolate py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading badge={secao.badge} title={secao.title} description={secao.description} />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {itens.map((item, index) => (
            <RevealAnimation
              key={item.href}
              delay={0.1 + (index % (quatroColunas ? 4 : 3)) * 0.08}
              className={quatroColunas ? 'col-span-12 sm:col-span-6 xl:col-span-3' : 'col-span-12 sm:col-span-6 lg:col-span-4'}
            >
              <Link
                href={item.href}
                className="group hover:bg-secondary shadow-2 flex h-full flex-col rounded-2xl bg-white p-5 transition-colors duration-500 sm:min-h-[300px] sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  {item.icon && (
                    <IconChip
                      icon={item.icon}
                      tone={index % 2 === 0 ? 'menta' : 'lilas'}
                      className="group-hover:text-primary-500 transition-colors duration-500 group-hover:bg-white/10"
                    />
                  )}
                  {item.tag && (
                    <span className="text-tagline-3 bg-background-13 text-secondary/60 rounded-full px-3 py-1 transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white/60">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-heading-6 md:text-heading-5 mt-6 font-normal transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-tagline-2 mt-3 transition-colors duration-500 group-hover:text-white/65">
                  {item.description}
                </p>
                <span className="text-tagline-2 text-secondary group-hover:text-primary-500 mt-auto flex items-center gap-2 pt-5 font-medium transition-colors duration-500 sm:pt-8">
                  {rotuloLink}
                  <ArrowRightIcon className="size-4 stroke-current transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    <Cta />
  </>
);

export default IndicePagina;
