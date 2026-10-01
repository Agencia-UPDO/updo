import type { Metadata } from "next";
import Script from "next/script";
import { ServicosLanding } from "@/components/sections/servicos/servicos-landing";

export const metadata: Metadata = {
  title: "Marketing para Empresas de Serviços | Leads e Processo Comercial",
  description:
    "Marketing para empresas de serviços com posicionamento, geração de demanda, qualificação de leads, CRM e processo comercial para vender sem depender só de indicação.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-servicos",
  },
  openGraph: {
    title:
      "Marketing para Empresas de Serviços | Leads e Processo Comercial",
    description:
      "Posicionamento, geração de demanda, qualificação de leads, CRM e processo comercial para empresas de serviços venderem sem depender só de indicação.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Marketing para Empresas de Serviços UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marketing para Empresas de Serviços | Leads e Processo Comercial",
    description:
      "Posicionamento, geração de demanda, qualificação de leads, CRM e processo comercial para empresas de serviços venderem sem depender só de indicação.",
  },
};

export default function MarketingParaServicosPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing para Empresas de Serviços",
    description:
      "Estratégia de marketing para empresas de serviços com posicionamento de diferencial, geração de demanda segmentada, qualificação de leads, funil de conversão e processo comercial previsível.",
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
    serviceType: "Marketing para Empresas de Serviços",
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Funciona para empresa de serviços que depende só de indicação?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A maioria dos nossos clientes começa nesse ponto. O trabalho é criar o canal previsível que funciona em paralelo com indicação, e que cresce mesmo quando a rede de contatos desacelera.",
        },
      },
      {
        "@type": "Question",
        name: "Qual canal funciona melhor para empresas de serviços?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende do perfil do cliente, ticket e ciclo de venda. Para B2C de serviço como planos de saúde, seguros e estética, Google e Meta costumam ser mais eficientes. Para serviços corporativos como consultoria, TI e jurídico, LinkedIn Ads e conteúdo de autoridade funcionam melhor. O diagnóstico define o canal certo para cada caso.",
        },
      },
      {
        "@type": "Question",
        name: "Como comunicar o diferencial de um serviço intangível?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Com prova social, cases reais e conteúdo que mostra o resultado, não só o processo. A maioria das empresas de serviço fala sobre como trabalha, mas o cliente quer saber o que vai mudar na sua realidade depois de contratar.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo para ter os primeiros resultados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As primeiras oportunidades aparecem entre 30 e 60 dias depois da ativação dos canais. Resultado consistente e crescente leva de 90 a 120 dias, dependendo do ciclo de venda e da maturidade do mercado.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês trabalham com planos de saúde, seguros, contabilidade e consultoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Trabalhamos com diversas categorias de empresas de serviço: planos de saúde, seguros, comunicação visual, consultoria de gestão, escritórios jurídicos, empresas de TI, RH e outsourcing, entre outros segmentos.",
        },
      },
      {
        "@type": "Question",
        name: "Como medir resultado em serviços com ciclo de venda longo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acompanhamos o pipeline por estágio: volume de leads, taxa de qualificação, taxa de proposta, taxa de fechamento e tempo médio em cada etapa. Isso mostra onde está o gargalo: se é em atração, qualificação ou fechamento.",
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
        name: "Marketing para Serviços",
        item: "https://updo.com.br/marketing-para-servicos",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-servicos-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-servicos-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <Script
        id="schema-servicos-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <ServicosLanding />
    </>
  );
}
