"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  ChevronUp,
} from "lucide-react";
import { RevenueChart } from "@/components/sections/revenue-chart";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const bullets = [
  "Mais previsibilidade de receita e funil",
  "Marketing e comercial conectados ao resultado",
  "Decisões orientadas por dado, não por achismo",
];

export function HomeHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="relative flex items-start overflow-hidden bg-background pt-10 pb-16 lg:min-h-[90vh] lg:items-center lg:py-0">
      {/* Radial gradients - Efeito de ambient glow mais profundo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(86,254,213,0.18),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(79,70,229,0.10),transparent_40%)]" />

      {/* Grid pattern overlay mais sutil e elegante */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_80%,transparent_100%)] opacity-70" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lado esquerdo: copy + CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              variants={itemVariants}
              className="updo-badge mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold md:mb-8 md:text-sm relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              +10 anos de mercado
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-[2.35rem] font-black leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-5xl"
            >
              Estruturamos marketing, vendas e dados para sua empresa crescer com{" "}
              <span className="bg-gradient-to-r from-accent to-emerald-600 bg-clip-text text-transparent italic relative inline-block font-black">
                previsibilidade.
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-accent/10 -skew-x-12 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg text-muted-foreground md:mt-8 md:text-xl leading-relaxed"
            >
              Unimos estratégia, mídia, automação comercial e inteligência
              artificial para transformar crescimento em rotina, não em sorte.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:gap-4 w-full lg:mt-10 lg:w-auto"
            >
              <Link
                href="/diagnostico"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group relative h-14 rounded-full px-8 text-base font-bold shadow-[0_8px_30px_rgba(86,254,213,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(86,254,213,0.55)] active:scale-95 w-full sm:w-auto overflow-hidden bg-accent text-accent-foreground border-none flex items-center justify-center gap-2 cursor-pointer lg:h-16 lg:px-10 lg:text-lg",
                )}
              >
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] motion-reduce:animate-none pointer-events-none" />
                Agendar diagnóstico
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#metodologia"
                className="h-14 rounded-full px-8 text-base font-bold border-2 border-border/80 bg-white/40 backdrop-blur-xs text-foreground inline-flex items-center justify-center transition-all duration-300 hover:bg-[#6575FF]/10 hover:border-[#6575FF]/35 hover:scale-105 active:scale-95 w-full sm:w-auto lg:h-16 lg:text-lg"
              >
                Ver como trabalhamos
              </Link>
            </motion.div>

            <motion.ul
              variants={containerVariants}
              className="mt-7 flex flex-col gap-3 md:mt-8"
            >
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-muted-foreground font-semibold text-sm md:text-base"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#6575FF]" />
                  </div>
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>

            {/* Micro-prova social */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-10"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black font-heading text-foreground">
                  {siteConfig.stats.companies}
                </span>
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  empresas atendidas
                </span>
              </div>
              <div className="h-4 w-px bg-border/80 hidden sm:block" />
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black font-heading text-foreground">
                  {siteConfig.stats.revenueGenerated}
                </span>
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  gerados em vendas
                </span>
              </div>
              <div className="h-4 w-px bg-border/80 hidden sm:block" />
              <div className="flex items-baseline gap-1.5">
                <span className="updo-badge text-xs font-black uppercase tracking-widest border px-2.5 py-1 rounded-full">
                  {siteConfig.stats.rdAward}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado direito: dashboard com RevenueChart */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={dashboardVariants}
            className="relative group hidden lg:block"
          >
            {/* Efeito de Glow traseiro */}
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#6575FF]/20 to-primary/20 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/40 backdrop-blur-3xl p-8 shadow-2xl ring-1 ring-white/30 transition-all duration-700 hover:border-[#6575FF]/35">
              {/* Grid interno de fundo do dashboard */}
              <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8 border-b border-border/40 pb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.25em]">
                    Receita realizada vs projetada
                  </span>
                  <span className="text-xl font-black font-heading mt-1 text-foreground leading-tight">
                    Crescimento estruturado em rotina
                  </span>
                </div>
              </div>

              {/* Gráfico */}
              <div className="relative mt-2 pr-6">
                <RevenueChart />
              </div>

              {/* Frase */}
              <p className="mt-5 text-center text-[10px] font-bold text-muted-foreground/80 tracking-widest uppercase italic">
                Previsibilidade vem de estrutura, não de tentativa.
              </p>

              {/* Legenda */}
              <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2.5 text-foreground text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-3 h-3 rounded-full bg-[#6575FF] shadow-sm" />
                  Realizado
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-3 h-0.5 bg-muted-foreground border-dashed border-t-[3px] border-muted-foreground/30" />
                  Projetado
                </div>
              </div>

              {/* Widgets estilo glass */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border/40">
                <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/80">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="updo-dark-chip flex h-6 w-6 shrink-0 items-center justify-center rounded-full border">
                      <Target className="h-3.5 w-3.5 text-[#6575FF]" />
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Meta de Receita
                    </span>
                  </div>
                  <div className="text-2xl font-black font-heading text-foreground">108%</div>
                  <div className="updo-dark-chip text-[10px] font-extrabold flex items-center gap-0.5 mt-1 border px-1.5 py-0.5 rounded-md w-max">
                    <ChevronUp className="h-3 w-3" /> Meta batida Out/25
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/80">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="updo-dark-chip flex h-6 w-6 shrink-0 items-center justify-center rounded-full border">
                      <TrendingUp className="h-3.5 w-3.5 text-[#6575FF]" />
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      CAC Otimizado
                    </span>
                  </div>
                  <div className="text-2xl font-black font-heading text-foreground">-22%</div>
                  <div className="updo-dark-chip text-[10px] font-extrabold flex items-center gap-0.5 mt-1 border px-1.5 py-0.5 rounded-md w-max">
                    <ChevronUp className="h-3 w-3" /> vs ano anterior
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
