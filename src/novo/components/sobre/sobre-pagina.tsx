import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import IconChip from '@/novo/components/shared/icon-chip';
import ProvaSocial from '@/novo/components/shared/prova-social';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { balance } from '@/novo/utils/balance';
import { cn } from '@/novo/utils/cn';
import {
  Activity,
  Award,
  Bot,
  Brain,
  Briefcase,
  CheckCircle2,
  Database,
  FileSearch,
  Filter,
  Handshake,
  Megaphone,
  Mic,
  MousePointerClick,
  Palette,
  RefreshCcw,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const numeros = [
  { value: '+300', label: 'empresas atendidas' },
  { value: '+R$ 750M', label: 'em receita gerada' },
  { value: '+10', label: 'anos de mercado' },
  { value: '3x', label: 'finalista RD Station' },
];

const linhaDoTempo = [
  {
    year: '2017',
    title: 'A UPDO nasce em Curitiba',
    body: 'Rodrigo Bueno e Juliana Scottini criaram a UPDO para unir estratégia, comportamento do consumidor e operação comercial com uma leitura incomum no mercado: entender como a decisão acontece antes da mídia entrar no ar.',
    icon: Briefcase,
  },
  {
    year: 'Primeiros ciclos',
    title: 'Comportamento aplicado à performance',
    body: 'Rodrigo foi um dos pioneiros no Brasil ao aproximar comportamento do consumidor, neuromarketing e crescimento. A UPDO levou essa visão para páginas, anúncios, CRM e vendas.',
    icon: Brain,
  },
  {
    year: 'Hoje',
    title: 'Método, dados e IA no mesmo sistema',
    body: 'Hoje essa leitura vira processo comercial: mídia, CRM, dados, automação e IA conectados para reduzir atrito entre clique, conversa, proposta e venda.',
    icon: Activity,
  },
];

const valores = [
  {
    title: 'Diagnóstico antes da proposta',
    body: 'Antes de falar em plano, olhamos mídia, página, CRM, atendimento e taxa de conversão. A proposta vem depois do mapa do gargalo.',
  },
  {
    title: 'Comportamento antes do layout',
    body: 'Design, anúncio e automação precisam considerar como a pessoa decide. Bonito sem intenção clara vira enfeite caro.',
  },
  {
    title: 'Mídia olhando para venda',
    body: 'Campanha não termina no lead. Acompanhamos oportunidade, reunião, proposta e fechamento para saber onde ajustar.',
  },
  {
    title: 'Senioridade no dia a dia',
    body: 'Quem desenha a estratégia continua perto da operação. A leitura do projeto não some depois da reunião comercial.',
  },
  {
    title: 'Rotina para destravar',
    body: 'Quando o número não anda, revisamos canal, mensagem, oferta, atendimento e processo. Sem empurrar mais verba como única resposta.',
  },
];

const socios = [
  {
    name: 'Rodrigo Bueno',
    role: 'CEO & Fundador',
    photo: '/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg',
    bio: 'Estrategista de marketing e vendas há mais de uma década. Foi um dos primeiros profissionais no Brasil a levar comportamento do consumidor e neuromarketing para a rotina de mídia, páginas e processo comercial.',
    bio2: 'Professor de educação executiva na PUCPR, professor de pós-graduação na PUCPR e Faculdade IBRATE, e professor de MBA na UFPR, e na Universidade Positivo.',
    badges: [
      { icon: Briefcase, label: '+300 empresas atendidas' },
      { icon: Award, label: '3x finalista RD Station' },
      { icon: Mic, label: 'Palestrante e professor' },
      { icon: Users, label: '+10 anos no mercado' },
    ],
  },
  {
    name: 'Juliana Scottini',
    role: 'Diretora de Criação & Sócia',
    photo: '/Imagens/Juliana-Scottini-Fundadora_UPDO.jpg',
    bio: 'Especialista em design estratégico, identidade de marca e experiência do usuário. Lidera a criação para que página, campanha e peça tenham função dentro do funil.',
    bio2: 'A leitura criativa passa por neurodesign, CRO e consistência de marca: menos peça solta, mais clareza para quem precisa decidir.',
    badges: [
      { icon: Palette, label: 'Design estratégico' },
      { icon: MousePointerClick, label: 'CRO e UX' },
      { icon: TrendingUp, label: 'Marca e performance' },
      { icon: CheckCircle2, label: 'Sócia fundadora' },
    ],
  },
];

const servicos = [
  {
    icon: Megaphone,
    tag: 'Atração',
    title: 'Geração de demanda qualificada',
    body: 'Google, Meta, LinkedIn, SEO e TikTok escolhidos pelo momento de compra, não por moda de canal.',
  },
  {
    icon: Filter,
    tag: 'Conversão',
    title: 'Funil, automação e CRM',
    body: 'Landing pages, automações e segmentação para diminuir a perda entre clique, lead, conversa e oportunidade.',
  },
  {
    icon: Handshake,
    tag: 'Vendas',
    title: 'Inside Sales e processo comercial',
    body: 'Playbook, pipeline, treinamento, neurovendas e rotina de cobrança para o time vender com menos improviso.',
  },
  {
    icon: MousePointerClick,
    tag: 'Experiência',
    title: 'UX, landing pages e CRO',
    body: 'Páginas e testes pensados para remover dúvida, reduzir atrito e deixar a próxima ação óbvia.',
  },
  {
    icon: Database,
    tag: 'Dados',
    title: 'BI, dashboards e Radar UPDO',
    body: 'Dashboards que mostram onde o dinheiro entrou, onde o lead parou e qual canal merece ajuste.',
  },
  {
    icon: Bot,
    tag: 'IA aplicada',
    title: 'IA para vendas e atendimento',
    body: 'Agentes e automações para responder rápido, qualificar melhor e acionar o comercial no momento certo.',
  },
];

const manifesto = [
  {
    icon: FileSearch,
    title: 'Antes de vender, entendemos o gargalo',
    body: 'Campanha, página, CRM, atendimento ou oferta: cada problema pede uma decisão diferente.',
  },
  {
    icon: RefreshCcw,
    title: 'O projeto roda em ciclos curtos',
    body: 'Hipótese, execução, leitura e ajuste. Sem esperar o fim do mês para descobrir o que travou.',
  },
  {
    icon: TrendingUp,
    title: 'Receita vale mais que volume',
    body: 'Lead barato que não vira oportunidade não sustenta crescimento. A conta precisa fechar no caixa.',
  },
];

const SobrePagina = () => (
  <>
    {/* Topo */}
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
          <div className="col-span-12 space-y-8 lg:col-span-6">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <div>
                  <Badge text="Sobre a UPDO" />
                </div>
              </RevealAnimation>
              <TextReveal delay={0.15}>
                <h1 style={balance}>A agência que conecta marketing, vendas, CRM e dados à receita.</h1>
              </TextReveal>
              <TextReveal delay={0.25}>
                <p className="max-w-[560px]">
                  Desde 2017, ajudamos empresas a ligar mídia, páginas, CRM, atendimento e dados em uma
                  operação que mostra onde o cliente trava antes da venda.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.35} direction="left">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/diagnostico" className="inline-flex w-full sm:w-auto">
                  <ButtonPrimary text="Agendar diagnóstico" className="w-full" />
                </Link>
                <Link href="/cases" className="inline-flex w-full sm:w-auto">
                  <ButtonWhite text="Ver cases" className="w-full" />
                </Link>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3} direction="right" className="col-span-12 lg:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/Imagens/sala-cheia.jpg"
                  alt="Rodrigo Bueno conduzindo uma palestra para um auditório cheio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <ul className="bg-secondary shadow-6 relative -mt-12 mx-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:mx-8 md:grid-cols-4">
                {numeros.map((n, index) => (
                  <li key={n.label} className="bg-secondary p-4 text-center">
                    <p
                      className={cn(
                        'font-titulo text-heading-6 font-medium',
                        index === 0 ? 'text-primary-500' : 'text-white'
                      )}
                    >
                      {n.value}
                    </p>
                    <p className="text-tagline-3 mt-1 text-white/60">{n.label}</p>
                  </li>
                ))}
              </ul>
            </figure>
          </RevealAnimation>
        </div>
        <ProvaSocial className="mt-16 md:mt-20" />
      </div>
    </section>

    {/* História */}
    <section className="bg-white py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="A história"
          title="A UPDO nasceu conectando comportamento do consumidor ao funil de vendas."
          description="A UPDO foi criada para resolver uma separação comum: marketing olhando para lead, vendas olhando para meta e diretoria olhando para caixa. Nosso trabalho é juntar as três leituras."
        />
        <ol className="relative grid gap-6 md:grid-cols-3">
          <span
            aria-hidden="true"
            className="from-lilas-500 to-primary-500 absolute top-7 right-[16%] left-[16%] hidden h-0.5 bg-linear-to-r md:block"
          />
          {linhaDoTempo.map((item, index) => (
            <RevealAnimation key={item.title} delay={0.1 + index * 0.12}>
              <li className="relative flex h-full flex-col items-center gap-5 text-center">
                <span
                  className={cn(
                    'relative z-10 flex size-14 items-center justify-center rounded-full ring-8 ring-white',
                    index === linhaDoTempo.length - 1 ? 'bg-primary-500 text-secondary' : 'bg-secondary text-primary-500'
                  )}
                >
                  <item.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-tagline-2 bg-lilas-50 text-lilas-700 rounded-full px-4 py-1 font-medium">
                  {item.year}
                </span>
                <div className="space-y-2">
                  <h3 className="text-heading-6 font-normal">{item.title}</h3>
                  <p className="text-tagline-2 mx-auto max-w-[360px]">{item.body}</p>
                </div>
              </li>
            </RevealAnimation>
          ))}
        </ol>
      </div>
    </section>

    {/* Quem lidera */}
    <section className="py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading badge="Quem lidera" title="Estratégia de quem também responde pela execução." />
        <div className="grid grid-cols-12 gap-6">
          {socios.map((p, index) => (
            <RevealAnimation key={p.name} delay={0.1 + index * 0.12} className="col-span-12 lg:col-span-6">
              <article className="bg-secondary flex h-full flex-col overflow-hidden rounded-3xl md:flex-row">
                <div className="relative aspect-[4/5] w-full md:aspect-auto md:w-[42%]">
                  <Image
                    src={p.photo}
                    alt={`${p.name}, ${p.role} da UPDO`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-7">
                  <div>
                    <p className="text-tagline-2 text-primary-500 font-medium">{p.role}</p>
                    <h3 className="text-heading-5 mt-1 font-normal text-white">{p.name}</h3>
                  </div>
                  <p className="text-tagline-2 text-white/70">{p.bio}</p>
                  <p className="text-tagline-2 text-white/55">{p.bio2}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.badges.map((b) => (
                      <li
                        key={b.label}
                        className="text-tagline-3 flex items-center gap-1.5 rounded-full bg-white/[0.07] px-3 py-1.5 text-white/80"
                      >
                        <b.icon className="text-primary-500 size-3.5" strokeWidth={2} aria-hidden="true" />
                        {b.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Manifesto */}
    <section className="bg-secondary py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          tone="dark"
          badge="Manifesto"
          title="Marketing precisa continuar depois do lead."
          description="A UPDO acompanha o que acontece entre o clique e a venda: página, formulário, WhatsApp, CRM, atendimento, proposta e fechamento. É nesse caminho que aparecem os ajustes que realmente mudam o resultado."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {manifesto.map((card, index) => (
            <RevealAnimation key={card.title} delay={0.1 + index * 0.1} className="col-span-12 md:col-span-4">
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <IconChip icon={card.icon} tone={index % 2 === 0 ? 'claro' : 'lilas'} />
                <div className="space-y-2">
                  <h3 className="text-heading-6 font-normal text-white">{card.title}</h3>
                  <p className="text-tagline-2 text-white/65">{card.body}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Valores */}
    <section className="bg-white py-18 md:py-28 xl:py-32">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <SectionHeading align="left" badge="Valores" title="O jeito UPDO de tocar projeto." />
          </div>
          <ol className="border-stroke-3 divide-stroke-3 col-span-12 divide-y border-y lg:col-span-7">
            {valores.map((v, index) => (
              <RevealAnimation key={v.title} delay={0.05 * index}>
                <li className="grid grid-cols-[56px_1fr] items-start gap-5 py-7">
                  <span className="font-titulo text-heading-6 text-lilas-500 font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-heading-6 font-normal">{v.title}</h3>
                    <p className="text-tagline-1">{v.body}</p>
                  </div>
                </li>
              </RevealAnimation>
            ))}
          </ol>
        </div>
      </div>
    </section>

    {/* O que fazemos */}
    <section className="py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="O que fazemos"
          title="Marketing, vendas, dados e IA para corrigir o funil inteiro."
          description="A UPDO atua onde a receita costuma escapar: aquisição, conversão da página, atendimento, CRM, processo comercial, dashboards e automações."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {servicos.map((s, index) => (
            <RevealAnimation key={s.title} delay={0.05 * index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="flex h-full flex-col gap-6 rounded-3xl bg-white p-7">
                <div className="flex items-center justify-between gap-4">
                  <IconChip icon={s.icon} tone={index % 2 === 0 ? 'lilas' : 'menta'} />
                  <span className="text-tagline-3 bg-background-13 text-secondary/70 rounded-full px-3 py-1 font-medium">
                    {s.tag}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-6 font-normal">{s.title}</h3>
                  <p className="text-tagline-2">{s.body}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/o-que-fazemos" className="inline-flex">
            <ButtonWhite text="Ver detalhes de cada serviço" />
          </Link>
        </div>
      </div>
    </section>

    {/* Próximo passo */}
    <section className="pb-18 md:pb-28 xl:pb-32">
      <div className="main-container">
        <div className="bg-lilas-700 relative isolate overflow-hidden rounded-3xl px-7 py-14 text-center md:px-12 md:py-20">
          <div className="bg-primary-500/20 pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full blur-3xl" />
          <p className="text-tagline-2 text-primary-300 font-medium">Próximo passo</p>
          <h2 style={balance} className="text-heading-3 mx-auto mt-3 max-w-[760px] font-normal text-white">
            Vamos descobrir onde o funil está perdendo dinheiro?
          </h2>
          <p className="text-tagline-1 mx-auto mt-4 max-w-[560px] text-white/75">
            O diagnóstico separa problema de canal, mensagem, página, atendimento, CRM e venda para
            priorizar o que muda resultado.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/diagnostico" className="inline-flex">
              <ButtonPrimary text="Quero meu diagnóstico gratuito" />
            </Link>
            <Link href="/cases" className="inline-flex">
              <ButtonWhite text="Ver cases de resultado" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default SobrePagina;
