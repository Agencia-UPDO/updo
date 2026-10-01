import type { Metadata } from "next";
import { DiagnosticPage } from "@/components/sections/diagnostico/diagnostic-page";

export const metadata: Metadata = {
  title: "Diagnóstico de Marketing e Vendas",
  description:
    "Diagnóstico gratuito para identificar gargalos de aquisição, landing page, CRM, atendimento e funil comercial antes de investir mais em mídia.",
  alternates: {
    canonical: "https://updo.com.br/diagnostico",
  },
  openGraph: {
    title: "Diagnóstico de Marketing e Vendas | UPDO",
    description:
      "Identifique gargalos de aquisição, landing page, CRM, atendimento e funil comercial antes de investir mais em mídia.",
    url: "https://updo.com.br/diagnostico",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico de Marketing e Vendas | UPDO",
    description:
      "Identifique gargalos de aquisição, landing page, CRM, atendimento e funil comercial antes de investir mais em mídia.",
  },
};

export default function Diagnostico() {
  return <DiagnosticPage />;
}
