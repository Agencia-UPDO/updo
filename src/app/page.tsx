import { Metadata } from "next";
import Script from "next/script";
import { HomeHero } from "@/components/sections/home/hero";
import { HomeClients } from "@/components/sections/home/clients";
import { HomeSectors } from "@/components/sections/home/sectors";
import { HomeMethodology } from "@/components/sections/home/methodology";
import { HomeServices } from "@/components/sections/home/services";
import { HomeCases } from "@/components/sections/home/cases";
import { HomeTestimonials } from "@/components/sections/home/testimonials";
import { HomeDifferentials } from "@/components/sections/home/differentials";
import { HomeRodrigo } from "@/components/sections/home/rodrigo";
import { HomeInsights } from "@/components/sections/home/insights";
import { HomeFAQ } from "@/components/sections/home/faq";
import { HomeContact } from "@/components/sections/home/contact";

export const metadata: Metadata = {
  title: {
    absolute: "UPDO · Agência de Marketing, Vendas e IA",
  },
  description:
    "Estruturamos marketing, vendas e dados para sua empresa crescer com previsibilidade. +300 empresas atendidas em educação, e-commerce, varejo e B2B. +1 década de mercado.",
  alternates: {
    canonical: "https://updo.com.br",
  },
  openGraph: {
    title: "UPDO · Agência de Marketing, Vendas e IA",
    description:
      "Crescimento previsível para empresas que querem vender mais sem depender da sorte.",
    url: "https://updo.com.br",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "UPDO · Agência de Marketing, Vendas e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPDO · Agência de Marketing, Vendas e IA",
    description:
      "Crescimento previsível para empresas que querem vender mais sem depender da sorte.",
    images: ["/Imagens/sala-cheia.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UPDO",
  url: "https://updo.com.br",
  logo: "https://updo.com.br/Imagens/Logo%20UPDO%202024%20Branca.svg",
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UPDO",
  url: "https://updo.com.br",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://updo.com.br/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeHero />
      <HomeClients />
      <HomeSectors />
      <HomeMethodology />
      <HomeServices />
      <HomeCases />
      <HomeTestimonials />
      <HomeDifferentials />
      <HomeRodrigo />
      <HomeInsights />
      <HomeContact />
      <HomeFAQ />
    </div>
  );
}
