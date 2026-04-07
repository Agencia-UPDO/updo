export const siteConfig = {
  name: "UPDO",
  description: "Novo site institucional da UPDO",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "https://updo.com.br/og.jpg",
  links: {
    twitter: "https://twitter.com/updo",
    github: "https://github.com/updo",
  },
  contact: {
    email: "contato@updo.com.br",
    phone: "+55 11 0000-0000",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Como Trabalhamos",
      href: "/como-trabalhamos",
    },
    {
      title: "Serviços",
      href: "/servicos",
    },
    {
      title: "Cases",
      href: "/cases",
    },
    {
      title: "Insights",
      href: "https://insights.updo.com.br",
    },
    {
      title: "Rodrigo Bueno",
      href: "/rodrigo-bueno",
    },
    {
      title: "Diagnóstico Estratégico",
      href: "/diagnostico",
    },
  ],
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
