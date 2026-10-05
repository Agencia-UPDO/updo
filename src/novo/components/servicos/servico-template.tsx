import { balance } from '@/novo/utils/balance';
import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import { CheckIcon } from '@/novo/components/shared/icons';
import Faq from '@/novo/components/shared/faq';
import LeadForm, { type LeadFormSelect } from '@/novo/components/shared/lead-form';
import SectionHeading from '@/novo/components/shared/section-heading';
import Badge from '@/novo/components/shared/ui/badge/badge';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { servicos, setores } from '@/novo/data/navegacao';
import { cn } from '@/novo/utils/cn';
import Link from 'next/link';
import { Check, X, type LucideIcon } from 'lucide-react';
import IconChip from '@/novo/components/shared/icon-chip';
import HeroFundo from '@/novo/components/home/hero-fundo';
import ProvaSocial from '@/novo/components/shared/prova-social';
import FluxoPilares from '@/novo/components/servicos/fluxo-pilares';
import VisualDoServico, { type VisualServico } from '@/novo/components/servicos/visuais-servico';
import VisualCartao, { type CartaoDados } from '@/novo/components/servicos/visual-cartao';
import PainelServico, { type PainelServicoDados } from '@/novo/components/servicos/painel-servico';

interface Item {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export interface ServicoConteudo {
  slug: string;
  nome: string;
  /** 'setor' muda o selo, o caminho do formulário e os links do fim da página. */
  tipo?: 'servico' | 'setor';
  hero: {
    title: string;
    description: string;
    bullets: string[];
    ctaText: string;
    /** Botão secundário do topo. Sem ele, o botão leva para /cases. */
    ctaSecundario?: { text: string; href: string };
    /** Números exibidos logo abaixo dos botões do topo. */
    metricas?: { label: string; value: string; detail?: string }[];
  };
  resultado: {
    title: string;
    description: string;
    metrics: { value: string; label: string }[];
  };
  painel?: PainelServicoDados;
  visual?: VisualServico;
  cartao?: CartaoDados;
  problemas: { badge?: string; title: string; description?: string; items: Item[] };
  plano?: { title: string; description: string; passos: { title: string; description: string }[] };
  mudanca?: { title: string; sem: string[]; com: string[] };
  entregas: { badge?: string; title: string; description: string; ctaText?: string; items: Item[] };
  /** Seção extra da página atual, exibida depois das entregas. */
  extra?: {
    badge: string;
    title: string;
    description?: string;
    bullets?: string[];
    items: { icon?: LucideIcon; title: string; description?: string; tag?: string }[];
  };
  /** Bloco de case real com o resultado do cliente. */
  caso?: {
    badge: string;
    title: string;
    description: string;
    metrics: { value: string; label: string }[];
    ctaText: string;
    link?: { text: string; href: string };
  };
  pilares: {
    badge?: string;
    title: string;
    description: string;
    /** Lista exibida abaixo do título, como na página atual. */
    lista?: string[];
    items: { icon?: LucideIcon; label: string; description: string; resultado: string }[];
  };
  formulario: {
    badge?: string;
    /** Frase exibida acima do botão de envio. */
    nota?: string;
    /** Texto de confirmação depois do envio. */
    sucesso?: string;
    title: string;
    description: string;
    formName: string;
    submitText: string;
    selects: LeadFormSelect[];
  };
  faq: { question: string; answer: string }[];
  faqTexto?: { badge?: string; title: string; description: string; citacao?: string };
}

const ServicoTemplate = ({ conteudo }: { conteudo: ServicoConteudo }) => {
  const {
    hero,
    resultado,
    painel,
    visual,
    cartao,
    problemas,
    plano,
    mudanca,
    entregas,
    extra,
    caso,
    pilares,
    formulario,
    faq,
    faqTexto,
  } = conteudo;
  const ehSetor = conteudo.tipo === 'setor';
  const caminho = ehSetor ? `/${conteudo.slug}` : `/servicos/${conteudo.slug}`;
  const outrosLinks = (ehSetor ? setores : servicos).filter((link) => !link.href.endsWith(conteudo.slug));

  return (
    <>
      <section className="relative isolate pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
        <HeroFundo />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,var(--color-lilas-200)_1px,transparent_1.5px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_55%_45%_at_25%_30%,#000_15%,transparent_75%)] opacity-60"
        />
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-8 lg:col-span-7">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <div>
                    <Badge text={`${ehSetor ? 'Setor' : 'Serviço'} · ${conteudo.nome}`} />
                  </div>
                </RevealAnimation>
                <TextReveal delay={0.15}>
                  <h1 style={balance} className="xl:text-heading-2!">{hero.title}</h1>
                </TextReveal>
                <TextReveal delay={0.25}>
                  <p className="max-w-[580px]">{hero.description}</p>
                </TextReveal>
              </div>

              <RevealAnimation delay={0.3}>
                <ul className="space-y-3">
                  {hero.bullets.map((bullet) => (
                    <li key={bullet} className="text-tagline-1 text-secondary flex items-center gap-3">
                      <span className="bg-primary-500 flex size-6 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="size-3.5" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </RevealAnimation>

              <RevealAnimation delay={0.4} direction="left">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="#contato" className="inline-flex w-full sm:w-auto">
                    <ButtonPrimary text={hero.ctaText} className="w-full" />
                  </Link>
                  <Link href={hero.ctaSecundario?.href ?? '/cases'} className="inline-flex w-full sm:w-auto">
                    <ButtonWhite text={hero.ctaSecundario?.text ?? 'Ver cases'} className="w-full" />
                  </Link>
                </div>
              </RevealAnimation>

              {hero.metricas && (
                <RevealAnimation delay={0.5}>
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {hero.metricas.map((metrica) => (
                      <li key={metrica.label} className="border-stroke-3 rounded-2xl border bg-white p-4">
                        <p className="font-titulo text-heading-6 text-secondary font-medium">{metrica.value}</p>
                        <p className="text-tagline-3 text-secondary mt-1 font-medium">{metrica.label}</p>
                        {metrica.detail && <p className="text-tagline-3 text-secondary/55 mt-0.5">{metrica.detail}</p>}
                      </li>
                    ))}
                  </ul>
                </RevealAnimation>
              )}
            </div>

            <RevealAnimation delay={0.4} direction="right" className="col-span-12 lg:col-span-5">
              {visual ? (
                <div>
                  <VisualDoServico tipo={visual} />
                </div>
              ) : cartao ? (
                <div>
                  <VisualCartao dados={cartao} />
                </div>
              ) : painel ? (
                <div>
                  <PainelServico dados={painel} />
                </div>
              ) : (
              <div className="bg-lilas-700 rounded-3xl p-7 md:p-9">
                <p className="text-tagline-2 text-primary-300">Resultado de cliente</p>
                <p className="font-titulo font-medium text-heading-6 mt-3 text-white">{resultado.title}</p>
                <p className="text-tagline-2 mt-3 text-white/75">{resultado.description}</p>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
                  {resultado.metrics.map((metric) => (
                    <li key={metric.label} className="border-t border-white/20 pt-4">
                      <p className="font-titulo font-medium text-heading-4 text-white">{metric.value}</p>
                      <p className="text-tagline-2 text-white/75">{metric.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
              )}
            </RevealAnimation>
          </div>

          <ProvaSocial className="mt-16 md:mt-20" />
        </div>
      </section>

      <section className="bg-white py-18 md:py-28 xl:py-32">
        <div className="main-container space-y-12 md:space-y-16">
          <SectionHeading
            badge={problemas.badge ?? 'O problema'}
            title={problemas.title}
            description={problemas.description}
          />
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {problemas.items.map((item, index) => (
              <RevealAnimation
                key={item.title}
                delay={0.1 + index * 0.1}
                className="col-span-12 md:col-span-4"
              >
                <div
                  className={cn(
                    'flex h-full flex-col gap-10 rounded-2xl p-7',
                    ['bg-lilas-50', 'bg-primary-50', 'bg-background-13'][index % 3]
                  )}
                >
                  {item.icon && (
                    <IconChip icon={item.icon} tone={index % 2 === 0 ? 'lilas' : 'menta'} size="lg" />
                  )}
                  <div className="space-y-2">
                    <h3 className="text-heading-6 font-normal">{item.title}</h3>
                    <p className="text-tagline-2">{item.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {plano && (
        <section className="bg-white pb-18 md:pb-28 xl:pb-32">
          <div className="main-container space-y-12 md:space-y-16">
            <SectionHeading badge="Como funciona" title={plano.title} description={plano.description} />
            <ol className="relative grid grid-cols-12 gap-4 md:gap-6">
              <span
                aria-hidden="true"
                className="border-stroke-3 absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed md:block"
              />
              {plano.passos.map((passo, index) => (
                <RevealAnimation
                  key={passo.title}
                  delay={0.1 + index * 0.1}
                  className="col-span-12 md:col-span-4"
                >
                  <li className="relative flex h-full flex-col items-center gap-5 text-center">
                    <span className="bg-secondary text-primary-500 font-titulo flex size-20 items-center justify-center rounded-full text-[1.75rem] font-medium shadow-lg ring-8 ring-white">
                      {index + 1}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 font-normal">{passo.title}</h3>
                      <p className="text-tagline-2 mx-auto max-w-[340px]">{passo.description}</p>
                    </div>
                  </li>
                </RevealAnimation>
              ))}
            </ol>
            <RevealAnimation delay={0.4}>
              <div className="flex justify-center">
                <Link href="#contato" className="inline-flex">
                  <ButtonPrimary text={hero.ctaText} />
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </section>
      )}

      <section className="py-18 md:py-28 xl:py-32">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-8 lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
              <SectionHeading
                align="left"
                badge={entregas.badge ?? 'O que entregamos'}
                title={entregas.title}
                description={entregas.description}
              />
              <RevealAnimation delay={0.3}>
                <Link href="#contato" className="inline-flex">
                  <ButtonPrimary text={entregas.ctaText ?? hero.ctaText} />
                </Link>
              </RevealAnimation>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ul className="border-stroke-3 divide-stroke-3 divide-y border-y">
                {entregas.items.map((item, index) => (
                  <RevealAnimation key={item.title} delay={0.05 * index}>
                    <li className="grid grid-cols-[48px_1fr] items-start gap-5 py-7">
                      {item.icon ? (
                        <IconChip icon={item.icon} tone={index % 2 === 0 ? 'menta' : 'lilas'} />
                      ) : (
                        <span className="text-tagline-2 text-secondary/40 pt-1">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      )}
                      <div className="space-y-1.5">
                        <h3 className="text-heading-6 font-normal">{item.title}</h3>
                        <p className="text-tagline-1">{item.description}</p>
                      </div>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {extra && (
        <section className="bg-white py-18 md:py-28 xl:py-32">
          <div className="main-container space-y-12 md:space-y-16">
            <SectionHeading badge={extra.badge} title={extra.title} description={extra.description} />
            {extra.bullets && (
              <ul className="flex flex-wrap justify-center gap-3">
                {extra.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-tagline-2 text-secondary bg-background-13 flex items-center gap-2 rounded-full px-4 py-2"
                  >
                    <CheckIcon className="size-4 [&_path]:stroke-primary-700" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {extra.items.map((item, index) => (
                <RevealAnimation
                  key={item.title}
                  delay={0.05 * index}
                  className={cn('col-span-12 md:col-span-6', extra.items.length % 3 === 0 && 'lg:col-span-4')}
                >
                  <div className="border-stroke-3 flex h-full flex-col gap-5 rounded-2xl border p-7">
                    <div className="flex items-start justify-between gap-4">
                      {item.icon ? (
                        <IconChip icon={item.icon} tone={index % 2 === 0 ? 'lilas' : 'menta'} />
                      ) : (
                        <span className="bg-primary-500 flex size-6 shrink-0 items-center justify-center rounded-full">
                          <CheckIcon className="size-3.5" />
                        </span>
                      )}
                      {item.tag && (
                        <span className="text-tagline-3 bg-lilas-50 text-lilas-700 rounded-full px-3 py-1 font-medium">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-heading-6 font-normal">{item.title}</h3>
                      {item.description && <p className="text-tagline-2">{item.description}</p>}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary py-18 md:py-28 xl:py-32">
        <div className="main-container space-y-12 md:space-y-16">
          <SectionHeading
            tone="dark"
            badge={pilares.badge ?? 'Sistema de aquisição'}
            title={pilares.title}
            description={pilares.description}
          />
          {pilares.lista && (
            <ul className="mx-auto grid max-w-[960px] gap-3 md:grid-cols-2">
              {pilares.lista.map((item) => (
                <li key={item} className="text-tagline-2 flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-white/80">
                  <span className="bg-primary-500 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="text-secondary size-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <RevealAnimation delay={0.2}>
            <div>
              <FluxoPilares
                itens={pilares.items.map(({ icon: Icone, ...pilar }) => ({
                  ...pilar,
                  icone: Icone ? (
                    <Icone className="size-6" strokeWidth={1.75} aria-hidden="true" />
                  ) : null,
                }))}
              />
            </div>
          </RevealAnimation>
        </div>
      </section>

      {caso && (
        <section className="py-18 md:py-28 xl:py-32">
          <div className="main-container">
            <div className="bg-lilas-700 relative isolate overflow-hidden rounded-3xl p-7 md:p-12">
              <div className="bg-primary-500/20 pointer-events-none absolute -top-24 -right-24 -z-10 size-80 rounded-full blur-3xl" />
              <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-12">
                <div className="col-span-12 space-y-5 lg:col-span-6">
                  <span className="text-tagline-2 text-primary-300 font-medium">{caso.badge}</span>
                  <h2 className="text-heading-4 font-normal text-white">{caso.title}</h2>
                  <p className="text-tagline-1 text-white/75">{caso.description}</p>
                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <Link href="#contato" className="inline-flex">
                      <ButtonPrimary text={caso.ctaText} />
                    </Link>
                    {caso.link && (
                      <Link href={caso.link.href} className="inline-flex">
                        <ButtonWhite text={caso.link.text} />
                      </Link>
                    )}
                  </div>
                </div>
                <ul className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-6">
                  {caso.metrics.map((metric) => (
                    <li key={metric.label} className="border-t border-white/20 pt-4">
                      <p className="font-titulo text-heading-4 font-medium text-white">{metric.value}</p>
                      <p className="text-tagline-2 text-white/75">{metric.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {mudanca && (
        <section className="bg-white py-18 md:py-28 xl:py-32">
          <div className="main-container space-y-12 md:space-y-16">
            <SectionHeading badge="O que está em jogo" title={mudanca.title} />
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <RevealAnimation delay={0.1} className="col-span-12 md:col-span-6">
                <div className="bg-background-13 h-full rounded-3xl p-7 md:p-9">
                  <p className="text-tagline-1 text-secondary/60 font-medium">Do jeito que está</p>
                  <ul className="mt-6 space-y-4">
                    {mudanca.sem.map((item) => (
                      <li key={item} className="text-tagline-1 flex items-start gap-3">
                        <span className="bg-secondary/10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full">
                          <X className="text-secondary/60 size-3.5" strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.2} className="col-span-12 md:col-span-6">
                <div className="bg-secondary h-full rounded-3xl p-7 md:p-9">
                  <p className="text-tagline-1 text-primary-500 font-medium">Com a UPDO</p>
                  <ul className="mt-6 space-y-4">
                    {mudanca.com.map((item) => (
                      <li key={item} className="text-tagline-1 flex items-start gap-3 text-white">
                        <span className="bg-primary-500 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full">
                          <Check className="text-secondary size-3.5" strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>
      )}

      <section id="contato" className="scroll-mt-28 py-18 md:py-28 xl:py-32">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeading
                align="left"
                badge={formulario.badge ?? 'Diagnóstico gratuito'}
                title={formulario.title}
                description={formulario.description}
              />
            </div>
            <RevealAnimation delay={0.2} className="col-span-12 lg:col-span-7">
              <div>
                <LeadForm
                  formName={formulario.formName}
                  service={ehSetor ? '' : conteudo.nome}
                  extraFields={ehSetor ? { sector: conteudo.nome } : undefined}
                  pagePath={caminho}
                  selects={formulario.selects}
                  submitText={formulario.submitText}
                  nota={formulario.nota}
                  sucesso={formulario.sucesso}
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Faq
          items={faq}
          badge={faqTexto?.badge}
          title={faqTexto?.title ?? `Dúvidas sobre ${conteudo.nome.toLowerCase()}`}
          description={
            faqTexto?.description ?? 'Respostas diretas para as perguntas que mais recebemos sobre este serviço.'
          }
          citacao={faqTexto?.citacao}
        />
      </div>

      <section className="py-18 md:py-28">
        <div className="main-container space-y-10">
          <SectionHeading
            badge={ehSetor ? 'Outros setores' : 'Outros serviços'}
            title={ehSetor ? 'Veja como atuamos em *outros mercados*' : 'Integre com o *resto da operação*'}
          />
          <div className="flex flex-wrap justify-center gap-3">
            {outrosLinks.map((servico) => (
              <Link
                key={servico.href}
                href={servico.href}
                className="border-stroke-3 hover:border-secondary text-tagline-1 text-secondary rounded-full border bg-white px-5 py-3 transition-colors"
              >
                {servico.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicoTemplate;
