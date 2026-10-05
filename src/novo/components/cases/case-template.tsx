import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import { realce } from '@/novo/components/shared/realce';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import FluxoPilares from '@/novo/components/servicos/fluxo-pilares';
import IconChip from '@/novo/components/shared/icon-chip';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { balance } from '@/novo/utils/balance';
import { cn } from '@/novo/utils/cn';
import type { LucideIcon } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

export interface CaseConteudo {
  voltar: { text: string; href: string };
  badge: string;
  titulo: string;
  subtitulo: string;
  metricas: { icon: LucideIcon; label: string; value: string; sub: string; destaque?: boolean }[];
  problema: string;
  hipotese: string;
  estrategia: {
    title: string;
    description: string;
    passos: { icon: LucideIcon; title: string; description: string }[];
  };
  /** Seções visuais do case (funil, gráficos), na ordem em que aparecem. */
  secoes: { badge: string; title: string; description?: string; conteudo: ReactNode; fundo?: 'branco' | 'claro' }[];
  destaques: { titulo: string; texto: string }[];
  /** Bloco opcional de parceria contínua, com os anos de recorde. */
  parceria?: { title: string; description: string; anos: string[] };
  aprendizados: { icon: LucideIcon; text: string }[];
  chamada: { title: string; description: string; secundario?: { text: string; href: string } };
}

