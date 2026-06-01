"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Filter,
  GitBranch,
  Lock,
  Mail,
  MessageSquare,
  MousePointerClick,
  Plus,
  RefreshCw,
  Route,
  Send,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const blockers = [
  {
    icon: Clock,
    title: "Lead esfria antes do primeiro contato",
    description:
      "O lead converte, entra na ferramenta e espera. Sem SLA, alerta e fluxo claro, a oportunidade perde momento antes de chegar ao comercial.",
  },
  {
    icon: Filter,
    title: "Todo lead recebe a mesma mensagem",
    description:
      "Quem baixou um material, pediu orçamento ou voltou pela terceira vez no site não pode entrar na mesma régua. Sem segmentação, a automação vira ruído.",
  },
  {
    icon: GitBranch,
    title: "CRM, WhatsApp e e-mail não conversam",
    description:
      "A equipe trabalha com informação quebrada. O marketing nutre, o comercial aborda sem contexto e ninguém sabe qual etapa realmente avançou.",
  },
];

const deliverables = [
  {
    icon: Route,
    title: "Mapeamento da jornada",
    description:
      "Etapas, pontos de decisão, ofertas, canais e critérios de avanço definidos antes de qualquer configuração de ferramenta.",
  },
  {
    icon: Target,
    title: "Lead scoring",
    description:
      "Pontuação por perfil, comportamento e intenção para separar lead curioso de oportunidade que merece ação comercial.",
  },
  {
    icon: Mail,
    title: "Nutrição por estágio",
    description:
      "Sequências de e-mail e conteúdo por interesse, maturidade e próxima ação esperada do lead.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp integrado",
    description:
      "Fluxos de qualificação, follow-up e reativação conectados ao CRM, sem parecer disparo genérico.",
  },
  {
    icon: Zap,
    title: "Automações no CRM",
    description:
      "Campos, tags, alertas, tarefas e passagem de etapa para reduzir trabalho manual e perda de oportunidade.",
  },
  {
    icon: BarChart3,
    title: "Leitura do funil",
    description:
      "Relatório de abertura, clique, resposta, avanço por etapa e gargalos entre marketing e vendas.",
  },
];

const matrix = [
  {
    icon: Route,
    label: "Jornada",
    role: "O caminho do lead fica claro: origem, intenção, etapa e próxima oferta.",
    score: "Mapa pronto",
  },
  {
    icon: Filter,
    label: "Segmentação",
    role: "A base deixa de ser uma lista única e passa a responder por perfil e comportamento.",
    score: "Mensagem certa",
  },
  {
    icon: Zap,
    label: "Automação",
    role: "E-mail, WhatsApp, CRM e alertas trabalham sem depender de planilha manual.",
    score: "Menos atrito",
  },
  {
    icon: BarChart3,
    label: "Leitura",
    role: "A equipe enxerga onde o lead avançou, parou ou voltou para ser reativado.",
    score: "Ajuste contínuo",
  },
];

const faqs = [
  {
    question: "Funciona com o RD Station que já usamos?",
    answer:
      "Sim. Trabalhamos com RD Station, HubSpot, ActiveCampaign, Pipedrive, Mautic e outras ferramentas. A estrutura é adaptada ao que vocês já usam, desde que a ferramenta permita uma operação confiável.",
  },
  {
    question: "Vocês criam os e-mails e mensagens de WhatsApp?",
    answer:
      "Sim. Criamos a lógica da régua, textos, gatilhos e critérios de disparo. O tom passa por aprovação para manter a identidade da marca e não parecer mensagem automática sem contexto.",
  },
  {
    question: "Lead scoring serve para operação pequena?",
    answer:
      "Serve, principalmente quando o time comercial tem pouco tempo. Mesmo com volume menor, scoring ajuda a priorizar quem tem fit, intenção e comportamento de compra.",
  },
  {
    question: "Quanto tempo para a automação começar a rodar?",
    answer:
      "A primeira versão costuma entrar em produção entre 3 e 5 semanas, dependendo da base, ferramenta, integrações e quantidade de fluxos necessários.",
  },
  {
    question: "O WhatsApp pode entrar sem virar spam?",
    answer:
      "Pode. O WhatsApp precisa ter contexto, permissão, timing e objetivo claro. A ideia não é aumentar disparo, é melhorar a resposta no momento certo.",
  },
  {
    question: "E se a base estiver desorganizada?",
    answer:
      "A organização da base entra no projeto. Antes de automatizar, revisamos campos, tags, listas, origem dos leads e critérios de segmentação para evitar automação em cima de dado ruim.",
  },
];

const platforms = [
  "RD Station",
  "HubSpot",
  "Pipedrive",
  "ActiveCampaign",
  "Planilha / sem ferramenta",
  "Outro",
];

const baseSizes = [
  "Menos de 1 mil contatos",
  "1 mil a 10 mil contatos",
  "10 mil a 50 mil contatos",
  "Mais de 50 mil contatos",
];

const mainPains = [
  "Lead esfria no atendimento",
  "Base parada sem nutrição",
  "Sem lead scoring",
  "CRM e WhatsApp desconectados",
  "Não sei onde o funil trava",
];

