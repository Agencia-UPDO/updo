'use client';

import { cn } from '@/novo/utils/cn';
import { avisarFerramenta, CadastroFerramenta, jaLiberado, lerCadastro, pedirAjuda } from '@/novo/components/ferramentas/cadastro';
import { Dica } from '@/novo/components/ferramentas/dica';
import { COMECAR_COM_EXEMPLO } from '@/novo/data/ferramentas';
import { CircleCheck, CircleAlert, CircleX, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import AcoesFerramenta from '@/novo/components/ferramentas/acoes-ferramenta';
import { type Entradas, type Resultado, EXEMPLO, VAZIO, calcular, completo, leitura, roiFrase, roiMultiplo } from './calculo';

const FORM_NAME = 'calculadora-roi';
const PAGINA = '/ferramentas/calculadora-roi';
// Os números da pessoa ficam salvos no navegador para ela voltar e ajustar
const CHAVE_DADOS = 'updo-calculadora-roi';

const brl = (v: number | null, casas = 0) =>
  v != null && Number.isFinite(v) ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casas, maximumFractionDigits: casas }) : '—';
const num = (v: number, casas = 1) => (Number.isFinite(v) ? v.toLocaleString('pt-BR', { maximumFractionDigits: casas }) : '—');
const pct = (v: number, casas = 0) => (Number.isFinite(v) ? `${(v * 100).toLocaleString('pt-BR', { maximumFractionDigits: casas })}%` : '—');
const vezes = (v: number | null) => (v == null || !Number.isFinite(v) ? '—' : `${v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}x`);

const inputClass =
  'border-stroke-3 text-tagline-1 text-secondary placeholder:text-secondary/40 focus:border-secondary w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors';
const labelClass = 'text-tagline-2 text-secondary mb-2 block font-medium';

// Explicação de cada termo, em uma frase simples (aparece no "?")
const DICAS = {
  investimento: 'Tudo o que você gastou para fazer essas vendas: mídia, agência e time comercial, no mesmo período.',
  margem: 'Margem de contribuição é o que sobra de cada venda depois de pagar os custos dela (imposto, cartão, comissão, produto).',
  vezes: 'Quantas vezes, em média, um cliente compra de você ao todo, contando a primeira. Na assinatura, quantos meses ele paga.',
  roas: 'ROAS é quanto voltou de faturamento para cada R$ 1 investido. ROAS de 4x = R$ 4 de faturamento para cada R$ 1.',
  roi: 'ROI é quanto sobrou de lucro (na margem) para cada R$ 1 investido, depois de pagar o investimento. ROI de 0,5x = R$ 0,50 de lucro para cada R$ 1.',
  roasEmpate: 'Abaixo desse ROAS, a margem das vendas não paga o investimento. Acima dele, a campanha dá lucro.',
  cac: 'CAC é quanto custou cada cliente novo: o investimento dividido pelas vendas.',
  ltv: 'LTV é a margem que cada cliente deixa durante todo o tempo que compra de você.',
  ltvCac: 'LTV:CAC mostra quantas vezes o cliente devolve o que custou. O saudável é 3 ou mais.',
};

const CORES = {
  verde: { caixa: 'border-primary-500 bg-primary-50', texto: 'text-primary-800', icone: CircleCheck },
  amarelo: { caixa: 'border-amber-400 bg-amber-50', texto: 'text-amber-700', icone: CircleAlert },
  vermelho: { caixa: 'border-red-400 bg-red-50', texto: 'text-red-700', icone: CircleX },
} as const;

