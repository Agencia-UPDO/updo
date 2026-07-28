import type { Metadata } from "next";
import Script from "next/script";
import { ClienteOcultoLanding } from "@/components/sections/services/cliente-oculto-landing";

export const metadata: Metadata = {
  title: "Cliente Oculto e Análise Competitiva",
  description:
    "Serviço de cliente oculto para avaliar atendimento, tempo de resposta, follow-up e concorrentes. Identifique falhas que reduzem conversão e receita.",
  alternates: {
    canonical: "https://www.updo.com.br/servicos/cliente-oculto",
  },
  openGraph: {
    title: "Cliente Oculto e Análise Competitiva | UPDO",
    description:
      "Auditamos atendimento, follow-up e concorrentes para revelar gaps de experiência, clareza e percepção que derrubam conversão.",
    url: "https://www.updo.com.br/servicos/cliente-oculto",
    siteName: "UPDO",
    type: "website",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Serviço de Cliente Oculto da UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliente Oculto e Análise Competitiva | UPDO",
    description:
      "Auditamos atendimento, follow-up e concorrentes para revelar gaps de experiência, clareza e percepção que derrubam conversão.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cliente Oculto",
  description:
    "Serviço de cliente oculto e análise competitiva para avaliar atendimento, tempo de resposta, follow-up, clareza da oferta e percepção frente aos concorrentes.",
  provider: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://www.updo.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Francisco Rocha, 198",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  },
  areaServed: "Brasil",
  serviceType: "Cliente Oculto e Análise Competitiva",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vocês analisam só o meu atendimento ou também os concorrentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podemos avaliar apenas o seu time, apenas os concorrentes ou comparar os dois lados na mesma leitura.",
      },
    },
    {
      "@type": "Question",
      name: "Esse serviço serve só para varejo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Funciona para varejo, educação, saúde, serviços, e-commerce e operações comerciais em geral. O ponto é entender como a empresa atende e como o cliente percebe essa experiência.",
      },
    },
    {
      "@type": "Question",
      name: "O que vocês avaliam no concorrente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preço, apresentação da oferta, design, clareza da informação, prova social, jornada de contato, qualidade da resposta, tempo de retorno e percepção geral da experiência.",
      },
    },
    {
      "@type": "Question",
      name: "Recebo só um relatório ou também orientação prática?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você recebe os dois. O relatório mostra evidências e comparativos. A recomendação prática organiza o que deve ser corrigido primeiro em script, tempo de resposta, processo, design ou posicionamento.",
      },
    },
    {
      "@type": "Question",
      name: "Isso pode virar treinamento para o time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Cliente Oculto gera material real para desenvolver atendimento, comercial, recepção e liderança com base no que o cliente vive hoje.",
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
      item: "https://www.updo.com.br",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "O que fazemos",
      item: "https://www.updo.com.br/o-que-fazemos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cliente Oculto",
      item: "https://www.updo.com.br/servicos/cliente-oculto",
    },
  ],
};

export default function ClienteOcultoPage() {
  return (
    <>
      <Script
        id="schema-service-cliente-oculto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-cliente-oculto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-cliente-oculto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ClienteOcultoLanding />
    </>
  );
}
