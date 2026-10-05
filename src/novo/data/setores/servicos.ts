import {
  Award,
  BarChart3,
  FileText,
  RefreshCw,
  Target,
  Zap,
} from "lucide-react";
import type { ServicoConteudo } from "@/novo/components/servicos/servico-template";

export const setorServicos: ServicoConteudo = {
  slug: "marketing-para-servicos",
  nome: "Empresas de Serviços",
  tipo: "setor",
  hero: {
    title:
      "Marketing para empresas de serviços que precisam de *lead qualificado*, não só volume",
    description:
      "Posicionamento claro, canal previsível, qualificação estruturada e processo comercial para planos de saúde, consultorias, comunicação visual, seguros, contabilidade e outros serviços.",
    bullets: [
      "Diferencial comunicado para quem tem fit e decisão",
      "Canal previsível que cresce sem depender de indicação",
      "Lead qualificado chega ao comercial pronto para fechar",
    ],
    ctaText: "Diagnosticar minha empresa",
    ctaSecundario: { text: "Ver como funciona", href: "/diagnostico" },
  },
  resultado: {
    title:
      "De indicação como único canal para R$ 3,8M em contratos com geração de demanda estruturada.",
    description:
      "Definimos posicionamento por segmento, ativamos Google e Meta com ICP claro, criamos funil de qualificação e automatizamos o follow-up. CPL caiu de R$ 480 para R$ 127 em 5 meses.",
    metrics: [
      { value: "+R$ 3,8M", label: "em contratos fechados" },
      { value: "+2,4x", label: "leads qualificados" },
      { value: "-74%", label: "CPL vs. anterior" },
    ],
  },
  cartao: {
    rotulo: "Pipeline de serviços",
    titulo:
      "Do primeiro clique ao contrato assinado com canal e qualificação estruturados",
    barras: [
      { label: "Atração", valor: "1.840 visitas/mês", largura: 100 },
      { label: "Qualificação", valor: "312 leads qualificados", largura: 57 },
      { label: "Proposta", valor: "94 propostas enviadas", largura: 27 },
      { label: "Contrato", valor: "38 contratos fechados", largura: 11 },
    ],
    nota: "Empresas de serviços crescem quando o diferencial é comunicado para o cliente certo, pelo canal certo, no momento certo.",
  },
  problemas: {
    badge: "Gargalos do setor",
    title:
      "Onde as empresas de serviços *perdem receita* antes de chegar ao comercial.",
    items: [
      {
        icon: Award,
        title: "Serviço invisível no digital",
        description:
          "O serviço é bom, mas o cliente não encontra. O site não converte, o diferencial não está claro e a empresa perde para concorrentes que comunicam melhor, mesmo entregando menos resultado.",
      },
      {
        icon: Target,
        title: "Lead sem fit, proposta que não fecha",
        description:
          "Marketing gera volume, mas os leads chegam fora do perfil. O comercial perde tempo qualificando quem não tem orçamento, urgência ou encaixe com o serviço oferecido.",
      },
      {
        icon: RefreshCw,
        title: "Crescimento travado em indicação",
        description:
          "Quando o ciclo de indicações desacelera, o crescimento trava. Não há canal previsível, não há meta alcançável e cada mês depende do humor da rede de contatos.",
      },
    ],
  },
  plano: {
    title: "Como estruturamos o *crescimento* da sua empresa de serviços",
    description:
      "Três etapas. As primeiras oportunidades costumam aparecer entre 30 e 60 dias.",
    passos: [
      {
        title: "Posicionamento e ICP",
        description:
          "Definimos quem atender, qual problema resolver e como comunicar o diferencial para o cliente certo.",
      },
      {
        title: "Canais e qualificação",
        description:
          "Ativamos Google, Meta ou LinkedIn conforme o perfil e montamos o funil que filtra o lead antes do comercial.",
      },
      {
        title: "Follow-up e leitura",
        description:
          "Automatizamos o follow-up e acompanhamos CPL, proposta, fechamento e ciclo de venda por canal.",
      },
    ],
  },
  mudanca: {
    title: "O que muda quando o serviço tem *canal e processo*",
    sem: [
      "O crescimento depende de indicação",
      "O diferencial não fica claro no digital",
      "O comercial perde tempo com lead sem fit",
      "A decisão de verba é feita por intuição",
    ],
    com: [
      "Canal previsível gerando oportunidade todo mês",
      "Posicionamento que vende por valor, não por preço",
      "Lead qualificado chegando pronto para a proposta",
      "CPL, ticket e ciclo acompanhados por canal",
    ],
  },
  entregas: {
    title:
      "Do posicionamento ao contrato: estrutura para crescer com *previsibilidade*.",
    description:
      "A entrega conecta clareza de diferencial, geração de demanda, qualificação e processo comercial. O objetivo é que a empresa de serviços pare de depender de indicação e comece a crescer com canal e sistema.",
    ctaText: "Diagnosticar minha empresa",
    items: [
      {
        icon: Award,
        title: "Posicionamento e diferencial",
        description:
          "Clareza sobre quem atender, qual problema resolver e por que escolher a empresa. O posicionamento correto faz o cliente comprar por valor, não por preço.",
      },
      {
        icon: Target,
        title: "Geração de demanda segmentada",
        description:
          "Google, Meta e LinkedIn calibrados para o perfil que fecha contrato. Cada campanha é construída com ICP definido, não só com verba e criativo genérico.",
      },
      {
        icon: FileText,
        title: "Conteúdo de autoridade e prova social",
        description:
          "Cases, depoimentos, artigos e materiais que educam o lead antes da reunião. Quem chega educado objeta menos e converte mais rápido.",
      },
      {
        icon: Zap,
        title: "Qualificação e funil de conversão",
        description:
          "Landing pages, formulários e automação que filtram o lead antes de chegar ao comercial. O time foca em quem tem fit, momento e orçamento.",
      },
      {
        icon: RefreshCw,
        title: "Nutrição e follow-up automático",
        description:
          "Sequências por WhatsApp, e-mail e retargeting que mantêm o lead engajado até o momento de compra, sem esforço manual da equipe.",
      },
      {
        icon: BarChart3,
        title: "Dashboard e KPIs de receita",
        description:
          "Acompanhamento de CPL, ticket médio, ciclo de venda e retorno por canal. As decisões de marketing são tomadas com dado, não com intuição.",
      },
    ],
  },
  pilares: {
    badge: "Sistema de crescimento",
    title:
      "O que precisa estar *conectado* para o serviço crescer com consistência.",
    description:
      "Empresa de serviços não cresce só com mais verba em anúncio. Cresce quando posicionamento, canal, qualificação e processo comercial apontam para a mesma meta de receita.",
    items: [
      {
        icon: Award,
        label: "Posicionamento claro",
        description: "Diferenciação por valor, não por preço",
        resultado: "Ticket maior",
      },
      {
        icon: Target,
        label: "Canal previsível",
        description: "Oportunidade todo mês sem depender de indicação",
        resultado: "Crescimento estável",
      },
      {
        icon: FileText,
        label: "Conteúdo de autoridade",
        description: "Lead chega educado com menos objeção",
        resultado: "Ciclo menor",
      },
      {
        icon: Zap,
        label: "Qualificação estruturada",
        description: "Comercial foca em quem tem fit e momento",
        resultado: "Conversão maior",
      },
    ],
  },
  caso: {
    badge: "Resultado real",
    title:
      "De indicação como único canal para R$ 3,8M em contratos com geração de demanda estruturada.",
    description:
      "Definimos posicionamento por segmento, ativamos Google e Meta com ICP claro, criamos funil de qualificação e automatizamos o follow-up. CPL caiu de R$ 480 para R$ 127 em 5 meses.",
    ctaText: "Agendar diagnóstico",
    metrics: [
      { value: "+R$ 3,8M", label: "em contratos fechados" },
      { value: "+2,4x", label: "leads qualificados" },
      { value: "-74%", label: "CPL vs. anterior" },
    ],
  },
  formulario: {
    badge: "Diagnóstico gratuito",
    title: "Vamos entender onde sua empresa de serviços *perde receita*.",
    description:
      "Preencha os dados para analisarmos posicionamento, canal, qualificação e ciclo de venda com mais contexto.",
    formName: "Diagnóstico Empresa de Serviços",
    submitText: "Diagnosticar minha empresa",
    sucesso:
      "Recebemos suas informações e vamos analisar o cenário para retornar com um direcionamento inicial.",
    selects: [
      {
        id: "segment",
        label: "Segmento de serviço",
        options: [
          "Planos de saúde / Seguros",
          "Consultoria / Advisory",
          "Comunicação visual / Gráfica",
          "Contabilidade / Auditoria",
          "Jurídico / Compliance",
          "TI / Outsourcing",
          "RH / Treinamento",
          "Outro",
        ],
      },
      {
        id: "ticket",
        label: "Ticket médio por contrato",
        options: [
          "Até R$5 mil por contrato",
          "R$5 mil a R$20 mil",
          "R$20 mil a R$50 mil",
          "R$50 mil a R$150 mil",
          "Acima de R$150 mil",
        ],
      },
      {
        id: "salesCycle",
        label: "Ciclo médio de venda",
        options: [
          "Menos de 2 semanas",
          "2 semanas a 1 mês",
          "1 a 3 meses",
          "Mais de 3 meses",
        ],
      },
      {
        id: "investment",
        label: "Investimento em marketing",
        options: [
          "Ainda não invisto",
          "Até R$5 mil/mês",
          "R$5 mil a R$15 mil/mês",
          "R$15 mil a R$40 mil/mês",
          "Acima de R$40 mil/mês",
        ],
      },
    ],
  },
  faqTexto: {
    badge: "Dúvidas frequentes",
    title:
      "*Dúvidas* sobre marketing para planos de saúde, consultorias e outros serviços.",
    description:
      "Antes de aumentar verba ou contratar mais representantes, vale entender posicionamento, canal, qualificação e processo.",
    citacao:
      "O diferencial de uma empresa de serviços é real, mas invisível até ser comunicado da forma certa para o cliente certo.",
  },
  faq: [
    {
      question:
        "Funciona para empresa de serviços que depende só de indicação?",
      answer:
        "Sim. A maioria dos nossos clientes começa nesse ponto. O trabalho é criar o canal previsível que funciona em paralelo com indicação, e que cresce mesmo quando a rede de contatos desacelera.",
    },
    {
      question: "Qual canal funciona melhor para empresas de serviços?",
      answer:
        "Depende do perfil do cliente, ticket e ciclo de venda. Para B2C de serviço como planos de saúde, seguros e estética, Google e Meta costumam ser mais eficientes. Para serviços corporativos como consultoria, TI e jurídico, LinkedIn Ads e conteúdo de autoridade funcionam melhor. O diagnóstico define o canal certo para cada caso.",
    },
    {
      question: "Como comunicar o diferencial de um serviço intangível?",
      answer:
        "Com prova social, cases reais e conteúdo que mostra o resultado, não só o processo. A maioria das empresas de serviço fala sobre como trabalha, mas o cliente quer saber o que vai mudar na sua realidade depois de contratar.",
    },
    {
      question: "Quanto tempo para ter os primeiros resultados?",
      answer:
        "As primeiras oportunidades aparecem entre 30 e 60 dias depois da ativação dos canais. Resultado consistente e crescente leva de 90 a 120 dias, dependendo do ciclo de venda e da maturidade do mercado.",
    },
    {
      question:
        "Vocês trabalham com planos de saúde, seguros, contabilidade e consultoria?",
      answer:
        "Sim. Trabalhamos com diversas categorias de empresas de serviço: planos de saúde, seguros, comunicação visual, consultoria de gestão, escritórios jurídicos, empresas de TI, RH e outsourcing, entre outros segmentos.",
    },
    {
      question: "Como medir resultado em serviços com ciclo de venda longo?",
      answer:
        "Acompanhamos o pipeline por estágio: volume de leads, taxa de qualificação, taxa de proposta, taxa de fechamento e tempo médio em cada etapa. Isso mostra onde está o gargalo: se é em atração, qualificação ou fechamento.",
    },
  ],
};
