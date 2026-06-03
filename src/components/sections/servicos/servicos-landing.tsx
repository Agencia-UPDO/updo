"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Clock,
  CreditCard,
  FileText,
  Lock,
  Mail,
  Plus,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

/* --- Data --- */

const pipelineStages = [
  { stage: "Atração", value: "1.840", label: "visitas/mês", pct: 100 },
  { stage: "Qualificação", value: "312", label: "leads qualificados", pct: 57 },
  { stage: "Proposta", value: "94", label: "propostas enviadas", pct: 27 },
  { stage: "Contrato", value: "38", label: "contratos fechados", pct: 11 },
];

const blockers = [
  {
    icon: Award,
    title: "Serviço invisível no digital",
    description:
      "O serviço é bom, mas o cliente não encontra. O site não converte, o diferencial não está claro e a empresa perde para concorrentes que comunicam melhor, mesmo entregando menos resultado.",
  },
  {
    icon: Target,
    title: "Lead sem fit, proposta que não fecha",
    description:
      "Marketing gera volume, mas os leads chegam fora do perfil. O comercial perde tempo qualificando quem não tem orçamento, urgência ou encaixe com o serviço oferecido.",
  },
  {
    icon: RefreshCw,
    title: "Crescimento travado em indicação",
    description:
      "Quando o ciclo de indicações desacelera, o crescimento trava. Não há canal previsível, não há meta alcançável e cada mês depende do humor da rede de contatos.",
  },
];

const deliverables = [
  {
    icon: Award,
    title: "Posicionamento e diferencial",
    description:
      "Clareza sobre quem atender, qual problema resolver e por que escolher a empresa. O posicionamento correto faz o cliente comprar por valor, não por preço.",
  },
  {
    icon: Target,
    title: "Geração de demanda segmentada",
    description:
      "Google, Meta e LinkedIn calibrados para o perfil que fecha contrato. Cada campanha é construída com ICP definido, não só com verba e criativo genérico.",
  },
  {
    icon: FileText,
    title: "Conteúdo de autoridade e prova social",
    description:
      "Cases, depoimentos, artigos e materiais que educam o lead antes da reunião. Quem chega educado objeta menos e converte mais rápido.",
  },
  {
    icon: Zap,
    title: "Qualificação e funil de conversão",
    description:
      "Landing pages, formulários e automação que filtram o lead antes de chegar ao comercial. O time foca em quem tem fit, momento e orçamento.",
  },
  {
    icon: RefreshCw,
    title: "Nutrição e follow-up automático",
    description:
      "Sequências por WhatsApp, e-mail e retargeting que mantêm o lead engajado até o momento de compra, sem esforço manual da equipe.",
  },
  {
    icon: BarChart3,
    title: "Dashboard e KPIs de receita",
    description:
      "Acompanhamento de CPL, ticket médio, ciclo de venda e retorno por canal. As decisões de marketing são tomadas com dado, não com intuição.",
  },
];

const matrix = [
  {
    icon: Award,
    label: "Posicionamento claro",
    role: "Diferenciação por valor, não por preço",
    score: "Ticket maior",
  },
  {
    icon: Target,
    label: "Canal previsível",
    role: "Oportunidade todo mês sem depender de indicação",
    score: "Crescimento estável",
  },
  {
    icon: FileText,
    label: "Conteúdo de autoridade",
    role: "Lead chega educado com menos objeção",
    score: "Ciclo menor",
  },
  {
    icon: Zap,
    label: "Qualificação estruturada",
    role: "Comercial foca em quem tem fit e momento",
    score: "Conversão maior",
  },
];

