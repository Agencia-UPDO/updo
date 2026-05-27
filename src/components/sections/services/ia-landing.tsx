"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock,
  DatabaseZap,
  FileText,
  Lock,
  MessageSquare,
  Phone,
  Plus,
  RefreshCw,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* ─────────────────────────────── Data ─────────────────────────────── */

const metrics = [
  { label: "Tempo de resposta", value: "< 30s", detail: "24h por dia, 7 dias por semana" },
  { label: "Qualificação manual", value: "-65%", detail: "tempo do time em triagem" },
  { label: "Capacidade de atendimento", value: "+3x", detail: "sem aumentar headcount" },
  { label: "Leads sem resposta", value: "0", detail: "todos recebem retorno imediato" },
];

const blockers = [
  {
    icon: Clock,
    title: "A janela de compra fecha antes do humano responder",
    description:
      "Pesquisas mostram que lead respondido em até 5 minutos tem 21x mais chance de converter do que após 30 minutos. Seu time demora horas, às vezes dias. O lead esfria, vai para o concorrente e você nem sabe.",
  },
  {
    icon: Users,
    title: "Vendedor qualificado desperdiçando tempo em lead frio",
    description:
      "O comercial atende todo mundo porque não tem filtro. Gasta energia com quem nunca vai comprar e chega cansado na oportunidade real. CAC sobe, moral cai, taxa de conversão despenca.",
  },
  {
    icon: RefreshCw,
    title: "Follow-up que depende de memória e boa vontade",
    description:
      "Proposta foi, lead sumiu. Ninguém fez follow-up porque 'não teve tempo'. Cada venda não fechada é uma sequência de ações que não aconteceu, e isso está custando receita todo mês.",
  },
];

const deliverables = [
  {
    icon: MessageSquare,
    title: "Agente de qualificação via WhatsApp",
    description:
      "IA que recepciona o lead, faz as perguntas certas do seu processo e agenda reunião, tudo pelo WhatsApp, com o tom de voz da sua marca.",
  },
  {
    icon: RefreshCw,
    title: "Follow-up automático pós-proposta",
    description:
      "Sequência ativa de mensagens que acompanha o lead após proposta enviada. Sem precisar de ação humana, sem deixar oportunidade esfriar.",
  },
  {
    icon: Bot,
    title: "Atendimento pré-venda 24/7",
    description:
      "Responde dúvidas frequentes, apresenta serviços e captura dados qualificados fora do horário comercial, sem nenhum lead perdido por falta de cobertura.",
  },
  {
    icon: DatabaseZap,
    title: "Integração com CRM e RD Station",
    description:
      "Lead qualificado pela IA já entra no CRM com dados preenchidos, etapa correta e histórico de conversa. Zero trabalho manual de registro.",
  },
  {
    icon: Workflow,
    title: "Handoff inteligente para o humano",
    description:
      "A IA reconhece o momento de passar para o vendedor: lead qualificado, interesse confirmado, objeção que precisa de humano. O comercial entra só quando vale a pena.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de performance dos agentes",
    description:
      "Métricas de conversação, taxa de qualificação, tempo médio de resposta e leads gerados pela automação, com visibilidade total do que a IA está fazendo.",
  },
];

const matrix = [
  {
    icon: MessageSquare,
    label: "WhatsApp Business API",
    role: "Qualificação e atendimento pelo canal preferido do brasileiro",
    score: "Alta conversão",
  },
  {
    icon: BrainCircuit,
    label: "IA generativa (GPT / Claude)",
    role: "Modelos configurados com seu processo, tom e base de conhecimento",
    score: "Personalizado",
  },
  {
    icon: DatabaseZap,
    label: "CRM e automação",
    role: "Integração com RD Station, HubSpot, Salesforce e similares",
    score: "Zero atrito",
  },
  {
    icon: Workflow,
    label: "Orquestração e fluxo",
    role: "Lógica de roteamento, handoff e escalada para o time humano",
    score: "Controle total",
  },
];

