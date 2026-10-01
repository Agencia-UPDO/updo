import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

const credenciais = [
  'Professor de educação executiva e pós-graduação na PUCPR',
  'Professor de MBA na UFPR e na Universidade Positivo',
  'Professor de pós-graduação na Faculdade IBRATE',
  'Treinamentos de vendas, neurovendas e IA para times comerciais',
];

const Fundador = () => {
  return (
    <section className="py-18 md:py-28 xl:py-32">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-16">
          <RevealAnimation delay={0.2} className="col-span-12 lg:col-span-5">
            <figure className="relative mx-auto aspect-[530/600] w-full max-w-[480px] overflow-hidden rounded-3xl">
              <Image
                src="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                alt="Rodrigo Bueno, fundador da UPDO"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </figure>
          </RevealAnimation>

          <div className="col-span-12 space-y-8 lg:col-span-7">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <div>
                  <Badge text="Quem lidera a UPDO" />
                </div>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Rodrigo Bueno, fundador e estrategista</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="max-w-[600px]">
                  Há mais de uma década Rodrigo estrutura a captação de instituições de ensino,
                  varejistas, e-commerces e empresas B2B em todo o Brasil. Ele participa da
                  estratégia de cada projeto e faz a ponte entre dados, mídia e time comercial.
                </p>
              </TextReveal>
            </div>

            <RevealAnimation delay={0.4}>
              <ul className="border-stroke-3 divide-stroke-3 divide-y border-y">
                {credenciais.map((item) => (
                  <li key={item} className="text-tagline-1 text-secondary py-3.5">
                    {item}
                  </li>
                ))}
              </ul>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/treinamentos-corporativos" className="inline-flex">
                  <ButtonWhite text="Treinamentos corporativos" className="w-full" />
                </Link>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <ButtonWhite text="UPDO no LinkedIn" className="w-full" />
                </a>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundador;
