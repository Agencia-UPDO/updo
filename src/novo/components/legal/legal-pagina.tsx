import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import { realce } from '@/novo/components/shared/realce';
import Badge from '@/novo/components/shared/ui/badge/badge';
import { balance } from '@/novo/utils/balance';
import type { LucideIcon } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

export interface SecaoLegal {
  title: string;
  content: ReactNode;
}

interface LegalPaginaProps {
  badge: string;
  title: string;
  description: string;
  atualizacao: string;
  resumo: string;
  contatos: { icon: LucideIcon; text: string }[];
  sections: SecaoLegal[];
}

const ancora = (titulo: string) =>
  titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Estilo do texto corrido das seções (parágrafos, listas, links).
const prosa =
  '[&_p]:text-tagline-1 [&_p]:text-secondary/70 [&_p+p]:mt-4 [&_ul+p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2.5 [&_li]:text-tagline-1 [&_li]:text-secondary/70 [&_li]:relative [&_li]:pl-5 [&_li]:before:bg-primary-500 [&_li]:before:absolute [&_li]:before:top-[0.6em] [&_li]:before:left-0 [&_li]:before:size-1.5 [&_li]:before:rounded-full [&_a]:text-lilas-500 [&_a]:font-medium [&_a]:underline-offset-2 hover:[&_a]:underline [&_strong]:text-secondary [&_strong]:font-medium [&_em]:text-secondary';

const LegalPagina = ({ badge, title, description, atualizacao, resumo, contatos, sections }: LegalPaginaProps) => (
  <>
    <section className="relative isolate pt-32 pb-14 md:pt-40 lg:pt-44">
      <HeroFundo />
      <div className="main-container">
        <div className="max-w-[760px] space-y-5">
          <RevealAnimation delay={0.05}>
            <div>
              <Link
                href="/"
                className="text-tagline-2 text-secondary/60 hover:text-secondary inline-flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Voltar para o início
              </Link>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <div>
              <Badge text={badge} />
            </div>
          </RevealAnimation>
          <TextReveal delay={0.15}>
            <h1 style={balance}>{realce(title)}</h1>
          </TextReveal>
          <TextReveal delay={0.25}>
            <p className="max-w-[620px]">{description}</p>
          </TextReveal>
        </div>
      </div>
    </section>

    <section className="pb-18 md:pb-28">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12">
          <aside className="col-span-12 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <div className="space-y-4">
              <div className="rounded-3xl bg-white p-6 md:p-7">
                <p className="text-tagline-3 text-secondary/50 font-medium">Atualização</p>
                <p className="font-titulo text-heading-6 text-secondary mt-1 font-medium">{atualizacao}</p>
                <p className="text-tagline-2 mt-3">{resumo}</p>
                <ul className="border-stroke-3 mt-5 space-y-3 border-t pt-5">
                  {contatos.map(({ icon: Icon, text }) => (
                    <li key={text} className="text-tagline-2 text-secondary flex items-center gap-3">
                      <span className="bg-lilas-500/10 text-lilas-500 flex size-9 shrink-0 items-center justify-center rounded-xl">
                        <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <nav aria-label="Nesta página" className="hidden rounded-3xl bg-white p-6 md:p-7 lg:block">
                <p className="text-tagline-3 text-secondary/50 mb-3 font-medium">Nesta página</p>
                <ol className="space-y-1">
                  {sections.map((secao) => (
                    <li key={secao.title}>
                      <a
                        href={`#${ancora(secao.title)}`}
                        className="text-tagline-2 text-secondary/70 hover:bg-background-13 hover:text-secondary block rounded-lg px-2 py-1.5 transition-colors"
                      >
                        {secao.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <div className="col-span-12 space-y-4 lg:col-span-8">
            {sections.map((secao) => (
              <article
                key={secao.title}
                id={ancora(secao.title)}
                className="scroll-mt-28 rounded-3xl bg-white p-6 md:p-9"
              >
                <h2 className="text-heading-5 font-normal">{secao.title}</h2>
                <div className={`mt-4 ${prosa}`}>{secao.content}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LegalPagina;
