import type { Metadata } from "next";
import Script from "next/script";
import { OQueFazemosPage } from "@/components/sections/about/o-que-fazemos-page";

export const metadata: Metadata = {
  title: "Como Trabalhamos | Metodologia e Entregas",
  description:
    "Conheça o método UPDO: como estruturamos planejamento, execução e feedback nos níveis estratégico, tático e operacional para conectar marketing, vendas e dados em um único sistema de crescimento previsível.",
  alternates: {
    canonical: "https://updo.com.br/o-que-fazemos",
  },
  openGraph: {
    title: "Como Trabalhamos | Metodologia e Entregas da UPDO",
    description:
      "Conheça o método UPDO: como estruturamos planejamento, execução e feedback nos níveis estratégico, tático e operacional para conectar marketing, vendas e dados em um único sistema de crescimento previsível.",
    url: "https://updo.com.br/o-que-fazemos",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Como Trabalhamos | Metodologia e Entregas da UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Trabalhamos | Metodologia e Entregas da UPDO",
    description:
      "Conheça o método UPDO: como estruturamos planejamento, execução e feedback nos níveis estratégico, tático e operacional para conectar marketing, vendas e dados em um único sistema de crescimento previsível.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Metodologia UPDO",
  url: "https://updo.com.br/o-que-fazemos",
  description:
    "Sistema integrado de marketing, vendas e dados nos níveis estratégico, tático e operacional para crescimento previsível.",
  provider: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
  },
};

export default function OQueFazemosRoute() {
  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <OQueFazemosPage />
    </>
  );
}
