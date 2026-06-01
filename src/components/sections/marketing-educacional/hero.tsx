"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { RevenueChart } from "./revenue-chart";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  ChevronUp,
} from "lucide-react";

export function Hero() {
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
        ease: [0.21, 0.47, 0.32, 0.98] as any,
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
        ease: [0.21, 0.47, 0.32, 0.98] as any,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="relative isolate flex items-center overflow-hidden bg-background pt-10 pb-16 lg:min-h-[88vh] lg:py-28">
      {/* Background patterns baseados no Design System da UPDO */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,254,213,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(101,117,255,0.08),transparent_40%)]" />

      {/* Grid pattern overlay para visual tecnológico */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lado Esquerdo: Títulos e CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              variants={itemVariants}
              className="updo-badge mb-8 inline-flex max-w-full items-center rounded-full border px-3 py-1 text-center text-[10px] font-black uppercase leading-relaxed tracking-[0.2em]"
            >
              Para faculdades, pós-graduações e instituições de ensino
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-2xl font-heading text-4xl font-black leading-[1.14] tracking-tight text-foreground md:text-5xl lg:text-5xl"
            >
              Capte mais alunos e transforme leads em{" "}
              <span className="relative inline-block text-foreground">
                matrículas
              </span>{" "}
              com mais previsibilidade.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl leading-relaxed"
            >
              Unimos mídia, landing pages, dados e processo comercial para sua
              instituição captar alunos com mais previsibilidade e transformar
              demanda em matrícula.
            </motion.p>

            <motion.ul
              variants={containerVariants}
              className="mt-8 flex flex-col gap-3"
            >
              {[
                "Leads com mais intenção de matrícula",
                "Mais previsibilidade para fechar turmas",
                "Marketing e comercial conectados ao resultado",
              ].map((bullet, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10">
                    <div className="h-2 w-2 rounded-full bg-[#6575FF]" />
                  </div>
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:gap-6 w-full lg:w-auto"
            >
              <Link
                href="#contato"
                className={cn(
                  "group relative inline-flex h-13 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10",
                )}
              >
                {/* Efeito de brilho (Glow) no hover */}
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] motion-reduce:animate-none pointer-events-none" />
                Quero analisar minha captação
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-4 text-sm font-medium text-muted-foreground"
            >
              Diagnóstico inicial para mapear gargalos de mídia, lead e
              matrícula.
            </motion.div>

          </motion.div>

          {/* Lado Direito: Dashboard Elegante e Gráfico de Regressão */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={dashboardVariants}
            className="relative group hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-2xl transition-all duration-700 hover:border-[#6575FF]/30">
              {/* Badge Contextual */}
              <div className="updo-badge mb-4 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Estudo de Caso Real
              </div>

              {/* Header do Mini Dashboard */}
              <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Performance de Captação
                  </span>
                  <span className="text-2xl font-bold font-heading">
                    Crescimento estruturado de matrículas
                  </span>
                </div>
              </div>

              {/* Gráfico de Faturamento Real vs Projetado Profissional */}
              <div className="relative mt-2 pr-6">
                <RevenueChart />
              </div>

              {/* Frase estratégica abaixo do gráfico */}
              <p className="mt-4 text-center text-[10px] font-medium text-muted-foreground tracking-tight">
                Previsibilidade de matrículas vem de estrutura, não de sorte.
              </p>

              {/* Legenda na base do gráfico */}
              <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2.5 text-foreground text-[10px] font-bold tracking-tight">
                <div className="h-3 w-3 rounded-full bg-[#6575FF] shadow-sm" />
                  Matrículas Realizadas
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground text-[10px] font-bold tracking-tight">
                  <div className="w-3 h-0.5 bg-muted-foreground border-dashed border-t-[3px] border-muted-foreground/30" />
                  Projeção de Matrículas
                </div>
              </div>

              {/* Widgets Inferiores */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                <div className="cursor-pointer rounded-2xl border border-border/50 bg-muted/50 p-4 transition-colors hover:border-[#6575FF]/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-[#6575FF]" />
                    <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                      Meta de Matrículas
                    </span>
                  </div>
                  <div className="text-xl font-bold font-heading">104%</div>
                  <div className="mt-1 flex items-center gap-0.5 text-[10px] font-bold text-[#6575FF]">
                    <ChevronUp className="h-3 w-3" /> Meta Batida Out/25
                  </div>
                </div>
                <div className="cursor-pointer rounded-2xl border border-border/50 bg-muted/50 p-4 transition-colors hover:border-[#6575FF]/40">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-[#6575FF]" />
                    <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                      Custo por Matrícula
                    </span>
                  </div>
                  <div className="text-xl font-bold font-heading">-15%</div>
                  <div className="mt-1 flex items-center gap-0.5 text-[10px] font-bold text-[#6575FF]">
                    <ChevronUp className="h-3 w-3" /> Otimização vs 2024
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
