import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import FerramentasPagina from "@/novo/components/ferramentas/ferramentas-pagina";

export const metadata: Metadata = {
  title: "Ferramentas gratuitas de marketing e vendas",
  description:
    "Calculadoras gratuitas da UPDO para entender seus números de marketing e vendas: CAC, LTV, payback, projeção de vendas, sazonalidade e meta mês a mês.",
  alternates: { canonical: "https://updo.com.br/ferramentas" },
  openGraph: {
    images: [imagemOg("Entenda seus números de marketing e vendas", "Ferramentas gratuitas")],
    title: "Ferramentas gratuitas de marketing e vendas | UPDO",
    description: "Calculadoras gratuitas da UPDO para entender seus números de marketing e vendas: CAC, LTV, payback, projeção de vendas, sazonalidade e meta mês a mês.",
    url: "https://updo.com.br/ferramentas",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Entenda seus números de marketing e vendas", "Ferramentas gratuitas").url],
    card: "summary_large_image",
    title: "Ferramentas gratuitas de marketing e vendas | UPDO",
    description: "Calculadoras gratuitas da UPDO para entender seus números de marketing e vendas: CAC, LTV, payback, projeção de vendas, sazonalidade e meta mês a mês.",
  },
};

export default function Ferramentas() {
  return <FerramentasPagina />;
}
