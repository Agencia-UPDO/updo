import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";
import { Suspense } from "react";
import { RouteTracker } from "@/components/analytics/route-tracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/Imagens/favicon agencia updo.png",
    shortcut: "/Imagens/favicon agencia updo.png",
    apple: "/Imagens/favicon agencia updo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "UPDO",
    "alternateName": "Agência UPDO",
    "url": "https://updo.com.br",
    "logo": "https://updo.com.br/Imagens/Logo%20UPDO%202024%20Branca.svg",
    "description": "Agência de marketing, vendas, dados e IA em Curitiba. Estruturamos geração de demanda, funil comercial, CRM, dashboards e automações para empresas crescerem com previsibilidade.",
    "areaServed": "Brasil",
    "priceRange": "$$",
    "knowsAbout": [
      "Marketing de Performance",
      "Geração de Demanda",
      "Inside Sales",
      "Funil Comercial",
      "CRM",
      "Automação de Marketing",
      "Inteligência de Dados",
      "Inteligência Artificial",
      "SEO",
      "GEO"
    ],
    "founder": {
      "@type": "Person",
      "name": "Rodrigo Bueno",
      "jobTitle": "Fundador e Estrategista",
      "knowsAbout": [
        "Marketing de Performance",
        "Inside Sales",
        "Neuromarketing",
        "Inteligência de Dados",
        "Inteligência Artificial",
        "Comportamento do Consumidor",
        "Neurovendas"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "UPDO"
      }
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Rua Francisco Rocha, 198, Batel",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "80420-130",
        "addressCountry": "BR"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Al. Presidente Taunay, 130, Batel",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "80420-180",
        "addressCountry": "BR"
      }
    ],
    "telephone": "+55 41 98711-2003",
    "email": "contato@updo.com.br",
    "sameAs": [
      "https://www.linkedin.com/company/agencia-updo/",
      "https://www.instagram.com/agenciaupdo/",
      "https://www.facebook.com/agenciaupdo",
      "https://www.youtube.com/@agenciaupdo"
    ],
    "award": [
      "3x finalista RD Station"
    ]
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZ73JF3');

              // Bloco para filtrar eventos desnecessários do dataLayer:
              // 1. gtm.historyChange — bloqueado porque o RouteTracker já envia
              //    virtual_page_view em cada troca de rota SPA (evita page view duplo)
              // 2. gtm.linkClick em âncoras da mesma página — bloqueado para não
              //    duplicar page views em scroll interno
              (function() {
                var push = dataLayer.push;
                dataLayer.push = function() {
                  var args = Array.prototype.slice.call(arguments);
                  var evt = args[0] && args[0].event;

                  // Bloqueia History Change nativo do GTM (RouteTracker cuida disso)
                  if (evt === 'gtm.historyChange' || evt === 'gtm.historyChange-v2') {
                    return;
                  }

                  // Bloqueia cliques em âncoras da mesma página
                  if (evt === 'gtm.linkClick') {
                    var url = args[0]['gtm.elementUrl'] || '';
                    if (url.indexOf('#') !== -1 && url.split('#')[0] === window.location.href.split('#')[0]) {
                      return;
                    }
                  }

                  return push.apply(dataLayer, args);
                };
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZ73JF3"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Navbar />
        <Suspense fallback={null}>
          <RouteTracker />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
