'use client';

import { cn } from '@/novo/utils/cn';
import type { ReactNode } from 'react';
import { useAccordion } from './accordion';
import { useAccordionItem } from './accordion-item';

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const { registerContent, registerText } = useAccordion();
  const { index } = useAccordionItem();

  return (
    <div
      data-faq-content
      ref={(node) => {
        registerContent(index, node);
      }}
      className="h-0 overflow-hidden"
    >
      <div
        data-faq-text-reveal
        ref={(node) => {
          registerText(index, node);
        }}
        className={cn(
          'font-inter-tight text-tagline-2 w-[90%] cursor-text pb-6 text-black/60',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionContent;
