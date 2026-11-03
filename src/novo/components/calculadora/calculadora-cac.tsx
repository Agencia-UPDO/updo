'use client';

import { cn } from '@/novo/utils/cn';
import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import WhatsAppIcon from '@/novo/components/shared/whatsapp-icon';
import { siteConfig } from '@/config/site';
import { jaLiberado, lerCadastro, salvarCadastro } from '@/novo/components/ferramentas/cadastro';
import { ArrowLeft, Check, Download, Loader2, Lock, Pencil, Plus, RotateCcw, Sparkles, X } from 'lucide-react';
import { type FormEvent, type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { type Ajustes, type Custo, type Entradas, type TipoNegocio, EXEMPLO, TIPOS, VAZIO, calcular, saudeLtvCac } from './calculo';
import { COMECAR_COM_EXEMPLO } from '@/novo/data/ferramentas';

const FORM_NAME = 'calculadora-cac';
// Os números da pessoa ficam salvos no navegador para ela voltar e ajustar
const CHAVE_DADOS = 'updo-calculadora-dados';

const brl = (v: number, casas = 0) =>
  Number.isFinite(v) ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casas, maximumFractionDigits: casas }) : '—';
const num = (v: number, casas = 1) => (Number.isFinite(v) ? v.toLocaleString('pt-BR', { maximumFractionDigits: casas }) : '—');
const pct = (v: number | null, casas = 0) => (v == null || !Number.isFinite(v) ? '—' : `${(v * 100).toLocaleString('pt-BR', { maximumFractionDigits: casas })}%`);
const vezes = (v: number | null) => (v == null || !Number.isFinite(v) ? '—' : `${v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}x`);
const meses = (v: number | null) => {
  if (v == null) return '—';
  if (!Number.isFinite(v)) return 'não se paga';
  if (v === 0) return 'na 1ª compra';
  const m = Math.ceil(v * 10) / 10;
  return `${num(m)} ${m <= 1 ? 'mês' : 'meses'}`;
};

const TONS = {
  bom: { texto: 'text-primary-700', fundo: 'bg-primary-500', anel: 'ring-primary-500/30' },
  atencao: { texto: 'text-amber-600', fundo: 'bg-amber-400', anel: 'ring-amber-400/30' },
  ruim: { texto: 'text-red-600', fundo: 'bg-red-500', anel: 'ring-red-500/30' },
  neutro: { texto: 'text-secondary/60', fundo: 'bg-stroke-3', anel: 'ring-stroke-3/40' },
};

const inputClass =
  'border-stroke-3 text-tagline-1 text-secondary placeholder:text-secondary/40 focus:border-secondary w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors';
const labelClass = 'text-tagline-2 text-secondary mb-2 block font-medium';
const botaoAdicionar =
  'border-stroke-3 text-tagline-2 text-secondary hover:border-secondary mt-4 inline-flex items-center gap-2 rounded-full border border-dashed px-4 py-2 font-medium transition-colors';
const botaoRemover = 'text-secondary/45 hover:text-secondary hover:bg-background-3 flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors';

// Exemplos que aparecem no nome de cada custo novo
const EXEMPLOS_VENDA = ['Frete', 'Embalagem', 'Taxa do marketplace'];
const EXEMPLOS_AQUISICAO = ['Time comercial (salários)', 'Agência', 'Ferramentas / CRM'];

