import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { setorEcommerce } from "@/novo/data/setores/ecommerce";

export const metadata: Metadata = {
  title: "Marketing para E-commerce | Ads, CRO e Recompra",
  description:
    "Marketing para e-commerce com Google Ads, Meta Ads, TikTok Ads, CRO, dados, checkout e recompra para aumentar vendas sem perder margem.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-ecommerce",
  },
  openGraph: {
    images: [imagemOg("Marketing para e-commerce que conecta tráfego, checkout e recompra", "Setor · E-commerce")],
    title: "Marketing para E-commerce | Google Ads, CRO, ROAS e Recompra",
    description:
      "Google Ads, Meta Ads, TikTok Ads, CRO, dados, checkout e recompra para e-commerces venderem mais sem perder margem.",
  },
  twitter: {
    images: [imagemOg("Marketing para e-commerce que conecta tráfego, checkout e recompra", "Setor · E-commerce").url],
    card: "summary_large_image",
    title: "Marketing para E-commerce | Google Ads, CRO, ROAS e Recompra",
    description:
      "Google Ads, Meta Ads, TikTok Ads, CRO, dados, checkout e recompra para e-commerces venderem mais sem perder margem.",
  },
};

export default function MarketingParaEcommercePage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing para E-commerce",
    description:
      "Estratégia completa para lojas virtuais com gestão de Google Ads, Meta Ads, TikTok Ads, otimização de checkout, remarketing, recompra e leitura de CAC, ROAS e LTV.",
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
    serviceType: "Marketing Digital para E-commerce",
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
        name: "Marketing para E-commerce",
        item: "https://updo.com.br/marketing-para-ecommerce",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-ecommerce-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-ecommerce-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <ServicoTemplate conteudo={setorEcommerce} />
    </>
  );
}
