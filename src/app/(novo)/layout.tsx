import type { Metadata } from "next";
import { Suspense } from "react";
import "./novo.css";
import { siteConfig } from "@/config/site";
import { SiteHead, GtmNoscript } from "@/components/layout/site-tracking";
import { TitleSync } from "@/components/analytics/title-sync";
import { RoutePageview } from "@/components/analytics/route-pageview";
import SmoothScrollProvider from "@/novo/components/animation/smooth-scroll";
import Navbar from "@/novo/components/layout/navbar";
import MobileMenu from "@/novo/components/layout/mobile-menu";
import ContadorSecoes from "@/novo/components/layout/contador-secoes";
import BarraNavegacao from "@/novo/components/layout/barra-navegacao";
import Footer from "@/novo/components/layout/footer";
import { fontVariables } from "@/novo/utils/font";

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

export default function NovoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <SiteHead />
      <body className={`${fontVariables} antialiased`}>
        <GtmNoscript />
        <TitleSync />
        <RoutePageview />
        <Suspense>
          <SmoothScrollProvider>
            <BarraNavegacao />
            <Navbar />
            <MobileMenu />
            <main>{children}</main>
            <ContadorSecoes />
            <Footer />
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
