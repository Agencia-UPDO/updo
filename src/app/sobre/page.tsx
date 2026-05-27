import type { Metadata } from "next";
import Script from "next/script";
import { AboutPage } from "@/components/sections/about/about-page";

export const metadata: Metadata = {
  title: "Sobre | Agência de Marketing, Vendas e IA em Curitiba",
  description:
    "Conheça a UPDO: fundada em 2017, +300 empresas atendidas, +R$750M em receita gerada. Agência de marketing, vendas e IA que responde pelo número, do anúncio ao caixa.",
  alternates: {
    canonical: "https://updo.com.br/sobre",
  },
  openGraph: {
    title: "Sobre | Agência de Marketing, Vendas e IA em Curitiba | UPDO",
    description:
      "Conheça a UPDO: fundada em 2017, +300 empresas atendidas, +R$750M em receita gerada. Agência de marketing, vendas e IA que responde pelo número, do anúncio ao caixa.",
    url: "https://updo.com.br/sobre",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "UPDO - Agência de Marketing, Vendas e IA em Curitiba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | Agência de Marketing, Vendas e IA em Curitiba | UPDO",
    description:
      "Conheça a UPDO: fundada em 2017, +300 empresas atendidas, +R$750M em receita gerada. Agência de marketing, vendas e IA que responde pelo número, do anúncio ao caixa.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre a UPDO",
  url: "https://updo.com.br/sobre",
  description:
    "Conheça a UPDO: fundada em 2017, +300 empresas atendidas, +R$750M em receita gerada.",
  mainEntity: {
    "@type": "Organization",
    name: "UPDO",
    url: "https://updo.com.br",
    logo: "https://updo.com.br/Imagens/Logo%20UPDO%202024%20Branca.svg",
    foundingDate: "2017",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Francisco Rocha, 198, Batel",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80420-130",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.linkedin.com/company/agencia-updo/",
      "https://www.instagram.com/agenciaupdo/",
      "https://www.facebook.com/agenciaupdo",
      "https://www.youtube.com/@agenciaupdo",
    ],
  },
};

export default function SobrePage() {
  return (
    <>
      <Script
        id="schema-about-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutPage />
    </>
  );
}
