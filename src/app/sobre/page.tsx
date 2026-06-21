import type { Metadata } from "next";
import Script from "next/script";
import { AboutPage } from "@/components/sections/about/about-page";

export const metadata: Metadata = {
  title: "Sobre | Consultoria de Crescimento, CRM e Inteligência Comercial",
  description:
    "Conheça a UPDO, consultoria de crescimento em Curitiba. Desde 2017, unimos comportamento do consumidor, marketing, CRM, dados e processo comercial.",
  alternates: {
    canonical: "https://updo.com.br/sobre",
  },
  openGraph: {
    title: "Sobre a UPDO | Consultoria de Crescimento, CRM e Inteligência Comercial",
    description:
      "Consultoria de crescimento em Curitiba. Desde 2017, unimos comportamento do consumidor, marketing, CRM, dados e processo comercial.",
    url: "https://updo.com.br/sobre",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "UPDO | Consultoria de Crescimento, CRM e Inteligência Comercial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a UPDO | Consultoria de Crescimento, CRM e Inteligência Comercial",
    description:
      "Consultoria de crescimento em Curitiba. Desde 2017, unimos comportamento do consumidor, marketing, CRM, dados e processo comercial.",
    images: ["https://www.updo.com.br/Imagens/sala-cheia.jpg"],
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
      "https://www.linkedin.com/company/updogrowth/",
      "https://www.instagram.com/updogrowth/",
      "https://www.facebook.com/updogrowth",
      "https://www.youtube.com/@updogrowth",
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
