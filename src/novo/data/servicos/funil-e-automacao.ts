import {
  BarChart3,
  Clock,
  Filter,
  GitBranch,
  Mail,
  MessageSquare,
  Route,
  Target,
  Zap,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const funilEAutomacao: ServicoConteudo = {
  slug: 'funil-e-automacao',
  nome: 'Funil e Automação',
  hero: {
    title: 'Funil de vendas e automação para o lead certo chegar na *hora certa*',
    description:
      'Estruturamos jornada, lead scoring, nutrição e automações de WhatsApp, e-mail e CRM para o comercial agir com contexto e menos trabalho manual.',
    bullets: [
      'Lead scoring conectado ao comportamento real',
      'Nutrição por estágio da jornada de compra',
      'Handoff entre marketing, WhatsApp e CRM',
    ],
    ctaText: 'Estruturar meu funil',
    ctaSecundario: { text: 'Ver diagnóstico', href: '/diagnostico' },
  },
  resultado: {
    title: 'Mais velocidade entre lead, resposta e oportunidade',
    description:
      'Operação B2B com RD Station, WhatsApp e CRM desalinhados. Após segmentação, scoring e alertas por etapa, o comercial passou a receber menos lead frio e mais oportunidade com contexto.',
    metrics: [
      { value: '-42%', label: 'tempo de resposta' },
      { value: '+31%', label: 'oportunidades' },
      { value: '+24%', label: 'taxa de reunião' },
      { value: '-18%', label: 'lead perdido' },
    ],
  },
  visual: 'automacao',
  problemas: {
    title: 'Onde o funil deixa *oportunidade esfriar*',
    description:
      'Se o comercial reclama que o lead chega frio, o problema costuma estar no caminho entre a conversão e o primeiro contato.',
    items: [
      {
        icon: Clock,
        title: 'Lead esfria antes do primeiro contato',
        description:
          'O lead converte, entra na ferramenta e espera. Sem SLA, alerta e fluxo claro, a oportunidade perde momento antes de chegar ao comercial.',
      },
      {
        icon: Filter,
        title: 'Todo lead recebe a mesma mensagem',
        description:
          'Quem baixou um material, pediu orçamento ou voltou pela terceira vez no site não pode entrar na mesma régua. Sem segmentação, a automação vira ruído.',
      },
      {
        icon: GitBranch,
        title: 'CRM, WhatsApp e e-mail não conversam',
        description:
          'A equipe trabalha com informação quebrada. O marketing nutre, o comercial aborda sem contexto e ninguém sabe qual etapa realmente avançou.',
      },
    ],
  },
  plano: {
    title: 'Como estruturamos o seu *funil*',
    description: 'Três etapas. A primeira versão costuma entrar no ar entre 3 e 5 semanas.',
    passos: [
      {
        title: 'Mapeamento da jornada e da base',
        description:
          'Revisamos origem dos leads, campos, tags e etapas do CRM e desenhamos o caminho do lead até a venda.',
      },
      {
        title: 'Configuração das automações',
        description:
          'Montamos lead scoring, réguas de e-mail e WhatsApp, alertas e tarefas para o comercial, integrados ao CRM.',
      },
      {
        title: 'Leitura e ajuste semanal',
        description:
          'Acompanhamos abertura, resposta, avanço por etapa e tempo de atendimento, e ajustamos o que trava.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando o funil *tem estrutura*',
    sem: [
      'O lead esfria esperando o primeiro contato',
      'A base inteira recebe a mesma mensagem',
      'O comercial aborda sem saber o que o lead fez',
      'Ninguém sabe em que etapa o funil trava',
    ],
    com: [
      'Lead quente vira alerta e tarefa para o vendedor na hora',
      'Mensagem por perfil, interesse e etapa da jornada',
      'WhatsApp, e-mail e CRM com o mesmo histórico',
      'Relatório mostra onde o lead avançou, parou ou voltou',
    ],
  },
  entregas: {
    ctaText: 'Automatizar meu funil',
    title: '*Seis frentes* para transformar intenção em oportunidade',
    description:
      'A entrega conecta estratégia, conteúdo, automação e rotina comercial para o lead avançar sem depender de acompanhamento manual.',
    items: [
      {
        icon: Route,
        title: 'Mapeamento da jornada',
        description:
          'Etapas, pontos de decisão, ofertas, canais e critérios de avanço definidos antes de qualquer configuração de ferramenta.',
      },
      {
        icon: Target,
        title: 'Lead scoring',
        description:
          'Pontuação por perfil, comportamento e intenção para separar lead curioso de oportunidade que merece ação comercial.',
      },
      {
        icon: Mail,
        title: 'Nutrição por estágio',
        description:
          'Sequências de e-mail e conteúdo por interesse, maturidade e próxima ação esperada do lead.',
      },
      {
        icon: MessageSquare,
        title: 'WhatsApp integrado',
        description:
          'Fluxos de qualificação, follow-up e reativação conectados ao CRM, sem parecer disparo genérico.',
      },
      {
        icon: Zap,
        title: 'Automações no CRM',
        description:
          'Campos, tags, alertas, tarefas e passagem de etapa para reduzir trabalho manual e perda de oportunidade.',
      },
      {
        icon: BarChart3,
        title: 'Leitura do funil',
        description:
          'Relatório de abertura, clique, resposta, avanço por etapa e gargalos entre marketing e vendas.',
      },
    ],
  },
  pilares: {
    badge: 'Sistema de automação',
    title: 'Os *quatro pilares* do funil automatizado',
    description:
      'Jornada, segmentação, automação e leitura precisam operar juntos. Quando uma parte quebra, o lead para no caminho.',
    items: [
      {
        icon: Route,
        label: 'Jornada',
        description: 'O caminho do lead fica claro: origem, intenção, etapa e próxima oferta.',
        resultado: 'Mapa pronto',
      },
      {
        icon: Filter,
        label: 'Segmentação',
        description:
          'A base deixa de ser uma lista única e passa a responder por perfil e comportamento.',
        resultado: 'Mensagem certa',
      },
      {
        icon: Zap,
        label: 'Automação',
        description: 'E-mail, WhatsApp, CRM e alertas trabalham sem depender de planilha manual.',
        resultado: 'Menos atrito',
      },
      {
        icon: BarChart3,
        label: 'Leitura',
        description: 'A equipe enxerga onde o lead avançou, parou ou voltou para ser reativado.',
        resultado: 'Ajuste contínuo',
      },
    ],
  },
  formulario: {
    title: 'Vamos entender onde seu funil *perde lead* qualificado',
    description:
      'Preencha para analisarmos jornada, base, automações, WhatsApp e CRM antes da reunião.',
    formName: 'Diagnóstico Funil e Automação',
    submitText: 'Diagnosticar meu funil',
    nota: 'Com base nas suas respostas, preparamos um diagnóstico mais preciso da maturidade do funil.',
    selects: [
      {
        id: 'platform',
        label: 'Plataforma atual',
        options: [
          'RD Station',
          'HubSpot',
          'Pipedrive',
          'ActiveCampaign',
          'Planilha / sem ferramenta',
          'Outro',
        ],
      },
      {
        id: 'baseSize',
        label: 'Tamanho da base',
        options: [
          'Menos de 1 mil contatos',
          '1 mil a 10 mil contatos',
          '10 mil a 50 mil contatos',
          'Mais de 50 mil contatos',
        ],
      },
      {
        id: 'businessType',
        label: 'Tipo de negócio',
        options: [
          'B2B / Serviços',
          'SaaS / Software',
          'Educação / EAD',
          'E-commerce',
          'Profissional liberal',
          'Outro',
        ],
      },
      {
        id: 'mainPain',
        label: 'Principal dor',
        options: [
          'Lead esfria no atendimento',
          'Base parada sem nutrição',
          'Sem lead scoring',
          'CRM e WhatsApp desconectados',
          'Não sei onde o funil trava',
        ],
      },
    ],
  },
  caso: {
    badge: 'Resultado real',
    title: 'Mais velocidade entre lead, resposta e oportunidade.',
    description:
      'Operação B2B com RD Station, WhatsApp e CRM desalinhados. Após segmentação, scoring e alertas por etapa, o comercial passou a receber menos lead frio e mais oportunidade com contexto.',
    ctaText: 'Quero esse resultado',
    metrics: [
      { value: '-42%', label: 'tempo de resposta' },
      { value: '+31%', label: 'oportunidades' },
      { value: '+24%', label: 'taxa de reunião' },
      { value: '-18%', label: 'lead perdido' },
    ],
  },
  faqTexto: {
    badge: 'Dúvidas frequentes',
    title: '*Dúvidas* sobre funil de nutrição e automação.',
    description:
      'Antes de contratar mais ferramenta, vale entender se jornada, base, CRM e WhatsApp estão organizados para converter.',
    citacao:
      'Automação boa não aumenta barulho. Ela entrega contexto para a próxima ação acontecer no momento certo.',
  },
  faq: [
    {
      question: 'Funciona com o RD Station que já usamos?',
      answer:
        'Sim. Trabalhamos com RD Station, HubSpot, ActiveCampaign, Pipedrive, Mautic e outras ferramentas. A estrutura é adaptada ao que vocês já usam, desde que a ferramenta permita uma operação confiável.',
    },
    {
      question: 'Vocês criam os e-mails e mensagens de WhatsApp?',
      answer:
        'Sim. Criamos a lógica da régua, textos, gatilhos e critérios de disparo. O tom passa por aprovação para manter a identidade da marca e não parecer mensagem automática sem contexto.',
    },
    {
      question: 'Lead scoring serve para operação pequena?',
      answer:
        'Serve, principalmente quando o time comercial tem pouco tempo. Mesmo com volume menor, scoring ajuda a priorizar quem tem fit, intenção e comportamento de compra.',
    },
    {
      question: 'Quanto tempo para a automação começar a rodar?',
      answer:
        'A primeira versão costuma entrar em produção entre 3 e 5 semanas, dependendo da base, ferramenta, integrações e quantidade de fluxos necessários.',
    },
    {
      question: 'O WhatsApp pode entrar sem virar spam?',
      answer:
        'Pode. O WhatsApp precisa ter contexto, permissão, timing e objetivo claro. A ideia não é aumentar disparo, é melhorar a resposta no momento certo.',
    },
    {
      question: 'E se a base estiver desorganizada?',
      answer:
        'A organização da base entra no projeto. Antes de automatizar, revisamos campos, tags, listas, origem dos leads e critérios de segmentação para evitar automação em cima de dado ruim.',
    },
  ],
};
