import type { Metadata } from "next";
import Script from "next/script";
import { CaseIndustriaClient } from "@/components/sections/cases/industria-case";

export const metadata: Metadata = {
  title: "Case Indústria | ROI de 1.527% com R$ 21,5k de Mídia",
  description:
    "Como a UPDO gerou R$350.000 em faturamento digital para uma indústria de bens de consumo com apenas R$21.500 de investimento, comprovando ROI de 1.527% para uma diretoria cética.",
  alternates: {
    canonical: "https://updo.com.br/cases/industria",
  },
  openGraph: {
    title: "Case Indústria | ROI de 1.527% com R$ 21,5k de Mídia | UPDO",
    description:
      "Como a UPDO gerou R$350.000 em faturamento digital para uma indústria de bens de consumo com apenas R$21.500 de investimento, comprovando ROI de 1.527% para uma diretoria cética.",
    url: "https://updo.com.br/cases/industria",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Case Indústria | ROI de 1.527% com R$ 21,5k de Mídia | UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Indústria | ROI de 1.527% com R$ 21,5k de Mídia | UPDO",
    description:
      "Como a UPDO gerou R$350.000 em faturamento digital para uma indústria de bens de consumo com apenas R$21.500 de investimento, comprovando ROI de 1.527% para uma diretoria cética.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case Indústria | ROI de 1.527% com R$ 21,5k de Mídia",
  description:
    "Como a UPDO gerou R$350.000 em faturamento digital para uma indústria de bens de consumo com apenas R$21.500 de investimento, comprovando ROI de 1.527% para uma diretoria cética.",
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
