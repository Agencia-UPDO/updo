"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Activity,
  BarChart3,
  Bot,
  Briefcase,
  Compass,
  Eye,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

/* ─── Os 4 pilares ─── */
const pillars = [
  {
    label: "Planejamento",
    color: "border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]",
    iconColor: "text-[#6575FF]",
    icon: Compass,
    description:
      "ICP, metas, canais e cronograma alinhados antes de qualquer execução. Nada começa sem clareza de para onde ir e por que.",
  },
  {
    label: "Método",
    color: "border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]",
    iconColor: "text-[#6575FF]",
    icon: Target,
    description:
      "Framework proprietário que conecta geração de demanda, qualificação e processo comercial em torno do mesmo objetivo de receita.",
  },
  {
    label: "Execução",
    color: "border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]",
    iconColor: "text-[#6575FF]",
    icon: Zap,
    description:
      "Ativação de canais, campanhas, automações e processo comercial com acompanhamento semanal e ajustes orientados por dado.",
  },
  {
    label: "Feedback",
    color: "border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]",
    iconColor: "text-[#6575FF]",
    icon: RefreshCw,
    description:
      "Dados em tempo real, dashboards e reuniões semanais que alimentam decisão, ajuste de rota e crescimento composto ao longo do tempo.",
  },
];

/* ─── Os 3 níveis ─── */
const levels = [
  {
    number: "01",
    title: "Nível Estratégico",
    who: "C-level e liderança",
    description:
      "Trabalhamos diretamente com quem decide: CEO, CMO, CSO. Alinhamos visão, metas de receita, prioridades de canal e projeções de crescimento antes de qualquer execução.",
    items: [
      "Definição de ICP e posicionamento",
      "Metas de MRR, CAC e LTV",
      "Plano de canais e prioridades",
      "Projeções e cenários de crescimento",
    ],
    accent: "from-[#6575FF]/10 to-[#6575FF]/5",
    border: "border-border/70",
    badge: "bg-[#6575FF]/10 text-[#6575FF] border-[#6575FF]/20",
  },
  {
    number: "02",
    title: "Nível Tático",
    who: "Gestores e times internos",
    description:
      "Conectamos estratégia à operação com os gestores e times internos. Campanhas, materiais, treinamento comercial e processos de nutrição saem do papel com responsáveis e SLAs claros.",
    items: [
      "Criação de campanhas e materiais",
      "Funil de nutrição e automação",
      "Treinamento de neuromarketing e vendas",
      "Handoff entre marketing e comercial",
    ],
    accent: "from-[#6575FF]/10 to-[#6575FF]/5",
    border: "border-border/70",
    badge: "bg-[#6575FF]/10 text-[#6575FF] border-[#6575FF]/20",
  },
  {
    number: "03",
    title: "Nível Operacional",
    who: "Execução diária e otimização",
    description:
      "Execução com rigor, velocidade e transparência. Gestão de mídia paga em tempo real, otimização contínua de conversão e entrega dos KPIs combinados com visibilidade total no Radar UPDO.",
    items: [
      "Gestão diária de mídia paga",
      "Otimização de landing pages e CRO",
      "Dashboard e relatório de performance",
      "Ajustes em tempo real por dado",
    ],
    accent: "from-[#6575FF]/10 to-[#6575FF]/5",
    border: "border-border/70",
    badge: "bg-[#6575FF]/10 text-[#6575FF] border-[#6575FF]/20",
  },
];

/* ─── O que entregamos ─── */
const deliverables = [
  {
    icon: Target,
    title: "Geração de Demanda",
    description: "Google, Meta, LinkedIn e SEO calibrados para gerar o lead certo com o menor CPL possível.",
    href: "/servicos/geracao-de-demanda",
    bg: "bg-[#6575FF]/10 border-[#6575FF]/20",
    color: "text-[#6575FF]",
  },
  {
    icon: Users,
    title: "Inside Sales",
    description: "Playbook, pipeline, processo de qualificação e treinamento para o time comercial vender com consistência.",
    href: "/servicos/inside-sales",
    bg: "bg-[#6575FF]/10 border-[#6575FF]/20",
    color: "text-[#6575FF]",
  },
  {
    icon: Bot,
    title: "IA para Vendas",
    description: "Agentes de IA que qualificam leads, respondem objeções e agendam reuniões no WhatsApp 24/7.",
    href: "/servicos/ia-para-vendas",
    bg: "bg-[#6575FF]/10 border-[#6575FF]/20",
    color: "text-[#6575FF]",
  },
  {
    icon: BarChart3,
    title: "Inteligência de Dados",
    description: "Dashboard unificado, atribuição multi-touch e KPIs que mostram onde cada real de marketing vira receita.",
    href: "/servicos/inteligencia-de-dados",
    bg: "bg-[#6575FF]/10 border-[#6575FF]/20",
    color: "text-[#6575FF]",
  },
  {
    icon: Zap,
    title: "Funil e Automação",
    description: "Nutrição, lead scoring e automação de WhatsApp para o lead certo chegar ao comercial no momento certo.",
    href: "/servicos/funil-e-automacao",
    bg: "bg-[#6575FF]/10 border-[#6575FF]/20",
    color: "text-[#6575FF]",
  },
  {
    icon: Eye,
    title: "UX e CRO",
    description: "Diagnóstico de abandono, hipóteses com dado e testes A/B para aumentar conversão de forma contínua.",
    href: "/servicos/ux-cro",
    bg: "bg-[#6575FF]/10 border-[#6575FF]/20",
    color: "text-[#6575FF]",
  },
];

