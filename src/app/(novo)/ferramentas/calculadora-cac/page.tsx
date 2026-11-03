import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import SchemaFerramenta from "@/novo/components/ferramentas/schema-ferramenta";
import ExplicacaoFerramenta from "@/novo/components/ferramentas/explicacao-ferramenta";
import { conteudoCac } from "@/novo/data/ferramentas-conteudo";
import CalculadoraCac from "@/novo/components/calculadora/calculadora-cac";

export const metadata: Metadata = {
  title: "Calculadora de CAC e LTV",
  description:
    "Calcule grátis o LTV, quanto você pode pagar por cliente (CAC máximo) e por lead, e quanto investir por mês para ter os clientes que quer, em 3 cenários, com payback e ROI. Receba o diagnóstico em PDF.",
  alternates: { canonical: "https://updo.com.br/ferramentas/calculadora-cac" },
  openGraph: {
    images: [imagemOg("Quanto você pode pagar por um cliente?", "Calculadora de CAC e LTV")],
    title: "Calculadora de CAC e LTV | UPDO",
    description: "Calcule grátis o LTV, quanto você pode pagar por cliente (CAC máximo) e por lead, e quanto investir por mês para ter os clientes que quer, em 3 cenários, com payback e ROI. Receba o diagnóstico em PDF.",
    url: "https://updo.com.br/ferramentas/calculadora-cac",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Quanto você pode pagar por um cliente?", "Calculadora de CAC e LTV").url],
    card: "summary_large_image",
    title: "Calculadora de CAC e LTV | UPDO",
    description: "Calcule grátis o LTV, quanto você pode pagar por cliente (CAC máximo) e por lead, e quanto investir por mês para ter os clientes que quer, em 3 cenários, com payback e ROI. Receba o diagnóstico em PDF.",
  },
};

export default function CalculadoraCacPagina() {
  return (
    <>
      <SchemaFerramenta slug="calculadora-cac" nome="Calculadora de CAC e LTV" descricao={metadata.description as string} />
      <CalculadoraCac />
      <ExplicacaoFerramenta slug="calculadora-cac" conteudo={conteudoCac} />
    </>
  );
}
