"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  FlaskConical,
  FormInput,
  Layers,
  Lock,
  MousePointerClick,
  Plus,
  ScanSearch,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const blockers = [
  {
    icon: MousePointerClick,
    title: "Tráfego pago chega e abandona",
    description:
      "A campanha entrega clique, mas a página não sustenta a intenção. O CAC sobe porque a verba compra visita, não conversão.",
  },
  {
    icon: Eye,
    title: "Mudança de página vira opinião",
    description:
      "Botão, formulário, bloco e headline mudam por gosto pessoal. Sem dado de comportamento, ninguém sabe se a alteração melhorou ou piorou.",
  },
  {
    icon: FormInput,
    title: "Formulário cria atrito invisível",
    description:
      "Campo demais, pergunta cedo demais ou promessa pouco clara. O usuário até queria avançar, mas a página pediu esforço antes de entregar confiança.",
  },
];

const deliverables = [
  {
    icon: ScanSearch,
    title: "Auditoria de UX e Matriz CSD",
    description:
      "Análise de hierarquia, clareza, fricção, responsivo e Matriz CSD para separar certeza, suposição e dúvida antes do teste.",
  },
  {
    icon: Eye,
    title: "Heatmap e sessão gravada",
    description:
      "Leitura de clique, scroll, atenção e abandono para transformar comportamento real em hipótese de melhoria.",
  },
  {
    icon: FlaskConical,
    title: "Testes A/B estruturados",
    description:
      "Hipótese, variante, amostra, métrica e decisão documentadas para evitar mudança baseada em achismo.",
  },
  {
    icon: Layers,
    title: "Landing pages de conversão",
    description:
      "Copy, layout, prova, CTA e formulário reorganizados para aumentar ação sem depender de mais tráfego.",
  },
  {
    icon: FormInput,
    title: "Otimização de formulário",
    description:
      "Campos, ordem, microcopy, validação e tamanho ajustados para reduzir abandono na etapa mais sensível.",
  },
  {
    icon: BarChart3,
    title: "Relatório de aprendizado",
    description:
      "Uplift, queda, hipótese validada e próximos testes para criar uma rotina contínua de melhoria.",
  },
];

const matrix = [
  {
    icon: ScanSearch,
    label: "Diagnóstico",
    role: "A página é lida por intenção, fricção e Matriz CSD antes de qualquer mudança.",
    score: "Problema claro",
  },
  {
    icon: Target,
    label: "Hipótese",
    role: "Cada ajuste nasce de evidência, não de preferência estética ou reunião longa.",
    score: "Teste certo",
  },
  {
    icon: FlaskConical,
    label: "Experimento",
    role: "Controle e variante com métrica definida antes de publicar a mudança.",
    score: "Decisão limpa",
  },
  {
    icon: TrendingUp,
    label: "Iteração",
    role: "O resultado vira o próximo ciclo para conversão evoluir sem redesenho eterno.",
    score: "Ganho contínuo",
  },
];

const faqs = [
  {
    question: "O que é CRO?",
    answer:
      "CRO é otimização de taxa de conversão. Na prática, é melhorar página, formulário, CTA e fluxo para mais visitantes realizarem a ação desejada sem aumentar a verba de mídia.",
  },
  {
    question: "Preciso ter muito tráfego para testar?",
    answer:
      "Para teste A/B com leitura estatística, volume ajuda. Quando o tráfego é menor, começamos por auditoria, heatmap, sessão gravada e melhorias com maior evidência qualitativa.",
  },
  {
    question: "Vocês mexem em design ou só em texto?",
    answer:
      "Nos dois. Conversão depende de mensagem, hierarquia visual, prova, velocidade, formulário e clareza da oferta. O diagnóstico define o que tem maior impacto primeiro.",
  },
  {
    question: "Funciona para landing page de serviço?",
    answer:
      "Sim. CRO não é só e-commerce. Funciona para página de serviço, diagnóstico, contato, inscrição, checkout, onboarding e qualquer fluxo com conversão mensurável.",
  },
  {
    question: "Quanto tempo para ver resultado?",
    answer:
      "Os primeiros ajustes podem entrar rápido, mas resultados consistentes costumam aparecer entre 30 e 60 dias, dependendo do tráfego e da complexidade da página.",
  },
  {
    question: "Como sei que a melhora veio do teste?",
    answer:
      "A estrutura separa controle, variante, métrica e período de análise. Assim a decisão fica baseada em comportamento comparável, não em sensação depois da mudança.",
  },
];

