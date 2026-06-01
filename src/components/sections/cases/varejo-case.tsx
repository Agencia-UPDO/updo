"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  ShoppingBag,
  Store,
  CheckCircle2,
  Database,
  Target,
  Handshake,
  BarChart3,
} from "lucide-react";
import React from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const keyMetrics = [
  {
    icon: TrendingUp,
    label: "Crescimento no faturamento",
    value: "+122%",
    sub: "de 2022 a 2025",
    highlight: true,
  },
  {
    icon: Users,
    label: "Crescimento de tráfego",
    value: "+1.400%",
    sub: "800 → 12.000 visitas/mês",
    highlight: false,
  },
  {
    icon: ShoppingBag,
    label: "Leads gerados",
    value: "+1.000",
    sub: "por mês",
    highlight: false,
  },
  {
    icon: Store,
    label: "Ticket médio",
    value: "+35%",
    sub: "e maior fluxo na loja física",
    highlight: false,
  },
];

// Faturamento anual aproximado (dados originais × multiplicadores)
const revenueData = [
  { year: "2022", Faturamento: 3366000 },
  { year: "2023", Faturamento: 3459000 },
  { year: "2024", Faturamento: 6292000 },
  { year: "2025", Faturamento: 7465000.97 },
];

// Previsto vs. Realizado — Jan–Jun 2025
const goalData = [
  { mes: "Jan", Meta: 591000, Realizado: 610000, pct: 103 },
  { mes: "Fev", Meta: 554000, Realizado: 537000, pct: 97 },
  { mes: "Mar", Meta: 565000, Realizado: 581000, pct: 103 },
  { mes: "Abr", Meta: 593000, Realizado: 653000, pct: 110 },
  { mes: "Mai", Meta: 594000, Realizado: 703000, pct: 118 },
  { mes: "Jun", Meta: 597000, Realizado: 716000, pct: 120 },
];

const solution = [
  {
    step: "01",
    icon: Database,
    title: "A Fundação: Catálogo e CRM",
    description:
      "Substituímos o e-commerce problemático por um catálogo focado em usabilidade, cotação e integração com RD Station e CRM. O time comercial passou a acompanhar pedidos e conversas de WhatsApp em um fluxo único.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "A Inteligência: Planejamento Robusto",
    description:
      "Com a casa em ordem, aplicamos nossa metodologia de análise de dados. Planejamento robusto ano a ano e regressão linear para mapear sazonalidade, definir metas ambiciosas e ajustar rotas com precisão.",
  },
  {
    step: "03",
    icon: Target,
    title: "Aceleração e Apoio Comercial",
    description:
      "Estruturamos campanhas de Google e Meta Ads segmentadas por categorias e promoções. Criamos materiais de apoio (PDFs, lâminas) alinhados às campanhas para fortalecer o time de vendas em todos os canais.",
  },
];

const learnings = [
  {
    icon: Database,
    text: "Antes de aumentar mídia, o catálogo e o fluxo comercial precisavam funcionar. Sem isso, tráfego novo só aumentaria o desperdício.",
  },
  {
    icon: BarChart3,
    text: "Planejamento com regressão linear e sazonalidade transformou metas genéricas em alvos precisos. Quebrar recordes mês a mês tornou-se o ritual da equipe.",
  },
  {
    icon: Handshake,
    text: "Parceria com reuniões semanais de acompanhamento permite ajustes rápidos e crescimento consistente. Por isso esse cliente segue conosco desde 2022.",
  },
];

// ─── Formatter ────────────────────────────────────────────────────────────────

const fmtCurrency = (v: number) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

// ─── Chart Components ─────────────────────────────────────────────────────────

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white p-7 transition-all duration-300 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]">
    <div className="absolute top-0 left-0 w-1 h-full bg-[#6575FF]/0 transition-all duration-300 group-hover:bg-[#6575FF]/40" />
    <p className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground/60 mb-8 flex items-center gap-2 font-heading">
      <span className="w-1.5 h-1.5 rounded-full bg-[#6575FF]/50" />
      {title}
    </p>
    {children}
  </div>
);

