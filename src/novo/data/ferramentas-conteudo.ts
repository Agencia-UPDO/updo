// Texto explicativo de cada ferramenta (aparece embaixo dela, recolhido) e as perguntas frequentes,
// que também viram dados estruturados (FAQPage) para o Google e as IAs.

export type Bloco = { titulo: string; paragrafos: string[]; formulas?: string[] };
export type Pergunta = { pergunta: string; resposta: string };
export type ConteudoFerramenta = { titulo: string; blocos: Bloco[]; perguntas: Pergunta[] };

export const conteudoCac: ConteudoFerramenta = {
  titulo: 'Entenda o CAC, o LTV e como a calculadora chega nos números',
  blocos: [
    {
      titulo: 'O que é CAC',
      paragrafos: [
        'CAC (custo de aquisição de cliente) é quanto você gasta para conquistar um cliente novo. Entra tudo o que é preciso para vender: mídia, agência, ferramentas e o time comercial. Se você investiu R$ 10.000 no mês e fechou 20 clientes novos, o seu CAC foi de R$ 500.',
      ],
      formulas: ['CAC = investimento em marketing e vendas ÷ clientes novos no período'],
    },
    {
      titulo: 'O que é LTV',
      paragrafos: [
        'LTV (lifetime value) é quanto um cliente deixa de margem durante todo o tempo em que compra de você. A calculadora usa a margem de contribuição, e não o faturamento: o que sobra de cada venda depois dos custos dela (imposto, taxa do cartão, comissão, produto). Assim o LTV mostra o dinheiro que de fato fica para pagar a aquisição.',
        'Na venda única, o LTV é a margem de uma venda. Na recompra, é a margem de cada compra vezes o número de compras na vida do cliente. Na assinatura, é a margem da mensalidade vezes o tempo médio que o cliente fica, que é 1 dividido pelo cancelamento mensal (churn): com 5% de churn ao mês, o cliente fica em média 20 meses.',
      ],
      formulas: ['Margem de contribuição = preço − custos variáveis da venda', 'LTV = margem por compra (ou por mês) × compras (ou meses) na vida do cliente'],
    },
    {
      titulo: 'Quanto você pode pagar por cliente',
      paragrafos: [
        'A relação saudável entre LTV e CAC é de 3 para 1 ou mais: o cliente devolve pelo menos três vezes o que custou. Por isso a calculadora mostra três cenários de CAC máximo: conservador (30% do LTV), moderado (40%) e agressivo (55%). Com a meta de clientes por mês, ela calcula quanto investir em cada cenário e, com a taxa de leads que viram venda, quanto cada lead pode custar.',
        'O limite (stop loss) é pagar o LTV inteiro por um cliente: a partir daí toda a margem vai para a aquisição e não sobra lucro.',
      ],
      formulas: ['CAC máximo = LTV × 30%, 40% ou 55%', 'Investimento por mês = clientes desejados × CAC máximo', 'Custo por lead ideal = CAC máximo × taxa de leads que viram venda'],
    },
    {
      titulo: 'Exemplo',
      paragrafos: [
        'Uma loja vende a R$ 290, com margem de R$ 165 por venda, e o cliente compra 10 vezes por ano durante 2 anos. O LTV é de R$ 165 × 20 = R$ 3.300. No cenário moderado, cada cliente pode custar até R$ 1.320. Para ter 20 clientes novos por mês, o investimento é de R$ 26.400 por mês. Se 8% dos leads viram venda, cada lead pode custar até R$ 105.',
      ],
    },
  ],
  perguntas: [
    {
      pergunta: 'Como calcular o CAC?',
      resposta: 'Some tudo o que você gastou para vender em um período (mídia, agência, ferramentas e time comercial) e divida pelo número de clientes novos do mesmo período. Ex.: R$ 10.000 ÷ 20 clientes = CAC de R$ 500.',
    },
    {
      pergunta: 'Como calcular o LTV?',
      resposta: 'Multiplique a margem de contribuição de cada compra (ou mensalidade) pelo número de compras (ou meses) que o cliente faz na vida. Na assinatura, o tempo de vida em meses é 1 dividido pelo churn mensal.',
    },
    {
      pergunta: 'Qual é a relação ideal entre LTV e CAC?',
      resposta: 'O mercado considera saudável um LTV de pelo menos 3 vezes o CAC (LTV:CAC de 3:1). Abaixo disso o cliente se paga, mas sobra pouco para o resto da operação. Muito acima, pode ser sinal de que dá para investir mais e crescer mais rápido.',
    },
    {
      pergunta: 'Por que usar a margem e não o faturamento no LTV?',
      resposta: 'Porque o faturamento inclui custos que não ficam com você, como imposto, taxa do cartão e o próprio produto. Calcular o CAC máximo sobre o faturamento faz parecer que dá para pagar mais por cliente do que dá de verdade.',
    },
    {
      pergunta: 'O que é payback do CAC?',
      resposta: 'É o tempo que o cliente leva para devolver, em margem, o que custou para trazê-lo. Payback longo exige caixa para crescer, porque o investimento sai hoje e volta aos poucos.',
    },
  ],
};