const pageTypes = [
  "Landing page de serviço",
  "E-commerce / produto",
  "Página institucional",
  "Formulário de captação",
  "Checkout / cadastro",
  "Outro",
];

const monthlyTraffics = [
  "Menos de 1 mil sessões/mês",
  "1 mil a 10 mil sessões/mês",
  "10 mil a 50 mil sessões/mês",
  "Mais de 50 mil sessões/mês",
];

const currentRates = [
  "Não sei minha taxa",
  "Abaixo de 1%",
  "1% a 3%",
  "3% a 6%",
  "Acima de 6%",
];

const mainPains = [
  "Tráfego pago não converte",
  "Formulário com abandono",
  "Página sem clareza",
  "Sem rotina de teste A/B",
  "Não sei onde o usuário trava",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass = "text-[10px] font-black uppercase tracking-[0.25em] text-white/45";

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
  );
}

function TrustItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/25">
      <Icon className="h-3 w-3" />
      {text}
    </span>
  );
}

function CroVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Experimento A/B
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#6575FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
            Rodando
          </span>
        </div>
        <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-white">
          A página só muda quando o dado mostra onde o usuário travou.
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            Controle
          </p>
          <p className="mt-3 font-heading text-3xl font-black text-white">2,3%</p>
          <p className="mt-1 text-xs text-white/35">1.240 sessões</p>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "42%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-2 rounded-full bg-white/25"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#6575FF]/30 bg-[#6575FF]/10 p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6575FF]">
              Variante
            </p>
            <span className="rounded-full bg-[#6575FF] px-2 py-0.5 text-[9px] font-black uppercase text-white">
              Melhor
            </span>
          </div>
          <p className="mt-3 font-heading text-3xl font-black text-white">4,1%</p>
          <p className="mt-1 text-xs text-white/45">1.238 sessões</p>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "74%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="h-2 rounded-full bg-[#6575FF]"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {[
          ["Uplift", "+78%"],
          ["Confiança", "96%"],
          ["Ciclo", "14d"],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col gap-0.5 px-4 py-3">
            <span className="text-[10px] text-white/40">{label}</span>
            <span className="text-sm font-black text-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <p className="text-sm font-medium leading-relaxed text-white/55">
          O teste não começa pelo layout. Começa pela pergunta certa: qual
          fricção impede o usuário de avançar?
        </p>
      </div>
    </div>
  );
}

