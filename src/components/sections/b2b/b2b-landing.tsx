"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
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

const metrics = [
  { label: "CAC reduzido", value: "-38%", detail: "vs. abordagem anterior" },
  { label: "MRR gerado", value: "+R$ 1,2M", detail: "em contratos fechados" },
  { label: "Taxa de demo", value: "+2,8x", detail: "crescimento em 4 meses" },
  { label: "Ciclo de venda", value: "-25%", detail: "com funil estruturado" },
];

const blockers = [
  {
    icon: Users,
    title: "Dependência de indicação",
    description:
      "A carteira cresce quando alguém indica, estagna quando para. Não há canal previsível que gere oportunidade qualificada sem depender de relacionamento e boca a boca.",
  },
  {
    icon: Target,
    title: "ICP indefinido, pitch amplo",
    description:
      "A empresa tenta falar com todo mundo e não converte ninguém. Sem ICP claro, o argumento fica genérico, o CAC sobe e o ciclo de venda se alonga.",
  },
  {
    icon: RefreshCw,
    title: "Marketing e vendas desconectados",
    description:
      "Marketing gera lead. Vendas reclama da qualidade. O lead some no follow-up. Não há handoff, não há SLA e a culpa circula sem solução.",
  },
];

const deliverables = [
  {
    icon: Target,
    title: "ICP e posicionamento B2B",
    description:
      "Definição de perfil de cliente ideal por segmento, cargo, dor e momento de compra: a base para campanha, pitch e funil funcionarem juntos.",
  },
  {
    icon: Users,
    title: "LinkedIn Ads e outbound",
    description:
      "Campanhas segmentadas por cargo, função, setor e tamanho de empresa. Prospecção ativa com sequência de abordagem calibrada para o decisor certo.",
  },
  {
    icon: FileText,
    title: "Conteúdo de autoridade e prova",
    description:
      "Cases, artigos, comparativos e materiais que educam o mercado e encurtam o ciclo de vendas porque o lead chega mais qualificado.",
  },
  {
    icon: Zap,
    title: "Funil, CRM e automação",
    description:
      "Estruturação de funil por estágio, integração de CRM, automação de nutrição e handoff com SLA entre marketing e time comercial.",
  },
  {
    icon: BarChart3,
    title: "Métricas de receita B2B",
    description:
      "Acompanhamento de MRR, CAC, LTV, churn, NRR e pipeline por estágio, não só de leads e cliques.",
  },
  {
    icon: Briefcase,
    title: "Processo e playbook de vendas",
    description:
      "Script de qualificação, metodologia de descoberta, gestão de objeções e rotina de pipeline para o time comercial operar com consistência.",
  },
];

const matrix = [
  { icon: Users, label: "LinkedIn Ads", role: "Prospecção de decisores por cargo e empresa", score: "Perfil qualificado" },
  { icon: Mail, label: "Outbound e email", role: "Abordagem ativa com sequência estruturada", score: "Pipeline direto" },
  { icon: FileText, label: "Conteúdo e SEO", role: "Autoridade que atrai quem já busca solução", score: "Demanda inbound" },
  { icon: Zap, label: "Demo e funil de conversão", role: "Reduz ciclo e qualifica antes do comercial", score: "Ciclo menor" },
];