const faqs = [
  {
    question: "É um chatbot genérico ou personalizado para o meu negócio?",
    answer:
      "100% personalizado. Antes de qualquer implementação, mapeamos sua jornada de venda, as perguntas de qualificação do seu ICP, o tom de voz da marca e as objeções mais comuns. O agente é treinado com esse contexto, não é um bot de FAQ que responde igual para todo mundo.",
  },
  {
    question: "A IA substitui meu time de vendas?",
    answer:
      "Não, ela libera o time para fechar. A IA cuida da triagem, qualificação, agendamento e follow-up. O vendedor entra só quando o lead está aquecido, qualificado e pronto para conversa real. O resultado é mais tempo para oportunidades de verdade.",
  },
  {
    question: "Quais ferramentas e plataformas vocês usam?",
    answer:
      "Depende do seu stack atual. Trabalhamos com WhatsApp Business API, integração com RD Station, HubSpot e Salesforce, e modelos de IA como GPT-4 e Claude. A escolha da ferramenta segue o que faz mais sentido para o seu processo, não o contrário.",
  },
  {
    question: "Quanto tempo leva para implantar?",
    answer:
      "Em média de 3 a 6 semanas para o primeiro agente em produção. O tempo depende da complexidade do processo, das integrações necessárias e da disponibilidade da equipe para os alinhamentos de configuração.",
  },
  {
    question: "Funciona com o CRM que já usamos?",
    answer:
      "Na grande maioria dos casos, sim. Temos integração com os principais CRMs do mercado brasileiro. Nos casos menos comuns, avaliamos via API. O diagnóstico mapeia o stack atual antes de qualquer proposta.",
  },
  {
    question: "Como fica o handoff da IA para o vendedor?",
    answer:
      "Definimos junto com você os gatilhos de escalada: lead que atingiu determinado score de qualificação, objeção específica, pedido de falar com humano, agendamento confirmado. Quando o gatilho dispara, o vendedor recebe notificação com o resumo da conversa e pode entrar de forma contextualizada.",
  },
];

const businessTypes = [
  "E-commerce / Varejo",
  "Educação",
  "Saúde / Clínica",
  "SaaS / Tecnologia",
  "Indústria / B2B",
  "Serviços profissionais",
  "Outro",
];

const leadVolumes = [
  "Menos de 50 leads/mês",
  "50 a 200 leads/mês",
  "200 a 500 leads/mês",
  "500 a 2.000 leads/mês",
  "Mais de 2.000 leads/mês",
];

const crmOptions = [
  "RD Station",
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Planilha / sem CRM",
  "Outro",
];

const mainPains = [
  "Demora no primeiro atendimento",
  "Qualificação manual tomando tempo do time",
  "Follow-up inconsistente",
  "Atendimento fora do horário comercial",
  "Escalar sem contratar mais pessoas",
];

/* ─────────────────────────────── Helpers ─────────────────────────────── */

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
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
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

/* ─────────────────────────────── Chat Demo ─────────────────────────────── */

function ChatDemo() {
  const messages = [
    { from: "lead", text: "Oi, vi o anúncio de vocês. Tenho interesse." },
    { from: "ai", text: "Olá! Fico feliz que tenha chegado até nós 😊\nPara eu te direcionar melhor: qual é o principal desafio que vocês estão enfrentando hoje em vendas?" },
    { from: "lead", text: "A gente gera bastante lead mas o time não dá conta de atender todos." },
    { from: "ai", text: "Entendido. Esse é exatamente o problema que resolvemos.\nQual é o volume médio de leads que vocês recebem por mês?" },
    { from: "lead", text: "Umas 300 a 400 por mês." },
    { from: "ai", text: "Perfeito. Já tenho o contexto necessário para uma conversa produtiva.\nPosso agendar uma sessão de diagnóstico gratuita com nosso time ainda esta semana. Qual horário funciona melhor para você?" },
  ];

  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#6575FF]/30 bg-[#6575FF]/15">
          <Bot className="h-4 w-4 text-[#6575FF]" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Agente UPDO</p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <p className="text-[10px] text-white/40">Online agora</p>
          </div>
        </div>
        <div className="ml-auto">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#6575FF]/70">
            WhatsApp API
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-4 max-h-[360px] overflow-y-auto">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className={cn(
              "flex max-w-[80%]",
              msg.from === "lead" ? "self-end" : "self-start"
            )}
          >
            <div
              className={cn(
                "rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                msg.from === "lead"
                  ? "rounded-br-sm bg-[#6575FF]/20 text-white/82"
                  : "rounded-bl-sm bg-white/[0.07] text-white/70"
              )}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: messages.length * 0.12 + 0.2 }}
          className="self-start flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/[0.07] px-4 py-3"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-2 text-xs text-white/20">
          <Zap className="h-3 w-3 text-[#6575FF]/55" />
          Resposta automática · Configurado para o processo da sua empresa
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────── Main ─────────────────────────────── */

