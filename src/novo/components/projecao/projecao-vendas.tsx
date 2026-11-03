'use client';

import { CadastroFerramenta, jaLiberado, lerCadastro, pedirAjuda } from '@/novo/components/ferramentas/cadastro';
import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import WhatsAppIcon from '@/novo/components/shared/whatsapp-icon';
import { cn } from '@/novo/utils/cn';
import { ArrowLeft, Check, ClipboardPaste, Download, Lightbulb, Loader2, Pencil, Plus, X } from 'lucide-react';
import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { GraficoAcumulado, GraficoAnos, GraficoAnual, GraficoDessazAnos, GraficoDessazonalizado, GraficoMensal, GraficoPctAcumulado, GraficoSazonalidade, GraficoSerie } from './graficos';
import { type Cenario, type Entradas, type Resultado, MESES, MESES_CURTOS, anosCompletos, calcular, exemplo, hoje, insights, lerColado, lerNumero, periodoYtd, valorDoCenario, vazio } from './calculo';
import { COMECAR_COM_EXEMPLO } from '@/novo/data/ferramentas';

const FORM_NAME = 'projecao-vendas';
const PAGINA = '/ferramentas/projecao-vendas';
const PASSOS = ['O que projetar', 'Histórico', 'Ano atual', 'Resultado'] as const;
const RESULTADO = 3;
const CENARIOS: { id: Cenario; nome: string }[] = [
  { id: 'conservador', nome: 'Conservador' },
  { id: 'tendencia', nome: 'Tendência' },
  { id: 'agressivo', nome: 'Agressivo' },
  { id: 'meta', nome: 'Minha meta' },
];

const inputClass =
  'border-stroke-3 text-tagline-1 text-secondary placeholder:text-secondary/40 focus:border-secondary w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors';
const celula =
  'border-stroke-3 text-tagline-2 text-secondary focus:border-secondary disabled:bg-background-3 disabled:text-secondary/30 w-full rounded-lg border bg-white px-2 py-2 text-right tabular-nums outline-none transition-colors';
const botaoAdicionar = 'border-stroke-3 text-tagline-2 text-secondary hover:border-secondary inline-flex items-center gap-2 rounded-full border border-dashed px-4 py-2 font-medium transition-colors';

export function formatador(medida: Entradas['medida']) {
  return (v: number, curto = false) => {
    if (!Number.isFinite(v)) return '—';
    if (medida === 'vendas') return Math.round(v).toLocaleString('pt-BR');
    if (curto && Math.abs(v) >= 1_000_000) return `R$ ${(v / 1_000_000).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} mi`;
    if (curto && Math.abs(v) >= 1_000) return `R$ ${(v / 1_000).toLocaleString('pt-BR', { maximumFractionDigits: 0 })} mil`;
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };
}
const pct = (v: number | null, casas = 0) => (v == null || !Number.isFinite(v) ? '—' : `${(v * 100).toLocaleString('pt-BR', { maximumFractionDigits: casas })}%`);
const sinal = (v: number) => `${v >= 0 ? '+' : '−'}${Math.round(Math.abs(v) * 100)}%`;
// Os números da pessoa ficam salvos no navegador: ela volta, completa o mês novo e vê a projeção atualizada
const CHAVE_DADOS = 'updo-projecao-dados';
type Salvo = { ano: number; em: string; e: Entradas };

// Lê o que ficou salvo. Se o ano virou desde então, o ano que era o atual entra no histórico e o novo começa vazio
function lerSalvo(): Salvo | null {
  try {
    const s = JSON.parse(localStorage.getItem(CHAVE_DADOS) ?? 'null') as Salvo | null;
    if (!s?.e?.historico) return null;
    const { ano } = hoje();
    if (s.ano === ano) return s;
    const historico = [...s.e.historico, { ano: s.ano, valores: s.e.atual }].filter((a) => a.ano < ano).slice(-5);
    return { ...s, ano, e: { ...s.e, historico, atual: Array(12).fill(null) } };
  } catch {
    return null;
  }
}

