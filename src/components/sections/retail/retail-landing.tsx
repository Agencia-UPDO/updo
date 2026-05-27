"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Clock,
  CreditCard,
  LayoutDashboard,
  Lock,
  MapPin,
  Megaphone,
  Palette,
  Plus,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  CalendarDays,
  Store,
  Target,
  TrendingUp,
  Users,
  UserCheck,
} from "lucide-react";

const channels = [
  { label: "Loja física", value: "+87%", detail: "crescimento de faturamento" },
  { label: "Tráfego mensal", value: "+1.400%", detail: "de 800 para 12 mil visitas" },
  { label: "Leads", value: "+1.000", detail: "solicitações por mês" },
  { label: "Ticket médio", value: "+35%", detail: "maior valor por venda" },
];

const blockers = [
  {
    icon: MapPin,
    title: "Tráfego local sem direção",
    description:
      "Campanhas levam pessoas para o site, WhatsApp ou loja, mas a jornada não deixa claro qual ação gera venda.",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp sem processo",
    description:
      "O cliente chama, pergunta preço, some e a equipe perde oportunidade por falta de roteiro, prioridade e acompanhamento.",
  },
  {
    icon: RefreshCw,
    title: "Venda sem recompra",
    description:
      "A loja investe para atrair novos clientes, mas não cria rotina para reativar base, sazonalidade e categorias.",
  },
];

const deliverables = [
  {
    icon: Megaphone,
    text: "Campanhas locais e regionais para Google, Facebook, Instagram e WhatsApp",
  },
  {
    icon: Store,
    text: "Catálogo, páginas de produto, ofertas e materiais de apoio para venda",
  },
  {
    icon: WhatsAppIcon,
    text: "Integração entre tráfego, WhatsApp, loja física e equipe comercial",
  },
  {
    icon: UserCheck,
    text: "Treinamento de vendas para o time com técnicas de neurovendas, atendimento e fidelização",
  },
  {
    icon: RefreshCw,
    text: "Planejamento por sazonalidade, categoria, ticket médio e margem",
  },
  {
    icon: LayoutDashboard,
    text: "Dashboard com visitas, leads, vendas, ticket e receita por canal",
  },
  {
    icon: BarChart3,
    text: "Rotina de otimização com leitura de campanha, atendimento e estoque",
  },
  {
    icon: CalendarDays,
    text: "Calendário comercial para datas sazonais, promoções, campanhas e ações de loja",
  },
  {
    icon: Palette,
    text: "Materiais de venda para WhatsApp, balcão, campanhas, vitrines e equipe comercial",
  },
];

const matrix = [
  { icon: MapPin, label: "Google e Maps", role: "Captura demanda local", score: "Alta intenção" },
  { icon: Megaphone, label: "Instagram e Facebook", role: "Gera desejo e fluxo", score: "Presença regional" },
  { icon: WhatsAppIcon, label: "WhatsApp", role: "Transforma interesse em venda", score: "Atendimento" },
  { icon: LayoutDashboard, label: "Sazonalidade", role: "Planeja campanha e estoque", score: "Previsibilidade" },
];

const faqs = [
  {
    question: "Vocês fazem marketing para loja física?",
    answer:
      "Sim. A estratégia considera fluxo para loja, WhatsApp, catálogo, campanhas locais e materiais de apoio para o time vender melhor.",
  },
  {
    question: "Funciona para varejo que vende no físico e no digital?",
    answer:
      "Sim. Esse é justamente o cenário mais comum: conectar site, catálogo, WhatsApp, loja física e equipe comercial em uma mesma leitura de performance.",
  },
  {
    question: "Vocês trabalham com Google Meu Negócio e Google Maps?",
    answer:
      "Avaliamos presença local, busca, Maps e campanhas quando isso impacta fluxo, ligações, rotas, WhatsApp e visitas qualificadas.",
  },
  {
    question: "Dá para medir venda que começa no digital e fecha na loja?",
    answer:
      "Nem sempre com 100% de precisão, mas dá para criar rotinas de mensuração, origem do atendimento, campanhas, cupons, WhatsApp e leitura comercial.",
  },
  {
    question: "Em quanto tempo dá para ver resultado?",
    answer:
      "Depende do histórico, região, ticket, equipe e maturidade digital. O diagnóstico mostra se o gargalo está em tráfego, oferta, atendimento, operação ou recompra.",
  },
];

const storeTypes = [
  "Loja física",
  "Loja física + e-commerce",
  "Catálogo/WhatsApp",
  "Rede de lojas",
  "Franquia",
  "Outro",
];

const revenueRanges = [
  "Até R$100 mil/mês",
  "R$100 mil a R$300 mil/mês",
  "R$300 mil a R$800 mil/mês",
  "R$800 mil a R$2M/mês",
  "Acima de R$2M/mês",
];

