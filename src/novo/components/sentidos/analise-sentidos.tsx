'use client';

import { cn } from '@/novo/utils/cn';
import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import { avisarFerramenta, CadastroFerramenta, jaLiberado, lerCadastro, pedirAjuda } from '@/novo/components/ferramentas/cadastro';
import { Dica } from '@/novo/components/ferramentas/dica';
import { COR, Grafico } from '@/novo/components/ferramentas/grafico';
import { COMECAR_COM_EXEMPLO } from '@/novo/data/ferramentas';
import { Coffee, Eye, Flower2, Hand, Lightbulb, Music, Plus, RotateCcw, Wand2, X, type LucideIcon } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import AcoesFerramenta from '@/novo/components/ferramentas/acoes-ferramenta';
import {
  type Concorrente,
  type Entradas,
  type Notas,
  type Resultado,
  type SentidoId,
  type TipoNegocio,
  DICAS_SENTIDO,
  EXEMPLO,
  MAX_CONCORRENTES,
  SENTIDOS,
  TIPOS,
  VAZIO,
  calcular,
  iconeSvg,
  leitura,
  nomeConcorrente,
  notaDasRespostas,
  novoConcorrente,
} from './calculo';

const FORM_NAME = 'analise-5-sentidos';
const PAGINA = '/ferramentas/analise-5-sentidos';
// As notas da pessoa ficam salvas no navegador para ela voltar e ajustar
const CHAVE_DADOS = 'updo-5-sentidos';

const ICONE_SENTIDO: Record<SentidoId, LucideIcon> = { visao: Eye, toque: Hand, cheiro: Flower2, som: Music, gosto: Coffee };

// Cores das marcas no gráfico e no placar: a sua em verde, os concorrentes em lilás e âmbar
const CORES_MARCA = [COR.mentaEscuro, COR.lilas, COR.ambar];
const PONTO_MARCA = ['bg-primary-500', 'bg-lilas-500', 'bg-amber-400'];

const inputClass =
  'border-stroke-3 text-tagline-1 text-secondary placeholder:text-secondary/40 focus:border-secondary w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors';
const labelClass = 'text-tagline-2 text-secondary mb-2 block font-medium';

const DICAS = {
  indice: 'O índice sensorial é a soma das 5 notas sobre 50, de 0 a 100. Quanto maior, mais a marca mexe com os sentidos e com a emoção do cliente.',
  nota: 'Dê a nota pensando no cliente: o quanto esse sentido é ativado quando ele entra em contato com a sua marca (loja, produto, site, atendimento).',
  concorrente: 'As notas dos concorrentes são a sua percepção, como cliente. Para ficar justo, use o mesmo critério que usou para a sua marca.',
};

const CORES_FAIXA = {
  verde: { caixa: 'border-primary-500 bg-primary-50', texto: 'text-primary-800' },
  amarelo: { caixa: 'border-amber-400 bg-amber-50', texto: 'text-amber-700' },
  vermelho: { caixa: 'border-red-400 bg-red-50', texto: 'text-red-700' },
} as const;

