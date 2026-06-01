import type { MetadataRoute } from "next";

const baseUrl = "https://www.updo.com.br";

const routes = [
  { path: "/", priority: 1 },
  { path: "/sobre", priority: 0.8 },
  { path: "/o-que-fazemos", priority: 0.85 },
  { path: "/diagnostico", priority: 0.95 },
  { path: "/treinamentos-corporativos", priority: 0.85 },
  { path: "/cases", priority: 0.8 },
  { path: "/cases/educacao", priority: 0.75 },
  { path: "/cases/e-commerce", priority: 0.75 },
  { path: "/cases/varejo", priority: 0.75 },
  { path: "/cases/industria", priority: 0.75 },
  { path: "/marketing-educacional", priority: 0.9 },
  { path: "/marketing-para-ecommerce", priority: 0.85 },
  { path: "/marketing-para-varejo", priority: 0.85 },
  { path: "/marketing-para-industria", priority: 0.85 },
  { path: "/marketing-para-b2b", priority: 0.85 },
  { path: "/marketing-para-servicos", priority: 0.85 },
  { path: "/servicos/ia-para-vendas", priority: 0.8 },
  { path: "/servicos/inside-sales", priority: 0.8 },
  { path: "/servicos/inteligencia-de-dados", priority: 0.8 },
  { path: "/servicos/funil-e-automacao", priority: 0.8 },
  { path: "/servicos/ux-cro", priority: 0.8 },
  { path: "/servicos/geracao-de-demanda", priority: 0.8 },
  { path: "/politica-de-privacidade", priority: 0.3 },
  { path: "/termos-de-uso", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-01");

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
