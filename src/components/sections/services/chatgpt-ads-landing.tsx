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
  Filter,
  Globe2,
  Layers,
  Lock,
  Megaphone,
  MousePointerClick,
  Plus,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const blockers = [
  {
    icon: Filter,
    title: "A marca não aparece na hora da decisão",
    description:
      "O cliente usa o ChatGPT para comparar opções, entender diferenças e escolher caminhos, mas sua empresa ainda não participa dessa conversa.",
  },
  {
    icon: Layers,
    title: "Campanha pensada como busca tradicional",
    description:
      "ChatGPT Ads não funciona apenas por palavra-chave. Contexto, intenção conversacional, oferta e landing page precisam conversar entre si.",
  },
  {
    icon: BarChart3,
    title: "Presença paga sem autoridade orgânica",
    description:
      "Comprar mídia sem estruturar SEO e GEO gera tráfego, mas não ajuda a marca a ser compreendida e citada pelas IAs no longo prazo.",
  },
];

const deliverables = [
  {
    icon: Target,
    title: "Mapeamento de intenção conversacional",
    description:
      "Identificamos dúvidas, comparações, problemas e momentos de decisão em que sua solução pode ser realmente útil.",
  },
  {
    icon: Search,
    title: "Estrutura de campanhas e context hints",
    description:
      "Organizamos campanhas, grupos de anúncios, objetivos, orçamento e sinais de contexto para orientar a relevância.",
  },
  {
    icon: Megaphone,
    title: "Anúncios úteis e específicos",
    description:
      "Criamos variações de títulos, textos e imagens com benefício claro, sem frases genéricas ou promessas artificiais.",
  },
  {
    icon: Briefcase,
    title: "Landing pages orientadas à conversa",
    description:
      "A página responde ao contexto que trouxe o clique, explica a oferta e conduz a próxima ação sem quebra de expectativa.",
  },
  {
    icon: Globe2,
    title: "SEO, GEO e autoridade em IA",
    description:
      "Transformamos perguntas e aprendizados da mídia em páginas e conteúdos compreensíveis por buscadores e modelos de IA.",
  },
  {
    icon: BarChart3,
    title: "Tracking, conversão e otimização",
    description:
      "Acompanhamos impressões, cliques, CPC, conversões e qualidade comercial com UTMs, analytics, CRM e Ads Manager.",
  },
];

const matrix = [
  {
    icon: Target,
    label: "Intenção",
    role: "Mapeamos o que o cliente está tentando entender, comparar ou resolver.",
    score: "Momento certo",
  },
  {
    icon: MousePointerClick,
    label: "Contexto",
    role: "Usamos sinais que aproximam a oferta das conversas em que ela é relevante.",
    score: "Mais relevância",
  },
  {
    icon: Layers,
    label: "Experiência",
    role: "Anúncio e landing page mantêm clareza, utilidade e continuidade da conversa.",
    score: "Menos atrito",
  },
  {
    icon: BarChart3,
    label: "Aprendizado",
    role: "A mídia revela perguntas e ofertas que também fortalecem SEO, GEO e conteúdo.",
    score: "Evolução contínua",
  },
];

