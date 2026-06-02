"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  Filter,
  Globe2,
  Layers,
  Lock,
  Megaphone,
  MousePointerClick,
  Plus,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const blockers = [
  {
    icon: Filter,
    title: "Lead entra sem fit comercial",
    description:
      "A campanha gera volume, mas o comercial perde tempo com gente fora do ICP. O problema não é só CPL, é quem entra no funil.",
  },
  {
    icon: Layers,
    title: "Dependência de um canal só",
    description:
      "Quando tudo depende de Google, Meta ou indicação, qualquer mudança de leilão, algoritmo ou mercado mexe direto no caixa.",
  },
  {
    icon: BarChart3,
    title: "Relatório mostra clique, não receita",
    description:
      "Impressão, CTR e lead não bastam. A decisão de verba precisa enxergar qualidade, oportunidade, venda e CAC por canal.",
  },
];

const deliverables = [
  {
    icon: Target,
    title: "Estratégia de canal por ICP",
    description:
      "Definição de público, canal, oferta, orçamento e meta antes da campanha entrar no ar.",
  },
  {
    icon: Search,
    title: "Google Ads",
    description:
      "Busca, Performance Max e remarketing com intenção clara, termos negativos e leitura de qualidade do lead.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Campanhas para Facebook e Instagram com criativos, públicos e retargeting alinhados ao estágio do funil.",
  },
  {
    icon: Briefcase,
    title: "LinkedIn Ads e B2B",
    description:
      "Segmentação por cargo, setor e empresa para ciclos mais longos, decisores específicos e tickets maiores.",
  },
  {
    icon: Globe2,
    title: "SEO, GEO e conteúdo",
    description:
      "Arquitetura de conteúdo para buscadores e respostas de IA, capturando demanda orgânica de alta intenção.",
  },
  {
    icon: BarChart3,
    title: "CPL, CAC e qualidade por canal",
    description:
      "Relatório que conecta investimento, lead, oportunidade e venda para realocar verba com mais segurança.",
  },
];

const matrix = [
  {
    icon: Target,
    label: "ICP",
    role: "O canal parte do perfil de cliente, não da ferramenta que está na moda.",
    score: "Lead certo",
  },
  {
    icon: MousePointerClick,
    label: "Oferta",
    role: "Anúncio e página filtram intenção antes do lead chegar ao comercial.",
    score: "Mais qualidade",
  },
  {
    icon: Layers,
    label: "Canais",
    role: "Pago, orgânico, GEO e remarketing trabalham com papéis diferentes na jornada.",
    score: "Menos risco",
  },
  {
    icon: BarChart3,
    label: "Receita",
    role: "CPL só importa quando conversa com oportunidade, venda e CAC real.",
    score: "Decisão melhor",
  },
];

const faqs = [
  {
    question: "Vocês fazem gestão de mídia ou só estratégia?",
    answer:
      "Fazemos os dois. Planejamos canal, oferta, campanha, criativo, landing page e leitura de performance. O mesmo time que pensa acompanha a execução.",
  },
  {
    question: "Quais canais entram na geração de demanda?",
    answer:
      "Depende do ICP e do ciclo de venda. Normalmente avaliamos Google Ads, Meta Ads, LinkedIn Ads, SEO, GEO, conteúdo, remarketing e, quando faz sentido, TikTok Ads.",
  },
  {
    question: "TikTok Ads faz sentido para todo negócio?",
    answer:
      "Não. TikTok pode funcionar muito bem para awareness, demanda latente e alguns produtos B2C, mas precisa de criativo, oferta e público adequados. Não é canal obrigatório.",
  },
  {
    question: "Como vocês qualificam o lead antes do comercial?",
    answer:
      "A qualificação começa no anúncio, passa pela oferta, landing page, formulário e, quando necessário, automação de WhatsApp ou e-mail antes do handoff.",
  },
  {
    question: "SEO e GEO entram junto com mídia paga?",
    answer:
      "Sim. Mídia paga acelera aquisição; SEO e GEO constroem demanda de longo prazo em buscadores e respostas de IA. O ideal é que os canais compartilhem aprendizados de palavra-chave, oferta, pergunta e intenção.",
  },
  {
    question: "Quanto tempo para ver resultado?",
    answer:
      "Mídia paga começa a gerar sinais nas primeiras semanas. Otimização de qualidade e CAC costuma amadurecer entre 4 e 8 semanas. SEO e GEO normalmente pedem 90 a 180 dias.",
  },
];

