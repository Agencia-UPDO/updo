import { Calculator, CircleDollarSign, Eye, TrendingUp, type LucideIcon } from 'lucide-react';

// true: as ferramentas abrem com um exemplo preenchido (fase de aprovação).
// false: abrem vazias, com o link "Preencher com um exemplo" (versão para publicar).
export const COMECAR_COM_EXEMPLO = false;

export interface Ferramenta {
  titulo: string;
  descricao: string;
  // Frase curta para o menu
  resumo: string;
  href: string;
  icone: LucideIcon;
  // O que a pessoa recebe (aparece como etiquetas no card)
  entregas: string[];
  tempo: string;
}

// Ferramentas gratuitas do site (vitrine em /ferramentas). Cada uma gera lead na RD com o próprio identificador.
export const ferramentas: Ferramenta[] = [
  {
    titulo: 'Calculadora de CAC e LTV',
    resumo: 'Quanto você pode pagar por um cliente',
    descricao:
      'Descubra quanto você pode pagar por um cliente e quanto investir para ter os clientes que quer: LTV, CAC e custo por lead ideais em 3 cenários, payback e ROI.',
    href: '/ferramentas/calculadora-cac',
    icone: Calculator,
    entregas: ['Diagnóstico na hora', 'PDF com os resultados', 'Simulador "E se…?"'],
    tempo: '2 minutos',
  },
  {
    titulo: 'Projeção de vendas e sazonalidade',
    resumo: 'Meta mês a mês, tendência e sazonalidade',
    descricao:
      'Coloque o faturamento ou as vendas dos últimos anos e veja a tendência, os meses fortes e fracos e a meta de cada mês do próximo ano.',
    href: '/ferramentas/projecao-vendas',
    icone: TrendingUp,
    entregas: ['Meta mês a mês', 'Meses fortes e fracos', 'Meta × realizado', 'PDF'],
    tempo: '3 minutos',
  },
  {
    titulo: 'Calculadora de ROI e ROAS',
    resumo: 'Se a sua campanha deu lucro',
    descricao:
      'Coloque o investimento, as vendas, o faturamento e a margem de uma campanha e veja o ROI, o ROAS, se ela deu lucro e quanto rende na vida do cliente.',
    href: '/ferramentas/calculadora-roi',
    icone: CircleDollarSign,
    entregas: ['Resultado na hora', 'Lucro ou prejuízo', 'ROI na vida do cliente', 'PDF'],
    tempo: '1 minuto',
  },
  {
    titulo: 'Análise dos 5 sentidos',
    resumo: 'Neuromarketing: o quanto a marca emociona',
    descricao:
      'Dê uma nota para o quanto a sua marca ativa a visão, o toque, o cheiro, o som e o gosto do cliente, compare com os concorrentes e receba dicas práticas.',
    href: '/ferramentas/analise-5-sentidos',
    icone: Eye,
    entregas: ['Índice sensorial', 'Radar × concorrentes', 'Dicas práticas', 'PDF'],
    tempo: '3 minutos',
  },
];
