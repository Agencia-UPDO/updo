"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Eye,
  FileSearch,
  Lock,
  MessageSquareMore,
  PhoneCall,
  Plus,
  RefreshCcw,
  ScanSearch,
  Search,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";

const blockers = [
  {
    icon: Clock3,
    title: "Atendimento lento e sem follow-up",
    description:
      "O lead chama, espera, recebe resposta morna e some. Muitas empresas acham que perdem por preço quando, na prática, perdem por demora e falta de condução.",
  },
  {
    icon: MessageSquareMore,
    title: "Texto pronto que mata a conversa",
    description:
      "Equipe responde igual para todo mundo, sem personalização, sem leitura de intenção e sem continuidade. O cliente percebe desinteresse e compara com quem atende melhor.",
  },
  {
    icon: Search,
    title: "Concorrente parece melhor do que é",
    description:
      "Preço, design, clareza de oferta, prova social e experiência moldam percepção. Sem benchmark, a empresa ajusta campanha sem entender onde a experiência realmente perde força.",
  },
];

const deliverables = [
  {
    icon: PhoneCall,
    title: "Cliente oculto no seu canal de atendimento",
    description:
      "Testamos WhatsApp, Instagram, formulário, telefone ou atendimento presencial para medir tempo, postura comercial, qualidade da resposta e consistência do follow-up.",
  },
  {
    icon: ScanSearch,
    title: "Análise comparativa com concorrentes",
    description:
      "Avaliamos como seus concorrentes apresentam preço, design, clareza da oferta, atendimento e percepção geral da experiência.",
  },
  {
    icon: FileSearch,
    title: "Relatório com evidências reais",
    description:
      "Você recebe prints, tempos de resposta, pontos de ruptura, comparativos e leitura prática do que está funcionando ou travando a conversão.",
  },
  {
    icon: RefreshCcw,
    title: "Roteiro de correção",
    description:
      "Transformamos o diagnóstico em prioridade prática: script, follow-up, padrão de atendimento, apresentação do produto e ajustes de processo.",
  },
  {
    icon: Eye,
    title: "Leitura de percepção",
    description:
      "Mostramos como sua empresa é percebida frente ao concorrente em valor, clareza, desejo, confiança e facilidade de compra.",
  },
  {
    icon: Users,
    title: "Base para treinamento da equipe",
    description:
      "O Cliente Oculto também vira insumo para desenvolver atendimento, recepção, comercial e liderança com base em situações reais.",
  },
];

const methodology = [
  {
    step: "01",
    title: "Definição do cenário",
    description:
      "Mapeamos canais, perfis de cliente, pontos de contato e concorrentes que entram na leitura.",
  },
  {
    step: "02",
    title: "Execução oculta",
    description:
      "Entramos na jornada como cliente real e registramos atendimento, tempo, linguagem, condução e follow-up.",
  },
  {
    step: "03",
    title: "Benchmark competitivo",
    description:
      "Comparamos sua experiência com a experiência entregue pelos principais concorrentes.",
  },
  {
    step: "04",
    title: "Prioridade de impacto",
    description:
      "Organizamos os achados por risco comercial, perda de confiança e impacto em conversão.",
  },
  {
    step: "05",
    title: "Plano de ajuste",
    description:
      "Entregamos recomendações práticas para atendimento, processo, apresentação de produto e posicionamento.",
  },
];

const faqs = [
  {
    question: "Vocês analisam só o meu atendimento ou também os concorrentes?",
    answer:
      "Os dois, se fizer sentido para o cenário. Podemos avaliar apenas o seu time, apenas os concorrentes ou comparar os dois lados na mesma leitura.",
  },
  {
    question: "Esse serviço serve só para varejo?",
    answer:
      "Não. Funciona para varejo, educação, saúde, serviços, e-commerce e operações comerciais em geral. O ponto é entender como a empresa atende e como o cliente percebe essa experiência.",
  },
  {
    question: "O que vocês avaliam no concorrente?",
    answer:
      "Preço, apresentação da oferta, design, clareza da informação, prova social, jornada de contato, qualidade da resposta, tempo de retorno e percepção geral da experiência.",
  },
  {
    question: "Recebo só um relatório ou também orientação prática?",
    answer:
      "Você recebe os dois. O relatório mostra evidências e comparativos. A recomendação prática organiza o que deve ser corrigido primeiro em script, tempo de resposta, processo, design ou posicionamento.",
  },
  {
    question: "Isso pode virar treinamento para o time?",
    answer:
      "Sim. Essa é uma das partes mais valiosas. O Cliente Oculto gera material real para desenvolver atendimento, comercial, recepção e liderança com base no que o cliente vive hoje.",
  },
];