function Etapa({ n, titulo, descricao, children }: { n: number; titulo: string; descricao?: ReactNode; children: ReactNode }) {
  return (
    <section className="rounded-3xl bg-white p-6 md:p-8">
      <div className="mb-6 flex items-start gap-4">
        <span className="bg-secondary text-primary-500 font-titulo flex size-10 shrink-0 items-center justify-center rounded-xl text-[1rem] font-medium">0{n}</span>
        <div>
          <h2 className="font-titulo text-heading-6 text-secondary font-medium">{titulo}</h2>
          {descricao && <p className="text-tagline-2 mt-1">{descricao}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function Progresso({ passo, alcancado, onIr }: { passo: number; alcancado: number; onIr: (p: number) => void }) {
  return (
    <nav aria-label="Etapas da ferramenta" className="mb-6">
      <div className="bg-stroke-4 h-1.5 overflow-hidden rounded-full">
        <div className="bg-primary-500 h-full rounded-full transition-all duration-500" style={{ width: `${(passo / (PASSOS.length - 1)) * 100}%` }} />
      </div>
      <ol className="mt-3 grid grid-cols-4 gap-1">
        {PASSOS.map((nome, i) => {
          const pode = i <= alcancado && i !== passo;
          return (
            <li key={nome}>
              <button type="button" disabled={!pode} onClick={() => onIr(i)} aria-current={i === passo ? 'step' : undefined} className={cn('flex w-full flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-2', pode && 'hover:opacity-80')}>
                <span
                  className={cn(
                    'font-titulo flex size-7 shrink-0 items-center justify-center rounded-full text-[0.8125rem] font-semibold transition-colors',
                    i === passo ? 'bg-secondary text-primary-500' : i <= alcancado ? 'bg-primary-500 text-secondary' : 'bg-stroke-4 text-secondary/45',
                  )}
                >
                  {i !== passo && i <= alcancado ? <Check className="size-3.5" /> : i + 1}
                </span>
                <span className={cn('text-tagline-3 leading-tight max-sm:hidden', i === passo ? 'text-secondary font-semibold' : 'text-secondary/55')}>{nome}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <p className="text-tagline-2 text-secondary mt-3 font-medium sm:hidden">
        {passo + 1}/{PASSOS.length} · {PASSOS[passo]}
      </p>
    </nav>
  );
}

// Célula de um mês: no faturamento mostra dinheiro (R$ 184.234,13) e no número de vendas mostra quantidade inteira (1.234).
// Enquanto a pessoa digita, fica o número puro; aceita colar "184.234,13" ou "R$ 184234"
function CampoValor({ valor, medida, onChange, travado = false, rotulo, placeholder, className }: { valor: number | null; medida: Entradas['medida']; onChange: (v: number | null) => void; travado?: boolean; rotulo?: string; placeholder?: string; className?: string }) {
  const [editando, setEditando] = useState<string | null>(null);
  const formatado =
    valor == null ? '' : medida === 'faturamento' ? valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }) : Math.round(valor).toLocaleString('pt-BR');
  return (
    <input
      aria-label={rotulo ? `${rotulo} (${medida === 'faturamento' ? 'R$' : 'quantidade de vendas'})` : undefined}
      type="text"
      inputMode={medida === 'faturamento' ? 'decimal' : 'numeric'}
      disabled={travado}
      placeholder={travado ? '—' : (placeholder ?? (medida === 'faturamento' ? 'R$' : 'qtd'))}
      value={travado ? '' : (editando ?? formatado)}
      onFocus={() => setEditando(valor == null || valor === 0 ? '' : medida === 'faturamento' ? String(valor).replace('.', ',') : String(Math.round(valor)))}
      onChange={(ev) => {
        setEditando(ev.target.value);
        const n = lerNumero(ev.target.value);
        onChange(n == null ? null : medida === 'vendas' ? Math.round(n) : n);
      }}
      onBlur={() => setEditando(null)}
      className={className ?? cn(celula, medida === 'faturamento' ? 'min-w-[124px]' : 'min-w-[96px]')}
    />
  );
}

// Uma linha de 12 meses; meses depois de "ate" ficam travados (ainda não fecharam)
function LinhaMeses({ valores, medida, onChange, ate = 11 }: { valores: (number | null)[]; medida: Entradas['medida']; onChange: (v: (number | null)[]) => void; ate?: number }) {
  return (
    <>
      {MESES_CURTOS.map((m, i) => (
        <td key={m} className="px-1 py-1.5">
          <CampoValor valor={valores[i] ?? null} medida={medida} rotulo={MESES[i]} travado={i > ate} onChange={(v) => onChange(valores.map((x, j) => (j === i ? v : x)))} />
        </td>
      ))}
    </>
  );
}

export default function ProjecaoVendas() {
  const [e, setE] = useState<Entradas>(() => (COMECAR_COM_EXEMPLO ? exemplo() : vazio()));
  const [comExemplo, setComExemplo] = useState(COMECAR_COM_EXEMPLO);
  // Data em que os números da pessoa foram salvos neste navegador (null = nada salvo)
  const [salvoEm, setSalvoEm] = useState<string | null>(null);
  const [carregou, setCarregou] = useState(false);
  const [cenario, setCenario] = useState<Cenario>('tendencia');
  const [liberado, setLiberado] = useState(false);
  const [passo, setPasso] = useState(0);
  const [alcancado, setAlcancado] = useState(0);
  const [aviso, setAviso] = useState('');
  const [colando, setColando] = useState(false);
  const [colado, setColado] = useState('');
  const topo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Quem já se cadastrou em alguma ferramenta (neste navegador) vê o resultado direto
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (jaLiberado()) setLiberado(true);
    const salvo = lerSalvo();
    if (salvo) {
      setE(salvo.e);
      setComExemplo(false);
      setSalvoEm(salvo.em);
    }
    setCarregou(true);
  }, []);

  // Salva os números da pessoa (o exemplo não) a cada mudança
  useEffect(() => {
    if (!carregou || comExemplo) return;
    try {
      const em = new Date().toISOString();
      localStorage.setItem(CHAVE_DADOS, JSON.stringify({ ano: hoje().ano, em, e } satisfies Salvo));
    } catch {
      // Sem localStorage: os números valem só nesta visita
    }
  }, [e, comExemplo, carregou]);

  const limparDados = () => {
    try {
      localStorage.removeItem(CHAVE_DADOS);
    } catch {
      // nada salvo
    }
    setE((x) => ({ ...vazio(), medida: x.medida }));
    setComExemplo(false);
    setSalvoEm(null);
  };

  const set = <K extends keyof Entradas>(k: K, v: Entradas[K]) => setE((x) => ({ ...x, [k]: v }));
  const r = useMemo(() => calcular(e), [e]);
  const fmt = useMemo(() => formatador(e.medida), [e.medida]);
  const unidade = e.medida === 'faturamento' ? 'faturamento' : 'vendas';
  const anualProx = valorDoCenario(r, cenario, e.metaPropria) || r.cenarios.tendencia;

  const pendencia = (p: number) => {
    if (p === 1 && anosCompletos(e.historico).filter((a) => a.ano < r.anoAtual).length < 2) return 'Preencha os 12 meses de pelo menos 2 anos para calcular a sazonalidade.';
    return '';
  };
  const ir = (p: number) => {
    setAviso('');
    setPasso(p);
    setAlcancado((a) => Math.max(a, p));
    requestAnimationFrame(() => topo.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const proximo = () => {
    const falta = pendencia(passo);
    if (falta) return setAviso(falta);
    ir(passo + 1);
  };
  const aplicarColado = () => {
    const anos = lerColado(colado).filter((a) => a.ano < r.anoAtual);
    if (anos.length) set('historico', anos.slice(-5));
    setColando(false);
    setColado('');
  };
  const resumoRd = () =>
    `Projeção de ${unidade}: ${r.anoAtual} acumulado ${periodoYtd(r)} ${fmt(r.ytdAtual)} (${r.ytdAnterior ? sinal(r.ytdAtual / r.ytdAnterior - 1) : '—'} vs ${r.anoAtual - 1}) · fechamento previsto ${fmt(r.fechamentoAtual)} · meta ${r.proximoAno} ${fmt(anualProx)} · mês mais forte ${MESES[r.forte?.m ?? 0]} · mais fraco ${MESES[r.fraco?.m ?? 0]}`;

  return (
    <div
      // A rodinha do mouse nunca muda o valor de um campo de número (tira o foco antes)
      onWheelCapture={(ev) => {
        const alvo = ev.target as HTMLElement;
        if (alvo instanceof HTMLInputElement && alvo.type === 'number' && document.activeElement === alvo) alvo.blur();
      }}
      className="ferramenta [&_[role=radio]]:cursor-pointer [&_a]:cursor-pointer [&_button:not(:disabled)]:cursor-pointer">
      <section className="relative isolate pt-32 pb-8 md:pt-40 lg:pt-44">
        <div className="main-container">
          <div className="max-w-[780px] space-y-5">
            <div className="border-stroke-3 inline-flex items-center gap-x-2.5 rounded-full border bg-white/70 py-1.5 pr-3.5 pl-2.5">
              <span className="bg-primary-500 ring-primary-500/30 block size-2 shrink-0 rounded-full ring-4" />
              <span className="font-texto text-tagline-2 text-secondary font-medium">Ferramenta gratuita · 3 minutos</span>
            </div>
            <h1>
              Projete suas vendas e descubra sua <span className="text-lilas-500">sazonalidade</span>.
            </h1>
            <p>
              Coloque o {unidade} mês a mês dos últimos anos e o que já aconteceu em {r.anoAtual}. Você vê como {r.anoAtual} está contra os anos anteriores, onde ele deve fechar, os meses fortes e fracos e a meta de cada
              mês de {r.proximoAno}.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-28">
        <div ref={topo} className="main-container scroll-mt-28">
          <div className={cn('mx-auto', passo === 0 ? 'max-w-[760px]' : 'max-w-[1200px]')}>
            <Progresso passo={passo} alcancado={alcancado} onIr={ir} />

            <div key={passo} className="animate-[metodo-entra_.35s_ease-out] motion-reduce:animate-none">
              {passo === 0 && (
                <Etapa n={1} titulo="O que você quer projetar?" descricao="Use o que você tem mês a mês: faturamento ou quantidade de vendas.">
                  <div role="radiogroup" aria-label="O que projetar" className="grid gap-3 sm:grid-cols-2">
                    {(
                      [
                        { id: 'faturamento', nome: 'Faturamento (R$)', desc: 'Quanto a empresa faturou em cada mês.' },
                        { id: 'vendas', nome: 'Número de vendas', desc: 'Quantas vendas (pedidos, contratos, matrículas) em cada mês.' },
                      ] as const
                    ).map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        role="radio"
                        aria-checked={e.medida === t.id}
                        onClick={() => (comExemplo ? setE(exemplo(new Date(), t.id)) : set('medida', t.id))}
                        className={cn(
                          'rounded-2xl border-2 p-4 text-left transition-all',
                          e.medida === t.id ? 'border-secondary bg-secondary text-white shadow-[0_12px_32px_-16px_rgba(7,17,31,0.6)]' : 'border-stroke-4 hover:border-stroke-3 bg-background-2',
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span className={cn('size-2.5 rounded-full', e.medida === t.id ? 'bg-primary-500' : 'bg-stroke-3')} />
                          <span className={cn('font-titulo text-tagline-1 font-semibold', e.medida === t.id ? 'text-white' : 'text-secondary')}>{t.nome}</span>
                        </span>
                        <span className={cn('text-tagline-3 mt-1.5 block', e.medida === t.id ? 'text-white/65' : 'text-secondary/60')}>{t.desc}</span>
                      </button>
                    ))}
                  </div>
                  {salvoEm && !comExemplo && (
                    <div className="bg-primary-50 text-tagline-2 text-secondary mt-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl px-4 py-3">
                      <span>
                        Seus números estão salvos neste navegador (desde {new Date(salvoEm).toLocaleDateString('pt-BR')}). É só completar o mês novo{r.ultimoMes >= 0 ? ` (${MESES[r.ultimoMes].toLowerCase()})` : ''}.
                      </span>
                      <button type="button" onClick={limparDados} className="text-secondary/70 hover:text-secondary font-medium underline-offset-2 hover:underline">
                        Limpar dados
                      </button>
                    </div>
                  )}
                  <p className="text-tagline-3 text-secondary/55 mt-4">
                    {comExemplo ? 'Já vem preenchido com um exemplo para você ver como funciona. ' : 'Não tem os números à mão? '}
                    <button
                      type="button"
                      onClick={() => {
                        setE((x) => (comExemplo ? { ...vazio(), medida: x.medida } : exemplo(new Date(), x.medida)));
                        setComExemplo(!comExemplo);
                      }}
                      className="text-lilas-700 font-medium underline-offset-2 hover:underline"
                    >
                      {comExemplo ? 'Limpar e usar os meus números' : 'Preencher com um exemplo'}
                    </button>
                  </p>
                </Etapa>
              )}

              {passo === 1 && (
                <Etapa n={2} titulo={`Histórico: anos fechados até ${r.anoAtual - 1}`} descricao={<>De 2 a 5 anos completos ({e.medida === 'faturamento' ? 'faturamento de cada mês, em R$' : 'número de vendas de cada mês, em quantidade'}). Quanto mais anos, mais confiável a sazonalidade. Dá para colar direto do Excel.</>}>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <button type="button" onClick={() => setColando((c) => !c)} className={botaoAdicionar}>
                      <ClipboardPaste className="size-4" /> Colar do Excel
                    </button>
                    {e.historico.length < 5 && (
                      <button type="button" onClick={() => set('historico', [{ ano: (e.historico[0]?.ano ?? r.anoAtual) - 1, valores: Array(12).fill(null) }, ...e.historico])} className={botaoAdicionar}>
                        <Plus className="size-4" /> Adicionar ano anterior
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={limparDados}
                      className="text-tagline-2 text-secondary/60 hover:text-secondary rounded-full px-3 py-2"
                    >
                      Limpar o exemplo e usar os meus números
                    </button>
                  </div>
                  {colando && (
                    <div className="bg-background-3 mb-5 space-y-3 rounded-2xl p-4">
                      <p className="text-tagline-2 text-secondary/75">
                        Copie da planilha uma linha por ano (12 meses, com ou sem o ano na frente) ou 12 linhas de meses com um ano por coluna, e cole aqui. Sem o ano escrito, entendemos que a última linha é {r.anoAtual - 1}.
                      </p>
                      <textarea value={colado} onChange={(ev) => setColado(ev.target.value)} rows={5} className={cn(inputClass, 'font-mono text-[0.8125rem]')} placeholder={`${r.anoAtual - 1}\t216.520,47\t217.645,57\t…`} />
                      <ButtonPrimarySubmit type="button" onClick={aplicarColado} text="Usar esses números" className="h-13" />
                    </div>
                  )}
                  <div className="-mx-2 overflow-x-auto px-2 pb-2">
                    <table className={cn('w-full border-separate border-spacing-0', e.medida === 'faturamento' ? 'min-w-[1620px]' : 'min-w-[1300px]')}>
                      <thead>
                        <tr className="text-tagline-3 text-secondary/55">
                          <th className="px-1 pb-2 text-left font-medium">Ano · {e.medida === 'faturamento' ? 'R$' : 'vendas'}</th>
                          {MESES_CURTOS.map((m) => (
                            <th key={m} className="px-1 pb-2 text-right font-medium capitalize">
                              {m}
                            </th>
                          ))}
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {e.historico.map((a, i) => (
                          <tr key={a.ano}>
                            <td className="font-titulo text-secondary py-1.5 pr-3 font-semibold">{a.ano}</td>
                            <LinhaMeses valores={a.valores} medida={e.medida} onChange={(v) => set('historico', e.historico.map((x, j) => (j === i ? { ...a, valores: v } : x)))} />
                            <td className="pl-1">
                              {e.historico.length > 2 && i === 0 && (
                                <button type="button" aria-label={`Remover ${a.ano}`} onClick={() => set('historico', e.historico.slice(1))} className="text-secondary/45 hover:text-secondary hover:bg-background-3 flex size-8 items-center justify-center rounded-lg">
                                  <X className="size-4" />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Etapa>
              )}

              {passo === 2 && (
                <Etapa
                  n={3}
                  titulo={`${r.anoAtual} até agora`}
                  descricao={
                    r.ultimoMes >= 0
                      ? `Coloque o ${unidade} dos meses fechados de ${r.anoAtual} (janeiro a ${MESES[r.ultimoMes].toLowerCase()}). Vamos comparar com o mesmo período dos anos anteriores e prever o fechamento do ano.`
                      : `${r.anoAtual} ainda não tem mês fechado. Pode seguir sem preencher.`
                  }
                >
                  <div className="-mx-2 overflow-x-auto px-2 pb-2">
                    <table className={cn('w-full border-separate border-spacing-0', e.medida === 'faturamento' ? 'min-w-[1540px]' : 'min-w-[1200px]')}>
                      <thead>
                        <tr className="text-tagline-3 text-secondary/55">
                          {MESES_CURTOS.map((m, i) => (
                            <th key={m} className={cn('px-1 pb-2 text-right font-medium capitalize', i > r.ultimoMes && 'text-secondary/30')}>
                              {m}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <LinhaMeses valores={e.atual} medida={e.medida} ate={r.ultimoMes} onChange={(v) => set('atual', v)} />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-tagline-3 text-secondary/55 mt-2">{e.medida === 'faturamento' ? 'Valores em R$ (faturamento de cada mês).' : 'Valores em número de vendas.'} Os meses que ainda não fecharam ficam travados e entram na previsão. Seus números ficam salvos neste navegador: no mês que vem, é só voltar e completar o mês novo.</p>
                </Etapa>
              )}

              {passo === RESULTADO &&
                (!r.ok ? (
                  <p className="text-tagline-1 rounded-3xl bg-white p-8 text-center">Preencha os 12 meses de pelo menos 2 anos no histórico para ver a projeção.</p>
                ) : liberado ? (
                  <Resultados e={e} r={r} fmt={fmt} cenario={cenario} setCenario={setCenario} set={set} anualProx={anualProx} ir={ir} />
                ) : (
                  <div className="grid grid-cols-12 items-start gap-6">
                    <div className="col-span-12 lg:col-span-5">
                      <CadastroFerramenta formName={FORM_NAME} pagePath={PAGINA} extras={() => ({ businessType: `Projeção de ${unidade}`, mainPain: resumoRd() })} onLiberar={() => setLiberado(true)} />
                    </div>
                    <div aria-hidden className="pointer-events-none col-span-7 hidden space-y-4 blur-[7px] select-none lg:block">
                      <div className="rounded-3xl bg-white p-6">
                        <GraficoAnos r={r} fmt={fmt} />
                      </div>
                      <div className="rounded-3xl bg-white p-6">
                        <GraficoSazonalidade r={r} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {passo < RESULTADO && (
              <div className="mt-6 space-y-3">
                {aviso && <p className="text-tagline-2 rounded-xl bg-red-50 px-4 py-3 text-red-700">{aviso}</p>}
                <div className="flex items-center justify-between gap-3">
                  {passo > 0 ? (
                    <button type="button" onClick={() => ir(passo - 1)} className="text-tagline-1 text-secondary/70 hover:text-secondary hover:bg-background-3 inline-flex items-center gap-2 rounded-full px-4 py-3 font-medium transition-colors">
                      <ArrowLeft className="size-4" /> Voltar
                    </button>
                  ) : (
                    <span />
                  )}
                  <ButtonPrimarySubmit type="button" onClick={proximo} text={passo === 2 ? 'Ver projeção' : 'Próximo'} className="h-14" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Cartao({ rotulo, valor, detalhe, cor }: { rotulo: string; valor: string; detalhe?: string; cor?: string }) {
  return (
    <div className="border-stroke-4 rounded-2xl border bg-white p-5">
      <p className="text-tagline-2 text-secondary/60 font-medium">{rotulo}</p>
      <p className={cn('font-titulo mt-1 text-[1.6rem] leading-tight font-semibold tabular-nums', cor ?? 'text-secondary')}>{valor}</p>
      {detalhe && <p className="text-tagline-3 text-secondary/55 mt-1">{detalhe}</p>}
    </div>
  );
}

// Card com título e explicação curta para cada gráfico
function Painel({ titulo, texto, children, className }: { titulo: string; texto: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-3xl bg-white p-5 md:p-7', className)}>
      <p className="font-titulo text-heading-6 text-secondary font-medium">{titulo}</p>
      <p className="text-tagline-2 mb-4">{texto}</p>
      {children}
    </div>
  );
}

const ABAS = ['ano', 'sazonalidade', 'tendencia', 'meta'] as const;
type Aba = (typeof ABAS)[number];

function Resultados({
  e,
  r,
  fmt,
  cenario,
  setCenario,
  set,
  anualProx,
  ir,
}: {
  e: Entradas;
  r: Resultado;
  fmt: (v: number, curto?: boolean) => string;
  cenario: Cenario;
  setCenario: (c: Cenario) => void;
  set: <K extends keyof Entradas>(k: K, v: Entradas[K]) => void;
  anualProx: number;
  ir: (p: number) => void;
}) {
  const [gerando, setGerando] = useState(false);
  const [aba, setAba] = useState<Aba>('ano');
  const temReal = r.ateMes >= 0;
  const periodo = periodoYtd(r);
  const lista = insights(r, e, anualProx);
  const planoProx = useMemo(() => r.planejar(anualProx), [r, anualProx]);
  const metasProx = useMemo(() => planoProx.map((l) => l.meta), [planoProx]);
  const vsAnterior = r.ytdAnterior ? r.ytdAtual / r.ytdAnterior - 1 : null;
  const fechVsUltimo = r.ultimo ? r.fechamentoAtual / r.ultimo - 1 : null;
  const barras = [...r.ytdAnos.map((a, i) => ({ ano: a.ano, valor: temReal ? a.valor : r.totais[i], atual: false })), ...(temReal ? [{ ano: r.anoAtual, valor: r.ytdAtual, atual: true }] : [])];
  const maxBarra = Math.max(...barras.map((b) => b.valor), 1);
  const nomesAbas: Record<Aba, string> = { ano: `Visão de ${r.anoAtual}`, sazonalidade: 'Sazonalidade', tendencia: 'Tendência', meta: `Meta ${r.proximoAno}` };

  const baixarPdf = async () => {
    setGerando(true);
    try {
      const [{ pdf }, { RelatorioProjecaoPdf }] = await Promise.all([import('@react-pdf/renderer'), import('./relatorio-pdf')]);
      const blob = await pdf(<RelatorioProjecaoPdf e={e} cenario={cenario} origem={window.location.origin} nome={lerCadastro().nome} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `projecao-de-vendas-${r.anoAtual}-${r.proximoAno}-updo.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } finally {
      setGerando(false);
    }
  };
  const ajuda = () =>
    pedirAjuda({
      formName: 'projecao-vendas-quero-ajuda',
      pagePath: PAGINA,
      linhas: [
        'Olá! Fiz a projeção de vendas da UPDO e quero ajuda no meu marketing.',
        temReal ? `*${r.anoAtual} (${periodo}):* ${fmt(r.ytdAtual)}${vsAnterior != null ? ` (${sinal(vsAnterior)} vs ${r.anoAtual - 1})` : ''}` : '',
        `*Fechamento previsto ${r.anoAtual}:* ${fmt(r.fechamentoAtual)}`,
        `*Meta ${r.proximoAno}:* ${fmt(anualProx)}`,
        `*Mês mais forte:* ${MESES[r.forte.m]} (${sinal(r.forte.v - 1)}) · *mais fraco:* ${MESES[r.fraco.m]} (${sinal(r.fraco.v - 1)})`,
      ].filter(Boolean),
      resumo: `Pediu ajuda pela projeção de vendas: fechamento previsto ${r.anoAtual} ${fmt(r.fechamentoAtual)} · meta ${r.proximoAno} ${fmt(anualProx)}`,
    });

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-white px-5 py-3.5">
        <span className="text-tagline-2 text-secondary/60">Seus números:</span>
        {[
          { rotulo: e.medida === 'faturamento' ? 'Faturamento' : 'Nº de vendas', p: 0 },
          { rotulo: `${r.anos[0]?.ano}–${r.anos[r.anos.length - 1]?.ano}`, p: 1 },
          { rotulo: temReal ? `${r.anoAtual}: ${periodo}` : `${r.anoAtual} sem realizado`, p: 2 },
        ].map((x) => (
          <button key={x.p} type="button" onClick={() => ir(x.p)} className="border-stroke-3 text-tagline-2 text-secondary hover:border-secondary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 transition-colors">
            {x.rotulo} <Pencil className="text-secondary/50 size-3" />
          </button>
        ))}
      </div>

      {/* Resumo: onde o ano atual está e onde deve fechar */}
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-secondary relative col-span-12 overflow-hidden rounded-3xl p-6 text-white md:p-7 lg:col-span-5">
          <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br from-amber-400/30 to-transparent blur-2xl" />
          <p className="text-tagline-2 font-medium text-white/65">
            {r.anoAtual}
            {temReal ? ` · ${periodo}` : ''}
          </p>
          <p className="font-titulo mt-2 text-[2.75rem] leading-none font-semibold text-white tabular-nums">{temReal ? fmt(r.ytdAtual) : '—'}</p>
          {vsAnterior != null && (
            <p className={cn('text-tagline-1 mt-3 font-semibold', vsAnterior >= 0 ? 'text-primary-500' : 'text-red-400')}>
              {sinal(vsAnterior)}{' '}
              <span className="text-tagline-2 font-normal text-white/70">
                vs {periodo} de {r.anoAtual - 1}
              </span>
            </p>
          )}
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
            <div>
              <p className="text-tagline-3 text-white/55">Fechamento previsto (com sazonalidade)</p>
              <p className="font-titulo mt-1 text-[1.35rem] font-semibold text-amber-300 tabular-nums">{fmt(r.fechamentoAtual)}</p>
              {fechVsUltimo != null && (
                <p className="text-tagline-3 text-white/55">
                  {sinal(fechVsUltimo)} vs {r.anoAtual - 1}
                </p>
              )}
              {r.ritmoAno != null && <p className="text-tagline-3 mt-1 text-white/55">no ritmo linear: {fmt(r.ritmoAno, true)}</p>}
            </div>
            <div>
              <p className="text-tagline-3 text-white/55">Meta {r.proximoAno}</p>
              <p className="font-titulo mt-1 text-[1.35rem] font-semibold text-white tabular-nums">{fmt(anualProx)}</p>
              <p className="text-tagline-3 text-white/55">{CENARIOS.find((c) => c.id === cenario)?.nome.toLowerCase()}</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 rounded-3xl bg-white p-6 md:p-7 lg:col-span-7">
          <p className="font-titulo text-heading-6 text-secondary font-medium">{temReal ? `Acumulado de ${periodo}, ano a ano` : 'Total por ano'}</p>
          <p className="text-tagline-2 mb-5">{temReal ? `O mesmo período em cada ano, para comparar ${r.anoAtual} de igual para igual.` : 'Total de cada ano do histórico.'}</p>
          <ul className="space-y-3">
            {barras.map((a, i) => {
              const ant = barras[i - 1]?.valor;
              return (
                <li key={a.ano} className="grid grid-cols-[48px_1fr_auto] items-center gap-3">
                  <span className={cn('font-titulo text-tagline-1 font-semibold', a.atual ? 'text-amber-600' : 'text-secondary/70')}>{a.ano}</span>
                  <div className="bg-background-3 h-8 overflow-hidden rounded-lg">
                    <div
                      className={cn('flex h-full items-center rounded-lg px-3 transition-all duration-700', a.atual ? 'bg-gradient-to-r from-amber-300 to-amber-500' : 'from-lilas-200 to-lilas-500 bg-gradient-to-r')}
                      style={{ width: `${Math.max((a.valor / maxBarra) * 100, 12)}%` }}
                    >
                      <span className="text-tagline-3 truncate font-semibold text-white tabular-nums drop-shadow-sm">{fmt(a.valor, true)}</span>
                    </div>
                  </div>
                  <span className={cn('text-tagline-2 w-14 text-right font-semibold tabular-nums', ant == null ? 'text-secondary/30' : a.valor >= ant ? 'text-primary-700' : 'text-red-600')}>{ant ? sinal(a.valor / ant - 1) : '—'}</span>
                </li>
              );
            })}
          </ul>
          {temReal && r.ytdAnos.length > 1 && (
            <p className="text-tagline-3 text-secondary/55 mt-4">
              {r.anoAtual} vs {r.ytdAnos.map((a) => `${a.ano}: ${sinal(r.ytdAtual / a.valor - 1)}`).join(' · ')}
            </p>
          )}
        </div>
      </div>

      {lista.length > 0 && (
        <div className="bg-lilas-50 rounded-3xl p-6 md:p-7">
          <p className="font-titulo text-heading-6 text-secondary flex items-center gap-2 font-medium">
            <Lightbulb className="text-lilas-500 size-5" /> O que os números dizem
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {lista.map((t) => (
              <li key={t} className="text-tagline-2 text-secondary flex gap-3">
                <span className="bg-lilas-500 mt-2 size-1.5 shrink-0 rounded-full" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Abas dos gráficos */}
      <div role="tablist" aria-label="Seções do resultado" className="sticky top-24 z-20 -mx-1 flex gap-1.5 overflow-x-auto rounded-2xl bg-white/90 p-1.5 shadow-[0_8px_24px_-16px_rgba(7,17,31,0.35)] backdrop-blur">
        {ABAS.map((a) => (
          <button
            key={a}
            type="button"
            role="tab"
            aria-selected={aba === a}
            onClick={() => setAba(a)}
            className={cn('text-tagline-2 shrink-0 rounded-xl px-4 py-2.5 font-medium whitespace-nowrap transition-colors', aba === a ? 'bg-secondary text-white' : 'text-secondary/70 hover:bg-background-3 hover:text-secondary')}
          >
            {nomesAbas[a]}
          </button>
        ))}
      </div>

      <div key={aba} role="tabpanel" className="animate-[metodo-entra_.35s_ease-out] space-y-4 motion-reduce:animate-none">
        {aba === 'ano' && (
          <>
            <Painel
              titulo={`Acumulado de ${r.anoAtual} × meta`}
              texto={<>Como o ano está indo. A linha do realizado fica verde acima da meta acumulada (pontilhada) e vermelha abaixo. A tracejada laranja é o ritmo linear do ano até dezembro, como no Radar: uma reta pelo que já aconteceu, sem considerar a sazonalidade dos meses que faltam (o card de fechamento previsto considera). Passe o mouse para ver cada mês.</>}
            >
              <GraficoAcumulado r={r} fmt={fmt} />
            </Painel>
            <Painel titulo="Previsão × receita, mensal" texto="Barras: atrás a previsão (meta) de cada mês e na frente a receita, verde quando bateu e vermelha quando ficou abaixo, com o % atingido. Linhas (eixo da direita): a previsão acumulada (cinza), a receita acumulada (laranja) e a tendência pontilhada da receita acumulada até dezembro.">
              <GraficoMensal r={r} fmt={fmt} />
            </Painel>
            <Painel
              titulo="Previsão × receita, acumulado"
              texto="Barras: quanto da previsão acumulada já foi atingido até cada mês (verde a partir de 100%, vermelho abaixo). Linhas (eixo da direita): a previsão acumulada até dezembro (cinza), a receita acumulada até o último mês fechado (laranja) e a tendência pontilhada da receita."
            >
              <GraficoPctAcumulado r={r} fmt={fmt} />
            </Painel>
            <Painel titulo={`Mês a mês: ${r.anoAtual} contra os anos anteriores`} texto={`Cada cor é um ano, com uma bolinha por mês. Em laranja, ${r.anoAtual}: a linha cheia é o realizado e a tracejada é a previsão até dezembro.`}>
              <GraficoAnos r={r} fmt={fmt} />
            </Painel>
            <Painel titulo={`${r.anoAtual}: tendência × realizado`} texto="A tendência de cada mês contra o que aconteceu. Nos meses que faltam, a previsão no ritmo atual.">
              <div className="-mx-2 overflow-x-auto px-2">
                <table className="w-full min-w-[560px] text-[0.9375rem] tabular-nums">
                  <thead>
                    <tr className="text-tagline-3 text-secondary/55 border-stroke-4 border-b text-left">
                      <th className="py-2 font-medium">Mês</th>
                      <th className="py-2 text-right font-medium">Tendência</th>
                      <th className="py-2 text-right font-medium">Realizado</th>
                      <th className="py-2 text-right font-medium">% do mês</th>
                      <th className="py-2 text-right font-medium">% acumulado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {r.acompanhamento.map((l) => (
                      <tr key={l.mes} className="border-stroke-4 border-b last:border-0">
                        <td className="text-secondary py-2.5 font-medium">{MESES[l.mes]}</td>
                        <td className="text-secondary/70 py-2.5 text-right">{fmt(l.meta)}</td>
                        <td className="py-2.5 text-right">{l.real != null ? <span className="text-secondary font-semibold">{fmt(l.real)}</span> : <span className="text-amber-600">{fmt(l.previsto ?? 0)} prev.</span>}</td>
                        <td className={cn('py-2.5 text-right font-semibold', l.pctMes == null ? 'text-secondary/30' : l.pctMes >= 1 ? 'text-primary-700' : 'text-red-600')}>{pct(l.pctMes)}</td>
                        <td className={cn('py-2.5 text-right font-semibold', l.pctAcum == null ? 'text-secondary/30' : l.pctAcum >= 1 ? 'text-primary-700' : 'text-red-600')}>{pct(l.pctAcum)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Painel>
          </>
        )}

        {aba === 'sazonalidade' && (
          <>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1">
                <Cartao rotulo="Mês mais forte" valor={MESES[r.forte.m]} detalhe={`${sinal(r.forte.v - 1)} acima da média`} cor="text-primary-700" />
                <Cartao rotulo="Mês mais fraco" valor={MESES[r.fraco.m]} detalhe={`${sinal(r.fraco.v - 1)} abaixo da média`} cor="text-red-600" />
                <Cartao rotulo="Diferença entre pico e vale" valor={pct(r.amplitude)} detalhe={`${MESES_CURTOS[r.forte.m]} vende isso a mais que ${MESES_CURTOS[r.fraco.m]}`} />
              </div>
              <Painel className="col-span-12 lg:col-span-8" titulo="Índice de sazonalidade" texto="Quanto cada mês vende acima (verde) ou abaixo (vermelho) da média, considerando todos os anos e sem os pontos fora da curva.">
                <GraficoSazonalidade r={r} />
              </Painel>
            </div>
            <Painel
              titulo="Dessazonalização"
              texto={<>A série real (oscila com a sazonalidade) contra a média móvel centrada de 12 meses, que mostra a tendência de verdade. A pontilhada é o real dividido pelo índice de cada mês: o que sobra quando tiramos a sazonalidade.</>}
            >
              <GraficoDessazonalizado r={r} fmt={fmt} />
            </Painel>
            <Painel titulo="Dessazonalização ano a ano" texto={`A tendência sem sazonalidade de cada ano, mês a mês. Se as linhas sobem de um ano para o outro, o negócio cresceu de verdade, não só pela época do ano. Em laranja, ${r.anoAtual} até agora.`}>
              <GraficoDessazAnos r={r} fmt={fmt} />
            </Painel>
          </>
        )}

        {aba === 'tendencia' && (
          <>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1">
                <Cartao rotulo="Crescimento médio ao ano" valor={pct(r.cagr, 1)} detalhe={`${r.anos[0].ano} a ${r.anos[r.anos.length - 1].ano}`} cor={r.cagr != null && r.cagr < 0 ? 'text-red-600' : 'text-primary-700'} />
                <Cartao rotulo="A reta cresce" valor={`${r.regProx.b >= 0 ? '+' : '−'}${fmt(Math.abs(r.regProx.b), true)}`} detalhe="por ano, em média" />
                <Cartao rotulo="Ajuste da reta (R²)" valor={r.r2Ano == null ? '—' : r.r2Ano.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} detalhe={r.r2Ano != null && r.r2Ano >= 0.8 ? 'crescimento bem regular' : 'crescimento irregular: use a meta com cuidado'} />
              </div>
              <Painel className="col-span-12 lg:col-span-8" titulo="Total por ano e tendência" texto={`Os anos fechados, o fechamento previsto de ${r.anoAtual} (laranja) e a projeção de ${r.proximoAno} pela reta de tendência (regressão linear dos totais).`}>
                <GraficoAnual r={r} fmt={fmt} />
              </Painel>
            </div>
          </>
        )}

        {aba === 'meta' && (
          <>
            <div className="grid grid-cols-12 gap-4">
              <div className="bg-secondary relative col-span-12 overflow-hidden rounded-3xl p-6 text-white md:p-7 lg:col-span-5">
                <div className="from-lilas-500/35 pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br to-transparent blur-2xl" />
                <p className="text-tagline-2 font-medium text-white/65">
                  Meta de {e.medida === 'faturamento' ? 'faturamento' : 'vendas'} {r.proximoAno}
                </p>
                <p className="font-titulo mt-2 text-[2.75rem] leading-none font-semibold text-white tabular-nums">{fmt(anualProx)}</p>
                <p className="text-tagline-2 mt-3 text-white/75">
                  {sinal(anualProx / Math.max(r.fechamentoAtual, 1) - 1)} sobre o fechamento previsto de {r.anoAtual}
                </p>
                <div role="radiogroup" aria-label="Cenário da meta" className="mt-5 grid grid-cols-2 gap-1.5 rounded-2xl bg-white/5 p-1.5 sm:grid-cols-4">
                  {CENARIOS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      role="radio"
                      aria-checked={cenario === c.id}
                      onClick={() => setCenario(c.id)}
                      className={cn('text-tagline-3 rounded-xl px-2 py-2 font-medium transition-colors', cenario === c.id ? 'bg-primary-500 text-secondary' : 'text-white/70 hover:bg-white/10 hover:text-white')}
                    >
                      {c.nome}
                    </button>
                  ))}
                </div>
                {cenario === 'agressivo' && (
                  <label className="text-tagline-3 mt-4 flex items-center justify-between gap-3 text-white/70">
                    Acima da tendência
                    <span className="flex items-center gap-2">
                      <input type="range" min={0} max={40} step={1} value={e.extraAgressivo} onChange={(ev) => set('extraAgressivo', Number(ev.target.value))} className="accent-primary-500 w-32 cursor-pointer" />
                      <span className="text-primary-500 w-10 text-right font-semibold">+{e.extraAgressivo}%</span>
                    </span>
                  </label>
                )}
                {cenario === 'meta' && (
                  <label className="text-tagline-3 mt-4 block text-white/70">
                    Sua meta para {r.proximoAno}
                    <CampoValor
                      valor={e.metaPropria || null}
                      medida={e.medida}
                      placeholder={fmt(r.cenarios.tendencia)}
                      onChange={(n) => set('metaPropria', n ?? 0)}
                      className="text-tagline-1 mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white outline-none placeholder:text-white/35 focus:border-white/40"
                    />
                  </label>
                )}
                <p className="text-tagline-3 mt-4 text-white/45">
                  Conservador {fmt(r.cenarios.conservador, true)} · Tendência {fmt(r.cenarios.tendencia, true)} · Agressivo {fmt(r.cenarios.agressivo, true)}
                </p>
              </div>
              <Painel className="col-span-12 lg:col-span-7" titulo={`Histórico, tendência e meta ${r.proximoAno}`} texto={`Verde: a tendência sem sazonalidade. Laranja: a previsão de ${r.anoAtual}. Lilás: a meta mês a mês de ${r.proximoAno}.`}>
                <GraficoSerie r={r} metasProx={metasProx} fmt={fmt} />
              </Painel>
            </div>
            <Painel titulo={`Meta mês a mês ${r.proximoAno}`} texto="A meta do ano dividida pelo peso de cada mês na sazonalidade.">
              <div className="-mx-2 overflow-x-auto px-2">
                <table className="w-full min-w-[420px] text-[0.9375rem] tabular-nums">
                  <thead>
                    <tr className="text-tagline-3 text-secondary/55 border-stroke-4 border-b text-left">
                      <th className="py-2 font-medium">Mês</th>
                      <th className="py-2 text-right font-medium">Peso</th>
                      <th className="py-2 text-right font-medium">Meta</th>
                      <th className="py-2 text-right font-medium">Acumulada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planoProx.map((l) => (
                      <tr key={l.mes} className="border-stroke-4 border-b last:border-0">
                        <td className="text-secondary py-2.5 font-medium">{MESES[l.mes]}</td>
                        <td className={cn('py-2.5 text-right', l.indice >= 1.1 ? 'text-primary-800 font-semibold' : l.indice <= 0.9 ? 'font-semibold text-red-600' : 'text-secondary/70')}>{pct(l.peso, 1)}</td>
                        <td className="text-secondary py-2.5 text-right font-semibold">{fmt(l.meta)}</td>
                        <td className="text-secondary/70 py-2.5 text-right">{fmt(l.metaAcum)}</td>
                      </tr>
                    ))}
                    <tr className="font-titulo text-secondary">
                      <td className="pt-3 font-semibold">Total</td>
                      <td className="pt-3 text-right">100%</td>
                      <td className="pt-3 text-right font-semibold">{fmt(anualProx)}</td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </Painel>
          </>
        )}
      </div>

      <div className="flex flex-col gap-3 rounded-3xl bg-white p-4 sm:flex-row sm:flex-wrap sm:items-center md:p-5">
        <ButtonPrimarySubmit type="button" onClick={ajuda} text="Quero ajuda no meu marketing" className="h-14 w-full sm:w-auto max-md:text-[0.875rem] [&>span]:w-full max-md:[&>span]:gap-x-2 max-md:[&>span]:pl-4" />
        <button
          type="button"
          onClick={baixarPdf}
          disabled={gerando}
          className="border-stroke-3 text-secondary hover:border-secondary hover:bg-background-2 text-tagline-1 inline-flex h-14 items-center justify-center gap-2 rounded-full border px-6 font-medium transition-all duration-300 active:scale-[0.98] disabled:opacity-60"
        >
          {gerando ? <Loader2 className="size-5 animate-spin" /> : <Download className="size-5" />}
          {gerando ? 'Gerando PDF…' : 'Baixar projeção em PDF'}
        </button>
        <p className="text-tagline-3 text-secondary/55 flex items-center gap-1.5 sm:ml-auto">
          <WhatsAppIcon color="currentColor" className="size-4" /> Fale direto com o time da UPDO
        </p>
      </div>
    </div>
  );
}