// Um sentido: ícone, nota de 0 a 10 no deslizante, o que 0, 5 e 10 querem dizer e as perguntas que sugerem a nota
function LinhaSentido({ id, valor, onChange, compacto = false }: { id: SentidoId; valor: number; onChange: (v: number) => void; compacto?: boolean }) {
  const s = SENTIDOS.find((x) => x.id === id)!;
  const Icone = ICONE_SENTIDO[id];
  const [ajuda, setAjuda] = useState(false);
  const [respostas, setRespostas] = useState<(boolean | null)[]>([null, null, null]);
  const responder = (i: number, sim: boolean) => {
    const novas = respostas.map((r, j) => (j === i ? sim : r));
    setRespostas(novas);
    onChange(notaDasRespostas(novas.filter(Boolean).length, novas.length));
  };
  return (
    <div className={cn(!compacto && 'border-stroke-4 rounded-2xl border p-4')}>
      <div className="flex items-center gap-3">
        <span className={cn('bg-lilas-100 text-lilas-700 flex shrink-0 items-center justify-center rounded-xl', compacto ? 'size-8' : 'size-10')}>
          <Icone className={compacto ? 'size-4' : 'size-5'} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <label htmlFor={`${id}-${compacto ? 'c' : 'm'}`} className="text-tagline-1 text-secondary flex-1 font-semibold">
          {s.nome}
        </label>
        <span className="font-titulo text-secondary text-[1.25rem] font-semibold tabular-nums">
          {valor}
          <span className="text-secondary/40 text-tagline-2 font-medium">/10</span>
        </span>
      </div>
      <input
        id={`${id}-${compacto ? 'c' : 'm'}`}
        type="range"
        min={0}
        max={10}
        step={1}
        value={valor}
        onChange={(ev) => onChange(Number(ev.target.value))}
        className="accent-lilas-500 mt-3 w-full cursor-pointer"
      />
      {!compacto && (
        <>
          <div className="text-secondary/55 mt-1 grid grid-cols-2 gap-2 text-[0.6875rem] leading-snug sm:grid-cols-3 sm:text-[0.75rem]">
            <span>0: {s.zero}</span>
            <span className="text-center max-sm:hidden">5: {s.cinco}</span>
            <span className="text-right">10: {s.dez}</span>
          </div>
          <button type="button" onClick={() => setAjuda((a) => !a)} className="text-tagline-2 text-lilas-700 mt-3 inline-flex items-center gap-1.5 font-medium underline-offset-2 hover:underline">
            <Wand2 className="size-3.5" /> {ajuda ? 'Fechar as perguntas' : 'Me ajude a dar a nota'}
          </button>
          {ajuda && (
            <ul className="bg-background-3 mt-3 space-y-3 rounded-xl p-4">
              {s.perguntas.map((p, i) => (
                <li key={p} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="text-tagline-2 text-secondary">{p}</span>
                  <span role="radiogroup" aria-label={p} className="border-stroke-3 flex shrink-0 self-start rounded-lg border bg-white p-0.5 sm:self-auto">
                    {[
                      { rotulo: 'Sim', v: true },
                      { rotulo: 'Não', v: false },
                    ].map((o) => (
                      <button
                        key={o.rotulo}
                        type="button"
                        role="radio"
                        aria-checked={respostas[i] === o.v}
                        onClick={() => responder(i, o.v)}
                        className={cn('text-tagline-3 rounded-md px-3 py-1 font-medium transition-colors', respostas[i] === o.v ? 'bg-secondary text-white' : 'text-secondary/60 hover:text-secondary')}
                      >
                        {o.rotulo}
                      </button>
                    ))}
                  </span>
                </li>
              ))}
              <li className="text-tagline-3 text-secondary/55">A nota muda conforme as respostas. Depois você pode ajustar no deslizante.</li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}

// Radar (pentágono) com uma forma por marca
function GraficoRadar({ e, r }: { e: Entradas; r: Resultado }) {
  const option = useMemo(() => {
    const marcas = [{ nome: r.nome, notas: e.notas }, ...r.concorrentes.map((c) => ({ nome: c.nome, notas: c.notas }))];
    // No celular o radar fica menor e os nomes com ícone menores, para nada ser cortado nas bordas
    const estreito = typeof window !== 'undefined' && window.innerWidth < 640;
    return {
      animationDuration: 600,
      legend: { data: marcas.map((m) => m.nome), bottom: 0, left: 'center', icon: 'circle', itemWidth: 10, itemHeight: 10, itemGap: 18, textStyle: { color: COR.navy, fontSize: 12 } },
      tooltip: {
        trigger: 'item',
        backgroundColor: '#07111f',
        borderWidth: 0,
        padding: [10, 14],
        textStyle: { color: '#ffffff', fontSize: 12 },
        extraCssText: 'border-radius:12px;',
      },
      radar: {
        center: ['50%', '48%'],
        radius: estreito ? '50%' : '62%',
        indicator: SENTIDOS.map((s) => ({ name: s.id, max: 10 })),
        splitNumber: 5,
        // Nome de cada ponta com o ícone do sentido ao lado
        axisName: {
          formatter: (id: string) => `{${id}|} {nome|${SENTIDOS.find((s) => s.id === id)?.nome}}`,
          rich: {
            nome: { color: COR.navy, fontSize: estreito ? 11 : 12, fontWeight: 600, fontFamily: 'Inter, sans-serif', padding: [0, 0, 0, 2] },
            ...Object.fromEntries(SENTIDOS.map((s) => [s.id, { height: estreito ? 14 : 16, width: estreito ? 14 : 16, backgroundColor: { image: iconeSvg(s.id, '#4d58e8') } }])),
          },
        },
        splitLine: { lineStyle: { color: COR.linha } },
        splitArea: { areaStyle: { color: ['#ffffff', '#f7f8fb'] } },
        axisLine: { lineStyle: { color: COR.linha } },
      },
      series: [
        {
          type: 'radar',
          symbol: 'circle',
          symbolSize: 7,
          data: marcas.map((m, i) => ({
            name: m.nome,
            value: SENTIDOS.map((s) => m.notas[s.id]),
            lineStyle: { color: CORES_MARCA[i], width: i === 0 ? 3 : 2 },
            itemStyle: { color: '#ffffff', borderColor: CORES_MARCA[i], borderWidth: 2.5 },
            areaStyle: { color: CORES_MARCA[i], opacity: i === 0 ? 0.28 : 0.14 },
            z: 10 - i,
          })),
        },
      ],
    };
  }, [e, r]);
  return <Grafico option={option} altura={360} rotulo={`Notas de ${r.nome} nos 5 sentidos${r.concorrentes.length ? ', comparadas com os concorrentes' : ''}`} />;
}

// O resultado: índice sensorial, radar, placar contra os concorrentes, leitura e dicas para os sentidos fracos
function Resultados({ e, r }: { e: Entradas; r: Resultado }) {
  const f = CORES_FAIXA[r.faixa.cor];
  const frases = leitura(e, r);
  return (
    <div className="space-y-4">
      <div className={cn('flex items-center gap-5 rounded-3xl border-2 p-5 md:p-6', f.caixa)}>
        <div className="shrink-0 text-center">
          <p className={cn('font-titulo text-[2.75rem] leading-none font-semibold tabular-nums', f.texto)}>{r.indice}</p>
          <p className="text-tagline-3 text-secondary/55 mt-1">de 100</p>
        </div>
        <div>
          <p className={cn('font-titulo text-tagline-1 font-semibold', f.texto)}>
            Índice sensorial: {r.faixa.nome.replace('Experiência sensorial ', '')}
            <Dica texto={DICAS.indice} />
          </p>
          <p className="text-tagline-2 text-secondary/75 mt-1">{r.faixa.texto}</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-4 md:p-6">
        <GraficoRadar e={e} r={r} />
      </div>

      {r.concorrentes.length > 0 && (
        <div className="rounded-3xl bg-white p-4 sm:p-5 md:p-6">
          <table className="text-tagline-2 w-full">
            <thead>
              <tr className="text-secondary/60 text-left">
                <th className="pb-2 font-medium">Sentido</th>
                {[{ nome: r.nome }, ...r.concorrentes].map((m, i) => (
                  <th key={m.nome + i} className="pb-2 text-right font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <span className={cn('size-2 rounded-full', PONTO_MARCA[i])} />
                      <span className="max-w-[4.5rem] truncate sm:max-w-[9rem]">{m.nome}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-stroke-4 divide-y">
              {SENTIDOS.map((s) => (
                <tr key={s.id}>
                  <td className="text-secondary py-2 font-medium">{s.nome}</td>
                  <td className="text-secondary py-2 text-right font-semibold tabular-nums">{e.notas[s.id]}</td>
                  {r.concorrentes.map((c) => {
                    const d = e.notas[s.id] - c.notas[s.id];
                    return (
                      <td key={c.id} className="py-2 text-right tabular-nums">
                        <span className="text-secondary/70">{c.notas[s.id]}</span>{' '}
                        <span className={cn('ml-0.5 rounded-md sm:ml-1 px-1 py-0.5 text-[0.6875rem] font-semibold sm:px-1.5 sm:text-[0.75rem]', d > 0 ? 'bg-primary-50 text-primary-800' : d < 0 ? 'bg-red-50 text-red-700' : 'bg-background-3 text-secondary/50')}>
                          {d > 0 ? `+${d}` : d < 0 ? `−${Math.abs(d)}` : '='}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr>
                <td className="text-secondary pt-3 font-semibold">Índice</td>
                <td className="text-secondary pt-3 text-right font-semibold tabular-nums">{r.indice}</td>
                {r.concorrentes.map((c) => (
                  <td key={c.id} className="text-secondary/70 pt-3 text-right font-semibold tabular-nums">
                    {c.indice}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className="text-tagline-3 text-secondary/55 mt-3">As notas dos concorrentes são a sua percepção.</p>
        </div>
      )}

      <div className="rounded-3xl bg-white p-5 md:p-6">
        <p className="font-titulo text-heading-6 text-secondary font-medium">O que o resultado diz</p>
        <ul className="mt-3 space-y-2">
          {frases.map((t) => (
            <li key={t} className="text-tagline-2 text-secondary flex gap-2.5">
              <span className="bg-lilas-500 mt-2 size-1.5 shrink-0 rounded-full" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {r.melhorar.length > 0 && (
        <div className="rounded-3xl bg-white p-5 md:p-6">
          <p className="font-titulo text-heading-6 text-secondary font-medium">Como ativar os sentidos mais fracos</p>
          <p className="text-tagline-2 mt-1">Ideias práticas para {TIPOS.find((t) => t.id === e.tipo)?.nome.toLowerCase()}, começando pelo sentido com a nota mais baixa.</p>
          <div className="mt-4 space-y-3">
            {r.melhorar.map((s) => {
              const Icone = ICONE_SENTIDO[s.id];
              return (
                <div key={s.id} className="bg-background-3 rounded-2xl p-4">
                  <p className="text-tagline-1 text-secondary flex items-center gap-2 font-semibold">
                    <Icone className="text-lilas-700 size-4" strokeWidth={1.75} aria-hidden="true" />
                    {s.nome} <span className="text-secondary/50 text-tagline-2 font-medium">· nota {e.notas[s.id]}</span>
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {DICAS_SENTIDO[s.id][e.tipo].map((d) => (
                      <li key={d} className="text-tagline-2 text-secondary/80 flex gap-2">
                        <Lightbulb className="text-lilas-500 mt-0.5 size-3.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Resumo que vai para a RD e para o WhatsApp
const resumo = (e: Entradas, r: Resultado) =>
  `Análise 5 sentidos: ${r.nome} (${TIPOS.find((t) => t.id === e.tipo)?.nome}) · índice ${r.indice}/100 · ${SENTIDOS.map((s) => `${s.nome} ${e.notas[s.id]}`).join(', ')}${r.concorrentes.length ? ` · concorrentes: ${r.concorrentes.map((c) => `${c.nome} ${c.indice}`).join(', ')}` : ''}`;

function Acoes({ e, r }: { e: Entradas; r: Resultado }) {
  const [gerando, setGerando] = useState(false);

  const ajuda = () =>
    pedirAjuda({
      formName: 'analise-5-sentidos-quero-ajuda',
      pagePath: PAGINA,
      resumo: `Pediu ajuda pela ${resumo(e, r)}`,
      linhas: [
        'Olá! Fiz a análise dos 5 sentidos da UPDO e quero ajuda no meu marketing.',
        `*Marca:* ${r.nome}`,
        `*Índice sensorial:* ${r.indice}/100`,
        `*Notas:* ${SENTIDOS.map((s) => `${s.nome} ${e.notas[s.id]}`).join(' · ')}`,
      ],
    });

  const baixarPdf = async () => {
    setGerando(true);
    try {
      const [{ pdf }, { RelatorioSentidosPdf }] = await Promise.all([import('@react-pdf/renderer'), import('./relatorio-pdf')]);
      const blob = await pdf(<RelatorioSentidosPdf e={e} origem={window.location.origin} nome={lerCadastro().nome} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'analise-5-sentidos-updo.pdf';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } finally {
      setGerando(false);
    }
  };

  return <AcoesFerramenta onAjuda={ajuda} onPdf={baixarPdf} gerando={gerando} />;
}

export default function AnaliseSentidos() {
  const [e, setE] = useState<Entradas>(COMECAR_COM_EXEMPLO ? EXEMPLO : VAZIO);
  const [carregou, setCarregou] = useState(false);
  const [liberado, setLiberado] = useState(false);
  // O resultado aparece quando a pessoa pede (depois de dar as notas)
  const [verResultado, setVerResultado] = useState(false);

  useEffect(() => {
    // Quem já se cadastrou em alguma ferramenta (neste navegador) vê o resultado direto
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (jaLiberado()) setLiberado(true);
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE_DADOS) ?? 'null') as Entradas | null;
      if (salvo?.notas) {
        setE({ ...VAZIO, ...salvo });
        setVerResultado(true);
      }
    } catch {
      // nada salvo
    }
    setCarregou(true);
  }, []);

  // Salva as notas da pessoa (o exemplo não) a cada mudança
  useEffect(() => {
    if (!carregou) return;
    try {
      if (e === EXEMPLO || e === VAZIO) localStorage.removeItem(CHAVE_DADOS);
      else localStorage.setItem(CHAVE_DADOS, JSON.stringify(e));
    } catch {
      // Sem localStorage: as notas valem só nesta visita
    }
  }, [e, carregou]);

  const r = useMemo(() => calcular(e), [e]);
  const exemplo = e === EXEMPLO;
  const mostrar = verResultado || exemplo;

  // Já cadastrado em outra ferramenta: a conversão desta vai para a RD quando o resultado fica parado na tela por 3 segundos
  useEffect(() => {
    if (!mostrar || !liberado) return;
    const timer = window.setTimeout(() => avisarFerramenta(FORM_NAME, PAGINA, { businessType: TIPOS.find((t) => t.id === e.tipo)?.nome ?? e.tipo, mainPain: resumo(e, r) }), 3000);
    return () => window.clearTimeout(timer);
  }, [mostrar, liberado, e, r]);

  const setNota = (id: SentidoId, v: number) => setE((x) => ({ ...x, notas: { ...x.notas, [id]: v } }));
  const setConcorrente = (cid: string, c: Partial<Concorrente>) => setE((x) => ({ ...x, concorrentes: x.concorrentes.map((k) => (k.id === cid ? { ...k, ...c } : k)) }));
  const setNotaConcorrente = (cid: string, id: SentidoId, v: number) =>
    setE((x) => ({ ...x, concorrentes: x.concorrentes.map((k) => (k.id === cid ? { ...k, notas: { ...k.notas, [id]: v } as Notas } : k)) }));

  return (
    <div className="ferramenta [&_[role=radio]]:cursor-pointer [&_a]:cursor-pointer [&_button:not(:disabled)]:cursor-pointer [&_input[type=range]]:cursor-pointer">
      <section className="relative isolate pt-32 pb-8 md:pt-40 lg:pt-44">
        <div className="main-container">
          <div className="max-w-[760px] space-y-5">
            <div className="border-stroke-3 inline-flex items-center gap-x-2.5 rounded-full border bg-white/70 py-1.5 pr-3.5 pl-2.5">
              <span className="bg-primary-500 ring-primary-500/30 block size-2 shrink-0 rounded-full ring-4" />
              <span className="font-texto text-tagline-2 text-secondary font-medium">Ferramenta gratuita · 3 minutos</span>
            </div>
            <h1>
              Quanto a sua marca <span className="text-lilas-500">mexe com os sentidos</span> do cliente?
            </h1>
            <p>
              O neuromarketing mostra que o cliente compra com emoção, e a emoção passa pelos sentidos. Dê uma nota de 0 a 10 para o quanto a sua marca ativa a visão, o toque, o cheiro, o som e o gosto, compare com os concorrentes e veja onde está a
              oportunidade.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-28">
        <div className="main-container">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 items-start gap-6">
            <div className="col-span-12 space-y-4 lg:col-span-5">
              <div className="rounded-3xl bg-white p-6 md:p-8">
                <h2 className="font-titulo text-heading-6 text-secondary font-medium">A sua marca</h2>
                <div className="mt-5 space-y-5">
                  <div>
                    <label htmlFor="nome" className={labelClass}>
                      Nome da marca, produto ou loja
                    </label>
                    <input id="nome" value={e.nome} onChange={(ev) => setE((x) => ({ ...x, nome: ev.target.value }))} placeholder="Ex.: Café da Praça, Studio Bem-Estar" className={inputClass} />
                  </div>
                  <div>
                    <p className={labelClass}>Como você atende o cliente?</p>
                    <div role="radiogroup" aria-label="Tipo de negócio" className="grid grid-cols-3 gap-2">
                      {TIPOS.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          role="radio"
                          aria-checked={e.tipo === t.id}
                          onClick={() => setE((x) => ({ ...x, tipo: t.id as TipoNegocio }))}
                          className={cn('rounded-xl border-2 px-3 py-2.5 text-left transition-colors', e.tipo === t.id ? 'border-secondary bg-secondary text-white' : 'border-stroke-4 hover:border-stroke-3 bg-background-2')}
                        >
                          <span className="text-tagline-2 block font-semibold">{t.nome}</span>
                          <span className={cn('block text-[0.6875rem] leading-snug', e.tipo === t.id ? 'text-white/60' : 'text-secondary/55')}>{t.exemplos}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className={labelClass}>
                      Nota de cada sentido, de 0 a 10
                      <Dica texto={DICAS.nota} />
                    </p>
                    <div className="space-y-3">
                      {SENTIDOS.map((s) => (
                        <LinhaSentido key={s.id} id={s.id} valor={e.notas[s.id]} onChange={(v) => setNota(s.id, v)} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-tagline-3 text-secondary/55 mt-6">
                  {exemplo ? 'Esse é um exemplo. ' : 'Quer ver como funciona? '}
                  <button type="button" onClick={() => setE(exemplo ? VAZIO : EXEMPLO)} className="text-lilas-700 inline-flex items-center gap-1 font-medium underline-offset-2 hover:underline">
                    {exemplo ? (
                      <>
                        <RotateCcw className="size-3.5" /> Limpar e dar as minhas notas
                      </>
                    ) : (
                      'Preencher com um exemplo'
                    )}
                  </button>
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 md:p-8">
                <h2 className="font-titulo text-heading-6 text-secondary font-medium">
                  Comparar com concorrentes <span className="text-secondary/45 text-tagline-2 font-normal">(opcional)</span>
                  <Dica texto={DICAS.concorrente} />
                </h2>
                <p className="text-tagline-2 mt-1">Dê as notas como se você fosse cliente deles. Até {MAX_CONCORRENTES} concorrentes.</p>
                <div className="mt-4 space-y-4">
                  {e.concorrentes.map((c, i) => (
                    <div key={c.id} className="border-stroke-4 rounded-2xl border p-4">
                      <div className="flex items-center gap-2">
                        <span className={cn('size-2.5 shrink-0 rounded-full', PONTO_MARCA[i + 1])} />
                        <input aria-label="Nome do concorrente" value={c.nome} onChange={(ev) => setConcorrente(c.id, { nome: ev.target.value })} placeholder={nomeConcorrente(c, i)} className={cn(inputClass, 'py-2.5')} />
                        <button
                          type="button"
                          onClick={() => setE((x) => ({ ...x, concorrentes: x.concorrentes.filter((k) => k.id !== c.id) }))}
                          aria-label="Remover concorrente"
                          className="text-secondary/45 hover:text-secondary hover:bg-background-3 flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {SENTIDOS.map((s) => (
                          <LinhaSentido key={s.id} id={s.id} compacto valor={c.notas[s.id]} onChange={(v) => setNotaConcorrente(c.id, s.id, v)} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {e.concorrentes.length < MAX_CONCORRENTES && (
                  <button
                    type="button"
                    onClick={() => setE((x) => ({ ...x, concorrentes: [...x.concorrentes, novoConcorrente()] }))}
                    className="border-stroke-3 text-tagline-2 text-secondary hover:border-secondary mt-4 inline-flex items-center gap-2 rounded-full border border-dashed px-4 py-2 font-medium transition-colors"
                  >
                    <Plus className="size-4" /> Comparar com um concorrente
                  </button>
                )}
              </div>

              {!mostrar && (
                <ButtonPrimarySubmit type="button" onClick={() => setVerResultado(true)} text="Ver minha análise" className="h-14 w-full [&>span]:w-full" />
              )}
            </div>

            <div className="col-span-12 lg:col-span-7">
              {!mostrar ? (
                <div className="border-stroke-3 flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed p-8 text-center">
                  <p className="font-titulo text-heading-6 text-secondary font-medium">A análise aparece aqui</p>
                  <p className="text-tagline-2 mt-2 max-w-[380px]">Dê as notas dos 5 sentidos e clique em &ldquo;Ver minha análise&rdquo;. Depois, o resultado muda na hora a cada nota.</p>
                </div>
              ) : liberado ? (
                <div className="space-y-4">
                  <Resultados e={e} r={r} />
                  <Acoes e={e} r={r} />
                </div>
              ) : (
                <div className="relative">
                  <div aria-hidden className="pointer-events-none blur-[7px] select-none">
                    <Resultados e={e} r={r} />
                  </div>
                  <div className="absolute inset-0 flex items-start justify-center p-2 pt-8 sm:p-6">
                    <div className="w-full max-w-[420px]">
                      <CadastroFerramenta formName={FORM_NAME} pagePath={PAGINA} extras={() => ({ businessType: TIPOS.find((t) => t.id === e.tipo)?.nome ?? e.tipo, mainPain: resumo(e, r) })} onLiberar={() => setLiberado(true)} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