const faqs = [
  {
    question: "Vocês fazem marketing para SaaS e tecnologia B2B?",
    answer:
      "Sim. Trabalhamos com empresas que vendem software, plataforma, serviço ou consultoria para outras empresas. O foco é gerar pipeline qualificado com ICP definido e processo comercial que converta.",
  },
  {
    question: "LinkedIn Ads funciona para o nosso tipo de negócio?",
    answer:
      "Depende do cargo do decisor, ticket e ciclo. Para a maioria dos B2B de serviço e tecnologia, LinkedIn é o canal mais eficiente para atingir o perfil certo, mas a campanha precisa de oferta, conteúdo e funil adequados. O diagnóstico avalia se faz sentido.",
  },
  {
    question: "Como vocês trabalham o ICP e o posicionamento?",
    answer:
      "Antes de criar campanha, mapeamos quem compra, por qual dor, em qual momento e com qual argumento. Isso define canal, copy, oferta e processo comercial. Sem ICP claro, a execução vai errar o alvo mesmo com verba alta.",
  },
  {
    question: "Vocês estruturam o processo de inside sales também?",
    answer:
      "Sim. A estruturação comercial faz parte do escopo quando necessário: script de qualificação, metodologia de descoberta, gestão de pipeline, SLA com marketing e treinamento do time.",
  },
  {
    question: "Como acompanhamos resultado em B2B com ciclo longo?",
    answer:
      "Acompanhamos pipeline por estágio, origem e probabilidade, não só leads e cliques. MRR, CAC, LTV e taxa de conversão por etapa são as métricas que mostram se o sistema está funcionando.",
  },
  {
    question: "Funciona para empresa que ainda está estruturando o comercial?",
    answer:
      "Sim, e muitas vezes esse é o melhor momento para estruturar. O diagnóstico ajuda a entender se o gargalo está em geração de demanda, qualificação, processo ou proposta, e por onde começar com mais impacto.",
  },
];

const businessTypes = [
  "SaaS / Plataforma",
  "Consultoria",
  "Serviços profissionais (RH, jurídico, financeiro)",
  "Marketing / Comercial",
  "Tecnologia / TI",
  "Educação corporativa",
  "Outro",
];

const ticketRanges = [
  "Até R$2 mil/mês (MRR ou contrato)",
  "R$2 mil a R$10 mil/mês",
  "R$10 mil a R$50 mil/mês",
  "R$50 mil a R$200 mil/mês",
  "Acima de R$200 mil/mês",
];

const salesCycles = [
  "Menos de 2 semanas",
  "2 semanas a 1 mês",
  "1 a 3 meses",
  "3 a 6 meses",
  "Mais de 6 meses",
];

