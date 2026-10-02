import { Activity, Compass, Search, TrendingUp, Zap } from 'lucide-react';

export const clientes = [
  { name: 'PUCPR', src: '/Clientes/Logo PUCPR.png' },
  { name: 'Unimed', src: '/Clientes/Logo Unimed.png' },
  { name: 'Ford', src: '/Clientes/Logo Ford.png' },
  { name: 'GMAC', src: '/Clientes/Logo GMAC.png' },
  { name: 'Andritz', src: '/Clientes/Logo Andritz.png' },
  { name: 'CNA', src: '/Clientes/Logo CNA.png' },
  { name: 'Ademicon', src: '/Clientes/Logo Ademicon.png' },
  { name: 'Polibrinq', src: '/Clientes/Logo Polibrinq.png' },
  { name: 'Faculdade Ibrate', src: '/Clientes/Logo Faculdade Ibrate.png' },
  { name: 'UniCV', src: '/Clientes/Logo UniCV.png' },
  { name: 'Nextcard', src: '/Clientes/Logo Nextcard.png' },
  { name: 'Teloos', src: '/Clientes/Logo Teloos.png' },
  { name: 'Veta Pós Graduação', src: '/Clientes/Logo Veta Pós Graduação.png' },
  { name: 'Instituto Equilibra', src: '/Clientes/Logo Instituto Equilibra.png' },
  { name: 'Madeiras Lane', src: '/Clientes/Logo Madeiras Lane.png' },
  { name: 'Trevisan Comunicação Visual', src: '/Clientes/Logo Trevisan Comunicação Visual.png' },
];

export const servicosHome = [
  {
    tag: 'Atração',
    title: 'Geração de demanda',
    description:
      'Campanhas no Google, Meta, LinkedIn e TikTok montadas a partir do seu cliente ideal e da jornada de compra.',
    href: '/servicos/geracao-de-demanda',
  },
  {
    tag: 'Conversão',
    title: 'Funil, automação e CRM',
    description:
      'Landing pages, RD Station, WhatsApp e CRM organizados por etapa para o lead ser atendido no tempo certo.',
    href: '/servicos/funil-e-automacao',
  },
  {
    tag: 'Vendas',
    title: 'Inside Sales',
    description:
      'Playbook, roteiro, cadência de follow-up e leitura semanal de meta para o time vender do mesmo jeito.',
    href: '/servicos/inside-sales',
  },
  {
    tag: 'Experiência',
    title: 'UX, landing pages e CRO',
    description:
      'Páginas desenhadas para converter, com neurodesign, testes A/B e ajustes guiados por hipótese.',
    href: '/servicos/ux-cro',
  },
  {
    tag: 'Inteligência',
    title: 'Dados, BI e Radar UPDO',
    description:
      'Dashboards que cruzam mídia, funil e venda para mostrar o retorno real de cada canal e produto.',
    href: '/servicos/inteligencia-de-dados',
  },
  {
    tag: 'IA aplicada',
    title: 'IA para vendas e atendimento',
    description:
      'Agentes que qualificam, respondem e fazem follow-up 24 horas por dia, ligados ao seu CRM e ao seu time.',
    href: '/servicos/ia-para-vendas',
  },
  {
    tag: 'Aquisição em IA',
    title: 'ChatGPT Ads',
    description:
      'Anúncios e presença orgânica nas conversas em que o seu cliente já pesquisa e compara opções.',
    href: '/servicos/chatgpt-ads',
  },
  {
    tag: 'Auditoria',
    title: 'Cliente oculto',
    description:
      'Contatos reais com o seu comercial e com concorrentes para mostrar onde atendimento e proposta perdem vendas.',
    href: '/servicos/cliente-oculto',
  },
];

export const etapasMetodo = [
  {
    step: '01',
    title: 'Diagnóstico',
    icon: Search,
    description: 'Matriz CSD, leitura de funil e auditoria de canais, processos e dados.',
  },
  {
    step: '02',
    title: 'Estratégia',
    icon: Compass,
    description: 'Cliente ideal, posicionamento, oferta, mensagem e plano de canais.',
  },
  {
    step: '03',
    title: 'Execução',
    icon: Zap,
    description: 'Mídia paga, landing pages, automação, CRM e processo comercial rodando.',
  },
  {
    step: '04',
    title: 'Inteligência',
    icon: Activity,
    description: 'Dashboards, BI e Radar UPDO para ler a operação de ponta a ponta.',
  },
  {
    step: '05',
    title: 'Otimização',
    icon: TrendingUp,
    description: 'Testes e ajustes semanais a partir dos números, com ganho que se acumula.',
  },
];

