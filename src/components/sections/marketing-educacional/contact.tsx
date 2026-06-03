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

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/30";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = useState<{
    challenge: string;
    investment: string;
  }>({
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
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      7,
    )}-${phoneNumber.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, telefone: formattedValue }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const payloadFormData = {
      nome: formData.nome,
      empresa: formData.empresa,
      instituicao: formData.empresa,
      email: formData.email,
      telefone: formData.telefone,
      sector: "Educação",
      challenge: selected.challenge,
      investment: selected.investment,
      utm_source:
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_source") || ""
          : "",
      utm_medium:
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_medium") || ""
          : "",
      utm_campaign:
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_campaign") || ""
          : "",
      utm_content:
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_content") || ""
          : "",
      utm_term:
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_term") || ""
          : "",
    };

    if (typeof window !== "undefined") {
      try {
        const w = window as Window & { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "Lead",
          formName: "Diagnóstico Educacional",
          location: "marketing-educacional",
          formData: payloadFormData,
        });
      } catch {
        // Tracking nao pode bloquear o envio do lead para a RD.
      }
    }

    try {
      const response = await fetch("/api/rd-conversion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formName: "Diagnóstico Educacional",
          pagePath: "/marketing-educacional",
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.updo.com.br/marketing-educacional",
          formData: payloadFormData,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o formulario.");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Não conseguimos enviar agora. Tente novamente em alguns segundos.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28"
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6575FF]/[0.08] rounded-full blur-[120px] pointer-events-none" />

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
              Análise da captação
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Receba um diagnóstico gratuito <br className="hidden md:block" />
              da sua captação de alunos.
            </h2>
            <p className="mt-4 text-white/40 text-base max-w-xl mx-auto leading-relaxed">
              Vamos analisar onde sua captação perde alunos e indicar os
              próximos passos para gerar matrículas com mais previsibilidade.
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
                      <label className={labelClass}>Empresa</label>
                      <input
                        type="text"
                        name="empresa"
                        id="empresa"
                        required
                        value={formData.empresa}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            empresa: e.target.value,
                          }))
                        }
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
                      <label className={labelClass}>Telefone</label>
                      <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        required
                        value={formData.telefone}
                        onChange={handlePhoneChange}
                        placeholder="(41) 99999-9999"
                        className={inputClass}
                        maxLength={15}
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
                          className="w-full cursor-pointer appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]"
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
                          className="w-full cursor-pointer appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]"
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
                        disabled={isSubmitting}
                        className="inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10"
                      >
                        {isSubmitting
                          ? "Enviando..."
                          : "Quero meu diagnóstico gratuito"}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    {submitError && (
                      <p className="text-center text-xs font-semibold text-red-300">
                        {submitError}
                      </p>
                    )}
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
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12">
                    <CheckCircle2 className="h-10 w-10 text-[#6575FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Formulário enviado com sucesso!
                  </h3>
                  <p className="text-white/60 max-w-sm mb-8">
                    Recebemos seus dados. Nossa equipe vai analisar as
                    informações e retornar com os próximos passos.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
