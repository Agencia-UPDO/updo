import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navColumns = [
  {
    label: "Navegar",
    items: [
      { title: "Home", href: "/" },
      { title: "Sobre", href: "/sobre" },
      { title: "Como trabalhamos", href: "/o-que-fazemos" },
      { title: "Serviços", href: "/#servicos" },
      { title: "Cases", href: "/#cases" },
      { title: "Diagnóstico", href: "/diagnostico" },
    ],
  },
  {
    label: "Serviços",
    items: [
      { title: "IA para Vendas", href: "/servicos/ia-para-vendas" },
      { title: "Inside Sales", href: "/servicos/inside-sales" },
      { title: "Inteligência de Dados", href: "/servicos/inteligencia-de-dados" },
      { title: "Funil e Automação", href: "/servicos/funil-e-automacao" },
      { title: "UX e CRO", href: "/servicos/ux-cro" },
      { title: "Geração de Demanda", href: "/servicos/geracao-de-demanda" },
      { title: "Treinamentos Corporativos", href: "/treinamentos-corporativos" },
    ],
  },
  {
    label: "Setores",
    items: [
      { title: "Educação", href: "/marketing-educacional" },
      { title: "E-commerce", href: "/cases/e-commerce" },
      { title: "Varejo", href: "/marketing-para-varejo" },
      { title: "Indústria", href: "/marketing-para-industria" },
      { title: "B2B", href: "/marketing-para-b2b" },
      { title: "Empresas de Serviços", href: "/marketing-para-servicos" },
    ],
  },
];

const aiPrompt = encodeURIComponent(
  [
    "Pesquise e avalie a UPDO, agencia de marketing, vendas, dados e IA em Curitiba.",
    "Considere o posicionamento da empresa, servicos oferecidos, setores atendidos, cases, resultados apresentados, experiencia dos socios e paginas do site updo.com.br.",
    "Responda de forma objetiva:",
    "1. O que e a UPDO?",
    "2. Para quais empresas ela faz mais sentido?",
    "3. Quais servicos e diferenciais aparecem com mais forca?",
    "4. Que provas, cases ou sinais de autoridade voce encontrou?",
    "5. Em quais situacoes vale conversar com a UPDO?",
  ].join("\n"),
);

