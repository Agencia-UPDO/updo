import {
  BarChart3,
  Clock3,
  Eye,
  FileSearch,
  ListChecks,
  MessageSquareMore,
  PhoneCall,
  RefreshCcw,
  ScanSearch,
  Search,
  Target,
  Users,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const clienteOculto: ServicoConteudo = {
  slug: 'cliente-oculto',
  nome: 'Cliente Oculto',
  hero: {
    title: 'Veja como sua empresa *atende na prática*',
    description:
      'Auditamos atendimento, tempo de resposta, follow-up, clareza da oferta e percepção competitiva para mostrar onde você perde confiança, lead e receita antes mesmo da proposta.',
    bullets: [
      'Cliente oculto em WhatsApp, Instagram, telefone, formulário ou loja',
      'Análise de concorrentes em preço, design, informação e percepção',
      'Recomendações práticas para script, processo e posicionamento',
    ],
    ctaText: 'Solicitar diagnóstico',
    ctaSecundario: { text: 'Ver diagnóstico estratégico', href: '/diagnostico' },
  },
  resultado: {
    title: 'O que muda na prática.',
    description:
      'O Cliente Oculto revela se o gargalo está no tempo, na linguagem, no processo, na apresentação do produto ou na força de percepção do concorrente. Isso encurta decisão e melhora a execução da equipe.',
    metrics: [
      { value: 'Tempo', label: 'de resposta comparado com o mercado' },
      { value: 'Script', label: 'real da equipe e qualidade da abordagem' },
      { value: 'Percepção', label: 'de preço, valor, design e clareza' },
      { value: 'Prioridade', label: 'do que corrigir primeiro para vender melhor' },
    ],
  },
  visual: 'cliente-oculto',
  problemas: {
    badge: 'Onde a receita escapa',
    title: 'Onde a venda *escapa*.',
    items: [
      {
        icon: Clock3,
        title: 'Atendimento lento e sem follow-up',
        description:
          'O lead chama, espera, recebe resposta morna e some. Muitas empresas acham que perdem por preço quando, na prática, perdem por demora e falta de condução.',
      },
      {
        icon: MessageSquareMore,
        title: 'Texto pronto que mata a conversa',
        description:
          'Equipe responde igual para todo mundo, sem personalização, sem leitura de intenção e sem continuidade. O cliente percebe desinteresse e compara com quem atende melhor.',
      },
      {
        icon: Search,
        title: 'Concorrente parece melhor do que é',
        description:
          'Preço, design, clareza de oferta, prova social e experiência moldam percepção. Sem benchmark, a empresa ajusta campanha sem entender onde a experiência realmente perde força.',
      },
    ],
  },
  mudanca: {
    title: 'O que você passa a *enxergar* com o Cliente Oculto',
    sem: [
      'A empresa acha que perde por preço, sem saber o motivo',
      'Ninguém sabe quanto tempo o time leva para responder',
      'A mesma mensagem pronta vai para todo cliente',
      'O concorrente parece melhor e ninguém sabe por quê',
    ],
    com: [
      'Tempo de resposta comparado com o mercado',
      'Script real da equipe avaliado com evidência',
      'Percepção de preço, valor, design e clareza',
      'Prioridade do que corrigir primeiro para vender melhor',
    ],
  },

  entregas: {
    title: 'O que você *recebe*.',
    description: '',
    ctaText: 'Quero avaliar meu atendimento',
    items: [
      {
        icon: PhoneCall,
        title: 'Cliente oculto no seu canal de atendimento',
        description:
          'Testamos WhatsApp, Instagram, formulário, telefone ou atendimento presencial para medir tempo, postura comercial, qualidade da resposta e consistência do follow-up.',
      },
      {
        icon: ScanSearch,
        title: 'Análise comparativa com concorrentes',
        description:
          'Avaliamos como seus concorrentes apresentam preço, design, clareza da oferta, atendimento e percepção geral da experiência.',
      },
      {
        icon: FileSearch,
        title: 'Relatório com evidências reais',
        description:
          'Você recebe prints, tempos de resposta, pontos de ruptura, comparativos e leitura prática do que está funcionando ou travando a conversão.',
      },
      {
        icon: RefreshCcw,
        title: 'Roteiro de correção',
        description:
          'Transformamos o diagnóstico em prioridade prática: script, follow-up, padrão de atendimento, apresentação do produto e ajustes de processo.',
      },
      {
        icon: Eye,
        title: 'Leitura de percepção',
        description:
          'Mostramos como sua empresa é percebida frente ao concorrente em valor, clareza, desejo, confiança e facilidade de compra.',
      },
      {
        icon: Users,
        title: 'Base para treinamento da equipe',
        description:
          'O Cliente Oculto também vira insumo para desenvolver atendimento, recepção, comercial e liderança com base em situações reais.',
      },
    ],
  },
  pilares: {
    badge: 'Método Cliente Oculto',
    title: 'Da simulação ao *plano de ação*.',
    description:
      'Entramos na jornada, registramos a experiência e transformamos os achados em prioridades claras para atendimento, oferta e processo.',
    items: [
      {
        icon: Target,
        label: 'Definição do cenário',
        description:
          'Mapeamos canais, perfis de cliente, pontos de contato e concorrentes que entram na leitura.',
        resultado: '',
      },
      {
        icon: PhoneCall,
        label: 'Execução oculta',
        description:
          'Entramos na jornada como cliente real e registramos atendimento, tempo, linguagem, condução e follow-up.',
        resultado: '',
      },
      {
        icon: ScanSearch,
        label: 'Benchmark competitivo',
        description:
          'Comparamos sua experiência com a experiência entregue pelos principais concorrentes.',
        resultado: '',
      },
      {
        icon: BarChart3,
        label: 'Prioridade de impacto',
        description:
          'Organizamos os achados por risco comercial, perda de confiança e impacto em conversão.',
        resultado: '',
      },
      {
        icon: ListChecks,
        label: 'Plano de ajuste',
        description:
          'Entregamos recomendações práticas para atendimento, processo, apresentação de produto e posicionamento.',
        resultado: '',
      },
    ],
  },
  caso: {
    badge: 'Resultados',
    title: 'O que muda na prática.',
    description:
      'O Cliente Oculto revela se o gargalo está no tempo, na linguagem, no processo, na apresentação do produto ou na força de percepção do concorrente. Isso encurta decisão e melhora a execução da equipe.',
    ctaText: 'Diagnosticar meu atendimento',
    metrics: [
      { value: 'Tempo', label: 'de resposta comparado com o mercado' },
      { value: 'Script', label: 'real da equipe e qualidade da abordagem' },
      { value: 'Percepção', label: 'de preço, valor, design e clareza' },
      { value: 'Prioridade', label: 'do que corrigir primeiro para vender melhor' },
    ],
  },
  formulario: {
    title: 'Vamos auditar sua *experiência comercial*.',
    description:
      'Preencha os dados para entendermos o canal, o foco da auditoria e onde faz mais sentido aplicar Cliente Oculto na sua operação.',
    formName: 'Diagnóstico Cliente Oculto',
    submitText: 'Diagnosticar meu atendimento',
    nota: 'Vamos avaliar seu atendimento, a força do concorrente e os pontos que merecem correção primeiro para proteger a conversão.',
    sucesso: 'Vamos analisar o cenário e entender onde faz mais sentido aplicar Cliente Oculto na sua operação.',
    selects: [
      {
        id: 'sector',
        label: 'Setor',
        options: [
          'Educação',
          'E-commerce',
          'Varejo',
          'Saúde / Clínica',
          'Serviços profissionais',
          'Indústria / B2B',
          'Outro',
        ],
      },
      {
        id: 'channel',
        label: 'Canal principal',
        options: [
          'WhatsApp',
          'Instagram / Direct',
          'Formulário do site',
          'Telefone',
          'Atendimento presencial',
          'Mais de um canal',
        ],
      },
      {
        id: 'focus',
        label: 'Foco da auditoria',
        options: ['Auditar meu atendimento', 'Analisar concorrentes', 'Comparar os dois'],
      },
      {
        id: 'volume',
        label: 'Volume de contatos',
        options: [
          'Até 50 contatos por mês',
          '50 a 200 contatos por mês',
          '200 a 500 contatos por mês',
          'Mais de 500 contatos por mês',
        ],
      },
    ],
  },
  faqTexto: {
    badge: 'Dúvidas frequentes',
    title: '*Dúvidas* frequentes.',
    description:
      'Antes de revisar script, preço ou campanha, vale entender a experiência real que o cliente vive hoje.',
  },
  faq: [
    {
      question: 'Vocês analisam só o meu atendimento ou também os concorrentes?',
      answer:
        'Os dois, se fizer sentido para o cenário. Podemos avaliar apenas o seu time, apenas os concorrentes ou comparar os dois lados na mesma leitura.',
    },
    {
      question: 'Esse serviço serve só para varejo?',
      answer:
        'Não. Funciona para varejo, educação, saúde, serviços, e-commerce e operações comerciais em geral. O ponto é entender como a empresa atende e como o cliente percebe essa experiência.',
    },
    {
      question: 'O que vocês avaliam no concorrente?',
      answer:
        'Preço, apresentação da oferta, design, clareza da informação, prova social, jornada de contato, qualidade da resposta, tempo de retorno e percepção geral da experiência.',
    },
    {
      question: 'Recebo só um relatório ou também orientação prática?',
      answer:
        'Você recebe os dois. O relatório mostra evidências e comparativos. A recomendação prática organiza o que deve ser corrigido primeiro em script, tempo de resposta, processo, design ou posicionamento.',
    },
    {
      question: 'Isso pode virar treinamento para o time?',
      answer:
        'Sim. Essa é uma das partes mais valiosas. O Cliente Oculto gera material real para desenvolver atendimento, comercial, recepção e liderança com base no que o cliente vive hoje.',
    },
  ],
};
