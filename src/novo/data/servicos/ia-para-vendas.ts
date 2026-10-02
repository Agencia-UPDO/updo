import {
  BarChart3,
  Bot,
  BrainCircuit,
  Clock,
  DatabaseZap,
  MessageSquare,
  RefreshCw,
  Users,
  Workflow,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const iaParaVendas: ServicoConteudo = {
  slug: 'ia-para-vendas',
  nome: 'IA para Vendas',
  hero: {
    title: 'Seu time de vendas nunca mais vai perder uma janela de compra',
    description:
      'Implantamos agentes de IA que qualificam, respondem e agendam pelo WhatsApp, integrados ao seu CRM, com o tom da sua marca. Sem substituir o vendedor, só livrando ele do trabalho que não precisa ser humano.',
    bullets: [
      'Configurado para o seu processo',
      'Integração com seu CRM',
      'Sem substituir o time',
    ],
    ctaText: 'Implantar IA nas vendas',
  },
  resultado: {
    title: 'De 4h de espera para resposta em segundos, sem aumentar o time',
    description:
      'Empresa de serviços B2B com 300 a 400 leads por mês e time comercial de 3 pessoas. O tempo médio de primeiro atendimento era de 4 horas. Após o agente de qualificação via WhatsApp integrado ao RD Station, o time passou a atender todos os leads.',
    metrics: [
      { value: '28s', label: 'tempo médio de resposta' },
      { value: '+3x', label: 'capacidade de atendimento' },
      { value: '-58%', label: 'tempo em triagem manual' },
      { value: '+40%', label: 'taxa de agendamento' },
    ],
  },
  visual: 'conversa',
  problemas: {
    title: 'O que está custando vendas agora mesmo',
    description:
      'Se o lead espera horas pela primeira resposta, a venda costuma ir para quem respondeu primeiro.',
    items: [
      {
        icon: Clock,
        title: 'A janela de compra fecha antes do humano responder',
        description:
          'Pesquisas mostram que lead respondido em até 5 minutos tem 21x mais chance de converter do que após 30 minutos. Seu time demora horas, às vezes dias. O lead esfria e vai para o concorrente.',
      },
      {
        icon: Users,
        title: 'Vendedor qualificado desperdiçando tempo em lead frio',
        description:
          'O comercial atende todo mundo porque não tem filtro. Gasta energia com quem nunca vai comprar e chega cansado na oportunidade real. O CAC sobe e a conversão cai.',
      },
      {
        icon: RefreshCw,
        title: 'Follow-up que depende de memória e boa vontade',
        description:
          'A proposta foi enviada e o lead sumiu. Ninguém fez follow-up porque não teve tempo. Cada venda não fechada é uma sequência de ações que não aconteceu.',
      },
    ],
  },
  plano: {
    title: 'Como implantamos a IA nas suas vendas',
    description: 'Três etapas. O primeiro agente costuma entrar em produção entre 3 e 6 semanas.',
    passos: [
      {
        title: 'Mapeamento do processo',
        description:
          'Levantamos a jornada de venda, as perguntas de qualificação, o tom da marca e as objeções mais comuns.',
      },
      {
        title: 'Configuração e integração',
        description:
          'Montamos o agente no WhatsApp, integramos ao CRM e definimos quando a conversa passa para o vendedor.',
      },
      {
        title: 'Acompanhamento e ajuste',
        description:
          'Acompanhamos conversas, qualificação e agendamentos e ajustamos as respostas com o seu time.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda com um agente de IA no atendimento',
    sem: [
      'O lead espera horas pela primeira resposta',
      'O vendedor gasta o dia com lead sem perfil',
      'O follow-up depende da memória do time',
      'Quem chama fora do horário fica sem resposta',
    ],
    com: [
      'Resposta em segundos, 24 horas por dia',
      'O vendedor entra só com lead qualificado',
      'Follow-up automático depois da proposta',
      'Conversa registrada no CRM com contexto',
    ],
  },
  entregas: {
    title: 'Seis implementações que transformam velocidade em venda',
    description:
      'Cada agente é configurado para o seu processo, conectado ao CRM e acompanhado com métricas de conversa e qualificação.',
    items: [
      {
        icon: MessageSquare,
        title: 'Agente de qualificação via WhatsApp',
        description:
          'IA que recepciona o lead, faz as perguntas certas do seu processo e agenda reunião pelo WhatsApp, com o tom de voz da sua marca.',
      },
      {
        icon: RefreshCw,
        title: 'Follow-up automático pós-proposta',
        description:
          'Sequência ativa de mensagens que acompanha o lead após a proposta, sem precisar de ação humana e sem deixar a oportunidade esfriar.',
      },
      {
        icon: Bot,
        title: 'Atendimento pré-venda 24/7',
        description:
          'Responde dúvidas frequentes, apresenta serviços e captura dados qualificados fora do horário comercial.',
      },
      {
        icon: DatabaseZap,
        title: 'Integração com CRM e RD Station',
        description:
          'O lead qualificado pela IA entra no CRM com dados preenchidos, etapa correta e histórico de conversa.',
      },
      {
        icon: Workflow,
        title: 'Handoff inteligente para o humano',
        description:
          'A IA reconhece o momento de passar para o vendedor: lead qualificado, interesse confirmado ou objeção que precisa de humano.',
      },
      {
        icon: BarChart3,
        title: 'Dashboard de performance dos agentes',
        description:
          'Métricas de conversa, taxa de qualificação, tempo médio de resposta e leads gerados pela automação.',
      },
    ],
  },
  pilares: {
    badge: 'Stack de IA',
    title: 'A stack que roda o sistema',
    description:
      'Não escolhemos a ferramenta preferida: escolhemos o que encaixa no seu processo. A IA serve ao método, não o contrário.',
    items: [
      {
        icon: MessageSquare,
        label: 'WhatsApp Business API',
        description: 'Qualificação e atendimento pelo canal preferido do brasileiro.',
        resultado: 'Alta conversão',
      },
      {
        icon: BrainCircuit,
        label: 'IA generativa',
        description: 'Modelos configurados com seu processo, tom e base de conhecimento.',
        resultado: 'Personalizado',
      },
      {
        icon: DatabaseZap,
        label: 'CRM e automação',
        description: 'Integração com RD Station, HubSpot, Salesforce e similares.',
        resultado: 'Zero atrito',
      },
      {
        icon: Workflow,
        label: 'Orquestração e fluxo',
        description: 'Lógica de roteamento, handoff e escalada para o time humano.',
        resultado: 'Controle total',
      },
    ],
  },
  formulario: {
    title: 'Descubra se IA para vendas faz sentido para o seu negócio',
    description:
      'Preencha os dados para entendermos seu processo, volume e onde a automação gera mais impacto, antes de recomendar qualquer coisa.',
    formName: 'Diagnóstico IA para Vendas',
    submitText: 'Quero meu diagnóstico',
    selects: [
      {
        id: 'businessType',
        label: 'Tipo de negócio',
        options: [
          'E-commerce / Varejo',
          'Educação',
          'Saúde / Clínica',
          'SaaS / Tecnologia',
          'Indústria / B2B',
          'Serviços profissionais',
          'Outro',
        ],
      },
      {
        id: 'leadVolume',
        label: 'Volume de leads',
        options: [
          'Menos de 50 leads/mês',
          '50 a 200 leads/mês',
          '200 a 500 leads/mês',
          '500 a 2.000 leads/mês',
          'Mais de 2.000 leads/mês',
        ],
      },
      {
        id: 'crm',
        label: 'CRM atual',
        options: ['RD Station', 'HubSpot', 'Salesforce', 'Pipedrive', 'Planilha / sem CRM', 'Outro'],
      },
      {
        id: 'mainPain',
        label: 'Principal dor',
        options: [
          'Demora no primeiro atendimento',
          'Qualificação manual tomando tempo do time',
          'Follow-up inconsistente',
          'Atendimento fora do horário comercial',
          'Escalar sem contratar mais pessoas',
        ],
      },
    ],
  },
  faq: [
    {
      question: 'É um chatbot genérico ou personalizado para o meu negócio?',
      answer:
        'Personalizado. Antes de qualquer implementação, mapeamos sua jornada de venda, as perguntas de qualificação do seu ICP, o tom de voz da marca e as objeções mais comuns. O agente é treinado com esse contexto, não é um bot de FAQ que responde igual para todo mundo.',
    },
    {
      question: 'A IA substitui meu time de vendas?',
      answer:
        'Não, ela libera o time para fechar. A IA cuida da triagem, qualificação, agendamento e follow-up. O vendedor entra só quando o lead está aquecido, qualificado e pronto para conversa real.',
    },
    {
      question: 'Quais ferramentas e plataformas vocês usam?',
      answer:
        'Depende do seu stack atual. Trabalhamos com WhatsApp Business API, integração com RD Station, HubSpot e Salesforce, e modelos de IA como GPT e Claude. A escolha da ferramenta segue o que faz mais sentido para o seu processo.',
    },
    {
      question: 'Quanto tempo leva para implantar?',
      answer:
        'Em média de 3 a 6 semanas para o primeiro agente em produção. O tempo depende da complexidade do processo, das integrações necessárias e da disponibilidade da equipe para os alinhamentos.',
    },
    {
      question: 'Funciona com o CRM que já usamos?',
      answer:
        'Na grande maioria dos casos, sim. Temos integração com os principais CRMs do mercado brasileiro. Nos casos menos comuns, avaliamos via API. O diagnóstico mapeia o stack atual antes de qualquer proposta.',
    },
    {
      question: 'Como fica o handoff da IA para o vendedor?',
      answer:
        'Definimos com você os gatilhos de escalada: lead que atingiu determinado score, objeção específica, pedido de falar com humano ou agendamento confirmado. Quando o gatilho dispara, o vendedor recebe o resumo da conversa e entra com contexto.',
    },
  ],
};
