import type { Metadata } from "next";
import Script from "next/script";
import { DadosLanding } from "@/components/sections/services/dados-landing";

export const metadata: Metadata = {
  title: "Inteligência de Dados: Dashboard e Atribuição Multi-touch",
  description:
    "Estruturamos coleta, dashboard unificado, atribuição multi-touch e KPIs para decisão com dado real. Menos CAC e mais visibilidade sobre o que funciona em cada canal. Solicite diagnóstico.",
  alternates: {
    canonical: "https://updo.com.br/servicos/inteligencia-de-dados",
  },
  openGraph: {
    title: "Inteligência de Dados: Dashboard e Atribuição Multi-touch | UPDO",
    description:
      "Estruturamos coleta, dashboard unificado, atribuição multi-touch e KPIs para decisão com dado real. Menos CAC e mais visibilidade sobre o que funciona em cada canal. Solicite diagnóstico.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO analisando dashboards de marketing e inteligência de dados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteligência de Dados: Dashboard e Atribuição Multi-touch | UPDO",
    description:
      "Estruturamos coleta, dashboard unificado, atribuição multi-touch e KPIs para decisão com dado real. Menos CAC e mais visibilidade sobre o que funciona em cada canal. Solicite diagnóstico.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inteligência de Dados",
  description:
    "Estruturação de coleta, dashboard unificado, atribuição de conversão multi-touch e KPIs automatizados para empresas tomarem decisões de marketing com dados confiáveis.",
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
  serviceType: "Inteligência de Dados e Analytics de Marketing",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Funciona com as ferramentas que já usamos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na maioria dos casos, sim. Integramos com GA4, Meta Ads Manager, HubSpot, RD Station, Pipedrive, Shopify e outras plataformas comuns. Se precisar de conector customizado, desenvolvemos dentro do projeto. O objetivo é centralizar o que você já tem, não forçar troca de ferramenta.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo para ter o dashboard funcionando?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A estrutura básica de coleta e o dashboard principal ficam prontos em 2 a 4 semanas, dependendo do número de fontes e da complexidade do negócio. Análises mais avançadas (cohort, LTV por canal, atribuição multi-touch completa) entram nas semanas seguintes.",
      },
    },
    {
      "@type": "Question",
      name: "Precisamos de analista interno para usar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. O dashboard é construído para que qualquer pessoa do time entenda sem precisar de analista. Incluímos guia de leitura e sessão de onboarding para garantir autonomia. Se quiserem aprofundar análises depois, o ambiente está pronto para isso.",
      },
    },
    {
      "@type": "Question",
      name: "O que é atribuição multi-touch e por que importa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É o modelo que distribui o crédito da conversão por todos os pontos de contato da jornada, não só pelo último clique antes da compra. Sem isso, você realoca verba para o canal que aparece na venda mas não para o que a iniciou. O resultado é cortar o que estava funcionando e aumentar o que só captura.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês trabalham com e-commerce também?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Integramos com Shopify, WooCommerce e VTEX, incluindo eventos de produto, abandono de carrinho, análise de ticket por canal e relatório de SKU. O dashboard cobre tanto a aquisição quanto o comportamento pós-clique.",
      },
    },
    {
      "@type": "Question",
      name: "Os dados ficam seguros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operamos com política de mínimo acesso, credenciais seguras e documentação de governança. Nenhum dado de cliente é armazenado fora das ferramentas contratadas por você. O acesso ao ambiente é encerrado formalmente ao final do projeto ou substituído pelo perfil do time.",
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
      name: "Inteligência de Dados",
      item: "https://updo.com.br/servicos/inteligencia-de-dados",
    },
  ],
};

export default function InteligenciaDeDadosPage() {
  return (
    <>
      <Script
        id="schema-service-dados"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-dados"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-dados"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DadosLanding />
    </>
  );
}
