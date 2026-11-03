import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import { siteConfig } from '@/config/site';
import { CINZA, FUNDO, LINHA, MENTA_ESCURO, NAVY, PaginaUpdo, Rodape, registrarFontes, s } from '@/novo/components/calculadora/relatorio-pdf';
import { type Entradas, calcular, leitura, roiFrase, roiMultiplo } from './calculo';

// Resultado da calculadora de ROI em PDF (A4, 2 páginas): a leitura, o ROI e o ROAS da campanha, os números na vida do cliente
// e a página final da UPDO.

const VERMELHO = '#d6372b';
const AMBAR = '#b45309';
const COR_LEITURA = { verde: MENTA_ESCURO, amarelo: AMBAR, vermelho: VERMELHO } as const;

const brl = (v: number | null, casas = 0) =>
  v != null && Number.isFinite(v) ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casas, maximumFractionDigits: casas }) : '—';
const num = (v: number, casas = 1) => (Number.isFinite(v) ? v.toLocaleString('pt-BR', { maximumFractionDigits: casas }) : '—');
const pct = (v: number, casas = 0) => (Number.isFinite(v) ? `${(v * 100).toLocaleString('pt-BR', { maximumFractionDigits: casas })}%` : '—');
const vezes = (v: number | null) => (v == null || !Number.isFinite(v) ? '—' : `${v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}x`);
const corValor = (v: number | null) => (v == null ? NAVY : v >= 0 ? MENTA_ESCURO : VERMELHO);

function Cartao({ rotulo, valor, detalhe, cor }: { rotulo: string; valor: string; detalhe?: string; cor?: string }) {
  return (
    <View style={s.cartao}>
      <View style={[s.cartaoDentro, { minHeight: 0, paddingVertical: 9 }]}>
        <Text style={s.rotulo}>{rotulo}</Text>
        <Text style={[s.valor, cor ? { color: cor } : {}]}>{valor}</Text>
        {detalhe ? <Text style={s.detalhe}>{detalhe}</Text> : null}
      </View>
    </View>
  );
}

// Recomendações em linguagem simples
function dicas(r: ReturnType<typeof calcular>) {
  const lista: string[] = [];
  if (r.roasEmpate != null) lista.push(`Com margem de ${pct(r.margemPct, 1)}, a campanha empata com ROAS de ${vezes(r.roasEmpate)}. Use esse número como piso: abaixo dele, cada venda paga menos do que custou.`);
  if (r.direto !== 'lucro' && r.temVida && r.naVida === 'lucro') lista.push('O lucro depende da recompra. Garanta que o cliente volte (relacionamento, ofertas de recompra, assinatura) e tenha caixa para esperar esse retorno.');
  if (r.naVida === 'prejuizo') lista.push('Para virar o jogo: baixar o custo por venda (melhor segmentação, página e atendimento que convertem mais), subir o ticket com combos e upsell, ou melhorar a margem.');
  if (r.ltvCac != null && r.temVida && r.ltvCac < 3) lista.push(`O cliente devolve ${num(r.ltvCac)} vezes o que custou. O saudável é 3 ou mais: vale reduzir o CAC ou aumentar a recompra.`);
  if (r.direto === 'lucro') lista.push('A campanha se paga na primeira venda. Dá para testar mais investimento, acompanhando se o ROAS se mantém acima do ponto de empate.');
  return lista;
}

