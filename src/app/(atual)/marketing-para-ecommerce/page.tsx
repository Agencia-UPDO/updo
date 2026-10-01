import type { Metadata } from "next";
import Script from "next/script";
import { EcommerceLanding } from "@/components/sections/ecommerce/ecommerce-landing";

export const metadata: Metadata = {
  title: "Marketing para E-commerce | Google Ads, CRO, ROAS e Recompra",
  description:
    "Marketing para e-commerce com Google Ads, Meta Ads, TikTok Ads, CRO, dados, checkout e recompra para aumentar vendas sem perder margem.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-ecommerce",
  },
  openGraph: {
    title: "Marketing para E-commerce | Google Ads, CRO, ROAS e Recompra",
    description:
      "Google Ads, Meta Ads, TikTok Ads, CRO, dados, checkout e recompra para e-commerces venderem mais sem perder margem.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Marketing para E-commerce UPDO",
      },
    ],
  },
  twitter: {
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

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vocês fazem gestão de tráfego para e-commerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, mas a gestão não fica isolada no anúncio. Olhamos canal, categoria, margem, página de produto, carrinho, checkout e recompra para entender onde está o gargalo real.",
        },
      },
      {
        "@type": "Question",
        name: "Trabalham com Google Shopping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Google Shopping pode ser um canal forte para capturar demanda com intenção de compra, principalmente quando catálogo, feed, preço e margem estão bem organizados.",
        },
      },
      {
        "@type": "Question",
        name: "Faz sentido anunciar no TikTok para minha loja?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende do produto, margem, criativo e ciclo de compra. TikTok Ads pode funcionar muito bem para descoberta e desejo, mas não deve entrar só porque está na moda.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês trabalham com Facebook e Instagram Ads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Facebook e Instagram Ads entram na estratégia para descoberta, remarketing, prova de produto e escala criativa, sempre conectados a ROAS, CAC e faturamento.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês mexem no site ou só nos anúncios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avaliamos a jornada da loja. Se o problema estiver na página de produto, oferta, frete, carrinho ou checkout, isso entra no diagnóstico e no plano de otimização.",
        },
      },
      {
        "@type": "Question",
        name: "Em quanto tempo da para ver resultado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende do histórico da conta, volume de dados, ticket, margem e maturidade da loja. O primeiro passo é identificar se o problema está em tráfego, oferta, conversão ou recompra.",
        },
      },
    ],
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
        id="schema-ecommerce-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <Script
        id="schema-ecommerce-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <EcommerceLanding />
    </>
  );
}
