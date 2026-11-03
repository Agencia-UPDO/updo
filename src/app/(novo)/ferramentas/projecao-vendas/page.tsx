import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import SchemaFerramenta from "@/novo/components/ferramentas/schema-ferramenta";
import ProjecaoVendas from "@/novo/components/projecao/projecao-vendas";

export const metadata: Metadata = {
  title: "Projeção de vendas e sazonalidade",
  description:
    "Coloque o faturamento ou as vendas mês a mês e veja grátis a tendência, os meses fortes e fracos, o fechamento previsto do ano e a meta de cada mês do próximo ano.",
  alternates: { canonical: "https://updo.com.br/ferramentas/projecao-vendas" },
  openGraph: {
    images: [imagemOg("Projete suas vendas e descubra sua sazonalidade", "Projeção de vendas")],
    title: "Projeção de vendas e sazonalidade | UPDO",
    description: "Coloque o faturamento ou as vendas mês a mês e veja grátis a tendência, os meses fortes e fracos, o fechamento previsto do ano e a meta de cada mês do próximo ano.",
    url: "https://updo.com.br/ferramentas/projecao-vendas",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Projete suas vendas e descubra sua sazonalidade", "Projeção de vendas").url],
    card: "summary_large_image",
    title: "Projeção de vendas e sazonalidade | UPDO",
    description: "Coloque o faturamento ou as vendas mês a mês e veja grátis a tendência, os meses fortes e fracos, o fechamento previsto do ano e a meta de cada mês do próximo ano.",
  },
};

export default function ProjecaoVendasPagina() {
  return (
    <>
      <SchemaFerramenta slug="projecao-vendas" nome="Projeção de vendas e sazonalidade" descricao={metadata.description as string} />
      <ProjecaoVendas />
    </>
  );
}
