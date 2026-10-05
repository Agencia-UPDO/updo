import type { Metadata } from "next";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { geracaoDeDemanda } from "@/novo/data/servicos/geracao-de-demanda";

export const metadata: Metadata = {
  title: "Geração de Demanda | Ads, SEO, GEO e ChatGPT",
  description:
    "Geração de demanda com Google Ads, Meta Ads, LinkedIn Ads, ChatGPT Ads, SEO, GEO e AEO para gerar leads qualificados e aparecer em buscadores e IAs.",
  alternates: {
    canonical: "https://updo.com.br/servicos/geracao-de-demanda",
  },
  openGraph: {
    title: "Geração de Demanda | Ads, SEO, GEO e ChatGPT",
    description:
      "Google Ads, Meta Ads, LinkedIn Ads, ChatGPT Ads, TikTok Ads, SEO e GEO para gerar leads qualificados e presença em buscadores e respostas de IA.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO gerenciando campanhas de geração de demanda e mídia paga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geração de Demanda | Ads, SEO, GEO e ChatGPT",
    description:
      "Google Ads, Meta Ads, LinkedIn Ads, ChatGPT Ads, TikTok Ads, SEO e GEO para gerar leads qualificados e presença em buscadores e respostas de IA.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Geração de Demanda",
  description:
    "Estratégia de canal, gestão de Google Ads, Meta Ads, LinkedIn Ads, ChatGPT Ads, SEO e GEO para gerar leads qualificados e presença em buscadores e respostas de IA.",
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
  areaServed: "Brasil",
  serviceType: "Geração de Demanda e Gestão de Mídia Paga",
};

const breadcrumbSchema = {
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
      name: "Serviços",
      item: "https://updo.com.br/servicos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Geração de Demanda",
      item: "https://updo.com.br/servicos/geracao-de-demanda",
    },
  ],
};

export default function GeracaoDeDemandaPage() {
  return (
    <>
      <Script
        id="schema-service-demanda"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-demanda"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={geracaoDeDemanda} />
    </>
  );
}