const businessTypes = [
  "B2B / Serviços",
  "SaaS / Software",
  "Educação / EAD",
  "E-commerce",
  "Profissional liberal",
  "Outro",
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

function AutomationFlow() {
  const steps = [
    ["Captura", "Formulário, WhatsApp ou landing page", "0 min", "done"],
    ["Segmentação", "Tag por origem, interesse e perfil", "1 min", "done"],
    ["Nutrição", "Sequência por estágio e intenção", "24h", "done"],
    ["Score", "Lead passa do limite comercial", "72h", "active"],
    ["Handoff", "Tarefa e alerta para o vendedor", "agora", "next"],
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Fluxo automatizado
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#6575FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
            Ativo
          </span>
        </div>
        <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-white">
          Do clique ao comercial com contexto.
        </h3>
      </div>

      <div className="mt-6 flex flex-col">
        {steps.map(([label, detail, time, status], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="relative flex gap-4 pb-5 last:pb-0"
          >
            {index < steps.length - 1 ? (
              <div className="absolute left-[9px] top-5 bottom-0 w-px bg-white/10" />
            ) : null}
            <div className="relative z-10 mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[#6575FF]/30 bg-[#6575FF]/10">
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  status === "active" ? "animate-pulse bg-[#6575FF]" : "bg-[#6575FF]/70",
                )}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-white">{label}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-white/30">
                  {time}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-white/45">{detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {[
          ["Resposta", "-42%"],
          ["Oportunidades", "+31%"],
          ["Lead perdido", "-18%"],
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

export function FunilLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = React.useState("");
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    platform: "",
    baseSize: "",
    mainPain: "",
    businessType: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/[^\d]/g, "");
    if (digits.length < 3) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const submitLead = () => {
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer?.push({
        event: "Lead",
        formName: "Diagnóstico Funil e Automação",
        location: "servicos/funil-e-automacao",
        formData: { ...formData, ...selected },
      });

      const message = `Olá! Vim pela página de Funil e Automação da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Plataforma atual:* ${selected.platform}
*Tamanho da base:* ${selected.baseSize}
*Principal dor:* ${selected.mainPain}
*Tipo de negócio:* ${selected.businessType}

Quero estruturar meu funil de nutrição e automação.`;

      const whatsappUrl = `https://wa.me/5541987112003?text=${encodeURIComponent(message)}`;
      setWhatsAppUrl(whatsappUrl);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLead();
  };

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (form && !form.reportValidity()) return;
    submitLead();
  };

  return (
    <main>
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-[#6575FF]/[0.12] blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex flex-col gap-6"
            >
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Funil e Automação · Serviço UPDO
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Funil de vendas e automação para o lead certo chegar na hora certa.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/55">
                Estruturamos jornada, lead scoring, nutrição e automações de
                WhatsApp, e-mail e CRM para o comercial agir com contexto e menos
                trabalho manual.
              </p>
              <div className="grid gap-3">
                {[
                  "Lead scoring conectado ao comportamento real",
                  "Nutrição por estágio da jornada de compra",
                  "Handoff entre marketing, WhatsApp e CRM",
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
                  Estruturar meu funil
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
              <AutomationFlow />
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
              Onde o funil deixa oportunidade esfriar.
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
              Seis frentes para transformar intenção em oportunidade.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A entrega conecta estratégia, conteúdo, automação e rotina
              comercial para o lead avançar sem depender de acompanhamento manual.
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
              Quero automatizar meu funil
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6575FF]/[0.12] blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Sistema de automação
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Os quatro pilares do funil automatizado.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              Jornada, segmentação, automação e leitura precisam operar juntos.
              Quando uma parte quebra, o lead para no caminho.
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
                  Mais velocidade entre lead, resposta e oportunidade.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Operação B2B com RD Station, WhatsApp e CRM desalinhados. Após
                  segmentação, scoring e alertas por etapa, o comercial passou a
                  receber menos lead frio e mais oportunidade com contexto.
                </p>
                <Link
                  href="#contato"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                >
                  Quero esse resultado no meu funil
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:w-56 lg:shrink-0">
                {[
                  ["-42%", "tempo de resposta"],
                  ["+31%", "oportunidades"],
                  ["+24%", "taxa de reunião"],
                  ["-18%", "lead perdido"],
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
                Vamos entender onde seu funil perde lead qualificado.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha para analisarmos jornada, base, automações, WhatsApp e
                CRM antes da reunião.
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
                  <FormField label="Plataforma atual" htmlFor="platform" icon={Zap}>
                    <SelectField
                      id="platform"
                      value={selected.platform}
                      placeholder="Qual ferramenta usa?"
                      options={platforms}
                      onChange={(value) => setSelected((prev) => ({ ...prev, platform: value }))}
                    />
                  </FormField>
                  <FormField label="Tamanho da base" htmlFor="baseSize" icon={Users}>
                    <SelectField
                      id="baseSize"
                      value={selected.baseSize}
                      placeholder="Quantos contatos?"
                      options={baseSizes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, baseSize: value }))}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Principal dor" htmlFor="mainPain" icon={TrendingUp}>
                    <SelectField
                      id="mainPain"
                      value={selected.mainPain}
                      placeholder="Onde está o gargalo?"
                      options={mainPains}
                      onChange={(value) => setSelected((prev) => ({ ...prev, mainPain: value }))}
                    />
                  </FormField>
                  <FormField label="Tipo de negócio" htmlFor="businessType" icon={Target}>
                    <SelectField
                      id="businessType"
                      value={selected.businessType}
                      placeholder="Qual o modelo?"
                      options={businessTypes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, businessType: value }))}
                    />
                  </FormField>
                </div>
                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/45">
                    Com base nas suas respostas, preparamos um diagnóstico mais preciso da maturidade do funil.
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmitClick}
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    Diagnosticar meu funil
                    <ArrowRight className="h-4 w-4" />
                  </button>
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
                {whatsAppUrl && (
                  <Link
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] active:scale-95"
                  >
                    Falar agora pelo WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
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
                Dúvidas sobre funil de nutrição e automação.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de contratar mais ferramenta, vale entender se jornada,
                base, CRM e WhatsApp estão organizados para converter.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "Automação boa não aumenta barulho. Ela entrega contexto para a próxima ação acontecer no momento certo."
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
