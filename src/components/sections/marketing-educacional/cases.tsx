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
    <section id="cases" className="relative overflow-hidden bg-[var(--surface-soft)] py-18 lg:py-28">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Autoridade
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Prova real antes de falar em escala.
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
          className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm md:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#6575FF]">
                Case educacional
              </span>
              <h3 className="mt-4 font-heading text-3xl lg:text-4xl font-black text-foreground leading-tight tracking-tight">
                Instituição de Ensino Superior: mais leads, mais processo, mais matrícula.
              </h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A UPDO reorganizou a captação com estratégia, automação e
                processo comercial para transformar interesse em resultado.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.06] p-4 text-sm font-medium text-foreground/75">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#6575FF]">
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
                  className="rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-5"
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
            className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
          >
            Quero analisar minha captação
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
