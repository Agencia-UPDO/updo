'use client';

import { useGSAP } from '@gsap/react';
import { Slot } from '@radix-ui/react-slot';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ComponentPropsWithoutRef, RefCallback, useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase, useGSAP);
CustomEase.create('text-reveal-ease', '0.34, 1.42, 0.64, 1');

type TextRevealProps = {
  asChild?: boolean;
  duration?: number;
  delay?: number;
} & ComponentPropsWithoutRef<'div'>;

const TextReveal = ({
  asChild = true,
  children,
  duration = 0.8,
  delay = 0,
  ...props
}: TextRevealProps) => {
  const Component = asChild ? Slot : 'div';
  const elementRef = useRef<HTMLElement | null>(null);

  const setRef: RefCallback<Element> = (node) => {
    elementRef.current = node as HTMLElement | null;
  };

  useGSAP(
    () => {
      const element = elementRef.current;
      if (!element) return;

      const split = SplitText.create(element, {
        type: 'lines, words, chars',
        mask: 'lines',
        linesClass: 'line',
        wordsClass: 'word',
        charsClass: 'letter',
        autoSplit: true,
        onSplit(self) {
          if (!self.lines.length) return;

          return gsap.fromTo(
            self.lines,
            { yPercent: 110 },
            {
              yPercent: 0,
              duration,
              stagger: 0.08,
              delay,
              ease: 'text-reveal-ease',
              onStart: () => {
                if (!element.isConnected) return;
                const letters = self.chars?.filter(Boolean) ?? [];
                gsap.set(element, { opacity: 1 });
                if (letters.length) gsap.set(letters, { opacity: 1 });
              },
              scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                end: 'bottom 20%',
              },
            }
          );
        },
      });

      return () => {
        split.revert();
      };
    },
    { dependencies: [duration, delay] }
  );

  return (
    <Component ref={setRef} data-text-reveal {...props}>
      {children}
    </Component>
  );
};

export { TextReveal };
export default TextReveal;
