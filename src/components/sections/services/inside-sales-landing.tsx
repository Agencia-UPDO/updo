"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  Clock,
  CreditCard,
  FileText,
  Lock,
  Mic,
  Plus,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const blockers = [
  {
    icon: Users,
    title: "Cada vendedor faz do seu jeito",
    description:
      "Sem processo, script e pipeline padronizado, a performance varia mês a mês e fica difícil saber se o problema está no lead, no vendedor ou no pitch.",
  },
  {
    icon: Target,
    title: "Lead qualificado, venda perdida",
    description:
      "O lead chega aquecido, mas o comercial não descobre a dor real, não trata a objeção principal e não cria urgência para avançar.",
  },
  {
    icon: BarChart3,
    title: "Gestão no escuro",
    description:
      "Sem leitura de estágio, SLA e previsão de fechamento, o gestor descobre que o mês vai mal quando já é tarde para corrigir.",
  },
];

const deliverables = [
  {
    icon: Target,
    title: "ICP e critérios de qualificação",
    description:
      "Definição de cliente ideal, perguntas de triagem e regra clara de passagem para o comercial.",
  },
  {
    icon: BookOpen,
    title: "Playbook de vendas",
    description:
      "Script de descoberta, apresentação, objeções e argumentos por perfil de cliente.",
  },
  {
    icon: Brain,
    title: "Treinamento de neurovendas",
    description:
      "Rapport, ancoragem, urgência, influência e fidelização aplicados ao processo real do time.",
  },
  {
    icon: Zap,
    title: "Pipeline e CRM estruturado",
    description:
      "Etapas, campos obrigatórios, SLA e leitura clara de onde cada oportunidade está parada.",
  },
  {
    icon: BarChart3,
    title: "Rotina semanal de metas",
    description:
      "Reunião de pipeline, acompanhamento de conversão, ciclo, ticket e ações corretivas.",
  },
  {
    icon: FileText,
    title: "Onboarding de vendedores",
    description:
      "Processo documentado para integrar novos vendedores sem depender de treinamento informal.",
  },
];

const trainingModules = [
  {
    icon: Mic,
    title: "Script de descoberta",
    description:
      "Perguntas de situação, problema, implicação e necessidade aplicadas ao seu processo.",
    format: "Role-play",
  },
  {
    icon: Video,
    title: "Coaching de pitch",
    description:
      "Análise de apresentações reais: estrutura, ritmo, linguagem e resposta a objeções.",
    format: "Feedback individual",
  },
  {
    icon: Brain,
    title: "Neurovendas",
    description:
      "Gatilhos de influência, ancoragem e prova social sem virar discurso artificial.",
    format: "Workshop aplicado",
  },
  {
    icon: Target,
    title: "Gestão de objeções",
    description:
      "Mapeamento das objeções do mercado e criação de respostas testadas em simulação.",
    format: "Script + prática",
  },
  {
    icon: Briefcase,
    title: "Proposta comercial",
    description:
      "Modelo de proposta que posiciona valor antes de preço e melhora o fechamento.",
    format: "Modelo pronto",
  },
  {
    icon: RefreshCw,
    title: "Follow-up",
    description:
      "Cadência por estágio para reativar lead parado sem depender da memória do vendedor.",
    format: "Cadência",
  },
];

const matrix = [
  {
    icon: Target,
    label: "Venda consultiva",
    role: "Descoberta da dor real antes de apresentar solução.",
    score: "Conversão maior",
  },
  {
    icon: Zap,
    label: "CRM estruturado",
    role: "Pipeline por estágio, SLA e campos obrigatórios.",
    score: "Gestão real",
  },
  {
    icon: Brain,
    label: "Neurovendas",
    role: "Influência, urgência e ancoragem dentro do pitch.",
    score: "Mais fechamento",
  },
  {
    icon: BarChart3,
    label: "Ritual de pipeline",
    role: "Leitura semanal para corrigir rota antes do fim do mês.",
    score: "Sem surpresa",
  },
];

