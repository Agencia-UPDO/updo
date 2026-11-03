import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { siteConfig } from '@/config/site';
import { type Entradas, TIPOS, calcular, CONVERSAO_PADRAO, horizonte, nomeProduto, type Produto, roiFrase, roiMultiplo } from './calculo';

// Diagnóstico em PDF da calculadora (A4, 3 páginas), gerado no navegador. Fontes e logos ficam em /public/calculadora.

export const NAVY = '#07111f';
export const MENTA = '#56fed5';
export const MENTA_ESCURO = '#0b8f72';
export const LILAS = '#6575ff';
export const LILAS_CLARO = '#f1f2ff';
export const CINZA = '#5b6472';
export const LINHA = '#e3e7ed';
export const FUNDO = '#f4f5f8';

let fontesProntas = false;
export function registrarFontes(origem: string) {
  if (fontesProntas) return;
  Font.register({
    family: 'Inter',
    fonts: [
      { src: `${origem}/calculadora/inter-5.2.5-latin-400-normal.ttf`, fontWeight: 400 },
      { src: `${origem}/calculadora/inter-5.2.5-latin-600-normal.ttf`, fontWeight: 600 },
    ],
  });
  Font.register({
    family: 'Jakarta',
    fonts: [
      { src: `${origem}/calculadora/plus-jakarta-sans-5.2.5-latin-500-normal.ttf`, fontWeight: 500 },
      { src: `${origem}/calculadora/plus-jakarta-sans-5.2.5-latin-700-normal.ttf`, fontWeight: 700 },
    ],
  });
  Font.registerHyphenationCallback((palavra) => [palavra]);
  fontesProntas = true;
}

const brl = (v: number, casas = 0) =>
  Number.isFinite(v) ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casas, maximumFractionDigits: casas }) : '—';
const num = (v: number, casas = 1) => (Number.isFinite(v) ? v.toLocaleString('pt-BR', { maximumFractionDigits: casas }) : '—');
const pct = (v: number | null, casas = 0) => (v == null || !Number.isFinite(v) ? '—' : `${(v * 100).toLocaleString('pt-BR', { maximumFractionDigits: casas })}%`);
const vezes = (v: number | null) => (v == null || !Number.isFinite(v) ? '—' : `${v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}x`);
const meses = (v: number | null) => (v == null ? '—' : !Number.isFinite(v) ? 'não se paga' : v === 0 ? 'na 1ª compra' : `${num(Math.ceil(v * 10) / 10)} meses`);

export const s = StyleSheet.create({
  pagina: { fontFamily: 'Inter', fontSize: 10, color: NAVY, paddingBottom: 56, backgroundColor: '#ffffff' },
  topo: { backgroundColor: NAVY, paddingHorizontal: 40, paddingTop: 28, paddingBottom: 26 },
  topoLinha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { width: 92, height: 33 },
  etiqueta: { fontSize: 8.5, color: MENTA, letterSpacing: 1.2, textTransform: 'uppercase' },
  titulo: { fontFamily: 'Jakarta', fontWeight: 700, fontSize: 24, color: '#ffffff', marginTop: 18 },
  subtitulo: { fontSize: 10, color: '#c9d1dc', marginTop: 6 },
  corpo: { paddingHorizontal: 40, paddingTop: 24 },
  secao: { fontFamily: 'Jakarta', fontWeight: 700, fontSize: 13, marginBottom: 10 },
  veredito: { flexDirection: 'row', borderRadius: 14, backgroundColor: FUNDO, padding: 18, marginBottom: 16, alignItems: 'center' },
  razao: { fontFamily: 'Jakarta', fontWeight: 700, fontSize: 38 },
  grade: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  cartao: { width: '33.33%', paddingHorizontal: 5, marginBottom: 10 },
  cartaoDentro: { borderWidth: 1, borderColor: LINHA, borderRadius: 10, padding: 12, minHeight: 74 },
  rotulo: { fontSize: 8.5, color: CINZA },
  valor: { fontFamily: 'Jakarta', fontWeight: 700, fontSize: 16, marginTop: 4 },
  detalhe: { fontSize: 7.5, color: CINZA, marginTop: 3 },
  linhaTabela: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: LINHA },
  rodape: { position: 'absolute', bottom: 22, left: 40, right: 40, flexDirection: 'row', justifyContent: 'space-between', fontSize: 7.5, color: CINZA },
  item: { flexDirection: 'row', marginBottom: 7 },
  marcador: { width: 6, height: 6, borderRadius: 3, marginTop: 3.5, marginRight: 8 },
});

