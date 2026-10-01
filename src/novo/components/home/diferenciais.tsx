import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { CheckIcon } from '@/novo/components/shared/icons';
import SectionHeading from '@/novo/components/shared/section-heading';
import Image from 'next/image';
import { Bot, Brain, Radar, ShieldCheck } from 'lucide-react';
import IconChip from '@/novo/components/shared/icon-chip';

const pilares = [
  {
    icon: Brain,
    title: 'Neuromarketing aplicado',
    description:
      'Copy, oferta e roteiro comercial desenhados a partir de gatilhos de decisão testados em campanhas reais.',
  },
  {
    icon: Bot,
    title: 'IA integrada ao funil',
    description:
      'Agentes que qualificam, atendem e nutrem leads, conectados ao seu CRM e com regras que o seu time entende.',
  },
  {
    icon: ShieldCheck,
    title: 'Governança e transparência',
    description:
      'Reuniões semanais, ISO 27001, comitê consultivo e dashboard aberto para você acompanhar cada decisão.',
  },
];

const radarItens = [
  'Panorama unificado e atualizado',
  'Retorno por canal, produto e etapa do funil',
  'Independente do CRM que você usa',
];

const Diferenciais = () => {
  return (
    <section className="bg-secondary py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          tone="dark"
          badge="Por que a UPDO"
          title="Método próprio, sistema próprio e uma década de operação"
          description="Trabalhamos como parte da sua estrutura de crescimento, com processo, tecnologia e acompanhamento próximo."
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <RevealAnimation delay={0.2} className="col-span-12 lg:col-span-7">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 p-7 md:p-9">
              <div className="flex items-center gap-3">
                <IconChip icon={Radar} tone="menta" />
                <p className="text-tagline-2 text-primary-500">Sistema próprio</p>
              </div>
              <h3 className="text-heading-4 mt-4 font-normal text-white">Radar UPDO</h3>
              <p className="text-tagline-1 mt-3 max-w-[520px] text-white/60">
                Um BI que conecta mídia, funil e comercial em um painel só, para que cada decisão
                parta do número de vendas.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {radarItens.map((item) => (
                  <li
                    key={item}
                    className="text-tagline-2 flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-white/80"
                  >
                    <CheckIcon className="size-4 [&_path]:stroke-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src="/Imagens/radar de matrículas.jpeg"
                  alt="Tela do Radar UPDO"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-left-top"
                />
              </div>
            </div>
          </RevealAnimation>

          <div className="col-span-12 grid gap-4 md:gap-6 lg:col-span-5">
            {pilares.map((pilar, index) => (
              <RevealAnimation key={pilar.title} delay={0.3 + index * 0.1}>
                <div className="flex flex-col justify-between gap-10 rounded-3xl border border-white/10 p-7">
                  <IconChip icon={pilar.icon} tone={index === 1 ? 'lilas' : 'claro'} />
                  <div className="space-y-2">
                    <h3 className="text-heading-6 font-normal text-white">{pilar.title}</h3>
                    <p className="text-tagline-2 text-white/60">{pilar.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
