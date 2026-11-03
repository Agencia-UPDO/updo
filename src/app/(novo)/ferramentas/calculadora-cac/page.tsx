import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import CalculadoraCac from "@/novo/components/calculadora/calculadora-cac";

export const metadata: Metadata = {
  title: "Calculadora de CAC e LTV",
  description:
    "Calcule grátis o LTV, o CAC atual e o CAC máximo saudável do seu negócio, o LTV:CAC, o payback em meses e o ROAS mínimo para não ter prejuízo. Receba o diagnóstico em PDF.",
  alternates: { canonical: "https://updo.com.br/ferramentas/calculadora-cac" },
  openGraph: {
    images: [imagemOg("Quanto você pode pagar por um cliente?", "Calculadora de CAC e LTV")],
    title: "Calculadora de CAC e LTV | UPDO",
    description: "Calcule grátis o LTV, o CAC atual e o CAC máximo saudável do seu negócio, o LTV:CAC, o payback em meses e o ROAS mínimo para não ter prejuízo. Receba o diagnóstico em PDF.",
    url: "https://updo.com.br/ferramentas/calculadora-cac",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Quanto você pode pagar por um cliente?", "Calculadora de CAC e LTV").url],
    card: "summary_large_image",
    title: "Calculadora de CAC e LTV | UPDO",
    description: "Calcule grátis o LTV, o CAC atual e o CAC máximo saudável do seu negócio, o LTV:CAC, o payback em meses e o ROAS mínimo para não ter prejuízo. Receba o diagnóstico em PDF.",
  },
};

export default function CalculadoraCacPagina() {
  return <CalculadoraCac />;
}