const retailChallenges = [
  "Baixo fluxo na loja",
  "WhatsApp não converte",
  "Tráfego sem venda",
  "Pouca recompra",
  "Ticket médio baixo",
  "Campanhas sem previsibilidade",
  "Dificuldade de medir origem das vendas",
];

const mediaInvestment = [
  "Ainda não invisto",
  "Até R$5 mil/mês",
  "R$5 mil a R$20 mil/mês",
  "R$20 mil a R$50 mil/mês",
  "Acima de R$50 mil/mês",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/32 outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors duration-200 focus:border-[#6575FF]/45 focus:bg-white/[0.08]";

const labelClass =
  "text-[10px] font-black uppercase tracking-[0.25em] text-white/35";

export function RetailLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    storeType: "",
    revenue: "",
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
        formName: "Diagnóstico Varejo",
        location: "marketing-para-varejo",
        formData: { ...formData, ...selected },
      });
    }

    const message = `Olá! Vim pela página de marketing para varejo da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Tipo de operação:* ${selected.storeType}
*Faturamento mensal:* ${selected.revenue}
*Principal gargalo:* ${selected.challenge}
*Investimento em mídia:* ${selected.investment}

Quero diagnosticar minha operação de varejo.`;

    setTimeout(() => {
      window.open(`https://wa.me/5541987112003?text=${encodeURIComponent(message)}`, "_blank");
    }, 1200);
  };

  return (
    <main className="bg-background">
      <section className="relative flex items-center overflow-hidden bg-background pt-10 pb-16 lg:min-h-[88vh] lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(86,254,213,0.10),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(101,117,255,0.08),transparent_40%)]" />
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="updo-badge mb-8 inline-flex max-w-full items-center rounded-full border px-3 py-1 text-center text-[10px] font-black uppercase leading-relaxed tracking-[0.2em]">
                Marketing para varejo
              </span>
              <h1 className="font-heading text-4xl font-black leading-[1.14] tracking-tight text-foreground md:text-5xl lg:text-5xl">
                Marketing para varejo que conecta tráfego local, WhatsApp e venda.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Estratégia para lojas físicas e operações híbridas que precisam
                gerar fluxo, vender melhor no atendimento e crescer com ticket
                médio, recompra e previsibilidade.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Campanhas locais conectadas a loja, WhatsApp e catálogo",
                  "Atendimento comercial com mais processo e menos perda",
                  "Planejamento por sazonalidade, categoria, margem e ticket",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10">
                      <span className="h-2 w-2 rounded-full bg-[#6575FF]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-12 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:gap-6">
                <Link
                  href="#contato"
                  className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
                >
                  Diagnosticar meu varejo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/cases/varejo"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-border/70 px-7 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
                >
                  Ver case real
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-2xl transition-all duration-700 hover:border-[#6575FF]/30">
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    Case varejo
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground">
                    Crescimento com loja física, digital e atendimento conectados.
                  </h2>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {channels.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/50 bg-muted/50 p-4 transition-colors hover:border-[#6575FF]/35">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-3 font-heading text-3xl font-black tracking-tight text-foreground">
                        {item.value}
                      </p>
                      <p className="mt-2 text-[10px] font-medium leading-tight text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#6575FF]/20 bg-[#6575FF]/[0.06] p-5">
                  <p className="text-sm font-semibold leading-relaxed text-foreground/75">
                    O varejo cresce quando mídia, catálogo, WhatsApp, loja e
                    equipe comercial param de operar como partes soltas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Gargalos do varejo
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Onde o marketing para varejo perde vendas entre anúncio, WhatsApp e loja física.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {blockers.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que entregamos
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Marketing para loja física e varejo digital com mais fluxo, atendimento e recompra.
            </h2>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.text} className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-20 flex justify-center">
            <Link href="#contato" className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10">
              Quero diagnosticar meu varejo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Sistema de crescimento
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Da busca local ao WhatsApp: o que precisa estar conectado.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A venda no varejo não acontece em um único canal. O cliente
                pesquisa, chama no WhatsApp, compara, visita a loja e volta em
                datas sazonais. A estratégia precisa enxergar esse caminho.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {matrix.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-5 transition-colors hover:border-[#6575FF]/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-black tracking-tight text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {item.role}
                    </p>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-[#6575FF]">
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Case real
              </span>
              <h2 className="mt-5 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Case de marketing para varejo: crescimento de faturamento após 20 anos de operação.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
                Reconstruímos a fundação digital, conectamos catálogo, CRM,
                WhatsApp e planejamento sazonal para tirar um varejista do
                platô de faturamento.
              </p>
            </div>

            <div className="rounded-2xl border border-[#6575FF]/15 bg-[#6575FF]/[0.06] p-5 lg:p-6">
              <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
              {[
                ["+87%", "faturamento"],
                ["+1.400%", "tráfego mensal"],
                ["+35%", "ticket médio"],
              ].map(([value, label]) => (
                <div key={label} className="border-white/10 text-left sm:border-l sm:first:border-l-0 sm:pl-5 sm:first:pl-0">
                  <p className="font-heading text-2xl font-black tracking-tight text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] font-medium leading-tight text-white/40">
                    {label}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/cases/varejo" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 active:scale-95">
              Ver case completo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contato" className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 active:scale-95">
              Diagnosticar meu varejo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Diagnóstico varejo
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Vamos entender onde seu varejo perde venda.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
                Preencha os dados para analisarmos fluxo, canais, atendimento,
                ticket, recompra e previsibilidade.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Nome" htmlFor="nome">
                    <input id="nome" required value={formData.nome} onChange={(event) => setFormData((prev) => ({ ...prev, nome: event.target.value }))} placeholder="Como prefere ser chamado" className={inputClass} />
                  </FormField>
                  <FormField label="Empresa" htmlFor="empresa" icon={Briefcase}>
                    <input id="empresa" required value={formData.empresa} onChange={(event) => setFormData((prev) => ({ ...prev, empresa: event.target.value }))} placeholder="Nome da loja" className={inputClass} />
                  </FormField>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="E-mail" htmlFor="email">
                    <input id="email" type="email" required value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} placeholder="seu@email.com" className={inputClass} />
                  </FormField>
                  <FormField label="Telefone" htmlFor="telefone">
                    <input id="telefone" type="tel" required value={formData.telefone} onChange={(event) => setFormData((prev) => ({ ...prev, telefone: formatPhone(event.target.value) }))} placeholder="(41) 99999-9999" maxLength={15} className={inputClass} />
                  </FormField>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Tipo de operação" htmlFor="storeType" icon={Store}>
                    <SelectField id="storeType" value={selected.storeType} placeholder="Selecione o tipo..." options={storeTypes} onChange={(value) => setSelected((prev) => ({ ...prev, storeType: value }))} />
                  </FormField>
                  <FormField label="Faturamento mensal" htmlFor="revenue" icon={BarChart3}>
                    <SelectField id="revenue" value={selected.revenue} placeholder="Selecione a faixa..." options={revenueRanges} onChange={(value) => setSelected((prev) => ({ ...prev, revenue: value }))} />
                  </FormField>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField label="Principal gargalo" htmlFor="challenge" icon={Target}>
                    <SelectField id="challenge" value={selected.challenge} placeholder="Selecione o gargalo..." options={retailChallenges} onChange={(value) => setSelected((prev) => ({ ...prev, challenge: value }))} />
                  </FormField>
                  <FormField label="Investimento em mídia" htmlFor="investment" icon={CreditCard}>
                    <SelectField id="investment" value={selected.investment} placeholder="Selecione o investimento..." options={mediaInvestment} onChange={(value) => setSelected((prev) => ({ ...prev, investment: value }))} />
                  </FormField>
                </div>
                <div className="flex flex-col items-center border-t border-white/[0.08] pt-6">
                  <button type="submit" className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10">
                    Diagnosticar meu varejo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
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
                  Estamos abrindo o WhatsApp para continuar o diagnóstico do
                  seu varejo.
                </p>
                <p className="mt-6 text-sm font-bold text-[#6575FF]">
                  Redirecionando...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                Dúvidas sobre marketing para varejo, tráfego local e WhatsApp.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
                Antes de colocar mais verba no varejo, vale entender fluxo,
                atendimento, loja física, WhatsApp, estoque e recompra.
              </p>
              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium italic text-slate-500">
                  "O diagnóstico ajuda a separar problema de mídia, problema de
                  atendimento e problema de operação."
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
                    <span className={cn("text-lg font-bold tracking-tight transition-colors", openFaq === index ? "text-[#6575FF]" : "text-foreground")}>
                      {faq.question}
                    </span>
                    <span className={cn("flex h-8 w-8 min-w-8 items-center justify-center rounded-full transition-all", openFaq === index ? "rotate-180 bg-[#6575FF] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]")}>
                      {openFaq === index ? <Plus className="h-4 w-4 rotate-45" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className={cn("grid transition-all duration-300 ease-in-out", openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
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
      <select id={id} required value={value} onChange={(event) => onChange(event.target.value)} className={selectClass} style={{ colorScheme: "dark" }}>
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
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.224-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884M20.52 3.449C18.258 1.186 15.252 0 12.052 0 5.495 0 .16 5.334.157 11.892c-.001 2.096.547 4.142 1.588 5.946L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.557 0 11.892-5.334 11.895-11.893A11.821 11.821 0 0 0 20.52 3.45" />
    </svg>
  );
}
