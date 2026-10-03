import type { Metadata } from "next";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { setorServicos } from "@/novo/data/setores/servicos";

export const metadata: Metadata = {
  title: "Marketing para Empresas de Serviços | Leads e Vendas",
  description:
    "Marketing para empresas de serviços com posicionamento, geração de demanda, qualificação de leads, CRM e processo comercial para vender sem depender só de indicação.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-servicos",
  },
  openGraph: {
    title:
      "Marketing para Empresas de Serviços | Leads e Processo Comercial",
    description:
      "Posicionamento, geração de demanda, qualificação de leads, CRM e processo comercial para empresas de serviços venderem sem depender só de indicação.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Marketing para Empresas de Serviços UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marketing para Empresas de Serviços | Leads e Processo Comercial",
    description:
      "Posicionamento, geração de demanda, qualificação de leads, CRM e processo comercial para empresas de serviços venderem sem depender só de indicação.",
  },
};

export default function MarketingParaServicosPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing para Empresas de Serviços",
    description:
      "Estratégia de marketing para empresas de serviços com posicionamento de diferencial, geração de demanda segmentada, qualificação de leads, funil de conversão e processo comercial previsível.",
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
    serviceType: "Marketing para Empresas de Serviços",
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
        name: "Marketing para Serviços",
        item: "https://updo.com.br/marketing-para-servicos",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-servicos-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-servicos-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <ServicoTemplate conteudo={setorServicos} />
    </>
  );
}
