import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import { siteConfig } from '@/config/site';
import { CINZA, FUNDO, LILAS, LILAS_CLARO, LINHA, MENTA_ESCURO, NAVY, PaginaUpdo, Rodape, registrarFontes, s } from '@/novo/components/calculadora/relatorio-pdf';
import { type Cenario, type Entradas, MESES, calcular, insights, periodoYtd, valorDoCenario } from './calculo';

// Projeção de vendas em PDF (A4, 3 páginas): o ano atual contra os anteriores e a sazonalidade, a meta do próximo ano mês a mês
// e a página final da UPDO. Os anos saem da data de hoje (nada fixo).

const VERMELHO = '#d6372b';
const AMBAR = '#d97706';
const NOME_CENARIO: Record<Cenario, string> = { conservador: 'Conservador', tendencia: 'Tendência', agressivo: 'Agressivo', meta: 'Meta própria' };

export function RelatorioProjecaoPdf({ e, cenario, origem, nome }: { e: Entradas; cenario: Cenario; origem: string; nome?: string }) {
  registrarFontes(origem);
  const r = calcular(e);
  const anualProx = valorDoCenario(r, cenario, e.metaPropria) || r.cenarios.tendencia;
  const plano = r.planejar(anualProx);
  const lista = insights(r, e, anualProx);
  const fat = e.medida === 'faturamento';
  const fmt = (v: number) => (!Number.isFinite(v) ? '—' : fat ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }) : `${Math.round(v).toLocaleString('pt-BR')}`);
  const pct = (v: number | null, casas = 0) => (v == null || !Number.isFinite(v) ? '—' : `${(v * 100).toLocaleString('pt-BR', { maximumFractionDigits: casas })}%`);
  const sinal = (v: number) => `${v >= 0 ? '+' : '−'}${Math.round(Math.abs(v) * 100)}%`;
  const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const temReal = r.ateMes >= 0;
  const periodo = periodoYtd(r);
  const maxDesvio = Math.max(...r.indice.map((v) => Math.abs(v - 1)), 0.05);
  const zap = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Olá! Fiz a projeção de vendas da UPDO e quero ajuda para bater minhas metas.')}`;
  const ferramenta = 'Projeção de vendas e sazonalidade';
  const unidade = fat ? 'faturamento' : 'vendas';
  const comparacao = [...r.ytdAnos.map((a, i) => ({ ano: a.ano, valor: temReal ? a.valor : r.totais[i] })), ...(temReal ? [{ ano: r.anoAtual, valor: r.ytdAtual }] : [])];
  const maxComp = Math.max(...comparacao.map((c) => c.valor), 1);

  return (
    <Document title={`Projeção de vendas ${r.anoAtual}–${r.proximoAno} · UPDO`} author="UPDO" creator="updo.com.br">
      <Page size="A4" style={s.pagina}>
        <View style={s.topo}>
          <View style={s.topoLinha}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={`${origem}/calculadora/logo-branca.png`} style={s.logo} />
            <Text style={s.etiqueta}>Projeção e sazonalidade</Text>
          </View>
          <Text style={s.titulo}>
            Projeção de {unidade} {r.anoAtual} e {r.proximoAno}
          </Text>
          <Text style={s.subtitulo}>
            {nome ? `Preparado para ${nome} · ` : ''}
            {hoje} · histórico de {r.anos[0]?.ano} a {r.anos[r.anos.length - 1]?.ano}
            {fat ? '' : ' · em número de vendas'}
          </Text>
        </View>

        <View style={s.corpo}>
          <View style={[s.veredito, { alignItems: 'stretch', marginBottom: 12 }]}>
            <View style={{ width: 200 }}>
              <Text style={s.rotulo}>
                {r.anoAtual}
                {temReal ? ` · ${periodo}` : ''}
              </Text>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 24, color: NAVY, marginTop: 4 }}>{temReal ? fmt(r.ytdAtual) : '—'}</Text>
              {temReal && r.ytdAnterior ? (
                <Text style={{ fontSize: 9, marginTop: 3, fontWeight: 600, color: r.ytdAtual >= r.ytdAnterior ? MENTA_ESCURO : VERMELHO }}>
                  {sinal(r.ytdAtual / r.ytdAnterior - 1)} vs {periodo} de {r.anoAtual - 1}
                </Text>
              ) : null}
            </View>
            <View style={{ flex: 1, paddingLeft: 14, borderLeftWidth: 1, borderLeftColor: LINHA, justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3 }}>
                <Text style={{ fontSize: 9.5, color: CINZA }}>Fechamento previsto {r.anoAtual}</Text>
                <Text style={{ fontSize: 9.5, fontWeight: 600, color: AMBAR }}>{fmt(r.fechamentoAtual)}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3 }}>
                <Text style={{ fontSize: 9.5, color: CINZA }}>Tendência para {r.anoAtual}</Text>
                <Text style={{ fontSize: 9.5, fontWeight: 600 }}>{fmt(r.metaAtual)}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3 }}>
                <Text style={{ fontSize: 9.5, color: CINZA }}>Total de {r.anoAtual - 1}</Text>
                <Text style={{ fontSize: 9.5, fontWeight: 600 }}>{fmt(r.ultimo)}</Text>
              </View>
            </View>
          </View>

          <Text style={s.secao}>{temReal ? `Acumulado de ${periodo}, ano a ano` : 'Total por ano'}</Text>
          {comparacao.map((c, i) => {
            const ant = comparacao[i - 1]?.valor;
            const atual = c.ano === r.anoAtual;
            return (
              <View key={c.ano} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ width: 34, fontSize: 9, fontWeight: 600, color: atual ? AMBAR : CINZA }}>{c.ano}</Text>
                <View style={{ flex: 1, height: 14, backgroundColor: FUNDO, borderRadius: 4 }}>
                  <View style={{ width: `${Math.max((c.valor / maxComp) * 100, 6)}%`, height: 14, borderRadius: 4, backgroundColor: atual ? '#f59e0b' : '#8e9aff' }} />
                </View>
                <Text style={{ width: 92, fontSize: 9, textAlign: 'right', fontWeight: 600 }}>{fmt(c.valor)}</Text>
                <Text style={{ width: 42, fontSize: 9, textAlign: 'right', color: ant == null ? CINZA : c.valor >= ant ? MENTA_ESCURO : VERMELHO }}>{ant ? sinal(c.valor / ant - 1) : '—'}</Text>
              </View>
            );
          })}

          <Text style={[s.secao, { marginTop: 12 }]}>Sazonalidade: quanto cada mês vende acima ou abaixo da média</Text>
          <View style={{ flexDirection: 'row', height: 112, borderRadius: 10, backgroundColor: FUNDO, paddingHorizontal: 8, paddingVertical: 6 }}>
            {r.indice.map((v, m) => {
              const d = v - 1;
              const h = (Math.abs(d) / maxDesvio) * 36;
              return (
                <View key={m} style={{ flex: 1, alignItems: 'center' }}>
                  <View style={{ height: 38, justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>{d > 0 ? <View style={{ width: 16, height: h, backgroundColor: '#56fed5', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} /> : null}</View>
                  <View style={{ height: 1, width: '100%', backgroundColor: '#c8ced8' }} />
                  <View style={{ height: 38, width: '100%', alignItems: 'center' }}>{d < 0 ? <View style={{ width: 16, height: h, backgroundColor: '#f87171', borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }} /> : null}</View>
                  <Text style={{ fontSize: 7, fontWeight: 600, color: d >= 0 ? MENTA_ESCURO : VERMELHO, marginTop: 2 }}>{sinal(d)}</Text>
                  <Text style={{ fontSize: 7, color: CINZA }}>{MESES[m].slice(0, 3).toLowerCase()}</Text>
                </View>
              );
            })}
          </View>

          <Text style={[s.secao, { marginTop: 12 }]}>O que os números dizem</Text>
          {lista.map((t) => (
            <View key={t} style={[s.item, { marginBottom: 5 }]}>
              <View style={[s.marcador, { backgroundColor: LILAS }]} />
              <Text style={{ flex: 1, fontSize: 8.8, lineHeight: 1.4 }}>{t}</Text>
            </View>
          ))}
        </View>
        <Rodape ferramenta={ferramenta} />
      </Page>

      <Page size="A4" style={[s.pagina, { paddingTop: 36 }]}>
        <View style={s.corpo}>
          <View style={[s.veredito, { alignItems: 'stretch' }]}>
            <View style={{ width: 210 }}>
              <Text style={s.rotulo}>
                Meta {r.proximoAno} · {NOME_CENARIO[cenario]}
              </Text>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 24, color: LILAS, marginTop: 4 }}>{fmt(anualProx)}</Text>
              <Text style={[s.detalhe, { fontSize: 8.5 }]}>
                {sinal(anualProx / Math.max(r.fechamentoAtual, 1) - 1)} sobre o fechamento previsto de {r.anoAtual}
              </Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 14, borderLeftWidth: 1, borderLeftColor: LINHA, justifyContent: 'center' }}>
              {(['conservador', 'tendencia', 'agressivo'] as const).map((c) => (
                <View key={c} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2.5 }}>
                  <Text style={{ fontSize: 9, color: c === cenario ? NAVY : CINZA, fontWeight: c === cenario ? 600 : 400 }}>{NOME_CENARIO[c]}</Text>
                  <Text style={{ fontSize: 9, color: c === cenario ? NAVY : CINZA, fontWeight: c === cenario ? 600 : 400 }}>{fmt(r.cenarios[c])}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={s.secao}>Meta mês a mês {r.proximoAno}</Text>
          <View style={{ flexDirection: 'row', backgroundColor: LILAS_CLARO, borderRadius: 6, paddingVertical: 6, paddingHorizontal: 8 }}>
            {['Mês', 'Peso', `Meta ${r.proximoAno}`, 'Acumulada', `${r.anoAtual} (real/prev.)`].map((h, i) => (
              <Text key={h} style={{ flex: i === 0 ? 1.2 : 1, fontSize: 8, fontWeight: 600, textAlign: i === 0 ? 'left' : 'right' }}>
                {h}
              </Text>
            ))}
          </View>
          {plano.map((l) => {
            const atual = r.acompanhamento[l.mes];
            return (
              <View key={l.mes} style={{ flexDirection: 'row', paddingVertical: 5.5, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: LINHA }}>
                <Text style={{ flex: 1.2, fontSize: 9, fontWeight: 600 }}>{MESES[l.mes]}</Text>
                <Text style={{ flex: 1, fontSize: 9, textAlign: 'right', color: l.indice >= 1.1 ? MENTA_ESCURO : l.indice <= 0.9 ? VERMELHO : CINZA }}>{pct(l.peso, 1)}</Text>
                <Text style={{ flex: 1, fontSize: 9, textAlign: 'right', fontWeight: 600 }}>{fmt(l.meta)}</Text>
                <Text style={{ flex: 1, fontSize: 9, textAlign: 'right', color: CINZA }}>{fmt(l.metaAcum)}</Text>
                <Text style={{ flex: 1, fontSize: 9, textAlign: 'right', color: atual.real != null ? NAVY : AMBAR }}>
                  {atual.real != null ? fmt(atual.real) : `${fmt(atual.previsto ?? 0)}*`}
                </Text>
              </View>
            );
          })}
          <View style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 8 }}>
            <Text style={{ flex: 1.2, fontSize: 9.5, fontFamily: 'Jakarta', fontWeight: 700 }}>Total</Text>
            <Text style={{ flex: 1, fontSize: 9.5, textAlign: 'right' }}>100%</Text>
            <Text style={{ flex: 1, fontSize: 9.5, textAlign: 'right', fontFamily: 'Jakarta', fontWeight: 700 }}>{fmt(anualProx)}</Text>
            <Text style={{ flex: 1 }} />
            <Text style={{ flex: 1, fontSize: 9.5, textAlign: 'right', fontWeight: 600, color: AMBAR }}>{fmt(r.fechamentoAtual)}</Text>
          </View>
          <Text style={{ fontSize: 7.5, color: CINZA }}>* previsão dos meses de {r.anoAtual} que ainda não fecharam, no ritmo do ano.</Text>

          <Text style={[s.secao, { marginTop: 16 }]}>Histórico usado</Text>
          {r.anos.map((a, i) => (
            <View key={a.ano} style={s.linhaTabela}>
              <Text style={{ color: CINZA }}>{a.ano}</Text>
              <Text style={{ fontWeight: 600 }}>
                {fmt(r.totais[i])}
                {i > 0 ? `  (${sinal(r.totais[i] / r.totais[i - 1] - 1)})` : ''}
              </Text>
            </View>
          ))}

          <Text style={[s.secao, { marginTop: 16 }]}>Como calculamos</Text>
          <Text style={{ fontSize: 8.3, color: CINZA, lineHeight: 1.5 }}>
            A tendência é a média móvel centrada de 12 meses (2x12), que tira o efeito da sazonalidade. O peso de cada mês é a média, em todos os anos, de quanto o mês ficou acima ou abaixo da tendência (sem os
            pontos fora da curva). O fechamento de {r.anoAtual} soma o realizado com a previsão dos meses que faltam (tendência × sazonalidade, no ritmo do ano). A meta de {r.proximoAno} vem da regressão dos totais
            anuais, incluindo o fechamento previsto de {r.anoAtual}.
          </Text>
        </View>
        <Rodape ferramenta={ferramenta} />
      </Page>

      <PaginaUpdo origem={origem} zap={zap} />
    </Document>
  );
}
