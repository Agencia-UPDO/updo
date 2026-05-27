import type { Metadata } from "next";
import Script from "next/script";
import { RetailLanding } from "@/components/sections/retail/retail-landing";

export const metadata: Metadata = {
  title: "Marketing para Varejo | Trafego Local, WhatsApp e Vendas",
  description:
    "Estratégia de marketing para varejo com tráfego local, WhatsApp, loja física, catálogo, recompra e dados para vender com previsibilidade. Solicite diagnóstico gratuito.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-varejo",
  },
  openGraph: {
    title: "Marketing para Varejo | Tráfego Local, WhatsApp e Vendas",
    description:
      "Estratégia de marketing para varejo com tráfego local, WhatsApp, loja física, catálogo, recompra e dados para vender com previsibilidade.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Marketing para Varejo UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing para Varejo | Tráfego Local, WhatsApp e Vendas",
    description:
      "Estratégia de marketing para varejo com tráfego local, WhatsApp, loja física, catálogo, recompra e dados para vender com previsibilidade.",
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

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vocês fazem marketing para loja física?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A estratégia considera fluxo para loja, WhatsApp, catálogo, campanhas locais e materiais de apoio para o time vender melhor.",
        },
      },
      {
        "@type": "Question",
        name: "Funciona para varejo que vende no fisico e no digital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Esse é justamente o cenário mais comum: conectar site, catálogo, WhatsApp, loja física e equipe comercial em uma mesma leitura de performance.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês trabalham com Google Meu Negócio e Google Maps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avaliamos presença local, busca, Maps e campanhas quando isso impacta fluxo, ligações, rotas, WhatsApp e visitas qualificadas.",
        },
      },
      {
        "@type": "Question",
        name: "Da para medir venda que comeca no digital e fecha na loja?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nem sempre com 100% de precisão, mas dá para criar rotinas de mensuração, origem do atendimento, campanhas, cupons, WhatsApp e leitura comercial.",
        },
      },
      {
        "@type": "Question",
        name: "Em quanto tempo da para ver resultado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende do histórico, região, ticket, equipe e maturidade digital. O diagnóstico mostra se o gargalo está em tráfego, oferta, atendimento, operação ou recompra.",
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
        id="schema-varejo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <Script
        id="schema-varejo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <RetailLanding />
    </>
  );
}
