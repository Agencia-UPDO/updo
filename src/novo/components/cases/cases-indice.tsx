'use client';

import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { realce } from '@/novo/components/shared/realce';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import { ArrowUpRightIcon } from '@/novo/components/shared/icons';
import { balance } from '@/novo/utils/balance';
import { cn } from '@/novo/utils/cn';
import { Factory, GraduationCap, ShoppingBag, Store } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const filtros = ['Todos', 'Educação', 'E-commerce', 'Varejo', 'Indústria'];

const cases = [
  {
    tag: 'Educação',
    client: 'Instituição de ensino',
    title: 'Mais leads, mais processo, mais matrícula.',
    description:
      'Reorganização da captação com estratégia, automação e processo comercial para transformar interesse em matrícula real.',
    href: '/cases/educacao',
    icon: GraduationCap,
    metrics: [
      { value: '+211%', label: 'geração de leads' },
      { value: '+166%', label: 'conversão comercial' },
      { value: '20x', label: 'ROAS direto' },
    ],
  },
  {
    tag: 'E-commerce',
    client: 'Moda infantil',
    title: 'De R$ 3k a R$ 211k de faturamento mensal.',
    description:
      'Análise de persona, funil e canais para escalar vendas com ROAS quase 5x e conversão acima da média do mercado.',
    href: '/cases/e-commerce',
    icon: ShoppingBag,
    metrics: [
      { value: '+6.900%', label: 'vendas mensais' },
      { value: '4.7x', label: 'ROAS geral' },
      { value: '4,45%', label: 'taxa de conversão' },
    ],
  },
  {
    tag: 'Varejo',
    client: 'Varejista híbrido B2B/B2C',
    title: 'Quebra de teto histórico após 20 anos de operação.',
    description:
      'Reconstrução da fundação digital, planejamento com sazonalidade e integração da jornada entre catálogo, CRM e loja física.',
    href: '/cases/varejo',
    icon: Store,
    metrics: [
      { value: '+87%', label: 'faturamento' },
      { value: '+1.400%', label: 'tráfego mensal' },
      { value: '+35%', label: 'ticket médio' },
    ],
  },
  {
    tag: 'Indústria',
    client: 'Bens de consumo',
    title: '1.527% de ROI com R$ 21,5k de mídia.',
    description:
      'Pesquisa, seleção de canais e otimização semanal para provar retorno de mídia digital para uma diretoria cética.',
    href: '/cases/industria',
    icon: Factory,
    metrics: [
      { value: '1.527%', label: 'ROI total' },
      { value: 'R$ 350k', label: 'receita gerada' },
      { value: '102', label: 'vendas atribuídas' },
    ],
  },
];

const provas = [
  { value: '4', label: 'setores com cases dedicados' },
  { value: '20x', label: 'ROAS em educação' },
  { value: '+6.900%', label: 'crescimento em e-commerce' },
  { value: '1.527%', label: 'ROI em indústria' },
];

