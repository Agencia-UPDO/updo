import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import SchemaFerramenta from "@/novo/components/ferramentas/schema-ferramenta";
import CalculadoraRoi from "@/novo/components/roi/calculadora-roi";

const descricao =
  "Calcule grátis o ROI e o ROAS da sua campanha: coloque o investimento, as vendas, o faturamento e a margem e veja se deu lucro, o ROAS para empatar e o retorno na vida do cliente. Receba o resultado em PDF.";

export const metadata: Metadata = {
  title: "Calculadora de ROI e ROAS",
  description: descricao,
  alternates: { canonical: "https://updo.com.br/ferramentas/calculadora-roi" },
  openGraph: {
    images: [imagemOg("Sua campanha deu lucro?", "Calculadora de ROI e ROAS")],
    title: "Calculadora de ROI e ROAS | UPDO",
    description: descricao,
    url: "https://updo.com.br/ferramentas/calculadora-roi",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Sua campanha deu lucro?", "Calculadora de ROI e ROAS").url],
    card: "summary_large_image",
    title: "Calculadora de ROI e ROAS | UPDO",
    description: descricao,
  },
};

export default function CalculadoraRoiPagina() {
  return (
    <>
      <SchemaFerramenta slug="calculadora-roi" nome="Calculadora de ROI e ROAS" descricao={metadata.description as string} />
      <CalculadoraRoi />
    </>
  );
}
