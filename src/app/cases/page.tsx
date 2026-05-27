import type { Metadata } from "next";
import Script from "next/script";
import { CasesIndexClient } from "@/components/sections/cases/cases-index";

export const metadata: Metadata = {
  title: "Cases | Resultados Reais com Método e Dados",
  description:
    "Conheça os cases de sucesso da UPDO: educação, e-commerce, varejo e indústria. Resultados reais com estratégia, dados e execução integrados em cada projeto.",
  alternates: {
    canonical: "https://updo.com.br/cases",
  },
  openGraph: {
    title: "Cases | Resultados Reais com Método e Dados | UPDO",
    description:
      "Conheça os cases de sucesso da UPDO: educação, e-commerce, varejo e indústria. Resultados reais com estratégia, dados e execução integrados em cada projeto.",
    url: "https://updo.com.br/cases",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Cases de Sucesso | UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cases | Resultados Reais com Método e Dados | UPDO",
    description:
      "Conheça os cases de sucesso da UPDO: educação, e-commerce, varejo e indústria. Resultados reais com estratégia, dados e execução integrados em cada projeto.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cases de Sucesso | UPDO",
  url: "https://updo.com.br/cases",
  description:
    "Cases de sucesso da UPDO em educação, e-commerce, varejo e indústria.",
  hasPart: [
    {
      "@type": "Article",
      name: "Case Educação | ROAS 20x e +211% de Leads",
      url: "https://updo.com.br/cases/educacao",
      description:
        "Como a UPDO transformou uma instituição de ensino superior com quase 30 anos de história: do platô de crescimento a ROAS 20x, +211% de leads e vencedores do Prêmio RD Station 2024.",
    },
    {
      "@type": "Article",
      name: "Case E-commerce | +6.900% de Vendas em 60 Dias",
      url: "https://updo.com.br/cases/e-commerce",
      description:
        "Como a UPDO escalou um e-commerce de moda infantil de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS de 4.7x e taxa de conversão de 4,45%.",
    },
    {
      "@type": "Article",
      name: "Case Varejo | +87% de Faturamento em 2 Anos",
      url: "https://updo.com.br/cases/varejo",
      description:
        "Como a UPDO quebrou o teto histórico de um varejista paulistano com mais de 20 anos de mercado: +87% de faturamento, +1.400% de tráfego e recordes consecutivos desde 2022.",
    },
    {
      "@type": "Article",
      name: "Case Indústria | ROI de 1.527% com R$ 21,5k de Mídia",
      url: "https://updo.com.br/cases/industria",
      description:
        "Como a UPDO gerou R$350.000 em faturamento digital para uma indústria de bens de consumo com apenas R$21.500 de investimento, comprovando ROI de 1.527%.",
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
