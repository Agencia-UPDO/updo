import { siteConfig } from '@/config/site';

export interface NavLink {
  title: string;
  href: string;
  description?: string;
}

export const servicos: NavLink[] = [
  {
    title: 'Geração de Demanda',
    href: '/servicos/geracao-de-demanda',
    description: 'Mídia paga com foco em lead que compra',
  },
  {
    title: 'Funil e Automação',
    href: '/servicos/funil-e-automacao',
    description: 'CRM, RD Station e WhatsApp organizados',
  },
  {
    title: 'Inside Sales',
    href: '/servicos/inside-sales',
    description: 'Playbook, cadência e gestão de meta',
  },
  {
    title: 'UX e CRO',
    href: '/servicos/ux-cro',
    description: 'Páginas e jornadas que convertem mais',
  },
  {
    title: 'Inteligência de Dados',
    href: '/servicos/inteligencia-de-dados',
    description: 'Dashboards, BI e Radar UPDO',
  },
  {
    title: 'IA para Vendas',
    href: '/servicos/ia-para-vendas',
    description: 'Agentes para qualificar e atender',
  },
  {
    title: 'ChatGPT Ads',
    href: '/servicos/chatgpt-ads',
    description: 'Anúncios e presença dentro do ChatGPT',
  },
  {
    title: 'Cliente Oculto',
    href: '/servicos/cliente-oculto',
    description: 'Auditoria real do seu atendimento',
  },
];

export const setores: NavLink[] = siteConfig.sectors.map((sector) => ({
  title: sector.title,
  href: sector.href,
  description: sector.description,
}));

export const menuPrincipal: NavLink[] = [
  { title: 'Sobre', href: '/sobre' },
  { title: 'Como trabalhamos', href: '/o-que-fazemos' },
  { title: 'Cases', href: '/cases' },
  { title: 'Treinamentos', href: '/treinamentos-corporativos' },
  { title: 'Insights', href: 'https://insights.updo.com.br' },
];

export const rodapeColunas: { title: string; links: NavLink[] }[] = [
  {
    title: 'Serviços',
    links: servicos.map(({ title, href }) => ({ title, href })),
  },
  {
    title: 'Setores',
    links: setores.map(({ title, href }) => ({ title, href })),
  },
  {
    title: 'Empresa',
    links: [
      { title: 'Sobre a UPDO', href: '/sobre' },
      { title: 'Como trabalhamos', href: '/o-que-fazemos' },
      { title: 'Cases', href: '/cases' },
      { title: 'Treinamentos', href: '/treinamentos-corporativos' },
      { title: 'Diagnóstico', href: '/diagnostico' },
      { title: 'Insights', href: 'https://insights.updo.com.br' },
    ],
  },
];
