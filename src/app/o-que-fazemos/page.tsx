import type { Metadata } from "next";
import Script from "next/script";
import { OQueFazemosPage } from "@/components/sections/about/o-que-fazemos-page";

export const metadata: Metadata = {
  title: "Como Trabalhamos | Método de Marketing e Vendas",
  description:
    "Conheça o método UPDO para conectar planejamento, mídia, dados, CRM, vendas e IA em ciclos de execução com responsáveis, métricas e entregáveis claros.",
  alternates: {
    canonical: "https://updo.com.br/o-que-fazemos",
  },
  openGraph: {
    title: "Como Trabalhamos | Método UPDO para Marketing e Vendas",
    description:
      "Como conectamos planejamento, mídia, dados, CRM, vendas e IA em ciclos de execução com responsáveis, métricas e entregáveis claros.",
    url: "https://updo.com.br/o-que-fazemos",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Como Trabalhamos | Método UPDO para Marketing e Vendas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Trabalhamos | Método UPDO para Marketing e Vendas",
    description:
      "Como conectamos planejamento, mídia, dados, CRM, vendas e IA em ciclos de execução com responsáveis, métricas e entregáveis claros.",
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
