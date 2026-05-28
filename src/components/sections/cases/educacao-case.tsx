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
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Trophy,
  CheckCircle2,
  BookOpen,
  Database,
  Handshake,
} from "lucide-react";
import React from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const keyMetrics = [
  {
    icon: Users,
    label: "Geração de leads",
    value: "+211%",
    sub: "de 450 para +1.400/mês",
    highlight: false,
  },
  {
    icon: Target,
    label: "ROAS direto",
    value: "20x",
    sub: "Retorno sobre investimento",
    highlight: true,
  },
  {
    icon: TrendingUp,
    label: "Taxa de conversão",
    value: "+166%",
    sub: "de 6% para 16%",
    highlight: false,
  },
  {
    icon: Trophy,
    label: "Ticket médio",
    value: "+40%",
    sub: "de R$2.500 para R$3.500",
    highlight: false,
  },
];

const leadsData = [
  { cenario: "Antes da UPDO", "Leads Antes": 450, "Leads UPDO": 0 },
  { cenario: "Com a UPDO", "Leads Antes": 0, "Leads UPDO": 1400 },
];

const efficiencyData = [
  {
    cenario: "Antes da UPDO",
    "Tx. Conversão (%)": 6,
    "Ticket Médio (R$)": 2500,
  },
  { cenario: "Com a UPDO", "Tx. Conversão (%)": 16, "Ticket Médio (R$)": 3500 },
];

const solution = [
  {
    step: "01",
    title: "Consultoria: A Fundação",
    description:
      "Diagnóstico de 6 meses com implementação das ferramentas certas: RD Station Marketing e CRM. Desenvolvemos playbooks de vendas, padronizamos processos e ministramos treinamentos de Neuromarketing e Neurovendas para alinhar as equipes.",
  },
  {
    step: "02",
    title: "Gestão 360°: A Aceleração",
    description:
      "Assumimos toda a operação de marketing. Estruturamos e otimizamos campanhas de anúncios, criamos materiais gráficos e de endomarketing, e estabelecemos reuniões semanais de alinhamento para garantir foco no objetivo: vender mais.",
  },
  {
    step: "03",
    title: "Inteligência de Dados: O Timão",
    description:
      "Aplicamos modelos de regressão linear para projetar resultados e ajustar a rota. A parceria próxima nos permitiu usar dados de forma estratégica, garantindo crescimento previsível e sustentável.",
  },
];

