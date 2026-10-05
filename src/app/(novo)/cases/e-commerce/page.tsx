import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import Script from "next/script";
import CaseEcommerce from "@/novo/components/cases/case-ecommerce";

export const metadata: Metadata = {
  title: "Case de Marketing para E-commerce | +6.900% em Vendas",
  description:
    "Case de marketing para e-commerce: loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
  alternates: {
    canonical: "https://updo.com.br/cases/e-commerce",
  },
  openGraph: {
    images: [imagemOg("+6.900% em vendas em 60 dias", "Case · E-commerce")],
    title: "Case de Marketing para E-commerce | +6.900% em Vendas",
    description:
      "Loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
    url: "https://updo.com.br/cases/e-commerce",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    images: [imagemOg("+6.900% em vendas em 60 dias", "Case · E-commerce").url],
    card: "summary_large_image",
    title: "Case de Marketing para E-commerce | +6.900% em Vendas",
    description:
      "Loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Case de Marketing para E-commerce | +6.900% em Vendas",
  description:
    "Case de marketing para e-commerce: loja virtual saiu de R$3k para R$211k de faturamento mensal em 60 dias, com ROAS 4.7x e conversão de 4,45%.",
  url: "https://updo.com.br/cases/e-commerce",
  image: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
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
      <CaseEcommerce />
    </>
  );
}
