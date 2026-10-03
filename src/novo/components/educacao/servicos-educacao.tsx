'use client';

import RevealAnimation from '@/novo/components/animation/reveal-animation';
import SectionHeading from '@/novo/components/shared/section-heading';
import { cn } from '@/novo/utils/cn';
import { Bot, Check, GitMerge, LayoutGrid, Megaphone, Search } from 'lucide-react';
import { useState } from 'react';

const servicos = [
  {
    icon: Search,
    tag: 'Fundação',
    title: 'Matriz CSD e diagnóstico estratégico',
    problem:
      'Muitos gestores investem em marketing com base em suposições sobre o que o aluno realmente quer, gerando desperdício e frustração.',
    solution:
      'Aplicamos a Matriz CSD (Certezas, Suposições e Dúvidas) no início do projeto, transformando hipóteses em dados para guiar cada ação do plano de captação.',
    results: [
      'Estratégia baseada em fatos, não em palpites',
      'Menos risco logo no início do investimento',
      'Clareza sobre os objetivos de negócio',
    ],
  },
  {
    icon: Megaphone,
    tag: 'Atração',
    title: 'Geração de demanda qualificada',
    problem:
      'A instituição investe em anúncios, mas atrai curiosos e gera muitos leads que não viram matrícula.',
    solution:
      'Criamos e gerimos campanhas no Google, Meta e LinkedIn com foco em alunos com intenção real e perfil para o curso.',
    results: [
      'Leads com mais interesse e perfil para o curso',
      'Custo por matrícula menor',
      'Campanhas otimizadas por curso e unidade',
    ],
  },
  {
    icon: LayoutGrid,
    tag: 'Conversão',
    title: 'Funil de captação e automação',
    problem:
      'O interessado chega, se perde em um site confuso ou demora para ser atendido e procura a concorrência.',
    solution:
      'Desenvolvemos landing pages de conversão e fluxos de automação (CRM, e-mail e WhatsApp) que mantêm o lead engajado até a matrícula.',
    results: [
      'Mais agendamentos de visita',
      'Nutrição automática de leads em dúvida',
      'Rastreamento da jornada do aluno',
    ],
  },
  {
    icon: GitMerge,
    tag: 'Vendas',
    title: 'Estruturação do processo comercial',
    problem:
      'A equipe não tem script claro, não faz follow-up e perde matrículas por falhas básicas de atendimento.',
    solution:
      'Desenvolvemos o Playbook de Vendas Educacional e aplicamos o Treinamento de Neuromarketing para a equipe comercial, com atendimento focado em fechamento.',
    results: [
      'Mais conversão comercial',
      'Playbook de vendas replicável',
      'Equipe treinada em neuromarketing',
    ],
  },
  {
    icon: Bot,
    tag: 'Inteligência',
    title: 'Inteligência de dados e performance',
    problem:
      'A instituição não sabe qual canal traz mais retorno ou qual curso está mais caro de captar, e decide no escuro.',
    solution:
      'Acesso ao Radar de Matrículas, nosso sistema próprio que oferece um panorama estratégico que o CRM não alcança.',
    results: [
      'ROI por curso e campanha',
      'Panorama unificado da instituição',
      'Decisões rápidas com dados próprios',
    ],
  },
];

const ServicosEducacao = () => {
  const [ativo, setAtivo] = useState(0);
  const atual = servicos[ativo];

  return (
    <section id="servicos" className="py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Serviços"
          title="O que você recebe na prática"
          description="Não vendemos só tráfego. Implementamos um sistema que organiza a captação do anúncio à matrícula."
        />

        <RevealAnimation delay={0.2}>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 flex flex-col gap-2 lg:col-span-4">
              {servicos.map((servico, index) => (
                <button
                  key={servico.title}
                  type="button"
                  onClick={() => setAtivo(index)}
                  className={cn(
                    'flex shrink-0 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors',
                    index === ativo
                      ? 'bg-secondary border-secondary text-white'
                      : 'border-stroke-3 hover:border-lilas-200 bg-white'
                  )}
                >
                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-xl',
                      index === ativo ? 'bg-primary-500 text-secondary' : 'bg-lilas-50 text-lilas-500'
                    )}
                  >
                    <servico.icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span>
                    <span className={cn('text-tagline-3 block', index === ativo ? 'text-primary-500' : 'text-secondary/50')}>
                      {servico.tag}
                    </span>
                    <span className="text-tagline-2 block font-medium">
                      {servico.title}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div key={ativo} className="col-span-12 animate-[metodo-entra_400ms_ease-out] lg:col-span-8">
              <div className="grid h-full gap-4 rounded-3xl bg-white p-7 md:grid-cols-2 md:p-9">
                <div className="space-y-6">
                  <div>
                    <p className="text-tagline-3 text-lilas-500 font-medium">O problema</p>
                    <p className="text-tagline-1 text-secondary/80 mt-2">{atual.problem}</p>
                  </div>
                  <div>
                    <p className="text-tagline-3 text-primary-700 font-medium">Como resolvemos</p>
                    <p className="text-tagline-1 text-secondary/80 mt-2">{atual.solution}</p>
                  </div>
                </div>
                <div className="bg-background-13 rounded-2xl p-6">
                  <p className="text-tagline-2 text-secondary font-medium">O que muda</p>
                  <ul className="mt-4 space-y-3">
                    {atual.results.map((resultado) => (
                      <li key={resultado} className="text-tagline-2 text-secondary flex items-start gap-3">
                        <span className="bg-primary-500 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                          <Check className="text-secondary size-3" strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {resultado}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ServicosEducacao;
