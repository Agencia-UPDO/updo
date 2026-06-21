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
    absolute: "UPDO | Estruturação de Marketing, Vendas, CRM e Dados",
  },
  description:
    "Estruturação de marketing, vendas, CRM, dados e IA em Curitiba para empresas que querem crescer com previsibilidade comercial.",
  alternates: {
    canonical: "https://updo.com.br",
  },
  openGraph: {
    title: "UPDO | Estruturação de Marketing, Vendas, CRM e Dados",
    description:
      "Estratégia, CRM, dados, IA e processo comercial para empresas que precisam crescer com previsibilidade.",
    url: "https://updo.com.br",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.updo.com.br/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "UPDO | Estruturação de Marketing, Vendas, CRM e Dados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPDO | Estruturação de Marketing, Vendas, CRM e Dados",
    description:
      "Estratégia, CRM, dados, IA e processo comercial para empresas que precisam crescer com previsibilidade.",
    images: ["https://www.updo.com.br/Imagens/sala-cheia.jpg"],
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
    "https://www.linkedin.com/company/updogrowth/",
    "https://www.instagram.com/updogrowth/",
    "https://www.facebook.com/updogrowth",
    "https://www.youtube.com/@updogrowth",
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
