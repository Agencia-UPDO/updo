import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import SchemaFerramenta from "@/novo/components/ferramentas/schema-ferramenta";
import ExplicacaoFerramenta from "@/novo/components/ferramentas/explicacao-ferramenta";
import { conteudoSentidos } from "@/novo/data/ferramentas-conteudo";
import AnaliseSentidos from "@/novo/components/sentidos/analise-sentidos";

const descricao =
  "Análise grátis de neuromarketing: dê uma nota de 0 a 10 para o quanto a sua marca ativa a visão, o toque, o cheiro, o som e o gosto do cliente, compare com os concorrentes e receba dicas práticas e o resultado em PDF.";

export const metadata: Metadata = {
  title: "Análise dos 5 sentidos (neuromarketing)",
  description: descricao,
  alternates: { canonical: "https://updo.com.br/ferramentas/analise-5-sentidos" },
  openGraph: {
    images: [imagemOg("Quanto a sua marca mexe com os 5 sentidos?", "Análise dos 5 sentidos")],
    title: "Análise dos 5 sentidos (neuromarketing) | UPDO",
    description: descricao,
    url: "https://updo.com.br/ferramentas/analise-5-sentidos",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Quanto a sua marca mexe com os 5 sentidos?", "Análise dos 5 sentidos").url],
    card: "summary_large_image",
    title: "Análise dos 5 sentidos (neuromarketing) | UPDO",
    description: descricao,
  },
};

export default function AnaliseSentidosPagina() {
  return (
    <>
      <SchemaFerramenta slug="analise-5-sentidos" nome="Análise dos 5 sentidos (neuromarketing)" descricao={descricao} />
      <AnaliseSentidos />
      <ExplicacaoFerramenta slug="analise-5-sentidos" conteudo={conteudoSentidos} />
    </>
  );
}