const mediaInvestment = [
  "Ainda não invisto",
  "Até R$5 mil/mês",
  "R$5 mil a R$20 mil/mês",
  "R$20 mil a R$50 mil/mês",
  "Acima de R$50 mil/mês",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/35";

export function B2BLanding() {
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
    businessType: "",
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const honeypot = String(
      new FormData(event.currentTarget).get("companyWebsite") || "",
    ).trim();

    if (honeypot) {
      setIsSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    const searchParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    const payloadFormData = {
      ...formData,
      ...selected,
      sector: "B2B",
      utm_source: searchParams?.get("utm_source") || "",
      utm_medium: searchParams?.get("utm_medium") || "",
      utm_campaign: searchParams?.get("utm_campaign") || "",
      utm_content: searchParams?.get("utm_content") || "",
      utm_term: searchParams?.get("utm_term") || "",
      companyWebsite: honeypot,
    };

    if (typeof window !== "undefined") {
      try {
        const w = window as Window & { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "Lead",
          formName: "Diagnóstico B2B",
          location: "marketing-para-b2b",
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
          formName: "Diagnóstico B2B",
          pagePath: "/marketing-para-b2b",
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.updo.com.br/marketing-para-b2b",
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

  return (
    <main className="bg-background">
      {/* Hero */}
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
                Marketing B2B
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.14] tracking-tight text-foreground md:text-5xl lg:text-5xl">
                Marketing B2B que gera pipeline qualificado sem depender de indicação.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Estratégia para SaaS, consultorias e serviços B2B que precisam
                de ICP claro, canais previsíveis, processo comercial e métricas
                de receita, não só de leads.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "ICP definido com canal, pitch e funil alinhados",
                  "LinkedIn Ads e outbound com perfil de decisor real",
                  "Marketing e vendas conectados por SLA e pipeline",
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
                  Diagnosticar meu B2B
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

            {/* Card de métricas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-2xl transition-all duration-700 hover:border-[#6575FF]/30">
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Resultado B2B
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground">
                    MRR previsível com ICP claro, funil e processo comercial estruturados.
                  </h3>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/50 bg-muted/50 p-4 transition-colors hover:border-[#6575FF]/35"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-3 font-heading text-3xl font-black tracking-tight text-foreground">
                        {item.value}
                      </p>
                      <p className="mt-2 text-[10px] font-medium leading-tight text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.06] p-5">
                  <p className="text-sm font-semibold leading-relaxed text-foreground/75">
                    O B2B cresce com previsibilidade quando ICP, canal,
                    processo e métricas de receita param de operar separados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gargalos */}
      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Gargalos do B2B
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Onde o B2B perde receita entre ICP, pipeline e processo comercial.
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

      {/* Deliverables */}
      <section className="py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que entregamos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Do ICP ao MRR: estrutura para crescer com previsibilidade.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A entrega conecta posicionamento, geração de demanda, funil e
              processo comercial. O objetivo é que o B2B pare de depender de
              indicação e comece a crescer com canal e sistema.
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
              Quero diagnosticar meu B2B
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Sistema */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Sistema de crescimento
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Do LinkedIn ao contrato: o que precisa estar conectado.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                O B2B não cresce só com mais verba em anúncio. Cresce quando
                ICP, canal, conteúdo, funil, demo e processo comercial apontam
                para a mesma meta de receita.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {matrix.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-5 transition-colors hover:border-[#6575FF]/30"
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

      {/* Case real */}
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
                De dependência de indicação para R$ 1,2M em MRR com canal e processo estruturado.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
                Definimos ICP, estruturamos LinkedIn Ads, outbound e funil de
                demo, montamos o playbook comercial e integramos marketing e
                vendas com SLA e pipeline visível.
              </p>
            </div>

            <div className="rounded-2xl border border-[#6575FF]/15 bg-[#6575FF]/[0.06] p-5 lg:p-6">
              <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
              {[
                ["+R$ 1,2M", "em MRR gerado"],
                ["+2,8x", "taxa de demo"],
                ["-38%", "CAC vs. anterior"],
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
              Diagnosticar meu B2B
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="contato" className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico B2B
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Vamos entender onde seu B2B perde receita.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha os dados para analisarmos ICP, canal, ciclo de venda e
                processo comercial com mais contexto.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
                >
                  <label htmlFor="b2b-companyWebsite">Site da empresa</label>
                  <input
                    id="b2b-companyWebsite"
                    type="text"
                    name="companyWebsite"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
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
                      onChange={(e) => setFormData((p) => ({ ...p, telefone: formatPhone(e.target.value) }))}
                      placeholder="(41) 99999-9999"
                      maxLength={15}
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Tipo de negócio" htmlFor="businessType" icon={Briefcase}>
                    <SelectField
                      id="businessType"
                      value={selected.businessType}
                      placeholder="Selecione o tipo..."
                      options={businessTypes}
                      onChange={(v) => setSelected((p) => ({ ...p, businessType: v }))}
                    />
                  </FormField>
                  <FormField label="Ticket / MRR médio" htmlFor="ticket" icon={TrendingUp}>
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
                    {isSubmitting ? "Enviando..." : "Diagnosticar meu B2B"}
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
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12">
                  <CheckCircle2 className="h-10 w-10 text-[#6575FF]" />
                </div>
                <h3 className="font-heading text-2xl font-black tracking-tight text-white">
                  Formulário enviado.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                  Recebemos seus dados e vamos analisar o cenário B2B para
                  retornar com os próximos passos.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Dúvidas sobre marketing B2B, LinkedIn e processo comercial.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de aumentar verba ou contratar mais SDR, vale entender
                ICP, canal, funil, processo e métricas de receita.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "O diagnóstico separa problema de geração de demanda de
                  problema de processo comercial, e os dois têm soluções bem
                  diferentes."
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