const budgetRanges = [
  "Menos de R$5 mil/mês",
  "R$5 mil a R$20 mil/mês",
  "R$20 mil a R$80 mil/mês",
  "Acima de R$80 mil/mês",
];

const activeChannelsOptions = [
  "Só Google Ads",
  "Só Meta Ads",
  "Google + Meta",
  "Vários canais ativos",
  "Não tenho mídia ativa",
];

const businessTypes = [
  "B2B / Serviços",
  "B2C / Produto",
  "SaaS / Software",
  "E-commerce",
  "Educação / EAD",
  "Outro",
];

const mainPains = [
  "Lead sem qualidade",
  "CPL alto demais",
  "Dependência de um canal",
  "Sem leitura de CAC",
  "Verba sem retorno claro",
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

function DemandVisual() {
  const channels = [
    ["Google Ads", "R$ 94", "42%"],
    ["Meta Ads", "R$ 118", "28%"],
    ["SEO / GEO", "Orgânico", "20%"],
    ["LinkedIn Ads", "R$ 204", "10%"],
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Performance por canal
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#6575FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
            30 dias
          </span>
        </div>
        <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-white">
          Canal certo, lead certo, verba melhor alocada.
        </h3>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {channels.map(([name, cpl, width], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-white/45">{name}</span>
              <span className="font-black text-white">{cpl}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#6575FF]" style={{ width }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        {[
          ["Leads", "438"],
          ["CPL médio", "R$112"],
          ["Qualificados", "64%"],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col gap-0.5 px-4 py-3">
            <span className="text-[10px] text-white/40">{label}</span>
            <span className="text-sm font-black text-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <p className="text-sm font-medium leading-relaxed text-white/55">
          Gerar demanda não é comprar clique. É entender qual canal traz intenção
          real e qual lead merece chegar ao comercial.
        </p>
      </div>
    </div>
  );
}

export function DemandaLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = React.useState("");
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    budget: "",
    channels: "",
    businessType: "",
    mainPain: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/[^\d]/g, "");
    if (digits.length < 3) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const submitLead = () => {
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "Lead",
        formName: "Diagnóstico Geração de Demanda",
        location: "servicos/geracao-de-demanda",
        formData: { ...formData, ...selected },
      });

      const message = `Olá! Vim pela página de Geração de Demanda da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Budget mensal:* ${selected.budget}
*Canais ativos:* ${selected.channels}
*Tipo de negócio:* ${selected.businessType}
*Principal dor:* ${selected.mainPain}

Quero estruturar minha geração de demanda.`;

      const whatsappUrl = `https://wa.me/5541987112003?text=${encodeURIComponent(message)}`;
      setWhatsAppUrl(whatsappUrl);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLead();
  };

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (form && !form.reportValidity()) return;
    submitLead();
  };

  return (
    <main>
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-[#6575FF]/[0.12] blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex flex-col gap-6"
            >
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Geração de Demanda · Serviço UPDO
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Geração de demanda para atrair o lead certo, não só mais leads.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/55">
                Estruturamos Google Ads, Meta Ads, LinkedIn Ads, SEO, GEO e
                conteúdo com ICP, oferta e leitura de CAC para sua verba comprar
                oportunidade, não só tráfego.
              </p>
              <div className="grid gap-3">
                {[
                  "Canais definidos por ICP, intenção e ciclo de venda",
                  "Qualificação desde o anúncio até a landing page",
                  "CPL, CAC e qualidade do lead por canal",
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
                  Estruturar minha demanda
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
              <DemandVisual />
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
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Onde a aquisição gasta verba antes de gerar receita.
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
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Seis frentes para gerar demanda com mais qualidade.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A entrega conecta canal, oferta, mídia, SEO, GEO, landing page e
              leitura comercial para o lead chegar com mais contexto.
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
              Quero melhorar minha aquisição
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6575FF]/[0.12] blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Sistema de aquisição
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Os quatro pilares da geração de demanda.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              ICP, oferta, canais e receita precisam ser lidos juntos. Sem isso,
              o time otimiza clique enquanto o comercial briga com lead ruim.
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
                <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                  CPL menor e mais lead qualificado sem depender de um canal.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Operação B2B com verba concentrada em Google Ads e baixa
                  qualificação. Após ICP, landing page, remarketing e LinkedIn Ads,
                  a aquisição ficou mais previsível e menos vulnerável ao leilão.
                </p>
                <Link
                  href="#contato"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                >
                  Quero esse resultado na minha aquisição
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:w-56 lg:shrink-0">
                {[
                  ["R$89", "CPL médio"],
                  ["3x", "leads qualificados"],
                  ["64%", "qualificação"],
                  ["31%", "demanda orgânica"],
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

      <section id="contato" className="relative overflow-hidden py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[#07111F]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico gratuito
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Vamos entender como está sua geração de demanda.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha para analisarmos canais, CPL, CAC, qualidade do lead e
                oportunidades de realocação de verba.
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
                  <FormField label="Budget mensal" htmlFor="budget" icon={BarChart3}>
                    <SelectField
                      id="budget"
                      value={selected.budget}
                      placeholder="Quanto investe por mês?"
                      options={budgetRanges}
                      onChange={(value) => setSelected((prev) => ({ ...prev, budget: value }))}
                    />
                  </FormField>
                  <FormField label="Canais ativos" htmlFor="channels" icon={Layers}>
                    <SelectField
                      id="channels"
                      value={selected.channels}
                      placeholder="Quais canais usa?"
                      options={activeChannelsOptions}
                      onChange={(value) => setSelected((prev) => ({ ...prev, channels: value }))}
                    />
                  </FormField>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Tipo de negócio" htmlFor="businessType" icon={Briefcase}>
                    <SelectField
                      id="businessType"
                      value={selected.businessType}
                      placeholder="Qual o modelo?"
                      options={businessTypes}
                      onChange={(value) => setSelected((prev) => ({ ...prev, businessType: value }))}
                    />
                  </FormField>
                  <FormField label="Principal dor" htmlFor="mainPain" icon={TrendingUp}>
                    <SelectField
                      id="mainPain"
                      value={selected.mainPain}
                      placeholder="Onde está o gargalo?"
                      options={mainPains}
                      onChange={(value) => setSelected((prev) => ({ ...prev, mainPain: value }))}
                    />
                  </FormField>
                </div>
                <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                  <p className="text-center text-sm leading-relaxed text-white/45">
                    Com base nas suas respostas, preparamos um diagnóstico mais preciso da aquisição.
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmitClick}
                    className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10"
                  >
                    Diagnosticar minha demanda
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
                <SuccessIcon />
                <h3 className="font-heading text-2xl font-black tracking-tight text-white">
                  Formulário enviado com sucesso.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                  Recebemos suas informações e vamos analisar o cenário para retornar com um direcionamento inicial.
                </p>
                {whatsAppUrl && (
                  <Link
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] active:scale-95"
                  >
                    Falar agora pelo WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
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
              <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Dúvidas sobre geração de demanda e mídia paga.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de aumentar verba, vale entender se o problema está no
                canal, na oferta, no ICP ou no que acontece depois do clique.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "O melhor canal não salva uma oferta fraca. E o menor CPL não vale muito se o lead não vira conversa comercial."
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
