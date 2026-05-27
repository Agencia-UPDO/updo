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
  Zap,
  DollarSign,
  CheckCircle2,
  Crosshair,
  RefreshCw,
} from "lucide-react";
import React from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const keyMetrics = [
  {
    icon: TrendingUp,
    label: "Crescimento mensal",
    value: "+6.900%",
    sub: "de R$3k para +R$211k/mês",
    highlight: false,
  },
  {
    icon: Target,
    label: "ROAS geral",
    value: "4.7x",
    sub: "Retorno sobre investimento",
    highlight: true,
  },
  {
    icon: DollarSign,
    label: "CAC vs meta",
    value: "−29%",
    sub: "Abaixo da meta estipulada",
    highlight: false,
  },
  {
    icon: Zap,
    label: "Google Ads",
    value: "−50%",
    sub: "CAC menor que os demais canais",
    highlight: false,
  },
];

const funnelSteps = [
  {
    stage: "Impressões",
    value: "6.333.690",
    cost: "R$7,45",
    costLabel: "CPM",
    convRate: "0,82%",
    convLabel: "CTR",
    pct: 100,
  },
  {
    stage: "Cliques",
    value: "51.679",
    cost: "R$0,91",
    costLabel: "CPC",
    convRate: "78,5%",
    convLabel: "visualizaram",
    pct: 70,
  },
  {
    stage: "Visualizações",
    value: "40.567",
    cost: "R$1,16",
    costLabel: "CPV",
    convRate: "39,7%",
    convLabel: "add to cart",
    pct: 55,
  },
  {
    stage: "Carrinho",
    value: "20.536",
    cost: "R$2,30",
    costLabel: "Cost",
    convRate: "11,8%",
    convLabel: "checkout",
    pct: 40,
  },
  {
    stage: "Checkouts",
    value: "2.420",
    cost: "R$19,49",
    costLabel: "Cost",
    convRate: "74,5%",
    convLabel: "vendas",
    pct: 25,
  },
  {
    stage: "Vendas",
    value: "1.803",
    cost: "R$26,16",
    costLabel: "Custo/venda",
    convRate: "4,45%",
    convLabel: "Tx. conversão",
    pct: 14,
    isLast: true,
  },
];

const channelData = [
  { canal: "Google Ads", Investimento: 7499, Faturamento: 59530 },
  { canal: "Meta Ads", Investimento: 39671, Faturamento: 161754 },
];

const efficiencyData = [
  { canal: "Google Ads", "CAC (R$)": 15.05, "ROAS (x)": 7.94 },
  { canal: "Meta Ads", "CAC (R$)": 30.4, "ROAS (x)": 4.08 },
];

const solution = [
  {
    step: "01",
    title: "Diagnóstico e planejamento",
    description:
      "Aplicamos a matriz CSD para estruturar hipóteses. Mapeamos a persona e usamos neuromarketing para criar anúncios com alta conexão emocional. Definimos KPIs claros: CAC-alvo e meta de ROAS.",
  },
  {
    step: "02",
    title: "Inteligência de dados",
    description:
      "Analisamos o comportamento do consumidor e a jornada de compra para definir um CAC ideal. Cada decisão de investimento passou a ser guiada por dados, buscando a máxima eficiência.",
  },
  {
    step: "03",
    title: "Execução e remarketing",
    description:
      "Implementamos uma estrutura robusta de campanhas com testes contínuos de criativos e públicos. O remarketing foi essencial para recuperar carrinhos e maximizar a conversão.",
  },
];

const learnings = [
  {
    icon: Crosshair,
    text: "A segmentação baseada nas dores da persona foi o principal driver para taxa de conversão 3x superior à média do mercado.",
  },
  {
    icon: TrendingUp,
    text: "Google Ads foi o canal mais eficiente (CAC −50%), capturando demanda de alta intenção no fundo do funil.",
  },
  {
    icon: RefreshCw,
    text: "Remarketing estruturado foi essencial para maximizar a conversão de usuários captados via Meta Ads.",
  },
];

// ─── Formatters ───────────────────────────────────────────────────────────────

const fmtCurrency = (v: number) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

// ─── Charts ───────────────────────────────────────────────────────────────────

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

