import type { Metadata } from "next";
import Script from "next/script";
import { CaseEducacaoClient } from "@/components/sections/cases/educacao-case";

export const metadata: Metadata = {
  title: "Case Educação | ROAS 20x e +211% de Leads",
  description:
    "Como a UPDO transformou uma instituição de ensino superior com quase 30 anos de história: do platô de crescimento a ROAS 20x, +211% de leads e vencedores do Prêmio RD Station 2024.",
  alternates: {
    canonical: "https://updo.com.br/cases/educacao",
  },
  openGraph: {
    title: "Case Educação | ROAS 20x e +211% de Leads | UPDO",
    description:
      "Como a UPDO transformou uma instituição de ensino superior com quase 30 anos de história: do platô de crescimento a ROAS 20x, +211% de leads e vencedores do Prêmio RD Station 2024.",
    url: "https://updo.com.br/cases/educacao",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Case Educação | ROAS 20x e +211% de Leads | UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Educação | ROAS 20x e +211% de Leads | UPDO",
    description:
      "Como a UPDO transformou uma instituição de ensino superior com quase 30 anos de história: do platô de crescimento a ROAS 20x, +211% de leads e vencedores do Prêmio RD Station 2024.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case Educação | ROAS 20x e +211% de Leads",
  description:
    "Como a UPDO transformou uma instituição de ensino superior com quase 30 anos de história: do platô de crescimento a ROAS 20x, +211% de leads e vencedores do Prêmio RD Station 2024.",
  url: "https://updo.com.br/cases/educacao",
  image: "https://updo.com.br/Imagens/sala-cheia.jpg",
  author: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
  },
  publisher: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
    logo: {
      "@type": "ImageObject",
      url: "https://updo.com.br/Imagens/Logo%20UPDO%202024%20Branca.svg",
    },
  },
};

export default function CaseEducacaoPage() {
  return (
    <>
      <Script
        id="schema-article-educacao"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CaseEducacaoClient />
    </>
  );
}
