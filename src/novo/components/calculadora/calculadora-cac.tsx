'use client';

import { cn } from '@/novo/utils/cn';
import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import { siteConfig } from '@/config/site';
import { avisarFerramenta, jaLiberado, lerCadastro, marcarEnviada, salvarCadastro } from '@/novo/components/ferramentas/cadastro';
import { ArrowLeft, CalendarCheck, Check, Lock, Pencil, Plus, Repeat, Rocket, RotateCcw, ShoppingBag, ShoppingCart, Target, UserRound, X, type LucideIcon } from 'lucide-react';
import { type FormEvent, type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { type Ajustes, type Custo, type Entradas, type TipoNegocio, EXEMPLO, TIPOS, VAZIO, calcular, CONVERSAO_PADRAO, horizonte, MAX_PRODUTOS, nomeProduto, type Produto, roiFrase, roiMultiplo, SEGMENTOS } from './calculo';
import { enviarConversao } from '@/novo/components/ferramentas/cadastro';
import { COMECAR_COM_EXEMPLO } from '@/novo/data/ferramentas';
import AcoesFerramenta from '@/novo/components/ferramentas/acoes-ferramenta';
import { Dica } from '@/novo/components/ferramentas/dica';

const FORM_NAME = 'calculadora-cac';
// Os números da pessoa ficam salvos no navegador para ela voltar e ajustar
const CHAVE_DADOS = 'updo-calculadora-dados';
// Os produtos que a pessoa calculou (análise por produto)
const CHAVE_PRODUTOS = 'updo-calculadora-produtos';

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

// Cores dos 3 cenários (as da planilha LTV x CAC): verde, amarelo e vermelho
const CORES_CENARIO = {
  conservador: { borda: 'border-primary-500', fundo: 'bg-primary-50', texto: 'text-primary-800', ponto: 'bg-primary-500' },
  moderado: { borda: 'border-amber-400', fundo: 'bg-amber-50', texto: 'text-amber-700', ponto: 'bg-amber-400' },
  agressivo: { borda: 'border-red-400', fundo: 'bg-red-50', texto: 'text-red-700', ponto: 'bg-red-500' },
} as const;

const inputClass =
  'border-stroke-3 text-tagline-1 text-secondary placeholder:text-secondary/40 focus:border-secondary w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors';
const labelClass = 'text-tagline-2 text-secondary mb-2 block font-medium';
const botaoAdicionar =
  'border-stroke-3 text-tagline-2 text-secondary hover:border-secondary mt-4 inline-flex items-center gap-2 rounded-full border border-dashed px-4 py-2 font-medium transition-colors';
const botaoRemover = 'text-secondary/45 hover:text-secondary hover:bg-background-3 flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors';

// Explicação de cada termo técnico, em uma frase simples (aparece no "?")
const DICAS = {
  ltv: 'LTV é quanto um cliente deixa de lucro (já descontados os custos de cada venda) durante todo o tempo que compra de você.',
  churn: 'Churn é a parte dos clientes que cancela a cada mês. Com 5% ao mês, o cliente fica, em média, 20 meses.',
  margem: 'Margem de contribuição é o que sobra de cada venda depois de pagar os custos dela (imposto, cartão, comissão, produto).',
  cac: 'CAC é quanto custa trazer um cliente novo: tudo o que você gasta para vender (mídia, agência e time comercial) dividido pelos clientes que entram.',
  cpl: 'CPL é quanto custa cada lead (contato interessado). O CPL ideal é o CAC máximo vezes a taxa de leads que viram venda.',
  roas: 'ROAS é quanto volta de receita para cada R$ 1 investido em anúncios. ROAS de 4x = R$ 4 de receita para cada R$ 1.',
  roasEmpate: 'Abaixo desse ROAS, a margem da primeira venda não paga o anúncio. Acima dele, cada venda já começa no lucro.',
  roi: 'ROI é quanto sobra de lucro para cada R$ 1 investido, depois de pagar o investimento. ROI de 1,5x = R$ 1,50 de lucro para cada R$ 1.',
  payback: 'Payback é o tempo que o cliente leva para devolver, em margem, o que custou para trazê-lo.',
  ltvCac: 'LTV:CAC mostra quantas vezes o cliente devolve o que custou. O saudável é 3 ou mais.',
  stopLoss: 'Stop loss é o custo por venda em que você para: pagando o LTV inteiro por um cliente, toda a margem dele vai para a aquisição e não sobra lucro.',
};

// Ícone e exemplos do dia a dia de cada tipo de venda (etapa 1)
const VISUAL_TIPO: Record<TipoNegocio, { icone: LucideIcon; exemplos: string }> = {
  unica: { icone: ShoppingBag, exemplos: 'Imóvel, carro, curso, corretagem de plano de saúde ou seguro' },
  recompra: { icone: Repeat, exemplos: 'Loja, restaurante, e-commerce' },
  recorrente: { icone: CalendarCheck, exemplos: 'SaaS, academia, plano de saúde (operadora)' },
  setup: { icone: Rocket, exemplos: 'Software com implantação, agência' },
};

// Exemplos do nome do produto (mudam a cada produto novo)
const EXEMPLOS_PRODUTO = ['consulta, matrícula, projeto', 'ingresso de show, plano mensal', 'pacote de serviço, curso online'];

// Exemplos que aparecem no nome de cada custo novo
const EXEMPLOS_VENDA = ['Frete', 'Embalagem', 'Taxa do marketplace'];

function Numero({ id, rotulo, valor, onChange, prefixo, sufixo, ajuda, dica, passo = 1 }: { id: string; rotulo: string; valor: number; onChange: (v: number) => void; prefixo?: string; sufixo?: string; ajuda?: string; dica?: string; passo?: number }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {rotulo}
        {dica && <Dica texto={dica} />}
      </label>
      <div className="relative">
        {prefixo && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">{prefixo}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={passo}
          value={Number.isFinite(valor) && valor !== 0 ? valor : ''}
          placeholder="0"
          onFocus={(ev) => ev.target.select()}
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
          value={custo.valor || ''}
          placeholder="0"
          onFocus={(ev) => ev.target.select()}
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

function Cartao({ rotulo, valor, detalhe, dica, destaque = false }: { rotulo: string; valor: string; detalhe?: string; dica?: string; destaque?: boolean }) {
  return (
    <div className={cn('rounded-2xl p-5', destaque ? 'bg-secondary text-white' : 'border-stroke-4 border bg-white')}>
      <p className={cn('text-tagline-2 font-medium', destaque ? 'text-white/65' : 'text-secondary/60')}>
        {rotulo}
        {dica && <Dica texto={dica} claro={destaque} />}
      </p>
      <p className={cn('font-titulo mt-1 text-[1.75rem] leading-tight font-semibold tabular-nums', destaque ? 'text-primary-500' : 'text-secondary')}>{valor}</p>
      {detalhe && <p className={cn('text-tagline-3 mt-1', destaque ? 'text-white/55' : 'text-secondary/55')}>{detalhe}</p>}
    </div>
  );
}

function Deslizante({ rotulo, valor, min, max, passo, onChange, mostrar }: { rotulo: string; valor: number; min: number; max: number; passo: number; onChange: (v: number) => void; mostrar: string }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-tagline-2 text-secondary font-medium">{rotulo}</span>
        <span className="font-titulo text-lilas-700 text-[1.125rem] font-semibold tabular-nums">{mostrar}</span>
      </span>
      <input type="range" min={min} max={max} step={passo} value={valor} onChange={(ev) => onChange(Number(ev.target.value))} className="accent-lilas-500 mt-3 w-full cursor-pointer" />
    </label>
  );
}

const SEM_AJUSTE: Ajustes = { ticketPct: 0, churn: null, clientes: null };

const PASSOS = ['Como você vende', 'Preço', 'Custos', 'Aquisição', 'Resultado'] as const;
const RESULTADO = 4;

// Resultado: quanto investir para ter os clientes que a pessoa quer, nos 3 cenários (verde, amarelo, vermelho), e o LTV.
// Também aparece embaçado atrás do cadastro
function Resultados({ e, r }: { e: Entradas; r: ReturnType<typeof calcular> }) {
  const recorrente = e.tipo === 'recorrente' || e.tipo === 'setup';
  const [cons, mod, agr] = r.plano;
  return (
    <div className="space-y-4">
      <SeusAlvos r={r} />
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-secondary relative col-span-12 overflow-hidden rounded-3xl p-6 text-white md:p-7 lg:col-span-5">
          <div className="from-lilas-500/35 pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br to-transparent blur-2xl" />
          <p className="text-tagline-2 flex items-center gap-2 font-medium text-white/65">
            <Target className="size-4" /> Para ter {num(r.desejados, 0)} {r.desejados === 1 ? 'cliente novo' : 'clientes novos'} por mês
          </p>
          <p className="font-titulo mt-3 text-[2.5rem] leading-none font-semibold text-white tabular-nums">{brl(mod.investimento)}</p>
          <p className="text-tagline-2 mt-2 text-white/75">por mês no cenário moderado (CAC de até {brl(mod.cac)} por cliente)</p>
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
            {[cons, mod, agr].map((p) => (
              <div key={p.id}>
                <p className="text-tagline-3 flex items-center gap-1.5 text-white/55">
                  <span className={cn('size-2 rounded-full', CORES_CENARIO[p.id].ponto)} />
                  {p.nome}
                </p>
                <p className="font-titulo mt-1 text-[1.05rem] font-semibold text-white tabular-nums">{brl(p.investimento)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-2 content-start gap-3 lg:col-span-7 xl:grid-cols-3">
          <Cartao rotulo="LTV (margem)" dica={DICAS.ltv} valor={brl(r.ltv)} detalhe={e.tipo === 'unica' ? 'margem de uma venda' : `${num(r.compras, 0)} ${recorrente ? 'meses' : 'compras'} · receita ${brl(r.receitaVida)}`} />
          <Cartao rotulo={`Margem por ${recorrente ? 'mês' : 'venda'}`} dica={DICAS.margem} valor={brl(r.margem, 2)} detalhe={`${pct(r.margemPct, 1)} do preço`} />
          <Cartao rotulo="ROAS mínimo para empatar" dica={DICAS.roasEmpate} valor={vezes(r.roasEmpate)} detalhe="na 1ª venda, com a sua margem" />
        </div>
      </div>
      <PlanoClientes e={e} r={r} />
    </div>
  );
}

// Os alvos para as campanhas: custo por venda (CAC máximo) e custo por lead (CAC × taxa de lead em venda) nos 3 cenários
function SeusAlvos({ r }: { r: ReturnType<typeof calcular> }) {
  const faixa = (Icone: LucideIcon, rotulo: string, ajuda: string, valores: (number | null)[], casas: number, dica: string) => (
    <div className="grid gap-3 md:grid-cols-[280px_1fr] md:items-center">
      <div className="flex items-start gap-3">
        <span className="bg-lilas-100 text-lilas-700 flex size-9 shrink-0 items-center justify-center rounded-xl">
          <Icone className="size-[1.125rem]" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div>
          <p className="font-titulo text-tagline-1 text-secondary font-semibold whitespace-nowrap">
            {rotulo}
            <Dica texto={dica} />
          </p>
          <p className="text-tagline-3 text-secondary/55">{ajuda}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {r.plano.map((p, i) => {
          const cor = CORES_CENARIO[p.id];
          return (
            <div key={p.id} className={cn('min-w-0 rounded-xl border-2 px-2 py-1.5 sm:px-3 sm:py-2', cor.borda, cor.fundo)}>
              <p className={cn('flex items-center gap-1.5 text-[0.6875rem] font-medium sm:text-[0.75rem]', cor.texto)}>
                <span className={cn('size-2 shrink-0 rounded-full', cor.ponto)} />
                <span className="truncate">{p.nome}</span>
              </p>
              <p className="font-titulo text-secondary text-[0.875rem] leading-tight font-semibold whitespace-nowrap tabular-nums sm:text-[1.05rem]">
                <span className="text-secondary/50 text-[0.75rem] font-medium max-sm:hidden">até </span>
                {valores[i] == null ? '—' : brl(valores[i]!, casas)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className="border-stroke-4 space-y-4 rounded-3xl border bg-white p-6 md:p-7">
      <div>
        <p className="font-titulo text-heading-6 text-secondary font-medium">Seus alvos</p>
        <p className="text-tagline-2 mt-1">Use estes números como meta nas suas campanhas: acima deles, cada cliente novo começa a sair caro.</p>
      </div>
      {faixa(
        UserRound,
        'Custo por lead ideal',
        `com ${num(r.conversaoUsada)}% dos leads virando venda${r.conversaoEstimada ? ' (estimativa)' : ''}`,
        r.plano.map((p) => p.cpl),
        2,
        DICAS.cpl,
      )}
      {faixa(ShoppingCart, 'Custo por venda ideal', 'quanto pode custar cada cliente novo', r.plano.map((p) => p.cac), 0, DICAS.cac)}
      {r.plano[0].leads != null && (
        <p className="text-tagline-3 text-secondary/60">
          Para {num(r.desejados, 0)} clientes por mês, são cerca de <strong className="text-secondary">{num(Math.ceil(r.plano[0].leads), 0)} leads por mês</strong>.
          {r.conversaoEstimada ? ` Como você não sabe a sua taxa, usamos ${CONVERSAO_PADRAO}%, uma referência conservadora.` : ''}
        </p>
      )}
      {r.ltv > 0 && (
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-red-200 bg-red-50/60 px-4 py-3">
          <p className="text-tagline-2 font-semibold text-red-700">
            Limite (stop loss): acima de {brl(r.ltv)} por venda, você paga para vender
            <Dica texto={DICAS.stopLoss} />
          </p>
          <p className="text-tagline-3 text-secondary/60">{r.vidaMeses == null ? 'É toda a margem da venda.' : `É toda a margem que o cliente deixa ${horizonte(r)}, e esse dinheiro só volta ao longo desse tempo.`}</p>
        </div>
      )}
    </div>
  );
}

// Os 3 cenários lado a lado: investimento, CAC máximo, retorno, payback e, com a taxa de lead em venda, leads e CPL
function PlanoClientes({ e, r }: { e: Entradas; r: ReturnType<typeof calcular> }) {
  const linha = (rotulo: string, valor: string, cor?: string, dica?: string) => (
    <div className="flex justify-between gap-2">
      <dt className="text-secondary/60">
        {rotulo}
        {dica && <Dica texto={dica} />}
      </dt>
      <dd className={cn('font-semibold tabular-nums', cor ?? 'text-secondary')}>{valor}</dd>
    </div>
  );
  return (
    <div className="border-stroke-4 rounded-3xl border bg-white p-6 md:p-7">
      <p className="font-titulo text-heading-6 text-secondary font-medium">Quanto investir para ter {num(r.desejados, 0)} clientes novos por mês</p>
      <p className="text-tagline-2 mt-1">O CAC máximo de cada cenário é uma parte do LTV (o que o cliente deixa de margem). Receita, lucro, ROI e ROAS são na vida desses clientes ({r.vidaMeses == null ? 'na venda' : `${Math.round(r.vidaMeses)} meses`}).</p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {r.plano.map((p) => {
          const cor = CORES_CENARIO[p.id];
          return (
            <div key={p.id} className={cn('rounded-2xl border-2 p-5', cor.borda, cor.fundo)}>
              <p className={cn('text-tagline-2 flex items-center gap-2 font-semibold', cor.texto)}>
                <span className={cn('size-2.5 rounded-full', cor.ponto)} />
                {p.nome} · CAC de {Math.round(p.pct * 100)}% do LTV
              </p>
              <p className="text-tagline-3 text-secondary/60 mt-3">Investimento por mês</p>
              <p className="font-titulo text-secondary text-[1.6rem] leading-tight font-semibold tabular-nums">{brl(p.investimento)}</p>
              <p className="text-tagline-3 text-secondary/60">CAC de até {brl(p.cac)} por cliente</p>
              <dl className="text-tagline-3 border-secondary/10 mt-4 space-y-1.5 border-t pt-3">
                {linha(`Receita ${horizonte(r)}`, brl(p.receita))}
                {linha('Lucro na margem', brl(p.lucro))}
                {linha(`ROI · ROAS ${horizonte(r)}`, `${roiMultiplo(p.roi)} · ${vezes(p.roas)}`, cor.texto, `${DICAS.roi} ${DICAS.roas}`)}
                {linha(e.tipo === 'unica' ? 'Vendas para pagar o CAC' : 'Payback do CAC', e.tipo === 'unica' ? (p.vendasParaPagar <= 1 ? 'na 1ª venda' : `${num(p.vendasParaPagar)} vendas`) : meses(p.payback), undefined, DICAS.payback)}
                {linha('LTV : CAC', `${num(p.ltvCac)} : 1`, undefined, DICAS.ltvCac)}
                {p.leads != null && linha('Leads por mês', num(Math.ceil(p.leads), 0))}
                {p.cpl != null && linha('Custo máximo por lead', brl(p.cpl, 2), undefined, DICAS.cpl)}
              </dl>
              {roiFrase(p.roi, r) && <p className={cn('text-tagline-3 mt-3 font-medium', cor.texto)}>{roiFrase(p.roi, r)}</p>}
            </div>
          );
        })}
      </div>
      {r.conversaoEstimada && <p className="text-tagline-3 text-secondary/55 mt-3">Leads e custo por lead calculados com {CONVERSAO_PADRAO}% de conversão (estimativa, porque você marcou &ldquo;não sei&rdquo;).</p>}
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
  const [produtos, setProdutos] = useState<Produto[]>([{ id: 'p1', e: COMECAR_COM_EXEMPLO ? EXEMPLO : VAZIO }]);
  const [atual, setAtual] = useState('p1');
  const e = (produtos.find((p) => p.id === atual) ?? produtos[0]).e;
  const setE = (v: Entradas | ((x: Entradas) => Entradas)) => setProdutos((ps) => ps.map((p) => (p.id === atual ? { ...p, e: typeof v === 'function' ? v(p.e) : v } : p)));
  // Produtos já avisados à RD (a cada produto novo calculado, uma conversão de atualização)
  const avisados = useRef<Set<string>>(new Set());
  const [carregou, setCarregou] = useState(false);
  const [aj, setAj] = useState<Ajustes>(SEM_AJUSTE);
  const [liberado, setLiberado] = useState(false);
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
      const lista = JSON.parse(localStorage.getItem(CHAVE_PRODUTOS) ?? 'null') as { produtos: Produto[]; atual: string } | null;
      const antigo = JSON.parse(localStorage.getItem(CHAVE_DADOS) ?? 'null') as Entradas | null;
      if (lista?.produtos?.length) {
        setProdutos(lista.produtos.map((p) => ({ ...p, e: { ...VAZIO, ...p.e } })));
        setAtual(lista.produtos.some((p) => p.id === lista.atual) ? lista.atual : lista.produtos[0].id);
      } else if (antigo?.custos) setProdutos([{ id: 'p1', e: { ...VAZIO, ...antigo } }]);
    } catch {
      // nada salvo
    }
    setCarregou(true);
  }, []);

  // Salva os números da pessoa (o exemplo não) a cada mudança
  useEffect(() => {
    if (!carregou) return;
    try {
      localStorage.removeItem(CHAVE_DADOS);
      const proprios = produtos.filter((p) => p.e !== EXEMPLO);
      if (!proprios.length) localStorage.removeItem(CHAVE_PRODUTOS);
      else localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify({ produtos, atual }));
    } catch {
      // Sem localStorage: os números valem só nesta visita
    }
  }, [produtos, atual, carregou]);

  // Produto novo calculado (a partir do 2º): conversão de atualização na RD com os nomes dos produtos
  useEffect(() => {
    if (passo !== RESULTADO || !liberado || produtos.length < 2 || avisados.current.has(atual)) return;
    const quem = lerCadastro();
    if (!quem.email) return;
    avisados.current.add(atual);
    const lista = produtos.map((p, i) => `${nomeProduto(p, i)} (${num(p.e.clientesDesejados, 0)} clientes/mês)`).join(', ');
    enviarConversao('calculadora-cac-produto', '/ferramentas/calculadora-cac', { nome: quem.nome ?? '', email: quem.email, mainPain: `Calculadora CAC, ${produtos.length} produtos: ${lista}` }).catch(() => {});
  }, [passo, liberado, produtos, atual]);

  // Produtos: abrir um, calcular outro (volta à etapa 1 vazio, com o segmento) e remover
  const irPara = (p: number) => {
    setPasso(p);
    requestAnimationFrame(() => topo.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const abrirProduto = (id: string) => {
    setAtual(id);
    setAj(SEM_AJUSTE);
    setAviso('');
    setAlcancado(RESULTADO);
    irPara(RESULTADO);
  };
  const outroProduto = () => {
    const id = `p${Date.now()}`;
    setProdutos((ps) => [...ps, { id, e: { ...VAZIO, segmento: e.segmento, segmentoOutro: e.segmentoOutro } }]);
    setAtual(id);
    setAj(SEM_AJUSTE);
    setAviso('');
    setAlcancado(0);
    irPara(0);
  };
  const removerProduto = (id: string) => {
    const resto = produtos.filter((p) => p.id !== id);
    if (!resto.length) return;
    setProdutos(resto);
    if (id === atual) setAtual(resto[0].id);
  };

  const set = <K extends keyof Entradas>(k: K, v: Entradas[K]) => setE((x) => ({ ...x, [k]: v }));
  const base = useMemo(() => calcular(e), [e]);
  const r = useMemo(() => calcular(e, aj), [e, aj]);
  const recorrente = e.tipo === 'recorrente' || e.tipo === 'setup';
  const simulando = aj.ticketPct !== 0 || aj.churn != null || aj.clientes != null;
  const extrasVenda = e.custos.filter((c) => c.extra);

  // Já cadastrado em outra ferramenta: a conversão desta vai para a RD quando o resultado fica parado na tela por 3 segundos
  useEffect(() => {
    if (passo !== RESULTADO || !liberado) return;
    const timer = window.setTimeout(
      () =>
        avisarFerramenta(FORM_NAME, '/ferramentas/calculadora-cac', {
          businessType: TIPOS.find((t) => t.id === e.tipo)?.nome ?? e.tipo,
          sector: e.segmento === 'Outro' ? `Outro: ${e.segmentoOutro}` : e.segmento,
          ticket: brl(base.ticket),
          mainPain: `Calculadora CAC: quer ${num(base.desejados, 0)} clientes/mês · LTV ${brl(base.ltv)} · CAC máx. moderado ${brl(base.plano[1].cac)} · investimento moderado ${brl(base.plano[1].investimento)}/mês`,
        }),
      3000,
    );
    return () => window.clearTimeout(timer);
  }, [passo, liberado, e, base]);
  // Custos que a pessoa adicionou, para o resumo que vai para a RD
  const resumoExtras = [
    ...extrasVenda.filter((c) => c.valor).map((c) => `${c.nome || 'custo'} ${c.modo === '%' ? `${num(c.valor)}%` : brl(c.valor, 2)}/venda`),
  ];

  // O que falta para seguir de cada etapa (vazio = pode seguir)
  const pendencia = (p: number) => {
    if (p === 1) {
      if (!(e.ticket > 0)) return recorrente ? 'Informe a mensalidade.' : 'Informe o ticket médio.';
      if (e.tipo === 'recompra' && !(e.comprasAno > 0 && e.anos > 0)) return 'Informe as compras por ano e os anos como cliente.';
      if (recorrente && !(e.churn > 0)) return 'Informe o cancelamento por mês (churn).';
    }
    if (p === 2 && base.margem <= 0) return 'Os custos estão maiores que o preço: confira os valores.';
    if (p === 0 && !e.segmento) return 'Escolha o seu segmento.';
    if (p === 3 && !(e.clientesDesejados > 0)) return 'Informe quantos clientes novos você quer por mês.';
    if (p === 3 && !e.conversaoNaoSei && !(e.conversaoLead > 0)) return 'Informe de cada 100 leads quantos viram venda, ou marque "não sei".';
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
    <div
      // A rodinha do mouse nunca muda o valor de um campo de número (tira o foco antes)
      onWheelCapture={(ev) => {
        const alvo = ev.target as HTMLElement;
        if (alvo instanceof HTMLInputElement && alvo.type === 'number' && document.activeElement === alvo) alvo.blur();
      }}
      className="ferramenta [&_[role=radio]]:cursor-pointer [&_a]:cursor-pointer [&_button:not(:disabled)]:cursor-pointer [&_input[type=range]]:cursor-pointer">
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
              Conte o que você vende e quantos clientes novos quer por mês. A calculadora mostra o seu LTV, quanto você pode pagar por cliente e quanto investir por mês em 3 cenários, com retorno e payback.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-28">
        <div ref={topo} className="main-container scroll-mt-28">
          <div className={cn('mx-auto', passo === RESULTADO ? 'max-w-[1200px]' : 'max-w-[760px]')}>
            {produtos.length > 1 && passo < RESULTADO && (
              <p className="text-tagline-2 text-secondary/70 mb-3">
                Calculando: <strong className="text-secondary">{nomeProduto(produtos.find((p) => p.id === atual)!, produtos.findIndex((p) => p.id === atual))}</strong>
              </p>
            )}
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
                        {(() => {
                          const { icone: Icone, exemplos } = VISUAL_TIPO[t.id];
                          const ativo = e.tipo === t.id;
                          return (
                            <span className="flex items-start gap-3">
                              <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors', ativo ? 'bg-primary-500 text-secondary' : 'bg-lilas-100 text-lilas-700')}>
                                <Icone className="size-5" strokeWidth={1.75} aria-hidden="true" />
                              </span>
                              <span className="min-w-0">
                                <span className={cn('font-titulo text-tagline-1 block font-semibold', ativo ? 'text-white' : 'text-secondary')}>{t.nome}</span>
                                <span className={cn('text-tagline-3 mt-0.5 block font-medium', ativo ? 'text-primary-500' : 'text-lilas-700')}>{exemplos}</span>
                                <span className={cn('text-tagline-3 mt-1 block', ativo ? 'text-white/65' : 'text-secondary/60')}>{t.descricao}</span>
                              </span>
                            </span>
                          );
                        })()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="nomeProduto" className={labelClass}>
                        Nome do produto ou serviço <span className="text-secondary/45 font-normal">(opcional)</span>
                      </label>
                      <input id="nomeProduto" value={e.nome} onChange={(ev) => set('nome', ev.target.value)} placeholder={`Ex.: ${EXEMPLOS_PRODUTO[produtos.findIndex((p) => p.id === atual) % EXEMPLOS_PRODUTO.length]} (sem nome, vira "Produto ${produtos.findIndex((p) => p.id === atual) + 1}")`} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="segmento" className={labelClass}>
                        Qual é o seu segmento?
                      </label>
                      <select id="segmento" value={e.segmento} onChange={(ev) => set('segmento', ev.target.value)} className={cn(inputClass, 'cursor-pointer')}>
                        <option value="">Escolha</option>
                        {SEGMENTOS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    {e.segmento === 'Outro' && (
                      <div>
                        <label htmlFor="segmentoOutro" className={labelClass}>
                          O que você vende?
                        </label>
                        <input id="segmentoOutro" value={e.segmentoOutro} onChange={(ev) => set('segmentoOutro', ev.target.value)} placeholder="Ex.: consórcio, energia solar" className={inputClass} />
                      </div>
                    )}
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
                        dica={DICAS.churn}
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
                    <span className="text-tagline-2 text-secondary/70">
                      Margem de contribuição por {recorrente ? 'mês' : 'compra'}
                      <Dica texto={DICAS.margem} />
                    </span>
                    <span className="font-titulo text-secondary text-[1.25rem] font-semibold tabular-nums">
                      {brl(base.margem, 2)} <span className="text-secondary/50 text-tagline-2 font-medium">· {pct(base.margemPct, 1)}</span>
                    </span>
                  </div>
                </Etapa>
              )}

              {passo === 3 && (
                <Etapa n={4} titulo="Sua meta de clientes" descricao="Diga quantos clientes novos você quer por mês. A calculadora mostra quanto investir para chegar lá.">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Numero id="desejados" rotulo="Quantos clientes novos você quer por mês?" valor={e.clientesDesejados} onChange={(v) => set('clientesDesejados', v)} ajuda="Deste produto ou serviço" />
                    <div>
                      <Numero
                        id="conversao"
                        rotulo="De cada 100 leads, quantos viram venda?"
                        sufixo="%"
                        passo={0.5}
                        valor={e.conversaoNaoSei ? CONVERSAO_PADRAO : e.conversaoLead}
                        onChange={(v) => setE((x) => ({ ...x, conversaoLead: v, conversaoNaoSei: false }))}
                        ajuda={e.conversaoNaoSei ? `Usando ${CONVERSAO_PADRAO}%, uma referência conservadora (estimativa)` : 'Para saber quantos leads você precisa e quanto cada um pode custar'}
                      />
                      <label className="text-tagline-2 text-secondary mt-2 flex cursor-pointer items-center gap-2">
                        <input type="checkbox" checked={e.conversaoNaoSei} onChange={(ev) => set('conversaoNaoSei', ev.target.checked)} className="accent-secondary size-4 cursor-pointer" />
                        Não sei
                      </label>
                    </div>
                  </div>
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
                        { rotulo: `meta de ${num(e.clientesDesejados, 0)} clientes/mês`, p: 3 },
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
                    <BarraProdutos produtos={produtos} atual={atual} onAbrir={abrirProduto} onRemover={removerProduto} onOutro={outroProduto} />
                    <Resultados e={e} r={r} />
                    {produtos.length >= 2 && <ComparaProdutos produtos={produtos} atual={atual} onAbrir={abrirProduto} />}
                    <div className="border-stroke-4 grid grid-cols-12 gap-6 rounded-3xl border bg-white p-6 md:p-7 lg:gap-10">
                      <div className="col-span-12 space-y-5 lg:col-span-5">
                        <div>
                          <p className="font-titulo text-heading-6 text-secondary font-medium">E se…?</p>
                          <p className="text-tagline-2 mt-1">Mexa nos números e veja na hora o efeito no LTV, no CAC máximo e no investimento. Os resultados acima também mudam.</p>
                        </div>
                        <div className="bg-background-3 space-y-6 rounded-2xl p-5">
                          <Deslizante rotulo="Ticket / mensalidade" min={-30} max={50} passo={5} valor={aj.ticketPct} onChange={(v) => setAj((a) => ({ ...a, ticketPct: v }))} mostrar={`${aj.ticketPct > 0 ? '+' : ''}${aj.ticketPct}% · ${brl(r.ticket)}`} />
                          <Deslizante rotulo="Clientes novos por mês" min={1} max={Math.max(100, e.clientesDesejados * 3)} passo={1} valor={aj.clientes ?? e.clientesDesejados} onChange={(v) => setAj((a) => ({ ...a, clientes: v }))} mostrar={`${num(r.desejados, 0)} clientes`} />
                          {recorrente && (
                            <Deslizante rotulo="Cancelamento por mês" min={0.5} max={20} passo={0.5} valor={aj.churn ?? e.churn} onChange={(v) => setAj((a) => ({ ...a, churn: v }))} mostrar={`${num(aj.churn ?? e.churn)}% · ${num(100 / (aj.churn ?? e.churn))} meses`} />
                          )}
                          {simulando && (
                            <button type="button" onClick={() => setAj(SEM_AJUSTE)} className="text-tagline-2 text-secondary/70 hover:text-secondary inline-flex items-center gap-2">
                              <RotateCcw className="size-4" /> Voltar aos números informados
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="col-span-12 grid content-center gap-3 sm:grid-cols-3 lg:col-span-7">
                        {[
                          { rotulo: 'LTV', antes: brl(base.ltv), depois: brl(r.ltv) },
                          { rotulo: 'CAC máximo (moderado)', antes: brl(base.plano[1].cac), depois: brl(r.plano[1].cac) },
                          { rotulo: 'Investimento (moderado)', antes: brl(base.plano[1].investimento), depois: brl(r.plano[1].investimento) },
                        ].map((x) => (
                          <div key={x.rotulo} className="border-stroke-4 rounded-2xl border p-5">
                            <p className="text-tagline-2 text-secondary/60">{x.rotulo}</p>
                            <p className="font-titulo text-secondary mt-1 text-[1.5rem] font-semibold tabular-nums">{x.depois}</p>
                            <p className="text-tagline-3 text-secondary/50">hoje: {x.antes}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Acoes e={e} r={r} produtos={produtos} />
                  </div>
                ) : (
                  <div className="grid grid-cols-12 items-start gap-6">
                    <div className="col-span-12 lg:col-span-5">
                      <Cadastro r={r} tipo={e.tipo} segmento={e.segmento === 'Outro' ? `Outro: ${e.segmentoOutro}` : e.segmento} extras={resumoExtras} onLiberar={() => setLiberado(true)} />
                    </div>
                    <div aria-hidden className="pointer-events-none col-span-7 hidden blur-[7px] select-none lg:block">
                      <Resultados e={e} r={r} />
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

    </div>
  );
}

// Formulário que libera o resultado: vai para a RD Station como conversão "calculadora-cac" (mesma rota dos formulários do site)
function Cadastro({ r, tipo, segmento, extras, onLiberar }: { r: ReturnType<typeof calcular>; tipo: TipoNegocio; segmento: string; extras: string[]; onLiberar: () => void }) {
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
      sector: segmento,
      ticket: brl(r.ticket),
      // Resumo do resultado no campo "principal dor", para o comercial já ligar sabendo o cenário
      mainPain: [
        `Calculadora CAC: quer ${num(r.desejados, 0)} clientes/mês · LTV ${brl(r.ltv)} · CAC máx. moderado ${brl(r.plano[1].cac)} · investimento moderado ${brl(r.plano[1].investimento)}/mês`,
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
      salvarCadastro({ nome: dados.nome, email: dados.email, telefone: dados.telefone });
      marcarEnviada(FORM_NAME);
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
function Acoes({ e, r, produtos = [] }: { e: Entradas; r: ReturnType<typeof calcular>; produtos?: Produto[] }) {
  const [gerando, setGerando] = useState(false);

  const pedirAjuda = () => {
    const quem = lerCadastro();
    const msg = [
      'Olá! Fiz a calculadora de CAC e LTV da UPDO e quero ajuda no meu marketing.',
      `*Tipo:* ${TIPOS.find((t) => t.id === e.tipo)?.nome}`,
      `*Meta:* ${num(r.desejados, 0)} clientes novos por mês`,
      `*LTV:* ${brl(r.ltv)} · *CAC máximo (moderado):* ${brl(r.plano[1].cac)}`,
      `*Investimento (moderado):* ${brl(r.plano[1].investimento)} por mês`,
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
          formData: { nome: quem.nome ?? '', email: quem.email, mainPain: `Pediu ajuda pela calculadora: quer ${num(r.desejados, 0)} clientes/mês · LTV ${brl(r.ltv)} · investimento moderado ${brl(r.plano[1].investimento)}/mês` },
        }),
      }).catch(() => {});
    }
  };

  const baixarPdf = async () => {
    setGerando(true);
    try {
      const [{ pdf }, { RelatorioPdf }] = await Promise.all([import('@react-pdf/renderer'), import('./relatorio-pdf')]);
      const blob = await pdf(<RelatorioPdf e={e} produtos={produtos} origem={window.location.origin} nome={lerCadastro().nome} />).toBlob();
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

  return <AcoesFerramenta onAjuda={pedirAjuda} onPdf={baixarPdf} gerando={gerando} />;
}


// Produtos calculados: uma aba por produto (abrir, remover) e o botão para calcular outro
function BarraProdutos({ produtos, atual, onAbrir, onRemover, onOutro }: { produtos: Produto[]; atual: string; onAbrir: (id: string) => void; onRemover: (id: string) => void; onOutro: () => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white px-4 py-3">
      <span className="text-tagline-2 text-secondary/60 mr-1">{produtos.length > 1 ? 'Seus produtos:' : 'Produto:'}</span>
      {produtos.map((p, i) => {
        const ativo = p.id === atual;
        return (
          <span key={p.id} className={cn('inline-flex items-center rounded-full border transition-colors', ativo ? 'border-secondary bg-secondary text-white' : 'border-stroke-3 text-secondary hover:border-secondary')}>
            <button type="button" onClick={() => onAbrir(p.id)} aria-pressed={ativo} className="text-tagline-2 max-w-[220px] truncate py-1.5 pr-1 pl-3.5 font-medium">
              {nomeProduto(p, i)}
            </button>
            {produtos.length > 1 ? (
              <button type="button" onClick={() => onRemover(p.id)} aria-label={`Remover ${nomeProduto(p, i)}`} className={cn('mr-1 flex size-6 items-center justify-center rounded-full', ativo ? 'hover:bg-white/15' : 'hover:bg-background-3')}>
                <X className="size-3.5" />
              </button>
            ) : (
              <span className="w-2.5" />
            )}
          </span>
        );
      })}
      {produtos.length < MAX_PRODUTOS && (
        <button type="button" onClick={onOutro} className="border-stroke-3 text-tagline-2 text-lilas-700 hover:border-lilas-500 ml-auto inline-flex items-center gap-1.5 rounded-full border border-dashed px-4 py-1.5 font-medium transition-colors">
          <Plus className="size-4" /> Calcular outro produto
        </button>
      )}
    </div>
  );
}

// Comparação entre os produtos (2 ou mais): uma coluna por produto, destaque para o de maior lucro e o total para bater todas as metas
function ComparaProdutos({ produtos, atual, onAbrir }: { produtos: Produto[]; atual: string; onAbrir: (id: string) => void }) {
  const lista = produtos.map((p, i) => ({ p, nome: nomeProduto(p, i), r: calcular(p.e) }));
  const melhor = lista.reduce((a, b) => (b.r.plano[1].lucro > a.r.plano[1].lucro ? b : a));
  const total = [0, 1, 2].map((k) => lista.reduce((t, x) => t + x.r.plano[k].investimento, 0));
  const linhas: { rotulo: string; valor: (x: (typeof lista)[number]) => string; dica?: string }[] = [
    { rotulo: 'Tipo de venda', valor: (x) => TIPOS.find((t) => t.id === x.p.e.tipo)?.nome ?? '' },
    { rotulo: 'LTV (margem)', valor: (x) => brl(x.r.ltv), dica: DICAS.ltv },
    { rotulo: 'Margem por venda', valor: (x) => `${brl(x.r.margem, 2)} · ${pct(x.r.margemPct, 1)}`, dica: DICAS.margem },
    { rotulo: 'Custo por venda ideal (moderado)', valor: (x) => `até ${brl(x.r.plano[1].cac)}`, dica: DICAS.cac },
    { rotulo: 'Custo por lead ideal (moderado)', valor: (x) => (x.r.plano[1].cpl == null ? '—' : `até ${brl(x.r.plano[1].cpl, 2)}`), dica: DICAS.cpl },
    { rotulo: 'Clientes novos por mês', valor: (x) => num(x.r.desejados, 0) },
    { rotulo: 'Investimento por mês (moderado)', valor: (x) => brl(x.r.plano[1].investimento) },
    { rotulo: 'Lucro na margem (moderado)', valor: (x) => `${brl(x.r.plano[1].lucro)} ${horizonte(x.r)}` },
    { rotulo: 'ROI (moderado)', valor: (x) => `${roiMultiplo(x.r.plano[1].roi)} ${horizonte(x.r)}`, dica: DICAS.roi },
  ];
  return (
    <div className="border-stroke-4 rounded-3xl border bg-white p-6 md:p-7">
      <p className="font-titulo text-heading-6 text-secondary font-medium">Seus produtos lado a lado</p>
      <p className="text-tagline-2 mt-1">
        Em destaque, o produto que deixa mais lucro na margem com a meta de clientes de cada um. No mesmo cenário, o ROI é o mesmo para todos (o CAC é a mesma fatia do LTV); o que muda é o tamanho do lucro.
      </p>
      <div className="-mx-2 mt-5 overflow-x-auto px-2">
        <table className="w-full min-w-[560px] text-[0.9375rem] tabular-nums">
          <thead>
            <tr className="border-stroke-4 border-b text-left">
              <th className="text-tagline-3 text-secondary/55 sticky left-0 z-10 bg-white py-2 pr-3 font-medium" />
              {lista.map((x) => (
                <th key={x.p.id} className={cn('px-3 py-2 align-bottom', x === melhor && 'bg-primary-50 rounded-t-xl')}>
                  {x === melhor && <span className="text-tagline-3 text-primary-800 block font-semibold">Maior lucro</span>}
                  <button type="button" onClick={() => onAbrir(x.p.id)} className={cn('font-titulo text-tagline-1 text-left font-semibold hover:underline', x.p.id === atual ? 'text-lilas-700' : 'text-secondary')}>
                    {x.nome}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {linhas.map((l) => (
              <tr key={l.rotulo} className="border-stroke-4 border-b">
                <td className="text-tagline-2 text-secondary/65 sticky left-0 z-10 min-w-[150px] bg-white py-2.5 pr-3">
                  {l.rotulo}
                  {l.dica && <Dica texto={l.dica} />}
                </td>
                {lista.map((x) => (
                  <td key={x.p.id} className={cn('text-secondary px-3 py-2.5 font-medium', x === melhor && 'bg-primary-50')}>
                    {l.valor(x)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-secondary mt-5 rounded-2xl px-5 py-4 text-white">
        <p className="text-tagline-2 text-white/70">Para bater as metas de todos os produtos</p>
        <p className="font-titulo mt-1 text-[1.5rem] font-semibold text-white tabular-nums">{brl(total[1])} por mês</p>
        <p className="text-tagline-3 mt-1 text-white/60">
          no moderado · de {brl(total[0])} (conservador) a {brl(total[2])} (agressivo)
        </p>
      </div>
    </div>
  );
}
