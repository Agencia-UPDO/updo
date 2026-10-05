import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import TreinamentosPagina from "@/novo/components/sobre/treinamentos-pagina";

export const metadata: Metadata = {
  title: "Treinamentos Corporativos | Vendas, Neurovendas e IA",
  description:
    "Treinamentos corporativos e in company em vendas, neurovendas, atendimento, CRM, IA e comportamento do consumidor com Rodrigo Bueno, professor PUCPR, UFPR e IBRATE.",
  alternates: {
    canonical: "https://updo.com.br/treinamentos-corporativos",
  },
  openGraph: {
    images: [imagemOg("Treinamentos corporativos para times que precisam vender melhor", "Treinamentos")],
    title: "Treinamentos Corporativos | Vendas, Neurovendas e IA",
    description:
      "Workshops, palestras e programas in company em vendas, neurovendas, IA, atendimento, CRM e rotina comercial com Rodrigo Bueno.",
    url: "https://updo.com.br/treinamentos-corporativos",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Treinamentos corporativos para times que precisam vender melhor", "Treinamentos").url],
    card: "summary_large_image",
    title: "Treinamentos Corporativos | Vendas, Neurovendas e IA",
    description:
      "Workshops, palestras e programas in company em vendas, neurovendas, IA, atendimento, CRM e rotina comercial com Rodrigo Bueno.",
  },
};

const trainingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Treinamentos corporativos e in company",
  description:
    "Treinamentos, palestras e workshops em vendas, neurovendas, comportamento do consumidor, IA, atendimento comercial, CRM e rotina de vendas para empresas.",
  provider: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Francisco Rocha, 198, Batel",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  },
  serviceType: "Treinamento corporativo",
  areaServed: "Brasil",
  audience: {
    "@type": "Audience",
    audienceType:
      "Equipes comerciais, lideranças, marketing, atendimento e diretoria",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formatos de treinamento UPDO",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Treinamento in company",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workshop executivo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Palestra corporativa",
        },
      },
    ],
  },
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
      name: "Treinamentos corporativos",
      item: "https://updo.com.br/treinamentos-corporativos",
    },
  ],
};

export default function TreinamentosCorporativosPage() {
  return (
    <>
      <Script
        id="schema-training-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingSchema) }}
      />
      <Script
        id="schema-training-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TreinamentosPagina />
    </>
  );
}
