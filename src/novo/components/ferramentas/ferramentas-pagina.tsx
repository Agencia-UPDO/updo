import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import Cta from '@/novo/components/shared/cta';
import IconChip from '@/novo/components/shared/icon-chip';
import { realce } from '@/novo/components/shared/realce';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimaryV2 from '@/novo/components/shared/ui/button/button-primary-v2';
import { ferramentas } from '@/novo/data/ferramentas';
import { balance } from '@/novo/utils/balance';
import { Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Vitrine das ferramentas gratuitas: um card por ferramenta (data/ferramentas.ts) e um card de "em breve"
const FerramentasPagina = () => (
  <>
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div className="main-container space-y-14 md:space-y-18">
        <div className="max-w-[780px] space-y-5">
          <RevealAnimation delay={0.1}>
            <div>
              <Badge text="Ferramentas gratuitas" />
            </div>
          </RevealAnimation>
          <TextReveal delay={0.15}>
            <h1 style={balance}>{realce('Entenda seus números de *marketing e vendas*.')}</h1>
          </TextReveal>
          <TextReveal delay={0.25}>
            <p>
              Calculadoras rápidas, feitas pela UPDO, para você saber quanto pode investir, quanto custa cada cliente e onde está o gargalo. Você recebe o diagnóstico na hora, de graça.
            </p>
          </TextReveal>
        </div>

        <ul className="grid grid-cols-12 gap-5 md:gap-6">
          {ferramentas.map((f, i) => (
            <RevealAnimation key={f.href} delay={0.2 + i * 0.1} className="col-span-12 md:col-span-6 xl:col-span-4">
              <li className="h-full">
                <Link
                  href={f.href}
                  className="group flex h-full flex-col gap-6 rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(7,17,31,0.35)] md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <IconChip icon={f.icone} tone="navy" size="lg" />
                    <span className="text-tagline-3 text-secondary/60 bg-background-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1">
                      <Clock className="size-3.5" aria-hidden="true" /> {f.tempo}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-titulo text-heading-6 text-secondary font-medium">{f.titulo}</h2>
                    <p className="text-tagline-2">{f.descricao}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {f.entregas.map((e) => (
                      <li key={e} className="text-tagline-3 text-secondary bg-primary-50 rounded-full px-3 py-1">
                        {e}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2">
                    <ButtonPrimaryV2 text="Usar grátis" />
                  </div>
                </Link>
              </li>
            </RevealAnimation>
          ))}

          <RevealAnimation delay={0.2 + ferramentas.length * 0.1} className="col-span-12 md:col-span-6 xl:col-span-4">
            <li className="border-stroke-3 flex h-full min-h-[320px] flex-col items-start justify-center gap-4 rounded-3xl border border-dashed bg-white/60 p-7 backdrop-blur-sm md:p-8">
              <IconChip icon={Sparkles} tone="lilas" size="lg" />
              <div className="space-y-2">
                <p className="font-titulo text-heading-6 text-secondary font-medium">Novas ferramentas em breve</p>
                <p className="text-tagline-2">Estamos preparando outras calculadoras e diagnósticos para marketing, vendas e atendimento.</p>
              </div>
            </li>
          </RevealAnimation>
        </ul>
      </div>
    </section>

    <Cta title="Prefere ver seus números com um *especialista*?" />
  </>
);

export default FerramentasPagina;
