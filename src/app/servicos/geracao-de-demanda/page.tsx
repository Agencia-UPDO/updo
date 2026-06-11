import type { Metadata } from "next";
import Script from "next/script";
import { DemandaLanding } from "@/components/sections/services/demanda-landing";

export const metadata: Metadata = {
  title: "Geração de Demanda | Google Ads, Meta, LinkedIn, SEO e GEO",
  description:
    "Geração de demanda com Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO e GEO para gerar leads qualificados e presença em buscadores e respostas de IA.",
  alternates: {
    canonical: "https://updo.com.br/servicos/geracao-de-demanda",
  },
  openGraph: {
    title: "Geração de Demanda | Google Ads, Meta, LinkedIn, SEO e GEO",
    description:
      "Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO e GEO para gerar leads qualificados e presença em buscadores e respostas de IA.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO gerenciando campanhas de geração de demanda e mídia paga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geração de Demanda | Google Ads, Meta, LinkedIn, SEO e GEO",
    description:
      "Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, SEO e GEO para gerar leads qualificados e presença em buscadores e respostas de IA.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Geração de Demanda",
  description:
    "Estratégia de canal, gestão de Google Ads, Meta Ads, LinkedIn Ads, SEO e GEO para gerar leads qualificados com o menor CPL possível e presença em buscadores e respostas de IA.",
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
  serviceType: "Geração de Demanda e Gestão de Mídia Paga",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vocês fazem gestão de mídia ou só estratégia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os dois. Fazemos o planejamento de canal, a criação, a gestão ativa das campanhas e o relatório de performance. O time que planeja é o mesmo que executa e otimiza, sem terceirizar a operação.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto de verba minima faz sentido para comecar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do canal e do ticket. Para Google e Meta, o mínimo que viabiliza otimização com dado suficiente é em torno de R$5 mil por canal por mês. Abaixo disso, o algoritmo não tem volume para aprender. Para LinkedIn Ads B2B, o mínimo prático é maior por causa do CPL estruturalmente mais alto.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona para B2B com ciclo longo de venda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, e tem estratégia específica para isso. B2B com ciclo longo precisa de conteúdo de topo para geração de demanda, qualificação por lead scoring e nutrição antes do comercial. Não é só anúncio de conversão direta.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a qualificação do lead antes de entrar no comercial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A qualificação começa no anúncio e na landing page, que filtram perfil antes do clique. Depois, formulário com campos de qualificação e, em alguns casos, automação de WhatsApp ou e-mail para validar intenção antes de passar para o time comercial.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês trabalham com SEO e GEO também?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. SEO e GEO fazem parte da estratégia de geração de demanda como canais de longo prazo. Trabalhamos com pesquisa de palavra-chave, arquitetura de conteúdo, perguntas do público e otimização para buscadores e respostas de IA.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo para ver resultado em geração de demanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tráfego pago começa a gerar lead na primeira semana após o lançamento. A otimização do CPL e da qualidade do lead acontece nas primeiras 4 a 8 semanas conforme o algoritmo aprende. SEO e GEO levam entre 90 e 180 dias para mostrar impacto mensurável.",
      },
    },
  ],
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
      name: "Geração de Demanda",
      item: "https://updo.com.br/servicos/geracao-de-demanda",
    },
  ],
};

export default function GeracaoDeDemandaPage() {
  return (
    <>
      <Script
        id="schema-service-demanda"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-demanda"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-demanda"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DemandaLanding />
    </>
  );
}
