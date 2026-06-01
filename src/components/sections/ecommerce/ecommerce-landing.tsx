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
  Lock,
  MousePointerClick,
  Plus,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
} from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const funnel = [
  { stage: "Impressões", value: "6.333.690", pct: 100, detail: "CPM R$ 7,45" },
  { stage: "Cliques", value: "51.679", pct: 74, detail: "CPC R$ 0,91" },
  { stage: "Visualizações", value: "40.567", pct: 58, detail: "78,5% avançaram" },
  { stage: "Carrinho", value: "20.536", pct: 42, detail: "39,7% add to cart" },
  { stage: "Checkout", value: "2.420", pct: 25, detail: "11,8% checkout" },
  { stage: "Vendas", value: "1.803", pct: 16, detail: "4,45% conversão" },
];

const blockers = [
  {
    icon: MousePointerClick,
    title: "Tráfego pago que não compra",
    description:
      "A loja recebe cliques, mas a campanha não separa curiosidade, comparação e intenção real de compra.",
  },
  {
    icon: CreditCard,
    title: "Carrinho e checkout vazando margem",
    description:
      "Frete, prazo, prova, oferta e experiência derrubam pedidos antes do pagamento.",
  },
  {
    icon: RefreshCw,
    title: "Recompra sem rotina",
    description:
      "A loja depende de novos clientes todos os meses porque não ativa base, pós-compra, LTV e recorrência.",
  },
];

const services = [
  "Campanhas de Google Ads, Shopping, Meta e TikTok por margem, categoria e intenção",
  "Otimização de página de produto, oferta, frete, prova social, carrinho e checkout",
  "Remarketing, carrinho abandonado, pós-compra e réguas de recompra",
  "Leitura de CAC, ROAS, ticket médio, conversão, LTV e receita por canal",
];

const deliverables = [
  {
    icon: ShoppingCart,
    title: "Mídia paga para loja virtual",
    description:
      "Google Ads, Google Shopping, Facebook, Instagram e TikTok Ads quando fizer sentido para produto, margem e intenção de compra.",
  },
  {
    icon: MousePointerClick,
    title: "Criativos, ofertas e testes",
    description:
      "Testes de ângulo, promessa, produto, categoria e oferta para descobrir o que gera clique qualificado e pedido real.",
  },
  {
    icon: CreditCard,
    title: "Conversão e checkout",
    description:
      "Leitura de página de produto, prova social, frete, carrinho, checkout e pontos que travam a compra.",
  },
  {
    icon: RefreshCw,
    title: "Remarketing e recompra",
    description:
      "Estratégia para carrinho abandonado, visitantes recorrentes, base de clientes, pós-compra e novas compras.",
  },
  {
    icon: BarChart3,
    title: "Dados de performance",
    description:
      "Acompanhamento de CAC, ROAS, ticket médio, taxa de conversão, LTV e receita por canal.",
  },
  {
    icon: Target,
    title: "Rotina de otimização",
    description:
      "Leitura contínua de campanha, criativo, oferta e funil para ajustar investimento com mais clareza.",
  },
];

const matrix = [
  { icon: ShoppingCart, label: "Busca e Shopping", role: "Captura quem já quer comprar", score: "Alta intenção" },
  { icon: MousePointerClick, label: "Meta e TikTok", role: "Gera desejo, prova e remarketing", score: "Escala criativa" },
  { icon: CreditCard, label: "Checkout", role: "Reduz vazamento de pedidos", score: "Margem protegida" },
  { icon: RefreshCw, label: "Pós-compra", role: "Aumenta LTV e recompra", score: "Base ativa" },
];

