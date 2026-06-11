import type { Metadata } from "next";
import Script from "next/script";
import { IALanding } from "@/components/sections/services/ia-landing";

export const metadata: Metadata = {
  title: "IA para Vendas e Atendimento | Agentes para WhatsApp e CRM",
  description:
    "Agentes de IA para vendas que qualificam leads, respondem no WhatsApp, fazem follow-up, agendam reuniões e integram dados ao CRM sem substituir o time comercial.",
  alternates: {
    canonical: "https://updo.com.br/servicos/ia-para-vendas",
  },
  openGraph: {
    title: "IA para Vendas e Atendimento | Agentes para WhatsApp e CRM",
    description:
      "Agentes de IA que qualificam leads, respondem no WhatsApp, fazem follow-up, agendam reuniões e integram dados ao CRM.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO trabalhando com inteligência artificial para vendas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Vendas e Atendimento | Agentes para WhatsApp e CRM",
    description:
      "Agentes de IA que qualificam leads, respondem no WhatsApp, fazem follow-up, agendam reuniões e integram dados ao CRM.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IA para Vendas",
  description:
    "Implantação de agentes de inteligência artificial para qualificação de leads, follow-up automático e atendimento pré-venda via WhatsApp, integrado ao CRM da empresa.",
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
  serviceType: "Inteligência Artificial para Vendas",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "É um chatbot genérico ou personalizado para o meu negócio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% personalizado. Antes de qualquer implementação, mapeamos sua jornada de venda, as perguntas de qualificação do seu ICP, o tom de voz da marca e as objeções mais comuns. O agente é treinado com esse contexto, não é um bot de FAQ que responde igual para todo mundo.",
      },
    },
    {
      "@type": "Question",
      name: "A IA substitui meu time de vendas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não, ela libera o time para fechar. A IA cuida da triagem, qualificação, agendamento e follow-up. O vendedor entra só quando o lead está aquecido, qualificado e pronto para conversa real. O resultado é mais tempo para oportunidades de verdade.",
      },
    },
    {
      "@type": "Question",
      name: "Quais ferramentas e plataformas vocês usam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do seu stack atual. Trabalhamos com WhatsApp Business API, integração com RD Station, HubSpot e Salesforce, e modelos de IA como GPT-4 e Claude. A escolha da ferramenta segue o que faz mais sentido para o seu processo, não o contrário.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para implantar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Em média de 3 a 6 semanas para o primeiro agente em produção. O tempo depende da complexidade do processo, das integrações necessárias e da disponibilidade da equipe para os alinhamentos de configuração.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona com o CRM que ja usamos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na grande maioria dos casos, sim. Temos integração com os principais CRMs do mercado brasileiro. Nos casos menos comuns, avaliamos via API. O diagnóstico mapeia o stack atual antes de qualquer proposta.",
      },
    },
    {
      "@type": "Question",
      name: "Como fica o handoff da IA para o vendedor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definimos junto com você os gatilhos de escalada: lead que atingiu determinado score de qualificação, objeção específica, pedido de falar com humano, agendamento confirmado. Quando o gatilho dispara, o vendedor recebe notificação com o resumo da conversa e pode entrar de forma contextualizada.",
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
      name: "IA para Vendas",
      item: "https://updo.com.br/servicos/ia-para-vendas",
    },
  ],
};

export default function IAParaVendasPage() {
  return (
    <>
      <Script
        id="schema-service-ia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-ia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-ia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IALanding />
    </>
  );
}
