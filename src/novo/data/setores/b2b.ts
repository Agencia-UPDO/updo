import { BarChart3, Briefcase, FileText, Mail, RefreshCw, Target, Users, Zap } from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const setorB2b: ServicoConteudo = {
  slug: 'marketing-para-b2b',
  nome: 'B2B',
  tipo: 'setor',
  hero: {
    title: 'Marketing B2B que gera pipeline qualificado sem depender de indicação',
    description:
      'Estratégia para SaaS, consultorias e serviços B2B que precisam de ICP claro, canais previsíveis, processo comercial e métricas de receita, não só de leads.',
    bullets: [
      'ICP definido com canal, pitch e funil alinhados',
      'LinkedIn Ads e outbound com perfil de decisor real',
      'Marketing e vendas conectados por SLA e pipeline',
    ],
    ctaText: 'Diagnosticar meu B2B',
  },
  resultado: {
    title: 'De dependência de indicação para R$ 1,2M em MRR com canal e processo estruturado',
    description:
      'Definimos ICP, estruturamos LinkedIn Ads, outbound e funil de demo, montamos o playbook comercial e integramos marketing e vendas com SLA e pipeline visível.',
    metrics: [
      { value: '+R$ 1,2M', label: 'em MRR gerado' },
      { value: '+2,8x', label: 'taxa de demo' },
      { value: '-38%', label: 'CAC vs. anterior' },
      { value: '-25%', label: 'ciclo de venda' },
    ],
  },
  cartao: {
    rotulo: 'Resultado B2B',
    titulo: 'MRR previsível com ICP claro, funil e processo comercial estruturados',
    metricas: [
      { label: 'CAC reduzido', valor: '-38%', detalhe: 'vs. abordagem anterior' },
      { label: 'MRR gerado', valor: '+R$ 1,2M', detalhe: 'em contratos fechados' },
      { label: 'Taxa de demo', valor: '+2,8x', detalhe: 'crescimento em 4 meses' },
      { label: 'Ciclo de venda', valor: '-25%', detalhe: 'com funil estruturado' },
    ],
    nota: 'O B2B cresce com previsibilidade quando ICP, canal, processo e métricas de receita param de operar separados.',
  },
  problemas: {
    title: 'Onde o B2B perde receita entre ICP, pipeline e processo comercial',
    description:
      'Se a carteira só cresce quando alguém indica, falta um canal previsível e um processo que converta.',
    items: [
      {
        icon: Users,
        title: 'Dependência de indicação',
        description:
          'A carteira cresce quando alguém indica e estagna quando para. Não há canal previsível que gere oportunidade qualificada sem depender de relacionamento.',
      },
      {
        icon: Target,
        title: 'ICP indefinido, pitch amplo',
        description:
          'A empresa tenta falar com todo mundo e não converte ninguém. Sem ICP claro, o argumento fica genérico, o CAC sobe e o ciclo de venda se alonga.',
      },
      {
        icon: RefreshCw,
        title: 'Marketing e vendas desconectados',
        description:
          'Marketing gera lead, vendas reclama da qualidade e o lead some no follow-up. Não há handoff, não há SLA e a culpa circula sem solução.',
      },
    ],
  },
  plano: {
    title: 'Como estruturamos o seu crescimento B2B',
    description: 'Três etapas, com reunião semanal e pipeline visível do começo ao fim.',
    passos: [
      {
        title: 'ICP e diagnóstico',
        description:
          'Mapeamos quem compra, por qual dor, em qual momento e onde o pipeline perde oportunidade hoje.',
      },
      {
        title: 'Canais e processo',
        description:
          'Estruturamos LinkedIn Ads, outbound, conteúdo, funil de demo e o playbook do time comercial.',
      },
      {
        title: 'Pipeline e receita',
        description:
          'Acompanhamos pipeline por estágio, CAC, MRR e conversão, e ajustamos canal e abordagem toda semana.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando o B2B tem canal e processo',
    sem: [
      'O crescimento depende de indicação',
      'O pitch tenta falar com todo mundo',
      'O lead some entre marketing e vendas',
      'A gestão olha lead e clique, não receita',
    ],
    com: [
      'Canal previsível gerando oportunidade qualificada',
      'ICP claro orientando campanha, pitch e funil',
      'Handoff com SLA e pipeline visível',
      'MRR, CAC e conversão por etapa acompanhados',
    ],
  },
  entregas: {
    title: 'Do ICP ao MRR: estrutura para crescer com previsibilidade',
    description:
      'A entrega conecta posicionamento, geração de demanda, funil e processo comercial para o B2B parar de depender de indicação.',
    items: [
      {
        icon: Target,
        title: 'ICP e posicionamento B2B',
        description:
          'Perfil de cliente ideal por segmento, cargo, dor e momento de compra: a base para campanha, pitch e funil funcionarem juntos.',
      },
      {
        icon: Users,
        title: 'LinkedIn Ads e outbound',
        description:
          'Campanhas segmentadas por cargo, função, setor e tamanho de empresa, com prospecção ativa calibrada para o decisor certo.',
      },
      {
        icon: FileText,
        title: 'Conteúdo de autoridade e prova',
        description:
          'Cases, artigos, comparativos e materiais que educam o mercado e encurtam o ciclo de vendas.',
      },
      {
        icon: Zap,
        title: 'Funil, CRM e automação',
        description:
          'Funil por estágio, integração de CRM, automação de nutrição e handoff com SLA entre marketing e comercial.',
      },
      {
        icon: BarChart3,
        title: 'Métricas de receita B2B',
        description: 'MRR, CAC, LTV, churn, NRR e pipeline por estágio, não só leads e cliques.',
      },
      {
        icon: Briefcase,
        title: 'Processo e playbook de vendas',
        description:
          'Script de qualificação, metodologia de descoberta, gestão de objeções e rotina de pipeline para o time operar com consistência.',
      },
    ],
  },
  pilares: {
    badge: 'Sistema de crescimento',
    title: 'Do LinkedIn ao contrato: o que precisa estar conectado',
    description:
      'O B2B cresce quando ICP, canal, conteúdo, funil, demo e processo comercial apontam para a mesma meta de receita.',
    items: [
      {
        icon: Users,
        label: 'LinkedIn Ads',
        description: 'Prospecção de decisores por cargo e empresa.',
        resultado: 'Perfil qualificado',
      },
      {
        icon: Mail,
        label: 'Outbound e e-mail',
        description: 'Abordagem ativa com sequência estruturada.',
        resultado: 'Pipeline direto',
      },
      {
        icon: FileText,
        label: 'Conteúdo e SEO',
        description: 'Autoridade que atrai quem já busca solução.',
        resultado: 'Demanda inbound',
      },
      {
        icon: Zap,
        label: 'Demo e funil',
        description: 'Reduz o ciclo e qualifica antes do comercial.',
        resultado: 'Ciclo menor',
      },
    ],
  },
  formulario: {
    title: 'Vamos entender onde seu B2B perde receita',
    description:
      'Preencha os dados para analisarmos ICP, canal, ciclo de venda e processo comercial com mais contexto.',
    formName: 'Diagnóstico B2B',
    submitText: 'Quero meu diagnóstico',
    selects: [
      {
        id: 'businessType',
        label: 'Tipo de negócio',
        options: [
          'SaaS / Plataforma',
          'Consultoria',
          'Serviços profissionais (RH, jurídico, financeiro)',
          'Marketing / Comercial',
          'Tecnologia / TI',
          'Educação corporativa',
          'Outro',
        ],
      },
      {
        id: 'ticket',
        label: 'Ticket médio',
        options: [
          'Até R$2 mil/mês (MRR ou contrato)',
          'R$2 mil a R$10 mil/mês',
          'R$10 mil a R$50 mil/mês',
          'R$50 mil a R$200 mil/mês',
          'Acima de R$200 mil/mês',
        ],
      },
      {
        id: 'salesCycle',
        label: 'Ciclo de venda',
        options: [
          'Menos de 2 semanas',
          '2 semanas a 1 mês',
          '1 a 3 meses',
          '3 a 6 meses',
          'Mais de 6 meses',
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
      question: 'Vocês fazem marketing para SaaS e tecnologia B2B?',
      answer:
        'Sim. Trabalhamos com empresas que vendem software, plataforma, serviço ou consultoria para outras empresas. O foco é gerar pipeline qualificado com ICP definido e processo comercial que converta.',
    },
    {
      question: 'LinkedIn Ads funciona para o nosso tipo de negócio?',
      answer:
        'Depende do cargo do decisor, ticket e ciclo. Para a maioria dos B2B de serviço e tecnologia, LinkedIn é o canal mais eficiente para atingir o perfil certo, mas a campanha precisa de oferta, conteúdo e funil adequados. O diagnóstico avalia se faz sentido.',
    },
    {
      question: 'Como vocês trabalham o ICP e o posicionamento?',
      answer:
        'Antes de criar campanha, mapeamos quem compra, por qual dor, em qual momento e com qual argumento. Isso define canal, copy, oferta e processo comercial.',
    },
    {
      question: 'Vocês estruturam o processo de inside sales também?',
      answer:
        'Sim. A estruturação comercial faz parte do escopo quando necessário: script de qualificação, metodologia de descoberta, gestão de pipeline, SLA com marketing e treinamento do time.',
    },
    {
      question: 'Como acompanhamos resultado em B2B com ciclo longo?',
      answer:
        'Acompanhamos pipeline por estágio, origem e probabilidade, não só leads e cliques. MRR, CAC, LTV e taxa de conversão por etapa mostram se o sistema está funcionando.',
    },
    {
      question: 'Funciona para empresa que ainda está estruturando o comercial?',
      answer:
        'Sim, e muitas vezes esse é o melhor momento. O diagnóstico ajuda a entender se o gargalo está em geração de demanda, qualificação, processo ou proposta, e por onde começar.',
    },
  ],
};
