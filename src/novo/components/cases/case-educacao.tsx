import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { realce } from '@/novo/components/shared/realce';
import TextReveal from '@/novo/components/animation/text-reveal';
import { GraficoEficiencia, GraficoLeads } from '@/novo/components/cases/graficos-educacao';
import HeroFundo from '@/novo/components/home/hero-fundo';
import IconChip from '@/novo/components/shared/icon-chip';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import { balance } from '@/novo/utils/balance';
import { cn } from '@/novo/utils/cn';
import FluxoPilares from '@/novo/components/servicos/fluxo-pilares';
import {
  ArrowLeft,
  Compass,
  LineChart,
  Rocket,
  BookOpen,
  Database,
  Handshake,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const metricas = [
  { icon: Users, label: 'Geração de leads', value: '+211%', sub: 'de 450 para +1.400/mês' },
  { icon: Target, label: 'ROAS direto', value: '20x', sub: 'Retorno sobre investimento', destaque: true },
  { icon: TrendingUp, label: 'Taxa de conversão', value: '+166%', sub: 'de 6% para 16%' },
  { icon: Trophy, label: 'Ticket médio', value: '+40%', sub: 'de R$2.500 para R$3.500' },
];

const solucao = [
  {
    icon: Compass,
    title: 'Consultoria: A Fundação',
    description:
      'Diagnóstico de 6 meses com implementação das ferramentas certas: RD Station Marketing e CRM. Desenvolvemos playbooks de vendas, padronizamos processos e ministramos treinamentos de Neuromarketing e Neurovendas para alinhar as equipes.',
  },
  {
    icon: Rocket,
    title: 'Gestão 360°: A Aceleração',
    description:
      'Assumimos toda a operação de marketing. Estruturamos e otimizamos campanhas de anúncios, criamos materiais gráficos e de endomarketing, e estabelecemos reuniões semanais de alinhamento para garantir foco no objetivo: vender mais.',
  },
  {
    icon: LineChart,
    title: 'Inteligência de Dados: O Timão',
    description:
      'Aplicamos modelos de regressão linear para projetar resultados e ajustar a rota. A parceria próxima nos permitiu usar dados de forma estratégica, garantindo crescimento previsível e sustentável.',
  },
];

const aprendizados = [
  {
    icon: BookOpen,
    text: 'Estruturar processos comerciais antes de escalar investimento em mídia é o que transforma marketing em receita previsível.',
  },
  {
    icon: Database,
    text: 'Modelos de regressão linear aplicados a funis de vendas permitiram antecipar gargalos e ajustar campanhas antes de perdas.',
  },
  {
    icon: Handshake,
    text: 'A confiança construída na fase de consultoria é o que viabiliza a parceria de longo prazo. É aí que os maiores resultados aparecem.',
  },
];

const CaseEducacao = () => (
  <>
    {/* Topo */}
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div className="main-container space-y-12 md:space-y-16">
        <div className="mx-auto max-w-[860px] space-y-6 text-center">
          <RevealAnimation delay={0.05}>
            <div className="flex justify-center">
              <Link
                href="/marketing-educacional"
                className="text-tagline-2 text-secondary/60 hover:text-secondary inline-flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Voltar para soluções educacionais
              </Link>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <div className="flex justify-center">
              <Badge text="Case · Instituição de Ensino Superior" />
            </div>
          </RevealAnimation>
          <TextReveal delay={0.15}>
            <h1 style={balance}>ROAS 20x e +211% de leads gerados</h1>
          </TextReveal>
          <TextReveal delay={0.25}>
            <p className="mx-auto max-w-[640px]">
              Como uma instituição de ensino com quase 30 anos de história: do platô de crescimento à
              referência em performance comercial na área da saúde no Sul do Brasil.
            </p>
          </TextReveal>
        </div>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metricas.map((m, index) => (
            <RevealAnimation key={m.label} delay={0.2 + index * 0.08}>
              <li
                className={cn(
                  'flex h-full flex-col gap-5 rounded-3xl p-6 md:p-7',
                  m.destaque ? 'bg-secondary text-white' : 'border-stroke-3 border bg-white'
                )}
              >
                <span
                  className={cn(
                    'flex size-10 items-center justify-center rounded-xl',
                    m.destaque ? 'bg-primary-500 text-secondary' : 'bg-lilas-50 text-lilas-500'
                  )}
                >
                  <m.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p
                    className={cn(
                      'font-titulo text-heading-4 font-medium',
                      m.destaque ? 'text-primary-500' : 'text-secondary'
                    )}
                  >
                    {m.value}
                  </p>
                  <p className={cn('text-tagline-1 mt-1 font-medium', m.destaque ? 'text-white' : 'text-secondary')}>
                    {m.label}
                  </p>
                  <p className={cn('text-tagline-2 mt-1', m.destaque ? 'text-white/60' : 'text-secondary/55')}>
                    {m.sub}
                  </p>
                </div>
              </li>
            </RevealAnimation>
          ))}
        </ul>
      </div>
    </section>

    {/* Contexto */}
    <section className="bg-white py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading badge="Contexto" title="O *problema* de negócio" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <RevealAnimation delay={0.1} className="col-span-12 md:col-span-6">
            <div className="bg-background-13 h-full rounded-3xl p-7 md:p-9">
              <p className="text-tagline-2 text-lilas-500 font-medium">Problema</p>
              <p className="text-tagline-1 text-secondary/80 mt-4">
                Uma instituição de ensino com quase 30 anos de história, referência na área da saúde
                no Sul do Brasil, enfrentava um platô de crescimento. TimeComercial operava sem
                ferramentas adequadas e o marketing não possuía direcionamento estratégico claro. A
                operação anterior não entregava a performance esperada, tornando a troca inevitável.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} className="col-span-12 md:col-span-6">
            <div className="bg-secondary h-full rounded-3xl p-7 md:p-9">
              <p className="text-tagline-2 text-primary-500 font-medium">Hipótese</p>
              <p className="text-tagline-1 mt-4 text-white/85 italic">
                “Estruturando o processo comercial e assumindo o marketing 360°, conseguiríamos
                triplicar a geração de leads e elevar a taxa de conversão para o dobro do cenário
                anterior em menos de 12 meses.”
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>

    {/* Estratégia */}
    <section className="bg-secondary py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          tone="dark"
          badge="Estratégia"
          title="Da consultoria à escala, em *três fases*"
          description="Três pilares estruturais que transformaram os resultados."
        />
        <RevealAnimation delay={0.2}>
          <div>
            <FluxoPilares
              itens={solucao.map((s) => ({
                icone: <s.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />,
                label: s.title,
                description: s.description,
                resultado: '',
              }))}
            />
          </div>
        </RevealAnimation>
      </div>
    </section>

    {/* Resultados */}
    <section className="bg-white py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Resultados visuais"
          title="A transformação *em números*"
          description="Antes e depois da parceria com a UPDO."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-6">
            <GraficoLeads />
          </div>
          <div className="col-span-12 md:col-span-6">
            <GraficoEficiencia />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <RevealAnimation delay={0.1} className="col-span-12 md:col-span-6">
            <p className="text-tagline-1 bg-lilas-50 text-secondary/80 h-full rounded-3xl p-7">
              <strong className="text-secondary font-medium">Taxa de conversão de 16%.</strong> Contra
              os 6% anteriores, um salto de 166% que posiciona a instituição como referência de
              eficiência comercial no setor de educação na saúde.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.2} className="col-span-12 md:col-span-6">
            <p className="text-tagline-1 bg-primary-50 text-secondary/80 h-full rounded-3xl p-7">
              <strong className="text-secondary font-medium">ROAS de 20x.</strong> Para cada R$1
              investido em marketing, R$20 retornaram em receita, resultado que levou a parceria a
              ser reconhecida como caso de referência pela RD Station.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>

    {/* Reconhecimento */}
    <section className="bg-secondary py-18 md:py-28 xl:py-32">
      <div className="main-container">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
          <SectionHeading
            tone="dark"
            badge="Reconhecimento"
            title="Vencedores do *Prêmio RD Station* 2024"
            description="A parceria chegou à final em 2023 e conquistou o prêmio em 2024. Como parceiros Gold da plataforma, esse reconhecimento mostra que processo comercial, mídia e dados bem conectados geram resultado mensurável em captação educacional."
          />
          <RevealAnimation delay={0.3}>
            <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-3">
              <Image
                src="/Imagens/logo-rd-gold-UPDO-2025.png"
                alt="Parceiro Gold RD Station"
                width={120}
                height={48}
                className="h-9 w-auto object-contain"
              />
              <span className="text-tagline-2 text-secondary font-medium">
                Parceiro Gold · RD Station · 2024
              </span>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>

    {/* Aprendizados */}
    <section className="py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading badge="Aprendizados" title="O que esse case *ensina*" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {aprendizados.map((item, index) => (
            <RevealAnimation key={item.text} delay={0.1 + index * 0.1} className="col-span-12 md:col-span-4">
              <div className="flex h-full flex-col gap-6 rounded-3xl bg-white p-7">
                <IconChip icon={item.icon} tone={index % 2 === 0 ? 'lilas' : 'menta'} size="lg" />
                <p className="text-tagline-1 text-secondary/80">{item.text}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Chamada final */}
    <section className="pb-18 md:pb-28 xl:pb-32">
      <div className="main-container">
        <div className="bg-lilas-700 relative isolate overflow-hidden rounded-3xl px-7 py-14 text-center md:px-12 md:py-20">
          <div className="bg-primary-500/20 pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full blur-3xl" />
          <h2 style={balance} className="text-heading-3 mx-auto max-w-[760px] font-normal text-white">
            {realce('Sua instituição pode captar com mais *previsibilidade*.', 'dark')}
          </h2>
          <p className="text-tagline-1 mx-auto mt-4 max-w-[520px] text-white/75">
            Vamos entender o seu negócio antes de propor qualquer coisa.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/diagnostico" className="inline-flex">
              <ButtonPrimary text="Solicitar diagnóstico gratuito" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CaseEducacao;
