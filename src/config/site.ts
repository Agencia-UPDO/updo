const productionSiteUrl = "https://www.updo.com.br";
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
const isLocalSiteUrl =
  !publicSiteUrl ||
  publicSiteUrl.includes("localhost") ||
  publicSiteUrl.includes("127.0.0.1") ||
  publicSiteUrl.includes("[::1]");

const siteUrl = isLocalSiteUrl ? productionSiteUrl : publicSiteUrl;

export const siteConfig = {
  name: "UPDO",
  description:
    "Agência de marketing, vendas, dados e IA em Curitiba para empresas que querem gerar demanda, estruturar funil comercial e crescer com previsibilidade.",
  url: siteUrl,
  ogImage: `${siteUrl}/og.jpg`,
  links: {
    twitter: "https://twitter.com/updo",
    github: "https://github.com/updo",
  },
  contact: {
    email: "contato@updo.com.br",
    phone: "+55 41 98711-2003",
    whatsapp: "5541987112003",
  },
  addresses: [
    {
      label: "Unidade Batel I",
      street: "Rua Francisco Rocha, 198 · Batel",
      city: "Curitiba / PR",
    },
    {
      label: "Unidade Batel II",
      street: "Al. Presidente Taunay, 130 · Batel",
      city: "Curitiba / PR",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/agencia-updo/",
    instagram: "https://www.instagram.com/agenciaupdo/",
    facebook: "https://www.facebook.com/agenciaupdo",
    youtube: "https://www.youtube.com/@agenciaupdo",
  },
  cnpj: "30.119.930/0001-20",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Sobre",
      href: "/sobre",
    },
    {
      title: "Como trabalhamos",
      href: "/o-que-fazemos",
    },
    {
      title: "Serviços",
      href: "/#servicos",
    },
    {
      title: "Setores",
      href: "/#setores",
    },
    {
      title: "Cases",
      href: "/cases",
    },
    {
      title: "Treinamentos",
      href: "/treinamentos-corporativos",
    },
    {
      title: "Insights",
      href: "https://insights.updo.com.br",
    },
  ],
  sectors: [
    {
      slug: "educacao",
      title: "Educação",
      description:
        "Captação previsível de alunos para faculdades, pós-graduações e cursos livres.",
      href: "/marketing-educacional",
    },
    {
      slug: "ecommerce",
      title: "E-commerce",
      description:
        "Performance, conversão e LTV para lojas que querem escalar sem queimar margem.",
      href: "/marketing-para-ecommerce",
    },
    {
      slug: "varejo",
      title: "Varejo",
      description:
        "Tráfego, integração loja física e digital, atendimento e recompra para marcas de varejo.",
      href: "/marketing-para-varejo",
    },
    {
      slug: "industria",
      title: "Indústria",
      description:
        "Geração de demanda para venda complexa, ciclo longo e ticket alto na indústria.",
      href: "/marketing-para-industria",
    },
    {
      slug: "b2b",
      title: "B2B",
      description:
        "Estruturação comercial, qualificação e processo de vendas para serviços e tecnologia B2B.",
      href: "/marketing-para-b2b",
    },
    {
      slug: "servicos",
      title: "Empresas de Serviços",
      description:
        "Canal previsível, posicionamento e qualificação para planos de saúde, consultorias, seguros, comunicação visual e outros serviços.",
      href: "/marketing-para-servicos",
    },
  ],
  stats: {
    companies: "+300",
    yearsOfMarket: "+1 década",
    revenueGenerated: "+R$ 750M",
    rdAward: "3x finalista RD Station",
  },
  educationalNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Neuromarketing",
      href: "/#neuromarketing",
    },
    {
      title: "O Método",
      href: "/#metodologia",
    },
    {
      title: "Radar",
      href: "/#sistema",
    },
    {
      title: "Serviços",
      href: "/#servicos",
    },
    {
      title: "Especialistas",
      href: "/#especialistas",
    },
    {
      title: "Dúvidas",
      href: "/#faq",
    },
    {
      title: "Cases",
      href: "/#cases",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
