import {
  BarChart3,
  Briefcase,
  Filter,
  Globe2,
  Layers,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  Search,
  Target,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const geracaoDeDemanda: ServicoConteudo = {
  slug: 'geracao-de-demanda',
  nome: 'Geração de Demanda',
  hero: {
    title: 'Geração de demanda para atrair o lead que tem perfil de compra',
    description:
      'Estruturamos Google Ads, Meta Ads, LinkedIn Ads, SEO, GEO, AEO e conteúdo a partir do seu cliente ideal, da oferta e do CAC, para a verba virar oportunidade de venda.',
    bullets: [
      'Canais definidos por cliente ideal, intenção e ciclo de venda',
      'Qualificação desde o anúncio até a landing page',
      'CPL, CAC e qualidade do lead acompanhados por canal',
    ],
    ctaText: 'Estruturar minha demanda',
  },
  resultado: {
    title: 'CPL menor e mais lead qualificado sem depender de um canal',
    description:
      'Operação B2B com verba concentrada em Google Ads e baixa qualificação. Depois de ICP, landing page, remarketing e LinkedIn Ads, a aquisição ficou mais previsível e menos exposta ao leilão.',
    metrics: [
      { value: 'R$ 89', label: 'CPL médio' },
      { value: '3x', label: 'leads qualificados' },
      { value: '64%', label: 'taxa de qualificação' },
      { value: '31%', label: 'demanda orgânica' },
    ],
  },
  painel: {
    titulo: 'Aquisição por canal',
    subtitulo: 'Case de cliente B2B',
    kpis: [
      { label: 'CPL médio', valor: 'R$ 89', variacao: '-38%' },
      { label: 'Leads', valor: '3x', variacao: '+200%' },
      { label: 'Qualificação', valor: '64%', variacao: '+29 p.p.' },
    ],
    barrasTitulo: 'Leads qualificados por canal',
    barras: [
      { label: 'Google Ads', valor: '38%', largura: 100 },
      { label: 'SEO e GEO', valor: '31%', largura: 82 },
      { label: 'LinkedIn Ads', valor: '21%', largura: 55 },
      { label: 'Meta Ads', valor: '10%', largura: 28 },
    ],
    serieTitulo: 'Leads qualificados por mês',
    serie: [
      { rotulo: 'Abr', valor: 42 },
      { rotulo: 'Mai', valor: 58 },
      { rotulo: 'Jun', valor: 71 },
      { rotulo: 'Jul', valor: 89 },
      { rotulo: 'Ago', valor: 104 },
      { rotulo: 'Set', valor: 126 },
    ],
    destaque: '126 leads · 3x',
  },
  problemas: {
    title: 'Onde a aquisição gasta verba antes de gerar receita',
    description:
      'Se o seu time recebe lead e vende pouco, o problema raramente é só a campanha. Costuma estar em um destes três pontos.',
    items: [
      {
        icon: Filter,
        title: 'Lead entra sem fit comercial',
        description:
          'A campanha gera volume, mas o comercial gasta tempo com gente fora do perfil de cliente ideal. O custo real aparece depois do CPL.',
      },
      {
        icon: Layers,
        title: 'Dependência de um canal só',
        description:
          'Quando tudo depende de Google, Meta ou indicação, qualquer mudança de leilão, algoritmo ou mercado mexe direto no caixa.',
      },
      {
        icon: BarChart3,
        title: 'Relatório que para no clique',
        description:
          'Impressão, CTR e lead contam pouco sozinhos. A decisão de verba precisa enxergar qualidade, oportunidade, venda e CAC por canal.',
      },
    ],
  },
  plano: {
    title: 'Como trabalhamos a sua geração de demanda',
    description: 'Três etapas, com reunião semanal e o mesmo time do começo ao fim.',
    passos: [
      {
        title: 'Diagnóstico de canais',
        description:
          'Analisamos campanhas, CPL, qualidade do lead e o que já vira venda. Você recebe o mapa do que cortar, manter e testar.',
      },
      {
        title: 'Estrutura e lançamento',
        description:
          'Definimos ICP, oferta e papel de cada canal, ajustamos landing pages e tracking e colocamos as campanhas no ar.',
      },
      {
        title: 'Otimização semanal',
        description:
          'Toda semana revisamos CPL, qualidade e CAC por canal com o seu time e movemos verba para o que gera venda.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando a demanda tem estrutura',
    sem: [
      'Parte da verba continua indo para lead fora do perfil',
      'O CPL sobe a cada mudança de leilão ou algoritmo',
      'O comercial gasta horas filtrando contato sem fit',
      'A verba é decidida pelo clique, não pela venda',
    ],
    com: [
      'Cada canal tem papel, meta e CAC acompanhados',
      'O comercial recebe lead com perfil e contexto',
      'SEO, GEO e AEO reduzem a dependência de mídia paga',
      'A verba vai para o que vira venda, com leitura semanal',
    ],
  },
  entregas: {
    title: 'Sete frentes para gerar demanda com mais qualidade',
    description:
      'A entrega conecta canal, oferta, mídia, SEO, GEO, AEO, landing page e leitura comercial para o lead chegar com mais contexto.',
    items: [
      {
        icon: Target,
        title: 'Estratégia de canal por ICP',
        description:
          'Definição de público, canal, oferta, orçamento e meta antes da campanha entrar no ar.',
      },
      {
        icon: Search,
        title: 'Google Ads',
        description:
          'Busca, Performance Max e remarketing com intenção clara, termos negativos e leitura de qualidade do lead.',
      },
      {
        icon: Megaphone,
        title: 'Meta Ads',
        description:
          'Campanhas para Facebook e Instagram com criativos, públicos e retargeting alinhados à etapa do funil.',
      },
      {
        icon: Briefcase,
        title: 'LinkedIn Ads e B2B',
        description:
          'Segmentação por cargo, setor e empresa para ciclos longos, decisores específicos e tickets maiores.',
      },
      {
        icon: Globe2,
        title: 'SEO, GEO, AEO e conteúdo',
        description:
          'Arquitetura de conteúdo para buscadores, motores de resposta e IAs como ChatGPT e Gemini, capturando demanda orgânica de alta intenção.',
      },
      {
        icon: MessageSquareText,
        title: 'ChatGPT Ads',
        description:
          'Campanhas orientadas por intenção conversacional, conectadas a landing pages, tracking e aprendizado de GEO.',
      },
      {
        icon: BarChart3,
        title: 'CPL, CAC e qualidade por canal',
        description:
          'Relatório que conecta investimento, lead, oportunidade e venda para realocar verba com segurança.',
      },
    ],
  },
  pilares: {
    title: 'Os quatro pilares da geração de demanda',
    description:
      'ICP, oferta, canais e receita precisam ser lidos juntos. Quando isso falha, o time otimiza clique enquanto o comercial recebe lead ruim.',
    items: [
      {
        icon: Target,
        label: 'ICP',
        description: 'O canal é escolhido a partir do perfil de cliente que mais compra.',
        resultado: 'Lead certo',
      },
      {
        icon: MousePointerClick,
        label: 'Oferta',
        description: 'Anúncio e página filtram intenção antes do lead chegar ao comercial.',
        resultado: 'Mais qualidade',
      },
      {
        icon: Layers,
        label: 'Canais',
        description: 'Pago, orgânico, GEO e remarketing têm papéis diferentes na jornada.',
        resultado: 'Menos risco',
      },
      {
        icon: BarChart3,
        label: 'Receita',
        description: 'CPL só importa quando conversa com oportunidade, venda e CAC real.',
        resultado: 'Decisão melhor',
      },
    ],
  },
  formulario: {
    title: 'Vamos entender como está sua geração de demanda',
    description:
      'Preencha para analisarmos canais, CPL, CAC, qualidade do lead e oportunidades de realocação de verba.',
    formName: 'Diagnóstico Geração de Demanda',
    submitText: 'Quero meu diagnóstico',
    selects: [
      {
        id: 'budget',
        label: 'Budget mensal',
        options: [
          'Menos de R$5 mil/mês',
          'R$5 mil a R$20 mil/mês',
          'R$20 mil a R$80 mil/mês',
          'Acima de R$80 mil/mês',
        ],
      },
      {
        id: 'channels',
        label: 'Canais ativos',
        options: [
          'Só Google Ads',
          'Só Meta Ads',
          'Google + Meta',
          'Vários canais ativos',
          'Não tenho mídia ativa',
        ],
      },
      {
        id: 'businessType',
        label: 'Tipo de negócio',
        options: [
          'B2B / Serviços',
          'B2C / Produto',
          'SaaS / Software',
          'E-commerce',
          'Educação / EAD',
          'Outro',
        ],
      },
      {
        id: 'mainPain',
        label: 'Principal dor',
        options: [
          'Lead sem qualidade',
          'CPL alto demais',
          'Dependência de um canal',
          'Sem leitura de CAC',
          'Verba sem retorno claro',
        ],
      },
    ],
  },
  faq: [
    {
      question: 'Vocês fazem gestão de mídia ou só estratégia?',
      answer:
        'Fazemos os dois. Planejamos canal, oferta, campanha, criativo, landing page e leitura de performance. O mesmo time que pensa acompanha a execução.',
    },
    {
      question: 'Quais canais entram na geração de demanda?',
      answer:
        'Depende do ICP e do ciclo de venda. Normalmente avaliamos Google Ads, Meta Ads, LinkedIn Ads, ChatGPT Ads, SEO, GEO, conteúdo, remarketing e, quando faz sentido, TikTok Ads.',
    },
    {
      question: 'TikTok Ads faz sentido para todo negócio?',
      answer:
        'Não. TikTok pode funcionar muito bem para awareness, demanda latente e alguns produtos B2C, mas precisa de criativo, oferta e público adequados. É um canal opcional.',
    },
    {
      question: 'Como vocês qualificam o lead antes do comercial?',
      answer:
        'A qualificação começa no anúncio, passa pela oferta, landing page, formulário e, quando necessário, automação de WhatsApp ou e-mail antes do repasse ao time comercial.',
    },
    {
      question: 'SEO e GEO entram junto com mídia paga?',
      answer:
        'Sim. Mídia paga acelera a aquisição; SEO e GEO constroem demanda de longo prazo em buscadores e respostas de IA. O ideal é que os canais compartilhem aprendizados de palavra-chave, oferta, pergunta e intenção.',
    },
    {
      question: 'Quanto tempo para ver resultado?',
      answer:
        'Mídia paga começa a gerar sinais nas primeiras semanas. A otimização de qualidade e CAC costuma amadurecer entre 4 e 8 semanas. SEO e GEO normalmente pedem de 90 a 180 dias.',
    },
  ],
};