export function RelatorioRoiPdf({ e, origem, nome }: { e: Entradas; origem: string; nome?: string }) {
  registrarFontes(origem);
  const r = calcular(e);
  const l = leitura(r);
  const cor = COR_LEITURA[l.cor];
  const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const zap = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Olá! Fiz a calculadora de ROI da UPDO e quero ajuda para melhorar o retorno das minhas campanhas.')}`;
  const entradas: [string, string][] = [
    ['Investimento', brl(r.inv)],
    ['Vendas', num(r.vendas, 0)],
    ['Faturamento', brl(r.faturamento)],
    ['Margem', e.margemModo === '%' ? `${num(e.margem)}% do faturamento` : `${brl(e.margem, 2)} por venda`],
    ['Compras por cliente', r.temVida ? `${num(r.vezes)} ao todo` : 'uma'],
  ];

  return (
    <Document title="ROI e ROAS da campanha · UPDO" author="UPDO" creator="updo.com.br">
      <Page size="A4" style={s.pagina}>
        <View style={[s.topo, { paddingTop: 22, paddingBottom: 18 }]}>
          <View style={s.topoLinha}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={`${origem}/calculadora/logo-branca.png`} style={s.logo} />
            <Text style={s.etiqueta}>Retorno da campanha</Text>
          </View>
          <Text style={[s.titulo, { marginTop: 12 }]}>ROI e ROAS da campanha</Text>
          <Text style={s.subtitulo}>
            {nome ? `Preparado para ${nome} · ` : ''}
            {hoje}
          </Text>
        </View>

        <View style={[s.corpo, { paddingTop: 18 }]}>
          <View style={{ borderWidth: 1.5, borderColor: cor, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 14, marginBottom: 10 }}>
            <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 14, color: cor }}>{l.titulo}</Text>
            <Text style={{ fontSize: 9.5, color: CINZA, marginTop: 4, lineHeight: 1.45 }}>{l.texto}</Text>
          </View>

          <View style={[s.veredito, { alignItems: 'stretch', paddingVertical: 12, marginBottom: 10 }]}>
            <View style={{ flex: 1 }}>
              <Text style={s.rotulo}>ROI da campanha</Text>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 26, color: corValor(r.roi), marginTop: 4 }}>{roiMultiplo(r.roi)}</Text>
              <Text style={[s.detalhe, { fontSize: 8.5 }]}>{roiFrase(r.roi)}</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 14, borderLeftWidth: 1, borderLeftColor: LINHA }}>
              <Text style={s.rotulo}>ROAS da campanha</Text>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 26, color: NAVY, marginTop: 4 }}>{vezes(r.roas)}</Text>
              <Text style={[s.detalhe, { fontSize: 8.5 }]}>
                {brl(r.faturamento)} de faturamento para {brl(r.inv)} investidos
              </Text>
            </View>
          </View>

          <View style={s.grade}>
            <Cartao rotulo={r.lucro >= 0 ? 'Lucro da campanha' : 'Prejuízo da campanha'} valor={brl(Math.abs(r.lucro))} cor={corValor(r.lucro)} detalhe={`margem de ${brl(r.margemTotal)} menos o investimento`} />
            <Cartao rotulo="ROAS para empatar" valor={vezes(r.roasEmpate)} detalhe={`com margem de ${pct(r.margemPct, 1)}`} />
            <Cartao rotulo="Custo por cliente (CAC)" valor={brl(r.cac, 2)} detalhe={`${num(r.vendas, 0)} vendas`} />
            <Cartao rotulo="Ticket médio" valor={brl(r.ticket, 2)} detalhe="faturamento ÷ vendas" />
            {r.temVida ? <Cartao rotulo="LTV (margem)" valor={brl(r.ltv, 2)} detalhe={`por cliente, em ${num(r.vezes)} compras`} /> : null}
            {r.temVida && r.ltvCac != null ? <Cartao rotulo="LTV : CAC" valor={`${num(r.ltvCac)} : 1`} detalhe="o saudável é 3 ou mais" /> : null}
          </View>

          {r.temVida ? (
            <View style={{ backgroundColor: FUNDO, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 14, marginBottom: 12 }}>
              <Text style={[s.secao, { marginBottom: 6 }]}>Na vida do cliente ({num(r.vezes)} compras)</Text>
              <View style={{ flexDirection: 'row' }}>
                {[
                  ['ROI na vida', roiMultiplo(r.roiVida), corValor(r.roiVida)],
                  ['ROAS na vida', vezes(r.roasVida), NAVY],
                  [r.lucroVida >= 0 ? 'Lucro na vida' : 'Prejuízo na vida', brl(Math.abs(r.lucroVida)), corValor(r.lucroVida)],
                ].map(([rot, val, c]) => (
                  <View key={rot} style={{ flex: 1 }}>
                    <Text style={s.rotulo}>{rot}</Text>
                    <Text style={[s.valor, { color: c }]}>{val}</Text>
                  </View>
                ))}
              </View>
              <Text style={[s.detalhe, { fontSize: 8.5, marginTop: 6 }]}>{roiFrase(r.roiVida, ' na vida do cliente')}</Text>
            </View>
          ) : null}

          <Text style={s.secao}>O que fazer com esses números</Text>
          {dicas(r).slice(0, 3).map((t) => (
            <View key={t} style={s.item}>
              <View style={[s.marcador, { backgroundColor: cor }]} />
              <Text style={{ flex: 1, fontSize: 8.8, lineHeight: 1.4 }}>{t}</Text>
            </View>
          ))}

          <Text style={[s.secao, { marginTop: 4 }]}>Os números informados</Text>
          <View wrap={false} style={{ flexDirection: 'row', borderWidth: 1, borderColor: LINHA, borderRadius: 10 }}>
            {entradas.map(([k, v], i) => (
              <View key={k} style={{ flex: 1, paddingVertical: 8, paddingHorizontal: 9, borderLeftWidth: i ? 1 : 0, borderLeftColor: LINHA }}>
                <Text style={{ fontSize: 7.5, color: CINZA }}>{k}</Text>
                <Text style={{ fontSize: 8.8, fontWeight: 600, marginTop: 3 }}>{v}</Text>
              </View>
            ))}
          </View>
        </View>
        <Rodape ferramenta="Calculadora de ROI e ROAS" />
      </Page>
      <PaginaUpdo origem={origem} zap={zap} />
    </Document>
  );
}
