import type { Metadata } from "next";
import { DiagnosticPage } from "@/components/sections/diagnostico/diagnostic-page";

export const metadata: Metadata = {
  title: "Diagnóstico Estratégico de Marketing e Vendas",
  description:
    "Agende um diagnóstico estratégico gratuito e entenda os gargalos de aquisição, funil comercial e previsibilidade de crescimento da sua empresa.",
  alternates: {
    canonical: "https://updo.com.br/diagnostico",
  },
  openGraph: {
    title: "Diagnóstico Estratégico de Marketing e Vendas | UPDO",
    description:
      "Agende um diagnóstico estratégico gratuito e entenda os gargalos de aquisição, funil comercial e previsibilidade de crescimento da sua empresa.",
    url: "https://updo.com.br/diagnostico",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico Estratégico de Marketing e Vendas | UPDO",
    description:
      "Agende um diagnóstico estratégico gratuito e entenda os gargalos de aquisição, funil comercial e previsibilidade de crescimento da sua empresa.",
  },
};

export default function Diagnostico() {
  return <DiagnosticPage />;
}
