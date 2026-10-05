import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import CaseIndustria from "@/novo/components/cases/case-industria";

export const metadata: Metadata = {
  title: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
  description:
    "Case de marketing industrial: R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
  alternates: {
    canonical: "https://updo.com.br/cases/industria",
  },
  openGraph: {
    images: [imagemOg("1.527% de ROI e R$ 350 mil em vendas", "Case · Indústria")],
    title: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
    description:
      "R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
    url: "https://updo.com.br/cases/industria",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    images: [imagemOg("1.527% de ROI e R$ 350 mil em vendas", "Case · Indústria").url],
    card: "summary_large_image",
    title: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
    description:
      "R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
  description:
    "Case de marketing industrial: R$350 mil em faturamento digital com R$21,5 mil de mídia paga, ROI de 1.527% e leitura clara para diretoria.",
  url: "https://updo.com.br/cases/industria",
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

export default function CaseIndustriaPage() {
  return (
    <>
      <Script
        id="schema-article-industria"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CaseIndustria />
    </>
  );
}
