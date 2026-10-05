import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import ComoTrabalhamosPagina from "@/novo/components/sobre/como-trabalhamos-pagina";

export const metadata: Metadata = {
  title: "Como Trabalhamos | Método de Marketing e Vendas",
  description:
    "Conheça o método UPDO para conectar planejamento, mídia, dados, CRM, vendas e IA em ciclos de execução com responsáveis, métricas e entregáveis claros.",
  alternates: {
    canonical: "https://updo.com.br/o-que-fazemos",
  },
  openGraph: {
    images: [imagemOg("Do diagnóstico ao resultado: tudo conectado, nada terceirizado", "Como trabalhamos")],
    title: "Como Trabalhamos | Método UPDO para Marketing e Vendas",
    description:
      "Como conectamos planejamento, mídia, dados, CRM, vendas e IA em ciclos de execução com responsáveis, métricas e entregáveis claros.",
    url: "https://updo.com.br/o-que-fazemos",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Do diagnóstico ao resultado: tudo conectado, nada terceirizado", "Como trabalhamos").url],
    card: "summary_large_image",
    title: "Como Trabalhamos | Método UPDO para Marketing e Vendas",
    description:
      "Como conectamos planejamento, mídia, dados, CRM, vendas e IA em ciclos de execução com responsáveis, métricas e entregáveis claros.",
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
      <ComoTrabalhamosPagina />
    </>
  );
}
