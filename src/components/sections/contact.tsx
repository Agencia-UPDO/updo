"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Tag,
  TrendingUp,
  Target,
  Wallet,
} from "lucide-react";

const challenges = [
  "Faturamento instável / sem previsibilidade",
  "Não sei de onde vêm meus clientes",
  "Dependo demais de indicação",
  "Invisto em marketing sem ver retorno",
  "Tudo depende de mim para funcionar",
  "Quero crescer mas não sei por onde começar",
];

const revenues = [
  "Até R$50 mil/mês",
  "R$50 mil a R$150 mil/mês",
  "R$150 mil a R$500 mil/mês",
  "Acima de R$500 mil/mês",
];

const investments = [
  "Ainda não invisto",
  "Até R$5 mil/mês",
  "R$5 mil a R$20 mil/mês",
  "Acima de R$20 mil/mês",
];

export function Contact() {
  const [selected, setSelected] = useState<{
    challenge: string;
    revenue: string;
    investment: string;
  }>({ challenge: "", revenue: "", investment: "" });

  return (
    <section
      id="contato"
      className="py-24 lg:py-40 bg-foreground relative overflow-hidden"
    >
      {/* Grid texture */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-14 lg:mb-16 text-center"
          >
            <span className="inline-flex items-center rounded-full border border-[#22C55E]/25 bg-[#22C55E]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#22C55E]/80">
              Diagnóstico Estratégico
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Vamos entender o seu negócio <br className="hidden md:block" />
              <span className="text-white/25">
                antes de propor qualquer coisa.
              </span>
            </h2>
            <p className="mt-4 text-white/40 text-base max-w-xl mx-auto leading-relaxed">
              Responda algumas perguntas. Isso nos ajuda a preparar um
              diagnóstico real para a sua situação.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Row 1: empresa + segmento */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 flex items-center gap-1.5">
                    <Building2 className="h-3 w-3" />
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#22C55E]/40 focus:bg-white/[0.07] transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 flex items-center gap-1.5">
                    <Tag className="h-3 w-3" />
                    Segmento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: saúde, educação, varejo..."
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#22C55E]/40 focus:bg-white/[0.07] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Faturamento */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 flex items-center gap-1.5">
                  <TrendingUp className="h-3 w-3" />
                  Faturamento mensal atual
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {revenues.map((rev) => (
                    <button
                      key={rev}
                      type="button"
                      onClick={() =>
                        setSelected((s) => ({ ...s, revenue: rev }))
                      }
                      className={`rounded-xl border px-3 py-3 text-xs font-semibold text-left transition-all duration-200 ${
                        selected.revenue === rev
                          ? "border-[#22C55E]/40 bg-[#22C55E]/[0.10] text-white"
                          : "border-white/[0.08] bg-white/[0.03] text-white/35 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      {rev}
                    </button>
                  ))}
                </div>
              </div>

              {/* Principal desafio */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 flex items-center gap-1.5">
                  <Target className="h-3 w-3" />
                  Principal desafio hoje
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {challenges.map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() =>
                        setSelected((s) => ({ ...s, challenge: ch }))
                      }
                      className={`rounded-xl border px-4 py-3 text-sm font-medium text-left transition-all duration-200 ${
                        selected.challenge === ch
                          ? "border-[#22C55E]/40 bg-[#22C55E]/[0.10] text-white"
                          : "border-white/[0.08] bg-white/[0.03] text-white/35 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investimento em marketing */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 flex items-center gap-1.5">
                  <Wallet className="h-3 w-3" />
                  Investimento atual em marketing
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {investments.map((inv) => (
                    <button
                      key={inv}
                      type="button"
                      onClick={() =>
                        setSelected((s) => ({ ...s, investment: inv }))
                      }
                      className={`rounded-xl border px-3 py-3 text-xs font-semibold text-left transition-all duration-200 ${
                        selected.investment === inv
                          ? "border-[#22C55E]/40 bg-[#22C55E]/[0.10] text-white"
                          : "border-white/[0.08] bg-white/[0.03] text-white/35 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      {inv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row last: contato */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    placeholder="Como prefere ser chamado"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#22C55E]/40 focus:bg-white/[0.07] transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#22C55E]/40 focus:bg-white/[0.07] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2 border-t border-white/[0.07]">
                <p className="text-xs text-white/20 max-w-sm leading-relaxed">
                  Seus dados são usados exclusivamente para preparar o
                  diagnóstico. Sem spam.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#22C55E] px-8 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(34,197,94,0.30)] hover:shadow-[0_0_30px_rgba(34,197,94,0.50)] hover:bg-[#16a34a] transition-all duration-200 whitespace-nowrap"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
