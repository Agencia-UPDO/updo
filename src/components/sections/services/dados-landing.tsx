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
  Database,
  Eye,
  Filter,
  Layers,
  Lock,
  Plus,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const blockers = [
  {
    icon: Layers,
    title: "Dados espalhados em várias ferramentas",
    description:
      "GA4, Meta Ads, CRM, planilha e RD Station mostram leituras diferentes. Sem visão unificada, a decisão volta para o feeling.",
  },
  {
    icon: BarChart3,
    title: "O último clique leva crédito demais",
    description:
      "Sem atribuição, o canal que aparece no fim da jornada recebe mérito por uma venda que talvez tenha começado em outro lugar.",
  },
  {
    icon: Clock,
    title: "Relatório manual chega atrasado",
    description:
      "Quando a planilha fica pronta, o cenário já mudou. A equipe perde tempo consolidando dado em vez de decidir o próximo ajuste.",
  },
];

const deliverables = [
  {
    icon: Database,
    title: "Coleta e estrutura de dados",
    description:
      "Tag Manager, UTMs, eventos e conversões configurados para gerar uma base confiável.",
  },
  {
    icon: BarChart3,
    title: "Dashboard unificado",
    description:
      "Marketing, vendas e financeiro em uma tela com atualização recorrente e leitura clara.",
  },
  {
    icon: Target,
    title: "Atribuição de conversão",
    description:
      "Modelo para entender quais canais participam da jornada e onde a verba deve ganhar força.",
  },
  {
    icon: Eye,
    title: "KPIs e alertas automáticos",
    description:
      "Metas por canal e alertas quando CAC, conversão ou receita saem do esperado.",
  },
  {
    icon: Layers,
    title: "Cohort, LTV e qualidade de canal",
    description:
      "Análise de quem compra, volta, permanece e gera margem depois da primeira conversão.",
  },
  {
    icon: Filter,
    title: "Governança e dicionário de dados",
    description:
      "Nomenclatura, acessos e documentação para o time ler o mesmo número do mesmo jeito.",
  },
];

const matrix = [
  {
    icon: Database,
    label: "Coleta limpa",
    role: "Eventos, UTMs e conversões validados desde a origem.",
    score: "Base confiável",
  },
  {
    icon: BarChart3,
    label: "Dashboard centralizado",
    role: "Fontes conectadas em uma leitura única de marketing e vendas.",
    score: "Visão real",
  },
  {
    icon: Target,
    label: "Atribuição correta",
    role: "Crédito distribuído pela jornada, não só pelo último clique.",
    score: "Verba certa",
  },
  {
    icon: Zap,
    label: "Alerta proativo",
    role: "Indicador fora da meta aparece antes de virar problema de caixa.",
    score: "Ação rápida",
  },
];

const faqs = [
  {
    question: "Funciona com as ferramentas que já usamos?",
    answer:
      "Na maioria dos casos, sim. Integramos GA4, Meta Ads, RD Station, HubSpot, Pipedrive, Shopify, WooCommerce, planilhas e outras fontes comuns.",
  },
  {
    question: "Quanto tempo para ter o dashboard funcionando?",
    answer:
      "A primeira versão costuma ficar pronta entre 2 e 4 semanas, dependendo da quantidade de fontes e da qualidade da coleta atual.",
  },
  {
    question: "Precisamos de analista interno para usar?",
    answer:
      "Não. O dashboard é desenhado para leitura executiva e operacional. Também entregamos guia de leitura e onboarding do time.",
  },
  {
    question: "O que é atribuição multi-touch?",
    answer:
      "É uma forma de distribuir crédito entre os pontos de contato da jornada, em vez de considerar apenas o último clique antes da venda.",
  },
  {
    question: "Serve para e-commerce?",
    answer:
      "Sim. Podemos conectar eventos de produto, carrinho, compra, SKU, ticket, margem e comportamento pós-clique.",
  },
  {
    question: "Os dados ficam seguros?",
    answer:
      "Trabalhamos com mínimo acesso, credenciais seguras e governança. O objetivo é organizar os dados nas ferramentas da própria operação.",
  },
];

const businessTypes = [
  "B2B / Serviços",
  "B2C / Produto físico",
  "SaaS / Software",
  "E-commerce",
  "Educação / EAD",
  "Outro",
];

const activeChannels = ["1 a 2 canais", "3 a 5 canais", "6 a 10 canais", "Mais de 10 canais"];

const mainPains = [
  "Dados espalhados",
  "Não sei qual canal converte",
  "Relatório manual",
  "CAC alto sem causa clara",
  "Sem KPIs definidos",
];

