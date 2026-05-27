import type { Metadata } from "next";
import Script from "next/script";
import { FunilLanding } from "@/components/sections/services/funil-landing";

export const metadata: Metadata = {
  title: "Funil e Automação: Nutrição de Leads e Lead Scoring",
  description:
    "Estruturamos jornada, funil de nutrição, lead scoring e automação de WhatsApp para o lead certo chegar ao comercial no momento certo. Sem trabalho manual. Solicite diagnóstico gratuito.",
  alternates: {
    canonical: "https://updo.com.br/servicos/funil-e-automacao",
  },
  openGraph: {
    title: "Funil e Automação: Nutrição de Leads e Lead Scoring | UPDO",
    description:
      "Estruturamos jornada, funil de nutrição, lead scoring e automação de WhatsApp para o lead certo chegar ao comercial no momento certo. Sem trabalho manual. Solicite diagnóstico gratuito.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO configurando funil de nutrição e automação de marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funil e Automação: Nutrição de Leads e Lead Scoring | UPDO",
    description:
      "Estruturamos jornada, funil de nutrição, lead scoring e automação de WhatsApp para o lead certo chegar ao comercial no momento certo. Sem trabalho manual. Solicite diagnóstico gratuito.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Funil e Automação",
  description:
    "Estruturação de jornada do cliente, funil de nutrição segmentado, lead scoring automático e integração com CRM e WhatsApp para qualificar leads antes do contato comercial.",
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
  serviceType: "Automação de Marketing e Nutrição de Leads",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Funciona com o RD Station que ja usamos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Trabalhamos com RD Station, HubSpot, ActiveCampaign, Mautic e outras plataformas. A estrutura de funil é adaptada à ferramenta que você já tem. Se a plataforma atual tiver limitações para o que você precisa, sinalizamos no diagnóstico antes de propor qualquer mudança.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo para a automação estar rodando?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A estrutura base fica pronta em 3 a 5 semanas: mapeamento de jornada, segmentação da base, sequências configuradas e integração com o CRM. Automações mais complexas como WhatsApp e lead scoring avançado entram nas semanas seguintes.",
      },
    },
    {
      "@type": "Question",
      name: "Precisamos ter uma base grande para valer a pena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Funil de nutrição funciona melhor quando implementado cedo. Uma base de 500 leads bem segmentada converte mais do que 10 mil leads sem nutrição. O foco é qualidade e consistência, não volume.",
      },
    },
    {
      "@type": "Question",
      name: "O WhatsApp entra na automação também?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Integramos fluxos de qualificação, follow-up e reativação via WhatsApp com as principais plataformas de automação. O tom da mensagem é definido com a equipe para manter a identidade da marca sem parecer robótico.",
      },
    },
    {
      "@type": "Question",
      name: "Quem vai criar os conteúdos dos e-mails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A equipe da UPDO cria os e-mails, landing pages e fluxos de automação. Você revisa e aprova antes de qualquer disparo. Se preferir usar conteúdo que já existe, adaptamos para o funil sem necessidade de criar tudo do zero.",
      },
    },
    {
      "@type": "Question",
      name: "E se a base estiver com muitos e-mails invalidos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A limpeza de base faz parte do projeto. Antes de rodar qualquer automação, validamos, segmentamos e higienizamos a lista para proteger a reputação do domínio e garantir que o relatório reflita resultado real.",
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
      name: "Funil e Automação",
      item: "https://updo.com.br/servicos/funil-e-automacao",
    },
  ],
};

export default function FunilEAutomaçãoPage() {
  return (
    <>
      <Script
        id="schema-service-funil"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq-funil"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-funil"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FunilLanding />
    </>
  );
}
