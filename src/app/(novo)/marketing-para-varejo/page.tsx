import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { setorVarejo } from "@/novo/data/setores/varejo";

export const metadata: Metadata = {
  title: "Marketing para Varejo | Tráfego Local e WhatsApp",
  description:
    "Marketing para varejo físico e digital com tráfego local, Google Maps, WhatsApp, catálogo, recompra, equipe comercial e dados de performance.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-varejo",
  },
  openGraph: {
    images: [imagemOg("Marketing para varejo que conecta tráfego local, WhatsApp e venda", "Setor · Varejo")],
    title: "Marketing para Varejo | Tráfego Local, WhatsApp e Recompra",
    description:
      "Tráfego local, Google Maps, WhatsApp, catálogo, recompra, equipe comercial e dados para varejo físico e digital.",
  },
  twitter: {
    images: [imagemOg("Marketing para varejo que conecta tráfego local, WhatsApp e venda", "Setor · Varejo").url],
    card: "summary_large_image",
    title: "Marketing para Varejo | Tráfego Local, WhatsApp e Recompra",
    description:
      "Tráfego local, Google Maps, WhatsApp, catálogo, recompra, equipe comercial e dados para varejo físico e digital.",
  },
};

export default function MarketingParaVarejoPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing para Varejo",
    description:
      "Estratégia completa para lojas físicas e híbridas com campanhas locais, integração WhatsApp, catálogo digital, treinamento de equipe comercial, sazonalidade e dashboard de performance.",
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
    serviceType: "Marketing Digital para Varejo",
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
        name: "Marketing para Varejo",
        item: "https://updo.com.br/marketing-para-varejo",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-varejo-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-varejo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <ServicoTemplate conteudo={setorVarejo} />
    </>
  );
}
