import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { uxCro } from "@/novo/data/servicos/ux-cro";

export const metadata: Metadata = {
  title: "UX e CRO | Otimização de Landing Pages e Conversão",
  description:
    "UX e CRO para landing pages, sites e e-commerce. Auditamos jornada, copy, formulário, CTA, heatmap e testes A/B para aumentar taxa de conversão.",
  alternates: {
    canonical: "https://updo.com.br/servicos/ux-cro",
  },
  openGraph: {
    images: [imagemOg("UX e CRO para converter melhor o tráfego que você já paga", "Serviço")],
    title: "UX e CRO | Otimização de Landing Pages e Conversão",
    description:
      "Auditoria de jornada, copy, formulário, CTA, heatmap e testes A/B para aumentar a taxa de conversão de landing pages, sites e e-commerce.",
  },
  twitter: {
    images: [imagemOg("UX e CRO para converter melhor o tráfego que você já paga", "Serviço").url],
    card: "summary_large_image",
    title: "UX e CRO | Otimização de Landing Pages e Conversão",
    description:
      "Auditoria de jornada, copy, formulário, CTA, heatmap e testes A/B para aumentar a taxa de conversão de landing pages, sites e e-commerce.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UX e CRO",
  description:
    "Auditoria de UX com heatmap e gravação de sessão, testes A/B com significância estatística e otimização contínua de landing pages para aumentar taxa de conversão sem aumentar verba.",
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
  serviceType: "Otimização de Conversão e UX",
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
      name: "UX e CRO",
      item: "https://updo.com.br/servicos/ux-cro",
    },
  ],
};

export default function UxCroPage() {
  return (
    <>
      <Script
        id="schema-service-ux-cro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-ux-cro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={uxCro} />
    </>
  );
}
