import type { Metadata } from "next";
import Script from "next/script";
import { CasesIndexClient } from "@/components/sections/cases/cases-index";

export const metadata: Metadata = {
  title: "Cases de Marketing e Vendas | Resultados por Setor",
  description:
    "Veja cases da UPDO em educação, e-commerce, varejo e indústria, com resultados de ROAS, faturamento, leads, tráfego e ROI gerados por marketing e vendas.",
  alternates: {
    canonical: "https://updo.com.br/cases",
  },
  openGraph: {
    title: "Cases de Marketing e Vendas | Resultados por Setor",
    description:
      "Cases em educação, e-commerce, varejo e indústria, com resultados de ROAS, faturamento, leads, tráfego e ROI gerados por marketing e vendas.",
    url: "https://updo.com.br/cases",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Cases de Marketing e Vendas | UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cases de Marketing e Vendas | Resultados por Setor",
    description:
      "Cases em educação, e-commerce, varejo e indústria, com resultados de ROAS, faturamento, leads, tráfego e ROI gerados por marketing e vendas.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cases de Marketing e Vendas | UPDO",
  url: "https://updo.com.br/cases",
  description:
    "Cases da UPDO em educação, e-commerce, varejo e indústria.",
  hasPart: [
    {
      "@type": "Article",
      name: "Case de Marketing Educacional | ROAS 20x e +211% de Leads",
      url: "https://updo.com.br/cases/educacao",
      description:
        "Case de marketing educacional com ROAS 20x, +211% de leads e prêmio RD Station 2024 para instituição de ensino superior atendida pela UPDO.",
    },
    {
      "@type": "Article",
      name: "Case de Marketing para E-commerce | +6.900% em Vendas",
      url: "https://updo.com.br/cases/e-commerce",
      description:
        "Loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
    },
    {
      "@type": "Article",
      name: "Case de Marketing para Varejo | +87% de Faturamento",
      url: "https://updo.com.br/cases/varejo",
      description:
        "Case de marketing para varejo com +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022.",
    },
    {
      "@type": "Article",
      name: "Case de Marketing Industrial | ROI 1.527% em Mídia Paga",
      url: "https://updo.com.br/cases/industria",
      description:
        "Case de marketing industrial com R$350 mil em faturamento digital, R$21,5 mil em mídia paga e ROI de 1.527%.",
    },
  ],
};

export default function CasesPage() {
  return (
    <>
      <Script
        id="schema-collection-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <CasesIndexClient />
    </>
  );
}
