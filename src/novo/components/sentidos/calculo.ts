// Contas e textos da análise dos 5 sentidos (neuromarketing), base: planilha "Gráfico 5 Sentidos" da UPDO. Sem nada de tela.
// A pessoa dá uma nota de 0 a 10 para o quanto a marca ativa cada sentido no cliente (e, se quiser, para até 2 concorrentes);
// a ferramenta mostra o índice sensorial, os sentidos fortes e fracos, a comparação e dicas práticas para cada sentido fraco.

export type SentidoId = 'visao' | 'toque' | 'cheiro' | 'som' | 'gosto';
export type TipoNegocio = 'fisica' | 'online' | 'servico';
export type Notas = Record<SentidoId, number>;
export type Concorrente = { id: string; nome: string; notas: Notas };

export type Entradas = {
  nome: string;
  tipo: TipoNegocio;
  notas: Notas;
  concorrentes: Concorrente[];
};

export const MAX_CONCORRENTES = 2;

export const TIPOS: { id: TipoNegocio; nome: string; exemplos: string }[] = [
  { id: 'fisica', nome: 'Loja física', exemplos: 'loja, restaurante, clínica, academia' },
  { id: 'online', nome: 'Online', exemplos: 'e-commerce, infoproduto, app' },
  { id: 'servico', nome: 'Serviço', exemplos: 'consultoria, agência, escritório' },
];

// Os 5 sentidos: o que 0, 5 e 10 querem dizer e 3 perguntas de sim ou não que sugerem a nota
export const SENTIDOS: { id: SentidoId; nome: string; zero: string; cinco: string; dez: string; perguntas: string[] }[] = [
  {
    id: 'visao',
    nome: 'Visão',
    zero: 'nada marcante',
    cinco: 'bonito, mas comum',
    dez: 'inconfundível',
    perguntas: [
      'A identidade visual (logo, cores, fachada, embalagem) é marcante e fácil de reconhecer?',
      'As fotos e os vídeos mostram o produto de um jeito bonito e real?',
      'O ambiente (loja, site ou perfil) é organizado e dá vontade de ficar?',
    ],
  },
  {
    id: 'toque',
    nome: 'Toque',
    zero: 'o cliente nem chega perto',
    cinco: 'dá para pegar, sem nada especial',
    dez: 'a experiência no toque é marcante',
    perguntas: [
      'O cliente consegue tocar, testar ou experimentar antes de comprar?',
      'Materiais, embalagem ou ambiente têm textura e acabamento agradáveis?',
      'A entrega ou o atendimento tem algum contato físico marcante (embalagem caprichada, brinde, aperto de mão)?',
    ],
  },
  {
    id: 'cheiro',
    nome: 'Cheiro',
    zero: 'sem cheiro nenhum',
    cinco: 'cheiro agradável, sem marca',
    dez: 'o cliente reconhece o cheiro da marca',
    perguntas: [
      'O ambiente ou o produto tem um cheiro agradável?',
      'É sempre o mesmo cheiro, a ponto de o cliente associar à marca?',
      'A embalagem, a entrega ou o material da marca chega com algum aroma?',
    ],
  },
  {
    id: 'som',
    nome: 'Som',
    zero: 'silêncio ou barulho',
    cinco: 'tem música, sem identidade',
    dez: 'som e voz com a cara da marca',
    perguntas: [
      'Existe música ou som ambiente escolhido para a marca?',
      'Vídeos e anúncios usam trilha, som ou voz característicos?',
      'O atendimento (telefone, áudio, vídeo) tem um tom de voz que o cliente reconhece?',
    ],
  },
  {
    id: 'gosto',
    nome: 'Gosto',
    zero: 'nada para provar',
    cinco: 'um café ou uma água',
    dez: 'o sabor faz parte da experiência',
    perguntas: [
      'O cliente pode provar alguma coisa (amostra, degustação, café, água)?',
      'Existe um sabor associado à experiência (bala da marca, bebida, café na espera)?',
      'O que o cliente prova é caprichado e lembra a marca?',
    ],
  },
];