const CustomTooltipRevenue = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-border/60 bg-white p-3 shadow-lg text-xs">
      <p className="font-bold text-foreground mb-1">{label}</p>
      <p style={{ color: "#6575FF" }}>
        Faturamento: {fmtCurrency(payload[0].value)}
      </p>
    </div>
  );
};

const CustomTooltipGoal = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  const entry = goalData.find((d) => d.mes === label);
  return (
    <div className="rounded-xl border border-border/60 bg-white p-3 shadow-lg text-xs">
      <p className="font-bold text-foreground mb-1">{label}/2025</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: {fmtCurrency(p.value)}
        </p>
      ))}
      {entry && (
        <p
          className="mt-1 font-black"
          style={{ color: entry.pct >= 100 ? "#6575FF" : "#f87171" }}
        >
          {entry.pct}% da meta
        </p>
      )}
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CaseVarejoClient() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#6575FF]/[0.08] rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          {/* Back nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#cases"
              className="mb-10 inline-flex items-center gap-2 text-xs font-bold text-white/25 transition-colors duration-200 hover:text-white/60 lg:mb-16"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar para cases
            </Link>
          </motion.div>

          {/* Centered headline block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="updo-badge mb-8 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Case · Varejista Híbrido B2B/B2C
            </span>

            <h1 className="font-heading font-black text-white tracking-tight leading-none">
              <span className="block text-4xl text-white md:text-5xl lg:text-5xl">
                +122% de faturamento e +1.400% de tráfego
              </span>
            </h1>

            <p className="mt-8 text-white/40 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Como um varejista paulistano com mais de 20 anos de
              mercado, saindo do histórico de tetos de faturamento para recordes
              consecutivos ano após ano.
            </p>
          </motion.div>

          {/* 4 metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 lg:mt-14 lg:grid-cols-4"
          >
            {keyMetrics.map((m) => (
              <div
                key={m.label}
                className={`flex flex-col gap-2.5 rounded-2xl border p-5 lg:p-6 ${
                  m.highlight
                    ? "border-[#6575FF]/30 bg-[#6575FF]/[0.08]"
                    : "border-white/[0.07] bg-white/[0.03]"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                    m.highlight
                      ? "border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]"
                      : "border-white/10 bg-white/[0.04] text-white/30"
                  }`}
                >
                  <m.icon className="h-3.5 w-3.5" />
                </span>
                <span
                  className={`text-2xl lg:text-3xl font-black tracking-tight leading-none ${
                    m.highlight ? "text-[#6575FF]" : "text-white"
                  }`}
                >
                  {m.value}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-white/40">
                    {m.label}
                  </span>
                  <span className="text-xs text-white/20 leading-snug">
                    {m.sub}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* thin separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── Challenge ────────────────────────────────────── */}
      <section className="py-18 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Contexto
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
                O problema de negócio
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                    Problema
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Um grande varejista de São Paulo com mais de 20 anos de
                  mercado chegou com um objetivo claro: aumentar as vendas.
                  Apesar da experiência no setor, a empresa nunca havia
                  alcançado o patamar de faturamento desejado. Experiências
                  anteriores com agências não deram previsibilidade de retorno, e
                  o CEO buscava parceria que comprovasse ROI de forma clara e
                  objetiva. O diagnóstico revelou o gargalo: o e-commerce
                  anterior tinha problemas técnicos e de usabilidade que
                  limitavam tráfego e geração de negócios.
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.04] p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]/60" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6575FF]/70">
                    Hipótese
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  "Organizando catálogo, CRM e leitura de dados antes de escalar
                  planejamento baseado em dados e sazonalidade, conseguiríamos
                  superar o faturamento histórico com mais controle sobre metas,
                  campanhas e atendimento comercial."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Strategy ─────────────────────────────────────── */}
      <section className="py-18 lg:py-28 bg-[var(--surface-soft)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Estratégia
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
                Estratégia, dados e execução
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Três frentes que conectaram catálogo, mídia e comercial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {solution.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-white p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/60">
                      Etapa {s.step}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-black text-foreground leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Charts ───────────────────────────────────────── */}
      <section className="py-18 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Resultados visuais
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
                A transformação em números
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Crescimento anual e superação de metas em 2025.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Evolução do Faturamento */}
              <ChartCard title="Evolução do Faturamento Anual">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={revenueData}
                      barSize={56}
                      margin={{ top: 20, right: 0, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f1f5f9"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="year"
                        tick={{
                          fontSize: 11,
                          fill: "#94a3b8",
                          fontWeight: 700,
                        }}
                        axisLine={false}
                        tickLine={false}
                        dy={8}
                      />
                      <YAxis
                        tick={{ fontSize: 10, fill: "#cbd5e1" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `R$${(v / 1000000).toFixed(1)}M`}
                      />
                      <Tooltip
                        content={<CustomTooltipRevenue />}
                        cursor={{ fill: "rgba(0,0,0,0.02)" }}
                      />
                      <Bar dataKey="Faturamento" radius={[6, 6, 0, 0]}>
                        {revenueData.map((_, i) => (
                          <Cell
                            key={i}
                            fill={
                              i === 3
                                ? "#6575FF"
                                : i === 2
                                  ? "#8B98FF"
                                  : i === 1
                                    ? "#AEB6FF"
                                    : "#D6DAFF"
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D6DAFF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      2022
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#AEB6FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      2023
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8B98FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6575FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      2025
                    </span>
                  </div>
                </div>
              </ChartCard>

              {/* Previsto vs. Realizado 2025 */}
              <ChartCard title="Previsto vs. Realizado 2025">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={goalData}
                      barGap={4}
                      barSize={36}
                      margin={{ top: 20, right: 0, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f1f5f9"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="mes"
                        tick={{
                          fontSize: 11,
                          fill: "#94a3b8",
                          fontWeight: 700,
                        }}
                        axisLine={false}
                        tickLine={false}
                        dy={8}
                      />
                      <YAxis
                        tick={{ fontSize: 10, fill: "#cbd5e1" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`}
                      />
                      <Tooltip
                        content={<CustomTooltipGoal />}
                        cursor={{ fill: "rgba(0,0,0,0.02)" }}
                      />
                      <Bar
                        dataKey="Meta"
                        fill="#e2e8f0"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar dataKey="Realizado" radius={[6, 6, 0, 0]}>
                        {goalData.map((entry, i) => (
                          <Cell
                            key={i}
                            fill={entry.pct >= 100 ? "#6575FF" : "#f87171"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Meta
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6575FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Superado
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Abaixo
                    </span>
                  </div>
                </div>
              </ChartCard>
            </div>

            {/* Context highlights */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.04] p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground/80">
                    +122% de faturamento em 3 anos.
                  </span>{" "}
                  De R$&nbsp;3,4M em 2022 para R$&nbsp;7,46M em 2025, quebrando o
                  teto histórico que a empresa nunca havia ultrapassado ao longo
                  de mais de duas décadas.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.04] p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground/80">
                    5 de 6 meses acima da meta em 2025.
                  </span>{" "}
                  Com pico de 120% no mês de junho, consolidando a
                  previsibilidade de receita como resultado do planejamento
                  baseado em dados.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Partnership ──────────────────────────────────── */}
      <section className="py-18 lg:py-28 bg-[var(--surface-soft)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="updo-badge mb-4 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Parceria contínua
            </span>
            <h2 className="font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
              Uma parceria iniciada em 2022, com recordes ano após ano.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              O trabalho começou com correções de estrutura e virou rotina de
              crescimento. Com acompanhamento semanal, o cliente passou a revisar
              metas, campanhas e atendimento com base nos números de cada ciclo.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl mx-auto sm:grid-cols-4">
              {["2022", "2023", "2024", "2025"].map((year, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-1 rounded-2xl border border-[#6575FF]/20 bg-white p-4"
                >
                  <span className="text-lg font-black text-[#6575FF]">
                    {year}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                    Recorde
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Learnings ────────────────────────────────────── */}
      <section className="py-18 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Aprendizados
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
                O que esse case ensina
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {learnings.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                    <l.icon className="h-5 w-5" />
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                    {l.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Seu varejo pode crescer com mais leitura comercial.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/35">
              Vamos entender onde catálogo, mídia e atendimento podem melhorar
              receita sem depender apenas de mais tráfego.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contato"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#cases"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/30 transition-colors hover:text-white/60"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Ver outros cases
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
