"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Lock,
  Target,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const challenges = [
  "Baixa conversão de leads",
  "Turmas que não fecham",
  "Dependência de indicação",
  "Custo por matrícula alto",
  "Equipe comercial sem processo",
  "Falta de previsibilidade na captação",
];

const investments = [
  "Ainda não invisto",
  "Até R$5 mil/mês",
  "R$5 mil a R$20 mil/mês",
  "Acima de R$20 mil/mês",
];

const chipSelected =
  "border-[#22C55E]/60 bg-[#22C55E]/15 text-white shadow-[0_0_12px_rgba(34,197,94,0.12)]";
const chipDefault =
  "border-white/[0.08] bg-white/[0.03] text-white/35 hover:border-white/25 hover:bg-white/[0.06] hover:text-white/70";

const inputClass =
  "w-full rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#22C55E]/40 focus:bg-white/[0.07] transition-colors duration-200";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/30";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selected, setSelected] = useState<{
    challenge: string;
    investment: string;
  }>({
    challenge: "",
    investment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setIsSubmitted(true);

    // Dispara o dataLayer
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "lead",
        formName: "Diagnóstico Educacional",
        location: "marketing-educacional",
      });
    }

    // Redireciona para o WhatsApp após um pequeno delay
    setTimeout(() => {
      window.open(
        "https://wa.me/5541987112003?text=Olá, acabei de preencher o formulário no site e gostaria de receber um diagnóstico da captação de alunos da minha instituição",
        "_blank",
      );
    }, 1500);
  };

  return (
    <section
      id="contato"
      className="py-24 lg:py-40 bg-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center rounded-full border border-[#22C55E]/25 bg-[#22C55E]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#22C55E]/80">
              Oferta Especial
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Receba um diagnóstico gratuito <br className="hidden md:block" />
              <span className="text-white/25">da sua captação de alunos.</span>
            </h2>
            <p className="mt-4 text-white/40 text-base max-w-xl mx-auto leading-relaxed">
              Vamos analisar sua estrutura atual e mostrar onde você está
              perdendo alunos e como criar previsibilidade de matrículas.
            </p>
          </motion.div>

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
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col gap-8"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Nome</label>
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                        required
                        placeholder="Como prefere ser chamado"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Instituição</label>
                      <input
                        type="text"
                        name="instituicao"
                        id="instituicao"
                        required
                        placeholder="Nome da instituição"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>E-mail</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="seu@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Telefone</label>
                      <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        required
                        placeholder="Seu melhor WhatsApp"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Principal desafio */}
                    <div className="flex flex-col gap-2">
                      <label
                        className={`${labelClass} flex items-center gap-1.5`}
                      >
                        <Target className="h-3 w-3" />
                        Principal desafio hoje
                      </label>
                      <div className="relative">
                        <select
                          name="desafio"
                          id="desafio"
                          required
                          value={selected.challenge}
                          onChange={(e) =>
                            setSelected((s) => ({
                              ...s,
                              challenge: e.target.value,
                            }))
                          }
                          className="w-full appearance-none rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none focus:border-[#22C55E]/40 focus:bg-white/[0.07] transition-colors duration-200 cursor-pointer"
                          style={{ colorScheme: "dark" }}
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#0f1117] text-white/40"
                          >
                            Selecione o principal desafio...
                          </option>
                          {challenges.map((ch) => (
                            <option
                              key={ch}
                              value={ch}
                              className="bg-[#0f1117] text-white"
                            >
                              {ch}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 4L6 8L10 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Investimento em marketing */}
                    <div className="flex flex-col gap-2">
                      <label
                        className={`${labelClass} flex items-center gap-1.5`}
                      >
                        <Wallet className="h-3 w-3" />
                        Investimento em marketing
                      </label>
                      <div className="relative">
                        <select
                          name="investimento"
                          id="investimento"
                          required
                          value={selected.investment}
                          onChange={(e) =>
                            setSelected((s) => ({
                              ...s,
                              investment: e.target.value,
                            }))
                          }
                          className="w-full appearance-none rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none focus:border-[#22C55E]/40 focus:bg-white/[0.07] transition-colors duration-200 cursor-pointer"
                          style={{ colorScheme: "dark" }}
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#0f1117] text-white/40"
                          >
                            Selecione o investimento...
                          </option>
                          {investments.map((inv) => (
                            <option
                              key={inv}
                              value={inv}
                              className="bg-[#0f1117] text-white"
                            >
                              {inv}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 4L6 8L10 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 pt-4 border-t border-white/[0.07]">
                    <p className="text-sm font-medium text-white/50 text-center leading-relaxed">
                      Com base nas suas respostas, preparamos um diagnóstico
                      inicial mais preciso.
                    </p>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2.5 rounded-full bg-[#22C55E] px-10 py-4 text-sm font-bold text-white shadow-[0_0_24px_rgba(34,197,94,0.35)] hover:shadow-[0_0_36px_rgba(34,197,94,0.55)] hover:bg-[#16a34a] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                      >
                        Quero meu diagnóstico gratuito
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                      <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/20">
                        <ShieldCheck className="h-3 w-3" /> Sem spam
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/20">
                        <Clock className="h-3 w-3" /> Resposta em até 1 dia útil
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/20">
                        <Lock className="h-3 w-3" /> Dados usados apenas para o
                        diagnóstico
                      </span>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Formulário enviado com sucesso!
                  </h3>
                  <p className="text-white/60 max-w-sm mb-8">
                    Recebemos seus dados e estamos te redirecionando agora mesmo
                    para o WhatsApp para iniciarmos seu diagnóstico.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm animate-pulse">
                    Redirecionando...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
