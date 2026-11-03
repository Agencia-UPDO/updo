import { Circle, Document, G, Image, Line, Page, Path, Polygon, Svg, Text, View } from '@react-pdf/renderer';
import { siteConfig } from '@/config/site';
import { CINZA, FUNDO, LILAS, LINHA, MENTA_ESCURO, NAVY, PaginaUpdo, Rodape, registrarFontes, s } from '@/novo/components/calculadora/relatorio-pdf';
import { type Entradas, type Notas, DICAS_SENTIDO, ICONE_DESENHO, SENTIDOS, TIPOS, calcular, leitura } from './calculo';

// Análise dos 5 sentidos em PDF (A4): o índice, o radar com as marcas, o placar, a leitura, as dicas e a página final da UPDO.

const VERMELHO = '#d6372b';
const AMBAR = '#d48a00';
const CORES_MARCA = ['#10c49c', LILAS, '#f59e0b'];
const COR_FAIXA = { verde: MENTA_ESCURO, amarelo: AMBAR, vermelho: VERMELHO } as const;

// Radar desenhado em SVG: 5 pontas (uma por sentido), grade de 2 em 2 pontos e uma forma por marca
function Radar({ marcas }: { marcas: { nome: string; notas: Notas }[] }) {
  const L = 230;
  const cx = L / 2;
  const cy = L / 2 + 6;
  const raio = 78;
  const ponto = (i: number, v: number) => {
    const a = -Math.PI / 2 - (i * 2 * Math.PI) / 5;
    return [cx + Math.cos(a) * raio * (v / 10), cy + Math.sin(a) * raio * (v / 10)];
  };
  const poligono = (v: (i: number) => number) => SENTIDOS.map((_, i) => ponto(i, v(i)).join(',')).join(' ');
  return (
    <Svg width={L} height={L} viewBox={`0 0 ${L} ${L}`}>
      {[2, 4, 6, 8, 10].map((n) => (
        <Polygon key={n} points={poligono(() => n)} stroke={LINHA} strokeWidth={0.8} fill={n === 10 ? '#fafbfd' : 'none'} />
      ))}
      {SENTIDOS.map((_, i) => {
        const [x, y] = ponto(i, 10);
        return <Line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={LINHA} strokeWidth={0.8} />;
      })}
      {marcas
        .map((m, k) => ({ m, k }))
        .reverse()
        .map(({ m, k }) => (
          <G key={m.nome + k}>
            <Polygon points={poligono((i) => m.notas[SENTIDOS[i].id])} stroke={CORES_MARCA[k]} strokeWidth={k === 0 ? 2.2 : 1.5} fill={CORES_MARCA[k]} fillOpacity={k === 0 ? 0.25 : 0.12} />
            {SENTIDOS.map((sen, i) => {
              const [x, y] = ponto(i, m.notas[sen.id]);
              return <Circle key={sen.id} cx={x} cy={y} r={2.6} fill="#ffffff" stroke={CORES_MARCA[k]} strokeWidth={1.6} />;
            })}
          </G>
        ))}
      {SENTIDOS.map((sen, i) => {
        const [x, y] = ponto(i, 13.4);
        const d = ICONE_DESENHO[sen.id];
        return (
          <G key={sen.id}>
            <G transform={`translate(${x - 6}, ${y - 15}) scale(0.5)`}>
              {d.paths.map((p) => (
                <Path key={p} d={p} stroke={LILAS} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              ))}
              {d.circulos.map(([cx2, cy2, r2]) => (
                <Circle key={`${cx2}-${cy2}`} cx={cx2} cy={cy2} r={r2} stroke={LILAS} strokeWidth={2.2} fill="none" />
              ))}
            </G>
            <Text x={x} y={y + 6} style={{ fontSize: 8.5, fontWeight: 600 }} textAnchor="middle" fill={NAVY}>
              {sen.nome}
            </Text>
          </G>
        );
      })}
    </Svg>
  );
}