/* ─── Component ─── */

export function OQueFazemosPage() {
  return (
    <main className="bg-background">

      {/* ── Hero ── */}
      <section className="relative flex items-start overflow-hidden bg-background pt-10 pb-16 lg:min-h-[88vh] lg:items-center lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,254,213,0.16),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(101,117,255,0.12),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="updo-hero-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Como funcionamos
              </span>
              <h1 className="mt-8 font-heading text-4xl font-black leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Do diagnóstico ao resultado: tudo conectado, nada terceirizado.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Estruturamos estratégia, executamos com rigor e medimos cada etapa pelo impacto real no caixa, não por métricas de vaidade. Marketing, vendas e dados funcionando como um só sistema.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Método próprio com pilares, níveis e entregáveis claros",
                  "Atuação nos níveis estratégico, tático e operacional",
                  "Transparência total sobre o que está funcionando",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10">
                      <span className="h-2 w-2 rounded-full bg-[#6575FF]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/diagnostico"
                  className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-[0_10px_24px_rgba(86,254,213,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_14px_34px_rgba(86,254,213,0.34)] active:scale-95 sm:w-auto lg:h-16 lg:px-10 lg:text-lg"
                >
                  Agendar diagnóstico
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#servicos"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-border/80 bg-white/40 px-8 text-base font-bold text-foreground transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto lg:h-16 lg:text-lg"
                >
                  Ver serviços
                </Link>
              </div>
            </motion.div>

            {/* Infográfico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07111F] px-6 py-8 shadow-2xl xl:px-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(101,117,255,0.22),transparent_65%),radial-gradient(circle_at_80%_20%,rgba(86,254,213,0.12),transparent_50%)] pointer-events-none" />
                <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.25em] text-white/40">
                  4 pilares UPDO
                </p>
                <Image
                  src="/Imagens/Infografico-Metodlogia-Updo.png"
                  alt="Infográfico da metodologia UPDO: ciclo de Planejamento, Método, Execução e Feedback"
                  width={520}
                  height={545}
                  className="mx-auto w-full max-w-[520px] drop-shadow-[0_0_40px_rgba(101,117,255,0.25)]"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Os 4 pilares ── */}
      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#6575FF]/[0.08] blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Os 4 pilares
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Um ciclo contínuo que conecta
              <br />
              planejamento, execução e resultado.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/50">
              Cada projeto passa pelos mesmos quatro pilares, sem pular etapa, sem depender de intuição e sem perder o fio entre estratégia e entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/[0.08]"
              >
                <div className={cn("inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em]", item.color)}>
                  <item.icon className={cn("mr-1.5 h-3.5 w-3.5", item.iconColor)} />
                  {item.label}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Os 3 níveis de atuação ── */}
      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Como atuamos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Três níveis de atuação para nenhuma lacuna entre estratégia e resultado.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Atuamos nos níveis estratégico, tático e operacional ao mesmo
              tempo, conectando planejamento, execução e leitura de resultado
              com responsabilidade sobre o número, não só sobre a entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {levels.map((level, i) => (
              <motion.div
                key={level.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={cn(
                  "relative overflow-hidden rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]",
                  level.border,
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60", level.accent)} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]", level.badge)}>
                      {level.who}
                    </span>
                    <span className="font-heading text-4xl font-black text-foreground/10">
                      {level.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-black tracking-tight text-foreground">
                    {level.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {level.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {level.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Áreas de entrega
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Seis especialidades que funcionam como um sistema único.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Cada área tem squad dedicado, metodologia própria e meta de resultado. O que diferencia é que todas comunicam entre si, sem silo, sem ruído e sem perda de contexto entre etapas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
                >
                  <div className={cn("flex h-11 w-11 items-center justify-center rounded-full border border-border/60", item.bg)}>
                    <item.icon className={cn("h-5 w-5", item.color)} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-[#6575FF]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-muted-foreground transition-colors group-hover:text-[#6575FF]">
                    Ver detalhes
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Rodrigo ── */}
      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-accent/[0.08] blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#56FED5] shadow-[0_10px_24px_rgba(7,17,31,0.18)]">
              <span className="font-heading text-3xl font-black">"</span>
            </div>
            <blockquote className="font-heading text-2xl font-black leading-snug tracking-tight text-white md:text-3xl lg:text-4xl">
              Vender está na capacidade de ser. E ser é ajudar seu cliente sem esperar nada em troca.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-white/20" />
              <p className="text-sm font-bold text-white/50">
                Rodrigo Bueno, CEO da UPDO
              </p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Próximo passo
            </span>
            <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Qual é o desafio da sua empresa?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              O diagnóstico gratuito mapeia onde sua empresa perde receita: em geração de demanda, qualificação, processo comercial ou nos três ao mesmo tempo.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/diagnostico"
                className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-[0_10px_24px_rgba(86,254,213,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_14px_34px_rgba(86,254,213,0.34)] active:scale-95 sm:w-auto"
              >
                Agendar diagnóstico gratuito
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex h-13 w-full items-center justify-center rounded-full border-2 border-border/80 bg-white/60 px-8 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
              >
                Conhecer a equipe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