export const casesHome = [
  {
    sector: 'Educação',
    client: 'Instituição de ensino',
    title: 'Mais leads, mais processo, mais matrícula.',
    metrics: [
      { value: '+211%', label: 'geração de leads' },
      { value: '+166%', label: 'conversão comercial' },
      { value: '450 → 1.400', label: 'leads por mês' },
    ],
    href: '/cases/educacao',
  },
  {
    sector: 'E-commerce',
    client: 'Moda infantil',
    title: 'De R$ 3 mil para R$ 211 mil de faturamento mensal.',
    metrics: [
      { value: '+6.900%', label: 'vendas mensais' },
      { value: '4,7x', label: 'ROAS geral' },
      { value: '4,45%', label: 'taxa de conversão' },
    ],
    href: '/cases/e-commerce',
  },
  {
    sector: 'Varejo',
    client: 'Varejista híbrido B2B e B2C',
    title: 'Recorde de faturamento depois de 20 anos de operação.',
    metrics: [
      { value: '+87%', label: 'faturamento de 2022 a 2024' },
      { value: '+1.400%', label: 'tráfego mensal' },
      { value: '+35%', label: 'ticket médio' },
    ],
    href: '/cases/varejo',
  },
  {
    sector: 'Indústria',
    client: 'Bens de consumo',
    title: '1.527% de ROI com R$ 21,5 mil em mídia.',
    metrics: [
      { value: '1.527%', label: 'ROI total' },
      { value: 'R$ 350 mil', label: 'em receita gerada' },
      { value: '102', label: 'vendas atribuídas' },
    ],
    href: '/cases/industria',
  },
];

export const depoimentosVideo = [
  { name: 'Elizabete De Marchi', role: 'Fundadora, Elizabete De Marchi', videoId: 'H0Dm1oPwbF0' },
  { name: 'Hamilton Flores', role: 'Sócio, Nextcard', videoId: 'XxNoPscpid4' },
  { name: 'Dra. Naudimar', role: 'Diretora, instituição de ensino superior', videoId: '2cE9ycBnLVg' },
];

export const depoimentosTexto = [
  {
    name: 'Samuel Henrique',
    role: 'CEO, Trevisan Comunicação Visual',
    quote:
      'A UPDO transformou nosso marketing. Antes, estávamos perdidos. Agora, temos um fluxo constante de leads e sabemos exatamente de onde eles vêm. Recomendo!',
  },
  {
    name: 'Jordânia',
    role: 'Head de Marketing, Polibrinq',
    quote:
      'O diferencial é a parceria. Eles realmente se tornaram nosso braço de marketing. A equipe é proativa e sempre traz novas ideias para acelerar nosso crescimento.',
  },
  {
    name: 'Lorena',
    role: 'Sócia, Vainet Tecnologia',
    quote:
      'Experiência muito boa com a Agência UPDO. Após o desenvolvimento do atual site da Vainet Tecnologia nossos leads aumentaram significativamente. Super indico.',
  },
  {
    name: 'Hamilton Flores',
    role: 'Sócio, Nextcard e Teloos',
    quote:
      'Você cliente como eu, que não se envolvia com marketing digital, te garanto: existe o antes e o depois com a UPDO! Parabéns Rodrigo. Super indico!',
  },
  {
    name: 'Rafael Kirsten Borba',
    role: 'Consultor sênior de vendas',
    quote:
      'Agência de marketing que te conecta com o mercado de fato, tem visão e entendimento de números comerciais. Trabalho de qualidade!',
  },
  {
    name: 'Luiz Otavio',
    role: 'Lucca Cafés Espaciais',
    quote: 'Serviço altamente profissional de alto nível e eficiente. Realmente faz a diferença!',
  },
];

export const faqHome = [
  {
    question: 'O que é o método da UPDO e como ele gera crescimento previsível?',
    answer:
      'O método organiza o crescimento em cinco etapas conectadas: diagnóstico, estratégia, execução, inteligência e otimização. Estruturamos mídia paga, funis de conversão e automações comerciais medindo o que chega ao fechamento. Assim o marketing responde por receita, e CAC e LTV são otimizados continuamente.',
  },
  {
    question: 'Como a inteligência artificial entra no marketing e nas vendas?',
    answer:
      'Usamos agentes de IA para qualificar e atender leads em tempo real. Eles conversam com quem chega pelos anúncios via WhatsApp ou formulário, entendem a intenção de compra e agendam reuniões com os vendedores. O tempo de resposta cai e a taxa de agendamento sobe sem aumentar o time comercial.',
  },
  {
    question: 'O que é o Radar UPDO e qual a diferença para um CRM?',
    answer:
      'O Radar UPDO é o nosso BI próprio. Ele junta dados de Google Ads, Meta Ads, CRM e ERP de vendas em um painel executivo atualizado. O CRM mostra contatos e etapas; o Radar liga o investimento em marketing ao faturamento por canal e por produto, para a decisão ser tomada pelo retorno real.',
  },
  {
    question: 'Quais setores e modelos de negócio a UPDO atende?',
    answer:
      'Educação, e-commerce, varejo, indústria, B2B e empresas de serviços. Em todos eles o trabalho começa pelo diagnóstico de cliente ideal, canal e processo comercial, antes de qualquer anúncio.',
  },
  {
    question: 'Como funciona o diagnóstico estratégico gratuito?',
    answer:
      'É uma conversa de cerca de 45 minutos com nossos especialistas. Analisamos o marketing e o time de vendas, mapeamos onde o funil perde oportunidades e entregamos um plano de ações práticas. Não há compromisso de contratação.',
  },
];

export const selosParceiros = [
  { src: '/Imagens/logo-rd-gold-UPDO-2025.png', alt: 'Parceiro Gold RD Station' },
  { src: '/Imagens/Google-Search-UPDO.png', alt: 'Google Ads Search Certified' },
  { src: '/Imagens/meta-ads-partner.webp', alt: 'Meta Business Partner' },
  { src: '/Imagens/Parceiro-oficial-Amazon-ADS-UPDO.png', alt: 'Parceiro oficial Amazon Ads' },
  { src: '/Imagens/Badge dark Kommo.svg', alt: 'Parceiro oficial Kommo' },
];
