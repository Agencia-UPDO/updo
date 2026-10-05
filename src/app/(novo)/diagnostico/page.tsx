import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import DiagnosticoPagina from "@/novo/components/diagnostico/diagnostico-pagina";

export const metadata: Metadata = {
  title: "Diagnóstico de Marketing e Vendas",
  description:
    "Diagnóstico gratuito para identificar gargalos de aquisição, landing page, CRM, atendimento e funil comercial antes de investir mais em mídia.",
  alternates: {
    canonical: "https://updo.com.br/diagnostico",
  },
  openGraph: {
    images: [imagemOg("Descubra onde seu marketing perde receita", "Diagnóstico gratuito")],
    title: "Diagnóstico de Marketing e Vendas | UPDO",
    description:
      "Identifique gargalos de aquisição, landing page, CRM, atendimento e funil comercial antes de investir mais em mídia.",
    url: "https://updo.com.br/diagnostico",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Descubra onde seu marketing perde receita", "Diagnóstico gratuito").url],
    card: "summary_large_image",
    title: "Diagnóstico de Marketing e Vendas | UPDO",
    description:
      "Identifique gargalos de aquisição, landing page, CRM, atendimento e funil comercial antes de investir mais em mídia.",
  },
};

export default function Diagnostico() {
  return <DiagnosticoPagina />;
}
