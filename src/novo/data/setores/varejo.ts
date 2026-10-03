import {
  BarChart3,
  CalendarDays,
  LayoutDashboard,
  MapPin,
  Megaphone,
  MessageCircle,
  RefreshCw,
  Store,
  UserCheck,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const setorVarejo: ServicoConteudo = {
  slug: 'marketing-para-varejo',
  nome: 'Varejo',
  tipo: 'setor',
  hero: {
    title: 'Marketing para varejo que conecta tráfego local, WhatsApp e venda',
    description:
      'Estratégia para lojas físicas e operações híbridas que precisam gerar fluxo, vender melhor no atendimento e crescer com ticket médio, recompra e previsibilidade.',
    bullets: [
      'Campanhas locais conectadas a loja, WhatsApp e catálogo',
      'Atendimento comercial com mais processo e menos perda',
      'Planejamento por sazonalidade, categoria, margem e ticket',
    ],
    ctaText: 'Diagnosticar meu varejo',
  },
  resultado: {
    title: 'Crescimento de faturamento após 20 anos de operação',
    description:
      'Reconstruímos a fundação digital, conectamos catálogo, CRM, WhatsApp e planejamento sazonal para tirar um varejista do platô de faturamento.',
    metrics: [
      { value: '+87%', label: 'faturamento' },
      { value: '+1.400%', label: 'tráfego mensal' },
      { value: '+35%', label: 'ticket médio' },
      { value: '+1.000', label: 'solicitações por mês' },
    ],
  },
  cartao: {
    rotulo: 'Case varejo',
    titulo: 'Crescimento com loja física, digital e atendimento conectados',
    metricas: [
      { label: 'Loja física', valor: '+87%', detalhe: 'crescimento de faturamento' },
      { label: 'Tráfego mensal', valor: '+1.400%', detalhe: 'de 800 para 12 mil visitas' },
      { label: 'Leads', valor: '+1.000', detalhe: 'solicitações por mês' },
      { label: 'Ticket médio', valor: '+35%', detalhe: 'maior valor por venda' },
    ],
    nota: 'O varejo cresce quando mídia, catálogo, WhatsApp, loja e equipe comercial param de operar como partes soltas.',
  },
  problemas: {
    title: 'Onde o varejo perde vendas entre anúncio, WhatsApp e loja física',
    description:
      'Se a campanha traz gente e a venda não acontece, o problema costuma estar no caminho entre o anúncio, o atendimento e a loja.',
    items: [
      {
        icon: MapPin,
        title: 'Tráfego local sem direção',
        description:
          'Campanhas levam pessoas para o site, WhatsApp ou loja, mas a jornada não deixa claro qual ação gera venda.',
      },
      {
        icon: MessageCircle,
        title: 'WhatsApp sem processo',
        description:
          'O cliente chama, pergunta preço, some e a equipe perde oportunidade por falta de roteiro, prioridade e acompanhamento.',
      },
      {
        icon: RefreshCw,
        title: 'Venda sem recompra',
        description:
          'A loja investe para atrair novos clientes, mas não cria rotina para reativar base, sazonalidade e categorias.',
      },
    ],
  },
  plano: {
    title: 'Como fazemos seu varejo vender mais',
    description: 'Três etapas, com calendário comercial e leitura semanal de canal e atendimento.',
    passos: [
      {
        title: 'Diagnóstico da operação',
        description:
          'Analisamos campanhas, presença local, WhatsApp, catálogo e base de clientes para achar onde a venda escapa.',
      },
      {
        title: 'Canais e atendimento',
        description:
          'Ativamos campanhas locais, organizamos o WhatsApp e treinamos o time com roteiro e técnicas de venda.',
      },
      {
        title: 'Sazonalidade e recompra',
        description:
          'Planejamos o calendário comercial, reativamos a base e acompanhamos visitas, vendas e ticket por canal.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando o varejo opera conectado',
    sem: [
      'A campanha traz gente que não compra',
      'O cliente pergunta preço no WhatsApp e some',
      'A loja depende só de cliente novo',
      'Ninguém sabe de qual canal veio a venda',
    ],
    com: [
      'Campanhas locais ligadas à loja e ao WhatsApp',
      'Atendimento com roteiro, prioridade e follow-up',
      'Base reativada por sazonalidade e categoria',
      'Visitas, vendas e ticket lidos por canal',
    ],
  },
  entregas: {
    title: 'Mais fluxo, atendimento e recompra para loja física e varejo digital',
    description:
      'A entrega conecta mídia local, catálogo, WhatsApp, equipe e calendário comercial para o varejo crescer com previsibilidade.',
    items: [
      {
        icon: Megaphone,
        title: 'Campanhas locais e regionais',
        description: 'Google, Facebook, Instagram e WhatsApp com foco em fluxo e venda na região.',
      },
      {
        icon: Store,
        title: 'Catálogo e ofertas',
        description: 'Catálogo, páginas de produto, ofertas e materiais de apoio para venda.',
      },
      {
        icon: MessageCircle,
        title: 'Tráfego, WhatsApp e loja integrados',
        description: 'Integração entre tráfego, WhatsApp, loja física e equipe comercial.',
      },
      {
        icon: UserCheck,
        title: 'Treinamento de vendas',
        description:
          'Técnicas de neurovendas, atendimento e fidelização aplicadas ao dia a dia do time.',
      },
      {
        icon: CalendarDays,
        title: 'Calendário comercial',
        description:
          'Planejamento por sazonalidade, categoria, ticket e margem para datas, promoções e ações de loja.',
      },
      {
        icon: LayoutDashboard,
        title: 'Dashboard e otimização',
        description:
          'Visitas, leads, vendas, ticket e receita por canal, com leitura de campanha, atendimento e estoque.',
      },
    ],
  },
  pilares: {
    badge: 'Sistema de crescimento',
    title: 'Da busca local ao WhatsApp: o que precisa estar conectado',
    description:
      'O cliente pesquisa, chama no WhatsApp, compara, visita a loja e volta em datas sazonais. A estratégia precisa enxergar esse caminho.',
    items: [
      {
        icon: MapPin,
        label: 'Google e Maps',
        description: 'Captura a demanda local.',
        resultado: 'Alta intenção',
      },
      {
        icon: Megaphone,
        label: 'Instagram e Facebook',
        description: 'Gera desejo e fluxo para a loja.',
        resultado: 'Presença regional',
      },
      {
        icon: MessageCircle,
        label: 'WhatsApp',
        description: 'Transforma interesse em venda.',
        resultado: 'Atendimento',
      },
      {
        icon: BarChart3,
        label: 'Sazonalidade',
        description: 'Planeja campanha e estoque.',
        resultado: 'Previsibilidade',
      },
    ],
  },
  formulario: {
    title: 'Vamos entender onde seu varejo perde venda',
    description:
      'Preencha os dados para analisarmos fluxo, canais, atendimento, recompra e previsibilidade.',
    formName: 'Diagnóstico Varejo',
    submitText: 'Quero meu diagnóstico',
    selects: [
      {
        id: 'storeType',
        label: 'Tipo de operação',
        options: [
          'Loja física',
          'Loja física + e-commerce',
          'Catálogo/WhatsApp',
          'Rede de lojas',
          'Franquia',
          'Outro',
        ],
      },
      {
        id: 'challenge',
        label: 'Principal desafio',
        options: [
          'Baixo fluxo na loja',
          'WhatsApp não converte',
          'Tráfego sem venda',
          'Pouca recompra',
          'Ticket médio baixo',
          'Campanhas sem previsibilidade',
          'Dificuldade de medir origem das vendas',
        ],
      },
      {
        id: 'investment',
        label: 'Investimento em mídia',
        options: [
          'Ainda não invisto',
          'Até R$5 mil/mês',
          'R$5 mil a R$20 mil/mês',
          'R$20 mil a R$50 mil/mês',
          'Acima de R$50 mil/mês',
        ],
      },
    ],
  },
  faq: [
    {
      question: 'Vocês fazem marketing para loja física?',
      answer:
        'Sim. A estratégia considera fluxo para loja, WhatsApp, catálogo, campanhas locais e materiais de apoio para o time vender melhor.',
    },
    {
      question: 'Funciona para varejo que vende no físico e no digital?',
      answer:
        'Sim. Esse é o cenário mais comum: conectar site, catálogo, WhatsApp, loja física e equipe comercial em uma mesma leitura de performance.',
    },
    {
      question: 'Vocês trabalham com Google Meu Negócio e Google Maps?',
      answer:
        'Avaliamos presença local, busca, Maps e campanhas quando isso impacta fluxo, ligações, rotas, WhatsApp e visitas qualificadas.',
    },
    {
      question: 'Dá para medir venda que começa no digital e fecha na loja?',
      answer:
        'Nem sempre com 100% de precisão, mas dá para criar rotinas de mensuração, origem do atendimento, campanhas, cupons, WhatsApp e leitura comercial.',
    },
    {
      question: 'Em quanto tempo dá para ver resultado?',
      answer:
        'Depende do histórico, região, ticket, equipe e maturidade digital. O diagnóstico mostra se o gargalo está em tráfego, oferta, atendimento, operação ou recompra.',
    },
  ],
};
