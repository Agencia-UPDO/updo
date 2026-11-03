import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import type { ConteudoFerramenta } from '@/novo/data/ferramentas-conteudo';

// Embaixo de cada ferramenta: a explicação dos termos e das contas (recolhida, para não empurrar a ferramenta) e as perguntas
// frequentes. O texto vem no HTML da página, então o Google e as IAs leem mesmo fechado; as perguntas também vão como FAQPage.
export default function ExplicacaoFerramenta({ slug, conteudo }: { slug: string; conteudo: ConteudoFerramenta }) {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: conteudo.perguntas.map((p) => ({ '@type': 'Question', name: p.pergunta, acceptedAnswer: { '@type': 'Answer', text: p.resposta } })),
  };
  return (
    <section className="pb-18 md:pb-28">
      <Script id={`schema-faq-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <div className="main-container">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <details className="group rounded-3xl bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:px-8 [&::-webkit-details-marker]:hidden">
              <h2 className="font-titulo text-heading-6 text-secondary font-medium">{conteudo.titulo}</h2>
              <ChevronDown className="text-secondary/50 size-5 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <div className="grid gap-x-10 gap-y-7 px-6 pb-8 md:grid-cols-2 md:px-8">
              {conteudo.blocos.map((b) => (
                <div key={b.titulo}>
                  <h3 className="font-titulo text-tagline-1 text-secondary font-semibold">{b.titulo}</h3>
                  {b.paragrafos.map((p) => (
                    <p key={p.slice(0, 40)} className="text-tagline-2 mt-2">
                      {p}
                    </p>
                  ))}
                  {b.formulas && (
                    <ul className="bg-background-3 mt-3 space-y-1.5 rounded-2xl px-4 py-3">
                      {b.formulas.map((f) => (
                        <li key={f} className="text-tagline-2 text-secondary font-medium">
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </details>

          <div className="rounded-3xl bg-white p-6 md:p-8">
            <h2 className="font-titulo text-heading-6 text-secondary font-medium">Perguntas frequentes</h2>
            <div className="divide-stroke-4 mt-3 divide-y">
              {conteudo.perguntas.map((p) => (
                <details key={p.pergunta} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-tagline-1 text-secondary font-medium">{p.pergunta}</h3>
                    <ChevronDown className="text-secondary/50 size-4 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-tagline-2 mt-2">{p.resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