const learnings = [
  {
    icon: BookOpen,
    text: "Estruturar processos comerciais antes de escalar investimento em mídia é o que transforma marketing em receita previsível.",
  },
  {
    icon: Database,
    text: "Modelos de regressão linear aplicados a funis de vendas permitiram antecipar gargalos e ajustar campanhas antes de perdas.",
  },
  {
    icon: Handshake,
    text: "A confiança construída na fase de consultoria é o que viabiliza a parceria de longo prazo. É aí que os maiores resultados aparecem.",
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
  <div className="group relative rounded-2xl border border-border/70 bg-white p-7 transition-all duration-300 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)] overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-[#6575FF]/0 transition-all duration-300 group-hover:bg-[#6575FF]/40" />
    <p className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground/60 mb-8 flex items-center gap-2 font-heading">
      <span className="w-1.5 h-1.5 rounded-full bg-[#6575FF]/50" />
      {title}
    </p>
    {children}
  </div>
);

const CustomTooltipLeads = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  const p = payload.find((x) => x.value > 0);
  if (!p) return null;
  return (
    <div className="rounded-xl border border-border/60 bg-white p-3 shadow-lg text-xs">
      <p className="font-bold text-foreground mb-1">{label}</p>
      <p style={{ color: p.color }}>
        {p.value.toLocaleString("pt-BR")} leads/mês
      </p>
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
            : `${p.name}: ${p.value}%`}
        </p>
      ))}
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CaseEducacaoClient() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <Image
            src="/Imagens/bg-case-educacao.jpg"
            alt="Background educacional"
            fill
            className="object-cover opacity-[0.15] grayscale"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07111F] via-transparent to-[#07111F]" />
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
              href="/marketing-educacional"
              className="mb-10 inline-flex items-center gap-2 text-xs font-bold text-white/25 transition-colors duration-200 hover:text-white/60 lg:mb-16"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar para soluções educacionais
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
              Case · Instituição de Ensino Superior
            </span>

            <h1 className="font-heading font-black text-white tracking-tight leading-none">
              <span className="block text-4xl text-white md:text-5xl lg:text-5xl">
                ROAS 20x e +211% de leads gerados
              </span>
            </h1>

            <p className="mt-8 text-white/45 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Como uma instituição de ensino com quase 30 anos de
              história: do platô de crescimento à referência em performance
              comercial na área da saúde no Sul do Brasil.
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
                  className={`text-2xl font-black tracking-tight leading-none ${
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
                  Uma instituição de ensino com quase 30 anos de história,
                  referência na área da saúde no Sul do Brasil, enfrentava um
                  platô de crescimento. TimeComercial operava sem ferramentas
                  adequadas e o marketing não possuía direcionamento estratégico
                  claro. A agência anterior não entregava a performance
                  esperada, tornando a troca inevitável.
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
                  "Estruturando o processo comercial e assumindo o marketing
                  360°, conseguiríamos triplicar a geração de leads e elevar a
                  taxa de conversão para o dobro do cenário anterior em menos de
                  12 meses."
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
                Da consultoria à escala, em duas fases
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
                Antes e depois da parceria com a UPDO.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Leads por mês */}
              <ChartCard title="Geração de Leads (mês)">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={leadsData}
                      barSize={52}
                      margin={{ top: 20, right: 0, left: -10, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f1f5f9"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="cenario"
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
                        tickFormatter={(v) => `${v}`}
                      />
                      <Tooltip
                        content={<CustomTooltipLeads />}
                        cursor={{ fill: "rgba(0,0,0,0.02)" }}
                      />
                      <Bar
                        dataKey="Leads Antes"
                        fill="#cbd5e1"
                        radius={[6, 6, 0, 0]}
                        stackId="a"
                      />
                      <Bar
                        dataKey="Leads UPDO"
                        fill="#6575FF"
                        radius={[6, 6, 0, 0]}
                        stackId="a"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Antes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6575FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Com UPDO
                    </span>
                  </div>
                </div>
              </ChartCard>

              {/* Eficiência comercial */}
              <ChartCard title="Eficiência Comercial">
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
                        dataKey="cenario"
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
                        dataKey="Tx. Conversão (%)"
                        fill="#6575FF"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="Ticket Médio (R$)"
                        fill="#14B8A6"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6575FF]" />
                    <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
                      Tx. Conversão
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
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
                    Taxa de conversão de 16%.
                  </span>{" "}
                  Contra os 6% anteriores, um salto de 166% que posiciona a
                  instituição como referência de eficiência comercial no setor
                  de educação na saúde.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.04] p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground/80">
                    ROAS de 20x.
                  </span>{" "}
                  Para cada R$1 investido em marketing, R$20 retornaram em
                  receita, resultado que levou a parceria a ser reconhecida como
                  caso de referência pela RD Station.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Award ────────────────────────────────────────── */}
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
              Reconhecimento
            </span>
            <h2 className="font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
              Vencedores do Prêmio RD Station 2024
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-sm leading-relaxed text-muted-foreground">
              A parceria chegou à final em 2023 e conquistou o prêmio em 2024.
              Como parceiros Gold da plataforma, esse reconhecimento mostra que
              processo comercial, mídia e dados bem conectados geram resultado
              mensurável em captação educacional.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#6575FF]/20 bg-[#6575FF]/[0.06] px-6 py-3">
              <Trophy className="h-3.5 w-3.5 text-[#6575FF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6575FF]">
                Parceiro Gold · RD Station · 2024
              </span>
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
      <section className="py-18 lg:py-28 bg-[#07111F] relative overflow-hidden">
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
              Sua instituição pode captar com mais previsibilidade.
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
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