function Numero({ id, rotulo, valor, onChange, prefixo, sufixo, ajuda, dica, opcional }: { id: string; rotulo: string; valor: number; onChange: (v: number) => void; prefixo?: string; sufixo?: string; ajuda?: string; dica?: string; opcional?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {rotulo}
        {opcional && <span className="text-secondary/45 font-normal"> (opcional)</span>}
        {dica && <Dica texto={dica} />}
      </label>
      <div className="relative">
        {prefixo && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">{prefixo}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
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

// Margem em % do faturamento ou em R$ por venda (como os custos da calculadora de CAC)
function CampoMargem({ e, onChange }: { e: Entradas; onChange: (parcial: Partial<Entradas>) => void }) {
  const real = e.margemModo === 'R$';
  return (
    <div>
      <label htmlFor="margem" className={labelClass}>
        Margem de contribuição
        <Dica texto={DICAS.margem} />
      </label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          {real && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">R$</span>}
          <input
            id="margem"
            type="number"
            inputMode="decimal"
            min={0}
            value={e.margem || ''}
            placeholder="0"
            onFocus={(ev) => ev.target.select()}
            onChange={(ev) => onChange({ margem: ev.target.value === '' ? 0 : Number(ev.target.value) })}
            className={cn(inputClass, real ? 'pl-11' : 'pr-10')}
          />
          {!real && <span className="text-secondary/50 text-tagline-2 pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">%</span>}
        </div>
        <div role="radiogroup" aria-label="Margem em % ou em R$" className="border-stroke-3 flex rounded-xl border p-1">
          {(['%', 'R$'] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={e.margemModo === m}
              onClick={() => onChange({ margemModo: m })}
              className={cn('text-tagline-2 rounded-lg px-3 py-1.5 font-medium transition-colors', e.margemModo === m ? 'bg-secondary text-white' : 'text-secondary/60 hover:text-secondary')}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      <p className="text-tagline-3 text-secondary/55 mt-1.5">{real ? 'Quanto sobra de cada venda, em reais' : 'Quanto sobra do faturamento, em %'}</p>
    </div>
  );
}

function Cartao({ rotulo, valor, detalhe, dica, cor }: { rotulo: string; valor: string; detalhe?: string; dica?: string; cor?: string }) {
  return (
    <div className="border-stroke-4 rounded-2xl border bg-white p-5">
      <p className="text-tagline-2 text-secondary/60 font-medium">
        {rotulo}
        {dica && <Dica texto={dica} />}
      </p>
      <p className={cn('font-titulo mt-1 text-[1.6rem] leading-tight font-semibold tabular-nums', cor ?? 'text-secondary')}>{valor}</p>
      {detalhe && <p className="text-tagline-3 text-secondary/55 mt-1">{detalhe}</p>}
    </div>
  );
}

const corValor = (v: number | null) => (v == null ? undefined : v >= 0 ? 'text-primary-800' : 'text-red-700');

// O resultado: a leitura (verde, amarelo, vermelho), o ROI e o ROAS diretos e, com recompra, os números na vida do cliente
function Resultados({ r }: { r: Resultado }) {
  const l = leitura(r);
  const cor = CORES[l.cor];
  const Icone = cor.icone;
  return (
    <div className="space-y-4">
      <div className={cn('flex items-start gap-3 rounded-2xl border-2 px-5 py-4', cor.caixa)}>
        <Icone className={cn('mt-0.5 size-6 shrink-0', cor.texto)} />
        <div>
          <p className={cn('font-titulo text-tagline-1 font-semibold', cor.texto)}>{l.titulo}</p>
          <p className="text-tagline-2 text-secondary/75 mt-0.5">{l.texto}</p>
        </div>
      </div>

      <div className="bg-secondary relative overflow-hidden rounded-3xl p-6 text-white md:p-7">
        <div className="from-lilas-500/35 pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br to-transparent blur-2xl" />
        <div className="relative grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-tagline-2 font-medium text-white/65">
              ROI da campanha
              <Dica texto={DICAS.roi} claro />
            </p>
            <p className={cn('font-titulo mt-2 text-[2.5rem] leading-none font-semibold tabular-nums', (r.roi ?? 0) >= 0 ? 'text-primary-500' : 'text-red-300')}>{roiMultiplo(r.roi)}</p>
            <p className="text-tagline-2 mt-2 text-white/75">{roiFrase(r.roi)}</p>
          </div>
          <div>
            <p className="text-tagline-2 font-medium text-white/65">
              ROAS da campanha
              <Dica texto={DICAS.roas} claro />
            </p>
            <p className="font-titulo mt-2 text-[2.5rem] leading-none font-semibold text-white tabular-nums">{vezes(r.roas)}</p>
            <p className="text-tagline-2 mt-2 text-white/75">
              {brl(r.faturamento)} de faturamento para {brl(r.inv)} investidos
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <Cartao rotulo={r.lucro >= 0 ? 'Lucro da campanha' : 'Prejuízo da campanha'} valor={brl(Math.abs(r.lucro))} cor={corValor(r.lucro)} detalhe={`margem de ${brl(r.margemTotal)} menos o investimento`} />
        <Cartao rotulo="ROAS para empatar" dica={DICAS.roasEmpate} valor={vezes(r.roasEmpate)} detalhe={`com margem de ${pct(r.margemPct, 1)}`} />
        <Cartao rotulo="Custo por cliente (CAC)" dica={DICAS.cac} valor={brl(r.cac, 2)} detalhe={`${num(r.vendas, 0)} ${r.vendas === 1 ? 'venda' : 'vendas'}`} />
        <Cartao rotulo="Ticket médio" valor={brl(r.ticket, 2)} detalhe="faturamento ÷ vendas" />
        {r.ltv != null && r.temVida && <Cartao rotulo="LTV (margem)" dica={DICAS.ltv} valor={brl(r.ltv, 2)} detalhe={`por cliente, em ${num(r.vezes)} compras`} />}
        {r.ltvCac != null && r.temVida && <Cartao rotulo="LTV : CAC" dica={DICAS.ltvCac} valor={`${num(r.ltvCac)} : 1`} detalhe={r.ltvCac >= 3 ? 'saudável (3 ou mais)' : 'abaixo de 3: atenção'} cor={r.ltvCac >= 3 ? 'text-primary-800' : 'text-amber-700'} />}
      </div>

      {r.temVida && (
        <div className="border-stroke-4 rounded-3xl border bg-white p-6 md:p-7">
          <p className="font-titulo text-heading-6 text-secondary font-medium">Na vida do cliente</p>
          <p className="text-tagline-2 mt-1">Contando as {num(r.vezes)} compras que cada cliente faz ao todo, com o mesmo ticket e a mesma margem.</p>
          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { rotulo: 'ROI na vida', valor: roiMultiplo(r.roiVida), cor: corValor(r.roiVida), dica: DICAS.roi },
              { rotulo: 'ROAS na vida', valor: vezes(r.roasVida), dica: DICAS.roas },
              { rotulo: r.lucroVida >= 0 ? 'Lucro na vida' : 'Prejuízo na vida', valor: brl(Math.abs(r.lucroVida)), cor: corValor(r.lucroVida) },
            ].map((x) => (
              <div key={x.rotulo} className="bg-background-3 rounded-2xl px-5 py-4">
                <dt className="text-tagline-2 text-secondary/60 font-medium">
                  {x.rotulo}
                  {x.dica && <Dica texto={x.dica} />}
                </dt>
                <dd className={cn('font-titulo mt-1 text-[1.5rem] font-semibold tabular-nums', x.cor ?? 'text-secondary')}>{x.valor}</dd>
              </div>
            ))}
          </dl>
          {roiFrase(r.roiVida, ' na vida do cliente') && <p className={cn('text-tagline-2 mt-4 font-medium', corValor(r.roiVida))}>{roiFrase(r.roiVida, ' na vida do cliente')}</p>}
        </div>
      )}
    </div>
  );
}

// Resumo que vai para a RD e para o WhatsApp
const resumo = (r: Resultado) =>
  `Calculadora ROI: investiu ${brl(r.inv)} · ${num(r.vendas, 0)} vendas · faturou ${brl(r.faturamento)} · ROAS ${vezes(r.roas)} · ROI ${roiMultiplo(r.roi)}${r.temVida ? ` · ROI na vida (${num(r.vezes)} compras) ${roiMultiplo(r.roiVida)}` : ''}`;

function Acoes({ e, r }: { e: Entradas; r: Resultado }) {
  const [gerando, setGerando] = useState(false);

  const ajuda = () =>
    pedirAjuda({
      formName: 'calculadora-roi-quero-ajuda',
      pagePath: PAGINA,
      resumo: `Pediu ajuda pela ${resumo(r)}`,
      linhas: [
        'Olá! Fiz a calculadora de ROI da UPDO e quero ajuda no meu marketing.',
        `*Investimento:* ${brl(r.inv)} · *Vendas:* ${num(r.vendas, 0)}`,
        `*Faturamento:* ${brl(r.faturamento)} · *ROAS:* ${vezes(r.roas)}`,
        `*ROI:* ${roiMultiplo(r.roi)}${r.temVida ? ` · *ROI na vida do cliente:* ${roiMultiplo(r.roiVida)}` : ''}`,
      ],
    });

  const baixarPdf = async () => {
    setGerando(true);
    try {
      const [{ pdf }, { RelatorioRoiPdf }] = await Promise.all([import('@react-pdf/renderer'), import('./relatorio-pdf')]);
      const blob = await pdf(<RelatorioRoiPdf e={e} origem={window.location.origin} nome={lerCadastro().nome} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'roi-roas-updo.pdf';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } finally {
      setGerando(false);
    }
  };

  return <AcoesFerramenta onAjuda={ajuda} onPdf={baixarPdf} gerando={gerando} />;
}

export default function CalculadoraRoi() {
  const [e, setE] = useState<Entradas>(COMECAR_COM_EXEMPLO ? EXEMPLO : VAZIO);
  const [carregou, setCarregou] = useState(false);
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    // Quem já se cadastrou em alguma ferramenta (neste navegador) vê o resultado direto
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (jaLiberado()) setLiberado(true);
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE_DADOS) ?? 'null') as Entradas | null;
      if (salvo) setE({ ...VAZIO, ...salvo });
    } catch {
      // nada salvo
    }
    setCarregou(true);
  }, []);

  // Salva os números da pessoa (o exemplo não) a cada mudança
  useEffect(() => {
    if (!carregou) return;
    try {
      if (e === EXEMPLO || e === VAZIO) localStorage.removeItem(CHAVE_DADOS);
      else localStorage.setItem(CHAVE_DADOS, JSON.stringify(e));
    } catch {
      // Sem localStorage: os números valem só nesta visita
    }
  }, [e, carregou]);

  const set = (parcial: Partial<Entradas>) => setE((x) => ({ ...x, ...parcial }));
  const r = useMemo(() => calcular(e), [e]);
  const pronto = completo(e);

  // Já cadastrado em outra ferramenta: a conversão desta vai para a RD quando o resultado fica parado na tela por 3 segundos
  useEffect(() => {
    if (!pronto || !liberado) return;
    const timer = window.setTimeout(() => avisarFerramenta(FORM_NAME, PAGINA, { ticket: brl(r.ticket, 2), mainPain: resumo(r) }), 3000);
    return () => window.clearTimeout(timer);
  }, [pronto, liberado, r]);
  const exemplo = e === EXEMPLO;

  return (
    <div
      // A rodinha do mouse nunca muda o valor de um campo de número (tira o foco antes)
      onWheelCapture={(ev) => {
        const alvo = ev.target as HTMLElement;
        if (alvo instanceof HTMLInputElement && alvo.type === 'number' && document.activeElement === alvo) alvo.blur();
      }}
      className="ferramenta [&_[role=radio]]:cursor-pointer [&_a]:cursor-pointer [&_button:not(:disabled)]:cursor-pointer"
    >
      <section className="relative isolate pt-32 pb-8 md:pt-40 lg:pt-44">
        <div className="main-container">
          <div className="max-w-[760px] space-y-5">
            <div className="border-stroke-3 inline-flex items-center gap-x-2.5 rounded-full border bg-white/70 py-1.5 pr-3.5 pl-2.5">
              <span className="bg-primary-500 ring-primary-500/30 block size-2 shrink-0 rounded-full ring-4" />
              <span className="font-texto text-tagline-2 text-secondary font-medium">Ferramenta gratuita · 1 minuto</span>
            </div>
            <h1>
              Sua campanha <span className="text-lilas-500">deu lucro</span>?
            </h1>
            <p>Coloque quanto investiu, quantas vendas fez e quanto faturou. A calculadora mostra o ROI e o ROAS da campanha, se ela deu lucro e quanto ela rende na vida do cliente.</p>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-28">
        <div className="main-container">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 items-start gap-6">
            <div className="col-span-12 rounded-3xl bg-white p-6 md:p-8 lg:sticky lg:top-28 lg:col-span-5">
              <h2 className="font-titulo text-heading-6 text-secondary font-medium">Os números da campanha</h2>
              <p className="text-tagline-2 mt-1">De uma campanha ou de um período (um mês, por exemplo).</p>
              <div className="mt-6 space-y-5">
                <Numero id="investimento" rotulo="Quanto você investiu?" dica={DICAS.investimento} prefixo="R$" valor={e.investimento} onChange={(v) => set({ investimento: v })} ajuda="Mídia, agência e time comercial" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Numero id="vendas" rotulo="Quantas vendas fez?" valor={e.vendas} onChange={(v) => set({ vendas: v })} ajuda="Clientes que compraram" />
                  <Numero id="faturamento" rotulo="Quanto faturou?" prefixo="R$" valor={e.faturamento} onChange={(v) => set({ faturamento: v })} ajuda="Com essas vendas" />
                </div>
                <CampoMargem e={e} onChange={set} />
                <Numero
                  id="vezes"
                  rotulo="Quantas vezes o cliente compra ao todo?"
                  opcional
                  dica={DICAS.vezes}
                  sufixo="vezes"
                  valor={e.vezes}
                  onChange={(v) => set({ vezes: v })}
                  ajuda="Contando a primeira. Na assinatura, os meses que ele paga. Em branco: compra uma vez só."
                />
              </div>
              <p className="text-tagline-3 text-secondary/55 mt-6">
                {exemplo ? 'Esses são números de exemplo. ' : 'Não tem os números à mão? '}
                <button type="button" onClick={() => setE(exemplo ? VAZIO : EXEMPLO)} className="text-lilas-700 inline-flex items-center gap-1 font-medium underline-offset-2 hover:underline">
                  {exemplo ? (
                    <>
                      <RotateCcw className="size-3.5" /> Limpar e usar os meus números
                    </>
                  ) : (
                    'Preencher com um exemplo'
                  )}
                </button>
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              {!pronto ? (
                <div className="border-stroke-3 flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed p-8 text-center">
                  <p className="font-titulo text-heading-6 text-secondary font-medium">O resultado aparece aqui</p>
                  <p className="text-tagline-2 mt-2 max-w-[380px]">Preencha o investimento, as vendas, o faturamento e a margem. O resultado muda na hora a cada número.</p>
                </div>
              ) : liberado ? (
                <div className="space-y-4">
                  <Resultados r={r} />
                  <Acoes e={e} r={r} />
                </div>
              ) : (
                <div className="relative">
                  <div aria-hidden className="pointer-events-none blur-[7px] select-none">
                    <Resultados r={r} />
                  </div>
                  <div className="absolute inset-0 flex items-start justify-center p-2 pt-8 sm:p-6">
                    <div className="w-full max-w-[420px]">
                      <CadastroFerramenta
                        formName={FORM_NAME}
                        pagePath={PAGINA}
                        extras={() => ({ ticket: brl(r.ticket, 2), mainPain: resumo(r) })}
                        onLiberar={() => setLiberado(true)}
                      />
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
