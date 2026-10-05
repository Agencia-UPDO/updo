import CaseTemplate from '@/novo/components/cases/case-template';
import { FunilAnimado, GraficoBarras } from '@/novo/components/cases/visuais-case';
import {
  BarChart3,
  Crosshair,
  DollarSign,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

const CaseEcommerce = () => (
  <CaseTemplate
    c={{
      voltar: { text: 'Voltar para cases', href: '/cases' },
      badge: 'Case · E-commerce de Moda Infantil',
      titulo: '*+6.900%* em vendas em 60 dias',
      subtitulo:
        'Como estruturamos o marketing de um e-commerce de moda infantil para sair de R$3k para mais de R$211k de faturamento mensal, com ROAS de 4.7x.',
      metricas: [
        { icon: TrendingUp, label: 'Crescimento mensal', value: '+6.900%', sub: 'de R$3k para +R$211k/mês' },
        { icon: Target, label: 'ROAS geral', value: '4.7x', sub: 'Retorno sobre investimento', destaque: true },
        { icon: DollarSign, label: 'CAC vs meta', value: '−29%', sub: 'Abaixo da meta estipulada' },
        { icon: Zap, label: 'Google Ads', value: '−50%', sub: 'CAC menor que os demais canais' },
      ],
      problema:
        'Um e-commerce B2C recém-lançado por uma indústria B2B. Baixo volume de vendas, CAC que inviabilizava o crescimento e ceticismo interno sobre a viabilidade do investimento em marketing digital.',
      hipotese:
        'Aplicando uma metodologia focada em análise de persona para otimizar o funil de conversão, conseguiríamos ROAS superior a 4x e taxa de conversão 200% acima da média do mercado em 60 dias.',
      estrategia: {
        title: 'Como *chegamos lá*',
        description: 'Três pilares estruturais que transformaram os resultados.',
        passos: [
          {
            icon: Search,
            title: 'Diagnóstico e planejamento',
            description:
              'Aplicamos a matriz CSD para organizar hipóteses, revisar persona, oferta e objeções de compra. A partir disso, definimos CAC-alvo, meta de ROAS e prioridades de teste.',
          },
          {
            icon: BarChart3,
            title: 'Inteligência de dados',
            description:
              'Analisamos comportamento de navegação, etapas do checkout e custo por venda para entender onde aumentar verba e onde reduzir desperdício.',
          },
          {
            icon: RefreshCw,
            title: 'Execução e remarketing',
            description:
              'Organizamos campanhas por intenção, criativos e públicos. O remarketing entrou para recuperar carrinhos e trazer de volta quem já havia demonstrado interesse.',
          },
        ],
      },
      secoes: [
        {
          badge: 'Funil de Conversão',
          title: 'O funil de compra *em números*',
          description: 'Da primeira impressão até a venda, cada etapa medida e otimizada.',
          conteudo: (
            <FunilAnimado
              etapas={[
                { etapa: 'Impressões', valor: '6.333.690', custo: 'R$7,45', custoRotulo: 'CPM', taxa: '0,82%', taxaRotulo: 'CTR', largura: 100 },
                { etapa: 'Cliques', valor: '51.679', custo: 'R$0,91', custoRotulo: 'CPC', taxa: '78,5%', taxaRotulo: 'visualizaram', largura: 70 },
                { etapa: 'Visualizações', valor: '40.567', custo: 'R$1,16', custoRotulo: 'CPV', taxa: '39,7%', taxaRotulo: 'add to cart', largura: 55 },
                { etapa: 'Carrinho', valor: '20.536', custo: 'R$2,30', custoRotulo: 'Cost', taxa: '11,8%', taxaRotulo: 'checkout', largura: 40 },
                { etapa: 'Checkouts', valor: '2.420', custo: 'R$19,49', custoRotulo: 'Cost', taxa: '74,5%', taxaRotulo: 'vendas', largura: 25 },
                { etapa: 'Vendas', valor: '1.803', custo: 'R$26,16', custoRotulo: 'Custo/venda', taxa: '4,45%', taxaRotulo: 'conv. geral', largura: 14 },
              ]}
            />
          ),
        },
        {
          badge: 'Performance por canal',
          title: 'Google vs Meta: *eficiência* comparada',
          description: 'Canais diferentes, papéis diferentes no funil.',
          conteudo: (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 md:col-span-6">
                <GraficoBarras
                  titulo="Investimento vs Faturamento"
                  series={[
                    { nome: 'Investimento', formato: 'moeda' },
                    { nome: 'Faturamento', formato: 'moeda' },
                  ]}
                  grupos={[
                    { rotulo: 'Google Ads', valores: [7499, 59530] },
                    { rotulo: 'Meta Ads', valores: [39671, 161754] },
                  ]}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <GraficoBarras
                  titulo="CAC e ROAS por canal"
                  series={[
                    { nome: 'CAC (R$)', formato: 'moeda' },
                    { nome: 'ROAS (x)', formato: 'multiplo' },
                  ]}
                  grupos={[
                    { rotulo: 'Google Ads', valores: [15.05, 7.94] },
                    { rotulo: 'Meta Ads', valores: [30.4, 4.08] },
                  ]}
                />
              </div>
            </div>
          ),
        },
      ],
      destaques: [
        {
          titulo: 'Taxa de conversão de 4,45%.',
          texto:
            'A média do e-commerce brasileiro é de 1% a 2%. Esse resultado posiciona a loja entre as de maior performance do país.',
        },
        {
          titulo: 'ROAS de 4.7x.',
          texto:
            'O mercado busca um ROAS saudável de 3x. Atingir quase 5x indica uma operação com margem para aumentar investimento sem perder eficiência.',
        },
      ],
      aprendizados: [
        {
          icon: Crosshair,
          text: 'A segmentação por intenção e objeção de compra foi decisiva para elevar a conversão acima da média do e-commerce brasileiro.',
        },
        {
          icon: TrendingUp,
          text: 'Google Ads foi o canal mais eficiente (CAC −50%), capturando demanda de alta intenção no fundo do funil.',
        },
        {
          icon: RefreshCw,
          text: 'Remarketing estruturado foi essencial para maximizar a conversão de usuários captados via Meta Ads.',
        },
      ],
      chamada: {
        title: 'Seu e-commerce pode *vender mais* sem perder margem.',
        description: 'Vamos entender o seu negócio antes de propor qualquer coisa.',
        secundario: { text: 'Ver outros cases', href: '/cases' },
      },
    }}
  />
);

export default CaseEcommerce;