export function UxCroLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    pageType: "",
    traffic: "",
    currentRate: "",
    mainPain: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/[^\d]/g, "");
    if (digits.length < 3) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer?.push({
        event: "Lead",
        formName: "Diagnóstico UX e CRO",
        location: "servicos/ux-cro",
        formData: { ...formData, ...selected },
      });

      const message = `Olá! Vim pela página de UX e CRO da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Tipo de página:* ${selected.pageType}
*Tráfego mensal:* ${selected.traffic}
*Taxa de conversão atual:* ${selected.currentRate}
*Principal dor:* ${selected.mainPain}

Quero otimizar a conversão das minhas páginas.`;

      setTimeout(() => {
        window.open(`https://wa.me/5541987112003?text=${encodeURIComponent(message)}`, "_blank");
      }, 1200);
    }
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-[#07111F] pt-10 pb-16 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 -z-10 h-[700px] w-[700px] rounded-full bg-[#6575FF]/[0.12] blur-[140px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex flex-col gap-6"
            >
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                UX e CRO · Serviço UPDO
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                UX e CRO para converter melhor o tráfego que você já paga.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/55">
                Diagnosticamos onde o usuário trava, transformamos comportamento
                em hipótese e testamos mudanças para aumentar conversão com dado,
                não com opinião.
              </p>
              <div className="grid gap-3">
                {[
                  "Auditoria de UX, heatmap e sessão gravada",
                  "Testes A/B com hipótese e métrica definidas",
                  "Landing pages e formulários otimizados para conversão",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/55">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10">
                      <span className="h-2 w-2 rounded-full bg-[#6575FF]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contato"
                  className="group inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground shadow-[0_10px_24px_rgba(86,254,213,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_14px_34px_rgba(86,254,213,0.34)] active:scale-95 sm:w-auto"
                >
                  Otimizar minha conversão
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
                >
                  Ver diagnóstico
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="hidden lg:block"
            >
              <CroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O problema
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
              Onde a página perde conversão sem aparecer no relatório.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {blockers.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-black leading-snug tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que entregamos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-4xl">
              O que analisamos antes de mexer na página.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A entrega conecta análise de comportamento, hipótese, design,
              copy, formulário e teste para cada mudança ter motivo e medição.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-black leading-snug tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="#contato"
              className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
            >
              Quero melhorar minha página
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6575FF]/[0.12] blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Método CRO
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-4xl">
              Os quatro pilares da otimização de conversão.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              Diagnóstico, hipótese, experimento e iteração. Sem esse ciclo,
              redesign vira aposta bonita e difícil de medir.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {matrix.map((item) => (
              <article
                key={item.label}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/[0.08]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[#6575FF]">
                  <item.icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-black leading-snug text-white">{item.label}</p>
                <p className="text-xs leading-relaxed text-white/45">{item.role}</p>
                <span className="self-start rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#6575FF]">
                  {item.score}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/70 bg-white p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex-1">
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Resultado real
                </span>
                <h2 className="mt-4 font-heading text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl">
                  Mais conversão sem aumentar a verba de mídia.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Landing page com tráfego pago constante e formulário pouco
                  acionado. Após análise de comportamento, nova hierarquia e
                  teste de variante, a página converteu mais usando a mesma verba.
                </p>
                <Link
                  href="#contato"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                >
                  Quero esse resultado na minha página
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:w-56 lg:shrink-0">
                {[
                  ["+78%", "uplift de conversão"],
                  ["-31%", "custo por lead"],
                  ["4,1%", "taxa final"],
                  ["14d", "ciclo de teste"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-5"
                  >
                    <span className="font-heading text-2xl font-black tracking-tight text-foreground">
                      {value}
                    </span>
                    <span className="text-[11px] leading-snug text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico gratuito
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Vamos entender onde sua página perde conversão.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha para analisarmos tráfego, comportamento, taxa atual e
                oportunidade de melhoria antes da reunião.
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
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Tipo de página" htmlFor="pageType" icon={Layers}>
                    <SelectField
                      id="pageType"
                      value={selected.pageType}
                      placeholder="Qual página quer otimizar?"
                      options={pageTypes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, pageType: value }))}
                    />
                  </FormField>
                  <FormField label="Tráfego mensal" htmlFor="traffic" icon={Users}>
                    <SelectField
                      id="traffic"
                      value={selected.traffic}
                      placeholder="Quantas sessões?"
                      options={monthlyTraffics}
                      onChange={(value) => setSelected((prev) => ({ ...prev, traffic: value }))}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Taxa atual" htmlFor="currentRate" icon={TrendingUp}>
                    <SelectField
                      id="currentRate"
                      value={selected.currentRate}
                      placeholder="Qual a taxa hoje?"
                      options={currentRates}
                      onChange={(value) => setSelected((prev) => ({ ...prev, currentRate: value }))}
                    />
                  </FormField>
                  <FormField label="Principal dor" htmlFor="mainPain" icon={Eye}>
                    <SelectField
                      id="mainPain"
                      value={selected.mainPain}
                      placeholder="Onde está o problema?"
                      options={mainPains}
                      onChange={(value) => setSelected((prev) => ({ ...prev, mainPain: value }))}
                    />
                  </FormField>
                </div>
                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/45">
                    Com base nas suas respostas, preparamos um diagnóstico mais preciso da experiência e conversão.
                  </p>
                  <button
                    type="submit"
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    Diagnosticar minha página
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    <TrustItem icon={ShieldCheck} text="Sem spam" />
                    <TrustItem icon={Clock} text="Resposta em até 1 dia útil" />
                    <TrustItem icon={Lock} text="Dados usados só no diagnóstico" />
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12">
                  <CheckCircle2 className="h-10 w-10 text-[#6575FF]" />
                </div>
                <h3 className="font-heading text-2xl font-black tracking-tight text-white">
                  Formulário enviado.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                  Estamos abrindo o WhatsApp para continuar o diagnóstico.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                Dúvidas sobre UX, CRO e otimização de conversão.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de comprar mais tráfego, vale entender quanto do tráfego
                atual está sendo perdido por fricção na página.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "Conversão não melhora só deixando a página mais bonita. Melhora quando a próxima ação fica óbvia."
                </p>
              </div>
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
                        "text-lg font-bold tracking-tight transition-colors",
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
                      {openFaq === index ? (
                        <Plus className="h-4 w-4 rotate-45" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
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
