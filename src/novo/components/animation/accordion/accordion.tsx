'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { Children, createContext, useContext, useRef, useState, type ReactNode } from 'react';

gsap.registerPlugin(CustomEase, SplitText, useGSAP);
if (!CustomEase.get('faq-ease')) {
  CustomEase.create('faq-ease', '0.625, 0.05, 0, 1');
}

type AccordionContextValue = {
  openIndex: number | null;
  itemCount: number;
  toggle: (index: number) => void;
  registerContent: (index: number, node: HTMLDivElement | null) => void;
  registerText: (index: number, node: HTMLDivElement | null) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion parts must be used inside Accordion');
  }
  return context;
};

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

const Accordion = ({ children, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const splitRefs = useRef<(SplitText | null)[]>([]);
  const firstRunRef = useRef(true);
  const itemCount = Children.count(children);

  const registerContent = (index: number, node: HTMLDivElement | null) => {
    contentRefs.current[index] = node;
  };

  const registerText = (index: number, node: HTMLDivElement | null) => {
    textRefs.current[index] = node;
  };

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useGSAP(
    () => {
      const isFirst = firstRunRef.current;
      firstRunRef.current = false;

      const revealText = (index: number, animate: boolean) => {
        const text = textRefs.current[index];
        if (!text) return;
        splitRefs.current[index]?.revert();
        const split = SplitText.create(text, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'line',
        });
        splitRefs.current[index] = split;
        if (animate) {
          gsap.fromTo(
            split.lines,
            { yPercent: 110 },
            { yPercent: 0, duration: 0.65, stagger: 0.06, ease: 'power3.out' }
          );
        } else {
          gsap.set(split.lines, { yPercent: 0 });
        }
      };

      const hideText = (index: number) => {
        const split = splitRefs.current[index];
        if (split) gsap.set(split.lines, { yPercent: 110 });
      };

      contentRefs.current.forEach((content, index) => {
        if (!content) return;
        const open = index === openIndex;

        if (open) {
          revealText(index, !isFirst);
          if (isFirst) {
            content.style.height = 'auto';
          } else {
            gsap.set(content, { height: 'auto' });
            const target = content.offsetHeight;
            hideText(index);
            gsap.fromTo(
              content,
              { height: 0 },
              {
                height: target,
                duration: 0.6,
                ease: 'faq-ease',
                onComplete: () => {
                  content.style.height = 'auto';
                },
              }
            );
            revealText(index, true);
          }
        } else if (isFirst) {
          content.style.height = '0px';
        } else {
          hideText(index);
          gsap.to(content, { height: 0, duration: 0.6, ease: 'faq-ease' });
        }
      });

      return () => {
        splitRefs.current.forEach((split) => split?.revert());
      };
    },
    { scope: rootRef, dependencies: [openIndex] }
  );

  return (
    <AccordionContext.Provider
      value={{ openIndex, itemCount, toggle, registerContent, registerText }}
    >
      <div ref={rootRef} data-faq-accordion className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