const faqs = [
  {
    question: "O que é ChatGPT Ads?",
    answer:
      "É a plataforma de anúncios da OpenAI. Os anúncios aparecem separados das respostas e podem alcançar pessoas enquanto elas exploram opções, comparam alternativas e tomam decisões dentro do ChatGPT.",
  },
  {
    question: "ChatGPT Ads funciona como Google Ads?",
    answer:
      "Não exatamente. Há objetivos, orçamento, lances e anúncios, mas a entrega considera o contexto e a intenção da conversa, além do anúncio e da landing page. Os context hints ajudam a orientar a relevância, mas não funcionam como palavras-chave exatas.",
  },
  {
    question: "Quais modelos de cobrança estão disponíveis?",
    answer:
      "A plataforma oferece campanhas por CPM, CPC e, quando disponível para a conta, otimização para conversão. A escolha depende do objetivo, da maturidade do tracking e do volume de dados.",
  },
  {
    question: "A UPDO cria e gerencia as campanhas?",
    answer:
      "Sim. Fazemos diagnóstico, estrutura de campanha, contextos, anúncios, criativos, landing pages, configuração de mensuração, acompanhamento e otimização.",
  },
  {
    question: "Por que combinar ChatGPT Ads com SEO e GEO?",
    answer:
      "ChatGPT Ads gera presença paga e dados mais rápidos. SEO e GEO estruturam páginas, entidades, respostas e provas para ampliar a presença orgânica da marca em buscadores e sistemas de IA. Uma frente acelera aprendizado; a outra constrói autoridade.",
  },
  {
    question: "O serviço serve para qualquer empresa?",
    answer:
      "Não automaticamente. Avaliamos elegibilidade da categoria, disponibilidade da plataforma, clareza da oferta, qualidade da landing page e capacidade de medir conversão antes de recomendar investimento.",
  },
];

const budgetRanges = [
  "Menos de R$5 mil/mês",
  "R$5 mil a R$20 mil/mês",
  "R$20 mil a R$80 mil/mês",
  "Acima de R$80 mil/mês",
];

const activeChannelsOptions = [
  "Já anuncio no ChatGPT",
  "Tenho conta, mas ainda não anunciei",
  "Uso Google e/ou Meta Ads",
  "Não tenho mídia ativa",
];

const businessTypes = [
  "B2B / Serviços",
  "B2C / Produto",
  "SaaS / Software",
  "E-commerce",
  "Educação / EAD",
  "Outro",
];

