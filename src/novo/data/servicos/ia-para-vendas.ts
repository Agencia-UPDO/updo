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
    title: 'Seu time de vendas nunca mais vai perder uma *janela de compra*',
    description:
      'Implantamos agentes de IA que qualificam, respondem e agendam pelo WhatsApp, integrados ao seu CRM, com o tom da sua marca, sem substituir o vendedor. Só livrar ele do trabalho que não precisa ser humano.',
    bullets: ['Configurado para o seu processo', 'Integração com seu CRM', 'Sem substituir o time'],
    ctaText: 'Quero implantar IA nas minhas vendas',
    metricas: [
      { label: 'Tempo de resposta', value: '< 30s', detail: '24h por dia, 7 dias por semana' },
      { label: 'Qualificação manual', value: '-65%', detail: 'tempo do time em triagem' },
      { label: 'Capacidade de atendimento', value: '+3x', detail: 'sem aumentar headcount' },
      { label: 'Leads sem resposta', value: '0', detail: 'todos recebem retorno imediato' },
    ],
  },
  resultado: {
    title: 'De 4h de espera para resposta em segundos, sem aumentar o time.',
    description:
      'Empresa de serviços B2B com 300 a 400 leads/mês e time comercial de 3 pessoas. O tempo médio de primeiro atendimento era de 4 horas. Leads frios, CAC alto, vendedores frustrados. Após implantação do agente de qualificação via WhatsApp integrado ao RD Station:',
    metrics: [
      { value: '28s', label: 'Tempo médio de resposta' },
      { value: '+3x', label: 'Capacidade de atendimento' },
      { value: '-58%', label: 'Tempo em triagem manual' },
      { value: '+40%', label: 'Taxa de agendamento' },
    ],
  },
  visual: 'conversa',
  problemas: {
    title: 'O que está *custando vendas* agora mesmo.',
    items: [
      {
        icon: Clock,
        title: 'A janela de compra fecha antes do humano responder',
        description:
          'Pesquisas mostram que lead respondido em até 5 minutos tem 21x mais chance de converter do que após 30 minutos. Seu time demora horas, às vezes dias. O lead esfria, vai para o concorrente e você nem sabe.',
      },
      {
        icon: Users,
        title: 'Vendedor qualificado desperdiçando tempo em lead frio',
        description:
          'O comercial atende todo mundo porque não tem filtro. Gasta energia com quem nunca vai comprar e chega cansado na oportunidade real. CAC sobe, moral cai, taxa de conversão despenca.',
      },
      {
        icon: RefreshCw,
        title: 'Follow-up que depende de memória e boa vontade',
        description:
          "Proposta foi, lead sumiu. Ninguém fez follow-up porque 'não teve tempo'. Cada venda não fechada é uma sequência de ações que não aconteceu, e isso está custando receita todo mês.",
      },
    ],
  },
  plano: {
    title: 'Como implantamos a *IA* nas suas vendas',
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
    title: 'O que muda com um *agente de IA* no atendimento',
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
    title: '*Seis implementações* que transformam velocidade em venda.',
    description: '',
    items: [
      {
        icon: MessageSquare,
        title: 'Agente de qualificação via WhatsApp',
        description:
          'IA que recepciona o lead, faz as perguntas certas do seu processo e agenda reunião, tudo pelo WhatsApp, com o tom de voz da sua marca.',
      },
      {
        icon: RefreshCw,
        title: 'Follow-up automático pós-proposta',
        description:
          'Sequência ativa de mensagens que acompanha o lead após proposta enviada. Sem precisar de ação humana, sem deixar oportunidade esfriar.',
      },
      {
        icon: Bot,
        title: 'Atendimento pré-venda 24/7',
        description:
          'Responde dúvidas frequentes, apresenta serviços e captura dados qualificados fora do horário comercial, sem nenhum lead perdido por falta de cobertura.',
      },
      {
        icon: DatabaseZap,
        title: 'Integração com CRM e RD Station',
        description:
          'Lead qualificado pela IA já entra no CRM com dados preenchidos, etapa correta e histórico de conversa. Zero trabalho manual de registro.',
      },
      {
        icon: Workflow,
        title: 'Handoff inteligente para o humano',
        description:
          'A IA reconhece o momento de passar para o vendedor: lead qualificado, interesse confirmado, objeção que precisa de humano. O comercial entra só quando vale a pena.',
      },
      {
        icon: BarChart3,
        title: 'Dashboard de performance dos agentes',
        description:
          'Métricas de conversação, taxa de qualificação, tempo médio de resposta e leads gerados pela automação, com visibilidade total do que a IA está fazendo.',
      },
    ],
  },
  pilares: {
    badge: 'Como funciona',
    title: 'A *stack* que roda o sistema.',
    description:
      'Não escolhemos a ferramenta preferida: escolhemos o que encaixa no seu processo. A IA serve ao método, não o contrário.',
    items: [
      {
        icon: MessageSquare,
        label: 'WhatsApp Business API',
        description: 'Qualificação e atendimento pelo canal preferido do brasileiro',
        resultado: 'Alta conversão',
      },
      {
        icon: BrainCircuit,
        label: 'IA generativa (GPT / Claude)',
        description: 'Modelos configurados com seu processo, tom e base de conhecimento',
        resultado: 'Personalizado',
      },
      {
        icon: DatabaseZap,
        label: 'CRM e automação',
        description: 'Integração com RD Station, HubSpot, Salesforce e similares',
        resultado: 'Zero atrito',
      },
      {
        icon: Workflow,
        label: 'Orquestração e fluxo',
        description: 'Lógica de roteamento, handoff e escalada para o time humano',
        resultado: 'Controle total',
      },
    ],
  },
  caso: {
    badge: 'Resultado real',
    title: 'De 4h de espera para resposta em segundos, sem aumentar o time.',
    description:
      'Empresa de serviços B2B com 300 a 400 leads/mês e time comercial de 3 pessoas. O tempo médio de primeiro atendimento era de 4 horas. Leads frios, CAC alto, vendedores frustrados. Após implantação do agente de qualificação via WhatsApp integrado ao RD Station:',
    ctaText: 'Quero esse resultado',
    metrics: [
      { value: '28s', label: 'Tempo médio de resposta' },
      { value: '+3x', label: 'Capacidade de atendimento' },
      { value: '-58%', label: 'Tempo em triagem manual' },
      { value: '+40%', label: 'Taxa de agendamento' },
    ],
  },
  formulario: {
    title: 'Descubra se IA para vendas *faz sentido* para o seu negócio.',
    description:
      'Preencha os dados para entendermos seu processo, volume e onde a automação gera mais impacto, antes de recomendar qualquer coisa.',
    formName: 'Diagnóstico IA para Vendas',
    submitText: 'Quero o diagnóstico gratuito',
    nota: 'Com base nas suas respostas, avaliamos onde a IA pode gerar impacto real no seu processo comercial.',
    selects: [
      {
        id: 'businessType',
        label: 'Setor da empresa',
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
        label: 'Volume de leads por mês',
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
        label: 'Principal dor hoje',
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
  faqTexto: {
    badge: 'Dúvidas frequentes',
    title: '*Dúvidas* sobre IA aplicada a vendas e atendimento.',
    description:
      'Antes de implantar qualquer agente, vale entender o processo, o volume e onde a automação realmente gera impacto.',
    citacao:
      'A IA não substitui o vendedor. Ela garante que nenhum lead esfrie antes de o vendedor ter a chance de atender.',
  },
  faq: [
    {
      question: 'É um chatbot genérico ou personalizado para o meu negócio?',
      answer:
        '100% personalizado. Antes de qualquer implementação, mapeamos sua jornada de venda, as perguntas de qualificação do seu ICP, o tom de voz da marca e as objeções mais comuns. O agente é treinado com esse contexto, não é um bot de FAQ que responde igual para todo mundo.',
    },
    {
      question: 'A IA substitui meu time de vendas?',
      answer:
        'Não, ela libera o time para fechar. A IA cuida da triagem, qualificação, agendamento e follow-up. O vendedor entra só quando o lead está aquecido, qualificado e pronto para conversa real. O resultado é mais tempo para oportunidades de verdade.',
    },
    {
      question: 'Quais ferramentas e plataformas vocês usam?',
      answer:
        'Depende do seu stack atual. Trabalhamos com WhatsApp Business API, integração com RD Station, HubSpot e Salesforce, e modelos de IA como GPT-4 e Claude. A escolha da ferramenta segue o que faz mais sentido para o seu processo, não o contrário.',
    },
    {
      question: 'Quanto tempo leva para implantar?',
      answer:
        'Em média de 3 a 6 semanas para o primeiro agente em produção. O tempo depende da complexidade do processo, das integrações necessárias e da disponibilidade da equipe para os alinhamentos de configuração.',
    },
    {
      question: 'Funciona com o CRM que já usamos?',
      answer:
        'Na grande maioria dos casos, sim. Temos integração com os principais CRMs do mercado brasileiro. Nos casos menos comuns, avaliamos via API. O diagnóstico mapeia o stack atual antes de qualquer proposta.',
    },
    {
      question: 'Como fica o handoff da IA para o vendedor?',
      answer:
        'Definimos junto com você os gatilhos de escalada: lead que atingiu determinado score de qualificação, objeção específica, pedido de falar com humano, agendamento confirmado. Quando o gatilho dispara, o vendedor recebe notificação com o resumo da conversa e pode entrar de forma contextualizada.',
    },
  ],
};
