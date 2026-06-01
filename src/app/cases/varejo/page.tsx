import type { Metadata } from "next";
import Script from "next/script";
import { CaseVarejoClient } from "@/components/sections/cases/varejo-case";

export const metadata: Metadata = {
  title: "Case de Marketing para Varejo | +87% de Faturamento",
  description:
    "Case de marketing para varejo: +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022 para uma operação varejista.",
  alternates: {
    canonical: "https://updo.com.br/cases/varejo",
  },
  openGraph: {
    title: "Case de Marketing para Varejo | +87% de Faturamento",
    description:
      "+87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022 para uma operação varejista.",
    url: "https://updo.com.br/cases/varejo",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Case de Marketing para Varejo | +87% de Faturamento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case de Marketing para Varejo | +87% de Faturamento",
    description:
      "+87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022 para uma operação varejista.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case de Marketing para Varejo | +87% de Faturamento",
  description:
    "Case de marketing para varejo: +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022 para uma operação varejista.",
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