const currentTools = [
  "Google Analytics / GA4",
  "Planilha manual",
  "Looker Studio",
  "Power BI",
  "Não uso ferramenta",
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

function DataDashboard() {
  const channels = [
    ["Google Ads", "38%", "38%"],
    ["Meta Ads", "27%", "27%"],
    ["E-mail", "18%", "18%"],
    ["Orgânico / SEO", "11%", "11%"],
    ["Outros", "6%", "6%"],
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Dashboard de marketing
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#6575FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
            Ao vivo
          </span>
        </div>
        <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-white">
          Receita atribuída por canal.
        </h3>
      </div>

      <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {[
          ["CAC médio", "R$184"],
          ["LTV médio", "R$4,2k"],
          ["ROI total", "22,8x"],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col gap-0.5 px-4 py-3">
            <span className="text-[10px] text-white/40">{label}</span>
            <span className="text-sm font-black text-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {channels.map(([name, value, width], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-white/45">{name}</span>
              <span className="font-black text-white">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#6575FF]" style={{ width }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function DadosLanding() {
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
    businessType: "",
    channels: "",
    mainPain: "",
    currentTool: "",
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
        formName: "Diagnóstico Inteligência de Dados",
        location: "servicos/inteligencia-de-dados",
        formData: { ...formData, ...selected },
      });

      const message = `Olá! Vim pela página de Inteligência de Dados da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Tipo de negócio:* ${selected.businessType}
*Canais ativos:* ${selected.channels}
*Principal dor:* ${selected.mainPain}
*Ferramenta atual:* ${selected.currentTool}

Quero estruturar a inteligência de dados do meu marketing.`;

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
                Inteligência de Dados · Serviço UPDO
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Decisão baseada em dado, não em feeling ou planilha.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/55">
                Estruturamos coleta, dashboards, KPIs e atribuição para você
                enxergar quais canais geram receita, margem e previsibilidade.
              </p>
              <div className="grid gap-3">
                {[
                  "Dashboard unificado de marketing, vendas e financeiro",
                  "Atribuição por canal e jornada completa",
                  "KPIs com alerta quando a meta é ameaçada",
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
                  Estruturar meus dados
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
              <DataDashboard />
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
              Onde a leitura dos dados costuma quebrar.
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
              Seis frentes para decidir com dado confiável.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A entrega conecta infraestrutura, visualização, governança e
              rotina para o dado sair da planilha e entrar na decisão.
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
              Quero estruturar meus dados
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
              Sistema de dados
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Os quatro pilares da inteligência de dados UPDO.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              Coleta, visualização, atribuição e alerta trabalhando juntos para
              a decisão ser tomada com dado real.
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
                  De 12% para 94% de receita rastreada.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Empresa B2B com verba em seis canais, UTMs inconsistentes e
                  relatório manual. Após coleta, dashboard e atribuição, a verba
                  deixou de seguir percepção e passou a seguir receita.
                </p>
                <Link
                  href="#contato"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                >
                  Quero esse resultado nos meus dados
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:w-56 lg:shrink-0">
                {[
                  ["94%", "receita rastreada"],
                  ["-35%", "CAC"],
                  ["2,8x", "ROI"],
                  ["< 5min", "relatório semanal"],
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
                Vamos entender como estão seus dados.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha para analisarmos coleta, atribuição, dashboards e
                governança antes da reunião.
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
                  <FormField label="Tipo de negócio" htmlFor="businessType" icon={Layers}>
                    <SelectField
                      id="businessType"
                      value={selected.businessType}
                      placeholder="Qual o modelo?"
                      options={businessTypes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, businessType: value }))}
                    />
                  </FormField>
                  <FormField label="Canais ativos" htmlFor="channels" icon={BarChart3}>
                    <SelectField
                      id="channels"
                      value={selected.channels}
                      placeholder="Quantos canais?"
                      options={activeChannels}
                      onChange={(value) => setSelected((prev) => ({ ...prev, channels: value }))}
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
                  <FormField label="Ferramenta atual" htmlFor="currentTool" icon={Database}>
                    <SelectField
                      id="currentTool"
                      value={selected.currentTool}
                      placeholder="O que usa hoje?"
                      options={currentTools}
                      onChange={(value) => setSelected((prev) => ({ ...prev, currentTool: value }))}
                    />
                  </FormField>
                </div>
                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/45">
                    Com base nas suas respostas, preparamos um diagnóstico mais preciso da maturidade dos seus dados.
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmitClick}
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    Diagnosticar meus dados
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
                Dúvidas sobre dados e analytics de marketing.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de contratar ferramenta ou analista, vale entender onde
                está o gargalo real dos seus dados.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "Dado errado é pior que dado nenhum, porque a equipe passa a confiar na direção errada."
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
