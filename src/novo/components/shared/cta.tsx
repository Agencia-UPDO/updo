import { balance } from '@/novo/utils/balance';
import { realce } from '@/novo/components/shared/realce';
import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

interface CtaProps {
  title?: string;
  description?: string;
}

const Cta = ({
  title = 'Vamos olhar o seu *funil* juntos?',
  description = 'No diagnóstico gratuito mapeamos onde o seu marketing e o seu comercial perdem oportunidades e saímos com um plano de ação. São cerca de 45 minutos, sem compromisso.',
}: CtaProps) => {
  return (
    <section className="pb-18 md:pb-28">
      <div className="main-container">
        <div className="bg-secondary relative overflow-hidden rounded-3xl px-6 py-16 md:px-16 md:py-24">
          <div className="relative z-10 mx-auto max-w-[760px] space-y-8 text-center">
            <RevealAnimation>
              <div className="flex justify-center">
                <Badge text="Diagnóstico estratégico" tone="dark" />
              </div>
            </RevealAnimation>
            <div className="space-y-4">
              <TextReveal delay={0.2}>
                <h2 style={balance} className="text-white">{realce(title, 'dark')}</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[600px] text-white/60">{description}</p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/diagnostico" className="inline-flex w-full sm:w-auto">
                  <ButtonPrimary text="Agendar diagnóstico" className="w-full" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto"
                >
                  <ButtonWhite text="Falar no WhatsApp" whatsapp className="w-full" />
                </a>
              </div>
            </RevealAnimation>
          </div>
          <div className="bg-primary-500/15 pointer-events-none absolute -right-24 -bottom-40 size-96 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
