import type { Metadata } from "next";
import Script from "next/script";
import ServicoTemplate from "@/novo/components/servicos/servico-template";
import { inteligenciaDeDados } from "@/novo/data/servicos/inteligencia-de-dados";

export const metadata: Metadata = {
  title: "Inteligência de Dados | BI, Atribuição e KPIs",
  description:
    "Inteligência de dados para marketing e vendas com coleta, dashboard unificado, BI, atribuição multi-touch, KPIs, CAC, ROAS e leitura por canal.",
  alternates: {
    canonical: "https://updo.com.br/servicos/inteligencia-de-dados",
  },
  openGraph: {
    title: "Inteligência de Dados e Dashboards | BI, Atribuição e KPIs",
    description:
      "Coleta, dashboard unificado, BI, atribuição multi-touch, KPIs, CAC, ROAS e leitura por canal para marketing e vendas.",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Equipe UPDO analisando dashboards de marketing e inteligência de dados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteligência de Dados e Dashboards | BI, Atribuição e KPIs",
    description:
      "Coleta, dashboard unificado, BI, atribuição multi-touch, KPIs, CAC, ROAS e leitura por canal para marketing e vendas.",
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
        id="schema-service-inteligencia-de-dados"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb-inteligencia-de-dados"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicoTemplate conteudo={inteligenciaDeDados} />
    </>
  );
}
