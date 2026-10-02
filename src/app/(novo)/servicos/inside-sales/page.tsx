import type { Metadata } from "next";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { insideSales } from "@/novo/data/servicos/inside-sales";

export const metadata: Metadata = {
  title: "Inside Sales | Playbook, Pipeline e Treinamento",
  description:
    "Estruturamos inside sales com playbook, pipeline, CRM, SLA, treinamento de vendas e rotina de gestão para transformar leads em receita previsível.",
  alternates: {
    canonical: "https://updo.com.br/servicos/inside-sales",
  },
  openGraph: {
    title: "Inside Sales e Processo Comercial | Playbook, Pipeline e Treinamento",
    description:
      "Playbook, pipeline, CRM, SLA, treinamento de vendas e rotina de gestão para transformar leads em receita previsível.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO estruturando processo de inside sales e vendas consultivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inside Sales e Processo Comercial | Playbook, Pipeline e Treinamento",
    description:
      "Playbook, pipeline, CRM, SLA, treinamento de vendas e rotina de gestão para transformar leads em receita previsível.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inside Sales",
  description:
    "Estruturação de processo comercial com playbook, pipeline, treinamento de neuromarketing e gestão de metas para times de vendas operarem com consistência e previsibilidade.",
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
  serviceType: "Estruturação de Processo Comercial",
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
      name: "Inside Sales",
      item: "https://updo.com.br/servicos/inside-sales",
    },
  ],
};

export default function InsideSalesPage() {
  return (
    <>
      <Script
        id="schema-service-inside-sales"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-inside-sales"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={insideSales} />
    </>
  );
}
