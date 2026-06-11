import type { Metadata } from "next";
import Script from "next/script";
import { CaseEducacaoClient } from "@/components/sections/cases/educacao-case";

export const metadata: Metadata = {
  title: "Case de Marketing Educacional | ROAS 20x e +211% de Leads",
  description:
    "Case de marketing educacional com ROAS 20x, +211% de leads e prêmio RD Station 2024 para instituição de ensino superior atendida pela UPDO.",
  alternates: {
    canonical: "https://updo.com.br/cases/educacao",
  },
  openGraph: {
    title: "Case de Marketing Educacional | ROAS 20x e +211% de Leads",
    description:
      "ROAS 20x, +211% de leads e prêmio RD Station 2024 para instituição de ensino superior atendida pela UPDO.",
    url: "https://updo.com.br/cases/educacao",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Case de Marketing Educacional | ROAS 20x e +211% de Leads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case de Marketing Educacional | ROAS 20x e +211% de Leads",
    description:
      "ROAS 20x, +211% de leads e prêmio RD Station 2024 para instituição de ensino superior atendida pela UPDO.",
    images: ["https://www.updo.com.br/Imagens/sala-cheia.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case de Marketing Educacional | ROAS 20x e +211% de Leads",
  description:
    "Case de marketing educacional com ROAS 20x, +211% de leads e prêmio RD Station 2024 para instituição de ensino superior atendida pela UPDO.",
  url: "https://updo.com.br/cases/educacao",
  image: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
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
