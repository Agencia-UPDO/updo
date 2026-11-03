import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { siteConfig } from '@/config/site';
import { type Entradas, TIPOS, calcular, saudeLtvCac } from './calculo';

// Diagnóstico em PDF da calculadora (A4, 3 páginas), gerado no navegador. Fontes e logos ficam em /public/calculadora.

export const NAVY = '#07111f';
export const MENTA = '#56fed5';
export const MENTA_ESCURO = '#0b8f72';
export const LILAS = '#6575ff';
export const LILAS_CLARO = '#f1f2ff';
export const CINZA = '#5b6472';
export const LINHA = '#e3e7ed';
export const FUNDO = '#f4f5f8';
const COR_TOM = { bom: MENTA_ESCURO, atencao: '#d48a00', ruim: '#d6372b', neutro: CINZA };

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

// Leitura em linguagem simples do resultado, com recomendações conforme o cenário
function diagnostico(e: Entradas, r: ReturnType<typeof calcular>) {
  const saude = saudeLtvCac(r.ltvCac);
  const resumo =
    saude.tom === 'ruim'
      ? 'Hoje cada cliente novo custa mais do que deixa de margem ao longo da relação. Crescer investindo mais em mídia, do jeito que está, aumenta o prejuízo.'
      : saude.tom === 'atencao'
        ? 'A aquisição se paga, mas com pouca folga. Qualquer aumento no custo da mídia ou queda na conversão pode zerar o lucro dos clientes novos.'
        : saude.tom === 'bom'
          ? 'A relação entre o que um cliente deixa e o que custa trazê-lo é saudável. Há espaço para investir mais e acelerar o crescimento.'
          : 'Informe o investimento e os clientes novos por mês para ver o diagnóstico completo.';
  const dicas: string[] = [];
  if (saude.tom === 'ruim' || saude.tom === 'atencao') {
    dicas.push(
      r.cac > r.cacMaximo[1].valor
        ? `Baixar o CAC: o teto saudável (moderado) é ${brl(r.cacMaximo[1].valor)} por cliente e hoje ele está em ${brl(r.cac)}. Melhorar a conversão de lead em venda e a página de destino costuma ser o caminho mais rápido.`
        : `Seu CAC (${brl(r.cac)}) já está abaixo do teto moderado (${brl(r.cacMaximo[1].valor)}), mas a folga é pequena. Ganhar eficiência no funil (mais vendas com os mesmos leads) aumenta essa margem de segurança.`,
    );
    dicas.push(e.tipo === 'unica' ? 'Aumentar o ticket com ofertas complementares (upsell e combos) melhora a margem de cada venda.' : 'Aumentar o tempo de vida do cliente (retenção, recompra, programas de relacionamento) eleva o LTV sem gastar mais com mídia.');
  }
  if (saude.tom === 'bom') dicas.push(`Dá para escalar: com o CAC moderado de ${brl(r.cacMaximo[1].valor)}, cada cliente novo continua lucrativo. Aumente o investimento aos poucos e acompanhe o CAC mês a mês.`);
  if (r.margemPct < 0.3) dicas.push(`A margem de contribuição está em ${pct(r.margemPct, 1)}. Com margem baixa, o ROAS mínimo para empatar sobe (${vezes(r.roasEmpate)}): revise preço e custos variáveis.`);
  if (r.paybackMeses != null && Number.isFinite(r.paybackMeses) && r.paybackMeses > 12) dicas.push(`O CAC leva ${meses(r.paybackMeses)} para voltar. Payback longo exige caixa para crescer; planeje o fluxo antes de aumentar a mídia.`);
  if (r.cplMaximo != null) dicas.push(`Com ${num(e.conversaoLead)}% de conversão, cada lead pode custar até ${brl(r.cplMaximo, 2)}. Use esse número como teto nas campanhas.`);
  return { saude, resumo, dicas };
}