const faqs = [
  {
    question: "Vocês fazem gestão de tráfego para e-commerce?",
    answer:
      "Sim, mas a gestão não fica isolada no anúncio. Olhamos canal, categoria, margem, página de produto, carrinho, checkout e recompra para entender onde está o gargalo real.",
  },
  {
    question: "Trabalham com Google Shopping?",
    answer:
      "Sim. Google Shopping pode ser um canal forte para capturar demanda com intenção de compra, principalmente quando catálogo, feed, preço e margem estão bem organizados.",
  },
  {
    question: "Faz sentido anunciar no TikTok para minha loja?",
    answer:
      "Depende do produto, margem, criativo e ciclo de compra. TikTok Ads pode funcionar muito bem para descoberta e desejo, mas não deve entrar só porque está na moda.",
  },
  {
    question: "Vocês trabalham com Facebook e Instagram Ads?",
    answer:
      "Sim. Facebook e Instagram Ads entram para descoberta, remarketing, prova de produto e escala criativa, sempre conectados a ROAS, CAC e faturamento.",
  },
  {
    question: "Vocês mexem no site ou só nos anúncios?",
    answer:
      "Avaliamos a jornada da loja. Se o problema estiver na página de produto, oferta, frete, carrinho ou checkout, isso entra no diagnóstico e no plano de otimização.",
  },
  {
    question: "Em quanto tempo dá para ver resultado?",
    answer:
      "Depende do histórico da conta, volume de dados, ticket, margem e maturidade da loja. O primeiro passo é identificar se o problema está em tráfego, oferta, conversão ou recompra.",
  },
];

const platforms = ["Shopify", "Nuvemshop", "WooCommerce", "Tray", "VTEX", "Magento", "Outra"];

const revenueRanges = [
  "Até R$50 mil/mês",
  "R$50 mil a R$150 mil/mês",
  "R$150 mil a R$500 mil/mês",
  "R$500 mil a R$1M/mês",
  "Acima de R$1M/mês",
];

