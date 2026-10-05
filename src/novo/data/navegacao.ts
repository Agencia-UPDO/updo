import { siteConfig } from '@/config/site';
import {
  Activity,
  Bot,
  Briefcase,
  Building2,
  Factory,
  Filter,
  GraduationCap,
  Handshake,
  Landmark,
  Presentation,
  Workflow,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  SearchCheck,
  ShoppingBag,
  Store,
  type LucideIcon,
} from 'lucide-react';

export interface NavLink {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export const servicos: NavLink[] = [
  {
    title: 'Geração de Demanda',
    href: '/servicos/geracao-de-demanda',
    icon: Megaphone,
    description: 'Mídia paga com foco em lead que compra',
  },
  {
    title: 'Funil e Automação',
    href: '/servicos/funil-e-automacao',
    icon: Filter,
    description: 'CRM, RD Station e WhatsApp organizados',
  },
  {
    title: 'Inside Sales',
    href: '/servicos/inside-sales',
    icon: Handshake,
    description: 'Playbook, cadência e gestão de meta',
  },
  {
    title: 'UX e CRO',
    href: '/servicos/ux-cro',
    icon: MousePointerClick,
    description: 'Páginas e jornadas que convertem mais',
  },
  {
    title: 'Inteligência de Dados',
    href: '/servicos/inteligencia-de-dados',
    icon: Activity,
    description: 'Dashboards, BI e Radar UPDO',
  },
  {
    title: 'IA para Vendas',
    href: '/servicos/ia-para-vendas',
    icon: Bot,
    description: 'Agentes para qualificar e atender',
  },
  {
    title: 'ChatGPT Ads',
    href: '/servicos/chatgpt-ads',
    icon: MessageSquareText,
    description: 'Anúncios e presença dentro do ChatGPT',
  },
  {
    title: 'Cliente Oculto',
    href: '/servicos/cliente-oculto',
    icon: SearchCheck,
    description: 'Auditoria real do seu atendimento',
  },
];

const iconesSetor: Record<string, LucideIcon> = {
  educacao: GraduationCap,
  ecommerce: ShoppingBag,
  varejo: Store,
  industria: Factory,
  b2b: Building2,
  servicos: Briefcase,
};

export const setores: NavLink[] = siteConfig.sectors.map((sector) => ({
  title: sector.title,
  href: sector.href,
  description: sector.description,
  icon: iconesSetor[sector.slug],
}));

export interface CasoMenu extends NavLink {
  metrica: string;
}

export const casesMenu: CasoMenu[] = [
  {
    title: 'Educação',
    href: '/cases/educacao',
    icon: GraduationCap,
    metrica: '+211%',
    description: 'leads para uma instituição de ensino',
  },
  {
    title: 'E-commerce',
    href: '/cases/e-commerce',
    icon: ShoppingBag,
    metrica: '+6.900%',
    description: 'vendas mensais em moda infantil',
  },
  {
    title: 'Varejo',
    href: '/cases/varejo',
    icon: Store,
    metrica: '+87%',
    description: 'faturamento de um varejista em 2 anos',
  },
  {
    title: 'Indústria',
    href: '/cases/industria',
    icon: Factory,
    metrica: '1.527%',
    description: 'ROI de mídia em bens de consumo',
  },
];

export const empresaMenu: NavLink[] = [
  {
    title: 'Sobre a UPDO',
    href: '/sobre',
    icon: Landmark,
    description: 'Mais de uma década estruturando crescimento',
  },
  {
    title: 'Como trabalhamos',
    href: '/o-que-fazemos',
    icon: Workflow,
    description: 'O método em cinco etapas, na prática',
  },
  {
    title: 'Treinamentos corporativos',
    href: '/treinamentos-corporativos',
    icon: Presentation,
    description: 'Vendas, neurovendas e IA para times comerciais',
  },
];

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