export function IALanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    businessType: "",
    leadVolume: "",
    crm: "",
    mainPain: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/[^\d]/g, "");
    if (digits.length < 3) return digits;
    if (digits.length < 7)
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Olá! Tenho interesse em IA para Vendas.`,
      `Nome: ${formData.nome}`,
      `Empresa: ${formData.empresa}`,
      `E-mail: ${formData.email}`,
      `Telefone: ${formData.telefone}`,
      selected.businessType && `Setor: ${selected.businessType}`,
      selected.leadVolume && `Volume de leads: ${selected.leadVolume}`,
      selected.crm && `CRM atual: ${selected.crm}`,
      selected.mainPain && `Principal dor: ${selected.mainPain}`,
    ]
      .filter(Boolean)
      .join("\n");
    return encodeURIComponent(lines);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer?.push({
        event: "Lead",
        formName: "Diagnóstico IA para Vendas",
        location: "servicos/ia-para-vendas",
        formData: { ...formData, ...selected },
      });
    }

    const message = `Olá! Vim pela página de IA para Vendas da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Setor:* ${selected.businessType}
*Volume de leads:* ${selected.leadVolume}
*CRM atual:* ${selected.crm}
*Principal dor:* ${selected.mainPain}

Quero entender como a IA pode ajudar nas minhas vendas.`;

    setTimeout(() => {
      window.open(`https://wa.me/5541987112003?text=${encodeURIComponent(message)}`, "_blank");
    }, 1200);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#07111F] pt-10 pb-16 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#6575FF]/[0.12] blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  IA Aplicada · Serviço UPDO
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
                Seu time de vendas nunca mais vai perder uma janela de compra.
              </h1>

              <p className="text-base leading-relaxed text-white/55 max-w-xl">
                Implantamos agentes de IA que qualificam, respondem e
                agendam pelo WhatsApp, integrados ao seu CRM, com o tom da
                sua marca, sem substituir o vendedor. Só livrar ele do
                trabalho que não precisa ser humano.
              </p>

              {/* Metrics */}
              <div className="mt-2 hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className="font-heading text-2xl font-black text-white tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-white/40 leading-snug">
                      {m.detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="#contato"
                  className="group inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground shadow-[0_10px_24px_rgba(86,254,213,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_14px_34px_rgba(86,254,213,0.34)] active:scale-95 sm:w-auto"
                >
                  Quero implantar IA nas minhas vendas
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                {[
                  "Configurado para o seu processo",
                  "Integração com seu CRM",
                  "Sem substituir o time",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-xs text-white/40"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#6575FF]/70" />
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Chat Demo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:block"
            >
              <ChatDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BLOCKERS ── */}
      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-12 max-w-xl"
          >
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O problema
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black tracking-tight text-foreground leading-[1.1]">
              O que está custando vendas agora mesmo.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {blockers.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-black tracking-tight text-foreground leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-12 max-w-xl"
          >
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que entregamos
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black tracking-tight text-foreground leading-[1.1]">
              Seis implementações que transformam velocidade em venda.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-black tracking-tight text-foreground leading-snug">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATRIX ── */}
      <section className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#6575FF]/[0.12] blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-12 max-w-xl"
          >
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Como funciona
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.1]">
              A stack que roda o sistema.
            </h2>
            <p className="mt-4 text-sm text-white/45 leading-relaxed max-w-lg">
              Não escolhemos a ferramenta preferida: escolhemos o que encaixa
              no seu processo. A IA serve ao método, não o contrário.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {matrix.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/[0.08]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[#6575FF]">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-black text-white leading-snug">
                    {item.label}
                  </p>
                  <p className="text-xs text-white/45 leading-relaxed">
                    {item.role}
                  </p>
                </div>
                <span className="self-start rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#6575FF]">
                  {item.score}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE ── */}
      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-2xl border border-border/70 bg-white p-8 shadow-[var(--shadow-soft)] lg:p-12"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-start">
                <div className="flex-1">
                  <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                    Resultado real
                  </span>
                  <h2 className="mt-4 font-heading text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight">
                    De 4h de espera para resposta em segundos, sem aumentar o time.
                  </h2>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Empresa de serviços B2B com 300 a 400 leads/mês e time
                    comercial de 3 pessoas. O tempo médio de primeiro
                    atendimento era de 4 horas. Leads frios, CAC alto,
                    vendedores frustrados. Após implantação do agente de
                    qualificação via WhatsApp integrado ao RD Station:
                  </p>
                  <Link
                    href="#contato"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                  >
                    Quero esse resultado na minha empresa
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:w-56 lg:shrink-0">
                  {[
                    { value: "28s", label: "Tempo médio de resposta" },
                    { value: "+3x", label: "Capacidade de atendimento" },
                    { value: "-58%", label: "Tempo em triagem manual" },
                    { value: "+40%", label: "Taxa de agendamento" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-1 rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-5"
                    >
                      <span className="font-heading text-2xl font-black text-foreground tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-muted-foreground leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contato" className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico gratuito
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Descubra se IA para vendas faz sentido para o seu negócio.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha os dados para entendermos seu processo, volume e onde
                a automação gera mais impacto, antes de recomendar qualquer coisa.
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
                  <FormField label="Setor da empresa" htmlFor="businessType">
                    <SelectField
                      id="businessType"
                      value={selected.businessType}
                      placeholder="Selecione o setor..."
                      options={businessTypes}
                      onChange={(v) => setSelected((p) => ({ ...p, businessType: v }))}
                    />
                  </FormField>
                  <FormField label="Volume de leads por mês" htmlFor="leadVolume">
                    <SelectField
                      id="leadVolume"
                      value={selected.leadVolume}
                      placeholder="Selecione o volume..."
                      options={leadVolumes}
                      onChange={(v) => setSelected((p) => ({ ...p, leadVolume: v }))}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="CRM atual" htmlFor="crm">
                    <SelectField
                      id="crm"
                      value={selected.crm}
                      placeholder="Selecione o CRM..."
                      options={crmOptions}
                      onChange={(v) => setSelected((p) => ({ ...p, crm: v }))}
                    />
                  </FormField>
                  <FormField label="Principal dor hoje" htmlFor="mainPain">
                    <SelectField
                      id="mainPain"
                      value={selected.mainPain}
                      placeholder="Onde está o gargalo?"
                      options={mainPains}
                      onChange={(v) => setSelected((p) => ({ ...p, mainPain: v }))}
                    />
                  </FormField>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm font-medium leading-relaxed text-white/50">
                    Com base nas suas respostas, avaliamos onde a IA pode gerar
                    impacto real no seu processo comercial.
                  </p>
                  <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    Quero o diagnóstico gratuito
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  </div>
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
                  Estamos abrindo o WhatsApp para continuar o diagnóstico
                  de IA para vendas.
                </p>
                <p className="mt-6 text-sm font-bold text-accent">
                  Redirecionando...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                Dúvidas sobre IA aplicada a vendas e atendimento.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de implantar qualquer agente, vale entender o processo,
                o volume e onde a automação realmente gera impacto.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "A IA não substitui o vendedor. Ela garante que nenhum lead
                  esfrie antes de o vendedor ter a chance de atender."
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