const faqs = [
  {
    question: "Funciona para empresa de serviços que depende só de indicação?",
    answer:
      "Sim. A maioria dos nossos clientes começa nesse ponto. O trabalho é criar o canal previsível que funciona em paralelo com indicação, e que cresce mesmo quando a rede de contatos desacelera.",
  },
  {
    question: "Qual canal funciona melhor para empresas de serviços?",
    answer:
      "Depende do perfil do cliente, ticket e ciclo de venda. Para B2C de serviço como planos de saúde, seguros e estética, Google e Meta costumam ser mais eficientes. Para serviços corporativos como consultoria, TI e jurídico, LinkedIn Ads e conteúdo de autoridade funcionam melhor. O diagnóstico define o canal certo para cada caso.",
  },
  {
    question: "Como comunicar o diferencial de um serviço intangível?",
    answer:
      "Com prova social, cases reais e conteúdo que mostra o resultado, não só o processo. A maioria das empresas de serviço fala sobre como trabalha, mas o cliente quer saber o que vai mudar na sua realidade depois de contratar.",
  },
  {
    question: "Quanto tempo para ter os primeiros resultados?",
    answer:
      "As primeiras oportunidades aparecem entre 30 e 60 dias depois da ativação dos canais. Resultado consistente e crescente leva de 90 a 120 dias, dependendo do ciclo de venda e da maturidade do mercado.",
  },
  {
    question: "Vocês trabalham com planos de saúde, seguros, contabilidade e consultoria?",
    answer:
      "Sim. Trabalhamos com diversas categorias de empresas de serviço: planos de saúde, seguros, comunicação visual, consultoria de gestão, escritórios jurídicos, empresas de TI, RH e outsourcing, entre outros segmentos.",
  },
  {
    question: "Como medir resultado em serviços com ciclo de venda longo?",
    answer:
      "Acompanhamos o pipeline por estágio: volume de leads, taxa de qualificação, taxa de proposta, taxa de fechamento e tempo médio em cada etapa. Isso mostra onde está o gargalo: se é em atração, qualificação ou fechamento.",
  },
];

const serviceSegments = [
  "Planos de saúde / Seguros",
  "Consultoria / Advisory",
  "Comunicação visual / Gráfica",
  "Contabilidade / Auditoria",
  "Jurídico / Compliance",
  "TI / Outsourcing",
  "RH / Treinamento",
  "Outro",
];

const ticketRanges = [
  "Até R$5 mil por contrato",
  "R$5 mil a R$20 mil",
  "R$20 mil a R$50 mil",
  "R$50 mil a R$150 mil",
  "Acima de R$150 mil",
];

const salesCycles = [
  "Menos de 2 semanas",
  "2 semanas a 1 mês",
  "1 a 3 meses",
  "Mais de 3 meses",
];