const faqs = [
  {
    question: "Funciona para empresa com time pequeno?",
    answer:
      "Sim. Em times pequenos, processo comercial costuma gerar impacto rápido porque reduz desperdício, melhora a priorização e facilita a contratação futura.",
  },
  {
    question: "Quanto tempo leva para ver resultado?",
    answer:
      "Os primeiros sinais aparecem entre 30 e 60 dias, principalmente em tempo de resposta, taxa de agendamento e qualidade da rotina comercial.",
  },
  {
    question: "Vocês treinam o time ou só entregam o playbook?",
    answer:
      "Os dois. O playbook organiza o método, mas o treinamento coloca o processo na prática com simulações, feedback e acompanhamento.",
  },
  {
    question: "Funciona com o CRM que já usamos?",
    answer:
      "Na maioria dos casos, sim. Estruturamos etapas, campos e SLAs dentro da ferramenta atual sempre que ela permite uma operação confiável.",
  },
  {
    question: "E se o time resistir ao processo novo?",
    answer:
      "A resistência é tratada no treinamento. O time precisa entender como o processo reduz retrabalho, aumenta comissão e deixa a cobrança mais clara.",
  },
  {
    question: "Serve para venda simples e venda complexa?",
    answer:
      "Sim. A estrutura muda conforme ticket, ciclo e decisores, mas a lógica é a mesma: qualificar melhor, vender com método e medir o pipeline.",
  },
];

const teamSizes = [
  "Só eu vendo",
  "1 a 3 vendedores",
  "4 a 10 vendedores",
  "11 a 30 vendedores",
  "Mais de 30 vendedores",
];

const ticketRanges = [
  "Até R$500",
  "R$500 a R$5 mil",
  "R$5 mil a R$30 mil",
  "R$30 mil a R$100 mil",
  "Acima de R$100 mil",
];

const salesCycles = [
  "Menos de 1 semana",
  "1 a 4 semanas",
  "1 a 3 meses",
  "3 a 6 meses",
  "Mais de 6 meses",
];

const mainPains = [
  "Time sem processo",
  "Conversão baixa",
  "Ciclo de venda longo",
  "Pipeline sem visibilidade",
  "Dificuldade para escalar",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass = "text-[10px] font-black uppercase tracking-[0.25em] text-white/45";

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
        onChange={(event) => onChange(event.target.value)}
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
    </div>
  );
}

function TrustItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
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

