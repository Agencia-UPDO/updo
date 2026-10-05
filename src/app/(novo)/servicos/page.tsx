import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import IndicePagina from "@/novo/components/shared/indice-pagina";
import { servicosHome } from "@/novo/data/home";
import { servicos } from "@/novo/data/navegacao";

const titulo = "Serviços de Marketing, Vendas e Dados";
const descricao =
  "Geração de demanda, funil e automação, inside sales, UX e CRO, dados, IA para vendas, ChatGPT Ads e cliente oculto. Conheça os serviços da UPDO.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: "https://updo.com.br/servicos" },
  openGraph: {
    images: [imagemOg("Do anúncio ao caixa, cada etapa com dono e meta", "Serviços")],
    title: `${titulo} | UPDO`,
    description: descricao,
    url: "https://updo.com.br/servicos",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [imagemOg("Do anúncio ao caixa, cada etapa com dono e meta", "Serviços").url],
  },
};

const icones = Object.fromEntries(servicos.map((servico) => [servico.href, servico.icon]));

export default function ServicosPage() {
  return (
    <IndicePagina
      badge="Serviços"
      title="Do anúncio ao caixa, cada etapa com *dono e meta*"
      description="Você contrata o que a operação precisa agora e integra o resto quando fizer sentido. Tudo conversa com o mesmo funil e os mesmos números."
      secao={{
        badge: "Todos os serviços",
        title: "Oito frentes que funcionam como *um sistema*",
        description: "Escolha por onde começar. Cada serviço tem página própria com método, entregas, case e perguntas frequentes.",
      }}
      itens={servicosHome.map((servico) => ({ ...servico, icon: icones[servico.href] }))}
      rotuloLink="Conhecer serviço"
      quatroColunas
      secundario={{ text: "Ver setores", href: "/setores" }}
    />
  );
}
