"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Clock,
  LineChart,
  Lock,
  Search,
  ShieldCheck,
  Target,
  Wallet,
  Briefcase,
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

const deliverables = [
  {
    icon: Search,
    title: "Leitura do funil",
    description:
      "Mapeamos onde a operação perde oportunidade entre tráfego, lead, atendimento e venda.",
  },
  {
    icon: BarChart3,
    title: "Prioridades de crescimento",
    description:
      "Você sai com gargalos ordenados por impacto, não com uma lista genérica de tarefas.",
  },
  {
    icon: LineChart,
    title: "Próximos passos",
    description:
      "Indicamos caminhos para ganhar previsibilidade sem depender só de volume de mídia.",
  },
];

const inputClass =
  "w-full rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-200 focus:border-accent/40 focus:bg-white/[0.07]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.09] bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-accent/40 focus:bg-white/[0.07]";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/35";

export function DiagnosticPage() {
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
    const phoneNumber = value.replace(/[^\d]/g, "");
    if (phoneNumber.length < 3) return phoneNumber;
    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer?.push({
        event: "Lead",
        formName: "Diagnóstico Estratégico",
        location: "diagnostico-page",
        formData: {
          ...formData,
          ...selected,
        },
      });
    }

    const message = `Olá! Vim pela página de diagnóstico da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Setor:* ${selected.sector}
*Desafio:* ${selected.challenge}
*Investimento:* ${selected.investment}

Quero agendar meu diagnóstico estratégico.`;

    const whatsappUrl = `https://wa.me/5541987112003?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[#0A1120] py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent/[0.08] blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-accent/[0.05] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="pt-4"
            >
              <span className="inline-flex items-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                Diagnóstico estratégico
              </span>
              <h1 className="mt-5 font-heading text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
                Descubra onde seu marketing perde receita.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                Uma análise inicial para entender gargalos de aquisição, funil
                comercial e previsibilidade. Sem achismo, sem apresentação
                genérica.
              </p>

              <div className="mt-9 grid gap-3">
                {[
                  "Diagnóstico orientado por dados, contexto e operação real",
                  "Indicação dos gargalos que merecem prioridade",
                  "Próximos passos claros para marketing e vendas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-medium text-white/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)]">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {deliverables.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] text-accent">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <h2 className="mt-4 font-heading text-base font-black tracking-tight text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-white/45">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl md:p-8"
            >
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-black tracking-tight text-white">
                  Agendar diagnóstico
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  Preencha os dados para iniciarmos a análise e abrir a conversa
                  pelo WhatsApp.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="diagnostic-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Nome" htmlFor="nome">
                        <input
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
                      </Field>
                      <Field label="Empresa" htmlFor="empresa">
                        <input
                          id="empresa"
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
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="E-mail" htmlFor="email">
                        <input
                          id="email"
                          type="email"
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
                      </Field>
                      <Field label="Telefone" htmlFor="telefone">
                        <input
                          id="telefone"
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              telefone: formatPhone(e.target.value),
                            }))
                          }
                          placeholder="(41) 99999-9999"
                          maxLength={15}
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Setor da empresa" htmlFor="setor" icon={Briefcase}>
                        <Select
                          id="setor"
                          value={selected.sector}
                          placeholder="Selecione o setor..."
                          options={sectors}
                          onChange={(value) =>
                            setSelected((prev) => ({ ...prev, sector: value }))
                          }
                        />
                      </Field>
                      <Field label="Principal desafio" htmlFor="desafio" icon={Target}>
                        <Select
                          id="desafio"
                          value={selected.challenge}
                          placeholder="Selecione o desafio..."
                          options={challenges}
                          onChange={(value) =>
                            setSelected((prev) => ({
                              ...prev,
                              challenge: value,
                            }))
                          }
                        />
                      </Field>
                    </div>

                    <Field label="Investimento atual em marketing" htmlFor="investimento" icon={Wallet}>
                      <Select
                        id="investimento"
                        value={selected.investment}
                        placeholder="Selecione o investimento..."
                        options={investments}
                        onChange={(value) =>
                          setSelected((prev) => ({
                            ...prev,
                            investment: value,
                          }))
                        }
                      />
                    </Field>

                    <div className="mt-2 border-t border-white/[0.08] pt-6">
                      <button
                        type="submit"
                        className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-bold text-white shadow-[0_0_24px_rgba(0,153,102,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#007a52] hover:shadow-[0_0_36px_rgba(0,153,102,0.55)] active:scale-95"
                      >
                        Quero meu diagnóstico estratégico
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                        <TrustItem icon={ShieldCheck} text="Sem spam" />
                        <TrustItem icon={Clock} text="Resposta em até 1 dia útil" />
                        <TrustItem icon={Lock} text="Dados usados só no diagnóstico" />
                      </div>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)]">
                      <CheckCircle2 className="h-10 w-10 text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-black tracking-tight text-white">
                      Formulário enviado.
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                      Estamos abrindo o WhatsApp para continuar o agendamento do
                      seu diagnóstico.
                    </p>
                    <p className="mt-6 text-sm font-bold text-accent">
                      Redirecionando...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FF] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
              Como conduzimos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
              Diagnóstico antes de recomendação.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A conversa existe para entender contexto, prioridade e potencial
              de crescimento. A proposta vem depois da leitura correta do
              cenário.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "Sem proposta pronta",
                description:
                  "Antes de falar de solução, entendemos cenário, metas, operação e momento comercial.",
              },
              {
                title: "Sem auditoria rasa",
                description:
                  "Não olhamos anúncio isolado. Conectamos mídia, página, CRM, atendimento e vendas.",
              },
              {
                title: "Sem pacote empurrado",
                description:
                  "A recomendação nasce do diagnóstico, não de uma prateleira fechada de serviços.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-border/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-border)] hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] text-accent">
                  <span className="font-heading text-sm font-black">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] p-6 text-center">
            <p className="text-sm font-semibold leading-relaxed text-foreground/75">
              A ideia é simples: primeiro clareza, depois estratégia. Se fizer
              sentido avançar, mostramos o caminho com prioridade, contexto e
              responsabilidade.
            </p>
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para a home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={`${labelClass} flex items-center gap-1.5`}>
        {Icon ? <Icon className="h-3 w-3" /> : null}
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({
  id,
  value,
  placeholder,
  options,
  onChange,
}: {
  id: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={selectClass}
        style={{ colorScheme: "dark" }}
      >
        <option value="" disabled className="bg-[#0f1117] text-white/40">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0f1117] text-white">
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}

function TrustItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/25">
      <Icon className="h-3 w-3" />
      {text}
    </span>
  );
}
