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
      'Estruturamos Google Ads, Meta Ads, LinkedIn Ads, SEO, GEO e conteúdo a partir do seu cliente ideal, da oferta e do CAC, para a verba virar oportunidade de venda.',
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
  problemas: {
    title: 'Onde a aquisição gasta verba antes de gerar receita',
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
  entregas: {
    title: 'Sete frentes para gerar demanda com mais qualidade',
    description:
      'A entrega conecta canal, oferta, mídia, SEO, GEO, landing page e leitura comercial para o lead chegar com mais contexto.',
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
        title: 'SEO, GEO e conteúdo',
        description:
          'Arquitetura de conteúdo para buscadores e respostas de IA, capturando demanda orgânica de alta intenção.',
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
    submitText: 'Diagnosticar minha demanda',
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