export function Rodape({ ferramenta = 'Calculadora de CAC e LTV' }: { ferramenta?: string }) {
  return (
    <View style={s.rodape} fixed>
      <Text>UPDO · {ferramenta} · updo.com.br</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Cartao({ rotulo, valor, detalhe, cor }: { rotulo: string; valor: string; detalhe?: string; cor?: string }) {
  return (
    <View style={s.cartao}>
      <View style={s.cartaoDentro}>
        <Text style={s.rotulo}>{rotulo}</Text>
        <Text style={[s.valor, cor ? { color: cor } : {}]}>{valor}</Text>
        {detalhe ? <Text style={s.detalhe}>{detalhe}</Text> : null}
      </View>
    </View>
  );
}

// Leitura em linguagem simples do resultado, com recomendações
function diagnostico(e: Entradas, r: ReturnType<typeof calcular>) {
  const [cons, mod, agr] = r.plano;
  const resumo = `Para ter ${num(r.desejados, 0)} clientes novos por mês, o investimento fica entre ${brl(cons.investimento)} (conservador) e ${brl(agr.investimento)} (agressivo) por mês. No cenário moderado, cada cliente pode custar até ${brl(mod.cac)}, e o investimento é de ${brl(mod.investimento)} por mês.`;
  const dicas: string[] = [];
  dicas.push(`Comece pelo conservador (${brl(cons.cac)} por cliente) e suba para o moderado se o CAC real ficar abaixo do teto. O agressivo (${brl(agr.cac)}) acelera o crescimento, mas com folga menor.`);
  dicas.push(e.tipo === 'unica' ? 'Aumentar o ticket com ofertas complementares (upsell e combos) aumenta o quanto você pode pagar por cliente.' : 'Aumentar o tempo de vida do cliente (retenção, recompra, relacionamento) eleva o LTV e, com ele, o CAC que você pode pagar.');
  if (r.margemPct < 0.3) dicas.push(`A margem de contribuição está em ${pct(r.margemPct, 1)}. Com margem baixa, o ROAS mínimo para empatar sobe (${vezes(r.roasEmpate)}): revise preço e custos variáveis.`);
  if (mod.payback != null && Number.isFinite(mod.payback) && mod.payback > 12) dicas.push(`No moderado, o CAC leva ${meses(mod.payback)} para voltar. Payback longo exige caixa para crescer; planeje o fluxo antes de aumentar a mídia.`);
  if (mod.cpl != null && mod.leads != null) dicas.push(`Com ${num(r.conversaoUsada)}% de conversão${r.conversaoEstimada ? ' (estimativa)' : ''}, você precisa de cerca de ${num(Math.ceil(mod.leads), 0)} leads por mês, e cada lead pode custar até ${brl(mod.cpl, 2)} no moderado. Use esse número como teto nas campanhas.`);
  return { resumo, dicas };
}

export function RelatorioPdf({ e, produtos = [], origem, nome }: { e: Entradas; produtos?: Produto[]; origem: string; nome?: string }) {
  registrarFontes(origem);
  const r = calcular(e);
  const { resumo, dicas } = diagnostico(e, r);
  const recorrente = e.tipo === 'recorrente' || e.tipo === 'setup';
  const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const zap = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Olá! Fiz a calculadora de CAC e LTV da UPDO e quero ajuda para melhorar meus números.')}`;

  const entradas: [string, string][] = [
    ['Tipo de venda', TIPOS.find((t) => t.id === e.tipo)?.nome ?? e.tipo],
    ...(e.tipo === 'setup' ? [['Taxa de setup', brl(e.setup)] as [string, string]] : []),
    [recorrente ? 'Mensalidade' : 'Ticket médio', brl(e.ticket)],
    ...(e.tipo === 'recompra' ? [['Recompra', `${num(e.comprasAno)} compras por ano, por ${num(e.anos)} anos`] as [string, string]] : []),
    ...(recorrente ? [['Cancelamento (churn)', `${num(e.churn)}% ao mês · ${num(100 / Math.max(e.churn, 0.1))} meses de vida`] as [string, string]] : []),
    ...e.custos.filter((c) => c.valor).map((c) => [c.nome || 'Custo', c.modo === '%' ? `${num(c.valor)}% do preço` : `${brl(c.valor, 2)} por venda`] as [string, string]),
    [`Margem de contribuição por ${recorrente ? 'mês' : 'compra'}`, `${brl(r.margem, 2)} (${pct(r.margemPct, 1)})`],
    ['Meta de clientes novos por mês', num(e.clientesDesejados, 0)],
    ['Leads que viram venda', `${num(r.conversaoUsada)}%${r.conversaoEstimada ? ' (estimativa)' : ''}`],
    ...(e.segmento ? [['Segmento', e.segmento === 'Outro' ? e.segmentoOutro || 'Outro' : e.segmento] as [string, string]] : []),
  ];

  return (
    <Document title="Diagnóstico de CAC e LTV · UPDO" author="UPDO" creator="updo.com.br">
      <Page size="A4" style={s.pagina}>
        <View style={s.topo}>
          <View style={s.topoLinha}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={`${origem}/calculadora/logo-branca.png`} style={s.logo} />
            <Text style={s.etiqueta}>Diagnóstico de aquisição</Text>
          </View>
          <Text style={s.titulo}>Diagnóstico de CAC e LTV</Text>
          {e.nome.trim() ? <Text style={[s.subtitulo, { color: '#ffffff', fontSize: 12, marginTop: 4 }]}>{e.nome.trim()}</Text> : null}
          <Text style={s.subtitulo}>
            {nome ? `Preparado para ${nome} · ` : ''}
            {hoje}
          </Text>
        </View>

        <View style={s.corpo}>
          <View style={[s.veredito, { alignItems: 'stretch' }]}>
            <View style={{ width: 210 }}>
              <Text style={s.rotulo}>Para ter {num(r.desejados, 0)} clientes novos por mês</Text>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 19, color: LILAS, marginTop: 4 }}>
                {brl(r.plano[0].investimento)} a {brl(r.plano[2].investimento)}
              </Text>
              <Text style={[s.detalhe, { fontSize: 8.5 }]}>por mês, do conservador ao agressivo</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 14, borderLeftWidth: 1, borderLeftColor: LINHA }}>
              <Text style={{ fontSize: 9, color: CINZA, lineHeight: 1.45 }}>{resumo}</Text>
            </View>
          </View>

          <Text style={s.secao}>Seu plano em 3 cenários</Text>
          {[
            { rot: 'Investimento por mês', vals: r.plano.map((pl) => brl(pl.investimento)), teto: false },
            { rot: `Custo por lead ideal (${num(r.conversaoUsada)}% de conversão${r.conversaoEstimada ? ', estimativa' : ''})`, vals: r.plano.map((pl) => (pl.cpl == null ? '—' : brl(pl.cpl, 2))), teto: true },
            { rot: 'Custo por venda ideal', vals: r.plano.map((pl) => brl(pl.cac)), teto: true },
            { rot: `ROI ${horizonte(r)}`, vals: r.plano.map((pl) => roiMultiplo(pl.roi)), teto: false },
          ].map((linha) => (
            <View key={linha.rot} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
              <Text style={{ width: 170, fontSize: 9, fontWeight: 600 }}>{linha.rot}</Text>
              {r.plano.map((pl, i) => {
                const cor = pl.id === 'conservador' ? MENTA_ESCURO : pl.id === 'moderado' ? '#d48a00' : '#d6372b';
                return (
                  <View key={pl.id} style={{ flex: 1, marginLeft: 6, borderWidth: 1.2, borderColor: cor, borderRadius: 7, paddingVertical: 5, paddingHorizontal: 8 }}>
                    <Text style={{ fontSize: 7, color: cor, fontWeight: 600 }}>{pl.nome}</Text>
                    <Text style={{ fontSize: 10.5, fontFamily: 'Jakarta', fontWeight: 700 }}>
                      {linha.teto ? 'até ' : ''}
                      {linha.vals[i]}
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}
          <Text style={{ fontSize: 7.8, color: CINZA, marginBottom: 12 }}>
            Acima destes valores, cada cliente novo começa a sair caro. Limite (stop loss): acima de {brl(r.ltv)} por venda, você paga para vender.{r.conversaoEstimada ? ` Taxa de conversão de ${CONVERSAO_PADRAO}% usada como referência conservadora.` : ''}
          </Text>

          <Text style={s.secao}>Seus indicadores</Text>
          <View style={s.grade}>
            <Cartao rotulo="LTV (margem)" valor={brl(r.ltv)} detalhe={e.tipo === 'unica' ? 'margem de uma venda' : `${num(r.compras, 0)} ${recorrente ? 'meses' : 'compras'} · receita ${brl(r.receitaVida)}`} />
            <Cartao rotulo={`Margem por ${recorrente ? 'mês' : 'venda'}`} valor={brl(r.margem, 2)} detalhe={`${pct(r.margemPct, 1)} do preço`} />
            <Cartao rotulo="ROAS mínimo para empatar" valor={vezes(r.roasEmpate)} detalhe="na 1ª venda, com a sua margem" />
          </View>

          <Text style={[s.secao, { marginTop: 6 }]}>Quanto investir em cada cenário</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: -5 }}>
            {r.plano.map((pl) => {
              const cor = pl.id === 'conservador' ? MENTA_ESCURO : pl.id === 'moderado' ? '#d48a00' : '#d6372b';
              const linha = (rot: string, val: string) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                  <Text style={{ fontSize: 7.8, color: CINZA }}>{rot}</Text>
                  <Text style={{ fontSize: 7.8, fontWeight: 600 }}>{val}</Text>
                </View>
              );
              return (
                <View key={pl.id} style={{ flex: 1, paddingHorizontal: 5 }}>
                  <View style={{ borderRadius: 10, padding: 11, borderWidth: 1.5, borderColor: cor }}>
                    <Text style={{ fontSize: 8.5, fontWeight: 600, color: cor }}>
                      {pl.nome} · {Math.round(pl.pct * 100)}% do LTV
                    </Text>
                    <Text style={[s.valor, { fontSize: 15 }]}>{brl(pl.investimento)}</Text>
                    <Text style={s.detalhe}>por mês · CAC até {brl(pl.cac)}</Text>
                    <View style={{ marginTop: 5 }}>
                      {linha(`Receita ${horizonte(r)}`, brl(pl.receita))}
                      {linha('Lucro na margem', brl(pl.lucro))}
                      {linha('ROI · ROAS', `${roiMultiplo(pl.roi)} · ${vezes(pl.roas)}`)}
                      {linha(e.tipo === 'unica' ? 'Vendas p/ pagar' : 'Payback', e.tipo === 'unica' ? num(pl.vendasParaPagar) : meses(pl.payback))}
                      {linha('LTV : CAC', `${num(pl.ltvCac)} : 1`)}
                      {pl.leads != null ? linha('Leads por mês', num(Math.ceil(pl.leads), 0)) : null}
                      {pl.cpl != null ? linha('Custo máx. por lead', brl(pl.cpl, 2)) : null}
                    </View>
                    {roiFrase(pl.roi, r) ? <Text style={{ fontSize: 7.5, color: cor, marginTop: 6, lineHeight: 1.35 }}>{roiFrase(pl.roi, r)}</Text> : null}
                  </View>
                </View>
              );
            })}
          </View>
          <Text style={{ fontSize: 7.5, color: CINZA, marginTop: 7 }}>
            Receita, lucro, ROI e ROAS são na vida dos clientes ({r.vidaMeses == null ? 'na venda' : `${Math.round(r.vidaMeses)} meses`}). ROI = (lucro na margem − investimento) ÷ investimento.
          </Text>
        </View>
        <Rodape />
      </Page>

      <Page size="A4" style={[s.pagina, { paddingTop: 36 }]}>
        <View style={s.corpo}>
          <Text style={s.secao}>O que os números dizem</Text>
          <Text style={{ fontSize: 10, lineHeight: 1.5, marginBottom: 12 }}>{resumo}</Text>
          {dicas.map((d) => (
            <View key={d} style={s.item}>
              <View style={[s.marcador, { backgroundColor: MENTA_ESCURO }]} />
              <Text style={{ flex: 1, fontSize: 9.5, lineHeight: 1.45 }}>{d}</Text>
            </View>
          ))}

          <Text style={[s.secao, { marginTop: 18 }]}>Os números que você informou</Text>
          {entradas.map(([k, v]) => (
            <View key={k} style={s.linhaTabela}>
              <Text style={{ color: CINZA }}>{k}</Text>
              <Text style={{ fontWeight: 600 }}>{v}</Text>
            </View>
          ))}

          <Text style={[s.secao, { marginTop: 20 }]}>Glossário rápido</Text>
          {[
            ['LTV', 'Margem que um cliente deixa durante toda a relação com a empresa.'],
            ['CAC', 'Quanto custa trazer um cliente novo: investimento em aquisição ÷ clientes novos.'],
            ['LTV:CAC', 'Quantas vezes o cliente devolve o que custou. O saudável é 3 ou mais.'],
            ['Payback', 'Tempo até a margem do cliente pagar o CAC.'],
            ['ROAS', 'Receita gerada para cada R$ 1 investido em mídia.'],
          ].map(([t, d]) => (
            <View key={t} style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ width: 62, fontWeight: 600, fontSize: 9 }}>{t}</Text>
              <Text style={{ flex: 1, fontSize: 9, color: CINZA }}>{d}</Text>
            </View>
          ))}
        </View>
        <Rodape />
      </Page>

      {produtos.length >= 2 && <PaginaProdutos produtos={produtos} />}
      <PaginaUpdo origem={origem} zap={zap} />
    </Document>
  );
}