export const conteudoProjecao: ConteudoFerramenta = {
  titulo: 'Entenda a projeção de vendas e a sazonalidade',
  blocos: [
    {
      titulo: 'O que é sazonalidade',
      paragrafos: [
        'Sazonalidade é o quanto cada mês costuma vender acima ou abaixo da média do ano. Um índice de 1,20 em novembro quer dizer que novembro vende, em média, 20% acima de um mês normal; 0,85 em fevereiro quer dizer 15% abaixo. Conhecer esse padrão evita metas iguais para todos os meses e ajuda a planejar mídia, estoque e equipe.',
      ],
    },
    {
      titulo: 'Como a ferramenta calcula',
      paragrafos: [
        'Primeiro ela separa a tendência da sazonalidade com uma média móvel de 12 meses: a média dos últimos 12 meses tira o efeito dos meses fortes e fracos e mostra se o negócio está crescendo. Depois compara cada mês com essa tendência para achar o índice de sazonalidade, faz a média entre os anos e descarta os meses muito fora da curva.',
        'Para o ano atual, ela soma o que já foi vendido com o que falta, usando a tendência e a sazonalidade de cada mês que ainda não fechou. Para o próximo ano, projeta o total pela tendência e distribui a meta mês a mês pelo índice de sazonalidade.',
      ],
      formulas: [
        'Índice de sazonalidade do mês = vendas do mês ÷ média móvel de 12 meses (média entre os anos)',
        'Meta do mês = meta do ano ÷ 12 × índice de sazonalidade do mês',
        'Fechamento previsto = realizado até agora + previsão dos meses que faltam',
      ],
    },
    {
      titulo: 'Exemplo',
      paragrafos: [
        'Uma empresa com meta de R$ 3,6 milhões para o ano tem, na média, R$ 300 mil por mês. Se novembro tem índice 1,25, a meta de novembro é R$ 375 mil; se abril tem 0,80, a meta de abril é R$ 240 mil. Assim a meta acompanha o ritmo real do negócio, e o acompanhamento mês a mês mostra cedo se o ano está acima ou abaixo do previsto.',
      ],
    },
  ],
  perguntas: [
    {
      pergunta: 'Como calcular a sazonalidade das vendas?',
      resposta: 'Divida as vendas de cada mês pela média móvel de 12 meses daquele ponto e faça a média desse índice entre os anos. O resultado mostra quanto cada mês vende acima ou abaixo de um mês médio.',
    },
    {
      pergunta: 'Quantos anos de histórico preciso?',
      resposta: 'No mínimo 2 anos completos, mês a mês. Com 3 a 5 anos a sazonalidade fica mais confiável, porque um mês atípico pesa menos na média.',
    },
    {
      pergunta: 'Como definir a meta de vendas de cada mês?',
      resposta: 'Defina a meta do ano (pela tendência ou pelo seu objetivo) e distribua entre os meses pelo índice de sazonalidade: meta do mês = meta do ano ÷ 12 × índice do mês.',
    },
    {
      pergunta: 'Posso usar número de vendas em vez de faturamento?',
      resposta: 'Sim. A ferramenta aceita faturamento em reais ou quantidade de vendas, e faz as mesmas contas nos dois casos.',
    },
  ],
};

