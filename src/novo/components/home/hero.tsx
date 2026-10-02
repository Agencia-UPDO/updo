import { cn } from '@/novo/utils/cn';
import RadarPainel from '@/novo/components/home/radar-painel';
import { balance } from '@/novo/utils/balance';
import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import NotificacoesFunil from '@/novo/components/home/notificacoes-funil';
import ClientesMarquee from '@/novo/components/home/clientes-marquee';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { selosParceiros } from '@/novo/data/home';
import {
  Award,
  CalendarCheck,
  Factory,
  GraduationCap,
  ShoppingBag,
  Store,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const destaques = [
  {
    value: '+166%',
    label: 'conversão comercial em uma instituição de ensino',
    setor: 'Educação',
    icon: GraduationCap,
    href: '/cases/educacao',
  },
  {
    value: '4,7x',
    label: 'ROAS geral em um e-commerce',
    setor: 'E-commerce',
    icon: ShoppingBag,
    href: '/cases/e-commerce',
  },
  {
    value: '+1.400%',
    label: 'tráfego mensal de um varejista',
    setor: 'Varejo',
    icon: Store,
    href: '/cases/varejo',
  },
  {
    value: '+R$ 350 mil',
    label: 'em receita nova para uma indústria',
    setor: 'Indústria',
    icon: Factory,
    href: '/cases/industria',
  },
];

const numeros = [
  { icon: Users, valor: '+300', label: 'empresas atendidas', cor: 'text-primary-700' },
  { icon: TrendingUp, valor: 'R$ 750M', label: 'em vendas geradas', cor: 'text-lilas-500' },
  { icon: CalendarCheck, valor: '+10 anos', label: 'de operação', cor: 'text-lilas-500' },
  { icon: Award, valor: '3x', label: 'finalista RD Station', cor: 'text-primary-700' },
];

const Hero = () => {
  return (
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div className="main-container">
        <div className="flex flex-col gap-x-12 gap-y-12 lg:flex-row lg:items-center xl:gap-x-16">
          <div className="space-y-8 lg:w-[56%]">
            <div className="space-y-5 text-center md:text-left">
              <TextReveal delay={0.1}>
                <h1 style={balance}>
                  Marketing, vendas e dados para sua empresa crescer com{' '}
                  <span className="box-decoration-clone bg-[linear-gradient(transparent_60%,var(--color-primary-500)_60%,var(--color-primary-500)_92%,transparent_92%)] px-1">
                    previsibilidade
                  </span>
                </h1>
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

            <RevealAnimation delay={0.4}>
              <ul className="border-stroke-3 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-6 sm:grid-cols-4">
                {numeros.map((numero) => (
                  <li key={numero.label} className="space-y-1">
                    <p className="font-titulo text-heading-5 text-secondary flex items-center gap-2 font-medium">
                      <numero.icon
                        className={cn('size-4.5 shrink-0', numero.cor)}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      {numero.valor}
                    </p>
                    <p className="text-tagline-3 text-secondary/60">{numero.label}</p>
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4} direction="right">
            <div className="w-full lg:w-[44%]">
              <RadarPainel />
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
              <NotificacoesFunil />
              <figcaption className="text-tagline-2 absolute right-4 bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-secondary backdrop-blur">
                Treinamentos e workshops para times comerciais e de marketing
              </figcaption>
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.4} className="col-span-12 md:col-span-7">
            <div className="bg-lilas-700 relative isolate flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl p-7 md:h-[460px] md:p-9">
              <div className="flex items-start justify-between gap-6">
                <p className="font-titulo font-medium text-heading-6 max-w-[320px] text-white">
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
                  <li key={destaque.label} className="border-t border-white/20 pt-4">
                    <Link href={destaque.href} className="group block space-y-1">
                      <span className="text-tagline-3 flex items-center gap-2 text-white/80">
                        <span className="text-primary-500 flex size-8 items-center justify-center rounded-lg bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
                          <destaque.icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        {destaque.setor}
                      </span>
                      <p className="font-titulo font-medium text-heading-5 md:text-heading-3 pt-2 whitespace-nowrap text-white">{destaque.value}</p>
                      <p className="text-tagline-2 text-white/75">{destaque.label}</p>
                    </Link>
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

        <div className="mt-10 flex flex-col items-center gap-5 md:mt-12">
          <p className="text-tagline-2 text-center">Parceiros certificados</p>
          <ul className="flex flex-wrap justify-center gap-3">
            {selosParceiros.map((selo) => (
              <li
                key={selo.src}
                className="border-stroke-3 flex h-18 w-40 items-center justify-center rounded-2xl border bg-white px-4 shadow-sm"
              >
                <Image
                  src={selo.src}
                  alt={selo.alt}
                  width={140}
                  height={56}
                  className={cn(
                    'max-h-11 w-auto max-w-[128px] object-contain',
                    selo.alt === 'Google Partner' && 'max-h-14'
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