// Última página de todos os PDFs das ferramentas: chamada para falar com a UPDO e os contatos
export function PaginaUpdo({ origem, zap }: { origem: string; zap: string }) {
  return (
  <Page size="A4" style={[s.pagina, { backgroundColor: NAVY, paddingBottom: 0 }]}>
    <View style={{ flex: 1, paddingHorizontal: 48, paddingTop: 64, paddingBottom: 48, justifyContent: 'space-between' }}>
      <View>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src={`${origem}/calculadora/logo-branca.png`} style={{ width: 110, height: 40 }} />
        <Text style={[s.etiqueta, { marginTop: 56 }]}>Próximo passo</Text>
        <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 30, color: '#ffffff', marginTop: 12, lineHeight: 1.2 }}>
          Quer ajuda para melhorar esses números?
        </Text>
        <Text style={{ fontSize: 11, color: '#c9d1dc', marginTop: 14, lineHeight: 1.55, maxWidth: 400 }}>
          A UPDO estrutura marketing, vendas, CRM e dados para empresas que querem crescer com previsibilidade. Baixamos o CAC, aumentamos a conversão e conectamos mídia, página, atendimento e vendas.
        </Text>
        <Link src={zap} style={{ marginTop: 28, alignSelf: 'flex-start', backgroundColor: MENTA, borderRadius: 30, paddingVertical: 12, paddingHorizontal: 22, textDecoration: 'none' }}>
          <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 12, color: NAVY }}>Quero ajuda no meu marketing</Text>
        </Link>
        <View style={{ marginTop: 44 }}>
          {[
            ['Mídia que traz cliente, não só lead', 'Campanhas no Google e na Meta otimizadas para venda, com o CAC acompanhado de perto.'],
            ['Funil, CRM e atendimento', 'Página, automação e processo comercial para converter mais dos leads que você já paga.'],
            ['Dados e previsibilidade', 'Painéis de vendas e metas para decidir com números, não com achismo.'],
          ].map(([t, d]) => (
            <View key={t} style={{ flexDirection: 'row', marginBottom: 14 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: MENTA, marginTop: 4, marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 12, color: '#ffffff' }}>{t}</Text>
                <Text style={{ fontSize: 9.5, color: '#c9d1dc', marginTop: 3, lineHeight: 1.45 }}>{d}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View>
        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#1f2a3a', paddingTop: 18 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 8.5, color: MENTA }}>WhatsApp</Text>
            <Link src={zap} style={{ fontSize: 10.5, color: '#ffffff', marginTop: 4, textDecoration: 'none' }}>
              {siteConfig.contact.phone}
            </Link>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 8.5, color: MENTA }}>E-mail</Text>
            <Link src={`mailto:${siteConfig.contact.email}`} style={{ fontSize: 10.5, color: '#ffffff', marginTop: 4, textDecoration: 'none' }}>
              {siteConfig.contact.email}
            </Link>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 8.5, color: MENTA }}>Site</Text>
            <Link src="https://updo.com.br/diagnostico" style={{ fontSize: 10.5, color: '#ffffff', marginTop: 4, textDecoration: 'none' }}>
              updo.com.br
            </Link>
          </View>
        </View>
        <View style={{ marginTop: 16 }}>
          {siteConfig.addresses.map((a) => (
            <Text key={a.label} style={{ fontSize: 8.5, color: '#8b96a8', marginTop: 2 }}>
              {a.label}: {a.street} · {a.city}
            </Text>
          ))}
        </View>
      </View>
    </View>
  </Page>
  );
}

