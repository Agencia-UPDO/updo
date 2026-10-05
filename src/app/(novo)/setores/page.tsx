import type { Metadata } from "next";
import IndicePagina from "@/novo/components/shared/indice-pagina";
import { setores } from "@/novo/data/navegacao";

const titulo = "Marketing por Setor";
const descricao =
  "Estratégias de marketing e vendas para educação, e-commerce, varejo, indústria, B2B e empresas de serviços. Veja como a UPDO atua em cada mercado.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: "https://updo.com.br/setores" },
  openGraph: {
    title: `${titulo} | UPDO`,
    description: descricao,
    url: "https://updo.com.br/setores",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SetoresPage() {
  return (
    <IndicePagina
      badge="Setores"
      title="Cada mercado *compra de um jeito*"
      description="Começamos pelo funcionamento do seu setor: ciclo de venda, ticket, sazonalidade e quem decide a compra."
      secao={{
        badge: "Todos os setores",
        title: "Escolha o *seu mercado*",
        description: "Cada página traz os gargalos mais comuns do setor, como estruturamos o crescimento e um case real.",
      }}
      itens={setores.map((setor) => ({
        title: setor.title,
        description: setor.description ?? "",
        href: setor.href,
        icon: setor.icon,
      }))}
      rotuloLink="Ver estratégia"
      secundario={{ text: "Ver serviços", href: "/servicos" }}
    />
  );
}
