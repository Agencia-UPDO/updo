import type { Metadata } from "next";
import Script from "next/script";
import { ChatGptAdsLanding } from "@/components/sections/services/chatgpt-ads-landing";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é ChatGPT Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É a plataforma de anúncios da OpenAI. Os anúncios aparecem separados das respostas e alcançam pessoas enquanto elas exploram opções, comparam alternativas e tomam decisões no ChatGPT.",
      },
    },
    {
      "@type": "Question",
      name: "ChatGPT Ads funciona como Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Há campanhas, orçamento, lances e anúncios, mas a entrega considera contexto e intenção da conversa, além do anúncio e da landing page. Context hints não funcionam como palavras-chave exatas.",
      },
    },
    {
      "@type": "Question",
      name: "A UPDO cria e gerencia campanhas no ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A UPDO realiza diagnóstico, estrutura de campanha, contextos, anúncios, criativos, landing pages, mensuração, acompanhamento e otimização.",
      },
    },
    {
      "@type": "Question",
      name: "Por que combinar ChatGPT Ads com SEO e GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT Ads gera presença paga e dados rápidos. SEO e GEO estruturam páginas, respostas e provas para ampliar a presença orgânica da marca em buscadores e sistemas de IA.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.updo.com.br",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "O que fazemos",
      item: "https://www.updo.com.br/o-que-fazemos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ChatGPT Ads",
      item: "https://www.updo.com.br/servicos/chatgpt-ads",
    },
  ],
};

export default function ChatGptAdsPage() {
  return (
    <>
      <Script
        id="schema-service-chatgpt-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-chatgpt-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-chatgpt-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ChatGptAdsLanding />
    </>
  );
}