// Página com todos os produtos lado a lado (quando a pessoa calculou mais de um)
function PaginaProdutos({ produtos }: { produtos: Produto[] }) {
  const lista = produtos.map((p, i) => ({ p, nome: nomeProduto(p, i), r: calcular(p.e) }));
  const melhor = lista.reduce((a, b) => (b.r.plano[1].lucro > a.r.plano[1].lucro ? b : a));
  const total = [0, 1, 2].map((k) => lista.reduce((t, x) => t + x.r.plano[k].investimento, 0));
  const linhas: [string, (x: (typeof lista)[number]) => string][] = [
    ['Tipo de venda', (x) => TIPOS.find((t) => t.id === x.p.e.tipo)?.nome ?? ''],
    ['LTV (margem)', (x) => brl(x.r.ltv)],
    ['Margem por venda', (x) => `${brl(x.r.margem, 2)} (${pct(x.r.margemPct, 1)})`],
    ['Custo por venda ideal (moderado)', (x) => brl(x.r.plano[1].cac)],
    ['Custo por lead ideal (moderado)', (x) => (x.r.plano[1].cpl == null ? '—' : brl(x.r.plano[1].cpl, 2))],
    ['Clientes novos por mês', (x) => num(x.r.desejados, 0)],
    ['Investimento por mês (moderado)', (x) => brl(x.r.plano[1].investimento)],
    ['Investimento (conservador · agressivo)', (x) => `${brl(x.r.plano[0].investimento)} · ${brl(x.r.plano[2].investimento)}`],
    ['Lucro na margem (moderado)', (x) => `${brl(x.r.plano[1].lucro)} ${horizonte(x.r)}`],
    ['ROI (moderado)', (x) => `${roiMultiplo(x.r.plano[1].roi)} ${horizonte(x.r)}`],
  ];
  return (
    <Page size="A4" orientation={lista.length > 3 ? 'landscape' : 'portrait'} style={[s.pagina, { paddingTop: 36 }]}>
      <View style={s.corpo}>
        <Text style={s.secao}>Seus produtos lado a lado</Text>
        <Text style={{ fontSize: 8.5, color: CINZA, marginBottom: 10 }}>Em destaque, o produto que deixa mais lucro na margem com a meta de clientes de cada um.</Text>
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: LINHA, paddingBottom: 5 }}>
          <Text style={{ width: 150, fontSize: 8 }} />
          {lista.map((x) => (
            <Text key={x.p.id} style={{ flex: 1, fontSize: 9, fontFamily: 'Jakarta', fontWeight: 700, color: x === melhor ? MENTA_ESCURO : NAVY }}>
              {x.nome}
              {x === melhor ? ' (maior lucro)' : ''}
            </Text>
          ))}
        </View>
        {linhas.map(([rot, f]) => (
          <View key={rot} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: LINHA, paddingVertical: 5 }}>
            <Text style={{ width: 150, fontSize: 8, color: CINZA }}>{rot}</Text>
            {lista.map((x) => (
              <Text key={x.p.id} style={{ flex: 1, fontSize: 8.5, fontWeight: 600 }}>
                {f(x)}
              </Text>
            ))}
          </View>
        ))}
        <View style={{ marginTop: 14, backgroundColor: NAVY, borderRadius: 10, padding: 14 }}>
          <Text style={{ fontSize: 9, color: '#c9d1dc' }}>Para bater as metas de todos os produtos</Text>
          <Text style={{ fontSize: 18, fontFamily: 'Jakarta', fontWeight: 700, color: '#ffffff', marginTop: 3 }}>{brl(total[1])} por mês</Text>
          <Text style={{ fontSize: 8.5, color: '#c9d1dc', marginTop: 2 }}>
            no moderado · de {brl(total[0])} (conservador) a {brl(total[2])} (agressivo)
          </Text>
        </View>
      </View>
      <Rodape />
    </Page>
  );
}
