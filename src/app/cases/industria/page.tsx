import type { Metadata } from "next";
import Script from "next/script";
import { CaseIndustriaClient } from "@/components/sections/cases/industria-case";

export const metadata: Metadata = {
  title: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
  description:
    "Case de marketing industrial: R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
  alternates: {
    canonical: "https://updo.com.br/cases/industria",
  },
  openGraph: {
    title: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
    description:
      "R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
    url: "https://updo.com.br/cases/industria",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
    description:
      "R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
  description:
    "Case de marketing industrial: R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
  url: "https://updo.com.br/cases/industria",
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

export default function CaseIndustriaPage() {
  return (
    <>
      <Script
        id="schema-article-industria"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CaseIndustriaClient />
    </>
  );
}
