'use client';

import { cn } from '@/novo/utils/cn';
import { BarChart3, FlaskConical, GitBranch, Kanban } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';

// Visuais do topo das páginas de serviço. Cada serviço mantém a ideia da página atual,
// redesenhada no padrão do site novo.

const useAtivo = (atraso = 500) => {
  const [ativo, setAtivo] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setAtivo(true), atraso);
    return () => window.clearTimeout(timer);
  }, [atraso]);
  return ativo;
};

const Moldura = ({
  icone,
  rotulo,
  status,
  titulo,
  children,
}: {
  icone: ReactNode;
  rotulo: string;
  status: string;
  titulo: string;
  children: ReactNode;
}) => (
  <div className="bg-secondary shadow-6 relative overflow-hidden rounded-3xl p-5 md:p-6">
    <div className="border-b border-white/10 pb-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="bg-primary-500 text-secondary flex size-8 items-center justify-center rounded-lg">
            {icone}
          </span>
          <p className="text-tagline-2 font-medium text-white">{rotulo}</p>
        </div>
        <span className="text-tagline-3 flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 whitespace-nowrap text-white/70">
          <span className="bg-primary-500 size-1.5 animate-pulse rounded-full" />
          {status}
        </span>
      </div>
      <p className="font-titulo text-heading-6 mt-4 font-medium text-white">{titulo}</p>
    </div>
    {children}
  </div>
);

const Indicadores = ({ itens }: { itens: [string, string][] }) => (
  <div className="mt-5 grid grid-cols-3 gap-2.5">
    {itens.map(([label, valor]) => (
      <div key={label} className="rounded-2xl bg-white/5 p-3">
        <span className="text-tagline-3 text-white/55">{label}</span>
        <p className="font-titulo mt-1.5 text-[1.125rem] leading-none font-medium whitespace-nowrap text-white md:text-[1.375rem]">
          {valor}
        </p>
      </div>
    ))}
  </div>
);

// Funil e Automação: o lead percorre as etapas da automação até chegar ao vendedor.
const etapasAutomacao = [
  { label: 'Captura', detalhe: 'Formulário, WhatsApp ou landing page', tempo: '0 min' },
  { label: 'Segmentação', detalhe: 'Tag por origem, interesse e perfil', tempo: '1 min' },
  { label: 'Nutrição', detalhe: 'Sequência por estágio e intenção', tempo: '24h' },
  { label: 'Score', detalhe: 'Lead passa do limite comercial', tempo: '72h' },
  { label: 'Handoff', detalhe: 'Tarefa e alerta para o vendedor', tempo: 'agora' },
];

