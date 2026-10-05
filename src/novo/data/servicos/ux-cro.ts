import {
  BarChart3,
  Eye,
  FlaskConical,
  FormInput,
  Layers,
  MousePointerClick,
  ScanSearch,
  Target,
  TrendingUp,
} from 'lucide-react';
import type { ServicoConteudo } from '@/novo/components/servicos/servico-template';

export const uxCro: ServicoConteudo = {
  slug: 'ux-cro',
  nome: 'UX e CRO',
  hero: {
    title: 'UX e CRO para *converter melhor* o tráfego que você já paga',
    description:
      'Diagnosticamos onde o usuário trava, transformamos comportamento em hipótese e testamos mudanças para aumentar conversão com dado, não com opinião.',
    bullets: [
      'Auditoria de UX, heatmap e sessão gravada',
      'Testes A/B com hipótese e métrica definidas',
      'Landing pages e formulários otimizados para conversão',
    ],
    ctaText: 'Otimizar minha conversão',
    ctaSecundario: { text: 'Ver diagnóstico', href: '/diagnostico' },
  },
  resultado: {
    title: 'Mais conversão sem aumentar a verba de mídia',
    description:
      'Landing page com tráfego pago constante e formulário pouco acionado. Após análise de comportamento, nova hierarquia e teste de variante, a página converteu mais usando a mesma verba.',
    metrics: [
      { value: '+78%', label: 'uplift de conversão' },
      { value: '-31%', label: 'custo por lead' },
      { value: '4,1%', label: 'taxa final' },
      { value: '14d', label: 'ciclo de teste' },
    ],
  },
  visual: 'teste-ab',
  problemas: {
    title: 'Onde a página *perde conversão* sem aparecer no relatório',
    description:
      'Se a campanha traz visita e o formulário não recebe contato, o problema costuma estar na página, não no anúncio.',
    items: [
      {
        icon: MousePointerClick,
        title: 'Tráfego pago chega e abandona',
        description:
          'A campanha entrega clique, mas a página não sustenta a intenção. O CAC sobe porque a verba compra visita, não conversão.',
      },
      {
        icon: Eye,
        title: 'Mudança de página vira opinião',
        description:
          'Botão, formulário, bloco e headline mudam por gosto pessoal. Sem dado de comportamento, ninguém sabe se a alteração melhorou ou piorou.',
      },
      {
        icon: FormInput,
        title: 'Formulário cria atrito invisível',
        description:
          'Campo demais, pergunta cedo demais ou promessa pouco clara. O usuário até queria avançar, mas a página pediu esforço antes de entregar confiança.',
      },
    ],
  },
  plano: {
    title: 'Como *otimizamos* a sua página',
    description: 'Três etapas em ciclo. Resultados consistentes costumam aparecer entre 30 e 60 dias.',
    passos: [
      {
        title: 'Auditoria e comportamento',
        description:
          'Analisamos a página, o heatmap e sessões gravadas para encontrar onde o usuário trava ou desiste.',
      },
      {
        title: 'Hipótese e variante',
        description:
          'Cada problema vira uma hipótese com métrica definida, e montamos a nova versão de copy, layout ou formulário.',
      },
      {
        title: 'Teste e decisão',
        description:
          'Rodamos o teste A/B, lemos o resultado e publicamos a versão que converte mais. O aprendizado vira o próximo teste.',
      },
    ],
  },
  mudanca: {
    title: 'O que muda quando a página é *otimizada com método*',
    sem: [
      'A verba de mídia compra visita que não converte',
      'A página muda pelo gosto de quem está na reunião',
      'Ninguém sabe em que ponto o usuário desiste',
      'Redesign grande, caro e difícil de medir',
    ],
    com: [
      'Mais conversão com o mesmo tráfego e a mesma verba',
      'Cada mudança nasce de dado de comportamento',
      'Heatmap e sessões mostram onde a página trava',
      'Ajustes menores e testados, com ganho que se acumula',
    ],
  },
  entregas: {
    ctaText: 'Melhorar minha página',
    title: 'O que *analisamos* antes de mexer na página',
    description:
      'A entrega conecta análise de comportamento, hipótese, design, copy, formulário e teste para cada mudança ter motivo e medição.',
    items: [
      {
        icon: ScanSearch,
        title: 'Auditoria de UX e Matriz CSD',
        description:
          'Análise de hierarquia, clareza, fricção, responsivo e Matriz CSD para separar certeza, suposição e dúvida antes do teste.',
      },
      {
        icon: Eye,
        title: 'Heatmap e sessão gravada',
        description:
          'Leitura de clique, scroll, atenção e abandono para transformar comportamento real em hipótese de melhoria.',
      },
      {
        icon: FlaskConical,
        title: 'Testes A/B estruturados',
        description:
          'Hipótese, variante, amostra, métrica e decisão documentadas para evitar mudança baseada em achismo.',
      },
      {
        icon: Layers,
        title: 'Landing pages de conversão',
        description:
          'Copy, layout, prova, CTA e formulário reorganizados para aumentar ação sem depender de mais tráfego.',
      },
      {
        icon: FormInput,
        title: 'Otimização de formulário',
        description:
          'Campos, ordem, microcopy, validação e tamanho ajustados para reduzir abandono na etapa mais sensível.',
      },
      {
        icon: BarChart3,
        title: 'Relatório de aprendizado',
        description:
          'Uplift, queda, hipótese validada e próximos testes para criar uma rotina contínua de melhoria.',
      },
    ],
  },
  pilares: {
    badge: 'Método CRO',
    title: 'Os *quatro pilares* da otimização de conversão',
    description:
      'Diagnóstico, hipótese, experimento e iteração. Sem esse ciclo, redesign vira aposta bonita e difícil de medir.',
    items: [
      {
        icon: ScanSearch,
        label: 'Diagnóstico',
        description:
          'A página é lida por intenção, fricção e Matriz CSD antes de qualquer mudança.',
        resultado: 'Problema claro',
      },
      {
        icon: Target,
        label: 'Hipótese',
        description:
          'Cada ajuste nasce de evidência, não de preferência estética ou reunião longa.',
        resultado: 'Teste certo',
      },
      {
        icon: FlaskConical,
        label: 'Experimento',
        description: 'Controle e variante com métrica definida antes de publicar a mudança.',
        resultado: 'Decisão limpa',
      },
      {
        icon: TrendingUp,
        label: 'Iteração',
        description:
          'O resultado vira o próximo ciclo para conversão evoluir sem redesenho eterno.',
        resultado: 'Ganho contínuo',
      },
    ],
  },
  formulario: {
    title: 'Vamos entender onde sua página *perde conversão*',
    description:
      'Preencha para analisarmos tráfego, comportamento, taxa atual e oportunidade de melhoria antes da reunião.',
    formName: 'Diagnóstico UX e CRO',
    submitText: 'Diagnosticar minha página',
    nota: 'Com base nas suas respostas, preparamos um diagnóstico mais preciso da experiência e conversão.',
    selects: [
      {
        id: 'pageType',
        label: 'Tipo de página',
        options: [
          'Landing page de serviço',
          'E-commerce / produto',
          'Página institucional',
          'Formulário de captação',
          'Checkout / cadastro',
          'Outro',
        ],
      },
      {
        id: 'traffic',
        label: 'Tráfego mensal',
        options: [
          'Menos de 1 mil sessões/mês',
          '1 mil a 10 mil sessões/mês',
          '10 mil a 50 mil sessões/mês',
          'Mais de 50 mil sessões/mês',
        ],
      },
      {
        id: 'currentRate',
        label: 'Taxa atual',
        options: ['Não sei minha taxa', 'Abaixo de 1%', '1% a 3%', '3% a 6%', 'Acima de 6%'],
      },
      {
        id: 'mainPain',
        label: 'Principal dor',
        options: [
          'Tráfego pago não converte',
          'Formulário com abandono',
          'Página sem clareza',
          'Sem rotina de teste A/B',
          'Não sei onde o usuário trava',
        ],
      },
    ],
  },
  caso: {
    badge: 'Resultado real',
    title: 'Mais conversão sem aumentar a verba de mídia.',
    description:
      'Landing page com tráfego pago constante e formulário pouco acionado. Após análise de comportamento, nova hierarquia e teste de variante, a página converteu mais usando a mesma verba.',
    ctaText: 'Quero esse resultado',
    metrics: [
      { value: '+78%', label: 'uplift de conversão' },
      { value: '-31%', label: 'custo por lead' },
      { value: '4,1%', label: 'taxa final' },
      { value: '14d', label: 'ciclo de teste' },
    ],
  },
  faqTexto: {
    badge: 'Dúvidas frequentes',
    title: '*Dúvidas* sobre UX, CRO e otimização de conversão.',
    description:
      'Antes de comprar mais tráfego, vale entender quanto do tráfego atual está sendo perdido por fricção na página.',
    citacao:
      'Conversão não melhora só deixando a página mais bonita. Melhora quando a próxima ação fica óbvia.',
  },
  faq: [
    {
      question: 'O que é CRO?',
      answer:
        'CRO é otimização de taxa de conversão. Na prática, é melhorar página, formulário, CTA e fluxo para mais visitantes realizarem a ação desejada sem aumentar a verba de mídia.',
    },
    {
      question: 'Preciso ter muito tráfego para testar?',
      answer:
        'Para teste A/B com leitura estatística, volume ajuda. Quando o tráfego é menor, começamos por auditoria, heatmap, sessão gravada e melhorias com maior evidência qualitativa.',
    },
    {
      question: 'Vocês mexem em design ou só em texto?',
      answer:
        'Nos dois. Conversão depende de mensagem, hierarquia visual, prova, velocidade, formulário e clareza da oferta. O diagnóstico define o que tem maior impacto primeiro.',
    },
    {
      question: 'Funciona para landing page de serviço?',
      answer:
        'Sim. CRO não é só e-commerce. Funciona para página de serviço, diagnóstico, contato, inscrição, checkout, onboarding e qualquer fluxo com conversão mensurável.',
    },
    {
      question: 'Quanto tempo para ver resultado?',
      answer:
        'Os primeiros ajustes podem entrar rápido, mas resultados consistentes costumam aparecer entre 30 e 60 dias, dependendo do tráfego e da complexidade da página.',
    },
    {
      question: 'Como sei que a melhora veio do teste?',
      answer:
        'A estrutura separa controle, variante, métrica e período de análise. Assim a decisão fica baseada em comportamento comparável, não em sensação depois da mudança.',
    },
  ],
};
