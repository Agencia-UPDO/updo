import {
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  FileText,
  Mic,
  RefreshCw,
  Target,
  Users,
  Video,
  Zap,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const insideSales: ServicoConteudo = {
  slug: 'inside-sales',
  nome: 'Inside Sales',
  hero: {
    title: 'Processo comercial que transforma lead em receita previsível',
    description:
      'Estruturamos playbook, pipeline, treinamento e rotina de gestão para o time vender com consistência, sem depender do talento individual de cada vendedor.',
    bullets: [
      'Playbook documentado e replicável',
      'Pipeline com visibilidade por estágio e SLA',
      'Treinamento de vendas e neurovendas',
    ],
    ctaText: 'Estruturar meu comercial',
    ctaSecundario: { text: 'Ver como funciona', href: '/diagnostico' },
  },
  resultado: {
    title: 'De 8% para 15% de conversão, sem contratar mais vendedores',
    description:
      'Empresa de serviços com cinco vendedores, ticket médio de R$18 mil e pipeline no Excel. Após playbook, CRM estruturado e rotina semanal, o time passou a vender com mais previsibilidade.',
    metrics: [
      { value: '8% → 15%', label: 'conversão comercial' },
      { value: '-30%', label: 'ciclo de venda' },
      { value: '85%', label: 'previsão de fechamento' },
      { value: '< 30d', label: 'onboarding' },
    ],
  },
  visual: 'pipeline',
  problemas: {
    title: 'Onde o processo comercial *perde receita* todo mês',
    description:
      'Se o lead chega bom e a venda não fecha, o problema costuma estar no método, no pipeline ou na gestão do time.',
    items: [
      {
        icon: Users,
        title: 'Cada vendedor faz do seu jeito',
        description:
          'Sem processo, script e pipeline padronizado, a performance varia mês a mês e fica difícil saber se o problema está no lead, no vendedor ou no pitch.',
      },
      {
        icon: Target,
        title: 'Lead qualificado, venda perdida',
        description:
          'O lead chega aquecido, mas o comercial não descobre a dor real, não trata a objeção principal e não cria urgência para avançar.',
      },
      {
        icon: BarChart3,
        title: 'Gestão no escuro',
        description:
          'Sem leitura de estágio, SLA e previsão de fechamento, o gestor descobre que o mês vai mal quando já é tarde para corrigir.',
      },
    ],
  },
  plano: {
    title: 'Como estruturamos o seu *comercial*',
    description: 'Três etapas. Os primeiros sinais costumam aparecer entre 30 e 60 dias.',
    passos: [
      {
        title: 'Diagnóstico do processo',
        description:
          'Ouvimos chamadas, analisamos o pipeline e mapeamos onde as oportunidades param ou se perdem.',
      },
      {
        title: 'Playbook, CRM e treinamento',
        description:
          'Documentamos o processo, organizamos etapas e SLA no CRM e treinamos o time com simulações reais.',
      },
      {
        title: 'Rotina semanal de pipeline',
        description:
          'Acompanhamos conversão, ciclo e ticket com o gestor e corrigimos a rota antes do fim do mês.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando o comercial *tem processo*',
    sem: [
      'O resultado depende de um ou dois vendedores',
      'A objeção principal derruba a venda sem resposta',
      'O pipeline vive em planilha e na memória do time',
      'O gestor descobre o mês ruim quando já acabou',
    ],
    com: [
      'Todo vendedor segue o mesmo método de descoberta e pitch',
      'Objeções mapeadas, com respostas testadas em simulação',
      'Pipeline no CRM com etapas, campos e SLA claros',
      'Previsão de fechamento lida toda semana',
    ],
  },
  entregas: {
    ctaText: 'Quero estruturar meu processo comercial',
    title: '*Seis frentes* que organizam o comercial',
    description:
      'A entrega conecta processo, treinamento, tecnologia e rotina para a venda depender de sistema, não de improviso.',
    items: [
      {
        icon: Target,
        title: 'ICP e critérios de qualificação',
        description:
          'Definição de cliente ideal, perguntas de triagem e regra clara de passagem para o comercial.',
      },
      {
        icon: BookOpen,
        title: 'Playbook de vendas',
        description:
          'Script de descoberta, apresentação, objeções e argumentos por perfil de cliente.',
      },
      {
        icon: Brain,
        title: 'Treinamento de neurovendas',
        description:
          'Rapport, ancoragem, urgência, influência e fidelização aplicados ao processo real do time.',
      },
      {
        icon: Zap,
        title: 'Pipeline e CRM estruturado',
        description:
          'Etapas, campos obrigatórios, SLA e leitura clara de onde cada oportunidade está parada.',
      },
      {
        icon: BarChart3,
        title: 'Rotina semanal de metas',
        description:
          'Reunião de pipeline, acompanhamento de conversão, ciclo, ticket e ações corretivas.',
      },
      {
        icon: FileText,
        title: 'Onboarding de vendedores',
        description:
          'Processo documentado para integrar novos vendedores sem depender de treinamento informal.',
      },
    ],
  },
  pilares: {
    badge: 'Sistema de vendas',
    title: 'Os *quatro pilares* do processo comercial UPDO',
    description:
      'Método, tecnologia, rotina e gestão operando juntos para o comercial parar de depender de talento individual.',
    items: [
      {
        icon: Target,
        label: 'Venda consultiva',
        description: 'Descoberta da dor real antes de apresentar solução.',
        resultado: 'Conversão maior',
      },
      {
        icon: Zap,
        label: 'CRM estruturado',
        description: 'Pipeline por estágio, SLA e campos obrigatórios.',
        resultado: 'Gestão real',
      },
      {
        icon: Brain,
        label: 'Neurovendas',
        description: 'Influência, urgência e ancoragem dentro do pitch.',
        resultado: 'Mais fechamento',
      },
      {
        icon: BarChart3,
        label: 'Ritual de pipeline',
        description: 'Leitura semanal para corrigir rota antes do fim do mês.',
        resultado: 'Sem surpresa',
      },
    ],
  },
  formulario: {
    title: 'Vamos entender onde seu comercial *perde receita*',
    description:
      'Preencha os dados para analisarmos processo, pipeline, conversão e ciclo de venda com mais contexto.',
    formName: 'Diagnóstico Inside Sales',
    submitText: 'Diagnosticar meu processo comercial',
    nota: 'Com base nas suas respostas, preparamos um diagnóstico inicial mais preciso do processo comercial.',
    selects: [
      {
        id: 'teamSize',
        label: 'Tamanho do time',
        options: [
          'Só eu vendo',
          '1 a 3 vendedores',
          '4 a 10 vendedores',
          '11 a 30 vendedores',
          'Mais de 30 vendedores',
        ],
      },
      {
        id: 'ticket',
        label: 'Ticket médio',
        options: [
          'Até R$500',
          'R$500 a R$5 mil',
          'R$5 mil a R$30 mil',
          'R$30 mil a R$100 mil',
          'Acima de R$100 mil',
        ],
      },
      {
        id: 'salesCycle',
        label: 'Ciclo médio',
        options: [
          'Menos de 1 semana',
          '1 a 4 semanas',
          '1 a 3 meses',
          '3 a 6 meses',
          'Mais de 6 meses',
        ],
      },
      {
        id: 'mainPain',
        label: 'Principal dor',
        options: [
          'Time sem processo',
          'Conversão baixa',
          'Ciclo de venda longo',
          'Pipeline sem visibilidade',
          'Dificuldade para escalar',
        ],
      },
    ],
  },
  extra: {
    badge: 'Treinamento de vendas',
    title: 'Playbook na *cabeça do time*, não só na gaveta.',
    description:
      'Documentar o processo não basta. O treinamento coloca o método na prática com simulação, feedback e acompanhamento.',
    bullets: ['Role-play com objeções reais', 'Feedback de pitches e chamadas', 'Onboarding de vendedores'],
    items: [
      {
        icon: Mic,
        title: 'Script de descoberta',
        description:
          'Perguntas de situação, problema, implicação e necessidade aplicadas ao seu processo.',
        tag: 'Role-play',
      },
      {
        icon: Video,
        title: 'Coaching de pitch',
        description:
          'Análise de apresentações reais: estrutura, ritmo, linguagem e resposta a objeções.',
        tag: 'Feedback individual',
      },
      {
        icon: Brain,
        title: 'Neurovendas',
        description: 'Gatilhos de influência, ancoragem e prova social sem virar discurso artificial.',
        tag: 'Workshop aplicado',
      },
      {
        icon: Target,
        title: 'Gestão de objeções',
        description:
          'Mapeamento das objeções do mercado e criação de respostas testadas em simulação.',
        tag: 'Script + prática',
      },
      {
        icon: Briefcase,
        title: 'Proposta comercial',
        description: 'Modelo de proposta que posiciona valor antes de preço e melhora o fechamento.',
        tag: 'Modelo pronto',
      },
      {
        icon: RefreshCw,
        title: 'Follow-up',
        description:
          'Cadência por estágio para reativar lead parado sem depender da memória do vendedor.',
        tag: 'Cadência',
      },
    ],
  },
  caso: {
    badge: 'Resultado real',
    title: 'De 8% para 15% de conversão, sem contratar mais vendedores.',
    description:
      'Empresa de serviços com cinco vendedores, ticket médio de R$18 mil e pipeline no Excel. Após playbook, CRM estruturado e rotina semanal, o time passou a vender com mais previsibilidade.',
    ctaText: 'Quero esse resultado no meu comercial',
    metrics: [
      { value: '+38%', label: 'conversão comercial' },
      { value: '-30%', label: 'ciclo de venda' },
      { value: '85%', label: 'previsão de fechamento' },
      { value: '< 30d', label: 'onboarding' },
    ],
  },
  faqTexto: {
    badge: 'Dúvidas frequentes',
    title: '*Dúvidas* sobre processo comercial e inside sales.',
    description: 'Antes de contratar mais vendedor, vale entender onde o processo está perdendo receita.',
    citacao:
      'Venda não é talento, é processo. Quando o processo está certo, o time inteiro enxerga melhor o próximo passo.',
  },
  faq: [
    {
      question: 'Funciona para empresa com time pequeno?',
      answer:
        'Sim. Em times pequenos, processo comercial costuma gerar impacto rápido porque reduz desperdício, melhora a priorização e facilita a contratação futura.',
    },
    {
      question: 'Quanto tempo leva para ver resultado?',
      answer:
        'Os primeiros sinais aparecem entre 30 e 60 dias, principalmente em tempo de resposta, taxa de agendamento e qualidade da rotina comercial.',
    },
    {
      question: 'Vocês treinam o time ou só entregam o playbook?',
      answer:
        'Os dois. O playbook organiza o método, mas o treinamento coloca o processo na prática com simulações, feedback e acompanhamento.',
    },
    {
      question: 'Funciona com o CRM que já usamos?',
      answer:
        'Na maioria dos casos, sim. Estruturamos etapas, campos e SLAs dentro da ferramenta atual sempre que ela permite uma operação confiável.',
    },
    {
      question: 'E se o time resistir ao processo novo?',
      answer:
        'A resistência é tratada no treinamento. O time precisa entender como o processo reduz retrabalho, aumenta comissão e deixa a cobrança mais clara.',
    },
    {
      question: 'Serve para venda simples e venda complexa?',
      answer:
        'Sim. A estrutura muda conforme ticket, ciclo e decisores, mas a lógica é a mesma: qualificar melhor, vender com método e medir o pipeline.',
    },
  ],
};