function Numero({ id, rotulo, valor, onChange, prefixo, sufixo, ajuda, passo = 1 }: { id: string; rotulo: string; valor: number; onChange: (v: number) => void; prefixo?: string; sufixo?: string; ajuda?: string; passo?: number }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {rotulo}
      </label>
      <div className="relative">
        {prefixo && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">{prefixo}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={passo}
          value={Number.isFinite(valor) ? valor : ''}
          onChange={(ev) => onChange(ev.target.value === '' ? 0 : Number(ev.target.value))}
          className={cn(inputClass, prefixo && 'pl-11', sufixo && 'pr-16')}
        />
        {sufixo && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">{sufixo}</span>}
      </div>
      {ajuda && <p className="text-tagline-3 text-secondary/55 mt-1.5">{ajuda}</p>}
    </div>
  );
}

function Etapa({ n, titulo, descricao, children }: { n: number; titulo: string; descricao?: string; children: ReactNode }) {
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

// Um custo por venda: os fixos mostram o nome; os que a pessoa adicionou têm nome editável e botão de remover
function LinhaCusto({ custo, exemplo, onChange, onRemover }: { custo: Custo; exemplo: string; onChange: (c: Custo) => void; onRemover: () => void }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-end gap-2 sm:grid-cols-[1fr_140px_auto]">
      {custo.extra ? (
        <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
          <input
            aria-label="Nome do custo"
            placeholder={exemplo}
            value={custo.nome}
            onChange={(ev) => onChange({ ...custo, nome: ev.target.value })}
            className={cn(inputClass, 'text-tagline-2 py-2.5 font-medium')}
          />
          <button type="button" onClick={onRemover} aria-label="Remover custo" className={botaoRemover}>
            <X className="size-4" />
          </button>
        </div>
      ) : (
        <p className="text-tagline-2 text-secondary col-span-2 font-medium sm:col-span-1 sm:pb-3">{custo.nome}</p>
      )}
      <div className="relative">
        {custo.modo === 'R$' && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">R$</span>}
        <input
          aria-label={`${custo.nome || 'Custo'} (${custo.modo})`}
          type="number"
          inputMode="decimal"
          min={0}
          step={custo.modo === '%' ? 0.5 : 1}
          value={custo.valor}
          onChange={(ev) => onChange({ ...custo, valor: ev.target.value === '' ? 0 : Number(ev.target.value) })}
          className={cn(inputClass, custo.modo === 'R$' ? 'pl-11' : 'pr-10')}
        />
        {custo.modo === '%' && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">%</span>}
      </div>
      <div role="radiogroup" aria-label={`${custo.nome || 'Custo'}: em % ou em R$`} className="border-stroke-3 flex rounded-xl border p-1">
        {(['%', 'R$'] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={custo.modo === m}
            onClick={() => onChange({ ...custo, modo: m })}
            className={cn('text-tagline-2 rounded-lg px-3 py-1.5 font-medium transition-colors', custo.modo === m ? 'bg-secondary text-white' : 'text-secondary/60 hover:text-secondary')}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}

function Cartao({ rotulo, valor, detalhe, tom, destaque = false }: { rotulo: string; valor: string; detalhe?: string; tom?: keyof typeof TONS; destaque?: boolean }) {
  return (
    <div className={cn('rounded-2xl p-5', destaque ? 'bg-secondary text-white' : 'border-stroke-4 border bg-white')}>
      <p className={cn('text-tagline-2 font-medium', destaque ? 'text-white/65' : 'text-secondary/60')}>{rotulo}</p>
      <p className={cn('font-titulo mt-1 text-[1.75rem] leading-tight font-semibold tabular-nums', destaque ? 'text-primary-500' : tom ? TONS[tom].texto : 'text-secondary')}>{valor}</p>
      {detalhe && <p className={cn('text-tagline-3 mt-1', destaque ? 'text-white/55' : 'text-secondary/55')}>{detalhe}</p>}
    </div>
  );
}

function Deslizante({ rotulo, valor, min, max, passo, onChange, mostrar }: { rotulo: string; valor: number; min: number; max: number; passo: number; onChange: (v: number) => void; mostrar: string }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-tagline-2 font-medium text-white/80">{rotulo}</span>
        <span className="font-titulo text-primary-500 text-[1.125rem] font-semibold tabular-nums">{mostrar}</span>
      </span>
      <input type="range" min={min} max={max} step={passo} value={valor} onChange={(ev) => onChange(Number(ev.target.value))} className="accent-primary-500 mt-3 w-full cursor-pointer" />
    </label>
  );
}

const SEM_AJUSTE: Ajustes = { ticketPct: 0, cacPct: 0, churn: null };

const PASSOS = ['Como você vende', 'Preço', 'Custos', 'Aquisição', 'Resultado'] as const;
const RESULTADO = 4;

// Cartões do resultado (LTV:CAC, LTV, CAC, payback, ROAS, ROI, CAC máximo); também aparecem embaçados atrás do cadastro
function Resultados({ e, r, aj }: { e: Entradas; r: ReturnType<typeof calcular>; aj: Ajustes }) {
  const recorrente = e.tipo === 'recorrente' || e.tipo === 'setup';
  const saude = saudeLtvCac(r.ltvCac);
  const simulando = aj.ticketPct !== 0 || aj.cacPct !== 0 || aj.churn != null;
  const roi = e.tipo === 'unica' ? r.roiPrimeira : r.roiVida;
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 space-y-4 lg:col-span-5">
        <div className="bg-secondary relative overflow-hidden rounded-3xl p-6 text-white md:p-7">
          <div className="from-lilas-500/35 pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br to-transparent blur-2xl" />
          <p className="text-tagline-2 font-medium text-white/65">LTV : CAC {simulando && <span className="text-lilas-200">· simulação</span>}</p>
          <div className="mt-2 flex items-end gap-4">
            <p className="font-titulo text-[3.5rem] leading-none font-semibold text-white tabular-nums">{r.ltvCac == null ? '—' : `${num(r.ltvCac)} : 1`}</p>
            <span className={cn('mb-2 size-3 rounded-full ring-4', TONS[saude.tom].fundo, TONS[saude.tom].anel)} />
          </div>
          <p className="text-tagline-2 mt-3 text-white/80">{saude.rotulo}</p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <div className={cn('h-full rounded-full transition-all duration-500', TONS[saude.tom].fundo)} style={{ width: `${Math.min((r.ltvCac ?? 0) / 5, 1) * 100}%` }} />
          </div>
          <div className="text-tagline-3 mt-1.5 flex justify-between text-white/45">
            <span>0</span>
            <span>1</span>
            <span>3 (saudável)</span>
            <span>5+</span>
          </div>
        </div>
        <div className="border-stroke-4 rounded-2xl border bg-white p-5">
          <p className="text-tagline-2 text-secondary/60 font-medium">CAC máximo por cliente</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {r.cacMaximo.map((c) => (
              <div key={c.id} className={cn('rounded-xl px-3 py-2.5', c.id === 'moderado' ? 'bg-lilas-50' : 'bg-background-2')}>
                <p className="text-tagline-3 text-secondary/60">
                  {c.nome} · {Math.round(c.pct * 100)}%
                </p>
                <p className="font-titulo text-secondary text-[1.125rem] font-semibold tabular-nums">{brl(c.valor)}</p>
              </div>
            ))}
          </div>
          {r.cplMaximo != null && (
            <p className="text-tagline-2 text-secondary/70 mt-3">
              Com {num(e.conversaoLead)}% de conversão, cada lead pode custar até <strong className="text-secondary">{brl(r.cplMaximo, 2)}</strong> (cenário moderado).
            </p>
          )}
        </div>
      </div>
      <div className="col-span-12 grid grid-cols-2 content-start gap-3 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-2 xl:grid-cols-3">
        <Cartao rotulo="LTV (margem)" valor={brl(r.ltv)} detalhe={e.tipo === 'unica' ? 'margem de uma venda' : `${num(r.compras, 0)} ${recorrente ? 'meses' : 'compras'} · receita ${brl(r.receitaVida)}`} />
        <Cartao
          rotulo="CAC atual"
          valor={brl(r.cac)}
          detalhe={r.outrosAquisicao ? `mídia ${brl(r.cacMidia)} + outros ${brl(r.cac - r.cacMidia)} por cliente` : `${brl(e.investimento * (1 + aj.cacPct / 100))} ÷ ${num(e.clientesNovos, 0)} clientes`}
          tom={r.cac > r.cacMaximo[1].valor ? 'ruim' : 'bom'}
        />
        <Cartao
          rotulo={e.tipo === 'unica' ? 'Vendas para pagar o CAC' : 'Payback do CAC'}
          valor={e.tipo === 'unica' ? (r.vendasParaPagar <= 1 ? 'na 1ª venda' : `${num(r.vendasParaPagar)} vendas`) : meses(r.paybackMeses)}
          detalhe={e.tipo === 'unica' ? 'margem de quantas vendas paga um cliente' : r.vidaMeses && r.paybackMeses != null && r.paybackMeses > r.vidaMeses ? 'mais que o tempo de vida do cliente' : 'meses de margem até o cliente se pagar'}
          tom={e.tipo === 'unica' ? (r.vendasParaPagar <= 1 ? 'bom' : 'ruim') : r.paybackMeses == null || !Number.isFinite(r.paybackMeses) || (r.vidaMeses != null && r.paybackMeses > r.vidaMeses) ? 'ruim' : r.paybackMeses <= 12 ? 'bom' : 'atencao'}
        />
        <Cartao rotulo="ROAS mínimo para empatar" valor={vezes(r.roasEmpate)} detalhe="na 1ª venda, com a sua margem" />
        <Cartao rotulo="ROAS atual" valor={vezes(r.roasPrimeira)} detalhe={e.tipo === 'unica' ? 'receita ÷ mídia' : `1ª venda · na vida do cliente ${vezes(r.roasVida)}`} tom={r.roasPrimeira != null && r.roasEmpate != null && r.roasPrimeira < r.roasEmpate && e.tipo === 'unica' ? 'ruim' : undefined} />
        <Cartao rotulo="ROI sobre a margem" valor={pct(roi)} detalhe={e.tipo === 'unica' ? 'lucro da margem ÷ investimento' : `na vida do cliente · 1ª venda ${pct(r.roiPrimeira)}`} tom={roi != null && roi < 0 ? 'ruim' : 'bom'} />
      </div>
    </div>
  );
}

// Barra de progresso: as etapas já vistas ficam clicáveis para voltar (ou avançar até onde a pessoa já chegou)
function Progresso({ passo, alcancado, onIr }: { passo: number; alcancado: number; onIr: (p: number) => void }) {
  return (
    <nav aria-label="Etapas da calculadora" className="mb-6">
      <div className="bg-stroke-4 h-1.5 overflow-hidden rounded-full">
        <div className="bg-primary-500 h-full rounded-full transition-all duration-500" style={{ width: `${(passo / (PASSOS.length - 1)) * 100}%` }} />
      </div>
      <ol className="mt-3 grid grid-cols-5 gap-1">
        {PASSOS.map((nome, i) => {
          const pode = i <= alcancado && i !== passo;
          return (
            <li key={nome}>
              <button
                type="button"
                disabled={!pode}
                onClick={() => onIr(i)}
                aria-current={i === passo ? 'step' : undefined}
                className={cn('flex w-full flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-2', pode && 'cursor-pointer hover:opacity-80')}
              >
                <span
                  className={cn(
                    'font-titulo flex size-7 shrink-0 items-center justify-center rounded-full text-[0.8125rem] font-semibold transition-colors',
                    i === passo ? 'bg-secondary text-primary-500' : i < passo || i <= alcancado ? 'bg-primary-500 text-secondary' : 'bg-stroke-4 text-secondary/45',
                  )}
                >
                  {i < passo || (i <= alcancado && i !== passo) ? <Check className="size-3.5" /> : i + 1}
                </span>
                <span className={cn('text-tagline-3 leading-tight', i === passo ? 'text-secondary font-semibold' : 'text-secondary/55', 'max-sm:hidden')}>{nome}</span>
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

export default function CalculadoraCac() {
  const [e, setE] = useState<Entradas>(COMECAR_COM_EXEMPLO ? EXEMPLO : VAZIO);
  const [carregou, setCarregou] = useState(false);
  const [aj, setAj] = useState<Ajustes>(SEM_AJUSTE);
  const [liberado, setLiberado] = useState(false);
  const [desejados, setDesejados] = useState(20);
  const [passo, setPasso] = useState(0);
  // Até onde a pessoa já chegou (as etapas até aqui ficam clicáveis na barra)
  const [alcancado, setAlcancado] = useState(0);
  const [aviso, setAviso] = useState('');
  const topo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Quem já se cadastrou em alguma ferramenta (neste navegador) vê o resultado direto
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (jaLiberado()) setLiberado(true);
    // Números que a pessoa já tinha preenchido neste navegador
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE_DADOS) ?? 'null') as Entradas | null;
      if (salvo?.custos) setE({ ...VAZIO, ...salvo });
    } catch {
      // nada salvo
    }
    setCarregou(true);
  }, []);

  // Salva os números da pessoa (o exemplo não) a cada mudança
  useEffect(() => {
    if (!carregou) return;
    try {
      if (e === EXEMPLO) localStorage.removeItem(CHAVE_DADOS);
      else localStorage.setItem(CHAVE_DADOS, JSON.stringify(e));
    } catch {
      // Sem localStorage: os números valem só nesta visita
    }
  }, [e, carregou]);

  const set = <K extends keyof Entradas>(k: K, v: Entradas[K]) => setE((x) => ({ ...x, [k]: v }));
  const base = useMemo(() => calcular(e), [e]);
  const r = useMemo(() => calcular(e, aj), [e, aj]);
  const recorrente = e.tipo === 'recorrente' || e.tipo === 'setup';
  const simulando = aj.ticketPct !== 0 || aj.cacPct !== 0 || aj.churn != null;
  const extrasVenda = e.custos.filter((c) => c.extra);
  // Custos que a pessoa adicionou, para o resumo que vai para a RD
  const resumoExtras = [
    ...extrasVenda.filter((c) => c.valor).map((c) => `${c.nome || 'custo'} ${c.modo === '%' ? `${num(c.valor)}%` : brl(c.valor, 2)}/venda`),
    ...e.custosAquisicao.filter((c) => c.valor).map((c) => `${c.nome || 'aquisição'} ${brl(c.valor)}/mês`),
  ];

  // O que falta para seguir de cada etapa (vazio = pode seguir)
  const pendencia = (p: number) => {
    if (p === 1) {
      if (!(e.ticket > 0)) return recorrente ? 'Informe a mensalidade.' : 'Informe o ticket médio.';
      if (e.tipo === 'recompra' && !(e.comprasAno > 0 && e.anos > 0)) return 'Informe as compras por ano e os anos como cliente.';
      if (recorrente && !(e.churn > 0)) return 'Informe o cancelamento por mês (churn).';
    }
    if (p === 2 && base.margem <= 0) return 'Os custos estão maiores que o preço: confira os valores.';
    if (p === 3 && !(e.clientesNovos > 0)) return 'Informe quantos clientes novos entram por mês.';
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

  return (
    <div className="[&_[role=radio]]:cursor-pointer [&_a]:cursor-pointer [&_button:not(:disabled)]:cursor-pointer [&_input[type=range]]:cursor-pointer">
      <section className="relative isolate pt-32 pb-8 md:pt-40 lg:pt-44">
        <div className="main-container">
          <div className="max-w-[760px] space-y-5">
            <div className="border-stroke-3 inline-flex items-center gap-x-2.5 rounded-full border bg-white/70 py-1.5 pr-3.5 pl-2.5">
              <span className="bg-primary-500 ring-primary-500/30 block size-2 shrink-0 rounded-full ring-4" />
              <span className="font-texto text-tagline-2 text-secondary font-medium">Ferramenta gratuita · 2 minutos</span>
            </div>
            <h1>
              Quanto você <span className="text-lilas-500">pode pagar</span> por um cliente?
            </h1>
            <p>
              Responda 4 etapas rápidas e veja seu LTV, o CAC que você tem hoje, o CAC máximo saudável, em quantos meses o investimento volta e o ROAS mínimo para não ter prejuízo.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-28">
        <div ref={topo} className="main-container scroll-mt-28">
          <div className={cn('mx-auto', passo === RESULTADO ? 'max-w-[1200px]' : 'max-w-[760px]')}>
            <Progresso passo={passo} alcancado={alcancado} onIr={ir} />

            <div key={passo} className="animate-[metodo-entra_.35s_ease-out] motion-reduce:animate-none">
              {passo === 0 && (
                <Etapa n={1} titulo="Como você vende?" descricao="Cada modelo calcula o tempo de vida do cliente de um jeito.">
                  <div role="radiogroup" aria-label="Tipo de negócio" className="grid gap-3 sm:grid-cols-2">
                    {TIPOS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        role="radio"
                        aria-checked={e.tipo === t.id}
                        onClick={() => set('tipo', t.id as TipoNegocio)}
                        className={cn(
                          'rounded-2xl border-2 p-4 text-left transition-all',
                          e.tipo === t.id ? 'border-secondary bg-secondary text-white shadow-[0_12px_32px_-16px_rgba(7,17,31,0.6)]' : 'border-stroke-4 hover:border-stroke-3 bg-background-2',
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span className={cn('size-2.5 rounded-full', e.tipo === t.id ? 'bg-primary-500' : 'bg-stroke-3')} />
                          <span className={cn('font-titulo text-tagline-1 font-semibold', e.tipo === t.id ? 'text-white' : 'text-secondary')}>{t.nome}</span>
                        </span>
                        <span className={cn('text-tagline-3 mt-1.5 block', e.tipo === t.id ? 'text-white/65' : 'text-secondary/60')}>{t.descricao}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-tagline-3 text-secondary/55 mt-4">
                    {e === EXEMPLO ? 'Já vem com um exemplo preenchido para você ver como funciona. ' : 'Não tem os números à mão? '}
                    <button type="button" onClick={() => setE(e === EXEMPLO ? VAZIO : EXEMPLO)} className="text-lilas-700 font-medium underline-offset-2 hover:underline">
                      {e === EXEMPLO ? 'Limpar e usar os meus números' : 'Preencher com um exemplo'}
                    </button>
                  </p>
                </Etapa>
              )}

              {passo === 1 && (
                <Etapa n={2} titulo="Preço e tempo de vida do cliente">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {e.tipo === 'setup' && <Numero id="setup" rotulo="Taxa de setup" prefixo="R$" valor={e.setup} onChange={(v) => set('setup', v)} ajuda="Cobrada uma vez, na entrada" />}
                    <Numero id="ticket" rotulo={recorrente ? 'Mensalidade' : 'Ticket médio por compra'} prefixo="R$" valor={e.ticket} onChange={(v) => set('ticket', v)} />
                    {e.tipo === 'recompra' && (
                      <>
                        <Numero id="comprasAno" rotulo="Compras por ano" valor={e.comprasAno} onChange={(v) => set('comprasAno', v)} ajuda="Quantas vezes um cliente compra em 12 meses" />
                        <Numero id="anos" rotulo="Anos como cliente" valor={e.anos} passo={0.5} onChange={(v) => set('anos', v)} ajuda="Em média, por quanto tempo continua comprando" />
                      </>
                    )}
                    {recorrente && (
                      <Numero
                        id="churn"
                        rotulo="Cancelamento por mês (churn)"
                        sufixo="% / mês"
                        passo={0.5}
                        valor={e.churn}
                        onChange={(v) => set('churn', v)}
                        ajuda={`Com ${num(e.churn)}% ao mês, o cliente fica em média ${num(100 / Math.max(e.churn, 0.1))} meses`}
                      />
                    )}
                  </div>
                </Etapa>
              )}

              {passo === 2 && (
                <Etapa n={3} titulo="Custos de cada venda" descricao="O que sai de cada venda (ou mensalidade). Escolha em % do preço ou em reais.">
                  <div className="space-y-4">
                    {e.custos.map((c, i) => (
                      <LinhaCusto
                        key={c.id}
                        custo={c}
                        exemplo={EXEMPLOS_VENDA[extrasVenda.indexOf(c) % EXEMPLOS_VENDA.length] ?? 'Nome do custo'}
                        onChange={(novo) => set('custos', e.custos.map((x, j) => (j === i ? novo : x)))}
                        onRemover={() => set('custos', e.custos.filter((_, j) => j !== i))}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={() => set('custos', [...e.custos, { id: `extra-${Date.now()}`, nome: '', modo: 'R$', valor: 0, extra: true }])} className={botaoAdicionar}>
                    <Plus className="size-4" /> Adicionar custo
                  </button>
                  <div className="bg-background-3 mt-6 flex flex-wrap items-baseline justify-between gap-2 rounded-2xl px-5 py-4">
                    <span className="text-tagline-2 text-secondary/70">Margem de contribuição por {recorrente ? 'mês' : 'compra'}</span>
                    <span className="font-titulo text-secondary text-[1.25rem] font-semibold tabular-nums">
                      {brl(base.margem, 2)} <span className="text-secondary/50 text-tagline-2 font-medium">· {pct(base.margemPct, 1)}</span>
                    </span>
                  </div>
                </Etapa>
              )}

              {passo === 3 && (
                <Etapa n={4} titulo="Aquisição" descricao="Quanto você investe para trazer clientes novos hoje.">
                  <div className="grid gap-5 sm:grid-cols-3">
                    <Numero id="investimento" rotulo="Mídia por mês" prefixo="R$" valor={e.investimento} onChange={(v) => set('investimento', v)} ajuda="Google, Meta e outros anúncios" />
                    <Numero id="clientes" rotulo="Clientes novos por mês" valor={e.clientesNovos} onChange={(v) => set('clientesNovos', v)} />
                    <Numero id="conversao" rotulo="Lead → venda (opcional)" sufixo="%" passo={0.5} valor={e.conversaoLead} onChange={(v) => set('conversaoLead', v)} ajuda="De cada 100 leads, quantos compram" />
                  </div>
                  {e.custosAquisicao.length > 0 && (
                    <div className="mt-5 space-y-3">
                      {e.custosAquisicao.map((c, k) => (
                        <div key={c.id} className="grid grid-cols-[1fr_120px_auto] items-center gap-2 sm:grid-cols-[1fr_160px_auto]">
                          <input
                            aria-label="Nome do custo de aquisição"
                            placeholder={EXEMPLOS_AQUISICAO[k % EXEMPLOS_AQUISICAO.length]}
                            value={c.nome}
                            onChange={(ev) => set('custosAquisicao', e.custosAquisicao.map((x, j) => (j === k ? { ...x, nome: ev.target.value } : x)))}
                            className={cn(inputClass, 'text-tagline-2 py-2.5 font-medium')}
                          />
                          <div className="relative">
                            <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">R$</span>
                            <input
                              aria-label={`${c.nome || 'Custo de aquisição'} por mês`}
                              type="number"
                              inputMode="decimal"
                              min={0}
                              value={c.valor}
                              onChange={(ev) => set('custosAquisicao', e.custosAquisicao.map((x, j) => (j === k ? { ...x, valor: Number(ev.target.value) || 0 } : x)))}
                              className={cn(inputClass, 'py-2.5 pl-11')}
                            />
                          </div>
                          <button type="button" onClick={() => set('custosAquisicao', e.custosAquisicao.filter((_, j) => j !== k))} aria-label="Remover custo" className={botaoRemover}>
                            <X className="size-4" />
                          </button>
                        </div>
                      ))}
                      <p className="text-tagline-3 text-secondary/55">Valores por mês. Somam com a mídia no CAC; o ROAS continua só sobre a mídia.</p>
                    </div>
                  )}
                  <button type="button" onClick={() => set('custosAquisicao', [...e.custosAquisicao, { id: `aq-${Date.now()}`, nome: '', valor: 0 }])} className={botaoAdicionar}>
                    <Plus className="size-4" /> Adicionar custo de aquisição
                  </button>
                </Etapa>
              )}

              {passo === RESULTADO &&
                (liberado ? (
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-white px-5 py-3.5">
                      <span className="text-tagline-2 text-secondary/60">Seus números:</span>
                      {[
                        { rotulo: TIPOS.find((t) => t.id === e.tipo)!.nome, p: 0 },
                        { rotulo: `${recorrente ? 'mensalidade' : 'ticket'} ${brl(e.ticket)}`, p: 1 },
                        { rotulo: `margem ${pct(base.margemPct, 1)}`, p: 2 },
                        { rotulo: `${brl(e.investimento + r.outrosAquisicao)}/mês · ${num(e.clientesNovos, 0)} clientes`, p: 3 },
                      ].map((x) => (
                        <button
                          key={x.p}
                          type="button"
                          onClick={() => ir(x.p)}
                          className="border-stroke-3 text-tagline-2 text-secondary hover:border-secondary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 transition-colors"
                        >
                          {x.rotulo} <Pencil className="text-secondary/50 size-3" />
                        </button>
                      ))}
                    </div>
                    <Resultados e={e} r={r} aj={aj} />
                    <Acoes e={e} r={r} />
                  </div>
                ) : (
                  <div className="grid grid-cols-12 items-start gap-6">
                    <div className="col-span-12 lg:col-span-5">
                      <Cadastro r={r} tipo={e.tipo} extras={resumoExtras} onLiberar={() => setLiberado(true)} />
                    </div>
                    <div aria-hidden className="pointer-events-none col-span-7 hidden blur-[7px] select-none lg:block">
                      <Resultados e={e} r={r} aj={aj} />
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
                  <div className="flex items-center gap-2">
                    {alcancado === RESULTADO && passo < 3 && !pendencia(passo) && (
                      <button type="button" onClick={() => ir(RESULTADO)} className="text-tagline-2 text-secondary/70 hover:text-secondary max-sm:hidden rounded-full px-4 py-3 font-medium underline-offset-2 hover:underline">
                        Ir para o resultado
                      </button>
                    )}
                    <ButtonPrimarySubmit type="button" onClick={proximo} text={passo === 3 ? 'Ver resultado' : 'Próximo'} className="h-14 [&_[data-button-lower-text]]:max-md:block" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {passo === RESULTADO && liberado && (
        <section className="bg-secondary relative isolate overflow-hidden py-16 md:py-24">
          <div className="from-lilas-500/25 pointer-events-none absolute -top-40 left-1/3 -z-10 size-[520px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />
          <div className="main-container grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 space-y-4 lg:col-span-5">
              <p className="text-tagline-2 text-primary-500 flex items-center gap-2 font-medium">
                <Sparkles className="size-4" /> Simulador
              </p>
              <h2 className="text-white">E se…?</h2>
              <p className="text-white/65">Mexa nos números e veja na hora o efeito no LTV:CAC, no payback e no CAC máximo. Os resultados acima também mudam.</p>
              <div className="space-y-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <Deslizante rotulo="Ticket / mensalidade" min={-30} max={50} passo={5} valor={aj.ticketPct} onChange={(v) => setAj((a) => ({ ...a, ticketPct: v }))} mostrar={`${aj.ticketPct > 0 ? '+' : ''}${aj.ticketPct}% · ${brl(r.ticket)}`} />
                <Deslizante rotulo="Custo de aquisição (CAC)" min={-50} max={50} passo={5} valor={aj.cacPct} onChange={(v) => setAj((a) => ({ ...a, cacPct: v }))} mostrar={`${aj.cacPct > 0 ? '+' : ''}${aj.cacPct}% · ${brl(r.cac)}`} />
                {recorrente && (
                  <Deslizante rotulo="Cancelamento por mês" min={0.5} max={20} passo={0.5} valor={aj.churn ?? e.churn} onChange={(v) => setAj((a) => ({ ...a, churn: v }))} mostrar={`${num(aj.churn ?? e.churn)}% · ${num(100 / (aj.churn ?? e.churn))} meses`} />
                )}
                {simulando && (
                  <button type="button" onClick={() => setAj(SEM_AJUSTE)} className="text-tagline-2 inline-flex items-center gap-2 text-white/70 hover:text-white">
                    <RotateCcw className="size-4" /> Voltar aos números informados
                  </button>
                )}
              </div>
            </div>

            <div className="col-span-12 space-y-6 lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { rotulo: 'LTV:CAC', antes: base.ltvCac == null ? '—' : `${num(base.ltvCac)} : 1`, depois: r.ltvCac == null ? '—' : `${num(r.ltvCac)} : 1` },
                  { rotulo: 'LTV', antes: brl(base.ltv), depois: brl(r.ltv) },
                  { rotulo: e.tipo === 'unica' ? 'Vendas p/ pagar' : 'Payback', antes: e.tipo === 'unica' ? num(base.vendasParaPagar) : meses(base.paybackMeses), depois: e.tipo === 'unica' ? num(r.vendasParaPagar) : meses(r.paybackMeses) },
                ].map((x) => (
                  <div key={x.rotulo} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-tagline-2 text-white/55">{x.rotulo}</p>
                    <p className="font-titulo text-primary-500 mt-1 text-[1.5rem] font-semibold tabular-nums">{x.depois}</p>
                    <p className="text-tagline-3 text-white/45">hoje: {x.antes}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-white p-6 md:p-7">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="font-titulo text-heading-6 text-secondary font-medium">Quanto investir para crescer</p>
                    <p className="text-tagline-2 mt-1">Investimento por mês para trazer os clientes que você quer, em cada cenário de CAC máximo.</p>
                  </div>
                  <label className="text-tagline-2 text-secondary flex items-center gap-2 font-medium">
                    Clientes novos / mês
                    <input type="number" min={1} value={desejados} onChange={(ev) => setDesejados(Math.max(Number(ev.target.value) || 0, 0))} className={cn(inputClass, 'w-24 py-2')} />
                  </label>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {r.cacMaximo.map((c) => (
                    <div key={c.id} className={cn('rounded-2xl p-4', c.id === 'moderado' ? 'bg-lilas-50' : 'bg-background-2')}>
                      <p className="text-tagline-3 text-secondary/60">
                        {c.nome} · CAC até {brl(c.valor)}
                      </p>
                      <p className="font-titulo text-secondary mt-1 text-[1.375rem] font-semibold tabular-nums">{brl(c.valor * desejados)}</p>
                      <p className="text-tagline-3 text-secondary/55">por mês</p>
                    </div>
                  ))}
                </div>
                <p className="text-tagline-2 text-secondary/70 mt-4">
                  Com o CAC de hoje ({brl(r.cac)}), {num(desejados, 0)} clientes custariam <strong className="text-secondary">{brl(r.cac * desejados)}</strong> por mês.
                </p>
              </div>

              <Acoes e={e} r={r} escuro />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// Formulário que libera o resultado: vai para a RD Station como conversão "calculadora-cac" (mesma rota dos formulários do site)
function Cadastro({ r, tipo, extras, onLiberar }: { r: ReturnType<typeof calcular>; tipo: TipoNegocio; extras: string[]; onLiberar: () => void }) {
  const [dados, setDados] = useState({ nome: '', email: '', telefone: '' });
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');

  const enviar = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const honeypot = String(new FormData(ev.currentTarget).get('companyWebsite') || '').trim();
    if (honeypot) return onLiberar();
    setEnviando(true);
    setErro('');
    const q = new URLSearchParams(window.location.search);
    const formData = {
      ...dados,
      businessType: TIPOS.find((t) => t.id === tipo)?.nome ?? tipo,
      ticket: brl(r.ticket),
      // Resumo do resultado no campo "principal dor", para o comercial já ligar sabendo o cenário
      mainPain: [
        `Calculadora CAC: LTV:CAC ${r.ltvCac == null ? '—' : num(r.ltvCac)} · CAC ${brl(r.cac)} · LTV ${brl(r.ltv)} · CAC máx. moderado ${brl(r.cacMaximo[1].valor)}`,
        extras.length ? `Custos extras: ${extras.join(', ')}` : '',
      ]
        .filter(Boolean)
        .join(' · '),
      utm_source: q.get('utm_source') || '',
      utm_medium: q.get('utm_medium') || '',
      utm_campaign: q.get('utm_campaign') || '',
      utm_content: q.get('utm_content') || '',
      utm_term: q.get('utm_term') || '',
      companyWebsite: honeypot,
    };
    try {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'Lead', formName: FORM_NAME, location: 'calculadora-cac', formData });
    } catch {
      // Tracking não pode bloquear o envio
    }
    try {
      const res = await fetch('/api/rd-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formName: FORM_NAME, pagePath: '/ferramentas/calculadora-cac', pageUrl: window.location.href, formData }),
      });
      if (!res.ok) throw new Error();
      salvarCadastro({ nome: dados.nome, email: dados.email });
      onLiberar();
    } catch {
      setErro('Não conseguimos enviar agora. Tente novamente em alguns segundos.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={enviar} className="border-stroke-3 relative w-full max-w-[420px] space-y-4 rounded-3xl border bg-white p-6 shadow-[0_30px_80px_-30px_rgba(7,17,31,0.45)] md:p-7">
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </div>
        <span className="bg-lilas-50 text-lilas-700 flex size-11 items-center justify-center rounded-2xl">
          <Lock className="size-5" />
        </span>
        <div>
          <p className="font-titulo text-heading-6 text-secondary font-medium">Seu resultado está pronto</p>
          <p className="text-tagline-2 mt-1">Informe seus dados para ver o diagnóstico completo. Depois você pode voltar e mudar qualquer número.</p>
        </div>
        <input required placeholder="Seu nome" autoComplete="name" value={dados.nome} onChange={(ev) => setDados((d) => ({ ...d, nome: ev.target.value }))} className={inputClass} aria-label="Nome" />
        <input required type="email" placeholder="voce@empresa.com.br" autoComplete="email" value={dados.email} onChange={(ev) => setDados((d) => ({ ...d, email: ev.target.value }))} className={inputClass} aria-label="E-mail" />
        <input
          required
          type="tel"
          placeholder="WhatsApp com DDD"
          autoComplete="tel"
          pattern="[\d\s()+-]{10,}"
          title="Informe o WhatsApp com DDD"
          value={dados.telefone}
          onChange={(ev) => setDados((d) => ({ ...d, telefone: ev.target.value }))}
          className={inputClass}
          aria-label="WhatsApp"
        />
        {erro && <p className="text-tagline-2 text-red-600">{erro}</p>}
        <ButtonPrimarySubmit disabled={enviando} text={enviando ? 'Enviando…' : 'Ver meu resultado'} className="h-14 w-full disabled:opacity-60 [&>span]:w-full" />
        <p className="text-tagline-3 text-secondary/55">
          Ao enviar, você concorda com a nossa{' '}
          <a href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </a>
          . Sem spam.
        </p>
      </form>
    </div>
  );
}


// Botões do resultado: "Quero ajuda no meu marketing" (WhatsApp da UPDO com os números + conversão na RD) e o PDF do diagnóstico
function Acoes({ e, r, escuro = false }: { e: Entradas; r: ReturnType<typeof calcular>; escuro?: boolean }) {
  const [gerando, setGerando] = useState(false);

  const pedirAjuda = () => {
    const quem = lerCadastro();
    const msg = [
      'Olá! Fiz a calculadora de CAC e LTV da UPDO e quero ajuda no meu marketing.',
      `*Tipo:* ${TIPOS.find((t) => t.id === e.tipo)?.nome}`,
      `*LTV:CAC:* ${r.ltvCac == null ? '—' : num(r.ltvCac)} : 1`,
      `*CAC atual:* ${brl(r.cac)} (máximo saudável ${brl(r.cacMaximo[1].valor)})`,
      `*LTV:* ${brl(r.ltv)}`,
    ].join('\n');
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    try {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'Lead', formName: 'calculadora-cac-quero-ajuda', location: 'calculadora-cac' });
    } catch {
      // Tracking não pode bloquear o WhatsApp
    }
    // A conversão na RD precisa do e-mail do cadastro
    if (quem.email) {
      fetch('/api/rd-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'calculadora-cac-quero-ajuda',
          pagePath: '/ferramentas/calculadora-cac',
          pageUrl: window.location.href,
          formData: { nome: quem.nome ?? '', email: quem.email, mainPain: `Pediu ajuda pela calculadora: LTV:CAC ${r.ltvCac == null ? '—' : num(r.ltvCac)} · CAC ${brl(r.cac)} · LTV ${brl(r.ltv)}` },
        }),
      }).catch(() => {});
    }
  };

  const baixarPdf = async () => {
    setGerando(true);
    try {
      const [{ pdf }, { RelatorioPdf }] = await Promise.all([import('@react-pdf/renderer'), import('./relatorio-pdf')]);
      const blob = await pdf(<RelatorioPdf e={e} origem={window.location.origin} nome={lerCadastro().nome} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'diagnostico-cac-ltv-updo.pdf';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } finally {
      setGerando(false);
    }
  };

  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center', !escuro && 'rounded-3xl bg-white p-4 md:p-5')}>
      <ButtonPrimarySubmit type="button" onClick={pedirAjuda} text="Quero ajuda no meu marketing" className="h-14 w-full sm:w-auto [&>span]:w-full" />
      <button
        type="button"
        onClick={baixarPdf}
        disabled={gerando}
        className={cn(
          'text-tagline-1 inline-flex h-14 items-center justify-center gap-2 rounded-full border px-6 font-medium transition-all duration-300 active:scale-[0.98] disabled:opacity-60',
          escuro ? 'border-white/20 text-white hover:border-white/50 hover:bg-white/5' : 'border-stroke-3 text-secondary hover:border-secondary hover:bg-background-2',
        )}
      >
        {gerando ? <Loader2 className="size-5 animate-spin" /> : <Download className="size-5" />}
        {gerando ? 'Gerando PDF…' : 'Baixar diagnóstico em PDF'}
      </button>
      {!escuro && (
        <p className="text-tagline-3 text-secondary/55 flex items-center gap-1.5 sm:ml-auto">
          <WhatsAppIcon color="currentColor" className="size-4" /> Fale direto com o time da UPDO
        </p>
      )}
    </div>
  );
}
