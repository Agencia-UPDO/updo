import type { Metadata } from "next";
import Script from "next/script";
import { InsideSalesLanding } from "@/components/sections/services/inside-sales-landing";

export const metadata: Metadata = {
  title: "Inside Sales e Processo Comercial | Playbook, Pipeline e Treinamento",
  description:
    "Estruturamos inside sales com playbook, pipeline, CRM, SLA, treinamento de vendas e rotina de gestão para transformar leads em receita previsível.",
  alternates: {
    canonical: "https://updo.com.br/servicos/inside-sales",
  },
  openGraph: {
    title: "Inside Sales e Processo Comercial | Playbook, Pipeline e Treinamento",
    description:
      "Playbook, pipeline, CRM, SLA, treinamento de vendas e rotina de gestão para transformar leads em receita previsível.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO estruturando processo de inside sales e vendas consultivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inside Sales e Processo Comercial | Playbook, Pipeline e Treinamento",
    description:
      "Playbook, pipeline, CRM, SLA, treinamento de vendas e rotina de gestão para transformar leads em receita previsível.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inside Sales",
  description:
    "Estruturação de processo comercial com playbook, pipeline, treinamento de neuromarketing e gestão de metas para times de vendas operarem com consistência e previsibilidade.",
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
  serviceType: "Estruturação de Processo Comercial",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Funciona para empresa com time pequeno (1 a 3 vendedores)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, e muitas vezes é aí que mais faz diferença. Um time pequeno sem processo desperdiça mais proporcionalmente do que um time grande. O playbook, o pipeline e a rotina semanal funcionam independentemente do tamanho, e facilitam a escala quando chegar a hora de contratar.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para ver resultado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os primeiros indicadores aparecem em 30 a 60 dias, normalmente redução no tempo de resposta e aumento na taxa de agendamento. Resultados mais estruturais, como melhora na conversão e previsibilidade de fechamento, geralmente se consolidam entre 90 e 120 dias de operação com o processo novo.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês treinam o time ou só entregam o playbook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os dois. O playbook documentado é o ponto de partida, mas sem treinamento prático ele vira gaveta. Fazemos sessões de role-play, simulação de objeção e acompanhamento de pitches reais para garantir que o processo seja absorvido, não só lido.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona com o CRM que ja usamos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na maioria dos casos, sim. Estruturamos os estágios, campos e SLAs dentro da ferramenta que vocês já usam: RD Station, HubSpot, Pipedrive ou outra. Se a ferramenta atual tiver limitações sérias para o processo, sinalizamos no diagnóstico antes de propor qualquer mudança.",
      },
    },
    {
      "@type": "Question",
      name: "E se o time resistir ao processo novo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Resistência é normal e esperada. O treinamento inclui o porquê de cada mudança: mostramos para o time como o processo facilita o trabalho deles, não como mais burocracia. Quando o vendedor entende que o pipeline estruturado reduz cobrança e aumenta comissão, a resistência cai rápido.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês trabalham com vendas simples ou só com vendas complexas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabalhamos com os dois. O método muda conforme o ciclo, o ticket e o número de decisores envolvidos. Venda simples precisa de velocidade e volume. Venda complexa precisa de qualificação profunda e gestão de múltiplos stakeholders. O diagnóstico define qual abordagem faz sentido.",
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
      name: "Inside Sales",
      item: "https://updo.com.br/servicos/inside-sales",
    },
  ],
};

export default function InsideSalesPage() {
  return (
    <>
      <Script
        id="schema-service-inside-sales"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-inside-sales"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-inside-sales"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InsideSalesLanding />
    </>
  );
}
