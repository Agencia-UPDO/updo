"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
    title: "Turmas que não fecham",
    description:
      "A maioria das instituições depende de ações pontuais e campanhas isoladas. O resultado? Você chega no início do semestre sem saber se vai conseguir abrir as turmas planejadas.",
    consequence:
      "Incerteza financeira e ociosidade de professores e estrutura. Sem turmas cheias, o lucro da instituição é corroído pelos custos fixos.",
    insight:
      "A captação de alunos não pode ser um evento sazonal. Precisa ser um sistema contínuo.",
  },
  {
    id: 1,
    icon: Users,
    label: "Qualidade",
    title: "Leads desqualificados",
    description:
      "Sua agência entrega volume, mas o seu comercial reclama que ninguém atende o telefone ou que os interessados não têm o perfil para o curso.",
    consequence:
      "Desperdício de tempo da equipe de vendas e dinheiro jogado fora com anúncios que atraem curiosos, não alunos matriculados.",
    insight: "Volume de leads é métrica de vaidade. Matrícula é métrica de negócio.",
  },
  {
    id: 2,
    icon: BarChart2,
    label: "Processo",
    title: "Equipe comercial sem processo",
    description:
      "O lead chega, mas não existe um roteiro claro de acompanhamento. Cada vendedor faz de um jeito e muitos contatos esfriam no fundo da gaveta.",
    consequence:
      "Baixa taxa de conversão de interessado para matriculado. Você perde alunos que já demonstraram interesse por falha na condução.",
    insight: "O marketing atrai, mas é o processo comercial que transmuta interesse em matrícula.",
  },
  {
    id: 3,
    icon: Search,
    label: "Crescimento",
    title: "Dependência de indicação",
    description:
      "Grande parte dos seus alunos vem pelo boca a boca. É ótimo, mas você não tem controle sobre isso. Se as indicações pararem, o crescimento para.",
    consequence:
      "Falta total de controle sobre o crescimento da instituição. Você fica refém do acaso em vez de ter uma máquina de vendas ativa.",
    insight: "Indicação é bônus. Um sistema de captação estruturado é o que dá escala.",
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

  return (
    <section className="py-24 lg:py-40 bg-[#0A0B10] relative overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Imagens/bg problemas.jpg"
          alt="Background institucional"
          fill
          className="object-cover opacity-[0.07] grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B10] via-transparent to-[#0A0B10]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