const CaseTemplate = ({ c }: { c: CaseConteudo }) => (
  <>
    {/* Topo */}
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div className="main-container space-y-12 md:space-y-16">
        <div className="mx-auto max-w-[860px] space-y-6 text-center">
          <RevealAnimation delay={0.05}>
            <div className="flex justify-center">
              <Link
                href={c.voltar.href}
                className="text-tagline-2 text-secondary/60 hover:text-secondary inline-flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                {c.voltar.text}
              </Link>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <div className="flex justify-center">
              <Badge text={c.badge} />
            </div>
          </RevealAnimation>
          <TextReveal delay={0.15}>
            <h1 style={balance}>{realce(c.titulo)}</h1>
          </TextReveal>
          <TextReveal delay={0.25}>
            <p className="mx-auto max-w-[640px]">{c.subtitulo}</p>
          </TextReveal>
        </div>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {c.metricas.map((m, index) => (
            <RevealAnimation key={m.label} delay={0.2 + index * 0.08}>
              <li
                className={cn(
                  'flex h-full flex-col gap-5 rounded-3xl p-6 md:p-7',
                  m.destaque ? 'bg-secondary text-white' : 'border-stroke-3 border bg-white'
                )}
              >
                <span
                  className={cn(
                    'flex size-10 items-center justify-center rounded-xl',
                    m.destaque ? 'bg-primary-500 text-secondary' : 'bg-lilas-50 text-lilas-500'
                  )}
                >
                  <m.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p
                    className={cn(
                      'font-titulo text-heading-4 font-medium',
                      m.destaque ? 'text-primary-500' : 'text-secondary'
                    )}
                  >
                    {m.value}
                  </p>
                  <p className={cn('text-tagline-1 mt-1 font-medium', m.destaque ? 'text-white' : 'text-secondary')}>
                    {m.label}
                  </p>
                  <p className={cn('text-tagline-2 mt-1', m.destaque ? 'text-white/60' : 'text-secondary/55')}>
                    {m.sub}
                  </p>
                </div>
              </li>
            </RevealAnimation>
          ))}
        </ul>
      </div>
    </section>

    {/* Contexto */}
    <section className="relative isolate bg-white py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading badge="Contexto" title="O *problema* de negócio" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <RevealAnimation delay={0.1} className="col-span-12 md:col-span-6">
            <div className="bg-background-13 h-full rounded-3xl p-7 md:p-9">
              <p className="text-tagline-2 text-lilas-500 font-medium">Problema</p>
              <p className="text-tagline-1 text-secondary/80 mt-4">{c.problema}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} className="col-span-12 md:col-span-6">
            <div className="bg-secondary h-full rounded-3xl p-7 md:p-9">
              <p className="text-tagline-2 text-primary-500 font-medium">Hipótese</p>
              <p className="text-tagline-1 mt-4 text-white/85 italic">“{c.hipotese}”</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>

    {/* Estratégia */}
    <section className="relative isolate bg-secondary py-18 md:py-28 xl:py-32">
      <MolduraGrade tone="dark" />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          tone="dark"
          badge="Estratégia"
          title={c.estrategia.title}
          description={c.estrategia.description}
        />
        <RevealAnimation delay={0.2}>
          <div>
            <FluxoPilares
              itens={c.estrategia.passos.map((p) => ({
                icone: <p.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />,
                label: p.title,
                description: p.description,
                resultado: '',
              }))}
            />
          </div>
        </RevealAnimation>
      </div>
    </section>

    {/* Seções visuais */}
    {c.secoes.map((secao, index) => (
      <section
        key={secao.title}
        className={cn('relative isolate py-18 md:py-28 xl:py-32', (secao.fundo ?? (index % 2 === 0 ? 'branco' : 'claro')) === 'branco' && 'bg-white')}
      >
        <MolduraGrade />
        <div className="main-container space-y-12 md:space-y-16">
          <SectionHeading badge={secao.badge} title={secao.title} description={secao.description} />
          <RevealAnimation delay={0.15}>
            <div>{secao.conteudo}</div>
          </RevealAnimation>
          {index === c.secoes.length - 1 && (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {c.destaques.map((d, i) => (
                <RevealAnimation key={d.titulo} delay={0.1 + i * 0.1} className="col-span-12 md:col-span-6">
                  <p
                    className={cn(
                      'text-tagline-1 text-secondary/80 h-full rounded-3xl p-7',
                      i % 2 === 0 ? 'bg-lilas-50' : 'bg-primary-50'
                    )}
                  >
                    <strong className="text-secondary font-medium">{d.titulo}</strong> {d.texto}
                  </p>
                </RevealAnimation>
              ))}
            </div>
          )}
        </div>
      </section>
    ))}

    {c.parceria && (
      <section className="relative isolate bg-secondary py-18 md:py-28 xl:py-32">
        <MolduraGrade tone="dark" />
        <div className="main-container space-y-12">
          <SectionHeading
            tone="dark"
            badge="Parceria contínua"
            title={c.parceria.title}
            description={c.parceria.description}
          />
          <ol className="relative mx-auto grid max-w-[880px] grid-cols-2 gap-4 md:grid-cols-4">
            {c.parceria.anos.map((ano, index) => (
              <RevealAnimation key={ano} delay={0.1 + index * 0.1}>
                <li className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-titulo text-heading-5 text-primary-500 font-medium">{ano}</span>
                  <span className="text-tagline-3 rounded-full bg-white/10 px-3 py-1 text-white/70">Recorde</span>
                </li>
              </RevealAnimation>
            ))}
          </ol>
        </div>
      </section>
    )}

    {/* Aprendizados */}
    <section className="relative isolate py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading badge="Aprendizados" title="O que esse case *ensina*" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {c.aprendizados.map((item, index) => (
            <RevealAnimation key={item.text} delay={0.1 + index * 0.1} className="col-span-12 md:col-span-4">
              <div className="flex h-full flex-col gap-6 rounded-3xl bg-white p-7">
                <IconChip icon={item.icon} tone={index % 2 === 0 ? 'lilas' : 'menta'} size="lg" />
                <p className="text-tagline-1 text-secondary/80">{item.text}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Chamada final */}
    <section className="pb-18 md:pb-28 xl:pb-32">
      <div className="main-container">
        <div className="bg-lilas-700 relative isolate overflow-hidden rounded-3xl px-7 py-14 text-center md:px-12 md:py-20">
          <div className="bg-primary-500/20 pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full blur-3xl" />
          <h2 style={balance} className="text-heading-3 mx-auto max-w-[760px] font-normal text-white">
            {realce(c.chamada.title, 'dark')}
          </h2>
          <p className="text-tagline-1 mx-auto mt-4 max-w-[520px] text-white/75">{c.chamada.description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/diagnostico" className="inline-flex">
              <ButtonPrimary text="Solicitar diagnóstico gratuito" />
            </Link>
            {c.chamada.secundario && (
              <Link href={c.chamada.secundario.href} className="inline-flex">
                <ButtonWhite text={c.chamada.secundario.text} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CaseTemplate;
