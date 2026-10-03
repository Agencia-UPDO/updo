import {
  BarChart3,
  Briefcase,
  Factory,
  FileText,
  Mail,
  RefreshCw,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import type { ServicoConteudo } from "@/novo/components/servicos/servico-template";

export const setorIndustria: ServicoConteudo = {
  slug: "marketing-para-industria",
  nome: "Indústria",
  tipo: "setor",
  hero: {
    title:
      "Marketing industrial que gera pipeline previsível em venda complexa",
    description:
      "Estratégia para indústrias e empresas B2B que precisam gerar demanda qualificada, estruturar processo comercial e criar previsibilidade de receita no ciclo longo.",
    bullets: [
      "Geração de demanda com perfil de decisor industrial",
      "Processo comercial com playbook, CRM e pipeline real",
      "Nutrição e follow-up calibrados para ciclo de 3 a 18 meses",
    ],
    ctaText: "Diagnosticar minha indústria",
    ctaSecundario: { text: "Ver case real", href: "/cases/industria" },
  },
  resultado: {
    title:
      "Pipeline de R$ 8M gerado com geração de demanda e processo comercial estruturado.",
    description:
      "Reestruturamos canais, montamos o processo de inside sales, CRM e nutrição para uma indústria B2B com ciclo de venda de 6 a 12 meses e ticket acima de R$ 200 mil.",
    metrics: [
      { value: "+R$ 8M", label: "em pipeline qualificado" },
      { value: "+180%", label: "leads com perfil decisor" },
      { value: "-45%", label: "custo por lead" },
    ],
  },
  cartao: {
    rotulo: "Case indústria",
    titulo: "Pipeline previsível com venda complexa e ciclo longo estruturado",
    metricas: [
      {
        label: "Pipeline gerado",
        valor: "+R$ 8M",
        detalhe: "em oportunidades qualificadas",
      },
      {
        label: "Leads qualificados",
        valor: "+180%",
        detalhe: "com perfil de decisor real",
      },
      {
        label: "Custo por lead",
        valor: "-45%",
        detalhe: "vs. abordagem anterior",
      },
      {
        label: "Ciclo de venda",
        valor: "-30%",
        detalhe: "com processo e nutrição",
      },
    ],
    nota: "A indústria cresce quando pipeline, processo comercial e geração de demanda param de operar sem conexão.",
  },
  problemas: {
    badge: "Gargalos da venda industrial",
    title:
      "Onde a indústria perde venda entre demanda, decisores e ciclo longo.",
    items: [
      {
        icon: Factory,
        title: "Demanda que precisa ser criada",
        description:
          "O comprador industrial não pesquisa solução como quem compra online. A demanda precisa ser construída com conteúdo técnico, presença nos canais certos e abordagem consultiva.",
      },
      {
        icon: Users,
        title: "Múltiplos decisores no processo",
        description:
          "Engenharia aprova o técnico. Compras negocia o preço. Financeiro libera o orçamento. Diretoria assina. Cada nó exige argumento diferente, e a maioria das empresas fala só com um.",
      },
      {
        icon: RefreshCw,
        title: "Ciclo longo sem previsibilidade",
        description:
          "Pipeline de 6 a 18 meses sem leitura clara de estágio, probabilidade e próximos passos vira achismo. O forecast não fecha e o time comercial opera no escuro.",
      },
    ],
  },
  plano: {
    title: "Como estruturamos o crescimento da sua indústria",
    description:
      "Três etapas. Os primeiros leads qualificados costumam aparecer entre 60 e 90 dias.",
    passos: [
      {
        title: "Diagnóstico de pipeline",
        description:
          "Mapeamos decisores, canais, materiais e processo comercial para entender onde a oportunidade se perde.",
      },
      {
        title: "Demanda e processo",
        description:
          "Ativamos Google Search e LinkedIn Ads, criamos conteúdo técnico e montamos o playbook de inside sales e o CRM.",
      },
      {
        title: "Nutrição e forecast",
        description:
          "Acompanhamos o pipeline por estágio, nutrimos o ciclo longo e lemos o forecast com o time toda semana.",
      },
    ],
  },
  mudanca: {
    title: "O que muda quando a venda industrial tem estrutura",
    sem: [
      "O pipeline depende de indicação e feira",
      "A abordagem fala só com um dos decisores",
      "O lead esfria durante o ciclo longo",
      "O forecast é baseado em data estimada",
    ],
    com: [
      "Demanda gerada com perfil de decisor industrial",
      "Materiais e argumentos para cada decisor",
      "Nutrição calibrada para ciclos de 3 a 18 meses",
      "Forecast com probabilidade real por estágio",
    ],
  },
  entregas: {
    title: "Da geração de demanda ao pipeline com previsibilidade real.",
    description:
      "O trabalho conecta marketing, processo comercial e dados para que a indústria cresça com leitura de oportunidade, não com dependência de indicação ou prospecção no escuro.",
    ctaText: "Quero diagnosticar minha indústria",
    items: [
      {
        icon: Target,
        title: "Geração de demanda industrial",
        description:
          "Campanhas no Google Search e LinkedIn Ads com foco em perfil de decisor, segmento, aplicação e intenção de solução, não só de produto.",
      },
      {
        icon: FileText,
        title: "Conteúdo técnico e materiais de venda",
        description:
          "Landing pages, apresentações, whitepapers, cases e materiais de apoio que constroem autoridade e sustentam o argumento técnico ao longo do ciclo.",
      },
      {
        icon: Mail,
        title: "Automação e nutrição de lead B2B",
        description:
          "Réguas de email e WhatsApp calibradas para ciclo longo, estágio de funil e perfil de decisor, sem parecer spam e sem deixar lead esfriar.",
      },
      {
        icon: Briefcase,
        title: "Inside Sales e processo comercial",
        description:
          "Playbook de abordagem, qualificação SPIN/BANT, follow-up estruturado e gestão de pipeline com leitura semanal de oportunidades.",
      },
      {
        icon: BarChart3,
        title: "Dashboard de pipeline e forecast",
        description:
          "Visão de pipeline por estágio, origem, produto e vendedor. Forecast de receita com probabilidade real, não só com data estimada de fechamento.",
      },
      {
        icon: Workflow,
        title: "Integração CRM e time comercial",
        description:
          "Configuração ou ajuste de CRM, integração com automação e treinamento do time para que o dado entre de verdade e o gestor consiga ler.",
      },
    ],
  },
  pilares: {
    badge: "Sistema de crescimento",
    title: "Do Google ao inside sales: o que precisa estar conectado.",
    description:
      "A venda industrial não começa no vendedor. Começa na busca, no LinkedIn, no conteúdo técnico. E só converte quando processo comercial, CRM e follow-up funcionam juntos ao longo do ciclo.",
    items: [
      {
        icon: Target,
        label: "Google Search",
        description: "Captura quem já busca solução técnica",
        resultado: "Alta intenção",
      },
      {
        icon: Users,
        label: "LinkedIn Ads",
        description: "Prospecção de decisores por cargo e setor",
        resultado: "Perfil qualificado",
      },
      {
        icon: Mail,
        label: "Automação e email",
        description: "Nutrição no ciclo longo sem perder contato",
        resultado: "Engajamento B2B",
      },
      {
        icon: Briefcase,
        label: "Inside Sales",
        description: "Qualificação e avanço de oportunidades",
        resultado: "Pipeline real",
      },
    ],
  },
  caso: {
    badge: "Case real",
    title:
      "Pipeline de R$ 8M gerado com geração de demanda e processo comercial estruturado.",
    description:
      "Reestruturamos canais, montamos o processo de inside sales, CRM e nutrição para uma indústria B2B com ciclo de venda de 6 a 12 meses e ticket acima de R$ 200 mil.",
    ctaText: "Diagnosticar minha indústria",
    link: { text: "Ver case completo", href: "/cases/industria" },
    metrics: [
      { value: "+R$ 8M", label: "em pipeline qualificado" },
      { value: "+180%", label: "leads com perfil decisor" },
      { value: "-45%", label: "custo por lead" },
    ],
  },
  formulario: {
    badge: "Diagnóstico indústria",
    title: "Vamos entender onde sua operação industrial perde pipeline.",
    description:
      "Preencha os dados para analisarmos segmento, ticket, ciclo de venda e processo comercial com mais contexto.",
    formName: "Diagnóstico Indústria",
    submitText: "Diagnosticar minha indústria",
    sucesso:
      "Recebemos seus dados e vamos analisar o cenário industrial para retornar com os próximos passos.",
    selects: [
      {
        id: "industryType",
        label: "Segmento industrial",
        options: [
          "Metal-mecânico",
          "Química e petroquímica",
          "Alimentos e bebidas",
          "Embalagens",
          "Construção civil / materiais",
          "Tecnologia industrial / SaaS B2B",
          "Agronegócio",
          "Outro",
        ],
      },
      {
        id: "ticket",
        label: "Ticket médio da venda",
        options: [
          "Até R$10 mil",
          "R$10 mil a R$50 mil",
          "R$50 mil a R$200 mil",
          "R$200 mil a R$1M",
          "Acima de R$1M",
        ],
      },
      {
        id: "salesCycle",
        label: "Ciclo médio de venda",
        options: [
          "Menos de 1 mês",
          "1 a 3 meses",
          "3 a 6 meses",
          "6 a 12 meses",
          "Mais de 12 meses",
        ],
      },
      {
        id: "investment",
        label: "Investimento em marketing",
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
    title: "Dúvidas sobre marketing industrial e venda B2B.",
    description:
      "Antes de investir em mais visitas técnicas ou prospecção no escuro, vale entender canal, processo, CRM e qualificação de oportunidade.",
    citacao:
      "O diagnóstico separa problema de geração de demanda de problema de processo comercial, e são coisas diferentes que pedem soluções diferentes.",
  },
  faq: [
    {
      question: "Vocês fazem marketing para indústria de nicho técnico?",
      answer:
        "Sim. Trabalhamos com segmentos onde o produto é técnico, o comprador é especialista e a argumentação precisa ir além de preço. O diagnóstico ajuda a entender o canal certo para o perfil de decisor do seu setor.",
    },
    {
      question: "Como funciona LinkedIn Ads para indústria?",
      answer:
        "LinkedIn Ads permite segmentar por cargo, função, setor e tamanho de empresa, o que é fundamental quando você vende para engenheiro de aplicação, gerente de compras ou diretor industrial. Mas a campanha precisa de oferta, conteúdo e funil adequados ao ciclo.",
    },
    {
      question: "Dá para gerar demanda quando o produto é muito técnico?",
      answer:
        "Sim, e muitas vezes o nicho técnico é uma vantagem: o decisor busca especificamente, compara menos no preço e valoriza autoridade. Conteúdo técnico, cases reais e abordagem consultiva constroem isso de forma consistente.",
    },
    {
      question: "Quanto tempo leva para ver resultado em venda industrial?",
      answer:
        "Depende do ticket, ciclo e maturidade comercial. Em geral, os primeiros leads qualificados aparecem em 60 a 90 dias, mas o ciclo de fechamento pode ser longo. O diagnóstico mapeia onde está o gargalo real: tráfego, abordagem ou processo comercial.",
    },
    {
      question: "Vocês trabalham com CRM e inside sales para indústria?",
      answer:
        "Sim. A estruturação comercial é parte do nosso escopo. Ajudamos a configurar CRM, montar playbook de abordagem, definir processo de qualificação e criar rotina de gestão de pipeline com o time.",
    },
    {
      question:
        "Funciona para quem vende para distribuidores ou representantes?",
      answer:
        "Sim. A estratégia se adapta ao canal: venda direta ao industrial, ao distribuidor, ao representante ou ao projeto (EPC). O que muda é a jornada, o perfil de decisor e os materiais de suporte à venda.",
    },
  ],
};