const CasesIndice = () => {
  const [filtro, setFiltro] = useState('Todos');
  const visiveis = filtro === 'Todos' ? cases : cases.filter((c) => c.tag === filtro);

  return (
    <>
      {/* Topo */}
      <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-24">
        <HeroFundo />
        <div className="main-container space-y-12 md:space-y-16">
          <div className="mx-auto max-w-[820px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <div className="flex justify-center">
                <Badge text="Cases reais" />
              </div>
            </RevealAnimation>
            <TextReveal delay={0.15}>
              <h1 style={balance}>{realce('Resultados com *método*, dados e execução.')}</h1>
            </TextReveal>
            <TextReveal delay={0.25}>
              <p className="mx-auto max-w-[620px]">
                Histórias reais de empresas que cresceram quando marketing, vendas e operação passaram a
                trabalhar com mais clareza.
              </p>
            </TextReveal>
          </div>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {provas.map((p, index) => (
              <RevealAnimation key={p.label} delay={0.2 + index * 0.08}>
                <li
                  className={cn(
                    'h-full rounded-3xl p-6 text-center md:p-7',
                    index === 0 ? 'bg-secondary' : 'border-stroke-3 border bg-white'
                  )}
                >
                  <p
                    className={cn(
                      'font-titulo text-heading-4 font-medium',
                      index === 0 ? 'text-primary-500' : 'text-secondary'
                    )}
                  >
                    {p.value}
                  </p>
                  <p className={cn('text-tagline-2 mt-1', index === 0 ? 'text-white/70' : 'text-secondary/60')}>
                    {p.label}
                  </p>
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </div>
      </section>

      {/* Lista */}
      <section className="bg-white py-18 md:py-28 xl:py-32">
        <div className="main-container space-y-10 md:space-y-12">
          <SectionHeading badge="Por setor" title="Escolha o case mais *próximo* do seu cenário." />
          <div className="flex flex-wrap justify-center gap-2.5">
            {filtros.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFiltro(f)}
                className={cn(
                  'text-tagline-2 cursor-pointer rounded-full border px-5 py-2.5 font-medium transition-colors',
                  filtro === f
                    ? 'bg-secondary border-secondary text-white'
                    : 'border-stroke-3 text-secondary hover:border-lilas-200 hover:bg-lilas-50 bg-white'
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {visiveis.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                id={item.tag.toLowerCase().replace('-', '')}
                className="group bg-background-13 hover:bg-lilas-50 grid grid-cols-12 items-center gap-y-8 rounded-3xl p-7 transition-colors md:p-10 lg:gap-x-12"
              >
                <div className="col-span-12 space-y-4 lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'flex size-11 items-center justify-center rounded-xl',
                        index % 2 === 0 ? 'bg-lilas-500 text-white' : 'bg-primary-500 text-secondary'
                      )}
                    >
                      <item.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-tagline-2 text-secondary font-medium">{item.tag}</p>
                      <p className="text-tagline-3 text-secondary/55">{item.client}</p>
                    </div>
                  </div>
                  <h2 className="text-heading-5 font-normal">{item.title}</h2>
                  <p className="text-tagline-1 text-secondary/70">{item.description}</p>
                  <span className="text-tagline-1 text-secondary inline-flex items-center gap-2 pt-2 font-medium">
                    Ver case completo
                    <ArrowUpRightIcon className="size-5 stroke-current transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
                <ul className="col-span-12 grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-6">
                  {item.metrics.map((m, i) => (
                    <li
                      key={m.label}
                      className={cn('min-w-0 rounded-2xl p-3 sm:p-4 md:p-6', i === 0 ? 'bg-secondary' : 'bg-white')}
                    >
                      <p
                        className={cn(
                          'font-titulo text-[1rem] sm:text-heading-6 md:text-heading-5 font-medium whitespace-nowrap',
                          i === 0 ? 'text-primary-500' : 'text-secondary'
                        )}
                      >
                        {m.value}
                      </p>
                      <p className={cn('text-tagline-3 md:text-tagline-2 mt-1', i === 0 ? 'text-white/70' : 'text-secondary/60')}>
                        {m.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Próximo passo */}
      <section className="py-18 md:py-28 xl:py-32">
        <div className="main-container">
          <div className="bg-lilas-700 relative isolate overflow-hidden rounded-3xl px-7 py-14 text-center md:px-12 md:py-20">
            <div className="bg-primary-500/20 pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full blur-3xl" />
            <p className="text-tagline-2 text-primary-300 font-medium">Próximo passo</p>
            <h2 style={balance} className="text-heading-3 mx-auto mt-3 max-w-[760px] font-normal text-white">
              {realce('Quer entender qual case se parece com o seu *cenário*?', 'dark')}
            </h2>
            <p className="text-tagline-1 mx-auto mt-4 max-w-[560px] text-white/75">
              O diagnóstico ajuda a mapear onde sua operação perde performance e quais movimentos
              merecem prioridade agora.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/diagnostico" className="inline-flex">
                <ButtonPrimary text="Agendar diagnóstico" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasesIndice;