const mediaInvestment = [
  "Ainda não invisto",
  "Até R$5 mil/mês",
  "R$5 mil a R$15 mil/mês",
  "R$15 mil a R$40 mil/mês",
  "Acima de R$40 mil/mês",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/35";

/* --- Component --- */

export function ServicosLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    segment: "",
    ticket: "",
    salesCycle: "",
    investment: "",
  });

  const formatPhone = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    if (phoneNumber.length < 3) return phoneNumber;
    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const submitLead = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    const searchParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    const payloadFormData = {
      ...formData,
      ...selected,
      sector: "Empresas de Serviços",
      utm_source: searchParams?.get("utm_source") || "",
      utm_medium: searchParams?.get("utm_medium") || "",
      utm_campaign: searchParams?.get("utm_campaign") || "",
      utm_content: searchParams?.get("utm_content") || "",
      utm_term: searchParams?.get("utm_term") || "",
    };

    if (typeof window !== "undefined") {
      try {
        const w = window as Window & { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "Lead",
          formName: "Diagnóstico Empresa de Serviços",
          location: "marketing-para-servicos",
          formData: payloadFormData,
        });
      } catch {
        // Tracking nao pode bloquear o envio do lead para a RD.
      }
    }

    try {
      const response = await fetch("/api/rd-conversion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formName: "Diagnóstico Empresa de Serviços",
          pagePath: "/marketing-para-servicos",
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.updo.com.br/marketing-para-servicos",
          formData: payloadFormData,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o formulario.");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Não conseguimos enviar agora. Tente novamente em alguns segundos.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitLead();
  };

  return (
    <main className="bg-background">
      {/* -- Hero -- */}
      <section className="relative isolate flex items-center overflow-hidden bg-background pt-10 pb-16 lg:min-h-[88vh] lg:py-28">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,254,213,0.10),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(101,117,255,0.08),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="updo-badge mb-8 inline-flex max-w-full items-center rounded-full border px-3 py-1 text-center text-[10px] font-black uppercase leading-relaxed tracking-[0.2em]">
                Marketing para Serviços
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.14] tracking-tight text-foreground md:text-5xl lg:text-5xl">
                Marketing para empresas de serviços que precisam de lead qualificado, não só volume.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Posicionamento claro, canal previsível, qualificação estruturada e processo comercial para planos de saúde, consultorias, comunicação visual, seguros, contabilidade e outros serviços.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Diferencial comunicado para quem tem fit e decisão",
                  "Canal previsível que cresce sem depender de indicação",
                  "Lead qualificado chega ao comercial pronto para fechar",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10">
                      <span className="h-2 w-2 rounded-full bg-[#6575FF]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-12 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:gap-6">
                <Link
                  href="#contato"
                  className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
                >
                  Diagnosticar minha empresa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-border/70 px-7 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
                >
                  Ver como funciona
                </Link>
              </div>
            </motion.div>

            {/* Pipeline visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-2xl transition-all duration-700 hover:border-[#6575FF]/30">
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Pipeline de Serviços
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground">
                    Do primeiro clique ao contrato assinado com canal e qualificação estruturados.
                  </h3>
                </div>

                <div className="mt-7 space-y-5">
                  {pipelineStages.map((item, i) => (
                    <motion.div
                      key={item.stage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
                          {item.stage}
                        </span>
                        <div className="text-right">
                          <span className="text-sm font-black text-foreground">
                            {item.value}
                          </span>
                          <span className="ml-1.5 text-[10px] text-muted-foreground">
                            {item.label}
                          </span>
                        </div>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted/50">
                        <motion.div
                          className="h-2 rounded-full bg-[#6575FF]"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ delay: 0.6 + i * 0.12, duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.06] p-5">
                  <p className="text-sm font-semibold leading-relaxed text-foreground/75">
                    Empresas de serviços crescem quando o diferencial é comunicado para o cliente certo, pelo canal certo, no momento certo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -- Gargalos -- */}
      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Gargalos do setor
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Onde as empresas de serviços perdem receita antes de chegar ao comercial.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {blockers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Deliverables -- */}
      <section className="py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que entregamos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Do posicionamento ao contrato: estrutura para crescer com previsibilidade.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A entrega conecta clareza de diferencial, geração de demanda, qualificação e processo comercial. O objetivo é que a empresa de serviços pare de depender de indicação e comece a crescer com canal e sistema.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-20 flex justify-center">
            <Link
              href="#contato"
              className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
            >
              Quero diagnosticar minha empresa de serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Matrix */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Sistema de crescimento
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                O que precisa estar conectado para o serviço crescer com consistência.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Empresa de serviços não cresce só com mais verba em anúncio. Cresce quando posicionamento, canal, qualificação e processo comercial apontam para a mesma meta de receita.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {matrix.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/60 bg-[#F7F9FF] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-black tracking-tight text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {item.role}
                    </p>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-[#6575FF]">
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Case real -- */}
      <section className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6575FF]/[0.10] blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Resultado real
              </span>
              <h2 className="mt-5 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                De indicação como único canal para R$ 3,8M em contratos com geração de demanda estruturada.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
                Definimos posicionamento por segmento, ativamos Google e Meta com ICP claro, criamos funil de qualificação e automatizamos o follow-up. CPL caiu de R$ 480 para R$ 127 em 5 meses.
              </p>
            </div>

            <div className="rounded-2xl border border-[#6575FF]/15 bg-[#6575FF]/[0.06] p-5 lg:p-6">
              <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
              {[
                ["+R$ 3,8M", "em contratos fechados"],
                ["+2,4x", "leads qualificados"],
                ["-44%", "CPL vs. anterior"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-white/10 text-left sm:border-l sm:first:border-l-0 sm:pl-5 sm:first:pl-0"
                >
                  <p className="font-heading text-2xl font-black tracking-tight text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] font-medium leading-tight text-white/40">
                    {label}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/diagnostico"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Agendar diagnóstico
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contato"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 active:scale-95"
            >
              Diagnosticar minha empresa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* -- Formulário -- */}
      <section id="contato" className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico gratuito
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Vamos entender onde sua empresa de serviços perde receita.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha os dados para analisarmos posicionamento, canal, qualificação e ciclo de venda com mais contexto.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Nome" htmlFor="nome">
                    <input
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
                      placeholder="Como prefere ser chamado"
                      className={inputClass}
                    />
                  </FormField>
                  <FormField label="Empresa" htmlFor="empresa" icon={Briefcase}>
                    <input
                      id="empresa"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData((p) => ({ ...p, empresa: e.target.value }))}
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="E-mail" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="seu@email.com"
                      className={inputClass}
                    />
                  </FormField>
                  <FormField label="Telefone" htmlFor="telefone">
                    <input
                      id="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, telefone: formatPhone(e.target.value) }))
                      }
                      placeholder="(41) 99999-9999"
                      maxLength={15}
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Segmento de serviço" htmlFor="segment" icon={Award}>
                    <SelectField
                      id="segment"
                      value={selected.segment}
                      placeholder="Selecione o segmento..."
                      options={serviceSegments}
                      onChange={(v) => setSelected((p) => ({ ...p, segment: v }))}
                    />
                  </FormField>
                  <FormField label="Ticket médio por contrato" htmlFor="ticket" icon={TrendingUp}>
                    <SelectField
                      id="ticket"
                      value={selected.ticket}
                      placeholder="Selecione o ticket..."
                      options={ticketRanges}
                      onChange={(v) => setSelected((p) => ({ ...p, ticket: v }))}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Ciclo médio de venda" htmlFor="salesCycle" icon={RefreshCw}>
                    <SelectField
                      id="salesCycle"
                      value={selected.salesCycle}
                      placeholder="Selecione o ciclo..."
                      options={salesCycles}
                      onChange={(v) => setSelected((p) => ({ ...p, salesCycle: v }))}
                    />
                  </FormField>
                  <FormField label="Investimento em marketing" htmlFor="investment" icon={CreditCard}>
                    <SelectField
                      id="investment"
                      value={selected.investment}
                      placeholder="Selecione o investimento..."
                      options={mediaInvestment}
                      onChange={(v) => setSelected((p) => ({ ...p, investment: v }))}
                    />
                  </FormField>
                </div>

                <div className="flex flex-col items-center border-t border-white/[0.08] pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    {isSubmitting
                      ? "Enviando..."
                      : "Diagnosticar minha empresa de serviços"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  {submitError && (
                    <p className="mt-3 text-center text-xs font-semibold text-red-300">
                      {submitError}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    <TrustItem icon={ShieldCheck} text="Sem spam" />
                    <TrustItem icon={Clock} text="Resposta em até 1 dia útil" />
                    <TrustItem icon={Lock} text="Dados usados só no diagnóstico" />
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center py-12 text-center">
                <SuccessIcon />
                <h3 className="font-heading text-2xl font-black tracking-tight text-white">
                  Formulário enviado com sucesso.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                  Recebemos suas informações e vamos analisar o cenário para retornar com um direcionamento inicial.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Dúvidas sobre marketing para planos de saúde, consultorias e outros serviços.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de aumentar verba ou contratar mais representantes, vale entender posicionamento, canal, qualificação e processo.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "O diferencial de uma empresa de serviços é real, mas invisível até ser comunicado da forma certa para o cliente certo."
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={cn(
                    "group rounded-2xl border transition-all duration-300",
                    openFaq === index
                      ? "border-[#6575FF]/30 bg-[#6575FF]/[0.06] shadow-[0_14px_42px_rgba(101,117,255,0.14)]"
                      : "border-border/70 bg-white hover:border-[#6575FF]/30",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
                  >
                    <span
                      className={cn(
                        "text-lg font-bold tracking-tight transition-colors",
                        openFaq === index ? "text-[#6575FF]" : "text-foreground",
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 min-w-8 items-center justify-center rounded-full transition-all",
                        openFaq === index
                          ? "rotate-180 bg-[#6575FF] text-white"
                          : "bg-slate-100 text-slate-400 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]",
                      )}
                    >
                      {openFaq === index ? (
                        <Plus className="h-4 w-4 rotate-45" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      openFaq === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- Helpers --- */

function FormField({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={`${labelClass} flex items-center gap-1.5`}>
        {Icon ? <Icon className="h-3 w-3" /> : null}
        {label}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  id,
  value,
  placeholder,
  options,
  onChange,
}: {
  id: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={selectClass}
        style={{ colorScheme: "dark" }}
      >
        <option value="" disabled className="bg-[#0f1117] text-white/40">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0f1117] text-white">
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}

function TrustItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/25">
      <Icon className="h-3 w-3" />
      {text}
    </span>
  );
}

function SuccessIcon() {
  return (
    <motion.div
      initial={{ scale: 0.82, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mb-6 flex h-20 w-20 items-center justify-center"
    >
      <motion.span
        initial={{ scale: 0.65, opacity: 0.55 }}
        animate={{ scale: 1.35, opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0 rounded-full border border-accent/35"
      />
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/25 bg-accent/12 shadow-[0_0_34px_rgba(86,254,213,0.18)]">
        <CheckCircle2 className="h-10 w-10 text-accent" />
      </div>
    </motion.div>
  );
}
