import {
  BarChart3,
  CreditCard,
  MousePointerClick,
  RefreshCw,
  ShoppingCart,
  Target,
} from "lucide-react";
import type { ServicoConteudo } from "@/novo/components/servicos/servico-template";

export const setorEcommerce: ServicoConteudo = {
  slug: "marketing-para-ecommerce",
  nome: "E-commerce",
  tipo: "setor",
  hero: {
    title: "Marketing para e-commerce que conecta tráfego, *checkout e recompra*",
    description:
      "Estruturamos aquisição, criativos, oferta, CRO, dados e pós-compra para sua loja crescer sem entregar margem para o algoritmo.",
    bullets: [
      "Campanhas orientadas por margem e intenção de compra",
      "Produto, carrinho e checkout com menos vazamento",
      "Remarketing e recompra conectados ao faturamento",
    ],
    ctaText: "Diagnosticar minha loja",
    ctaSecundario: { text: "Ver case real", href: "/cases/e-commerce" },
  },
  resultado: {
    title: "De R$ 3k a R$ 211k de faturamento mensal.",
    description:
      "Em uma loja virtual de moda infantil, estruturamos persona, campanhas, funil, carrinho e remarketing para escalar vendas em 60 dias.",
    metrics: [
      { value: "+6.900%", label: "vendas mensais" },
      { value: "4.7x", label: "ROAS geral" },
      { value: "4,45%", label: "conversão" },
    ],
  },
  cartao: {
    rotulo: "Case e-commerce",
    titulo: "Do anúncio ao pedido, com leitura de cada etapa",
    barras: [
      {
        label: "Impressões",
        valor: "6.333.690",
        largura: 100,
        detalhe: "CPM R$ 7,45",
      },
      {
        label: "Cliques",
        valor: "51.679",
        largura: 74,
        detalhe: "CPC R$ 0,91",
      },
      {
        label: "Visualizações",
        valor: "40.567",
        largura: 58,
        detalhe: "78,5% avançaram",
      },
      {
        label: "Carrinho",
        valor: "20.536",
        largura: 42,
        detalhe: "39,7% adicionaram ao carrinho",
      },
      {
        label: "Checkout",
        valor: "2.420",
        largura: 25,
        detalhe: "11,8% chegaram ao checkout",
      },
      {
        label: "Vendas",
        valor: "1.803",
        largura: 16,
        detalhe: "4,45% de conversão",
      },
    ],
    indicadores: [
      { label: "ROAS geral", valor: "4,7x" },
      { label: "CAC Google", valor: "-50%" },
    ],
  },
  problemas: {
    badge: "Gargalos comuns",
    title: "Onde sua loja virtual *perde margem*.",
    items: [
      {
        icon: MousePointerClick,
        title: "Tráfego pago que não compra",
        description:
          "A loja recebe cliques, mas a campanha não separa curiosidade, comparação e intenção real de compra.",
      },
      {
        icon: CreditCard,
        title: "Carrinho e checkout vazando margem",
        description:
          "Frete, prazo, prova, oferta e experiência derrubam pedidos antes do pagamento.",
      },
      {
        icon: RefreshCw,
        title: "Recompra sem rotina",
        description:
          "A loja depende de novos clientes todos os meses porque não ativa base, pós-compra, LTV e recorrência.",
      },
    ],
  },
  plano: {
    title: "Como fazemos sua loja *crescer com margem*",
    description: "Três etapas, com leitura semanal de canal, oferta e funil.",
    passos: [
      {
        title: "Diagnóstico da loja",
        description:
          "Analisamos contas de mídia, página de produto, carrinho, checkout e base de clientes para achar o maior vazamento.",
      },
      {
        title: "Campanhas e conversão",
        description:
          "Reorganizamos campanhas por margem e intenção e ajustamos oferta, produto, frete e checkout.",
      },
      {
        title: "Recompra e otimização",
        description:
          "Ativamos remarketing, pós-compra e recompra, e acompanhamos ROAS, CAC e LTV por canal.",
      },
    ],
  },
  mudanca: {
    title: "O que muda quando a loja *cresce com método*",
    sem: [
      "A verba vai para clique sem intenção de compra",
      "O pedido trava no frete, no carrinho ou no checkout",
      "Todo mês começa do zero, sem recompra",
      "O ROAS oscila sem explicação",
    ],
    com: [
      "Campanhas por margem, categoria e intenção",
      "Página de produto e checkout com menos vazamento",
      "Base ativa com pós-compra e recompra",
      "CAC, ROAS, ticket e LTV lidos por canal",
    ],
  },
  entregas: {
    title: "Gestão de crescimento para *vender mais* com margem.",
    description:
      "A entrega conecta canal, criativo, oferta, checkout e recompra. O objetivo é fazer a loja crescer com leitura de negócio, não só com mais verba em anúncio.",
    ctaText: "Quero diagnosticar minha loja",
    items: [
      {
        icon: ShoppingCart,
        title: "Mídia paga para loja virtual",
        description:
          "Google Ads, Google Shopping, Facebook, Instagram e TikTok Ads quando fizer sentido para produto, margem e intenção de compra.",
      },
      {
        icon: MousePointerClick,
        title: "Criativos, ofertas e testes",
        description:
          "Testes de ângulo, promessa, produto, categoria e oferta para descobrir o que gera clique qualificado e pedido real.",
      },
      {
        icon: CreditCard,
        title: "Conversão e checkout",
        description:
          "Leitura de página de produto, prova social, frete, carrinho, checkout e pontos que travam a compra.",
      },
      {
        icon: RefreshCw,
        title: "Remarketing e recompra",
        description:
          "Estratégia para carrinho abandonado, visitantes recorrentes, base de clientes, pós-compra e novas compras.",
      },
      {
        icon: BarChart3,
        title: "Dados de performance",
        description:
          "Acompanhamento de CAC, ROAS, ticket médio, taxa de conversão, LTV e receita por canal.",
      },
      {
        icon: Target,
        title: "Rotina de otimização",
        description:
          "Leitura contínua de campanha, criativo, oferta e funil para ajustar investimento com mais clareza.",
      },
    ],
  },
  pilares: {
    badge: "Sistema de crescimento",
    title: "Do anúncio ao checkout: o que precisa estar *conectado*.",
    description:
      "Escala saudável vem quando campanha, página de produto, carrinho, checkout, pós-compra e dados apontam para a mesma meta.",
    lista: [
      "Campanhas de Google Ads, Shopping, Meta e TikTok por margem, categoria e intenção",
      "Otimização de página de produto, oferta, frete, prova social, carrinho e checkout",
      "Remarketing, carrinho abandonado, pós-compra e réguas de recompra",
      "Leitura de CAC, ROAS, ticket médio, conversão, LTV e receita por canal",
    ],
    items: [
      {
        icon: ShoppingCart,
        label: "Busca e Shopping",
        description: "Captura quem já quer comprar",
        resultado: "Alta intenção",
      },
      {
        icon: MousePointerClick,
        label: "Meta e TikTok",
        description: "Gera desejo, prova e remarketing",
        resultado: "Escala criativa",
      },
      {
        icon: CreditCard,
        label: "Checkout",
        description: "Reduz vazamento de pedidos",
        resultado: "Margem protegida",
      },
      {
        icon: RefreshCw,
        label: "Pós-compra",
        description: "Aumenta LTV e recompra",
        resultado: "Base ativa",
      },
    ],
  },
  caso: {
    badge: "Case real",
    title: "De R$ 3k a R$ 211k de faturamento mensal.",
    description:
      "Em uma loja virtual de moda infantil, estruturamos persona, campanhas, funil, carrinho e remarketing para escalar vendas em 60 dias.",
    ctaText: "Diagnosticar minha loja",
    link: { text: "Ver case completo", href: "/cases/e-commerce" },
    metrics: [
      { value: "+6.900%", label: "vendas mensais" },
      { value: "4.7x", label: "ROAS geral" },
      { value: "4,45%", label: "conversão" },
    ],
  },
  formulario: {
    badge: "Diagnóstico e-commerce",
    title: "Vamos entender onde sua loja *perde venda*.",
    description:
      "Preencha para analisarmos plataforma, faturamento, mídia, conversão e recompra com mais contexto.",
    formName: "Diagnóstico E-commerce",
    submitText: "Diagnosticar minha loja",
    nota: "Com base nas suas respostas, preparamos um diagnóstico mais preciso da loja.",
    sucesso:
      "Recebemos seus dados e vamos analisar o cenário da loja para retornar com os próximos passos.",
    selects: [
      {
        id: "platform",
        label: "Plataforma",
        options: [
          "Shopify",
          "Nuvemshop",
          "WooCommerce",
          "Tray",
          "VTEX",
          "Magento",
          "Outra",
        ],
      },
      {
        id: "revenue",
        label: "Faturamento mensal",
        options: [
          "Até R$50 mil/mês",
          "R$50 mil a R$150 mil/mês",
          "R$150 mil a R$500 mil/mês",
          "R$500 mil a R$1M/mês",
          "Acima de R$1M/mês",
        ],
      },
      {
        id: "challenge",
        label: "Principal gargalo",
        options: [
          "Tráfego não converte",
          "Carrinho abandonado",
          "Checkout com baixa conversão",
          "CAC alto",
          "ROAS instável",
          "Pouca recompra",
          "Margem apertada",
        ],
      },
      {
        id: "investment",
        label: "Investimento em mídia",
        options: [
          "Ainda não invisto",
          "Até R$5 mil/mês",
          "R$5 mil a R$20 mil/mês",
          "R$20 mil a R$50 mil/mês",
          "Acima de R$50 mil/mês",
        ],
      },
    ],
  },
  faqTexto: {
    badge: "Dúvidas frequentes",
    title: "Dúvidas *travam* decisões de escala.",
    description:
      "Antes de aumentar verba, vale entender canal, margem, oferta, checkout e recompra.",
    citacao: "O diagnóstico existe para separar impressão de evidência.",
  },
  faq: [
    {
      question: "Vocês fazem gestão de tráfego para e-commerce?",
      answer:
        "Sim, mas a gestão não fica isolada no anúncio. Olhamos canal, categoria, margem, página de produto, carrinho, checkout e recompra para entender onde está o gargalo real.",
    },
    {
      question: "Trabalham com Google Shopping?",
      answer:
        "Sim. Google Shopping pode ser um canal forte para capturar demanda com intenção de compra, principalmente quando catálogo, feed, preço e margem estão bem organizados.",
    },
    {
      question: "Faz sentido anunciar no TikTok para minha loja?",
      answer:
        "Depende do produto, margem, criativo e ciclo de compra. TikTok Ads pode funcionar muito bem para descoberta e desejo, mas não deve entrar só porque está na moda.",
    },
    {
      question: "Vocês trabalham com Facebook e Instagram Ads?",
      answer:
        "Sim. Facebook e Instagram Ads entram para descoberta, remarketing, prova de produto e escala criativa, sempre conectados a ROAS, CAC e faturamento.",
    },
    {
      question: "Vocês mexem no site ou só nos anúncios?",
      answer:
        "Avaliamos a jornada da loja. Se o problema estiver na página de produto, oferta, frete, carrinho ou checkout, isso entra no diagnóstico e no plano de otimização.",
    },
    {
      question: "Em quanto tempo dá para ver resultado?",
      answer:
        "Depende do histórico da conta, volume de dados, ticket, margem e maturidade da loja. O primeiro passo é identificar se o problema está em tráfego, oferta, conversão ou recompra.",
    },
  ],
};
