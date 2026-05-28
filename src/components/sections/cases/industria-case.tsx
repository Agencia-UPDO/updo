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
} from "recharts";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Target,
  DollarSign,
  ShoppingCart,
  CheckCircle2,
  Search,
  BarChart3,
  Zap,
  FileText,
} from "lucide-react";
import React from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const keyMetrics = [
  {
    icon: DollarSign,
    label: "Retorno total",
    value: "R$ 350k",
    sub: "em receita gerada",
    highlight: false,
  },
  {
    icon: TrendingUp,
    label: "ROI geral",
    value: "1.527%",
    sub: "sobre o investimento total",
    highlight: true,
  },
  {
    icon: ShoppingCart,
    label: "Vendas Google Ads",
    value: "32",
    sub: "ROI de 1.863% no canal",
    highlight: false,
  },
  {
    icon: Target,
    label: "Vendas Meta Ads",
    value: "70",
    sub: "ROI de 1.314% no canal",
    highlight: false,
  },
];

// Google: invest 8360, return 164163, sales 32
// Meta:   invest 13140, return 185837, sales 70
const channelData = [
  { canal: "Google Ads", Investimento: 8360, Retorno: 164163 },
  { canal: "Meta Ads", Investimento: 13140, Retorno: 185837 },
];

const efficiencyData = [
  { canal: "Google Ads", "ROI (%)": 1863, "Ticket Médio (R$)": 5130 },
  { canal: "Meta Ads", "ROI (%)": 1314, "Ticket Médio (R$)": 2655 },
];

const solution = [
  {
    step: "01",
    icon: Search,
    title: "Pesquisa de mercado e desk research",
    description:
      "Mapeamos concorrentes, canais de venda, comportamento de compra e sazonalidade da categoria antes de definir mídia, mensagem e oferta.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Seleção de canais por intenção",
    description:
      "Google Ads entrou para capturar demanda ativa. Meta Ads foi usado para ampliar alcance, testar criativos e gerar demanda em públicos com aderência ao produto.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Otimização semanal de verba e criativos",
    description:
      "Acompanhamos investimento, retorno, ticket médio e vendas por canal para redistribuir verba e ajustar campanhas com base no que gerava receita.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Relatórios para decisão da diretoria",
    description:
      "Organizamos os dados em uma leitura simples para gestão: quanto foi investido, quanto voltou, quais canais venderam e onde valia aumentar orçamento.",
  },
];

const learnings = [
  {
    icon: Search,
    text: "Campanha industrial precisa começar por mercado, canal e margem. Sem essa leitura, mídia vira teste caro.",
  },
  {
    icon: BarChart3,
    text: "Google e Meta funcionaram melhor quando cada canal recebeu uma função clara no funil, em vez de disputar o mesmo papel.",
  },
  {
    icon: FileText,
    text: "Para diretoria comprar a estratégia, o relatório precisa mostrar receita, investimento, ROI e próximos ajustes sem ruído.",
  },
];

// ─── Formatters ───────────────────────────────────────────────────────────────

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

const CustomTooltipChannel = ({
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
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: {fmtCurrency(p.value)}
        </p>
      ))}
    </div>
  );
};

const CustomTooltipEfficiency = ({
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
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name.includes("Ticket")
            ? `${p.name}: ${fmtCurrency(p.value)}`
            : `${p.name}: ${p.value.toLocaleString("pt-BR")}%`}
        </p>
      ))}
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CaseIndustriaClient() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#07111F] pt-10 pb-16 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
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
              Case · Indústria de Bens de Consumo
            </span>

            <h1 className="font-heading font-black text-white tracking-tight leading-none">
              <span className="block text-4xl text-white md:text-5xl lg:text-5xl">
                1.527% de ROI e R$ 350k em vendas
              </span>
            </h1>

            <p className="mt-8 text-white/40 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Como uma operação industrial validou mídia digital com
              R$&nbsp;350.000 em receita atribuída a partir de R$&nbsp;21.500
              investidos.
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
                  Uma indústria de bens de consumo, com forte atuação no varejo
                  tradicional, precisava validar se mídia digital poderia gerar
                  vendas diretas com retorno mensurável. O desafio não era só
                  vender: era mostrar para a diretoria quais canais geravam
                  receita, com qual investimento e em que velocidade.
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
                  "Com leitura de mercado, separação clara entre Google e Meta e
                  acompanhamento semanal de ROI, seria possível comprovar o papel
                  do digital sem depender de percepção ou métricas que não explicam receita."
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
                Nossa metodologia em 4 etapas
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Pesquisa, canal, execução e leitura financeira.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                Investimento versus retorno por canal, lado a lado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Investimento vs Retorno */}
              <ChartCard title="Investimento vs Retorno por Canal">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={channelData}
                      barGap={6}
                      barSize={44}
                      margin={{ top: 20, right: 0, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f1f5f9"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="canal"
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
                        content={<CustomTooltipChannel />}
                        cursor={{ fill: "rgba(0,0,0,0.02)" }}
                      />
                      <Bar
                        dataKey="Investimento"
                        fill="#94a3b8"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        dataKey="Retorno"
                        fill="#6575FF"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#94a3b8]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Investimento
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6575FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Retorno
                    </span>
                  </div>
                </div>
              </ChartCard>

              {/* ROI e Ticket Médio */}
              <ChartCard title="ROI e Ticket Médio por Canal">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={efficiencyData}
                      barGap={6}
                      barSize={44}
                      margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f1f5f9"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="canal"
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
                        yAxisId="left"
                        tick={{ fontSize: 10, fill: "#cbd5e1" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fontSize: 10, fill: "#cbd5e1" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `R$${(v / 1000).toFixed(1)}k`}
                      />
                      <Tooltip
                        content={<CustomTooltipEfficiency />}
                        cursor={{ fill: "rgba(0,0,0,0.02)" }}
                      />
                      <Bar
                        yAxisId="left"
                        dataKey="ROI (%)"
                        fill="#6575FF"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="Ticket Médio (R$)"
                        fill="#94a3b8"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6575FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      ROI
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#94a3b8]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Ticket Médio
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
                    Google Ads: ROI de 1.863%.
                  </span>{" "}
                  Com investimento de R$&nbsp;8.360, o canal gerou
                  R$&nbsp;164.163 em retorno, com 32 vendas e ticket médio de
                  R$&nbsp;5.130.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.04] p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground/80">
                    Meta Ads: ROI de 1.314%.
                  </span>{" "}
                  Com R$&nbsp;13.140 investidos, o canal gerou R$&nbsp;185.837,
                  70 vendas com ticket médio de R$&nbsp;2.655.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Learnings ────────────────────────────────────── */}
      <section className="py-18 lg:py-28 bg-[var(--surface-soft)]">
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
      <section className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
              Sua indústria pode medir melhor o retorno do digital.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/35">
              Vamos avaliar onde mídia, oferta e leitura comercial podem gerar
              receita mensurável para a sua operação.
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
