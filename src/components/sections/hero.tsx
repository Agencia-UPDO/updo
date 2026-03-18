"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevenueChart } from "./revenue-chart";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, ChevronUp } from "lucide-react";

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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background py-20 lg:py-0">
      {/* Background patterns baseados no Design System da UPDO */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] opacity-[0.05]" />

      {/* Grid pattern overlay para visual tecnológico */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8">
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
              className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary md:text-sm"
            >
              Estratégia · Processos · Vendas
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl font-black leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-5xl"
            >
              Organizamos o marketing e as vendas da sua empresa para gerar{" "}
              <span className="text-primary italic relative inline-block">
                crescimento previsível.
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-primary/10 -skew-x-12" />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl leading-relaxed"
            >
              Estruturamos processos e organizamos a operação para transformar
              crescimento em rotina.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:gap-6 w-full lg:w-auto"
            >
              <Button
                size="lg"
                className="group relative h-16 rounded-full px-10 text-lg font-bold shadow-xl shadow-accent/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/40 active:scale-95 w-full sm:w-auto overflow-hidden bg-accent text-accent-foreground border-none"
              >
                {/* Efeito de brilho (Glow) no hover */}
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                Agendar diagnóstico
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 rounded-full px-10 text-lg font-bold border-2 transition-all duration-300 hover:bg-primary/5 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <Link href="/metodologia">Nossa metodologia</Link>
              </Button>
            </motion.div>

            {/* Micro Prova Social */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black font-heading text-foreground">
                  +31%
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  crescimento anual
                </span>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-black font-heading text-foreground">
                  +R$ 1.5M
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  em escala operacional
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado Direito: Dashboard Elegante e Gráfico de Regressão */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={dashboardVariants}
            className="relative group hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur-2xl p-8 shadow-2xl ring-1 ring-white/20 transition-all duration-700 hover:border-primary/30">
              {/* Badge Contextual */}
              <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/20">
                Estudo de Caso Real
              </div>

              {/* Header do Mini Dashboard */}
              <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Performance de Clientes
                  </span>
                  <span className="text-2xl font-bold font-heading">
                    Crescimento estruturado de faturamento
                  </span>
                </div>
              </div>

              {/* Gráfico de Faturamento Real vs Projetado Profissional */}
              <div className="relative mt-2 pr-6">
                <RevenueChart />
              </div>

              {/* Frase estratégica abaixo do gráfico */}
              <p className="mt-4 text-center text-[10px] font-medium text-muted-foreground italic tracking-tight">
                "Crescimento previsível vem de estrutura, não de tentativa."
              </p>

              {/* Legenda na base do gráfico */}
              <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2.5 text-foreground text-[10px] font-bold tracking-tight">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-sm" />
                  Realizado 2025 (Destaques)
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground text-[10px] font-bold tracking-tight">
                  <div className="w-3 h-0.5 bg-muted-foreground border-dashed border-t-[3px] border-muted-foreground/30" />
                  Projetado 2025
                </div>
              </div>

              {/* Widgets Inferiores */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                <div className="bg-muted/50 rounded-2xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                      Pico Mensal
                    </span>
                  </div>
                  <div className="text-xl font-bold font-heading">R$ 820k</div>
                  <div className="text-[10px] text-accent font-bold flex items-center gap-0.5 mt-1">
                    <ChevronUp className="h-3 w-3" /> Recorde Ago/25
                  </div>
                </div>
                <div className="bg-muted/50 rounded-2xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                      Crescimento Anual
                    </span>
                  </div>
                  <div className="text-xl font-bold font-heading">+R$ 1.5M</div>
                  <div className="text-[10px] text-accent font-bold flex items-center gap-0.5 mt-1">
                    <ChevronUp className="h-3 w-3" /> +31.2% vs 2024
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
