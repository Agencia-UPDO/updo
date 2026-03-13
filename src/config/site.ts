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
      title: "Página Inicial",
      href: "/",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
