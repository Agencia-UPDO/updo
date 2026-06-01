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
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const sectors = [
  "Educação",
  "E-commerce",
  "Varejo",
  "Indústria",
  "Serviços B2B",
  "Saúde / Psicologia",
  "Outro",
];

const challenges = [
  "Baixa conversão de leads",
  "CAC alto",
  "Falta de previsibilidade",
  "Dependência de indicação",
  "Equipe comercial sem processo",
  "Crescimento estagnado",
  "Marketing e vendas desconectados",
];

const investments = [
  "Ainda não invisto",
  "Até R$5 mil/mês",
  "R$5 mil a R$20 mil/mês",
  "R$20 mil a R$50 mil/mês",
  "Acima de R$50 mil/mês",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none focus:border-[#6575FF]/45 focus:bg-white/[0.08] transition-colors duration-200";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none focus:border-[#6575FF]/45 focus:bg-white/[0.08] transition-colors duration-200 cursor-pointer";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/45";

const ChevronIcon = () => (
  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export function HomeContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = useState({
    sector: "",
    challenge: "",
    investment: "",
  });

  const formatPhone = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, telefone: formatPhone(e.target.value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      if (w.dataLayer) {
        w.dataLayer.push({
          event: "Lead",
          formName: "Diagnóstico Institucional",
          location: "home",
          formData: {
            ...formData,
            ...selected,
          },
        });
      }
    }

    const message = `Olá! Acabei de preencher o formulário no site:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Setor:* ${selected.sector}
*Desafio:* ${selected.challenge}
*Investimento:* ${selected.investment}

Gostaria de agendar meu diagnóstico estratégico!`;

    const whatsappUrl = `https://wa.me/5541987112003?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  return (
    <section
      id="diagnostico"
      className="py-18 lg:py-28 bg-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6575FF]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-14 text-center"
          >
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Análise estratégica
            </span>
            <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-black leading-[1.08] tracking-tight text-white md:text-5xl">
              Receba um diagnóstico estratégico do seu marketing e vendas.
            </h2>
            <p className="mt-4 text-white/55 text-base max-w-xl mx-auto leading-relaxed">
              Vamos analisar onde sua operação perde receita e indicar os
              próximos passos para crescer com previsibilidade.
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
                  {/* Nome + Empresa */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nome" className={labelClass}>
                        Nome
                      </label>
                      <input
                        id="nome"
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            nome: e.target.value,
                          }))
                        }
                        placeholder="Como prefere ser chamado"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="empresa" className={labelClass}>
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            empresa: e.target.value,
                          }))
                        }
                        placeholder="Nome da empresa"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email + Telefone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className={labelClass}>
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="seu@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="telefone" className={labelClass}>
                        Telefone
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handlePhoneChange}
                        placeholder="(41) 99999-9999"
                        className={inputClass}
                        maxLength={15}
                      />
                    </div>
                  </div>

                  {/* Setor + Desafio */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="setor"
                        className={`${labelClass} flex items-center gap-1.5`}
                      >
                        <Briefcase className="h-3 w-3" />
                        Setor da empresa
                      </label>
                      <div className="relative">
                        <select
                          id="setor"
                          name="setor"
                          required
                          value={selected.sector}
                          onChange={(e) =>
                            setSelected((s) => ({
                              ...s,
                              sector: e.target.value,
                            }))
                          }
                          className={selectClass}
                          style={{ colorScheme: "dark" }}
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#0f1117] text-white/40"
                          >
                            Selecione o setor...
                          </option>
                          {sectors.map((s) => (
                            <option
                              key={s}
                              value={s}
                              className="bg-[#0f1117] text-white"
                            >
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronIcon />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="desafio"
                        className={`${labelClass} flex items-center gap-1.5`}
                      >
                        <Target className="h-3 w-3" />
                        Principal desafio
                      </label>
                      <div className="relative">
                        <select
                          id="desafio"
                          name="desafio"
                          required
                          value={selected.challenge}
                          onChange={(e) =>
                            setSelected((s) => ({
                              ...s,
                              challenge: e.target.value,
                            }))
                          }
                          className={selectClass}
                          style={{ colorScheme: "dark" }}
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#0f1117] text-white/40"
                          >
                            Selecione o desafio...
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
                        <ChevronIcon />
                      </div>
                    </div>
                  </div>

                  {/* Investimento */}
                  <div className="flex flex-col gap-2 max-w-md mx-auto w-full">
                    <label
                      htmlFor="investimento"
                      className={`${labelClass} flex items-center gap-1.5`}
                    >
                      <Wallet className="h-3 w-3" />
                      Investimento atual em marketing
                    </label>
                    <div className="relative">
                      <select
                        id="investimento"
                        name="investimento"
                        required
                        value={selected.investment}
                        onChange={(e) =>
                          setSelected((s) => ({
                            ...s,
                            investment: e.target.value,
                          }))
                        }
                        className={selectClass}
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
                      <ChevronIcon />
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
                        className="mx-auto inline-flex h-13 w-full max-w-xs items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10 cursor-pointer"
                      >
                        <span className="sm:hidden">Quero meu diagnóstico</span>
                        <span className="hidden sm:inline">Quero meu diagnóstico estratégico</span>
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
                        <Lock className="h-3 w-3" /> Dados usados só pro
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
                  <div className="h-20 w-20 rounded-full bg-[var(--color-accent-soft)] border border-[var(--color-accent-border)] flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Formulário enviado com sucesso!
                  </h3>
                  <p className="text-white/60 max-w-sm mb-8">
                    Recebemos seus dados e estamos te redirecionando agora
                    mesmo para o WhatsApp para iniciarmos seu diagnóstico.
                  </p>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm animate-pulse">
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
