import EducacaoPagina from "@/novo/components/educacao/educacao-pagina";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Marketing Educacional | Captação de Alunos e Matrículas",
  description:
    "Marketing educacional para faculdades, pós-graduações e escolas. Estruturamos mídia, landing pages, CRM e comercial para gerar matrículas com previsibilidade.",
  alternates: {
    canonical: "https://updo.com.br/marketing-educacional",
  },
  openGraph: {
    title: "Marketing Educacional | Captação de Alunos e Matrículas",
    description:
      "Mídia, landing pages, CRM e processo comercial para faculdades, pós-graduações e escolas captarem alunos com previsibilidade.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Estratégia de Marketing Educacional UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Educacional | Captação de Alunos e Matrículas",
    description:
      "Mídia, landing pages, CRM e processo comercial para faculdades, pós-graduações e escolas captarem alunos com previsibilidade.",
  },
};

export default function MarketingEducacionalPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Educacional",
    description:
      "Sistema previsível de captação de alunos para instituições de ensino superior e básico. Inclui gestão de mídia paga, CRM educacional, treinamento de equipe comercial e Radar de Matrículas.",
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
    serviceType: "Marketing Educacional",
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
        name: "Marketing Educacional",
        item: "https://updo.com.br/marketing-educacional",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-marketing-educacional-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-marketing-educacional-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <EducacaoPagina />
    </>
  );
}