export const VisualAutomacao = () => {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAtual(etapasAutomacao.length - 1);
      return;
    }
    const timer = window.setInterval(
      () => setAtual((i) => (i + 1) % etapasAutomacao.length),
      1400
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Moldura
      icone={<GitBranch className="size-4" strokeWidth={2} aria-hidden="true" />}
      rotulo="Fluxo automatizado"
      status="ativo"
      titulo="Do clique ao comercial com contexto"
    >
      <ol className="mt-5">
        {etapasAutomacao.map((etapa, index) => {
          const feita = index < atual;
          const ativa = index === atual;
          return (
            <li key={etapa.label} className="relative flex gap-4 pb-4 last:pb-0">
              {index < etapasAutomacao.length - 1 && (
                <span className="absolute top-7 bottom-0 left-[13px] w-0.5 rounded-full bg-white/10">
                  <span
                    className={cn(
                      'bg-primary-500 block w-full rounded-full transition-[height] duration-700',
                      feita ? 'h-full' : 'h-0'
                    )}
                  />
                </span>
              )}
              <span
                className={cn(
                  'relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                  feita && 'bg-primary-500 border-primary-500',
                  ativa &&
                    'border-primary-500 bg-primary-500/15 shadow-[0_0_0_6px_rgb(86_254_213/0.1),0_0_20px_rgb(86_254_213/0.4)]',
                  !feita && !ativa && 'border-white/15 bg-white/5'
                )}
              >
                <span
                  className={cn(
                    'size-2 rounded-full transition-colors duration-500',
                    feita ? 'bg-secondary' : ativa ? 'bg-primary-500 animate-pulse' : 'bg-white/25'
                  )}
                />
              </span>
              <div
                className={cn(
                  'min-w-0 flex-1 rounded-xl px-3 py-2 transition-colors duration-500',
                  ativa ? 'bg-white/[0.07]' : 'bg-transparent'
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      'text-tagline-2 font-medium transition-colors duration-500',
                      feita || ativa ? 'text-white' : 'text-white/50'
                    )}
                  >
                    {etapa.label}
                  </span>
                  <span className="text-tagline-3 text-primary-500/80">{etapa.tempo}</span>
                </div>
                <p className="text-tagline-3 mt-0.5 text-white/45">{etapa.detalhe}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <Indicadores
        itens={[
          ['Resposta', '-42%'],
          ['Oportunid.', '+31%'],
          ['Lead perdido', '-18%'],
        ]}
      />
    </Moldura>
  );
};

// Inside Sales: pipeline por estágio com volume e taxa de cada etapa.
const estagios = [
  { label: 'Lead', valor: '1.200', largura: 100 },
  { label: 'Qualificado', valor: '684', largura: 57 },
  { label: 'Proposta', valor: '312', largura: 26 },
  { label: 'Negociação', valor: '144', largura: 12 },
  { label: 'Fechado', valor: '84', largura: 7 },
];

export const VisualPipeline = () => {
  const ativo = useAtivo();

  return (
    <Moldura
      icone={<Kanban className="size-4" strokeWidth={2} aria-hidden="true" />}
      rotulo="Pipeline comercial"
      status="ao vivo"
      titulo="Visibilidade por estágio, SLA e previsão"
    >
      <div className="mt-5 space-y-3.5">
        {estagios.map((estagio, index) => (
          <div key={estagio.label}>
            <div className="text-tagline-3 flex items-center justify-between">
              <span className="text-white/55">{estagio.label}</span>
              <span className="flex items-center gap-2">
                <span className="font-medium text-white">{estagio.valor}</span>
                <span className="w-9 text-right text-white/35">{estagio.largura}%</span>
              </span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-white/10">
              <div
                style={{
                  width: ativo ? `${Math.max(estagio.largura, 3)}%` : '0%',
                  transitionDelay: `${index * 140}ms`,
                }}
                className={cn(
                  'h-full rounded-full transition-[width] duration-1000 ease-out',
                  index === estagios.length - 1 ? 'bg-primary-500' : 'bg-lilas-500'
                )}
              />
            </div>
          </div>
        ))}
      </div>
      <Indicadores
        itens={[
          ['Conversão', '7%'],
          ['Ticket médio', 'R$ 18k'],
          ['Ciclo médio', '38d'],
        ]}
      />
    </Moldura>
  );
};

// UX e CRO: experimento A/B com controle e variante lado a lado.
export const VisualTesteAB = () => {
  const ativo = useAtivo();

  const versoes = [
    { nome: 'Controle', taxa: '2,3%', sessoes: '1.240 sessões', largura: 42, vencedora: false },
    { nome: 'Variante', taxa: '4,1%', sessoes: '1.238 sessões', largura: 74, vencedora: true },
  ];

  return (
    <Moldura
      icone={<FlaskConical className="size-4" strokeWidth={2} aria-hidden="true" />}
      rotulo="Experimento A/B"
      status="rodando"
      titulo="A página só muda quando o dado mostra onde o usuário travou"
    >
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {versoes.map((versao, index) => (
          <div
            key={versao.nome}
            className={cn(
              'rounded-2xl p-4',
              versao.vencedora ? 'border-primary-500/40 bg-primary-500/10 border' : 'bg-white/5'
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={cn(
                  'text-tagline-3',
                  versao.vencedora ? 'text-primary-500' : 'text-white/55'
                )}
              >
                {versao.nome}
              </span>
              {versao.vencedora && (
                <span
                  className={cn(
                    'bg-primary-500 text-secondary text-tagline-3 rounded-full px-2 py-0.5 font-medium transition-opacity delay-[1200ms] duration-500',
                    ativo ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  melhor
                </span>
              )}
            </div>
            <p className="font-titulo mt-3 text-[2rem] leading-none font-medium text-white">
              {versao.taxa}
            </p>
            <p className="text-tagline-3 mt-1 text-white/40">{versao.sessoes}</p>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div
                style={{
                  width: ativo ? `${versao.largura}%` : '0%',
                  transitionDelay: `${index * 200}ms`,
                }}
                className={cn(
                  'h-full rounded-full transition-[width] duration-1000 ease-out',
                  versao.vencedora ? 'bg-primary-500' : 'bg-white/40'
                )}
              />
            </div>
          </div>
        ))}
      </div>
      <Indicadores
        itens={[
          ['Uplift', '+78%'],
          ['Confiança', '96%'],
          ['Ciclo', '14d'],
        ]}
      />
      <p className="text-tagline-2 mt-2.5 rounded-2xl bg-white/5 p-4 text-white/60">
        O teste não começa pelo layout. Começa pela pergunta certa: qual fricção impede o usuário
        de avançar?
      </p>
    </Moldura>
  );
};

// Inteligência de Dados: dashboard com receita atribuída por canal.
const CORES_CANAIS = ['#56fed5', '#6575ff', '#2ee8bd', '#4b57d8', 'rgb(255 255 255 / 0.25)'];
const canais = [
  { label: 'Google Ads', valor: 38 },
  { label: 'Meta Ads', valor: 27 },
  { label: 'E-mail', valor: 18 },
  { label: 'Orgânico / SEO', valor: 11 },
  { label: 'Outros', valor: 6 },
];

export const VisualDashboard = () => {
  const ativo = useAtivo();

  return (
    <Moldura
      icone={<BarChart3 className="size-4" strokeWidth={2} aria-hidden="true" />}
      rotulo="Dashboard de marketing"
      status="ao vivo"
      titulo="Receita atribuída por canal"
    >
      <Indicadores
        itens={[
          ['CAC médio', 'R$ 184'],
          ['LTV médio', 'R$ 4,2k'],
          ['ROI total', '22,8x'],
        ]}
      />
      <div className="mt-5 flex items-center gap-5">
        <svg viewBox="0 0 120 120" className="size-32 shrink-0 -rotate-90" aria-hidden="true">
          {canais.map((canal, index) => {
            const antes = canais.slice(0, index).reduce((soma, c) => soma + c.valor, 0);
            const circ = 2 * Math.PI * 48;
            return (
              <circle
                key={canal.label}
                cx="60"
                cy="60"
                r="48"
                fill="none"
                strokeWidth="16"
                stroke={CORES_CANAIS[index]}
                strokeDasharray={`${ativo ? (canal.valor / 100) * circ : 0} ${circ}`}
                strokeDashoffset={-(antes / 100) * circ}
                style={{
                  transition: 'stroke-dasharray 900ms ease-out',
                  transitionDelay: `${index * 150}ms`,
                }}
              />
            );
          })}
        </svg>
        <ul className="min-w-0 flex-1 space-y-2">
          {canais.map((canal, index) => (
            <li key={canal.label} className="text-tagline-3 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-white/60">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: CORES_CANAIS[index],
                  }}
                />
                {canal.label}
              </span>
              <span className="font-medium text-white">{canal.valor}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Moldura>
  );
};

const visuais = {
  automacao: VisualAutomacao,
  pipeline: VisualPipeline,
  'teste-ab': VisualTesteAB,
  dashboard: VisualDashboard,
};

export type VisualServico = keyof typeof visuais;

// A escolha do visual acontece aqui, no cliente, porque o template é um componente de servidor.
const VisualDoServico = ({ tipo }: { tipo: VisualServico }) => {
  const Visual = visuais[tipo];
  return <Visual />;
};

export default VisualDoServico;
