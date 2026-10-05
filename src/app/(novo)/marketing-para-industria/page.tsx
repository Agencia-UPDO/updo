import type { Metadata } from "next";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { setorIndustria } from "@/novo/data/setores/industria";

export const metadata: Metadata = {
  title: "Marketing para Indústria | Demanda B2B e Venda Complexa",
  description:
    "Marketing industrial B2B com Google Search, LinkedIn Ads, conteúdo técnico, CRM, inside sales e pipeline para vendas complexas e ciclos longos.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-industria",
  },
  openGraph: {
    title: "Marketing para Indústria | Demanda B2B e Vendas Complexas",
    description:
      "Google Search, LinkedIn Ads, conteúdo técnico, CRM, inside sales e pipeline para indústrias com vendas complexas e ciclos longos.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Marketing para Indústria UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing para Indústria | Demanda B2B e Vendas Complexas",
    description:
      "Google Search, LinkedIn Ads, conteúdo técnico, CRM, inside sales e pipeline para indústrias com vendas complexas e ciclos longos.",
  },
};

export default function MarketingParaIndustriaPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing para Indústria",
    description:
      "Geração de demanda industrial com Google Search e LinkedIn Ads, conteúdo técnico, automação de nurturing, inside sales, CRM e dashboard de pipeline para indústrias com venda complexa e ciclo longo.",
    provider: {
      "@type": "Organization",
      name: "UPDO",
      url: "https://updo.com.br",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Francisco Rocha, 198",
        addressLocality: "Curitiba",
        addressRegion: "PR",
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: "Marketing Industrial B2B",
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://updo.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marketing para Indústria",
        item: "https://updo.com.br/marketing-para-industria",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-industria-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-industria-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <ServicoTemplate conteudo={setorIndustria} />
    </>
  );
}
