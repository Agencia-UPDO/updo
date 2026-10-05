import CaseTemplate from '@/novo/components/cases/case-template';
import { GraficoBarras } from '@/novo/components/cases/visuais-case';
import {
  BarChart3,
  DollarSign,
  FileText,
  Search,
  ShoppingCart,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

const CaseIndustria = () => (
  <CaseTemplate
    c={{
      voltar: { text: 'Voltar para cases', href: '/cases' },
      badge: 'Case · Indústria de Bens de Consumo',
      titulo: '1.527% de ROI e R$ 350k em vendas',
      subtitulo:
        'Como uma operação industrial validou mídia digital com R$ 350.000 em receita atribuída a partir de R$ 21.500 investidos.',
      metricas: [
        { icon: DollarSign, label: 'Retorno total', value: 'R$ 350k', sub: 'em receita gerada' },
        { icon: TrendingUp, label: 'ROI geral', value: '1.527%', sub: 'sobre o investimento total', destaque: true },
        { icon: ShoppingCart, label: 'Vendas Google Ads', value: '32', sub: 'ROI de 1.863% no canal' },
        { icon: Target, label: 'Vendas Meta Ads', value: '70', sub: 'ROI de 1.314% no canal' },
      ],
      problema:
        'Uma indústria de bens de consumo, com forte atuação no varejo tradicional, precisava validar se mídia digital poderia gerar vendas diretas com retorno mensurável. O desafio não era só vender: era mostrar para a diretoria quais canais geravam receita, com qual investimento e em que velocidade.',
      hipotese:
        'Com leitura de mercado, separação clara entre Google e Meta e acompanhamento semanal de ROI, seria possível comprovar o papel do digital sem depender de percepção ou métricas que não explicam receita.',
      estrategia: {
        title: 'Nossa metodologia em *4 etapas*',
        description: 'Pesquisa, canal, execução e leitura financeira.',
        passos: [
          {
            icon: Search,
            title: 'Pesquisa de mercado e desk research',
            description:
              'Mapeamos concorrentes, canais de venda, comportamento de compra e sazonalidade da categoria antes de definir mídia, mensagem e oferta.',
          },
          {
            icon: BarChart3,
            title: 'Seleção de canais por intenção',
            description:
              'Google Ads entrou para capturar demanda ativa. Meta Ads foi usado para ampliar alcance, testar criativos e gerar demanda em públicos com aderência ao produto.',
          },
          {
            icon: Zap,
            title: 'Otimização semanal de verba e criativos',
            description:
              'Acompanhamos investimento, retorno, ticket médio e vendas por canal para redistribuir verba e ajustar campanhas com base no que gerava receita.',
          },
          {
            icon: FileText,
            title: 'Relatórios para decisão da diretoria',
            description:
              'Organizamos os dados em uma leitura simples para gestão: quanto foi investido, quanto voltou, quais canais venderam e onde valia aumentar orçamento.',
          },
        ],
      },
      secoes: [
        {
          badge: 'Resultados visuais',
          title: 'A transformação *em números*',
          description: 'Investimento versus retorno por canal, lado a lado.',
          fundo: 'branco',
          conteudo: (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 md:col-span-6">
                <GraficoBarras
                  titulo="Investimento vs Retorno por Canal"
                  escalaUnica
                  series={[
                    { nome: 'Investimento', formato: 'moeda' },
                    { nome: 'Retorno', formato: 'moeda' },
                  ]}
                  grupos={[
                    { rotulo: 'Google Ads', valores: [8360, 164163] },
                    { rotulo: 'Meta Ads', valores: [13140, 185837] },
                  ]}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <GraficoBarras
                  titulo="ROI e Ticket Médio por Canal"
                  series={[
                    { nome: 'ROI', formato: 'percentual' },
                    { nome: 'Ticket Médio', formato: 'moeda' },
                  ]}
                  grupos={[
                    { rotulo: 'Google Ads', valores: [1863, 5130] },
                    { rotulo: 'Meta Ads', valores: [1314, 2655] },
                  ]}
                />
              </div>
            </div>
          ),
        },
      ],
      destaques: [
        {
          titulo: 'Google Ads: ROI de 1.863%.',
          texto:
            'Com investimento de R$ 8.360, o canal gerou R$ 164.163 em retorno, com 32 vendas e ticket médio de R$ 5.130.',
        },
        {
          titulo: 'Meta Ads: ROI de 1.314%.',
          texto: 'Com R$ 13.140 investidos, o canal gerou R$ 185.837, 70 vendas com ticket médio de R$ 2.655.',
        },
      ],
      aprendizados: [
        {
          icon: Search,
          text: 'Campanha industrial precisa começar por mercado, canal e margem. Sem essa leitura, mídia vira teste caro.',
        },
        {
          icon: BarChart3,
          text: 'Google e Meta funcionaram melhor quando cada canal recebeu uma função clara no funil, em vez de disputar o mesmo papel.',
        },
        {
          icon: FileText,
          text: 'Para diretoria comprar a estratégia, o relatório precisa mostrar receita, investimento, ROI e próximos ajustes sem ruído.',
        },
      ],
      chamada: {
        title: 'Sua indústria pode *medir melhor* o retorno do digital.',
        description:
          'Vamos avaliar onde mídia, oferta e leitura comercial podem gerar receita mensurável para a sua operação.',
        secundario: { text: 'Ver outros cases', href: '/cases' },
      },
    }}
  />
);

export default CaseIndustria;