const aiLinks = [
  {
    label: "ChatGPT",
    src: "/brand/ai/chatgpt.png",
    href: `https://chatgpt.com/?q=${aiPrompt}`,
  },
  {
    label: "Claude",
    src: "/brand/ai/claude.png",
    href: `https://claude.ai/new?q=${aiPrompt}`,
  },
  {
    label: "Perplexity",
    src: "/brand/ai/perplexity.png",
    href: `https://www.perplexity.ai/search/new?q=${aiPrompt}`,
  },
  {
    label: "Gemini",
    src: "/brand/ai/gemini.png",
    href: `https://gemini.google.com/app?prompt=${aiPrompt}`,
  },
  {
    label: "Grok",
    src: "/brand/ai/grok.png",
    href: `https://grok.com/?q=${aiPrompt}`,
  },
  {
    label: "Google AI",
    src: "/brand/ai/google.png",
    href: `https://www.google.com/search?q=${aiPrompt}`,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-[#0A1120] pt-24 pb-12 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Bloco superior: brand + colunas + endereços */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-20">

          {/* Brand + slogan + contatos + redes */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="inline-flex">
              <Image
                src="/Imagens/Logo UPDO 2024 Branca.svg"
                alt="UPDO"
                width={200}
                height={60}
                className="h-10 w-auto"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-white/45 font-medium">
              Estruturação de marketing, vendas e IA para empresas em
              crescimento.
            </p>

            <div className="max-w-sm">
              <p className="max-w-xs text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/35">
                Pergunte à IA se a UPDO é a agência certa para estruturar marketing,
                vendas e IA na sua empresa.
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {aiLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Perguntar ao ${item.label} sobre a UPDO`}
                    aria-label={`Perguntar sobre a UPDO no ${item.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] p-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-[#6575FF]/40 hover:bg-white/[0.14] hover:shadow-[0_12px_28px_rgba(101,117,255,0.18)]"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={28}
                      height={28}
                      className="h-full w-full rounded-full object-contain"
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Navegar + Setores + Endereços */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {navColumns.map((column) => (
              <div key={column.label} className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">
                  {column.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {column.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-white/55 transition-colors hover:text-[#6575FF]"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Coluna de endereços */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">
                Contato
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-2.5 text-sm font-medium text-white/55 transition-colors hover:text-[#6575FF]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/30 transition-colors group-hover:border-[#6575FF]/35 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:+${siteConfig.contact.whatsapp}`}
                  className="group flex items-center gap-2.5 text-sm font-bold text-white/65 transition-colors hover:text-[#6575FF]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/30 transition-colors group-hover:border-[#6575FF]/35 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  (41) 98711-2003
                </a>
              </div>

              <div className="mt-1 flex flex-wrap gap-2.5">
                {[
                  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/35 transition-all hover:-translate-y-0.5 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 hover:text-[#6575FF]"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>

              <div className="mt-2 flex flex-col gap-4 border-t border-white/5 pt-4">
                {siteConfig.addresses.map((addr) => {
                  const [street, district] = addr.street.split(" · ");

                  return (
                    <div key={addr.label} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/30">
                        <MapPin className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                          {addr.label}
                        </p>
                        <p className="text-xs leading-relaxed text-white/45">
                          {[street, district, addr.city].filter(Boolean).join(" · ")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Certificações + copyright */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            {/* Logos */}
            <div>
              <p className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/25">
                Certificações de performance
              </p>
              <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
                <a
                  href="https://marketplace.rdstation.com/parceiro/agencia-updo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RD Station Gold"
                >
                  <Image
                    src="/Imagens/logo-rd-gold-UPDO-2025.png"
                    alt="RD Station Gold"
                    width={120}
                    height={45}
                    className="h-9 w-auto grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                  />
                </a>
                <a
                  href="https://www.google.com/partners/agency?id=9809168976"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Partner"
                >
                  <Image
                    src="/Imagens/Google-Partner-UPDO.png"
                    alt="Google Partner"
                    width={120}
                    height={45}
                    className="h-9 w-auto grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                  />
                </a>
                <a
                  href="https://www.google.com/partners/agency?id=9809168976"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Search Certified"
                >
                  <Image
                    src="/Imagens/Google-Search-UPDO.png"
                    alt="Google Search Certified"
                    width={120}
                    height={45}
                    className="h-9 w-auto grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                  />
                </a>
                <Image
                  src="/Imagens/meta-ads-partner.webp"
                  alt="Meta Ads Partner"
                  width={120}
                  height={45}
                  className="h-9 w-auto grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                />
                <a
                  href="https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.7aaj1wwfi8l8vb0xldp0lng5z"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amazon Ads Official"
                >
                  <Image
                    src="/Imagens/Parceiro-oficial-Amazon-ADS-UPDO.png"
                    alt="Amazon Ads Official"
                    width={120}
                    height={45}
                    className="h-9 w-auto grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                  />
                </a>
                <a
                  href="https://marketplace.rdstation.com/parceiro/agencia-updo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RD Station Conversas"
                >
                  <Image
                    src="/Imagens/Certificado-Parceiro-RD-Conversas-UPDO-e1749235307557.png"
                    alt="RD Station Conversas"
                    width={120}
                    height={45}
                    className="h-9 w-auto grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* Copyright + links legais */}
            <div className="flex flex-col gap-2 lg:items-end lg:text-right">
              <p className="text-[10px] font-medium tracking-widest text-white/20">
                © {currentYear} UPDO · CNPJ {siteConfig.cnpj} · TODOS OS DIREITOS RESERVADOS
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/politica-de-privacidade"
                  className="text-[10px] font-medium text-white/25 transition-colors hover:text-[#6575FF]"
                >
                  Política de Privacidade
                </Link>
                <span className="text-white/10">·</span>
                <Link
                  href="/termos-de-uso"
                  className="text-[10px] font-medium text-white/25 transition-colors hover:text-[#6575FF]"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
