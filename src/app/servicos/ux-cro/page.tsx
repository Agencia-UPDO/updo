import type { Metadata } from "next";
import Script from "next/script";
import { UxCroLanding } from "@/components/sections/services/ux-cro-landing";

export const metadata: Metadata = {
  title: "UX e CRO: Otimização de Conversão com Dado e Teste A/B",
  description:
    "Diagnosticamos onde o usuário abandona, formulamos hipóteses com dado e testamos variantes com rigor estatístico para aumentar a taxa de conversão de forma contínua. Fale com especialista.",
  alternates: {
    canonical: "https://updo.com.br/servicos/ux-cro",
  },
  openGraph: {
    title: "UX e CRO: Otimização de Conversão com Dado e Teste A/B | UPDO",
    description:
      "Diagnosticamos onde o usuário abandona, formulamos hipóteses com dado e testamos variantes com rigor estatístico para aumentar a taxa de conversão de forma contínua. Fale com especialista.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO realizando auditoria de UX e testes de CRO em landing pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UX e CRO: Otimização de Conversão com Dado e Teste A/B | UPDO",
    description:
      "Diagnosticamos onde o usuário abandona, formulamos hipóteses com dado e testamos variantes com rigor estatístico para aumentar a taxa de conversão de forma contínua. Fale com especialista.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UX e CRO",
  description:
    "Auditoria de UX com heatmap e gravação de sessão, testes A/B com significância estatística e otimização contínua de landing pages para aumentar taxa de conversão sem aumentar verba.",
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
  serviceType: "Otimização de Conversão e UX",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é CRO e por que importa mais do que aumentar tráfego?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRO (Conversion Rate Optimization) é o processo de aumentar o percentual de visitantes que realizam a ação desejada numa página. Dobrar a conversão com o mesmo tráfego tem o mesmo efeito financeiro de dobrar o tráfego com metade do custo. É a alavanca mais eficiente antes de escalar verba.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para ver resultado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primeiros resultados aparecem entre 30 e 60 dias, dependendo do volume de tráfego disponível para os testes. Páginas com menos de 500 sessões por semana levam mais tempo para atingir significância estatística e exigem abordagem diferente.",
      },
    },
    {
      "@type": "Question",
      name: "Precisamos ter trafego alto para CRO funcionar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tráfego mínimo de cerca de 1 mil sessões por mês já viabiliza testes simples. Com volume menor, trabalhamos com análise qualitativa de heatmap e gravação de sessão antes de partir para A/B. O diagnóstico define o que é possível com o volume atual.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês mexem no design ou só em copy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os dois. CRO envolve hierarquia visual, posicionamento de elementos, copywriting, formulário e CTA. Qualquer um desses pode ser o gargalo. Trabalhamos com o que o dado indicar que tem maior impacto na conversão.",
      },
    },
    {
      "@type": "Question",
      name: "Como sabemos que o resultado e do teste e nao de outra variavel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Por isso usamos significância estatística. O teste roda com tráfego dividido simultaneamente entre controle e variante, eliminando variáveis externas como sazonalidade ou mudança de mídia durante o período.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona para páginas de serviço, não só e-commerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. CRO funciona para qualquer página com objetivo mensurável: landing page de serviço, página de contato, página de produto, checkout ou fluxo de onboarding. Onde existe meta de conversão, existe espaço para CRO.",
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
      name: "UX e CRO",
      item: "https://updo.com.br/servicos/ux-cro",
    },
  ],
};

export default function UxCroPage() {
  return (
    <>
      <Script
        id="schema-service-ux-cro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-ux-cro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-ux-cro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UxCroLanding />
    </>
  );
}
