import {
  BarChart3,
  Clock,
  Database,
  Eye,
  Filter,
  Layers,
  Target,
  Zap,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const inteligenciaDeDados: ServicoConteudo = {
  slug: 'inteligencia-de-dados',
  nome: 'Inteligência de Dados',
  hero: {
    title: 'Decisão baseada em dado, não em feeling ou planilha',
    description:
      'Estruturamos coleta, dashboards, KPIs e atribuição para você enxergar quais canais geram receita, margem e previsibilidade.',
    bullets: [
      'Dashboard unificado de marketing, vendas e financeiro',
      'Atribuição por canal e jornada completa',
      'KPIs com alerta quando a meta é ameaçada',
    ],
    ctaText: 'Estruturar meus dados',
    ctaSecundario: { text: 'Ver diagnóstico', href: '/diagnostico' },
  },
  resultado: {
    title: 'De 12% para 94% de receita rastreada',
    description:
      'Empresa B2B com verba em seis canais, UTMs inconsistentes e relatório manual. Após coleta, dashboard e atribuição, a verba deixou de seguir percepção e passou a seguir receita.',
    metrics: [
      { value: '94%', label: 'receita rastreada' },
      { value: '-35%', label: 'CAC' },
      { value: '2,8x', label: 'ROI' },
      { value: '< 5min', label: 'relatório semanal' },
    ],
  },
  visual: 'dashboard',
  problemas: {
    title: 'Onde a leitura dos dados *costuma quebrar*',
    description:
      'Se cada ferramenta mostra um número diferente, a decisão de verba volta a ser opinião.',
    items: [
      {
        icon: Layers,
        title: 'Dados espalhados em várias ferramentas',
        description:
          'GA4, Meta Ads, CRM, planilha e RD Station mostram leituras diferentes. Sem visão unificada, a decisão volta para o feeling.',
      },
      {
        icon: BarChart3,
        title: 'O último clique leva crédito demais',
        description:
          'Sem atribuição, o canal que aparece no fim da jornada recebe mérito por uma venda que talvez tenha começado em outro lugar.',
      },
      {
        icon: Clock,
        title: 'Relatório manual chega atrasado',
        description:
          'Quando a planilha fica pronta, o cenário já mudou. A equipe perde tempo consolidando dado em vez de decidir o próximo ajuste.',
      },
    ],
  },
  plano: {
    title: 'Como estruturamos os seus *dados*',
    description: 'Três etapas. A primeira versão do dashboard costuma ficar pronta entre 2 e 4 semanas.',
    passos: [
      {
        title: 'Auditoria da coleta',
        description:
          'Revisamos Tag Manager, UTMs, eventos e conversões para saber o que dá para confiar hoje.',
      },
      {
        title: 'Dashboard e atribuição',
        description:
          'Conectamos as fontes em uma tela só e definimos como cada canal recebe crédito pela venda.',
      },
      {
        title: 'KPIs, alertas e leitura',
        description:
          'Definimos metas por canal, configuramos alertas e treinamos o time para ler o mesmo número.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando os dados *têm estrutura*',
    sem: [
      'Cada ferramenta mostra um número diferente',
      'O último clique leva o crédito da venda',
      'O relatório da semana chega quando já é tarde',
      'A verba segue percepção, não receita',
    ],
    com: [
      'Marketing, vendas e financeiro na mesma tela',
      'Crédito distribuído pela jornada de compra',
      'Relatório atualizado sem montagem manual',
      'Alerta quando CAC, conversão ou receita saem da meta',
    ],
  },
  entregas: {
    ctaText: 'Quero estruturar meus dados',
    title: '*Seis frentes* para decidir com dado confiável',
    description:
      'A entrega conecta infraestrutura, visualização, governança e rotina para o dado sair da planilha e entrar na decisão.',
    items: [
      {
        icon: Database,
        title: 'Coleta e estrutura de dados',
        description:
          'Tag Manager, UTMs, eventos e conversões configurados para gerar uma base confiável.',
      },
      {
        icon: BarChart3,
        title: 'Dashboard unificado',
        description:
          'Marketing, vendas e financeiro em uma tela com atualização recorrente e leitura clara.',
      },
      {
        icon: Target,
        title: 'Atribuição de conversão',
        description:
          'Modelo para entender quais canais participam da jornada e onde a verba deve ganhar força.',
      },
      {
        icon: Eye,
        title: 'KPIs e alertas automáticos',
        description: 'Metas por canal e alertas quando CAC, conversão ou receita saem do esperado.',
      },
      {
        icon: Layers,
        title: 'Cohort, LTV e qualidade de canal',
        description:
          'Análise de quem compra, volta, permanece e gera margem depois da primeira conversão.',
      },
      {
        icon: Filter,
        title: 'Governança e dicionário de dados',
        description:
          'Nomenclatura, acessos e documentação para o time ler o mesmo número do mesmo jeito.',
      },
    ],
  },
  pilares: {
    badge: 'Sistema de dados',
    title: 'Os *quatro pilares* da inteligência de dados UPDO',
    description:
      'Coleta, visualização, atribuição e alerta trabalhando juntos para a decisão ser tomada com dado real.',
    items: [
      {
        icon: Database,
        label: 'Coleta limpa',
        description: 'Eventos, UTMs e conversões validados desde a origem.',
        resultado: 'Base confiável',
      },
      {
        icon: BarChart3,
        label: 'Dashboard centralizado',
        description: 'Fontes conectadas em uma leitura única de marketing e vendas.',
        resultado: 'Visão real',
      },
      {
        icon: Target,
        label: 'Atribuição correta',
        description: 'Crédito distribuído pela jornada, não só pelo último clique.',
        resultado: 'Verba certa',
      },
      {
        icon: Zap,
        label: 'Alerta proativo',
        description: 'Indicador fora da meta aparece antes de virar problema de caixa.',
        resultado: 'Ação rápida',
      },
    ],
  },
  formulario: {
    title: 'Vamos entender como estão seus *dados*',
    description:
      'Preencha para analisarmos coleta, atribuição, dashboards e governança antes da reunião.',
    formName: 'Diagnóstico Inteligência de Dados',
    submitText: 'Diagnosticar meus dados',
    nota: 'Com base nas suas respostas, preparamos um diagnóstico mais preciso da maturidade dos seus dados.',
    selects: [
      {
        id: 'businessType',
        label: 'Tipo de negócio',
        options: [
          'B2B / Serviços',
          'B2C / Produto físico',
          'SaaS / Software',
          'E-commerce',
          'Educação / EAD',
          'Outro',
        ],
      },
      {
        id: 'channels',
        label: 'Canais ativos',
        options: ['1 a 2 canais', '3 a 5 canais', '6 a 10 canais', 'Mais de 10 canais'],
      },
      {
        id: 'mainPain',
        label: 'Principal dor',
        options: [
          'Dados espalhados',
          'Não sei qual canal converte',
          'Relatório manual',
          'CAC alto sem causa clara',
          'Sem KPIs definidos',
        ],
      },
      {
        id: 'currentTool',
        label: 'Ferramenta atual',
        options: [
          'Google Analytics / GA4',
          'Planilha manual',
          'Looker Studio',
          'Power BI',
          'Não uso ferramenta',
          'Outro',
        ],
      },
    ],
  },
  caso: {
    badge: 'Resultado real',
    title: 'De 12% para 94% de receita rastreada.',
    description:
      'Empresa B2B com verba em seis canais, UTMs inconsistentes e relatório manual. Após coleta, dashboard e atribuição, a verba deixou de seguir percepção e passou a seguir receita.',
    ctaText: 'Quero esse resultado nos meus dados',
    metrics: [
      { value: '94%', label: 'receita rastreada' },
      { value: '-35%', label: 'CAC' },
      { value: '2,8x', label: 'ROI' },
      { value: '< 5min', label: 'relatório semanal' },
    ],
  },
  faqTexto: {
    badge: 'Dúvidas frequentes',
    title: '*Dúvidas* sobre dados e analytics de marketing.',
    description:
      'Antes de contratar ferramenta ou analista, vale entender onde está o gargalo real dos seus dados.',
    citacao: 'Dado errado é pior que dado nenhum, porque a equipe passa a confiar na direção errada.',
  },
  faq: [
    {
      question: 'Funciona com as ferramentas que já usamos?',
      answer:
        'Na maioria dos casos, sim. Integramos GA4, Meta Ads, RD Station, HubSpot, Pipedrive, Shopify, WooCommerce, planilhas e outras fontes comuns.',
    },
    {
      question: 'Quanto tempo para ter o dashboard funcionando?',
      answer:
        'A primeira versão costuma ficar pronta entre 2 e 4 semanas, dependendo da quantidade de fontes e da qualidade da coleta atual.',
    },
    {
      question: 'Precisamos de analista interno para usar?',
      answer:
        'Não. O dashboard é desenhado para leitura executiva e operacional. Também entregamos guia de leitura e onboarding do time.',
    },
    {
      question: 'O que é atribuição multi-touch?',
      answer:
        'É uma forma de distribuir crédito entre os pontos de contato da jornada, em vez de considerar apenas o último clique antes da venda.',
    },
    {
      question: 'Serve para e-commerce?',
      answer:
        'Sim. Podemos conectar eventos de produto, carrinho, compra, SKU, ticket, margem e comportamento pós-clique.',
    },
    {
      question: 'Os dados ficam seguros?',
      answer:
        'Trabalhamos com mínimo acesso, credenciais seguras e governança. O objetivo é organizar os dados nas ferramentas da própria operação.',
    },
  ],
};
