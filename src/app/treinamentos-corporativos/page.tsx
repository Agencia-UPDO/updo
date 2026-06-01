import type { Metadata } from "next";
import Script from "next/script";
import { TrainingPage } from "@/components/sections/training/training-page";

export const metadata: Metadata = {
  title: "Treinamentos Corporativos e In Company | UPDO",
  description:
    "Treinamentos corporativos e in company em vendas, neurovendas, IA, atendimento, CRM e comportamento do consumidor com Rodrigo Bueno, professor PUCPR, UFPR e IBRATE.",
  alternates: {
    canonical: "https://updo.com.br/treinamentos-corporativos",
  },
  openGraph: {
    title: "Treinamentos Corporativos e In Company | UPDO",
    description:
      "Workshops, palestras e programas in company em vendas, neurovendas, IA, atendimento e rotina comercial com Rodrigo Bueno.",
    url: "https://updo.com.br/treinamentos-corporativos",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Rodrigo Bueno conduzindo treinamento corporativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treinamentos Corporativos e In Company | UPDO",
    description:
      "Treinamentos em vendas, neurovendas, IA, atendimento e comportamento do consumidor para equipes comerciais.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const trainingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Treinamentos corporativos e in company",
  description:
    "Treinamentos, palestras e workshops em vendas, neurovendas, comportamento do consumidor, IA, atendimento comercial, CRM e rotina de vendas para empresas.",
  provider: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Francisco Rocha, 198, Batel",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  },
  serviceType: "Treinamento corporativo",
  areaServed: "Brasil",
  audience: {
    "@type": "Audience",
    audienceType:
      "Equipes comerciais, lideranças, marketing, atendimento e diretoria",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formatos de treinamento UPDO",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Treinamento in company",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workshop executivo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Palestra corporativa",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O treinamento corporativo é padrão ou desenhado para a empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A base conceitual vem da experiência da UPDO em marketing, vendas, comportamento do consumidor e IA, mas o conteúdo é adaptado ao contexto da empresa. Antes do treinamento, levantamos mercado, público, funil, equipe e principais gargalos.",
      },
    },
    {
      "@type": "Question",
      name: "O treinamento pode ser presencial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A UPDO realiza treinamentos presenciais, online e híbridos. O formato depende do objetivo, do tamanho da equipe e do nível de prática necessário.",
      },
    },
    {
      "@type": "Question",
      name: "O treinamento é para equipe comercial ou liderança?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pode ser para ambos. Para o time comercial, o foco é abordagem, atendimento, rotina e execução. Para liderança, o conteúdo aprofunda pipeline, indicadores, gestão comercial, CRM e leitura do funil.",
      },
    },
    {
      "@type": "Question",
      name: "O treinamento inclui IA aplicada a vendas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quando faz sentido para o objetivo, sim. A abordagem é prática: IA para produtividade comercial, análise de conversas, qualificação de leads, criação de materiais e redução de tarefas repetitivas.",
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
      name: "Treinamentos corporativos",
      item: "https://updo.com.br/treinamentos-corporativos",
    },
  ],
};

export default function TreinamentosCorporativosPage() {
  return (
    <>
      <Script
        id="schema-training-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingSchema) }}
      />
      <Script
        id="schema-training-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-training-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TrainingPage />
    </>
  );
}
