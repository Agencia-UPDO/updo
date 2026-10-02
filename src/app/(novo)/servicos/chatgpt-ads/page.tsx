import type { Metadata } from "next";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { chatgptAds } from "@/novo/data/servicos/chatgpt-ads";

export const metadata: Metadata = {
  title: "ChatGPT Ads e GEO | Anúncios e Presença em IA",
  description:
    "Gestão de ChatGPT Ads com estratégia de contexto, anúncios, landing pages, tracking, SEO e GEO para alcançar clientes durante decisões no ChatGPT.",
  alternates: {
    canonical: "https://www.updo.com.br/servicos/chatgpt-ads",
  },
  openGraph: {
    title: "ChatGPT Ads e Presença em IA | UPDO",
    description:
      "Campanhas no ChatGPT integradas a landing pages, conversão, SEO e GEO para alcançar pessoas enquanto exploram, comparam e decidem.",
    url: "https://www.updo.com.br/servicos/chatgpt-ads",
    siteName: "UPDO",
    type: "website",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Serviço de ChatGPT Ads, SEO e GEO da UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Ads e Presença em IA | UPDO",
    description:
      "Estratégia e gestão de anúncios no ChatGPT integradas a SEO, GEO, landing pages, tracking e CRM.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ChatGPT Ads e Presença em IA",
  description:
    "Serviço de estratégia, criação, gestão e otimização de campanhas no ChatGPT, integrado a landing pages, mensuração de conversões, SEO e GEO.",
  provider: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://www.updo.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Francisco Rocha, 198",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  },
  areaServed: "Brasil",
  serviceType: "Gestão de ChatGPT Ads, SEO e GEO",
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
      name: "ChatGPT Ads",
      item: "https://updo.com.br/servicos/chatgpt-ads",
    },
  ],
};

export default function ChatgptAdsPage() {
  return (
    <>
      <Script
        id="schema-service-chatgpt-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-chatgpt-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={chatgptAds} />
    </>
  );
}