// Dicas práticas de cada sentido, por tipo de negócio
export const DICAS_SENTIDO: Record<SentidoId, Record<TipoNegocio, string[]>> = {
  visao: {
    fisica: [
      'Padronize fachada, cores, uniforme e sinalização: o cliente tem que reconhecer a marca de longe.',
      'Ilumine bem o produto e monte vitrines e displays que contem uma história, trocando de tempos em tempos.',
      'Use fotos e vídeos reais da loja e dos clientes nas redes, e não só imagens de banco.',
    ],
    online: [
      'Invista em fotos e vídeos do produto em uso, com fundo e luz padronizados.',
      'Mantenha site, redes e anúncios com as mesmas cores, fontes e estilo de imagem.',
      'Mostre detalhes que dão vontade de tocar: close na textura, no acabamento e na embalagem.',
    ],
    servico: [
      'Dê cara ao serviço: identidade visual forte em propostas, apresentações e relatórios.',
      'Mostre o resultado entregue com antes e depois, painéis e casos em vídeo.',
      'Cuide do ambiente das reuniões, presenciais ou on-line: cenário, luz e câmera.',
    ],
  },
  toque: {
    fisica: [
      'Deixe o cliente pegar, provar e testar: produto fora da caixa, provador, aula ou test drive.',
      'Escolha materiais e acabamentos agradáveis no balcão, na sacola e na embalagem.',
      'Crie um gesto da casa no atendimento: entregar o produto na mão, um brinde, um acabamento caprichado.',
    ],
    online: [
      'Capriche no unboxing: caixa firme, papel de seda, lacre e um cartão escrito à mão.',
      'Envie amostras ou um kit de experimentação junto com o pedido.',
      'Descreva a textura e o peso nos anúncios e mostre o produto sendo manuseado nos vídeos.',
    ],
    servico: [
      'Entregue algo físico: kit de boas-vindas, material impresso de qualidade, um brinde útil.',
      'Use materiais com bom acabamento em contratos, propostas e cartões.',
      'Em reuniões presenciais, crie um ritual de recepção: café servido, material na mesa.',
    ],
  },
  cheiro: {
    fisica: [
      'Crie um aroma da marca e use sempre o mesmo no ambiente, com difusor ou aromatizador.',
      'Evite cheiros que atrapalham (fritura, produto de limpeza forte, mofo) perto da entrada.',
      'Perfume sacolas ou embalagens com o mesmo aroma, para o cheiro ir para casa com o cliente.',
    ],
    online: [
      'Perfume a embalagem ou coloque um sachê com o aroma da marca em cada pedido.',
      'Use o mesmo aroma em todos os envios, para o cliente associar o cheiro à marca.',
      'Fale do cheiro no texto e nos vídeos quando ele fizer parte do produto.',
    ],
    servico: [
      'Use um aroma suave e sempre igual no escritório ou na sala de atendimento.',
      'Mande o kit de boas-vindas ou os materiais com o aroma da marca.',
      'Ofereça café fresco nas reuniões: o cheiro de café é um dos mais lembrados.',
    ],
  },
  som: {
    fisica: [
      'Monte uma playlist com a cara da marca e controle o volume ao longo do dia.',
      'Treine a equipe num jeito de receber e de se despedir do cliente que seja sempre o mesmo.',
      'Use o som do próprio negócio nos vídeos: o produto sendo usado, o ambiente, o treino.',
    ],
    online: [
      'Coloque trilha, locução e um som de assinatura nos vídeos e anúncios.',
      'Grave áudios e vídeos com o mesmo tom de voz no atendimento pelo WhatsApp.',
      'Use sons reais do produto (abrir a embalagem, usar o produto) nos conteúdos.',
    ],
    servico: [
      'Defina um tom de voz da marca e use em ligações, áudios, vídeos e reuniões.',
      'Crie uma vinheta curta para vídeos, podcast ou apresentações.',
      'Cuide do som nas reuniões on-line: microfone bom e ambiente sem eco.',
    ],
  },
  gosto: {
    fisica: [
      'Ofereça algo para provar: café, água saborizada, chocolate ou uma bala com a marca.',
      'Faça degustação ou amostra do produto quando ele tiver sabor.',
      'Crie um pequeno ritual de boas-vindas com algo para beber enquanto o cliente espera.',
    ],
    online: [
      'Mande um mimo comestível com a marca em pedidos acima de um valor.',
      'Em parcerias, inclua um produto com sabor que combine com o seu público.',
      'Use o paladar nas palavras: descreva sensações e associe a marca a momentos de prazer.',
    ],
    servico: [
      'Sirva um café ou um chá de qualidade nas reuniões e lembre a preferência do cliente.',
      'Mande um presente comestível em datas importantes (fechamento, renovação, aniversário).',
      'Faça eventos e encontros com comida e bebida que reforcem a experiência da marca.',
    ],
  },
};

const notasVazias = (): Notas => ({ visao: 0, toque: 0, cheiro: 0, som: 0, gosto: 0 });

// Exemplo da planilha: loja de artes marciais (10, 10, 10, 7, 0) e dois concorrentes fictícios
export const EXEMPLO: Entradas = {
  nome: 'Loja de Artes Marciais',
  tipo: 'fisica',
  notas: { visao: 10, toque: 10, cheiro: 10, som: 7, gosto: 0 },
  concorrentes: [
    { id: 'c1', nome: 'Concorrente A', notas: { visao: 8, toque: 6, cheiro: 3, som: 8, gosto: 2 } },
    { id: 'c2', nome: 'Concorrente B', notas: { visao: 6, toque: 8, cheiro: 2, som: 5, gosto: 0 } },
  ],
};

export const VAZIO: Entradas = { nome: '', tipo: 'fisica', notas: notasVazias(), concorrentes: [] };

export const novoConcorrente = (): Concorrente => ({ id: `c${Date.now()}`, nome: '', notas: notasVazias() });

export const nomeConcorrente = (c: Concorrente, i: number) => c.nome.trim() || `Concorrente ${i + 1}`;