const sectors = [
  "Educação",
  "E-commerce",
  "Varejo",
  "Saúde / Clínica",
  "Serviços profissionais",
  "Indústria / B2B",
  "Outro",
];

const channels = [
  "WhatsApp",
  "Instagram / Direct",
  "Formulário do site",
  "Telefone",
  "Atendimento presencial",
  "Mais de um canal",
];

const focusOptions = [
  "Auditar meu atendimento",
  "Analisar concorrentes",
  "Comparar os dois",
];

const responseVolume = [
  "Até 50 contatos por mês",
  "50 a 200 contatos por mês",
  "200 a 500 contatos por mês",
  "Mais de 500 contatos por mês",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/45";

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
      <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/30">
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

export function ClienteOcultoLanding() {
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
    sector: "",
    channel: "",
    focus: "",
    volume: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/[^\d]/g, "");
    if (digits.length < 3) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const submitLead = async (honeypot = "") => {
    setIsSubmitting(true);
    setSubmitError("");

    const searchParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;

    const payloadFormData = {
      ...formData,
      ...selected,
      service: "Cliente Oculto",
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
          formName: "Diagnóstico Cliente Oculto",
          location: "servicos/cliente-oculto",
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
          formName: "Diagnóstico Cliente Oculto",
          pagePath: "/servicos/cliente-oculto",
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.updo.com.br/servicos/cliente-oculto",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = String(
      new FormData(e.currentTarget).get("companyWebsite") || "",
    ).trim();

    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    await submitLead(honeypot);
  };

  return (
    <main>
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="pointer-events-none absolute top-0 right-0 h-[680px] w-[680px] rounded-full bg-[#6575FF]/[0.12] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Cliente Oculto · Serviço UPDO
                </span>
              </div>

              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Veja como sua empresa atende na prática.
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-white/55">
                Auditamos atendimento, tempo de resposta, follow-up, clareza da oferta
                e percepção competitiva para mostrar onde você perde confiança, lead e
                receita antes mesmo da proposta.
              </p>

              <div className="mt-2 grid gap-3">
                {[
                  "Cliente oculto em WhatsApp, Instagram, telefone, formulário ou loja",
                  "Análise de concorrentes em preço, design, informação e percepção",
                  "Recomendações práticas para script, processo e posicionamento",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-white/58"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10">
                      <span className="h-2 w-2 rounded-full bg-[#6575FF]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contato"
                  className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto"
                >
                  Solicitar diagnóstico
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-white/15 px-8 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
                >
                  Ver diagnóstico estratégico
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl backdrop-blur-2xl">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                    Leitura real da experiência
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-white">
                    O que o cliente vive no seu atendimento e no atendimento do concorrente.
                  </h3>
                </div>

                <div className="mt-6 grid gap-4">
                  {[
                    {
                      icon: Clock3,
                      title: "Tempo de resposta",
                      detail: "Quanto tempo a empresa demora para reagir à oportunidade",
                    },
                    {
                      icon: MessageSquareMore,
                      title: "Condução comercial",
                      detail: "Se a conversa avança ou morre em mensagem pronta",
                    },
                    {
                      icon: Tag,
                      title: "Percepção de oferta",
                      detail: "Como preço, design e clareza influenciam confiança",
                    },
                    {
                      icon: SearchCheck,
                      title: "Força do concorrente",
                      detail: "Onde ele parece mais claro, mais rápido ou mais desejável",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-white">{item.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-white/45">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Onde a receita escapa
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Onde a venda escapa.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
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

      <section className="py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que entregamos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              O que você recebe.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {deliverables.map((item) => (
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

      <section className="bg-[var(--surface-soft)] pb-18 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center">
            <Link
              href="#contato"
              className="group inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
            >
              Quero avaliar meu atendimento
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6575FF]/[0.10] blur-[100px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Método Cliente Oculto
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Da simulação ao plano de ação.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              Entramos na jornada, registramos a experiência e transformamos os
              achados em prioridades claras para atendimento, oferta e processo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {methodology.map((item) => (
              <article
                key={item.step}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/[0.08]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-sm font-black text-[#6575FF]">
                  {item.step}
                </div>
                <h3 className="font-heading text-base font-black leading-snug tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/45">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Resultados
                </span>
                <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                  O que muda na prática.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  O Cliente Oculto revela se o gargalo está no tempo, na linguagem, no
                  processo, na apresentação do produto ou na força de percepção do
                  concorrente. Isso encurta decisão e melhora a execução da equipe.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Tempo", "de resposta comparado com o mercado"],
                  ["Script", "real da equipe e qualidade da abordagem"],
                  ["Percepção", "de preço, valor, design e clareza"],
                  ["Prioridade", "do que corrigir primeiro para vender melhor"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border/70 bg-white p-5"
                  >
                    <p className="font-heading text-2xl font-black tracking-tight text-foreground">
                      {value}
                    </p>
                    <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico gratuito
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Vamos auditar sua experiência comercial.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha os dados para entendermos o canal, o foco da auditoria e onde
                faz mais sentido aplicar Cliente Oculto na sua operação.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
                >
                  <label htmlFor="cliente-oculto-companyWebsite">Site da empresa</label>
                  <input
                    id="cliente-oculto-companyWebsite"
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

                  <FormField label="Empresa" htmlFor="empresa">
                    <input
                      id="empresa"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData((p) => ({ ...p, empresa: e.target.value }))}
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="E-mail" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="seuemail@empresa.com"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Telefone" htmlFor="telefone">
                    <input
                      id="telefone"
                      required
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, telefone: formatPhone(e.target.value) }))
                      }
                      placeholder="(00) 00000-0000"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Setor" htmlFor="sector" icon={Sparkles}>
                    <SelectField
                      id="sector"
                      value={selected.sector}
                      placeholder="Selecione o setor"
                      options={sectors}
                      onChange={(value) => setSelected((p) => ({ ...p, sector: value }))}
                    />
                  </FormField>

                  <FormField label="Canal principal" htmlFor="channel" icon={PhoneCall}>
                    <SelectField
                      id="channel"
                      value={selected.channel}
                      placeholder="Selecione o canal"
                      options={channels}
                      onChange={(value) => setSelected((p) => ({ ...p, channel: value }))}
                    />
                  </FormField>

                  <FormField label="Foco da auditoria" htmlFor="focus" icon={SearchCheck}>
                    <SelectField
                      id="focus"
                      value={selected.focus}
                      placeholder="Selecione o foco"
                      options={focusOptions}
                      onChange={(value) => setSelected((p) => ({ ...p, focus: value }))}
                    />
                  </FormField>

                  <FormField label="Volume de contatos" htmlFor="volume" icon={ShieldCheck}>
                    <SelectField
                      id="volume"
                      value={selected.volume}
                      placeholder="Selecione o volume"
                      options={responseVolume}
                      onChange={(value) => setSelected((p) => ({ ...p, volume: value }))}
                    />
                  </FormField>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/48">
                    Vamos avaliar seu atendimento, a força do concorrente e os pontos que
                    merecem correção primeiro para proteger a conversão.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    {isSubmitting ? "Enviando..." : "Diagnosticar meu atendimento"}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>

                  {submitError && (
                    <p className="text-center text-xs font-semibold text-red-300">
                      {submitError}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    <TrustItem icon={Lock} text="Dados usados só no diagnóstico" />
                    <TrustItem icon={ShieldCheck} text="Contato direto com a equipe UPDO" />
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center py-12 text-center">
                <SuccessIcon />
                <h3 className="font-heading text-2xl font-black tracking-tight text-white">
                  Recebemos seu diagnóstico.
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/50">
                  Vamos analisar o cenário e entender onde faz mais sentido aplicar Cliente Oculto na sua operação.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Dúvidas frequentes.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de revisar script, preço ou campanha, vale entender a experiência
                real que o cliente vive hoje.
              </p>
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
                        "font-heading text-lg font-black tracking-tight transition-colors",
                        openFaq === index ? "text-[#6575FF]" : "text-foreground",
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
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
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
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
