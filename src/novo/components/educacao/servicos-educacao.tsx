'use client';

import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import SectionHeading from '@/novo/components/shared/section-heading';
import { cn } from '@/novo/utils/cn';
import { Bot, Check, GitMerge, LayoutGrid, Megaphone, Search } from 'lucide-react';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import Link from 'next/link';
import { useState } from 'react';

const servicos = [
  {
    icon: Search,
    tag: 'Fundação',
    title: 'Matriz CSD & Diagnóstico Estratégico',
    problem:
      "A maioria dos gestores investe em marketing baseados em 'achismos' ou suposições sobre o que o seu aluno realmente quer, gerando desperdício e frustração.",
    solution:
      'Aplicamos a Matriz CSD (Certezas, Suposições e Dúvidas) no Discovery do seu projeto, transformando hipóteses em dados reais para guiar cada ação do seu plano de captação.',
    results: [
      'Estratégia baseada em fatos, não em palpites',
      'Redução de risco logo no início do investimento',
      'Clareza total sobre os objetivos de negócio',
    ],
  },
  {
    icon: Megaphone,
    tag: 'Atração',
    title: 'Geração de demanda qualificada',
    problem:
      'Sua instituição investe em anúncios mas atrai apenas curiosos, gerando um volume alto de leads que não convertem em matrículas reais.',
    solution:
      'Criamos e gerimos campanhas estruturadas no Google, Meta e LinkedIn com foco em atrair alunos com real intenção de compra e perfil para o seu curso.',
    results: [
      'Leads com maior poder aquisitivo e interesse real',
      'Redução drástica do custo por matrícula (CAC)',
      'Campanhas otimizadas por curso e unidade',
    ],
  },
  {
    icon: LayoutGrid,
    tag: 'Conversão',
    title: 'Funil de captação e automação',
    problem:
      'O interessado chega mas se perde em um site confuso ou demora para ser atendido, fazendo com que ele procure a concorrência.',
    solution:
      'Desenvolvemos landing pages de alta conversão e fluxos de automação (CRM/E-mail/WhatsApp) que mantêm o lead engajado até o fechamento.',
    results: [
      'Aumento na taxa de agendamento de visitas',
      'Nutrição automática de leads em dúvida',
      'Rastreamento total da jornada do aluno',
    ],
  },
  {
    icon: GitMerge,
    tag: 'Vendas',
    title: 'Estruturação do processo comercial',
    problem:
      'Sua equipe de vendas não tem um script claro, não faz follow-up e acaba perdendo matrículas por falhas básicas de atendimento.',
    solution:
      'Desenvolvemos o seu Playbook de Vendas Educacional e aplicamos o Treinamento de Neuromarketing para sua equipe comercial, padronizando um atendimento focado em fechamento.',
    results: [
      'Aumento real na taxa de conversão comercial',
      'Playbook de Vendas replicável e escalável',
      'Equipe treinada em gatilhos de neuromarketing',
    ],
  },
  {
    icon: Bot,
    tag: 'Inteligência',
    title: 'Inteligência de dados e performance',
    problem:
      'Você não sabe qual canal traz mais lucro ou qual curso está sendo mais caro captar. As decisões são tomadas no escuro.',
    solution:
      'Acesso ao Radar de Matrículas™, nosso sistema próprio e independente que oferece um panorama estratégico real que o seu CRM não alcança.',
    results: [
      'Visão clara do ROI real por curso e campanha',
      'Panorama estratégico unificado da sua instituição',
      'Decisões rápidas baseadas em dados exclusivos',
    ],
  },
];

const ServicosEducacao = () => {
  const [ativo, setAtivo] = useState(0);
  const atual = servicos[ativo];

  return (
    <section id="servicos" className="relative isolate py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Serviços"
          title="O que você recebe *na prática*."
          description="Nós não vendemos apenas tráfego. Implementamos um sistema completo que organiza sua captação do anúncio à matrícula."
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

            <div key={ativo} className="col-span-12 min-w-0 animate-[metodo-entra_400ms_ease-out] lg:col-span-8">
              <div className="grid h-full grid-cols-1 gap-4 rounded-3xl bg-white p-5 md:grid-cols-2 md:p-9 [&>*]:min-w-0">
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
                  <p className="text-tagline-2 text-secondary font-medium">Resultados esperados</p>
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
                <Link href="#contato" className="flex w-full md:col-span-2 md:inline-flex md:w-auto">
                  <ButtonPrimary
                    text="Quero estruturar isso no meu negócio"
                    className="max-md:text-tagline-2 h-auto min-h-16 w-full md:w-auto max-md:[&_[data-button-lower-text]]:hidden max-md:[&_[data-button-upper-text]]:text-wrap"
                  />
                </Link>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ServicosEducacao;
