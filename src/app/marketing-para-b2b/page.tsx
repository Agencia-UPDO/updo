import type { Metadata } from "next";
import Script from "next/script";
import { B2BLanding } from "@/components/sections/b2b/b2b-landing";

export const metadata: Metadata = {
  title: "Marketing B2B | LinkedIn Ads, ICP e Pipeline Comercial",
  description:
    "Marketing B2B para SaaS, tecnologia e serviços corporativos com ICP, LinkedIn Ads, outbound, CRM, inside sales e pipeline comercial previsível.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-b2b",
  },
  openGraph: {
    title: "Marketing B2B | LinkedIn Ads, ICP e Pipeline Comercial",
    description:
      "ICP, LinkedIn Ads, outbound, CRM, inside sales e pipeline previsível para SaaS, tecnologia e serviços corporativos.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Marketing B2B UPDO",
      },
    ],
  },
  twitter: {
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

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vocês fazem marketing para SaaS e tecnologia B2B?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Trabalhamos com empresas que vendem software, plataforma, serviço ou consultoria para outras empresas. O foco é gerar pipeline qualificado com ICP definido e processo comercial que converta.",
        },
      },
      {
        "@type": "Question",
        name: "LinkedIn Ads funciona para o nosso tipo de negocio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende do cargo do decisor, ticket e ciclo. Para a maioria dos B2B de serviço e tecnologia, LinkedIn é o canal mais eficiente para atingir o perfil certo, mas a campanha precisa de oferta, conteúdo e funil adequados. O diagnóstico avalia se faz sentido.",
        },
      },
      {
        "@type": "Question",
        name: "Como vocês trabalham o ICP e o posicionamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Antes de criar campanha, mapeamos quem compra, por qual dor, em qual momento e com qual argumento. Isso define canal, copy, oferta e processo comercial. Sem ICP claro, a execução vai errar o alvo mesmo com verba alta.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês estruturam o processo de inside sales também?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A estruturação comercial faz parte do escopo quando necessário: script de qualificação, metodologia de descoberta, gestão de pipeline, SLA com marketing e treinamento do time.",
        },
      },
      {
        "@type": "Question",
        name: "Como acompanhamos resultado em B2B com ciclo longo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acompanhamos pipeline por estágio, origem e probabilidade, não só leads e cliques. MRR, CAC, LTV e taxa de conversão por etapa são as métricas que mostram se o sistema está funcionando.",
        },
      },
      {
        "@type": "Question",
        name: "Funciona para empresa que ainda esta estruturando o comercial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, e muitas vezes esse é o melhor momento para estruturar. O diagnóstico ajuda a entender se o gargalo está em geração de demanda, qualificação, processo ou proposta, e por onde começar com mais impacto.",
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
        id="schema-b2b-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <Script
        id="schema-b2b-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <B2BLanding />
    </>
  );
}
