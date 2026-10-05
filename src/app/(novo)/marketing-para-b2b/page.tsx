import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { setorB2b } from "@/novo/data/setores/b2b";

export const metadata: Metadata = {
  title: "Marketing B2B | LinkedIn Ads, ICP e Pipeline",
  description:
    "Marketing B2B para SaaS, tecnologia e serviços corporativos com ICP, LinkedIn Ads, outbound, CRM, inside sales e pipeline comercial previsível.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-b2b",
  },
  openGraph: {
    images: [imagemOg("Marketing B2B que gera pipeline qualificado sem depender de indicação", "Setor · B2B")],
    title: "Marketing B2B | LinkedIn Ads, ICP e Pipeline Comercial",
    description:
      "ICP, LinkedIn Ads, outbound, CRM, inside sales e pipeline previsível para SaaS, tecnologia e serviços corporativos.",
  },
  twitter: {
    images: [imagemOg("Marketing B2B que gera pipeline qualificado sem depender de indicação", "Setor · B2B").url],
    card: "summary_large_image",
    title: "Marketing B2B | LinkedIn Ads, ICP e Pipeline Comercial",
    description:
      "ICP, LinkedIn Ads, outbound, CRM, inside sales e pipeline previsível para SaaS, tecnologia e serviços corporativos.",
  },
};

export default function MarketingParaB2BPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing B2B",
    description:
      "Estratégia de marketing B2B com definição de ICP, LinkedIn Ads, outbound estruturado, funil de conversão, CRM, automação e playbook comercial para SaaS, consultorias e serviços corporativos.",
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
    serviceType: "Marketing B2B",
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
        name: "Marketing B2B",
        item: "https://updo.com.br/marketing-para-b2b",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-b2b-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-b2b-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <ServicoTemplate conteudo={setorB2b} />
    </>
  );
}
