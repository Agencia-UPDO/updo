"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  Mic2,
  Presentation,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .26 5.32.26 11.86c0 2.09.55 4.13 1.58 5.93L.16 24l6.35-1.66a11.85 11.85 0 0 0 5.61 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.47-8.39ZM12.13 21.77h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.83 9.83 0 0 1-1.51-5.25C2.23 6.43 6.67 2 12.13 2c2.63 0 5.11 1.03 6.97 2.89A9.8 9.8 0 0 1 22 11.91c0 5.44-4.43 9.86-9.87 9.86Zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

const topics = [
  {
    icon: Brain,
    title: "Neurovendas e comportamento do consumidor",
    description:
      "Como decisores compram, por que objeções aparecem e como conduzir uma conversa comercial com mais clareza.",
  },
  {
    icon: WhatsAppIcon,
    title: "Atendimento comercial e WhatsApp",
    description:
      "Rotina de primeiro contato, follow-up, recuperação de oportunidades e linguagem para não esfriar leads prontos.",
  },
  {
    icon: Workflow,
    title: "Vendas consultivas e processo comercial",
    description:
      "Perguntas, critérios de qualificação, passagem de bastão e previsibilidade entre lead, oportunidade e fechamento.",
  },
  {
    icon: BarChart3,
    title: "CRM, pipeline e gestão por dados",
    description:
      "Como transformar CRM em ferramenta de gestão, não só em cadastro que o time preenche quando lembra.",
  },
  {
    icon: Target,
    title: "Marketing, funil e aquisição de clientes",
    description:
      "Leitura de mídia, oferta, página, lead e venda para o time entender de onde vem a demanda e onde ela trava.",
  },
  {
    icon: GraduationCap,
    title: "IA aplicada a vendas e atendimento",
    description:
      "Uso prático de IA para qualificação, produtividade comercial, análise de conversas e apoio à rotina de liderança.",
  },
];

const formats = [
  {
    icon: Users,
    title: "Treinamento in company",
    description:
      "Conteúdo adaptado ao mercado, funil, equipe e metas da empresa. Pode ser presencial ou online.",
  },
  {
    icon: Presentation,
    title: "Workshop executivo",
    description:
      "Encontro prático para lideranças comerciais, marketing e diretoria saírem com decisões e próximos passos.",
  },
  {
    icon: Mic2,
    title: "Palestra para eventos",
    description:
      "Conteúdo para convenções, encontros comerciais, semanas acadêmicas e eventos corporativos.",
  },
  {
    icon: ClipboardCheck,
    title: "Programa com acompanhamento",
    description:
      "Trilhas em módulos, exercícios aplicados e evolução da rotina comercial ao longo de algumas semanas.",
  },
];

const steps = [
  "Fazemos um briefing para entender público, funil, rotina comercial e objetivo da empresa.",
  "Desenhamos exemplos, exercícios e cases próximos do contexto do time.",
  "Aplicamos o treinamento com prática, discussão e direcionamento claro.",
  "Entregamos materiais e recomendações para a liderança sustentar a rotina.",
];

const faqs = [
  {
    question: "O treinamento é padrão ou desenhado para a empresa?",
    answer:
      "A base conceitual vem da experiência da UPDO em marketing, vendas, comportamento do consumidor e IA, mas o conteúdo é adaptado ao contexto da empresa. Antes do treinamento, levantamos mercado, público, funil, equipe e principais gargalos.",
  },
  {
    question: "Pode ser presencial?",
    answer:
      "Sim. Fazemos treinamentos presenciais, online e híbridos. O formato depende do objetivo, do tamanho da equipe e do nível de prática que a empresa quer trabalhar.",
  },
  {
    question: "Serve para time comercial ou para liderança?",
    answer:
      "Serve para os dois, mas com abordagens diferentes. Para o time, o foco é conversa, rotina, abordagem e execução. Para liderança, entramos mais em pipeline, indicadores, gestão comercial, CRM e leitura do funil.",
  },
  {
    question: "Vocês falam de IA no treinamento?",
    answer:
      "Quando faz sentido para o objetivo, sim. A abordagem é prática: como usar IA para ganhar produtividade, analisar conversas, qualificar leads, criar materiais de apoio e reduzir tarefas repetitivas sem perder a leitura humana da venda.",
  },
  {
    question: "Dá para treinar equipes de marketing e vendas juntas?",
    answer:
      "Dá, e costuma ser um bom caminho quando o problema está entre campanha, lead, atendimento e fechamento. O treinamento ajuda as áreas a enxergarem a mesma jornada, com métricas e responsabilidades mais claras.",
  },
];

const companySizes = [
  "Até 10 pessoas",
  "11 a 50 pessoas",
  "51 a 200 pessoas",
  "201 a 500 pessoas",
  "Mais de 500 pessoas",
];

const trainingFormats = [
  "Treinamento in company",
  "Workshop executivo",
  "Palestra para evento",
  "Programa com acompanhamento",
  "Ainda quero entender o melhor formato",
];

