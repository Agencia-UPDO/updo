import RevealAnimation from "@/novo/components/animation/reveal-animation";
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import { realce } from '@/novo/components/shared/realce';
import TextReveal from "@/novo/components/animation/text-reveal";
import HeroFundo from "@/novo/components/home/hero-fundo";
import VideoDepoimento from "@/novo/components/home/video-depoimento";
import PainelMatriculas from "@/novo/components/educacao/painel-matriculas";
import ServicosEducacao from "@/novo/components/educacao/servicos-educacao";
import { CheckIcon } from "@/novo/components/shared/icons";
import Faq from "@/novo/components/shared/faq";
import IconChip from "@/novo/components/shared/icon-chip";
import LeadForm from "@/novo/components/shared/lead-form";
import SectionHeading from "@/novo/components/shared/section-heading";
import { selosParceiros } from "@/novo/data/home";
import ButtonPrimary from "@/novo/components/shared/ui/button/button-primary";
import ButtonWhite from "@/novo/components/shared/ui/button/button-white";
import Badge from "@/novo/components/shared/ui/badge/badge";
import { balance } from "@/novo/utils/balance";
import { cn } from "@/novo/utils/cn";
import { BarChart3, GraduationCap, TrendingUp, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const instituicoes = [
  { name: "PUCPR", src: "/Clientes/Logo PUCPR.png" },
  { name: "CNA", src: "/Clientes/Logo CNA.png" },
  { name: "Faculdade IBRATE", src: "/Clientes/Logo Faculdade Ibrate.png" },
  {
    name: "Instituto Equilibra",
    src: "/Clientes/Logo Instituto Equilibra.png",
  },
  { name: "Veta Pós-graduação", src: "/Clientes/Logo Veta Pós Graduação.png" },
  { name: "UniCV", src: "/Clientes/Logo UniCV.png" },
  { name: "Interpret 2B", src: "/Clientes/Logo Interpret 2B.png" },
];

const barreiras = [
  {
    icon: UsersRound,
    title: "Leads que não viram matrícula",
  },
  {
    icon: GraduationCap,
    title: "Turmas com baixa previsibilidade",
  },
  {
    icon: BarChart3,
    title: "Mídia sem leitura do funil",
  },
];

const metricasCase = [
  { valor: "+211%", label: "na geração de leads" },
  { valor: "+166%", label: "na conversão comercial" },
  { valor: "450 → 1.400", label: "leads por mês" },
];

export const faqEducacao = [
  {
    question: "Como poderei acompanhar o desempenho das campanhas?",
    answer:
      "Transparência é um dos nossos pilares. Além do acesso em tempo real ao Dashboard do seu Radar de Matrículas™, realizamos reuniões semanais de performance para alinhar métricas, ajustar rotas e garantir que a meta de captação esteja no caminho certo.",
  },
  {
    question: "A UPDO substitui o meu time de marketing ou agência atual?",
    answer:
      "Não necessariamente. Atuamos como uma camada de inteligência estratégica e alta performance. Podemos trabalhar em conjunto com seu time interno, fornecendo a engenharia de dados e o neuromarketing que muitas vezes as equipes generalistas não dominam.",
  },
  {
    question:
      "Quanto tempo leva para o sistema começar a gerar leads qualificados?",
    answer:
      "Nosso processo de on-boarding e setup leva, em média, de 10 a 15 dias. Após o 'go-live', é comum começarmos a ver os primeiros leads qualificados nas primeiras 48 a 72 horas de campanha ativa.",
  },
  {
    question: "O Radar de Matrículas™ se integra ao meu CRM atual?",
    answer:
      "O Radar de Matrículas™ é um sistema próprio e exclusivo da UPDO, desenvolvido para funcionar de forma independente. Ele não depende da integração com o seu CRM para entregar o que propõe: um panorama estratégico e visual completo de todas as matrículas da sua instituição, permitindo uma tomada de decisão rápida que os CRMs convencionais não oferecem.",
  },
  {
    question:
      "Além da gestão de tráfego, quais outras entregas a UPDO realiza?",
    answer:
      "Nossa consultoria é 360º. Além da performance, entregamos o Treinamento de Neuromarketing para sua equipe comercial e o Desenvolvimento do Playbook de Vendas Educacional: um guia prático e replicável que padroniza o seu processo de matrículas para garantir escala.",
  },
];

const EducacaoPagina = () => (
  <>
    {/* Topo */}
    <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
      <HeroFundo />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,var(--color-lilas-200)_1px,transparent_1.5px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_55%_45%_at_25%_30%,#000_15%,transparent_75%)] opacity-60"
      />
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
          <div className="col-span-12 space-y-8 lg:col-span-7">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <div>
                  <Badge text="Para faculdades, pós-graduações e instituições de ensino" />
                </div>
              </RevealAnimation>
              <TextReveal delay={0.15}>
                <h1 style={balance} className="xl:text-heading-2!">
                  {realce('Capte mais alunos e transforme leads em matrículas com mais *previsibilidade*.')}
                </h1>
              </TextReveal>
              <TextReveal delay={0.25}>
                <p className="max-w-[580px]">
                  Unimos mídia, landing pages, dados e processo comercial para
                  sua instituição captar alunos com mais previsibilidade e
                  transformar demanda em matrícula.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.3}>
              <ul className="space-y-3">
                {[
                  "Leads com mais intenção de matrícula",
                  "Mais previsibilidade para fechar turmas",
                  "Marketing e comercial conectados ao resultado",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-tagline-1 text-secondary flex items-center gap-3"
                  >
                    <span className="bg-primary-500 flex size-6 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#contato"
                    className="inline-flex w-full sm:w-auto"
                  >
                    <ButtonPrimary
                      text="Quero analisar minha captação"
                      className="w-full"
                    />
                  </Link>
                  <Link
                    href="/cases/educacao"
                    className="inline-flex w-full sm:w-auto"
                  >
                    <ButtonWhite text="Ver case" className="w-full" />
                  </Link>
                </div>
                <p className="text-tagline-2 text-secondary/55 mt-4">
                  Diagnóstico inicial para mapear gargalos de mídia, lead e
                  matrícula.
                </p>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation
            delay={0.4}
            direction="right"
            className="col-span-12 lg:col-span-5"
          >
            <div>
              <PainelMatriculas />
            </div>
          </RevealAnimation>
        </div>

        {/* Instituições */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-tagline-2 text-lilas-500 font-medium">
                Autoridade Educacional
              </p>
              <h2 className="text-heading-5 mt-2 font-normal">
                Instituições que confiam na UPDO.
              </h2>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="font-titulo text-heading-5 font-medium">+1.2M</p>
                <p className="text-tagline-2 text-secondary/60">
                  leads gerados
                </p>
              </div>
              <div>
                <p className="font-titulo text-heading-5 font-medium">
                  +R$ 450M
                </p>
                <p className="text-tagline-2 text-secondary/60">
                  em matrículas geradas
                </p>
              </div>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-7">
            {instituicoes.map((logo) => (
              <li
                key={logo.name}
                className="relative flex h-20 items-center justify-center px-2"
              >
                <div className="relative h-16 w-full md:h-14">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="border-stroke-3 mt-10 flex flex-col items-center gap-5 border-t pt-10 md:mt-12 md:pt-12">
            <p className="text-tagline-2 text-center">Parceiros certificados</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {selosParceiros.map((selo) => (
                <span
                  key={selo.src}
                  className="border-stroke-3 flex h-18 w-40 items-center justify-center rounded-2xl shadow-sm border bg-white px-3"
                >
                  <Image
                    src={selo.src}
                    alt={selo.alt}
                    width={140}
                    height={56}
                    className="max-h-11 w-auto max-w-[128px] object-contain"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Barreiras */}
    <section className="relative isolate bg-white py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Captação educacional"
          title="O que costuma *travar* a captação."
        />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {barreiras.map((item, index) => (
            <RevealAnimation
              key={item.title}
              delay={0.1 + index * 0.1}
              className="col-span-12 md:col-span-4"
            >
              <div
                className={cn(
                  "flex h-full flex-col gap-10 rounded-2xl p-7",
                  ["bg-lilas-50", "bg-primary-50", "bg-background-13"][
                    index % 3
                  ],
                )}
              >
                <IconChip
                  icon={item.icon}
                  tone={index % 2 === 0 ? "lilas" : "menta"}
                  size="lg"
                />
                <h3 className="text-heading-6 font-normal">{item.title}</h3>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>

    {/* Autoridade */}
    <section className="bg-secondary pt-18 md:pt-28 xl:pt-32">
      <div className="main-container">
        <SectionHeading
          tone="dark"
          badge="Autoridade"
          title="*Prova real* antes de falar em escala."
          description="Captação educacional precisa conectar mídia, atendimento e leitura do funil para virar matrícula."
        />
      </div>
    </section>

    {/* Case */}
    <section className="relative isolate bg-secondary pt-12 pb-18 md:pt-16 md:pb-28 xl:pb-32">
      <MolduraGrade tone="dark" semTopo />
      <div className="main-container space-y-12">
        <RevealAnimation delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-12">
            <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-16">
              <div className="col-span-12 space-y-6 lg:col-span-5">
                <span className="text-tagline-2 text-primary-500 font-medium">Case educacional</span>
                <h3 className="text-heading-5 font-normal text-white">
                  Instituição de Ensino Superior: mais leads, mais processo, mais matrícula.
                </h3>
                <p className="text-tagline-1 text-white/65">
                  A UPDO reorganizou a captação com estratégia, automação e processo comercial
                  para transformar interesse em resultado.
                </p>
                <p className="text-tagline-2 flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-white/70">
                  <span className="bg-primary-500 text-secondary flex size-9 shrink-0 items-center justify-center rounded-xl">
                    <TrendingUp className="size-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  Resultado acompanhado da geração do lead até a conversão comercial.
                </p>
              </div>
              <ul className="col-span-12 grid gap-4 sm:grid-cols-3 lg:col-span-7">
                {metricasCase.map((item) => (
                  <li key={item.label} className="rounded-2xl bg-white/5 p-6">
                    <p className="font-titulo text-heading-5 text-primary-500 font-medium whitespace-nowrap">
                      {item.valor}
                    </p>
                    <p className="text-tagline-2 mt-2 text-white/60">{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealAnimation>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-heading-6 font-normal text-white">
            Quer descobrir o que hoje limita a sua captação de alunos?
          </p>
          <Link href="#contato" className="inline-flex">
            <ButtonPrimary text="Quero analisar minha captação" />
          </Link>
        </div>
      </div>
    </section>

    {/* Depoimento */}
    <section className="relative isolate py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-16">
          <div className="col-span-12 space-y-6 lg:col-span-5">
            <SectionHeading
              align="left"
              badge="Depoimento"
              title="Resultado real também precisa *parecer real*"
              description="Veja como a UPDO estrutura a captação de alunos com parceiros do mercado educacional e transforma previsibilidade em rotina de performance."
            />
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-2 bg-lilas-50 text-secondary/80 rounded-2xl p-5">
                Reconhecidos como destaque nacional pela RD Station com cases no
                segmento educacional.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.2} className="col-span-12 lg:col-span-7">
            <div className="bg-background-13 relative aspect-video overflow-hidden rounded-3xl shadow-lg">
              <VideoDepoimento
                videoId="2cE9ycBnLVg"
                name="cliente do setor educacional"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>

    {/* Serviços */}
    <div className="bg-lilas-50/40">
      <ServicosEducacao />
    </div>

    {/* Formulário */}
    <section id="contato" className="relative isolate scroll-mt-28 py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading
              align="left"
              badge="Análise da captação"
              title="Receba um *diagnóstico gratuito* da sua captação de alunos."
              description="Vamos analisar onde sua captação perde alunos e indicar os próximos passos para gerar matrículas com mais previsibilidade."
            />
          </div>
          <RevealAnimation delay={0.2} className="col-span-12 lg:col-span-7">
            <div>
              <LeadForm
                formName="Diagnóstico Educacional"
                service=""
                pagePath="/marketing-educacional"
                extraFields={{ sector: "Educação" }}
                submitText="Quero meu diagnóstico gratuito"
                nota="Com base nas suas respostas, preparamos um diagnóstico inicial mais preciso."
                sucesso="Recebemos seus dados. Nossa equipe vai analisar as informações e retornar com os próximos passos."
                selects={[
                  {
                    id: "challenge",
                    label: "Principal desafio hoje",
                    options: [
                      "Baixa conversão de leads",
                      "Turmas que não fecham",
                      "Dependência de indicação",
                      "Custo por matrícula alto",
                      "Equipe comercial sem processo",
                      "Falta de previsibilidade na captação",
                    ],
                  },
                  {
                    id: "investment",
                    label: "Investimento em marketing",
                    options: [
                      "Ainda não invisto",
                      "Até R$5 mil/mês",
                      "R$5 mil a R$20 mil/mês",
                      "Acima de R$20 mil/mês",
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
        items={faqEducacao}
        badge="Dúvidas Frequentes"
        title="Objeções *matam* suas matrículas."
        description="Transparência e clareza são fundamentais para uma parceria de longo prazo. Aqui estão as respostas para os questionamentos mais comuns de nossos parceiros."
        citacao="Ainda tem alguma dúvida específica? Nosso diagnóstico gratuito serve justamente para sanar cada detalhe do seu projeto."
      />
    </div>
  </>
);

export default EducacaoPagina;