export function RelatorioPdf({ e, origem, nome }: { e: Entradas; origem: string; nome?: string }) {
  registrarFontes(origem);
  const r = calcular(e);
  const { saude, resumo, dicas } = diagnostico(e, r);
  const recorrente = e.tipo === 'recorrente' || e.tipo === 'setup';
  const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const roi = e.tipo === 'unica' ? r.roiPrimeira : r.roiVida;
  const zap = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Olá! Fiz a calculadora de CAC e LTV da UPDO e quero ajuda para melhorar meus números.')}`;

  const entradas: [string, string][] = [
    ['Tipo de venda', TIPOS.find((t) => t.id === e.tipo)?.nome ?? e.tipo],
    ...(e.tipo === 'setup' ? [['Taxa de setup', brl(e.setup)] as [string, string]] : []),
    [recorrente ? 'Mensalidade' : 'Ticket médio', brl(e.ticket)],
    ...(e.tipo === 'recompra' ? [['Recompra', `${num(e.comprasAno)} compras por ano, por ${num(e.anos)} anos`] as [string, string]] : []),
    ...(recorrente ? [['Cancelamento (churn)', `${num(e.churn)}% ao mês · ${num(100 / Math.max(e.churn, 0.1))} meses de vida`] as [string, string]] : []),
    ...e.custos.filter((c) => c.valor).map((c) => [c.nome || 'Custo', c.modo === '%' ? `${num(c.valor)}% do preço` : `${brl(c.valor, 2)} por venda`] as [string, string]),
    [`Margem de contribuição por ${recorrente ? 'mês' : 'compra'}`, `${brl(r.margem, 2)} (${pct(r.margemPct, 1)})`],
    ['Mídia por mês', brl(e.investimento)],
    ...e.custosAquisicao.filter((c) => c.valor).map((c) => [c.nome || 'Outro custo de aquisição', `${brl(c.valor)} por mês`] as [string, string]),
    ['Clientes novos por mês', num(e.clientesNovos, 0)],
    ...(e.conversaoLead ? [['Conversão de lead em venda', `${num(e.conversaoLead)}%`] as [string, string]] : []),
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
          <Text style={s.subtitulo}>
            {nome ? `Preparado para ${nome} · ` : ''}
            {hoje}
          </Text>
        </View>

        <View style={s.corpo}>
          <View style={s.veredito}>
            <View style={{ width: 150 }}>
              <Text style={s.rotulo}>LTV : CAC</Text>
              <Text style={[s.razao, { color: COR_TOM[saude.tom] }]}>{r.ltvCac == null ? '—' : `${num(r.ltvCac)} : 1`}</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 14, borderLeftWidth: 1, borderLeftColor: LINHA }}>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 12, color: COR_TOM[saude.tom] }}>{saude.rotulo}</Text>
              <Text style={{ fontSize: 9, color: CINZA, marginTop: 5, lineHeight: 1.45 }}>{resumo}</Text>
              <Text style={{ fontSize: 7.5, color: CINZA, marginTop: 6 }}>Referência: abaixo de 1 perde dinheiro · de 1 a 3 paga com pouca folga · 3 ou mais é saudável</Text>
            </View>
          </View>

          <Text style={s.secao}>Seus indicadores</Text>
          <View style={s.grade}>
            <Cartao rotulo="LTV (margem)" valor={brl(r.ltv)} detalhe={e.tipo === 'unica' ? 'margem de uma venda' : `${num(r.compras, 0)} ${recorrente ? 'meses' : 'compras'} · receita ${brl(r.receitaVida)}`} />
            <Cartao rotulo="CAC atual" valor={brl(r.cac)} detalhe={r.outrosAquisicao ? `mídia ${brl(r.cacMidia)} + outros ${brl(r.cac - r.cacMidia)}` : 'investimento ÷ clientes novos'} cor={r.cac > r.cacMaximo[1].valor ? COR_TOM.ruim : COR_TOM.bom} />
            <Cartao
              rotulo={e.tipo === 'unica' ? 'Vendas para pagar o CAC' : 'Payback do CAC'}
              valor={e.tipo === 'unica' ? (r.vendasParaPagar <= 1 ? 'na 1ª venda' : `${num(r.vendasParaPagar)} vendas`) : meses(r.paybackMeses)}
              detalhe="tempo até o cliente se pagar"
            />
            <Cartao rotulo="ROAS mínimo para empatar" valor={vezes(r.roasEmpate)} detalhe="na 1ª venda, com a sua margem" />
            <Cartao rotulo="ROAS atual" valor={vezes(r.roasPrimeira)} detalhe={e.tipo === 'unica' ? 'receita ÷ mídia' : `na vida do cliente ${vezes(r.roasVida)}`} />
            <Cartao rotulo="ROI sobre a margem" valor={pct(roi)} detalhe={e.tipo === 'unica' ? 'lucro da margem ÷ investimento' : 'na vida do cliente'} cor={roi != null && roi < 0 ? COR_TOM.ruim : COR_TOM.bom} />
          </View>

          <Text style={[s.secao, { marginTop: 6 }]}>Quanto você pode pagar por cliente</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: -5 }}>
            {r.cacMaximo.map((c) => (
              <View key={c.id} style={{ flex: 1, paddingHorizontal: 5 }}>
                <View style={{ borderRadius: 10, padding: 12, backgroundColor: c.id === 'moderado' ? LILAS_CLARO : FUNDO }}>
                  <Text style={s.rotulo}>
                    {c.nome} · {Math.round(c.pct * 100)}% do LTV
                  </Text>
                  <Text style={[s.valor, c.id === 'moderado' ? { color: LILAS } : {}]}>{brl(c.valor)}</Text>
                  <Text style={s.detalhe}>{brl(c.valor * Math.max(e.clientesNovos, 1))} por mês para {num(Math.max(e.clientesNovos, 1), 0)} clientes</Text>
                </View>
              </View>
            ))}
          </View>
          {r.cplMaximo != null && (
            <Text style={{ fontSize: 9, color: CINZA, marginTop: 10 }}>
              Custo máximo por lead (cenário moderado, {num(e.conversaoLead)}% de conversão): <Text style={{ color: NAVY, fontWeight: 600 }}>{brl(r.cplMaximo, 2)}</Text>
            </Text>
          )}
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
