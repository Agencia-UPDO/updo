"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingDown,
  Search,
  Users,
  BarChart2,
  ChevronDown,
} from "lucide-react";

const problems = [
  {
    id: 0,
    icon: TrendingDown,
    label: "Previsibilidade",
    title: "O mês bom não se repete",
    description:
      "Você fecha bem um mês e no seguinte fica esperando o telefone tocar. Não tem pipeline, não tem previsão, não tem controle. Só resultado aleatório.",
    consequence:
      "Você não consegue contratar, investir ou planejar com segurança. O crescimento trava porque o caixa é sempre uma incógnita.",
    insight:
      "Uma empresa que não controla o próximo mês não está crescendo. Está sobrevivendo.",
  },
  {
    id: 1,
    icon: Search,
    label: "ROI",
    title: "Você investe, mas não sabe no quê",
    description:
      "Posts, anúncios, agência, consultoria. Você testa, gasta e espera. Mas quando alguém pergunta o que trouxe resultado, você não tem uma resposta precisa.",
    consequence:
      "Sem medir o que funciona, você repete o que parece certo e não o que é eficiente. E continua financiando estratégias que não entregam.",
    insight: "Marketing sem dado não é investimento. É aposta.",
  },
  {
    id: 2,
    icon: Users,
    label: "Autonomia",
    title: "Tudo depende de você",
    description:
      "Você é o comercial, o estrategista e o gestor ao mesmo tempo. Quando precisa crescer, não tem como. Já está no limite do que uma pessoa aguenta.",
    consequence:
      "A empresa tem o tamanho da sua disponibilidade. Por mais esforço que você coloque, o crescimento tem teto enquanto tudo passar por você.",
    insight:
      "Uma empresa que não funciona sem o dono não é um negócio. É um emprego com CNPJ.",
  },
  {
    id: 3,
    icon: BarChart2,
    label: "Visibilidade",
    title: "Você decide no feeling",
    description:
      "Você sabe que algo não está funcionando, mas não sabe exatamente o quê. Os dados existem, mas estão espalhados e você não tem tempo de olhar para eles com clareza.",
    consequence:
      "Sem visibilidade real, toda decisão é um risco desnecessário. Você age rápido, mas frequentemente na direção errada.",
    insight:
      "Não falta coragem para decidir. Falta clareza para decidir certo.",
  },
];

function ProblemContent({
  problem,
  index,
  hideTitle = false,
}: {
  problem: (typeof problems)[0];
  index: number;
  hideTitle?: boolean;
}) {
  return (
    <div className="relative flex flex-col gap-8 p-6 lg:p-10">
      <div className="absolute top-6 right-6 pointer-events-none select-none opacity-[0.018]">
        <problem.icon className="w-32 h-32 text-white" />
      </div>
      <div className="relative flex flex-col gap-8">
        {!hideTitle && (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#22C55E]/60">
                Problema 0{index + 1}
              </span>
              <span className="text-white/15 text-xs">·</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                {problem.label}
              </span>
            </div>
            <h3 className="font-heading text-2xl lg:text-[32px] font-black text-white leading-tight tracking-tight">
              {problem.title}
            </h3>
          </div>
        )}
        <p className="text-[15px] text-white/55 leading-relaxed">
          {problem.description}
        </p>
        <div className="border-l-2 border-[#22C55E]/60 pl-5 py-2 shadow-[-2px_0_8px_rgba(34,197,94,0.15)]">
          <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#22C55E]/55 mb-2">
            Impacto no negócio
          </span>
          <p className="text-sm text-white/50 leading-relaxed">
            {problem.consequence}
          </p>
        </div>
        <div className="flex items-start gap-3 pt-1">
          <div className="w-5 h-px bg-[#22C55E]/50 mt-[11px] shrink-0" />
          <p className="text-base font-bold bg-[linear-gradient(90deg,#22C55E,#4ADE80)] bg-clip-text text-transparent leading-relaxed">
            {problem.insight}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Problems() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);
  const current = problems[active];
  const Icon = current.icon;

  return (
    <section className="py-20 lg:py-32 bg-[#0A1529] relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#22C55E]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[#22C55E]/25 bg-[#22C55E]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#22C55E]/80">
            Diagnóstico
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1] max-w-2xl">
            Você reconhece algum <br className="hidden md:block" />
            <span className="text-white/25">desses problemas?</span>
          </h2>
        </motion.div>

        {/* Mobile: Accordion (hidden on lg+) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="lg:hidden flex flex-col gap-2"
        >
          {problems.map((problem, index) => {
            const isOpen = mobileOpen === index;
            return (
              <div
                key={problem.id}
                className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "border-[#22C55E]/30 bg-[#0F1C33]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setMobileOpen(isOpen ? null : index)}
                  className="relative flex items-center gap-3 w-full text-left px-4 py-4 outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]/40"
                >
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-300 ${
                      isOpen
                        ? "h-8 bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                        : "h-0"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-black font-mono w-4 shrink-0 ${
                      isOpen ? "text-[#22C55E]" : "text-white/20"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                      isOpen
                        ? "bg-[#22C55E]/15 border border-[#22C55E]/25"
                        : "bg-white/[0.05] border border-white/[0.07]"
                    }`}
                  >
                    <problem.icon
                      className={`h-3.5 w-3.5 transition-colors duration-200 ${
                        isOpen ? "text-[#22C55E]" : "text-white/25"
                      }`}
                    />
                  </div>
                  <span
                    className={`flex-1 text-sm font-semibold leading-tight transition-colors duration-200 ${
                      isOpen ? "text-white" : "text-white/40"
                    }`}
                  >
                    {problem.title}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-[#22C55E]/60" : "text-white/20"
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <ProblemContent
                        problem={problem}
                        index={index}
                        hideTitle
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Desktop: Two-column tabs + panel (hidden below lg) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="hidden lg:flex gap-8"
        >
          {/* Left: Tab list */}
          <div className="flex flex-col w-[320px] shrink-0 gap-1">
            {problems.map((problem, index) => {
              const isActive = active === index;
              return (
                <button
                  key={problem.id}
                  onClick={() => setActive(index)}
                  className={`relative flex items-center gap-3 text-left rounded-xl px-4 py-3.5 w-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]/40 ${
                    isActive
                      ? "bg-[#22C55E]/[0.10] border border-[#22C55E]/30 shadow-[0_0_18px_rgba(34,197,94,0.10)]"
                      : "border border-transparent hover:bg-white/[0.04] hover:border-white/[0.07]"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-8 bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                        : "h-0"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-black font-mono w-4 shrink-0 transition-colors duration-200 ${
                      isActive ? "text-[#22C55E]" : "text-white/20"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-[#22C55E]/15 border border-[#22C55E]/25"
                        : "bg-white/[0.05] border border-white/[0.07]"
                    }`}
                  >
                    <problem.icon
                      className={`h-3.5 w-3.5 transition-colors duration-200 ${
                        isActive ? "text-[#22C55E]" : "text-white/25"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-semibold leading-tight transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/35"
                    }`}
                  >
                    {problem.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Content panel */}
          <div className="relative flex-1 min-h-[420px] rounded-2xl border border-white/[0.08] bg-[#0F1C33] overflow-hidden">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.05]">
              <motion.div
                className="h-full bg-[#22C55E]/50 rounded-full"
                initial={false}
                animate={{
                  width: `${((active + 1) / problems.length) * 100}%`,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <ProblemContent problem={current} index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 lg:mt-20 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            A UPDO estrutura a solução
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