// Nota sugerida pelas perguntas: proporção de "sim" (0, 3, 7 ou 10)
export const notaDasRespostas = (sims: number, total: number) => Math.round((sims / total) * 10);

// Índice sensorial de 0 a 100: a soma das 5 notas sobre 50
export const indice = (n: Notas) => Math.round((SENTIDOS.reduce((t, s) => t + n[s.id], 0) / 50) * 100);

export type Faixa = { cor: 'verde' | 'amarelo' | 'vermelho'; nome: string; texto: string };
export const faixa = (i: number): Faixa =>
  i >= 70
    ? { cor: 'verde', nome: 'Experiência sensorial forte', texto: 'A marca já mexe com vários sentidos do cliente. Agora é manter o padrão e explorar o que falta.' }
    : i >= 40
      ? { cor: 'amarelo', nome: 'Experiência sensorial média', texto: 'Alguns sentidos funcionam bem, outros estão esquecidos. Há espaço claro para marcar mais o cliente.' }
      : { cor: 'vermelho', nome: 'Experiência sensorial fraca', texto: 'A marca usa pouco os sentidos. Pequenas mudanças já fazem o cliente lembrar mais de você.' };

export type Resultado = ReturnType<typeof calcular>;

export function calcular(e: Entradas) {
  const nome = e.nome.trim() || 'Sua marca';
  const ordem = [...SENTIDOS].sort((a, b) => e.notas[b.id] - e.notas[a.id]);
  const maior = e.notas[ordem[0].id];
  const menor = e.notas[ordem[ordem.length - 1].id];
  // Os mais fortes e os mais fracos (empates entram juntos)
  const fortes = SENTIDOS.filter((s) => e.notas[s.id] === maior && maior > 0);
  const fracos = SENTIDOS.filter((s) => e.notas[s.id] === menor && menor < 10);
  // Sentidos que merecem dica: nota até 6, do mais fraco para o mais forte (no máximo 3)
  const melhorar = [...SENTIDOS].filter((s) => e.notas[s.id] <= 6).sort((a, b) => e.notas[a.id] - e.notas[b.id]).slice(0, 3);
  const concorrentes = e.concorrentes.map((c, i) => {
    const nomeC = nomeConcorrente(c, i);
    const ganha = SENTIDOS.filter((s) => e.notas[s.id] > c.notas[s.id]);
    const perde = SENTIDOS.filter((s) => e.notas[s.id] < c.notas[s.id]);
    return { ...c, nome: nomeC, indice: indice(c.notas), ganha, perde };
  });
  const idx = indice(e.notas);
  return { nome, indice: idx, faixa: faixa(idx), fortes, fracos, melhorar, concorrentes };
}

const lista = (itens: string[]) => (itens.length <= 1 ? itens.join('') : `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`);

// Leitura em frases simples: o ponto forte, o fraco e a comparação com cada concorrente
export function leitura(e: Entradas, r: Resultado): string[] {
  const frases: string[] = [];
  if (r.fortes.length) frases.push(`O ponto mais forte de ${r.nome} é ${lista(r.fortes.map((s) => s.nome.toLowerCase()))} (nota ${e.notas[r.fortes[0].id]}).`);
  if (r.fracos.length) frases.push(`O mais fraco é ${lista(r.fracos.map((s) => s.nome.toLowerCase()))} (nota ${e.notas[r.fracos[0].id]}): é onde está a maior oportunidade.`);
  for (const c of r.concorrentes) {
    if (!c.ganha.length && !c.perde.length) frases.push(`Contra ${c.nome}, empate em todos os sentidos.`);
    else
      frases.push(
        `Contra ${c.nome}: ${c.ganha.length ? `você ganha em ${lista(c.ganha.map((s) => s.nome.toLowerCase()))}` : 'você não ganha em nenhum sentido'}${c.perde.length ? `; perde em ${lista(c.perde.map((s) => s.nome.toLowerCase()))}` : ''}.`,
      );
  }
  return frases;
}

// Desenho dos ícones de cada sentido (os mesmos da Lucide usados nos cards, em grade de 24×24), para o radar do site e do PDF
export const ICONE_DESENHO: Record<SentidoId, { paths: string[]; circulos: [number, number, number][] }> = {
  visao: { paths: ['M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0'], circulos: [[12, 12, 3]] },
  toque: {
    paths: ['M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2', 'M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2', 'M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8', 'M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15'],
    circulos: [],
  },
  cheiro: {
    paths: ['M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1', 'M12 10v12', 'M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z', 'M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z'],
    circulos: [[12, 8, 2]],
  },
  som: { paths: ['M9 18V5l12-2v13'], circulos: [[6, 18, 3], [18, 16, 3]] },
  gosto: { paths: ['M10 2v2', 'M14 2v2', 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1', 'M6 2v2'], circulos: [] },
};

// O ícone como imagem SVG (data URI), para o gráfico do site
export const iconeSvg = (id: SentidoId, cor: string) => {
  const d = ICONE_DESENHO[id];
  const corpo = d.paths.map((p) => `<path d="${p}"/>`).join('') + d.circulos.map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${cor}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${corpo}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
