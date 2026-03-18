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
    title: "Pesquisa Profunda e Desk Research",
    description:
      "Nenhum tiro no escuro. Iniciamos com imersão completa no mercado do cliente, analisando concorrentes, comportamento do consumidor e tendências. Esse desk research foi a base para uma estratégia com alicerces sólidos.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Análise e Seleção de Canais",
    description:
      "Com os dados em mãos, definimos os campos de batalha: Google Ads para capturar demanda de alta intenção e Meta Ads (Instagram) para gerar desejo e volume, alcançando o público em seus momentos de lazer.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Execução Ágil e Otimização Semanal",
    description:
      "Através de reuniões semanais de acompanhamento, analisamos resultados em tempo real, otimizando orçamentos, criativos e públicos para extrair o máximo de performance de cada real investido.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Relatórios na Língua do C-Level",
    description:
      "Para vencer a desconfiança, a comunicação foi chave. Criamos dashboards que traduziam métricas complexas em uma linguagem clara para a diretoria: Investimento, Retorno e Lucratividade.",
  },
];

const learnings = [
  {
    icon: Search,
    text: "Desk research sólido antes de qualquer campanha elimina desperdício de verba e acelera os resultados desde o primeiro mês.",
  },
  {
    icon: BarChart3,
    text: "Google e Meta têm papéis diferentes no funil. Entender isso e alocar budget por intenção, e não por conveniência, faz toda a diferença.",
  },
  {
    icon: FileText,
    text: "Relatórios que falam a língua do cliente transformam céticos em defensores do marketing digital. Esse alinhamento é o combustível para escala.",
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
  <div className="group relative rounded-2xl border border-border/60 bg-white p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-primary/20 overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
    <p className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground/60 mb-8 flex items-center gap-2 font-heading">
      <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseIndustria() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-[#0A1529] relative overflow-hidden pt-28 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#f97316]/[0.05] rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          {/* Back nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#cases"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/25 hover:text-white/60 transition-colors duration-200 mb-16"
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
            <span className="inline-flex items-center rounded-full border border-[#f97316]/25 bg-[#f97316]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#f97316]/80 mb-8">
              Case · Indústria de Bens de Consumo
            </span>

            <h1 className="font-heading font-black text-white tracking-tight leading-none">
              <span className="block text-7xl md:text-9xl bg-[linear-gradient(135deg,#f97316_20%,#fb923c_80%)] bg-clip-text text-transparent">
                1.527%
              </span>
              <span className="block mt-3 text-2xl md:text-3xl text-white/30 font-black">
                de ROI e R$ 350k em vendas
              </span>
            </h1>

            <p className="mt-8 text-white/40 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Como transformamos o ceticismo de uma diretoria industrial em
              R$&nbsp;350.000 de faturamento digital com apenas R$&nbsp;21.500
              de investimento.
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
            className="mt-16 max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {keyMetrics.map((m) => (
              <div
                key={m.label}
                className={`flex flex-col gap-2.5 rounded-2xl border p-5 lg:p-6 ${
                  m.highlight
                    ? "border-[#f97316]/30 bg-[#f97316]/[0.08]"
                    : "border-white/[0.07] bg-white/[0.03]"
                }`}
              >
                <m.icon
                  className={`h-3.5 w-3.5 ${m.highlight ? "text-[#f97316]/60" : "text-white/20"}`}
                />
                <span
                  className={`text-2xl lg:text-3xl font-black tracking-tight leading-none ${
                    m.highlight ? "text-[#f97316]" : "text-white"
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
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                Contexto
              </span>
              <h2 className="mt-2 font-heading text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                O problema de negócio
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-[#F7F9FF] p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                    Problema
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed text-[15px]">
                  Uma gigante da indústria de bens de consumo, com forte atuação
                  no varejo tradicional, chegou com um desafio duplo. O
                  primeiro, externo: como gerar vendas diretas em um cenário
                  digital cada vez mais competitivo? O segundo, e mais complexo,
                  era interno: uma diretoria que não acreditava no potencial do
                  marketing digital.
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-[#f97316]/20 bg-[#f97316]/[0.03] p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]/50" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f97316]/60">
                    Hipótese
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed text-[15px] italic">
                  "Com pesquisa sólida, seleção criteriosa de canais e
                  otimização semanal, conseguiríamos provar para a diretoria que
                  cada real investido no digital retornaria múltiplas vezes,
                  transformando céticos em defensores do canal."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Strategy ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F7F9FF]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                Estratégia
              </span>
              <h2 className="mt-2 font-heading text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                Nossa metodologia em 4 etapas
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Da pesquisa à prova irrefutável, passo a passo.
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
                  className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-white p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f97316]/10 text-xs font-black text-[#f97316]">
                      {s.step}
                    </span>
                    <s.icon className="h-4 w-4 text-[#f97316]/60" />
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
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                Resultados visuais
              </span>
              <h2 className="mt-2 font-heading text-3xl lg:text-4xl font-black text-foreground tracking-tight">
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
                        fill="#f97316"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        dataKey="Retorno"
                        fill="#22C55E"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f97316]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Investimento
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
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
                        fill="#f97316"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="Ticket Médio (R$)"
                        fill="#22C55E"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f97316]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      ROI
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Ticket Médio
                    </span>
                  </div>
                </div>
              </ChartCard>
            </div>

            {/* Context highlights */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-[#f97316]/20 bg-[#f97316]/[0.04] p-6">
                <CheckCircle2 className="h-4 w-4 text-[#f97316] mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <span className="font-bold text-foreground/80">
                    Google Ads: ROI de 1.863%.
                  </span>{" "}
                  Com investimento de R$&nbsp;8.360, o canal gerou
                  R$&nbsp;164.163 em retorno, com 32 vendas e ticket médio de
                  R$&nbsp;5.130.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#f97316]/20 bg-[#f97316]/[0.04] p-6">
                <CheckCircle2 className="h-4 w-4 text-[#f97316] mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/70 leading-relaxed">
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
      <section className="py-24 lg:py-32 bg-[#F7F9FF]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                Aprendizados
              </span>
              <h2 className="mt-2 font-heading text-3xl lg:text-4xl font-black text-foreground tracking-tight">
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
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10">
                    <l.icon className="h-4 w-4 text-[#f97316]" />
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed pt-1">
                    {l.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
              Próximo passo
            </span>
            <h2 className="mt-4 font-heading text-3xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
              A história desta indústria pode ser a sua.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Nossa abordagem é focada em transformar desafios em oportunidades
              e investimentos em resultados exponenciais. Está pronto para
              construir seu próprio case de sucesso?
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://conteudo.updo.com.br/pedido-de-orcamento-cases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f97316] px-8 py-4 text-sm font-black text-white transition-all duration-200 hover:bg-[#ea6c0a] hover:shadow-lg hover:-translate-y-0.5"
              >
                Quero uma análise gratuita
              </Link>
              <Link
                href="/#cases"
                className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
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