export const conteudoRoi: ConteudoFerramenta = {
  titulo: 'Entenda o ROI, o ROAS e como saber se a campanha deu lucro',
  blocos: [
    {
      titulo: 'O que é ROAS',
      paragrafos: [
        'ROAS (retorno sobre o investimento em anúncios) é quanto voltou de faturamento para cada R$ 1 investido. Um ROAS de 4x quer dizer R$ 4 de faturamento para cada R$ 1. Ele mede o faturamento, não o lucro: um ROAS alto pode dar prejuízo se a margem for baixa.',
      ],
      formulas: ['ROAS = faturamento ÷ investimento'],
    },
    {
      titulo: 'O que é ROI',
      paragrafos: [
        'ROI (retorno sobre o investimento) mostra quanto sobrou de lucro para cada R$ 1 investido, depois de pagar o investimento. A calculadora usa a margem de contribuição das vendas (o que sobra depois de imposto, cartão, comissão e produto), e não o faturamento. Um ROI de 0,5x quer dizer R$ 0,50 de lucro para cada R$ 1; um ROI negativo quer dizer prejuízo.',
        'Se o cliente volta a comprar, a mesma campanha rende mais com o tempo. Por isso a calculadora também mostra o ROI e o ROAS na vida do cliente, contando todas as compras que ele faz.',
      ],
      formulas: ['Lucro da campanha = faturamento × margem − investimento', 'ROI = lucro da campanha ÷ investimento', 'ROAS para empatar = 1 ÷ margem'],
    },
    {
      titulo: 'Exemplo',
      paragrafos: [
        'Uma campanha de R$ 8.000 gerou 40 vendas e R$ 36.000 de faturamento, com margem de 35%. O ROAS é 4,5x. A margem das vendas é R$ 12.600, o lucro é R$ 4.600 e o ROI é 0,6x. Com margem de 35%, a campanha empata com ROAS de 2,9x. Se cada cliente compra 3 vezes, o lucro na vida do cliente chega a R$ 29.800 e o ROI a 3,7x.',
      ],
    },
  ],
  perguntas: [
    {
      pergunta: 'Como calcular o ROI de uma campanha?',
      resposta: 'Calcule a margem das vendas (faturamento × margem de contribuição), subtraia o investimento e divida pelo investimento. Ex.: (R$ 36.000 × 35% − R$ 8.000) ÷ R$ 8.000 = 0,58, ou seja, R$ 0,58 de lucro para cada R$ 1.',
    },
    {
      pergunta: 'Qual a diferença entre ROI e ROAS?',
      resposta: 'O ROAS compara o faturamento com o investimento. O ROI compara o lucro (na margem) com o investimento. Uma campanha pode ter ROAS de 3x e ainda assim dar prejuízo, se a margem for menor que 33%.',
    },
    {
      pergunta: 'Qual é um bom ROAS?',
      resposta: 'Depende da margem. O ROAS mínimo para não ter prejuízo é 1 dividido pela margem: com margem de 25%, é 4x; com margem de 50%, é 2x. Acima desse ponto, a campanha dá lucro já na primeira venda.',
    },
    {
      pergunta: 'O que entra no investimento?',
      resposta: 'Tudo o que foi gasto para fazer aquelas vendas no mesmo período: mídia, agência, ferramentas e time comercial. Usar só a mídia deixa o ROI maior do que ele é de verdade.',
    },
  ],
};
