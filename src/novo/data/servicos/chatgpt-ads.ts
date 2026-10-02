import {
  BarChart3,
  Briefcase,
  Filter,
  Globe2,
  Layers,
  Megaphone,
  MousePointerClick,
  Search,
  Target,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const chatgptAds: ServicoConteudo = {
  slug: 'chatgpt-ads',
  nome: 'ChatGPT Ads',
  hero: {
    title: 'ChatGPT Ads para aparecer quando o cliente está decidindo',
    description:
      'Planejamos e operamos campanhas no ChatGPT conectando intenção conversacional, anúncios, landing pages, tracking, SEO, GEO e AEO.',
    bullets: [
      'Contextos definidos por intenção e momento de decisão',
      'Anúncios e landing pages com continuidade de mensagem',
      'Mídia paga integrada a SEO, GEO, analytics e CRM',
    ],
    ctaText: 'Quero anunciar no ChatGPT',
  },
  resultado: {
    title: 'Entrar cedo exige teste controlado, não aposta cega',
    description:
      'A UPDO já opera campanhas na plataforma e usa os primeiros dados para ajustar contexto, mensagem, página e mensuração. Começamos com hipóteses claras, orçamento controlado e critério de escala.',
    metrics: [
      { value: 'CPC', label: 'custo por clique' },
      { value: 'CTR', label: 'taxa de cliques' },
      { value: 'Conversões', label: 'ações geradas' },
      { value: 'CPA', label: 'custo por conversão' },
    ],
  },
  visual: 'jornada-ia',
  problemas: {
    title: 'Por que simplesmente replicar campanhas antigas não basta',
    description:
      'Se o cliente já compara opções dentro do ChatGPT, a marca que não aparece nessa conversa fica fora da decisão.',
    items: [
      {
        icon: Filter,
        title: 'A marca não aparece na hora da decisão',
        description:
          'O cliente usa o ChatGPT para comparar opções, entender diferenças e escolher caminhos, mas sua empresa ainda não participa dessa conversa.',
      },
      {
        icon: Layers,
        title: 'Campanha pensada como busca tradicional',
        description:
          'ChatGPT Ads não funciona apenas por palavra-chave. Contexto, intenção conversacional, oferta e landing page precisam conversar entre si.',
      },
      {
        icon: BarChart3,
        title: 'Presença paga sem autoridade orgânica',
        description:
          'Comprar mídia sem estruturar SEO e GEO gera tráfego, mas não ajuda a marca a ser compreendida e citada pelas IAs no longo prazo.',
      },
    ],
  },
  plano: {
    title: 'Como começamos no ChatGPT Ads',
    description: 'Três etapas, com orçamento controlado e critério claro para escalar.',
    passos: [
      {
        title: 'Diagnóstico de elegibilidade',
        description:
          'Avaliamos categoria, oferta, landing page e capacidade de medir conversão antes de recomendar investimento.',
      },
      {
        title: 'Campanha controlada',
        description:
          'Montamos contextos, anúncios e landing page com hipóteses claras e orçamento definido para o teste.',
      },
      {
        title: 'Leitura e escala',
        description:
          'Acompanhamos CPC, CTR, conversões e CPA, escalamos o que funciona e levamos o aprendizado para SEO, GEO e AEO.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando a marca entra na conversa',
    sem: [
      'O concorrente aparece na conversa e a sua marca não',
      'A campanha é copiada da busca tradicional',
      'O clique chega sem medição de conversão',
      'A presença paga não vira autoridade orgânica',
    ],
    com: [
      'A marca presente no momento da decisão',
      'Anúncio e página com a mesma mensagem',
      'CPC, CTR, conversões e CPA medidos',
      'O aprendizado da mídia alimenta SEO, GEO e AEO',
    ],
  },
  entregas: {
    title: 'O que entregamos em ChatGPT Ads e presença em IA',
    description:
      'A operação conecta campanha, contexto, criativo, landing page, conversão e autoridade orgânica em um mesmo aprendizado.',
    items: [
      {
        icon: Target,
        title: 'Mapeamento de intenção conversacional',
        description:
          'Identificamos dúvidas, comparações, problemas e momentos de decisão em que sua solução pode ser realmente útil.',
      },
      {
        icon: Search,
        title: 'Estrutura de campanhas e context hints',
        description:
          'Organizamos campanhas, grupos de anúncios, objetivos, orçamento e sinais de contexto para orientar a relevância.',
      },
      {
        icon: Megaphone,
        title: 'Anúncios úteis e específicos',
        description:
          'Criamos variações de títulos, textos e imagens com benefício claro, sem frases genéricas ou promessas artificiais.',
      },
      {
        icon: Briefcase,
        title: 'Landing pages orientadas à conversa',
        description:
          'A página responde ao contexto que trouxe o clique, explica a oferta e conduz a próxima ação sem quebra de expectativa.',
      },
      {
        icon: Globe2,
        title: 'SEO, GEO, AEO e autoridade em IA',
        description:
          'Transformamos perguntas e aprendizados da mídia em páginas e conteúdos compreensíveis por buscadores e modelos de IA.',
      },
      {
        icon: BarChart3,
        title: 'Tracking, conversão e otimização',
        description:
          'Acompanhamos impressões, cliques, CPC, conversões e qualidade comercial com UTMs, analytics, CRM e Ads Manager.',
      },
    ],
  },
  pilares: {
    badge: 'Método UPDO',
    title: 'Quatro camadas para transformar conversa em aquisição',
    description:
      'A plataforma é nova, mas o fundamento continua rigoroso: relevância, experiência, mensuração e aprendizado comercial.',
    items: [
      {
        icon: Target,
        label: 'Intenção',
        description: 'Mapeamos o que o cliente está tentando entender, comparar ou resolver.',
        resultado: 'Momento certo',
      },
      {
        icon: MousePointerClick,
        label: 'Contexto',
        description:
          'Usamos sinais que aproximam a oferta das conversas em que ela é relevante.',
        resultado: 'Mais relevância',
      },
      {
        icon: Layers,
        label: 'Experiência',
        description:
          'Anúncio e landing page mantêm clareza, utilidade e continuidade da conversa.',
        resultado: 'Menos atrito',
      },
      {
        icon: BarChart3,
        label: 'Aprendizado',
        description:
          'A mídia revela perguntas e ofertas que também fortalecem SEO, GEO e conteúdo.',
        resultado: 'Evolução contínua',
      },
    ],
  },
  formulario: {
    title: 'Vamos avaliar ChatGPT Ads para sua empresa',
    description:
      'Preencha para analisarmos oferta, categoria, estrutura digital, investimento e capacidade de medir conversões.',
    formName: 'Diagnóstico ChatGPT Ads',
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
        label: 'Mídia atual',
        options: [
          'Já anuncio no ChatGPT',
          'Tenho conta, mas ainda não anunciei',
          'Uso Google e/ou Meta Ads',
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
        label: 'Objetivo principal',
        options: [
          'Começar no ChatGPT Ads',
          'Otimizar campanhas existentes',
          'Criar landing pages para a mídia',
          'Estruturar tracking e conversão',
          'Integrar ChatGPT Ads, SEO e GEO',
        ],
      },
    ],
  },
  faq: [
    {
      question: 'O que é ChatGPT Ads?',
      answer:
        'É a plataforma de anúncios da OpenAI. Os anúncios aparecem separados das respostas e podem alcançar pessoas enquanto elas exploram opções, comparam alternativas e tomam decisões dentro do ChatGPT.',
    },
    {
      question: 'ChatGPT Ads funciona como Google Ads?',
      answer:
        'Não exatamente. Há objetivos, orçamento, lances e anúncios, mas a entrega considera o contexto e a intenção da conversa, além do anúncio e da landing page. Os context hints ajudam a orientar a relevância, mas não funcionam como palavras-chave exatas.',
    },
    {
      question: 'Quais modelos de cobrança estão disponíveis?',
      answer:
        'A plataforma oferece campanhas por CPM, CPC e, quando disponível para a conta, otimização para conversão. A escolha depende do objetivo, da maturidade do tracking e do volume de dados.',
    },
    {
      question: 'A UPDO cria e gerencia as campanhas?',
      answer:
        'Sim. Fazemos diagnóstico, estrutura de campanha, contextos, anúncios, criativos, landing pages, configuração de mensuração, acompanhamento e otimização.',
    },
    {
      question: 'Por que combinar ChatGPT Ads com SEO e GEO?',
      answer:
        'ChatGPT Ads gera presença paga e dados mais rápidos. SEO e GEO estruturam páginas, entidades, respostas e provas para ampliar a presença orgânica da marca em buscadores e sistemas de IA. Uma frente acelera aprendizado; a outra constrói autoridade.',
    },
    {
      question: 'O serviço serve para qualquer empresa?',
      answer:
        'Não automaticamente. Avaliamos elegibilidade da categoria, disponibilidade da plataforma, clareza da oferta, qualidade da landing page e capacidade de medir conversão antes de recomendar investimento.',
    },
  ],
};