function PipelineVisual() {
  const stages = [
    ["Lead", "1200", "100%"],
    ["Qualificado", "684", "57%"],
    ["Proposta", "312", "26%"],
    ["Negociação", "144", "12%"],
    ["Fechado", "84", "7%"],
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Pipeline comercial
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#6575FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
            Ao vivo
          </span>
        </div>
        <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-white">
          Visibilidade por estágio, SLA e previsão.
        </h3>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {stages.map(([label, count, width], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-white/45">{label}</span>
              <span className="font-black text-white">{count}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#6575FF]" style={{ width }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {[
          ["Conversão", "6,7%"],
          ["Ticket médio", "R$18k"],
          ["Ciclo médio", "38d"],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col gap-0.5 px-4 py-3">
            <span className="text-[10px] text-white/40">{label}</span>
            <span className="text-sm font-black text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InsideSalesLanding() {
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
    teamSize: "",
    ticket: "",
    salesCycle: "",
    mainPain: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/[^\d]/g, "");
    if (digits.length < 3) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
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
      service: "Inside Sales",
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
          formName: "Diagnóstico Inside Sales",
          location: "servicos/inside-sales",
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
          formName: "Diagnóstico Inside Sales",
          pagePath: "/servicos/inside-sales",
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.updo.com.br/servicos/inside-sales",
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
    <main>
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="pointer-events-none absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-[#6575FF]/[0.12] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex flex-col gap-6"
            >
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Inside Sales · Serviço UPDO
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Processo comercial que transforma lead em receita previsível.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/55">
                Estruturamos playbook, pipeline, treinamento e rotina de gestão
                para o time vender com consistência, sem depender do talento
                individual de cada vendedor.
              </p>
              <div className="grid gap-3">
                {[
                  "Playbook documentado e replicável",
                  "Pipeline com visibilidade por estágio e SLA",
                  "Treinamento de vendas e neurovendas",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/55">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10">
                      <span className="h-2 w-2 rounded-full bg-[#6575FF]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contato"
                  className="group inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground shadow-[0_10px_24px_rgba(86,254,213,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_14px_34px_rgba(86,254,213,0.34)] active:scale-95 sm:w-auto"
                >
                  Estruturar meu comercial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
                >
                  Ver como funciona
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="hidden lg:block"
            >
              <PipelineVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O problema
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Onde o processo comercial perde receita todo mês.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {blockers.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-black leading-snug tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que entregamos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Seis frentes que organizam o comercial.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A entrega conecta processo, treinamento, tecnologia e rotina para
              a venda depender de sistema, não de improviso.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-black leading-snug tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="#contato"
              className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
            >
              Quero estruturar meu processo comercial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Treinamento de vendas
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Playbook na cabeça do time, não só na gaveta.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/55">
                Documentar o processo não basta. O treinamento coloca o método
                na prática com simulação, feedback e acompanhamento.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Role-play com objeções reais",
                  "Feedback de pitches e chamadas",
                  "Onboarding de vendedores",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#6575FF]" />
                    <span className="text-sm font-medium text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trainingModules.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/[0.08]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[#6575FF]">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading text-base font-black leading-snug tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                  <span className="self-start rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#6575FF]">
                    {item.format}
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6575FF]/[0.12] blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Sistema de vendas
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Os quatro pilares do processo comercial UPDO.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              Método, tecnologia, rotina e gestão operando juntos para o
              comercial parar de depender de talento individual.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {matrix.map((item) => (
              <article
                key={item.label}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/[0.08]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[#6575FF]">
                  <item.icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-black leading-snug text-white">{item.label}</p>
                <p className="text-xs leading-relaxed text-white/45">{item.role}</p>
                <span className="self-start rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#6575FF]">
                  {item.score}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/70 bg-white p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex-1">
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Resultado real
                </span>
                <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                  De 8% para 15% de conversão, sem contratar mais vendedores.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Empresa de serviços com cinco vendedores, ticket médio de R$18 mil
                  e pipeline no Excel. Após playbook, CRM estruturado e rotina
                  semanal, o time passou a vender com mais previsibilidade.
                </p>
                <Link
                  href="#contato"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                >
                  Quero esse resultado no meu comercial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:w-56 lg:shrink-0">
                {[
                  ["+38%", "conversão comercial"],
                  ["-30%", "ciclo de venda"],
                  ["85%", "previsão de fechamento"],
                  ["< 30d", "onboarding"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-5"
                  >
                    <span className="font-heading text-2xl font-black tracking-tight text-foreground">
                      {value}
                    </span>
                    <span className="text-[11px] leading-snug text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico gratuito
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Vamos entender onde seu comercial perde receita.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha os dados para analisarmos processo, pipeline, conversão
                e ciclo de venda com mais contexto.
              </p>
            </div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Nome" htmlFor="nome">
                    <input
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(event) => setFormData((prev) => ({ ...prev, nome: event.target.value }))}
                      placeholder="Como prefere ser chamado"
                      className={inputClass}
                    />
                  </FormField>
                  <FormField label="Empresa" htmlFor="empresa">
                    <input
                      id="empresa"
                      required
                      value={formData.empresa}
                      onChange={(event) => setFormData((prev) => ({ ...prev, empresa: event.target.value }))}
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="E-mail" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
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
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, telefone: formatPhone(event.target.value) }))
                      }
                      placeholder="(41) 99999-9999"
                      maxLength={15}
                      className={inputClass}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Tamanho do time" htmlFor="teamSize" icon={Users}>
                    <SelectField
                      id="teamSize"
                      value={selected.teamSize}
                      placeholder="Quantos vendedores?"
                      options={teamSizes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, teamSize: value }))}
                    />
                  </FormField>
                  <FormField label="Ticket médio" htmlFor="ticket" icon={CreditCard}>
                    <SelectField
                      id="ticket"
                      value={selected.ticket}
                      placeholder="Qual o ticket médio?"
                      options={ticketRanges}
                      onChange={(value) => setSelected((prev) => ({ ...prev, ticket: value }))}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Ciclo médio" htmlFor="salesCycle" icon={RefreshCw}>
                    <SelectField
                      id="salesCycle"
                      value={selected.salesCycle}
                      placeholder="Quanto tempo leva?"
                      options={salesCycles}
                      onChange={(value) => setSelected((prev) => ({ ...prev, salesCycle: value }))}
                    />
                  </FormField>
                  <FormField label="Principal dor" htmlFor="mainPain" icon={TrendingUp}>
                    <SelectField
                      id="mainPain"
                      value={selected.mainPain}
                      placeholder="Onde está o gargalo?"
                      options={mainPains}
                      onChange={(value) => setSelected((prev) => ({ ...prev, mainPain: value }))}
                    />
                  </FormField>
                </div>
                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/45">
                    Com base nas suas respostas, preparamos um diagnóstico inicial mais preciso do processo comercial.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    {isSubmitting
                      ? "Enviando..."
                      : "Diagnosticar meu processo comercial"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  {submitError && (
                    <p className="text-center text-xs font-semibold text-red-300">
                      {submitError}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
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

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Dúvidas sobre processo comercial e inside sales.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de contratar mais vendedor, vale entender onde o processo
                está perdendo receita.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "Venda não é talento, é processo. Quando o processo está certo,
                  o time inteiro enxerga melhor o próximo passo."
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
                      openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
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
