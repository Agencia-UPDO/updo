import type { Metadata } from "next";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { funilEAutomacao } from "@/novo/data/servicos/funil-e-automacao";

export const metadata: Metadata = {
  title: "Funil e Automação | Lead Scoring, CRM e WhatsApp",
  description:
    "Funil e automação de marketing com nutrição de leads, lead scoring, CRM, WhatsApp, e-mail e passagem de oportunidades qualificadas para vendas.",
  alternates: {
    canonical: "https://updo.com.br/servicos/funil-e-automacao",
  },
  openGraph: {
    title: "Funil e Automação de Marketing | Lead Scoring, CRM e WhatsApp",
    description:
      "Nutrição de leads, lead scoring, CRM, WhatsApp, e-mail e passagem de oportunidades qualificadas para vendas.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO configurando funil de nutrição e automação de marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funil e Automação de Marketing | Lead Scoring, CRM e WhatsApp",
    description:
      "Nutrição de leads, lead scoring, CRM, WhatsApp, e-mail e passagem de oportunidades qualificadas para vendas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Funil e Automação",
  description:
    "Estruturação de jornada do cliente, funil de nutrição segmentado, lead scoring automático e integração com CRM e WhatsApp para qualificar leads antes do contato comercial.",
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
  serviceType: "Automação de Marketing e Nutrição de Leads",
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
      name: "Funil e Automação",
      item: "https://updo.com.br/servicos/funil-e-automacao",
    },
  ],
};

export default function FunilEAutomacaoPage() {
  return (
    <>
      <Script
        id="schema-service-funil"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-funil"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={funilEAutomacao} />
    </>
  );
}
