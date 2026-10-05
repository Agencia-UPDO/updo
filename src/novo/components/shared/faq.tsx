import Accordion from '@/novo/components/animation/accordion/accordion';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import AccordionAction from '@/novo/components/animation/accordion/accordion-action';
import AccordionContent from '@/novo/components/animation/accordion/accordion-content';
import AccordionIcon from '@/novo/components/animation/accordion/accordion-icon';
import AccordionItem from '@/novo/components/animation/accordion/accordion-item';
import AccordionTitle from '@/novo/components/animation/accordion/accordion-title';
import RevealAnimation from '@/novo/components/animation/reveal-animation';
import SectionHeading from '@/novo/components/shared/section-heading';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import Link from 'next/link';

interface FaqProps {
  items: { question: string; answer: string }[];
  title?: string;
  description?: string;
  badge?: string;
  /** Contador de seção, ex.: "08 / 08". */
  contador?: string;
  /** Moldura de grade atrás da seção. */
  moldura?: boolean;
  /** Frase de destaque exibida abaixo do título. */
  citacao?: string;
}

const Faq = ({
  items,
  badge = 'FAQ',
  contador,
  moldura = true,
  citacao,
  title = '*Perguntas* frequentes',
  description = 'O que costumam nos perguntar antes do primeiro diagnóstico.',
}: FaqProps) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section className="relative isolate py-18 md:py-28 xl:py-32">
      {moldura && <MolduraGrade />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-y-10 lg:gap-x-10 xl:gap-x-18">
          <div className="col-span-12 space-y-8 lg:col-span-5">
            <SectionHeading
              align="left"
              badge={badge}
              contador={contador}
              title={title}
              description={description}
              className="max-lg:text-center [&_div]:max-lg:justify-center [&_p]:max-lg:mx-auto"
            />
            {citacao && (
              <RevealAnimation delay={0.25}>
                <p className="text-tagline-1 text-secondary/70 bg-lilas-50 rounded-2xl p-6 italic max-lg:text-center">
                  “{citacao}”
                </p>
              </RevealAnimation>
            )}
            <RevealAnimation delay={0.3}>
              <div className="flex justify-center lg:justify-start">
                <Link href="/diagnostico" className="inline-flex">
                  <ButtonWhite text="Fazer diagnóstico gratuito" />
                </Link>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="col-span-12 lg:col-span-7">
              <Accordion>
                {items.map((item, index) => (
                  <AccordionItem key={item.question} index={index}>
                    <AccordionTitle>
                      <AccordionAction>
                        {item.question}
                        <AccordionIcon />
                      </AccordionAction>
                    </AccordionTitle>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