const trainingTopics = [
  "Vendas e neurovendas",
  "Atendimento comercial e WhatsApp",
  "IA aplicada a vendas",
  "CRM, pipeline e gestão comercial",
  "Marketing, funil e aquisição",
  "Treinamento para liderança",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/45";

function FormField({
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

function SelectField({
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
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
    </div>
  );
}

function SuccessIcon() {
  return (
    <motion.div
      initial={{ scale: 0.82, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mb-6 flex h-20 w-20 items-center justify-center"
    >
      <motion.span
        initial={{ scale: 0.65, opacity: 0.55 }}
        animate={{ scale: 1.35, opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0 rounded-full border border-accent/35"
      />
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/25 bg-accent/12 shadow-[0_0_34px_rgba(86,254,213,0.18)]">
        <CheckCircle2 className="h-10 w-10 text-accent" />
      </div>
    </motion.div>
  );
}

function TopicCard({ item }: { item: (typeof topics)[number] }) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
        <item.icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-base font-black leading-snug tracking-tight text-foreground">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
}

export function TrainingPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    companySize: "",
    format: "",
    topic: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/[^\d]/g, "");
    if (digits.length < 3) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const submitLead = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    const searchParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    const payloadFormData = {
      ...formData,
      ...selected,
      service: "Treinamentos Corporativos",
      utm_source: searchParams?.get("utm_source") || "",
      utm_medium: searchParams?.get("utm_medium") || "",
      utm_campaign: searchParams?.get("utm_campaign") || "",
      utm_content: searchParams?.get("utm_content") || "",
      utm_term: searchParams?.get("utm_term") || "",
    };

    if (typeof window !== "undefined") {
      try {
        const w = window as Window & { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "Lead",
          formName: "Treinamentos Corporativos",
          location: "treinamentos-corporativos",
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
          formName: "Treinamentos Corporativos",
          pagePath: "/treinamentos-corporativos",
          pageUrl:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.updo.com.br/treinamentos-corporativos",
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitLead();
  };

  return (
    <main>
      <section className="relative flex items-start overflow-hidden bg-background pt-10 pb-16 lg:min-h-[88vh] lg:items-center lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,254,213,0.16),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(101,117,255,0.12),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="updo-hero-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Educação executiva e in company
              </span>
              <h1 className="mt-8 font-heading text-4xl font-black leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Treinamentos corporativos para times que precisam vender melhor.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Workshops, palestras e programas in company sobre vendas,
                neurovendas, comportamento do consumidor, IA, atendimento e
                rotina comercial, conduzidos por Rodrigo Bueno.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Professor de educação executiva na PUCPR",
                  "Professor de pós-graduação na PUCPR e IBRATE",
                  "Professor de MBA na UFPR",
                  "Conteúdo aplicado ao funil da empresa",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contato"
                  className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-[0_10px_24px_rgba(86,254,213,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_14px_34px_rgba(86,254,213,0.34)] active:scale-95 sm:w-auto lg:h-16 lg:px-10 lg:text-lg"
                >
                  Solicitar treinamento
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#temas"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-border/80 bg-white/40 px-8 text-base font-bold text-foreground transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto lg:h-16 lg:text-lg"
                >
                  Ver temas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid gap-4 sm:grid-cols-[1.12fr_0.88fr] lg:relative lg:min-h-[560px]"
            >
              <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[var(--shadow-soft)] sm:col-span-2 lg:absolute lg:right-0 lg:top-0 lg:h-[460px] lg:w-[82%]">
                <Image
                  src="/Imagens/sala-cheia.jpg"
                  alt="Rodrigo Bueno conduzindo treinamento para sala cheia"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div className="relative min-h-[260px] rounded-2xl lg:absolute lg:bottom-0 lg:left-0 lg:h-[330px] lg:w-[46%]">
                <div className="absolute -left-2 -top-2 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-[#6575FF]/55" />
                <div className="relative h-full overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[var(--shadow-soft)]">
                <Image
                  src="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                  alt="Rodrigo Bueno, fundador da UPDO e professor de educação executiva"
                  fill
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  className="object-cover object-[50%_18%]"
                />
                </div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)] lg:absolute lg:bottom-8 lg:right-8 lg:w-[300px]">
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Rodrigo Bueno
                </span>
                <p className="mt-4 text-sm font-bold leading-relaxed text-foreground">
                  Professor, palestrante e fundador da UPDO, com atuação em
                  comportamento do consumidor, marketing, vendas e IA aplicada
                  a processos comerciais.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="temas" className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Temas dos treinamentos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Conteúdo para melhorar venda, atendimento e tomada de decisão.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              A pauta não nasce de um slide pronto. Ela parte do que o time
              precisa fazer melhor na rotina comercial.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((item) => (
              <TopicCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Formatos
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                O formato depende do que precisa mudar na rotina.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Depois do briefing, definimos se faz mais sentido uma palestra,
                um workshop prático ou um programa em módulos para liderança,
                comercial, atendimento ou marketing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {formats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-black tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Como funciona
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                A aula entra no contexto da operação.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
                O encontro precisa deixar critérios, linguagem e rotina para o
                time usar depois, não apenas uma apresentação bonita.
              </p>
              <Link
                href="#contato"
                className="mt-8 inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.30)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] active:scale-95"
              >
                Conversar sobre treinamento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 font-heading text-sm font-black text-[#6575FF]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="pt-2 text-sm font-medium leading-relaxed text-white/65">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)] md:p-10 lg:grid-cols-[0.72fr_1fr] lg:items-center lg:p-12">
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border/70">
              <Image
                src="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                alt="Rodrigo Bueno em palestra"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Quem conduz
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Treinamento conduzido por quem trabalha com funil, mídia e vendas.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Fundador da UPDO, Rodrigo atua com comportamento do consumidor,
                marketing, vendas, neurovendas e IA aplicada a negócios. É
                professor de educação executiva na PUCPR, professor de
                pós-graduação na PUCPR e Faculdade IBRATE, e professor de MBA
                na UFPR.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Experiência em projetos de marketing e vendas",
                  "Didática voltada para aplicação no dia a dia",
                  "Leitura de funil, CRM e rotina comercial",
                  "Conteúdo com exemplos do mercado brasileiro",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 text-[#6575FF]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Solicitar treinamento
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Conte o contexto da equipe.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Antes de fechar a agenda, fazemos um briefing para entender a
                empresa, o público, o time e o objetivo do treinamento.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Nome" htmlFor="nome">
                    <input
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(event) => setFormData((prev) => ({ ...prev, nome: event.target.value }))}
                      placeholder="Como prefere ser chamado"
                      className={inputClass}
                    />
                  </FormField>
                  <FormField label="Empresa" htmlFor="empresa">
                    <input
                      id="empresa"
                      required
                      value={formData.empresa}
                      onChange={(event) => setFormData((prev) => ({ ...prev, empresa: event.target.value }))}
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="E-mail" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      placeholder="seu@email.com"
                      className={inputClass}
                    />
                  </FormField>
                  <FormField label="Telefone" htmlFor="telefone">
                    <input
                      id="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, telefone: formatPhone(event.target.value) }))
                      }
                      placeholder="(41) 99999-9999"
                      maxLength={15}
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <FormField label="Tamanho" htmlFor="companySize" icon={Users}>
                    <SelectField
                      id="companySize"
                      value={selected.companySize}
                      placeholder="Tamanho da empresa"
                      options={companySizes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, companySize: value }))}
                    />
                  </FormField>
                  <FormField label="Formato" htmlFor="format" icon={Presentation}>
                    <SelectField
                      id="format"
                      value={selected.format}
                      placeholder="Formato de interesse"
                      options={trainingFormats}
                      onChange={(value) => setSelected((prev) => ({ ...prev, format: value }))}
                    />
                  </FormField>
                  <FormField label="Tema" htmlFor="topic" icon={Briefcase}>
                    <SelectField
                      id="topic"
                      value={selected.topic}
                      placeholder="Tema principal"
                      options={trainingTopics}
                      onChange={(value) => setSelected((prev) => ({ ...prev, topic: value }))}
                    />
                  </FormField>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/45">
                    Com base nas suas respostas, marcamos o briefing inicial e
                    direcionamos o melhor formato para a equipe.
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:max-w-none sm:px-10"
                    >
                      {isSubmitting ? "Enviando..." : "Solicitar proposta de treinamento"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  {submitError && (
                    <p className="text-center text-xs font-semibold text-red-300">
                      {submitError}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/25">
                      <ShieldCheck className="h-3 w-3" />
                      Sem spam
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/25">
                      <ClipboardCheck className="h-3 w-3" />
                      Resposta em até 1 dia útil
                    </span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center py-12 text-center">
                <SuccessIcon />
                <h3 className="font-heading text-2xl font-black tracking-tight text-white">
                  Formulário enviado com sucesso.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                  Recebemos suas informações e vamos analisar o cenário para retornar com um direcionamento inicial.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Antes de levar o treinamento para o time.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                A conversa inicial define o objetivo, o público e o nível de
                profundidade. Assim o treinamento não vira palestra genérica.
              </p>
            </div>
            <div className="space-y-4 lg:col-span-7">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={cn(
                    "group rounded-2xl border transition-all duration-300",
                    openFaq === index
                      ? "border-[#6575FF]/30 bg-[#6575FF]/[0.06] shadow-[0_14px_42px_rgba(101,117,255,0.14)]"
                      : "border-border/70 bg-white hover:border-[#6575FF]/30",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
                  >
                    <span
                      className={cn(
                        "text-base font-bold tracking-tight transition-colors md:text-lg",
                        openFaq === index ? "text-[#6575FF]" : "text-foreground",
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 min-w-8 items-center justify-center rounded-full transition-all",
                        openFaq === index
                          ? "rotate-180 bg-[#6575FF] text-white"
                          : "bg-slate-100 text-slate-400 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]",
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
