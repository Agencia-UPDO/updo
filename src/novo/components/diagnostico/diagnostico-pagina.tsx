import RevealAnimation from "@/novo/components/animation/reveal-animation";
import TextReveal from "@/novo/components/animation/text-reveal";
import HeroFundo from "@/novo/components/home/hero-fundo";
import { CheckIcon } from "@/novo/components/shared/icons";
import IconChip from "@/novo/components/shared/icon-chip";
import LeadForm from "@/novo/components/shared/lead-form";
import ProvaSocial from "@/novo/components/shared/prova-social";
import SectionHeading from "@/novo/components/shared/section-heading";
import Badge from "@/novo/components/shared/ui/badge/badge";
import { balance } from "@/novo/utils/balance";
import { BarChart3, LineChart, Search } from "lucide-react";

const entregas = [
  {
    icon: Search,
    title: "Leitura do funil",
    description:
      "Mapeamos onde a operação perde oportunidade entre tráfego, lead, atendimento e venda.",
  },
  {
    icon: BarChart3,
    title: "Prioridades de crescimento",
    description:
      "Você sai com gargalos ordenados por impacto, não com uma lista genérica de tarefas.",
  },
  {
    icon: LineChart,
    title: "Próximos passos",
    description:
      "Indicamos caminhos para ganhar previsibilidade sem depender só de volume de mídia.",
  },
];

const principios = [
  {
    title: "Sem proposta pronta",
    description:
      "Antes de falar de solução, entendemos cenário, metas, operação e momento comercial.",
  },
  {
    title: "Sem auditoria rasa",
    description:
      "Não olhamos anúncio isolado. Conectamos mídia, página, CRM, atendimento e vendas.",
  },
  {
    title: "Sem pacote empurrado",
    description:
      "A recomendação nasce do diagnóstico, não de uma prateleira fechada de serviços.",
  },
];

const DiagnosticoPagina = () => (
  <>
    {/* Topo com formulário */}
    <section
      id="contato"
      className="relative isolate scroll-mt-28 pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28"
    >
      <HeroFundo />
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-x-16">
          <div className="col-span-12 space-y-8 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <div>
                  <Badge text="Diagnóstico estratégico" />
                </div>
              </RevealAnimation>
              <TextReveal delay={0.15}>
                <h1 style={balance}>
                  Descubra onde seu marketing perde receita.
                </h1>
              </TextReveal>
              <TextReveal delay={0.25}>
                <p>
                  Uma análise inicial para entender gargalos de aquisição, funil
                  comercial e previsibilidade. Sem achismo, sem apresentação
                  genérica.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.3}>
              <ul className="space-y-3">
                {[
                  "Diagnóstico orientado por dados, contexto e operação real",
                  "Indicação dos gargalos que merecem prioridade",
                  "Próximos passos claros para marketing e vendas",
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
            <div className="hidden lg:block">
              <ul className="space-y-3">
                {entregas.map((item, index) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl bg-white p-5"
                  >
                    <IconChip
                      icon={item.icon}
                      tone={index % 2 === 0 ? "lilas" : "menta"}
                    />
                    <div>
                      <p className="text-tagline-1 text-secondary font-medium">
                        {item.title}
                      </p>
                      <p className="text-tagline-2 mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <RevealAnimation
            delay={0.3}
            direction="right"
            className="col-span-12 lg:col-span-7"
          >
            <div className="space-y-4">
              <div className="bg-secondary rounded-3xl px-6 py-5 md:px-9">
                <p className="font-titulo text-heading-6 font-medium text-white">
                  Agendar diagnóstico
                </p>
                <p className="text-tagline-2 mt-1 text-white/65">
                  Preencha os dados para iniciarmos a análise do seu cenário.
                </p>
              </div>
              <LeadForm
                formName="Diagnóstico Estratégico"
                service=""
                pagePath="/diagnostico"
                submitText="Quero meu diagnóstico estratégico"
                whatsapp={{
                  numero: "5541987112003",
                  intro: "Olá! Vim pela página de diagnóstico da UPDO:",
                  fim: "Quero agendar meu diagnóstico estratégico.",
                }}
                selects={[
                  {
                    id: "sector",
                    label: "Setor da empresa",
                    curto: "Setor",
                    options: [
                      "Educação",
                      "E-commerce",
                      "Varejo",
                      "Indústria",
                      "Serviços B2B",
                      "Saúde / Psicologia",
                      "Outro",
                    ],
                  },
                  {
                    id: "challenge",
                    label: "Principal desafio",
                    curto: "Desafio",
                    options: [
                      "Baixa conversão de leads",
                      "CAC alto",
                      "Falta de previsibilidade",
                      "Dependência de indicação",
                      "Equipe comercial sem processo",
                      "Crescimento estagnado",
                      "Marketing e vendas desconectados",
                    ],
                  },
                  {
                    id: "investment",
                    label: "Investimento atual em marketing",
                    curto: "Investimento",
                    options: [
                      "Ainda não invisto",
                      "Até R$5 mil/mês",
                      "R$5 mil a R$20 mil/mês",
                      "R$20 mil a R$50 mil/mês",
                      "Acima de R$50 mil/mês",
                    ],
                  },
                ]}
              />
            </div>
          </RevealAnimation>
          <div className="col-span-12 lg:hidden">
            <ul className="space-y-3">
              {entregas.map((item, index) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5"
                >
                  <IconChip
                    icon={item.icon}
                    tone={index % 2 === 0 ? "lilas" : "menta"}
                  />
                  <div>
                    <p className="text-tagline-1 text-secondary font-medium">
                      {item.title}
                    </p>
                    <p className="text-tagline-2 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ProvaSocial className="mt-16 md:mt-20" />
      </div>
    </section>

    {/* Como conduzimos */}
    <section className="bg-secondary py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          tone="dark"
          badge="Como conduzimos"
          title="*Diagnóstico* antes de recomendação."
          description="A conversa existe para entender contexto, prioridade e potencial de crescimento. A proposta vem depois da leitura correta do cenário."
        />
        <ol className="grid grid-cols-12 gap-4 md:gap-6">
          {principios.map((item, index) => (
            <RevealAnimation
              key={item.title}
              delay={0.1 + index * 0.1}
              className="col-span-12 md:col-span-4"
            >
              <li className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <span className="bg-primary-500 text-secondary font-titulo flex size-12 items-center justify-center rounded-2xl text-[1.125rem] font-medium">
                  0{index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-heading-6 font-normal text-white">
                    {item.title}
                  </h3>
                  <p className="text-tagline-2 text-white/65">
                    {item.description}
                  </p>
                </div>
              </li>
            </RevealAnimation>
          ))}
        </ol>
        <RevealAnimation delay={0.4}>
          <p className="text-tagline-1 mx-auto max-w-[640px] text-center text-white/70">
            A ideia é simples: primeiro clareza, depois estratégia. Se fizer
            sentido avançar, mostramos o caminho com prioridade, contexto e
            responsabilidade.
          </p>
        </RevealAnimation>
      </div>
    </section>
  </>
);

export default DiagnosticoPagina;
