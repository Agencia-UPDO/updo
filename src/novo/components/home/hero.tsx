import CounterNumberOnScroll from '@/novo/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import ClientesMarquee from '@/novo/components/home/clientes-marquee';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import Image from 'next/image';
import Link from 'next/link';

const destaques = [
  { value: '+211%', label: 'leads em uma instituição de ensino' },
  { value: '+6.900%', label: 'vendas mensais em um e-commerce' },
  { value: '+87%', label: 'faturamento de um varejista em 2 anos' },
  { value: '1.527%', label: 'ROI de mídia para uma indústria' },
];

const Hero = () => {
  return (
    <section className="pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <div className="main-container">
        <div className="flex flex-col gap-x-16 gap-y-12 lg:flex-row lg:items-end xl:gap-x-28">
          <div className="space-y-8 lg:w-[64%]">
            <div className="space-y-5 text-center md:text-left">
              <TextReveal delay={0.1}>
                <h1>Marketing, vendas e dados para sua empresa crescer com previsibilidade</h1>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="max-w-[560px] max-md:mx-auto">
                  Estratégia, mídia, CRM, automação e IA em um só plano, do primeiro anúncio ao
                  contrato assinado. Há mais de uma década em Curitiba, para empresas de todo o
                  Brasil.
                </p>
              </TextReveal>
            </div>

            <RevealAnimation delay={0.3} direction="left">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <Link href="/diagnostico" className="inline-flex w-full md:w-auto">
                  <ButtonPrimary text="Agendar diagnóstico" className="w-full" />
                </Link>
                <Link href="/cases" className="inline-flex w-full md:w-auto">
                  <ButtonWhite text="Ver cases" className="w-full" />
                </Link>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4} direction="right">
            <div className="lg:w-[36%]">
              <div className="border-stroke-3 grid grid-cols-2 gap-y-8 border-t pt-8 lg:border-t-0 lg:pt-0">
                <div className="space-y-1">
                  <p className="text-heading-4 text-secondary">
                    +<CounterNumberOnScroll value={300} />
                  </p>
                  <p className="text-tagline-2">empresas atendidas</p>
                </div>
                <div className="space-y-1">
                  <p className="text-heading-4 text-secondary">
                    R$ <CounterNumberOnScroll value={750} />M
                  </p>
                  <p className="text-tagline-2">em vendas geradas para clientes</p>
                </div>
                <div className="space-y-1">
                  <p className="text-heading-4 text-secondary">
                    +<CounterNumberOnScroll value={10} /> anos
                  </p>
                  <p className="text-tagline-2">estruturando operações comerciais</p>
                </div>
                <div className="space-y-1">
                  <p className="text-heading-4 text-secondary">3x</p>
                  <p className="text-tagline-2">finalista do prêmio RD Station</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4 md:mt-18">
          <RevealAnimation delay={0.3} className="col-span-12 md:col-span-5">
            <figure className="relative h-[340px] overflow-hidden rounded-3xl md:h-[460px]">
              <Image
                src="/Imagens/sala-cheia.jpg"
                alt="Rodrigo Bueno conduzindo um treinamento para um auditório cheio"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[60%_center]"
              />
              <figcaption className="text-tagline-2 absolute right-4 bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-secondary backdrop-blur">
                Treinamentos e workshops para times comerciais e de marketing
              </figcaption>
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.4} className="col-span-12 md:col-span-7">
            <div className="bg-secondary flex h-full min-h-[340px] flex-col justify-between rounded-3xl p-7 md:h-[460px] md:p-9">
              <div className="flex items-start justify-between gap-6">
                <p className="text-heading-6 max-w-[320px] text-white">
                  Alguns resultados de clientes
                </p>
                <Link
                  href="/cases"
                  className="text-tagline-2 text-primary-500 shrink-0 underline-offset-4 hover:underline"
                >
                  Ver cases
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-8">
                {destaques.map((destaque) => (
                  <li key={destaque.label} className="space-y-1 border-t border-white/10 pt-4">
                    <p className="text-heading-4 md:text-heading-3 text-white">{destaque.value}</p>
                    <p className="text-tagline-2 text-white/55">{destaque.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>

        <div className="mt-14 md:mt-18">
          <p className="text-tagline-2 mb-6 text-center">
            Empresas que já estruturaram o crescimento com a UPDO
          </p>
          <ClientesMarquee />
        </div>
      </div>
    </section>
  );
};

export default Hero;