const CustomTooltipCurrency = ({
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
          {p.name.includes("CAC")
            ? `${p.name}: ${fmtCurrency(p.value)}`
            : `${p.name}: ${p.value}x`}
        </p>
      ))}
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CaseEcommerceClient() {
  return (
    <main className="flex flex-col">
      {/* ── Hero — centered, cinematic ───────────────────── */}
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
              Case · E-commerce de Moda Infantil
            </span>

            <h1 className="font-heading font-black text-white tracking-tight leading-none">
              <span className="block text-4xl text-white md:text-5xl lg:text-5xl">
                +6.900% em vendas em 60 dias
              </span>
            </h1>

            <p className="mt-8 text-white/40 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Como estruturamos o marketing de um e-commerce de moda infantil
              para sair de R$3k para mais de R$211k de faturamento mensal, com
              ROAS de 4.7x.
            </p>
          </motion.div>

          {/* 4 metrics — centered grid */}
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
                  Um e-commerce B2C recém-lançado por uma indústria B2B. Baixo
                  volume de vendas, CAC que inviabilizava o crescimento e
                  ceticismo interno sobre a viabilidade do investimento em
                  marketing digital.
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
                  "Aplicando uma metodologia focada em análise de persona para
                  otimizar o funil de conversão, conseguiríamos ROAS superior a
                  4x e taxa de conversão 200% acima da média do mercado em 60
                  dias."
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
                Como chegamos lá
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Três pilares estruturais que transformaram os resultados.
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-xs font-black text-[#6575FF]">
                    {s.step}
                  </span>
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

      {/* ── Funnel ───────────────────────────────────────── */}
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
                Funil de Conversão
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
                A jornada do cliente em números
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Da primeira impressão até a venda, cada etapa medida e
                otimizada.
              </p>
            </div>

            {/* Funnel table — animated width bars */}
            <div className="flex flex-col divide-y divide-border/30 overflow-hidden rounded-2xl border border-border/70 bg-white">
              {funnelSteps.map((step, i) => (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`flex items-center gap-4 px-5 py-4 lg:px-7 ${
                    step.isLast ? "bg-[#6575FF]/[0.04]" : ""
                  }`}
                >
                  {/* Stage label */}
                  <span
                    className={`text-xs font-black uppercase tracking-widest w-24 shrink-0 ${
                      step.isLast
                        ? "text-[#6575FF]/70"
                        : "text-muted-foreground/60"
                    }`}
                  >
                    {step.stage}
                  </span>

                  {/* Animated bar */}
                  <div className="flex-1 h-9 bg-muted/30 rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.pct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: i * 0.08,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      className={`h-full rounded-lg flex items-center px-3 ${
                        step.isLast ? "bg-[#6575FF]/15" : "bg-[#6575FF]/[0.08]"
                      }`}
                    >
                      <span
                        className={`text-sm font-black tracking-tight whitespace-nowrap ${
                          step.isLast ? "text-[#6575FF]" : "text-foreground/80"
                        }`}
                      >
                        {step.value}
                      </span>
                    </motion.div>
                  </div>

                  {/* Unit cost */}
                  <div className="w-20 shrink-0 text-right">
                    <span className="text-sm font-bold text-foreground/70">
                      {step.cost}
                    </span>
                    <span className="text-xs text-muted-foreground/50 block">
                      {step.costLabel}
                    </span>
                  </div>

                  {/* Conversion to next */}
                  {!step.isLast ? (
                    <div className="w-20 shrink-0 text-right hidden md:block">
                      <span className="text-xs font-bold text-foreground/50">
                        {`→ ${step.convRate}`}
                      </span>
                      <span className="text-xs text-muted-foreground/25 block">
                        {step.convLabel}
                      </span>
                    </div>
                  ) : (
                    <div className="w-20 shrink-0 text-right hidden md:block">
                      <span className="text-xs font-black text-[#6575FF]/80">
                        {step.convRate}
                      </span>
                      <span className="block text-xs text-[#6575FF]/40">
                        conv. geral
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Charts ───────────────────────────────────────── */}
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
                Performance por canal
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
                Google vs Meta: eficiência comparada
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Canais diferentes, papéis diferentes no funil.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Investimento vs Faturamento */}
              <ChartCard title="Investimento vs Faturamento">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={channelData}
                      barGap={6}
                      barSize={44}
                      margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
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
                        content={<CustomTooltipCurrency />}
                        cursor={{ fill: "rgba(0,0,0,0.02)" }}
                      />
                      <Bar
                        dataKey="Investimento"
                        fill="#94a3b8"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        dataKey="Faturamento"
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
                      Faturamento
                    </span>
                  </div>
                </div>
              </ChartCard>

              {/* CAC + ROAS */}
              <ChartCard title="CAC e ROAS por canal">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={efficiencyData}
                      barGap={6}
                      barSize={44}
                      margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
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
                        tickFormatter={(v) => `R$${v}`}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fontSize: 10, fill: "#cbd5e1" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `${v}x`}
                      />
                      <Tooltip
                        content={<CustomTooltipEfficiency />}
                        cursor={{ fill: "rgba(0,0,0,0.02)" }}
                      />
                      <Bar
                        yAxisId="left"
                        dataKey="CAC (R$)"
                        fill="#f87171"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="ROAS (x)"
                        fill="#6575FF"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      CAC (R$)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6575FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      ROAS (x)
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
                    Taxa de conversão de 4,45%.
                  </span>{" "}
                  A média do e-commerce brasileiro é de 1% a 2%. Esse resultado
                  posiciona a loja entre as de maior performance do país.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.04] p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground/80">
                    ROAS de 4.7x.
                  </span>{" "}
                  O mercado busca um ROAS saudável de 3x. Atingir quase 5x
                  garante operação lucrativa com forte potencial de escala.
                </p>
              </div>
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Aprendizados
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
                O que esse case ensina
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {learnings.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex items-start gap-5 rounded-2xl border border-border/70 bg-white p-7"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                    <l.icon className="h-5 w-5" />
                  </span>
                  <div className="pt-1">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {l.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6575FF]/[0.08] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              A história desta empresa pode ser a sua.
            </h2>
            <p className="mt-4 text-white/35 text-base leading-relaxed">
              Vamos entender o seu negócio antes de propor qualquer coisa.
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
                className="inline-flex items-center gap-2 text-sm font-bold text-white/30 hover:text-white/60 transition-colors duration-200"
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
