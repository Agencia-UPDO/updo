import type { Metadata } from "next";
import Script from "next/script";
import { IndustryLanding } from "@/components/sections/industry/industry-landing";

export const metadata: Metadata = {
  title: "Marketing para Indústria | Pipeline e Venda Complexa",
  description:
    "Estratégia de marketing para indústria com geração de demanda, LinkedIn Ads, inside sales, CRM e pipeline previsível para venda complexa e ciclo longo. Diagnóstico gratuito.",
  alternates: {
    canonical: "https://updo.com.br/marketing-para-industria",
  },
  openGraph: {
    title: "Marketing para Indústria | Pipeline e Venda Complexa",
    description:
      "Estratégia de marketing para indústria com geração de demanda, LinkedIn Ads, inside sales, CRM e pipeline previsível para venda complexa e ciclo longo.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Marketing para Indústria UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing para Indústria | Pipeline e Venda Complexa",
    description:
      "Estratégia de marketing para indústria com geração de demanda, LinkedIn Ads, inside sales, CRM e pipeline previsível para venda complexa e ciclo longo.",
  },
};

export default function MarketingParaIndustriaPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing para Indústria",
    description:
      "Geração de demanda industrial com Google Search e LinkedIn Ads, conteúdo técnico, automação de nurturing, inside sales, CRM e dashboard de pipeline para indústrias com venda complexa e ciclo longo.",
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
    serviceType: "Marketing Industrial B2B",
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vocês fazem marketing para indústria de nicho técnico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Trabalhamos com segmentos onde o produto é técnico, o comprador é especialista e a argumentação precisa ir além de preço. O diagnóstico ajuda a entender o canal certo para o perfil de decisor do seu setor.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona LinkedIn Ads para industria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LinkedIn Ads permite segmentar por cargo, função, setor e tamanho de empresa, o que é fundamental quando você vende para engenheiro de aplicação, gerente de compras ou diretor industrial. Mas a campanha precisa de oferta, conteúdo e funil adequados ao ciclo.",
        },
      },
      {
        "@type": "Question",
        name: "Dá para gerar demanda quando o produto é muito técnico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, e muitas vezes o nicho técnico é uma vantagem: o decisor busca especificamente, compara menos no preço e valoriza autoridade. Conteúdo técnico, cases reais e abordagem consultiva constroem isso de forma consistente.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para ver resultado em venda industrial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende do ticket, ciclo e maturidade comercial. Em geral, os primeiros leads qualificados aparecem em 60 a 90 dias, mas o ciclo de fechamento pode ser longo. O diagnóstico mapeia onde está o gargalo real: tráfego, abordagem ou processo comercial.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês trabalham com CRM e inside sales para indústria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A estruturação comercial é parte do nosso escopo. Ajudamos a configurar CRM, montar playbook de abordagem, definir processo de qualificação e criar rotina de gestão de pipeline com o time.",
        },
      },
      {
        "@type": "Question",
        name: "Funciona para quem vende para distribuidores ou representantes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A estratégia se adapta ao canal: venda direta ao industrial, ao distribuidor, ao representante ou ao projeto. O que muda é a jornada, o perfil de decisor e os materiais de suporte à venda.",
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
        name: "Marketing para Indústria",
        item: "https://updo.com.br/marketing-para-industria",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-industria-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-industria-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <Script
        id="schema-industria-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <IndustryLanding />
    </>
  );
}
