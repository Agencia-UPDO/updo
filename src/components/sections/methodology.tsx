"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Zap, BarChart3, ChevronRight } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analisamos marketing, vendas e operação para identificar gargalos e oportunidades reais de crescimento.",
    color: "text-blue-400",
    borderHover: "group-hover:border-blue-400/50",
    glow: "group-hover:shadow-blue-400/15",
  },
  {
    icon: PenTool,
    title: "Arquitetura",
    description:
      "Desenhamos a estrutura de marketing e vendas com processos claros, metas e indicadores definidos.",
    color: "text-blue-500",
    borderHover: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/15",
  },
  {
    icon: Zap,
    title: "Implementação",
    description:
      "Colocamos a estrutura em prática, organizando canais, times e rotinas operacionais.",
    color: "text-blue-700",
    borderHover: "group-hover:border-blue-700/50",
    glow: "group-hover:shadow-blue-700/15",
  },
  {
    icon: BarChart3,
    title: "Escala",
    description:
      "Ajustamos e evoluímos o sistema para sustentar crescimento com previsibilidade e consistência.",
    color: "text-accent",
    borderHover: "group-hover:border-accent/50",
    glow: "group-hover:shadow-accent/15",
  },
];

export function Methodology() {
  return (
    <section className="py-24 lg:py-40 bg-linear-to-b from-background via-[#F7F9FF] to-background relative overflow-hidden">
      {/* Blueprint/Grid Texture Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              Sua empresa não precisa de <br className="hidden md:block" />
              <span className="text-muted-foreground/30">mais marketing.</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <p className="text-xl md:text-2xl font-bold text-primary tracking-tight max-w-2xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Precisa de uma estrutura que sustente o crescimento.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute top-[24px] left-0 w-full h-[1px] hidden lg:block overflow-hidden">
            <div className="w-full h-full bg-linear-to-r from-blue-200 via-primary to-accent opacity-30" />
            <div className="absolute inset-0 bg-linear-to-r from-blue-200 via-primary to-accent blur-[2px] opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 lg:gap-x-0 relative">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative flex flex-col items-start px-4 lg:px-10 group"
              >
                <div className="relative z-10 mb-8">
                  <span className="absolute -top-8 -left-4 text-7xl font-black text-muted-foreground/[0.03] font-heading select-none transition-all duration-700 group-hover:text-primary/[0.05] group-hover:-translate-y-1">
                    0{index + 1}
                  </span>

                  <div
                    className={`relative flex items-center justify-center w-[48px] h-[48px] rounded-xl border border-border/30 bg-white/80 transition-all duration-500 group-hover:shadow-lg ${pillar.borderHover} ${pillar.glow}`}
                  >
                    <pillar.icon
                      className={`w-[20px] h-[20px] transition-all duration-500 group-hover:scale-110 ${pillar.color} opacity-70 group-hover:opacity-100`}
                    />
                  </div>

                  {index < pillars.length - 1 && (
                    <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                      <ChevronRight className="w-3 h-3 text-border/50 group-hover:text-muted-foreground/40 transition-colors duration-500" />
                    </div>
                  )}
                </div>

                <div className="space-y-5 relative">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary transition-colors">
                      Fase 0{index + 1}
                    </span>
                    <h3 className="text-2xl font-black font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-[15px] max-w-[260px] font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-500 italic border-l-2 border-transparent group-hover:border-accent/30 pl-0 group-hover:pl-4 transition-all">
                    "{pillar.description}"
                  </p>
                </div>

                <div className="absolute -inset-4 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[40px] bg-linear-to-b from-white/80 to-transparent border border-white/40 shadow-xl shadow-blue-900/5" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 flex flex-col md:flex-row items-center justify-between border-t border-border/50 pt-10 gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100"
                >
                  <span className="text-[8px] font-bold text-blue-400">UP</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-foreground">
                Estrutura de Crescimento UPDO v2.0
              </span>
              <span className="text-[9px] text-muted-foreground uppercase tracking-widest">
                Framework Proprietário • 2024/2026
              </span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 italic font-bold tracking-tight text-center md:text-right max-w-xs">
            "Saindo do marketing de tentativa para a estrutura de escala
            previsível."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