const mainPains = [
  "Começar no ChatGPT Ads",
  "Otimizar campanhas existentes",
  "Criar landing pages para a mídia",
  "Estruturar tracking e conversão",
  "Integrar ChatGPT Ads, SEO e GEO",
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

function ChatGptAdsVisual() {
  const journey = [
    ["Conversa", "Problema e intenção"],
    ["Contexto", "Sinais de relevância"],
    ["Anúncio", "Oferta útil e específica"],
    ["Landing page", "Continuidade e conversão"],
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Aquisição nativa em IA
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#6575FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
            Operação ativa
          </span>
        </div>
        <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-white">
          Da intenção na conversa até a conversão.
        </h3>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {journey.map(([name, detail], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="relative flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.035] p-3.5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[11px] font-black text-[#6575FF]">
              0{index + 1}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-black text-white">{name}</p>
              <p className="mt-0.5 text-xs text-white/40">{detail}</p>
            </div>
            {index < journey.length - 1 ? (
              <span className="absolute -bottom-[17px] left-[29px] h-4 w-px bg-[#6575FF]/35" />
            ) : null}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {[
          ["Mídia", "CPC / CPM"],
          ["Orgânico", "SEO + GEO"],
          ["Leitura", "CRM + Dados"],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col gap-0.5 px-4 py-3">
            <span className="text-[10px] text-white/40">{label}</span>
            <span className="text-sm font-black text-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <p className="text-sm font-medium leading-relaxed text-white/55">
          ChatGPT Ads não substitui SEO ou Google Ads. Ele abre um novo ponto de
          contato com pessoas que já estão explicando o que precisam.
        </p>
      </div>
    </div>
  );
}

export function ChatGptAdsLanding() {
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
    budget: "",
    channels: "",
    businessType: "",
    mainPain: "",
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
      service: "ChatGPT Ads e Presença em IA",
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
          formName: "Diagnóstico ChatGPT Ads",
          location: "servicos/chatgpt-ads",
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
          formName: "Diagnóstico ChatGPT Ads",
          pagePath: "/servicos/chatgpt-ads",
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.updo.com.br/servicos/chatgpt-ads",
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
    const honeypot = String(
      new FormData(event.currentTarget).get("companyWebsite") || "",
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
                ChatGPT Ads · Serviço UPDO
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                ChatGPT Ads para aparecer quando o cliente está decidindo.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/55">
                Planejamos e operamos campanhas no ChatGPT conectando intenção
                conversacional, anúncios, landing pages, tracking, SEO e GEO.
              </p>
              <div className="grid gap-3">
                {[
                  "Contextos definidos por intenção e momento de decisão",
                  "Anúncios e landing pages com continuidade de mensagem",
                  "Mídia paga integrada a SEO, GEO, analytics e CRM",
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
                  Quero anunciar no ChatGPT
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
                >
                  Ver diagnóstico
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="hidden lg:block"
            >
              <ChatGptAdsVisual />
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
              Por que simplesmente replicar campanhas antigas não basta.
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
              O que entregamos em ChatGPT Ads e presença em IA.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A operação conecta campanha, contexto, criativo, landing page,
              conversão e autoridade orgânica em um mesmo aprendizado.
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
              Quero estruturar ChatGPT Ads
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
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
              Método UPDO
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Quatro camadas para transformar conversa em aquisição.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              A plataforma é nova, mas o fundamento continua rigoroso: relevância,
              experiência, mensuração e aprendizado comercial.
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
                  Canal emergente
                </span>
                <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                  Entrar cedo exige teste controlado, não aposta cega.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A UPDO já opera campanhas na plataforma e usa os primeiros dados
                  para ajustar contexto, mensagem, página e mensuração. Começamos
                  com hipóteses claras, orçamento controlado e critério de escala.
                </p>
                <Link
                  href="#contato"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                >
                  Quero avaliar esse canal para minha empresa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:w-56 lg:shrink-0">
                {[
                  ["CPC", "custo por clique"],
                  ["CTR", "taxa de cliques"],
                  ["Conversões", "ações geradas"],
                  ["CPA", "custo por conversão"],
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
                Vamos avaliar ChatGPT Ads para sua empresa.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha para analisarmos oferta, categoria, estrutura digital,
                investimento e capacidade de medir conversões.
              </p>
            </div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
                >
                  <label htmlFor="chatgpt-ads-companyWebsite">
                    Site da empresa
                  </label>
                  <input
                    id="chatgpt-ads-companyWebsite"
                    type="text"
                    name="companyWebsite"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
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
                  <FormField label="Budget mensal" htmlFor="budget" icon={BarChart3}>
                    <SelectField
                      id="budget"
                      value={selected.budget}
                      placeholder="Quanto investe por mês?"
                      options={budgetRanges}
                      onChange={(value) => setSelected((prev) => ({ ...prev, budget: value }))}
                    />
                  </FormField>
                  <FormField label="Experiência com mídia" htmlFor="channels" icon={Layers}>
                    <SelectField
                      id="channels"
                      value={selected.channels}
                      placeholder="Como está sua operação?"
                      options={activeChannelsOptions}
                      onChange={(value) => setSelected((prev) => ({ ...prev, channels: value }))}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Tipo de negócio" htmlFor="businessType" icon={Briefcase}>
                    <SelectField
                      id="businessType"
                      value={selected.businessType}
                      placeholder="Qual o modelo?"
                      options={businessTypes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, businessType: value }))}
                    />
                  </FormField>
                  <FormField label="Objetivo principal" htmlFor="mainPain" icon={TrendingUp}>
                    <SelectField
                      id="mainPain"
                      value={selected.mainPain}
                      placeholder="O que quer estruturar?"
                      options={mainPains}
                      onChange={(value) => setSelected((prev) => ({ ...prev, mainPain: value }))}
                    />
                  </FormField>
                </div>
                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/45">
                    Com base nas respostas, avaliamos se o canal faz sentido e qual estrutura precisa entrar primeiro.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    {isSubmitting ? "Enviando..." : "Avaliar ChatGPT Ads"}
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
                Dúvidas sobre anúncios no ChatGPT.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                A plataforma ainda está evoluindo. Por isso, estratégia, política,
                tracking e clareza da oferta importam tanto quanto a campanha.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  &ldquo;Entrar cedo pode gerar vantagem, desde que o teste produza aprendizado comercial e não apenas novidade.&rdquo;
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