const ecommerceChallenges = [
  "Tráfego não converte",
  "Carrinho abandonado",
  "Checkout com baixa conversão",
  "CAC alto",
  "ROAS instável",
  "Pouca recompra",
  "Margem apertada",
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

const labelClass = "text-[10px] font-black uppercase tracking-[0.25em] text-white/45";

export function EcommerceLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });
  const [selected, setSelected] = React.useState({
    platform: "",
    revenue: "",
    challenge: "",
    investment: "",
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
        formName: "Diagnóstico E-commerce",
        location: "marketing-para-ecommerce",
        formData: { ...formData, ...selected },
      });

      const message = `Olá! Vim pela página de marketing para e-commerce da UPDO:

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Plataforma:* ${selected.platform}
*Faturamento mensal:* ${selected.revenue}
*Principal gargalo:* ${selected.challenge}
*Investimento em mídia:* ${selected.investment}

Quero diagnosticar minha loja virtual.`;

      setTimeout(() => {
        window.open(`https://wa.me/5541987112003?text=${encodeURIComponent(message)}`, "_blank");
      }, 1200);
    }
  };

  return (
    <main className="bg-background">
      <section className="relative isolate flex items-center overflow-hidden bg-background pt-10 pb-16 lg:min-h-[88vh] lg:py-28">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,254,213,0.10),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(101,117,255,0.10),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex flex-col items-start text-left"
            >
              <span className="updo-badge mb-8 inline-flex w-fit max-w-full items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase leading-relaxed tracking-[0.2em]">
                Marketing para e-commerce
              </span>
              <h1 className="max-w-2xl font-heading text-4xl font-black leading-[1.14] tracking-tight text-foreground md:text-5xl lg:text-5xl">
                Marketing para e-commerce que conecta tráfego, checkout e recompra.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Estruturamos aquisição, criativos, oferta, CRO, dados e pós-compra
                para sua loja crescer sem entregar margem para o algoritmo.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "Campanhas orientadas por margem e intenção de compra",
                  "Produto, carrinho e checkout com menos vazamento",
                  "Remarketing e recompra conectados ao faturamento",
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
                  Diagnosticar minha loja
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/cases/e-commerce"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-border/70 px-7 text-sm font-bold text-foreground transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
                >
                  Ver case real
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="hidden lg:block"
            >
              <FunnelVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader eyebrow="Gargalos comuns" title="Onde sua loja virtual perde margem." />
          <div className="grid gap-4 md:grid-cols-3">
            {blockers.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="O que entregamos"
            title="Gestão de crescimento para vender mais com margem."
            description="A entrega conecta canal, criativo, oferta, checkout e recompra. O objetivo é fazer a loja crescer com leitura de negócio, não só com mais verba em anúncio."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="#contato"
              className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:px-10"
            >
              Quero diagnosticar minha loja
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6575FF]/[0.10] blur-[100px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Sistema de crescimento
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                Do anúncio ao checkout: o que precisa estar conectado.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/55">
                Escala saudável vem quando campanha, página de produto, carrinho,
                checkout, pós-compra e dados apontam para a mesma meta.
              </p>
              <ul className="mt-8 grid gap-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-sm font-medium text-white/55">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6575FF]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12">
              <div>
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Case real
                </span>
                <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                  De R$ 3k a R$ 211k de faturamento mensal.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Em uma loja virtual de moda infantil, estruturamos persona,
                  campanhas, funil, carrinho e remarketing para escalar vendas em 60 dias.
                </p>
                <Link
                  href="/cases/e-commerce"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all hover:opacity-80"
                >
                  Ver case completo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="rounded-2xl border border-[#6575FF]/15 bg-[#6575FF]/[0.035] p-5 lg:p-6">
                <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
                {[
                  ["+6.900%", "vendas mensais"],
                  ["4.7x", "ROAS geral"],
                  ["4,45%", "conversão"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-border/70 text-left sm:border-l sm:first:border-l-0 sm:pl-5 sm:first:pl-0"
                  >
                    <p className="font-heading text-2xl font-black tracking-tight text-foreground">
                      {value}
                    </p>
                    <p className="mt-2 text-xs font-bold leading-tight text-muted-foreground">{label}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        isSubmitted={isSubmitted}
        formData={formData}
        selected={selected}
        setFormData={setFormData}
        setSelected={setSelected}
        formatPhone={formatPhone}
        handleSubmit={handleSubmit}
      />

      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading text-base font-black leading-snug tracking-tight text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}

function FunnelVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-2xl transition-all duration-700 hover:border-[#6575FF]/30">
      <div className="border-b border-border pb-5">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Case e-commerce
        </p>
        <h3 className="mt-2 font-heading text-2xl font-black tracking-tight text-foreground">
          Do anúncio ao pedido, com leitura de cada etapa.
        </h3>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {funnel.map((item) => (
          <div key={item.stage}>
            <div className="mb-2 flex items-center justify-between text-xs font-bold">
              <span className="text-foreground">{item.stage}</span>
              <span className="text-muted-foreground">{item.value}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-[#6575FF]" style={{ width: `${item.pct}%` }} />
            </div>
            <p className="mt-1 text-[10px] font-medium text-muted-foreground/70">{item.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
        <Metric label="ROAS geral" value="4.7x" trend="case real" />
        <Metric label="CAC Google" value="-50%" trend="vs. canais" />
      </div>
    </div>
  );
}

function ContactSection({
  isSubmitted,
  formData,
  selected,
  setFormData,
  setSelected,
  formatPhone,
  handleSubmit,
}: {
  isSubmitted: boolean;
  formData: { nome: string; empresa: string; email: string; telefone: string };
  selected: { platform: string; revenue: string; challenge: string; investment: string };
  setFormData: React.Dispatch<React.SetStateAction<{ nome: string; empresa: string; email: string; telefone: string }>>;
  setSelected: React.Dispatch<React.SetStateAction<{ platform: string; revenue: string; challenge: string; investment: string }>>;
  formatPhone: (value: string) => string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#07111F] py-18 lg:py-28">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Diagnóstico e-commerce
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Vamos entender onde sua loja perde venda.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/45">
              Preencha para analisarmos plataforma, faturamento, mídia, conversão e recompra com mais contexto.
            </p>
          </div>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Nome" htmlFor="nome">
                  <input id="nome" required value={formData.nome} onChange={(event) => setFormData((prev) => ({ ...prev, nome: event.target.value }))} placeholder="Como prefere ser chamado" className={inputClass} />
                </FormField>
                <FormField label="Empresa" htmlFor="empresa" icon={Briefcase}>
                  <input id="empresa" required value={formData.empresa} onChange={(event) => setFormData((prev) => ({ ...prev, empresa: event.target.value }))} placeholder="Nome da loja" className={inputClass} />
                </FormField>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="E-mail" htmlFor="email">
                  <input id="email" type="email" required value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} placeholder="seu@email.com" className={inputClass} />
                </FormField>
                <FormField label="Telefone" htmlFor="telefone">
                  <input id="telefone" type="tel" required value={formData.telefone} onChange={(event) => setFormData((prev) => ({ ...prev, telefone: formatPhone(event.target.value) }))} placeholder="(41) 99999-9999" maxLength={15} className={inputClass} />
                </FormField>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Plataforma" htmlFor="platform" icon={ShoppingCart}>
                  <SelectField id="platform" value={selected.platform} placeholder="Selecione a plataforma..." options={platforms} onChange={(value) => setSelected((prev) => ({ ...prev, platform: value }))} />
                </FormField>
                <FormField label="Faturamento mensal" htmlFor="revenue" icon={BarChart3}>
                  <SelectField id="revenue" value={selected.revenue} placeholder="Selecione a faixa..." options={revenueRanges} onChange={(value) => setSelected((prev) => ({ ...prev, revenue: value }))} />
                </FormField>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Principal gargalo" htmlFor="challenge" icon={Target}>
                  <SelectField id="challenge" value={selected.challenge} placeholder="Selecione o gargalo..." options={ecommerceChallenges} onChange={(value) => setSelected((prev) => ({ ...prev, challenge: value }))} />
                </FormField>
                <FormField label="Investimento em mídia" htmlFor="investment" icon={CreditCard}>
                  <SelectField id="investment" value={selected.investment} placeholder="Selecione o investimento..." options={mediaInvestment} onChange={(value) => setSelected((prev) => ({ ...prev, investment: value }))} />
                </FormField>
              </div>
              <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-4">
                <p className="text-center text-sm leading-relaxed text-white/45">
                  Com base nas suas respostas, preparamos um diagnóstico mais preciso da loja.
                </p>
                <button type="submit" className="mx-auto inline-flex h-13 w-full max-w-xs cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-center text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10">
                  Diagnosticar minha loja
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
              <h3 className="font-heading text-2xl font-black tracking-tight text-white">Formulário enviado.</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                Estamos abrindo o WhatsApp para continuar o diagnóstico.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FaqSection({
  openFaq,
  setOpenFaq,
}: {
  openFaq: number | null;
  setOpenFaq: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <section className="bg-white py-18 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Dúvidas frequentes
            </span>
            <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Dúvidas travam decisões de escala.
            </h2>
            <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
              Antes de aumentar verba, vale entender canal, margem, oferta, checkout e recompra.
            </p>
            <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
              <p className="text-sm font-medium italic text-slate-500">
                "O diagnóstico existe para separar impressão de evidência."
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
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left">
                  <span className={cn("text-lg font-bold tracking-tight transition-colors", openFaq === index ? "text-[#6575FF]" : "text-foreground")}>
                    {faq.question}
                  </span>
                  <span className={cn("flex h-8 w-8 min-w-8 items-center justify-center rounded-full transition-all", openFaq === index ? "rotate-180 bg-[#6575FF] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]")}>
                    {openFaq === index ? <Plus className="h-4 w-4 rotate-45" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={cn("grid transition-all duration-300 ease-in-out", openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
    <select id={id} required value={value} onChange={(event) => onChange(event.target.value)} className={selectClass} style={{ colorScheme: "dark" }}>
      <option value="" disabled className="bg-[#0f1117] text-white/40">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option} className="bg-[#0f1117] text-white">{option}</option>
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

function Metric({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl border border-border/50 bg-muted/50 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Target className="h-4 w-4 text-[#6575FF]" />
        <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      </div>
      <p className="font-heading text-xl font-black tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-[10px] font-bold text-[#6575FF]">{trend}</p>
    </div>
  );
}
