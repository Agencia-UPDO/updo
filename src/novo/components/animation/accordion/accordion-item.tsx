'use client';

import { cn } from '@/novo/utils/cn';
import { createContext, useContext, type ReactNode } from 'react';
import { useAccordion } from './accordion';

type AccordionItemContextValue = {
  index: number;
  isOpen: boolean;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('Accordion parts must be used inside AccordionItem');
  }
  return context;
};

interface AccordionItemProps {
  index: number;
  children: ReactNode;
  className?: string;
}

const AccordionItem = ({ index, children, className }: AccordionItemProps) => {
  const { openIndex, itemCount } = useAccordion();
  const isOpen = openIndex === index;
  const isLast = index === itemCount - 1;

  return (
    <AccordionItemContext.Provider value={{ index, isOpen }}>
      <div
        data-faq-item
        data-expend={isOpen ? 'true' : undefined}
        className={cn('group/faq', !isLast && 'border-stroke-3 border-b', className)}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
