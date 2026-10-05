import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { realce } from '@/novo/components/shared/realce';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import FluxoPilares from '@/novo/components/servicos/fluxo-pilares';
import { ArrowUpRightIcon, CheckIcon } from '@/novo/components/shared/icons';
import IconChip from '@/novo/components/shared/icon-chip';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { balance } from '@/novo/utils/balance';
import { cn } from '@/novo/utils/cn';
import {
  BarChart3,
  Bot,
  Compass,
  Eye,
  MessageSquareText,
  Quote,
  RefreshCw,
  SearchCheck,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const pilares = [
  {
    icon: Compass,
    label: 'Planejamento',
    description:
      'ICP, metas, canais e cronograma alinhados antes de qualquer execução. Nada começa sem clareza de para onde ir e por que.',
  },
  {
    icon: Target,
    label: 'Método',
    description:
      'Framework proprietário que conecta geração de demanda, qualificação e processo comercial em torno do mesmo objetivo de receita.',
  },
  {
    icon: Zap,
    label: 'Execução',
    description:
      'Ativação de canais, campanhas, automações e processo comercial com acompanhamento semanal e ajustes orientados por dado.',
  },
  {
    icon: RefreshCw,
    label: 'Feedback',
    description:
      'Dados em tempo real, dashboards e reuniões semanais que alimentam decisão, ajuste de rota e crescimento composto ao longo do tempo.',
  },
];

const niveis = [
  {
    number: '01',
    title: 'Nível Estratégico',
    who: 'C-level e liderança',
    description:
      'Trabalhamos diretamente com quem decide: CEO, CMO, CSO. Alinhamos visão, metas de receita, prioridades de canal e projeções de crescimento antes de qualquer execução.',
    items: [
      'Definição de ICP e posicionamento',
      'Metas de MRR, CAC e LTV',
      'Plano de canais e prioridades',
      'Projeções e cenários de crescimento',
    ],
  },
  {
    number: '02',
    title: 'Nível Tático',
    who: 'Gestores e times internos',
    description:
      'Conectamos estratégia à operação com os gestores e times internos. Campanhas, materiais, treinamento comercial e processos de nutrição saem do papel com responsáveis e SLAs claros.',
    items: [
      'Criação de campanhas e materiais',
      'Funil de nutrição e automação',
      'Treinamento de neuromarketing e vendas',
      'Handoff entre marketing e comercial',
    ],
  },
  {
    number: '03',
    title: 'Nível Operacional',
    who: 'Execução diária e otimização',
    description:
      'Execução com rigor, velocidade e transparência. Gestão de mídia paga em tempo real, otimização contínua de conversão e entrega dos KPIs combinados com visibilidade total no Radar UPDO.',
    items: [
      'Gestão diária de mídia paga',
      'Otimização de landing pages e CRO',
      'Dashboard e relatório de performance',
      'Ajustes em tempo real por dado',
    ],
  },
];

const areas = [
  {
    icon: Target,
    title: 'Geração de Demanda',
    description: 'Google, Meta, LinkedIn e SEO calibrados para gerar o lead certo com o menor CPL possível.',
    href: '/servicos/geracao-de-demanda',
  },
  {
    icon: Users,
    title: 'Inside Sales',
    description:
      'Playbook, pipeline, processo de qualificação e treinamento para o time comercial vender com consistência.',
    href: '/servicos/inside-sales',
  },
  {
    icon: Bot,
    title: 'IA para Vendas',
    description: 'Agentes de IA que qualificam leads, respondem objeções e agendam reuniões no WhatsApp 24/7.',
    href: '/servicos/ia-para-vendas',
  },
  {
    icon: BarChart3,
    title: 'Inteligência de Dados',
    description:
      'Dashboard unificado, atribuição multi-touch e KPIs que mostram onde cada real de marketing vira receita.',
    href: '/servicos/inteligencia-de-dados',
  },
  {
    icon: Zap,
    title: 'Funil e Automação',
    description:
      'Nutrição, lead scoring e automação de WhatsApp para o lead certo chegar ao comercial no momento certo.',
    href: '/servicos/funil-e-automacao',
  },
  {
    icon: Eye,
    title: 'UX e CRO',
    description:
      'Diagnóstico de abandono, hipóteses com dado e testes A/B para aumentar conversão de forma contínua.',
    href: '/servicos/ux-cro',
  },
  {
    icon: SearchCheck,
    title: 'Cliente Oculto',
    description:
      'Avaliação real do atendimento, follow-up, argumento comercial e percepção de valor da sua empresa e dos concorrentes.',
    href: '/servicos/cliente-oculto',
  },
  {
    icon: MessageSquareText,
    title: 'ChatGPT Ads',
    description:
      'Campanhas por intenção conversacional integradas a landing pages, tracking, SEO e GEO para gerar presença nas decisões em IA.',
    href: '/servicos/chatgpt-ads',
  },
];

const ComoTrabalhamosPagina = () => (
  <>
    {/* Topo */}
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
          <div className="col-span-12 space-y-8 lg:col-span-7">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <div>
                  <Badge text="Como funcionamos" />
                </div>
              </RevealAnimation>
              <TextReveal delay={0.15}>
                <h1 style={balance} className="xl:text-heading-2!">
                  {realce('Do diagnóstico ao resultado: *tudo conectado*, nada terceirizado.')}
                </h1>
              </TextReveal>
              <TextReveal delay={0.25}>
                <p className="max-w-[600px]">
                  Estruturamos estratégia, executamos com rigor e medimos cada etapa pelo impacto real no
                  caixa, não por métricas de vaidade. Marketing, vendas e dados funcionando como um só
                  sistema.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.3}>
              <ul className="space-y-3">
                {[
                  'Método próprio com pilares, níveis e entregáveis claros',
                  'Atuação nos níveis estratégico, tático e operacional',
                  'Transparência total sobre o que está funcionando',
                ].map((item) => (
                  <li key={item} className="text-tagline-1 text-secondary flex items-center gap-3">
                    <span className="bg-primary-500 flex size-6 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/diagnostico" className="inline-flex w-full sm:w-auto">
                  <ButtonPrimary text="Agendar diagnóstico" className="w-full" />
                </Link>
                <Link href="#areas" className="inline-flex w-full sm:w-auto">
                  <ButtonWhite text="Ver serviços" className="w-full" />
                </Link>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3} direction="right" className="col-span-12 lg:col-span-5">
            <figure className="bg-secondary shadow-6 relative overflow-hidden rounded-3xl p-6">
              <div aria-hidden="true" className="bg-lilas-500/25 pointer-events-none absolute inset-[20%] rounded-full blur-3xl" />
              <figcaption className="text-tagline-2 relative mb-4 flex items-center gap-2 font-medium text-white/70">
                <span className="bg-primary-500 size-1.5 rounded-full" />4 pilares UPDO
              </figcaption>
              <Image
                src="/Imagens/Infografico-Metodlogia-Updo.png"
                alt="Infográfico da metodologia UPDO: ciclo de Planejamento, Método, Execução e Feedback"
                width={520}
                height={545}
                priority
                className="relative mx-auto h-auto w-full max-w-[440px]"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>

    {/* 4 pilares */}
    <section className="bg-secondary py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          tone="dark"
          badge="Os 4 pilares"
          title="Um *ciclo contínuo* que conecta planejamento, execução e resultado."
          description="Cada projeto passa pelos mesmos quatro pilares, sem pular etapa, sem depender de intuição e sem perder o fio entre estratégia e entrega."
        />
        <RevealAnimation delay={0.2}>
          <div>
            <FluxoPilares
              itens={pilares.map((p) => ({
                icone: <p.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />,
                label: p.label,
                description: p.description,
                resultado: '',
              }))}
            />
          </div>
        </RevealAnimation>
      </div>
    </section>

    {/* 3 níveis */}
    <section className="bg-white py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Como atuamos"
          title="*Três níveis* de atuação para nenhuma lacuna entre estratégia e resultado."
          description="Atuamos nos níveis estratégico, tático e operacional ao mesmo tempo, conectando planejamento, execução e leitura de resultado com responsabilidade sobre o número, não só sobre a entrega."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {niveis.map((nivel, index) => (
            <RevealAnimation key={nivel.title} delay={0.1 + index * 0.1} className="col-span-12 lg:col-span-4">
              <div
                className={cn(
                  'flex h-full flex-col gap-6 rounded-3xl p-7 md:p-8',
                  ['bg-lilas-50', 'bg-primary-50', 'bg-background-13'][index]
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-tagline-3 text-secondary/70 rounded-full bg-white px-3 py-1 font-medium">
                    {nivel.who}
                  </span>
                  <span className="font-titulo text-heading-5 text-lilas-500 font-medium">{nivel.number}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 font-normal">{nivel.title}</h3>
                  <p className="text-tagline-2">{nivel.description}</p>
                </div>
                <ul className="mt-auto space-y-2.5 border-t border-black/5 pt-5">
                  {nivel.items.map((item) => (
                    <li key={item} className="text-tagline-2 text-secondary flex items-center gap-2.5">
                      <span className="bg-primary-500 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Áreas de entrega */}
    <section id="areas" className="scroll-mt-28 py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Áreas de entrega"
          title="Oito especialidades que funcionam como um *sistema único*."
          description="Cada área tem squad dedicado, metodologia própria e meta de resultado. O que diferencia é que todas comunicam entre si, sem silo, sem ruído e sem perda de contexto entre etapas."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {areas.map((area, index) => (
            <RevealAnimation key={area.href} delay={0.04 * index} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <Link
                href={area.href}
                className="group hover:bg-lilas-50 flex h-full flex-col gap-6 rounded-3xl bg-white p-7 transition-colors"
              >
                <IconChip icon={area.icon} tone={index % 2 === 0 ? 'lilas' : 'menta'} />
                <div className="space-y-2">
                  <h3 className="text-heading-6 font-normal">{area.title}</h3>
                  <p className="text-tagline-2">{area.description}</p>
                </div>
                <span className="text-tagline-2 text-secondary mt-auto inline-flex items-center gap-2 font-medium">
                  Ver detalhes
                  <ArrowUpRightIcon className="size-4 stroke-current transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Frase do Rodrigo */}
    <section className="bg-white py-18 md:py-24">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <figure className="mx-auto flex max-w-[880px] flex-col items-center gap-6 text-center">
            <Quote className="text-lilas-500 size-10" strokeWidth={1.5} aria-hidden="true" />
            <blockquote style={balance} className="text-heading-4 text-secondary font-normal">
              Vender está na capacidade de ser. E ser é ajudar seu cliente sem esperar nada em troca.
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span className="relative size-12 overflow-hidden rounded-full">
                <Image
                  src="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                  alt="Rodrigo Bueno"
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </span>
              <span className="text-tagline-1 text-secondary font-medium">Rodrigo Bueno, CEO da UPDO</span>
            </figcaption>
          </figure>
        </RevealAnimation>
      </div>
    </section>

    {/* Próximo passo */}
    <section className="py-18 md:py-28 xl:py-32">
      <div className="main-container">
        <div className="bg-lilas-700 relative isolate overflow-hidden rounded-3xl px-7 py-14 text-center md:px-12 md:py-20">
          <div className="bg-primary-500/20 pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full blur-3xl" />
          <p className="text-tagline-2 text-primary-300 font-medium">Próximo passo</p>
          <h2 style={balance} className="text-heading-3 mx-auto mt-3 max-w-[760px] font-normal text-white">
            {realce('Qual é o *desafio* da sua empresa?', 'dark')}
          </h2>
          <p className="text-tagline-1 mx-auto mt-4 max-w-[600px] text-white/75">
            O diagnóstico gratuito mapeia onde sua empresa perde receita: em geração de demanda,
            qualificação, processo comercial ou nos três ao mesmo tempo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/diagnostico" className="inline-flex">
              <ButtonPrimary text="Agendar diagnóstico gratuito" />
            </Link>
            <Link href="/sobre" className="inline-flex">
              <ButtonWhite text="Conhecer a equipe" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ComoTrabalhamosPagina;
