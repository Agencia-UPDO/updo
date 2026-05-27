import type { Metadata } from "next";
import Script from "next/script";
import { CaseVarejoClient } from "@/components/sections/cases/varejo-case";

export const metadata: Metadata = {
  title: "Case Varejo | +87% de Faturamento em 2 Anos",
  description:
    "Como a UPDO quebrou o teto histórico de um varejista paulistano com mais de 20 anos de mercado: +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022.",
  alternates: {
    canonical: "https://updo.com.br/cases/varejo",
  },
  openGraph: {
    title: "Case Varejo | +87% de Faturamento em 2 Anos | UPDO",
    description:
      "Como a UPDO quebrou o teto histórico de um varejista paulistano com mais de 20 anos de mercado: +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022.",
    url: "https://updo.com.br/cases/varejo",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Case Varejo | +87% de Faturamento em 2 Anos | UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Varejo | +87% de Faturamento em 2 Anos | UPDO",
    description:
      "Como a UPDO quebrou o teto histórico de um varejista paulistano com mais de 20 anos de mercado: +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case Varejo | +87% de Faturamento em 2 Anos",
  description:
    "Como a UPDO quebrou o teto histórico de um varejista paulistano com mais de 20 anos de mercado: +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022.",
  url: "https://updo.com.br/cases/varejo",
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

export default function CaseVarejoPage() {
  return (
    <>
      <Script
        id="schema-article-varejo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CaseVarejoClient />
    </>
  );
}
