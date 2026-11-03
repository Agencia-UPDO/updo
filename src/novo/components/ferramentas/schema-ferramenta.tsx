import Script from "next/script";

// Dados estruturados das ferramentas gratuitas (Google e IAs): aplicação web gratuita da UPDO e o caminho até ela
export default function SchemaFerramenta({ slug, nome, descricao }: { slug: string; nome: string; descricao: string }) {
  const url = `https://updo.com.br/ferramentas/${slug}`;
  const aplicacao = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: nome,
    description: descricao,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    provider: { "@type": "Organization", name: "UPDO", url: "https://updo.com.br" },
  };
  const caminho = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://updo.com.br" },
      { "@type": "ListItem", position: 2, name: "Ferramentas", item: "https://updo.com.br/ferramentas" },
      { "@type": "ListItem", position: 3, name: nome, item: url },
    ],
  };
  return (
    <>
      <Script id={`schema-ferramenta-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aplicacao) }} />
      <Script id={`schema-breadcrumb-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caminho) }} />
    </>
  );
}
