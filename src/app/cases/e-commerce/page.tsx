import type { Metadata } from "next";
import Script from "next/script";
import { CaseEcommerceClient } from "@/components/sections/cases/ecommerce-case";

export const metadata: Metadata = {
  title: "Case de Marketing para E-commerce | +6.900% em Vendas",
  description:
    "Case de marketing para e-commerce: loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
  alternates: {
    canonical: "https://updo.com.br/cases/e-commerce",
  },
  openGraph: {
    title: "Case de Marketing para E-commerce | +6.900% em Vendas",
    description:
      "Loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
    url: "https://updo.com.br/cases/e-commerce",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Case de Marketing para E-commerce | +6.900% em Vendas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case de Marketing para E-commerce | +6.900% em Vendas",
    description:
      "Loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case de Marketing para E-commerce | +6.900% em Vendas",
  description:
    "Case de marketing para e-commerce: loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
  url: "https://updo.com.br/cases/e-commerce",
  image: "https://updo.com.br/Imagens/sala-cheia.jpg",
  author: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
  },
  publisher: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
    logo: {
      "@type": "ImageObject",
      url: "https://updo.com.br/Imagens/Logo%20UPDO%202024%20Branca.svg",
    },
  },
};

export default function CaseEcommercePage() {
  return (
    <>
      <Script
        id="schema-article-ecommerce"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CaseEcommerceClient />
    </>
  );
}
