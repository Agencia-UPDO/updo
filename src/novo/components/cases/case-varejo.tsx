import CaseTemplate from '@/novo/components/cases/case-template';
import { GraficoBarras, GraficoMeta } from '@/novo/components/cases/visuais-case';
import { BarChart3, Database, Handshake, ShoppingBag, Store, Target, TrendingUp, Users } from 'lucide-react';

const CaseVarejo = () => (
  <CaseTemplate
    c={{
      voltar: { text: 'Voltar para cases', href: '/cases' },
      badge: 'Case · Varejista Híbrido B2B/B2C',
      titulo: '+122% de faturamento e +1.400% de tráfego',
      subtitulo:
        'Como um varejista paulistano com mais de 20 anos de mercado, saindo do histórico de tetos de faturamento para recordes consecutivos ano após ano.',
      metricas: [
        { icon: TrendingUp, label: 'Crescimento no faturamento', value: '+122%', sub: 'de 2022 a 2025', destaque: true },
        { icon: Users, label: 'Crescimento de tráfego', value: '+1.400%', sub: '800 → 12.000 visitas/mês' },
        { icon: ShoppingBag, label: 'Leads gerados', value: '+1.000', sub: 'por mês' },
        { icon: Store, label: 'Ticket médio', value: '+35%', sub: 'e maior fluxo na loja física' },
      ],
      problema:
        'Um grande varejista de São Paulo com mais de 20 anos de mercado chegou com um objetivo claro: aumentar as vendas. Apesar da experiência no setor, a empresa nunca havia alcançado o patamar de faturamento desejado. Experiências anteriores com fornecedores não deram previsibilidade de retorno, e o CEO buscava parceria que comprovasse ROI de forma clara e objetiva. O diagnóstico revelou o gargalo: o e-commerce anterior tinha problemas técnicos e de usabilidade que limitavam tráfego e geração de negócios.',
      hipotese:
        'Organizando catálogo, CRM e leitura de dados antes de escalar planejamento baseado em dados e sazonalidade, conseguiríamos superar o faturamento histórico com mais controle sobre metas, campanhas e atendimento comercial.',
      estrategia: {
        title: 'Estratégia, dados e *execução*',
        description: 'Três frentes que conectaram catálogo, mídia e comercial.',
        passos: [
          {
            icon: Database,
            title: 'A Fundação: Catálogo e CRM',
            description:
              'Substituímos o e-commerce problemático por um catálogo focado em usabilidade, cotação e integração com RD Station e CRM. O time comercial passou a acompanhar pedidos e conversas de WhatsApp em um fluxo único.',
          },
          {
            icon: BarChart3,
            title: 'A Inteligência: Planejamento Robusto',
            description:
              'Com a casa em ordem, aplicamos nossa metodologia de análise de dados. Planejamento robusto ano a ano e regressão linear para mapear sazonalidade, definir metas ambiciosas e ajustar rotas com precisão.',
          },
          {
            icon: Target,
            title: 'Aceleração e Apoio Comercial',
            description:
              'Estruturamos campanhas de Google e Meta Ads segmentadas por categorias e promoções. Criamos materiais de apoio (PDFs, lâminas) alinhados às campanhas para fortalecer o time de vendas em todos os canais.',
          },
        ],
      },
      secoes: [
        {
          badge: 'Resultados visuais',
          title: 'A transformação *em números*',
          description: 'Crescimento anual e superação de metas em 2025.',
          fundo: 'branco',
          conteudo: (
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 md:col-span-5">
                <GraficoBarras
                  titulo="Evolução do Faturamento Anual"
                  series={[{ nome: 'Faturamento', formato: 'moeda' }]}
                  grupos={[
                    { rotulo: '2022', valores: [3366000] },
                    { rotulo: '2023', valores: [3459000] },
                    { rotulo: '2024', valores: [6292000] },
                    { rotulo: '2025', valores: [7465000] },
                  ]}
                />
              </div>
              <div className="col-span-12 md:col-span-7">
                <GraficoMeta
                  titulo="Previsto vs. Realizado 2025"
                  meses={[
                    { mes: 'Jan', meta: 591000, realizado: 610000 },
                    { mes: 'Fev', meta: 554000, realizado: 537000 },
                    { mes: 'Mar', meta: 565000, realizado: 581000 },
                    { mes: 'Abr', meta: 593000, realizado: 653000 },
                    { mes: 'Mai', meta: 594000, realizado: 703000 },
                    { mes: 'Jun', meta: 597000, realizado: 716000 },
                  ]}
                />
              </div>
            </div>
          ),
        },
      ],
      destaques: [
        {
          titulo: '+122% de faturamento em 3 anos.',
          texto:
            'De R$ 3,4M em 2022 para R$ 7,46M em 2025, quebrando o teto histórico que a empresa nunca havia ultrapassado ao longo de mais de duas décadas.',
        },
        {
          titulo: '5 de 6 meses acima da meta em 2025.',
          texto:
            'Com pico de 120% no mês de junho, consolidando a previsibilidade de receita como resultado do planejamento baseado em dados.',
        },
      ],
      parceria: {
        title: 'Uma parceria iniciada em 2022, com *recordes* ano após ano.',
        description:
          'O trabalho começou com correções de estrutura e virou rotina de crescimento. Com acompanhamento semanal, o cliente passou a revisar metas, campanhas e atendimento com base nos números de cada ciclo.',
        anos: ['2022', '2023', '2024', '2025'],
      },
      aprendizados: [
        {
          icon: Database,
          text: 'Antes de aumentar mídia, o catálogo e o fluxo comercial precisavam funcionar. Sem isso, tráfego novo só aumentaria o desperdício.',
        },
        {
          icon: BarChart3,
          text: 'Planejamento com regressão linear e sazonalidade transformou metas genéricas em alvos precisos. Quebrar recordes mês a mês tornou-se o ritual da equipe.',
        },
        {
          icon: Handshake,
          text: 'Parceria com reuniões semanais de acompanhamento permite ajustes rápidos e crescimento consistente. Por isso esse cliente segue conosco desde 2022.',
        },
      ],
      chamada: {
        title: 'Seu varejo pode *crescer* com mais leitura comercial.',
        description:
          'Vamos entender onde catálogo, mídia e atendimento podem melhorar receita sem depender apenas de mais tráfego.',
        secundario: { text: 'Ver outros cases', href: '/cases' },
      },
    }}
  />
);

export default CaseVarejo;
