import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { clienteOculto } from "@/novo/data/servicos/cliente-oculto";

export const metadata: Metadata = {
  title: "Cliente Oculto e Análise Competitiva",
  description:
    "Serviço de cliente oculto para avaliar atendimento, tempo de resposta, follow-up e concorrentes. Identifique falhas que reduzem conversão e receita.",
  alternates: {
    canonical: "https://www.updo.com.br/servicos/cliente-oculto",
  },
  openGraph: {
    images: [imagemOg("Veja como sua empresa atende na prática", "Serviço")],
    title: "Cliente Oculto e Análise Competitiva | UPDO",
    description:
      "Auditamos atendimento, follow-up e concorrentes para revelar gaps de experiência, clareza e percepção que derrubam conversão.",
    url: "https://www.updo.com.br/servicos/cliente-oculto",
    siteName: "UPDO",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Veja como sua empresa atende na prática", "Serviço").url],
    card: "summary_large_image",
    title: "Cliente Oculto e Análise Competitiva | UPDO",
    description:
      "Auditamos atendimento, follow-up e concorrentes para revelar gaps de experiência, clareza e percepção que derrubam conversão.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cliente Oculto",
  description:
    "Serviço de cliente oculto e análise competitiva para avaliar atendimento, tempo de resposta, follow-up, clareza da oferta e percepção frente aos concorrentes.",
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
  serviceType: "Cliente Oculto e Análise Competitiva",
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
      name: "Cliente Oculto",
      item: "https://updo.com.br/servicos/cliente-oculto",
    },
  ],
};

export default function ClienteOcultoPage() {
  return (
    <>
      <Script
        id="schema-service-cliente-oculto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-cliente-oculto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={clienteOculto} />
    </>
  );
}
