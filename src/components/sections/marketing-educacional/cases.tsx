"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseMetrics = [
  { metric: "+211%", label: "na geração de leads" },
  { metric: "+166%", label: "na conversão comercial" },
  { metric: "450 -> 1.400", label: "leads por mês" },
];

export function Cases() {
  return (
    <section id="cases" className="py-20 lg:py-28 bg-[#F7F9FF] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent/80">
              Autoridade
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Prova real antes de{" "}
              <span className="text-muted-foreground/30">
                falar em escala.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed lg:text-right">
            Captação educacional precisa conectar mídia, atendimento e leitura
            do funil para virar matrícula.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-3xl border border-border/60 bg-white p-6 shadow-sm md:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-primary/80">
                Case educacional
              </span>
              <h3 className="mt-4 font-heading text-3xl lg:text-4xl font-black text-foreground leading-tight tracking-tight">
                Faculdade IBRATE: mais leads, mais processo, mais matrícula.
              </h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A UPDO reorganizou a captação com estratégia, automação e
                processo comercial para transformar interesse em resultado.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-accent/15 bg-accent/5 p-4 text-sm font-medium text-foreground/75">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <TrendingUp className="h-4 w-4" />
                </div>
                Resultado acompanhado da geração do lead até a conversão
                comercial.
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {caseMetrics.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-2xl border border-border/60 bg-[#F7F9FF] p-5"
                >
                  <p className="font-heading text-3xl font-black tracking-tight text-foreground">
                    {item.metric}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent mb-10 mt-12" />
          
          <h4 className="text-xl font-bold text-foreground mb-6">
            Quer descobrir o que hoje limita a sua captação de alunos?
          </h4>
          
          <Link
            href="#contato"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-border/60 text-foreground font-bold transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Quero analisar minha captação
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