export function RelatorioSentidosPdf({ e, origem, nome }: { e: Entradas; origem: string; nome?: string }) {
  registrarFontes(origem);
  const r = calcular(e);
  const frases = leitura(e, r);
  const cor = COR_FAIXA[r.faixa.cor];
  const marcas = [{ nome: r.nome, notas: e.notas }, ...r.concorrentes.map((c) => ({ nome: c.nome, notas: c.notas }))];
  const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const zap = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Olá! Fiz a análise dos 5 sentidos da UPDO e quero ajuda para melhorar a experiência da minha marca.')}`;
  const tipo = TIPOS.find((t) => t.id === e.tipo);

  return (
    <Document title={`Análise dos 5 sentidos · ${r.nome} · UPDO`} author="UPDO" creator="updo.com.br">
      <Page size="A4" style={s.pagina}>
        <View style={[s.topo, { paddingTop: 22, paddingBottom: 18 }]}>
          <View style={s.topoLinha}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={`${origem}/calculadora/logo-branca.png`} style={s.logo} />
            <Text style={s.etiqueta}>Neuromarketing</Text>
          </View>
          <Text style={[s.titulo, { marginTop: 12 }]}>Análise dos 5 sentidos</Text>
          <Text style={[s.subtitulo, { color: '#ffffff', fontSize: 12, marginTop: 4 }]}>
            {r.nome} · {tipo?.nome}
          </Text>
          <Text style={s.subtitulo}>
            {nome ? `Preparado para ${nome} · ` : ''}
            {hoje}
          </Text>
        </View>

        <View style={[s.corpo, { paddingTop: 16 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: cor, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 14, marginBottom: 10 }}>
            <View style={{ width: 70, alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 30, color: cor }}>{r.indice}</Text>
              <Text style={{ fontSize: 7.5, color: CINZA }}>de 100</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 12.5, color: cor }}>Índice sensorial: {r.faixa.nome.replace('Experiência sensorial ', '')}</Text>
              <Text style={{ fontSize: 9, color: CINZA, marginTop: 3, lineHeight: 1.4 }}>{r.faixa.texto}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <Radar marcas={marcas} />
            <View style={{ flex: 1, paddingLeft: 12 }}>
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: LINHA, paddingBottom: 4 }}>
                <Text style={{ flex: 1, fontSize: 8, color: CINZA }}>Sentido</Text>
                {marcas.map((m, k) => (
                  <Text key={m.nome + k} style={{ width: 62, fontSize: 8, color: CORES_MARCA[k], fontWeight: 600, textAlign: 'right' }}>
                    {m.nome.length > 14 ? `${m.nome.slice(0, 13)}…` : m.nome}
                  </Text>
                ))}
              </View>
              {SENTIDOS.map((sen) => (
                <View key={sen.id} style={{ flexDirection: 'row', paddingVertical: 4, borderBottomWidth: 1, borderBottomColor: LINHA }}>
                  <Text style={{ flex: 1, fontSize: 9 }}>{sen.nome}</Text>
                  {marcas.map((m, k) => {
                    const d = k === 0 ? 0 : e.notas[sen.id] - m.notas[sen.id];
                    return (
                      <Text key={m.nome + k} style={{ width: 62, fontSize: 9, fontWeight: k === 0 ? 600 : 400, textAlign: 'right', color: k === 0 ? NAVY : CINZA }}>
                        {m.notas[sen.id]}
                        {k > 0 ? <Text style={{ color: d > 0 ? MENTA_ESCURO : d < 0 ? VERMELHO : CINZA, fontWeight: 600 }}>{d > 0 ? ` (+${d})` : d < 0 ? ` (−${-d})` : ' (=)'}</Text> : null}
                      </Text>
                    );
                  })}
                </View>
              ))}
              <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                <Text style={{ flex: 1, fontSize: 9, fontWeight: 600 }}>Índice</Text>
                {[r.indice, ...r.concorrentes.map((c) => c.indice)].map((v, k) => (
                  <Text key={k} style={{ width: 62, fontSize: 9, fontWeight: 600, textAlign: 'right' }}>
                    {v}
                  </Text>
                ))}
              </View>
              {r.concorrentes.length ? <Text style={{ fontSize: 7.5, color: CINZA, marginTop: 5 }}>Notas dos concorrentes: percepção de quem preencheu.</Text> : null}
            </View>
          </View>

          <Text style={s.secao}>O que o resultado diz</Text>
          {frases.map((t) => (
            <View key={t} style={[s.item, { marginBottom: 4 }]}>
              <View style={[s.marcador, { backgroundColor: LILAS }]} />
              <Text style={{ flex: 1, fontSize: 9, lineHeight: 1.4 }}>{t}</Text>
            </View>
          ))}

          {r.melhorar.length ? (
            <>
              <Text style={[s.secao, { marginTop: 8 }]}>Como ativar os sentidos mais fracos</Text>
              {r.melhorar.map((sen) => (
                <View key={sen.id} wrap={false} style={{ backgroundColor: FUNDO, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12, marginBottom: 6 }}>
                  <Text style={{ fontFamily: 'Jakarta', fontWeight: 700, fontSize: 10 }}>
                    {sen.nome} <Text style={{ fontFamily: 'Inter', fontWeight: 400, color: CINZA, fontSize: 8.5 }}>· nota {e.notas[sen.id]}</Text>
                  </Text>
                  {DICAS_SENTIDO[sen.id][e.tipo].map((d) => (
                    <Text key={d} style={{ fontSize: 8.6, lineHeight: 1.4, marginTop: 2.5 }}>
                      • {d}
                    </Text>
                  ))}
                </View>
              ))}
            </>
          ) : null}
        </View>
        <Rodape ferramenta="Análise dos 5 sentidos" />
      </Page>
      <PaginaUpdo origem={origem} zap={zap} />
    </Document>
  );
}
