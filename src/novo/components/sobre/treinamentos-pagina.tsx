import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import WhatsAppIcon from '@/novo/components/shared/whatsapp-icon';
import { realce } from '@/novo/components/shared/realce';
import TextReveal from '@/novo/components/animation/text-reveal';
import HeroFundo from '@/novo/components/home/hero-fundo';
import FluxoPilares from '@/novo/components/servicos/fluxo-pilares';
import Faq from '@/novo/components/shared/faq';
import { CheckIcon } from '@/novo/components/shared/icons';
import IconChip from '@/novo/components/shared/icon-chip';
import LeadForm from '@/novo/components/shared/lead-form';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { balance } from '@/novo/utils/balance';
import {
  BarChart3,
  BookOpen,
  Brain,
  ClipboardCheck,
  GraduationCap,
  Mic2,
  PenTool,
  Presentation,
  Search,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const temas = [
  {
    icon: Brain,
    title: 'Neurovendas e comportamento do consumidor',
    description:
      'Como decisores compram, por que objeções aparecem e como conduzir uma conversa comercial com mais clareza.',
  },
  {
    icon: WhatsAppIcon,
    title: 'Atendimento comercial e WhatsApp',
    description:
      'Rotina de primeiro contato, follow-up, recuperação de oportunidades e linguagem para não esfriar leads prontos.',
  },
  {
    icon: Workflow,
    title: 'Vendas consultivas e processo comercial',
    description:
      'Perguntas, critérios de qualificação, passagem de bastão e previsibilidade entre lead, oportunidade e fechamento.',
  },
  {
    icon: BarChart3,
    title: 'CRM, pipeline e gestão por dados',
    description:
      'Como transformar CRM em ferramenta de gestão, não só em cadastro que o time preenche quando lembra.',
  },
  {
    icon: Target,
    title: 'Marketing, funil e aquisição de clientes',
    description:
      'Leitura de mídia, oferta, página, lead e venda para o time entender de onde vem a demanda e onde ela trava.',
  },
  {
    icon: GraduationCap,
    title: 'IA aplicada a vendas e atendimento',
    description:
      'Uso prático de IA para qualificação, produtividade comercial, análise de conversas e apoio à rotina de liderança.',
  },
];

const formatos = [
  {
    icon: Users,
    title: 'Treinamento in company',
    description:
      'Conteúdo adaptado ao mercado, funil, equipe e metas da empresa. Pode ser presencial ou online.',
  },
  {
    icon: Presentation,
    title: 'Workshop executivo',
    description:
      'Encontro prático para lideranças comerciais, marketing e diretoria saírem com decisões e próximos passos.',
  },
  {
    icon: Mic2,
    title: 'Palestra para eventos',
    description: 'Conteúdo para convenções, encontros comerciais, semanas acadêmicas e eventos corporativos.',
  },
  {
    icon: ClipboardCheck,
    title: 'Programa com acompanhamento',
    description:
      'Trilhas em módulos, exercícios aplicados e evolução da rotina comercial ao longo de algumas semanas.',
  },
];

const etapas = [
  {
    icon: Search,
    label: 'Briefing',
    description:
      'Fazemos um briefing para entender público, funil, rotina comercial e objetivo da empresa.',
  },
  {
    icon: PenTool,
    label: 'Desenho',
    description: 'Desenhamos exemplos, exercícios e cases próximos do contexto do time.',
  },
  {
    icon: Presentation,
    label: 'Aplicação',
    description: 'Aplicamos o treinamento com prática, discussão e direcionamento claro.',
  },
  {
    icon: BookOpen,
    label: 'Continuidade',
    description: 'Entregamos materiais e recomendações para a liderança sustentar a rotina.',
  },
];

const faqTreinamentos = [
  {
    question: 'O treinamento é padrão ou desenhado para a empresa?',
    answer:
      'A base conceitual vem da experiência da UPDO em marketing, vendas, comportamento do consumidor e IA, mas o conteúdo é adaptado ao contexto da empresa. Antes do treinamento, levantamos mercado, público, funil, equipe e principais gargalos.',
  },
  {
    question: 'Pode ser presencial?',
    answer:
      'Sim. Fazemos treinamentos presenciais, online e híbridos. O formato depende do objetivo, do tamanho da equipe e do nível de prática que a empresa quer trabalhar.',
  },
  {
    question: 'Serve para time comercial ou para liderança?',
    answer:
      'Serve para os dois, mas com abordagens diferentes. Para o time, o foco é conversa, rotina, abordagem e execução. Para liderança, entramos mais em pipeline, indicadores, gestão comercial, CRM e leitura do funil.',
  },
  {
    question: 'Vocês falam de IA no treinamento?',
    answer:
      'Quando faz sentido para o objetivo, sim. A abordagem é prática: como usar IA para ganhar produtividade, analisar conversas, qualificar leads, criar materiais de apoio e reduzir tarefas repetitivas sem perder a leitura humana da venda.',
  },
  {
    question: 'Dá para treinar equipes de marketing e vendas juntas?',
    answer:
      'Dá, e costuma ser um bom caminho quando o problema está entre campanha, lead, atendimento e fechamento. O treinamento ajuda as áreas a enxergarem a mesma jornada, com métricas e responsabilidades mais claras.',
  },
];

const Check = ({ children }: { children: React.ReactNode }) => (
  <li className="text-tagline-1 text-secondary flex items-center gap-3">
    <span className="bg-primary-500 flex size-6 shrink-0 items-center justify-center rounded-full">
      <CheckIcon className="size-3.5" />
    </span>
    {children}
  </li>
);

const TreinamentosPagina = () => (
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
                  <Badge text="Educação executiva e in company" />
                </div>
              </RevealAnimation>
              <TextReveal delay={0.15}>
                <h1 style={balance}>{realce('Treinamentos corporativos para times que precisam *vender melhor*.')}</h1>
              </TextReveal>
              <TextReveal delay={0.25}>
                <p className="max-w-[560px]">
                  Workshops, palestras e programas in company sobre vendas, neurovendas, comportamento do
                  consumidor, IA, atendimento e rotina comercial, conduzidos por Rodrigo Bueno.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.3}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  'Professor de educação executiva na PUCPR',
                  'Professor de pós-graduação na PUCPR e IBRATE',
                  'Professor de MBA na UFPR',
                  'Conteúdo aplicado ao funil da empresa',
                ].map((item) => (
                  <Check key={item}>{item}</Check>
                ))}
              </ul>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#contato" className="inline-flex w-full sm:w-auto">
                  <ButtonPrimary text="Solicitar treinamento" className="w-full" />
                </Link>
                <Link href="#temas" className="inline-flex w-full sm:w-auto">
                  <ButtonWhite text="Ver temas" className="w-full" />
                </Link>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3} direction="right" className="col-span-12 lg:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/Imagens/sala-cheia.jpg"
                  alt="Rodrigo Bueno conduzindo treinamento para sala cheia"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-secondary shadow-6 relative mx-4 -mt-14 flex items-center gap-4 rounded-2xl p-4 md:mx-8">
                <span className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                    alt="Rodrigo Bueno, fundador da UPDO e professor de educação executiva"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </span>
                <span>
                  <span className="text-tagline-1 block font-medium text-white">Rodrigo Bueno</span>
                  <span className="text-tagline-3 block text-white/65">
                    Professor, palestrante e fundador da UPDO, com atuação em comportamento do
                    consumidor, marketing, vendas e IA aplicada a processos comerciais.
                  </span>
                </span>
              </figcaption>
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>

    {/* Temas */}
    <section id="temas" className="relative isolate scroll-mt-28 bg-white py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Temas dos treinamentos"
          title="Conteúdo para *melhorar venda*, atendimento e tomada de decisão."
          description="A pauta não nasce de um slide pronto. Ela parte do que o time precisa fazer melhor na rotina comercial."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {temas.map((tema, index) => (
            <RevealAnimation key={tema.title} delay={0.05 * index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-background-13 flex h-full flex-col gap-6 rounded-3xl p-7">
                <IconChip icon={tema.icon} tone={index % 2 === 0 ? 'lilas' : 'menta'} size="lg" />
                <div className="space-y-2">
                  <h3 className="text-heading-6 font-normal">{tema.title}</h3>
                  <p className="text-tagline-2">{tema.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Formatos */}
    <section className="relative isolate py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Formatos"
          title="O formato depende do que precisa *mudar na rotina*."
          description="Depois do briefing, definimos se faz mais sentido uma palestra, um workshop prático ou um programa em módulos para liderança, comercial, atendimento ou marketing."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {formatos.map((f, index) => (
            <RevealAnimation key={f.title} delay={0.08 * index} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="flex h-full flex-col gap-6 rounded-3xl bg-white p-7">
                <span className="bg-secondary text-primary-500 flex size-12 items-center justify-center rounded-2xl">
                  <f.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="space-y-2">
                  <h3 className="text-heading-6 font-normal">{f.title}</h3>
                  <p className="text-tagline-2">{f.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Como funciona */}
    <section className="relative isolate bg-secondary py-18 md:py-28 xl:py-32">
      <MolduraGrade tone="dark" />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          tone="dark"
          badge="Como funciona"
          title="A aula entra no *contexto da operação*."
          description="O encontro precisa deixar critérios, linguagem e rotina para o time usar depois, não apenas uma apresentação bonita."
        />
        <RevealAnimation delay={0.2}>
          <div>
            <FluxoPilares
              itens={etapas.map((e) => ({
                icone: <e.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />,
                label: e.label,
                description: e.description,
                resultado: '',
              }))}
            />
          </div>
        </RevealAnimation>
        <div className="flex justify-center">
          <Link href="#contato" className="inline-flex">
            <ButtonPrimary text="Conversar sobre treinamento" />
          </Link>
        </div>
      </div>
    </section>

    {/* Quem conduz */}
    <section className="relative isolate bg-white py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-16">
          <RevealAnimation delay={0.1} className="col-span-12 lg:col-span-5">
            <div className="relative mx-auto aspect-[530/600] w-full max-w-[460px] overflow-hidden rounded-3xl">
              <Image
                src="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                alt="Rodrigo Bueno em palestra"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </RevealAnimation>
          <div className="col-span-12 space-y-8 lg:col-span-7">
            <SectionHeading
              align="left"
              badge="Quem conduz"
              title="Treinamento conduzido por quem *trabalha com funil*, mídia e vendas."
              description="Fundador da UPDO, Rodrigo atua com comportamento do consumidor, marketing, vendas, neurovendas e IA aplicada a negócios. É professor de educação executiva na PUCPR, professor de pós-graduação na PUCPR e Faculdade IBRATE, e professor de MBA na UFPR."
            />
            <RevealAnimation delay={0.3}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  'Experiência em projetos de marketing e vendas',
                  'Didática voltada para aplicação no dia a dia',
                  'Leitura de funil, CRM e rotina comercial',
                  'Conteúdo com exemplos do mercado brasileiro',
                ].map((item) => (
                  <Check key={item}>{item}</Check>
                ))}
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>

    {/* Formulário */}
    <section id="contato" className="relative isolate scroll-mt-28 py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading
              align="left"
              badge="Solicitar treinamento"
              title="Conte o *contexto* da equipe."
              description="Antes de fechar a agenda, fazemos um briefing para entender a empresa, o público, o time e o objetivo do treinamento."
            />
          </div>
          <RevealAnimation delay={0.2} className="col-span-12 lg:col-span-7">
            <div>
              <LeadForm
                formName="Treinamentos Corporativos"
                service="Treinamentos Corporativos"
                pagePath="/treinamentos-corporativos"
                submitText="Solicitar proposta de treinamento"
                nota="Com base nas suas respostas, marcamos o briefing inicial e direcionamos o melhor formato para a equipe."
                selects={[
                  {
                    id: 'companySize',
                    label: 'Tamanho',
                    options: ['Até 10 pessoas', '11 a 50 pessoas', '51 a 200 pessoas', '201 a 500 pessoas', 'Mais de 500 pessoas'],
                  },
                  {
                    id: 'format',
                    label: 'Formato',
                    options: [
                      'Treinamento in company',
                      'Workshop executivo',
                      'Palestra para evento',
                      'Programa com acompanhamento',
                      'Ainda quero entender o melhor formato',
                    ],
                  },
                  {
                    id: 'topic',
                    label: 'Tema',
                    options: [
                      'Vendas e neurovendas',
                      'Atendimento comercial e WhatsApp',
                      'IA aplicada a vendas',
                      'CRM, pipeline e gestão comercial',
                      'Marketing, funil e aquisição',
                      'Treinamento para liderança',
                    ],
                  },
                ]}
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>

    <div className="bg-white">
      <Faq
        items={faqTreinamentos}
        badge="Dúvidas frequentes"
        title="*Antes* de levar o treinamento para o time."
        description="A conversa inicial define o objetivo, o público e o nível de profundidade. Assim o treinamento não vira palestra genérica."
      />
    </div>
  </>
);

export default TreinamentosPagina;
