import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { iaParaVendas } from "@/novo/data/servicos/ia-para-vendas";

export const metadata: Metadata = {
  title: "IA para Vendas | Agentes para WhatsApp e CRM",
  description:
    "Agentes de IA para vendas que qualificam leads, respondem no WhatsApp, fazem follow-up, agendam reuniões e integram dados ao CRM sem substituir o time comercial.",
  alternates: {
    canonical: "https://updo.com.br/servicos/ia-para-vendas",
  },
  openGraph: {
    images: [imagemOg("Seu time de vendas nunca mais vai perder uma janela de compra", "Serviço")],
    title: "IA para Vendas e Atendimento | Agentes para WhatsApp e CRM",
    description:
      "Agentes de IA que qualificam leads, respondem no WhatsApp, fazem follow-up, agendam reuniões e integram dados ao CRM.",
  },
  twitter: {
    images: [imagemOg("Seu time de vendas nunca mais vai perder uma janela de compra", "Serviço").url],
    card: "summary_large_image",
    title: "IA para Vendas e Atendimento | Agentes para WhatsApp e CRM",
    description:
      "Agentes de IA que qualificam leads, respondem no WhatsApp, fazem follow-up, agendam reuniões e integram dados ao CRM.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IA para Vendas",
  description:
    "Implantação de agentes de inteligência artificial para qualificação de leads, follow-up automático e atendimento pré-venda via WhatsApp, integrado ao CRM da empresa.",
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
  serviceType: "Inteligência Artificial para Vendas",
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
      name: "IA para Vendas",
      item: "https://updo.com.br/servicos/ia-para-vendas",
    },
  ],
};

export default function IaParaVendasPage() {
  return (
    <>
      <Script
        id="schema-service-ia-para-vendas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-ia-para-vendas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={iaParaVendas} />
    </>
  );
}
