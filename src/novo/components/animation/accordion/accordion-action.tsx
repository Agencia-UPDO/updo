'use client';

import { cn } from '@/novo/utils/cn';
import { Children, type ReactNode } from 'react';
import { useAccordion } from './accordion';
import { useAccordionItem } from './accordion-item';

interface AccordionActionProps {
  children: ReactNode;
  className?: string;
}

const AccordionAction = ({ children, className }: AccordionActionProps) => {
  const { toggle } = useAccordion();
  const { index, isOpen } = useAccordionItem();

  return (
    <button
      type="button"
      data-faq-action
      onClick={() => toggle(index)}
      aria-expanded={isOpen}
      data-expend={isOpen ? 'true' : undefined}
      className={cn(
        'flex w-full cursor-pointer items-start justify-between gap-9 pt-6 pb-6 text-left transition-all duration-500 ease-out data-[expend=true]:pb-3',
        className
      )}
    >
      {Children.map(children, (child) =>
        typeof child === 'string' ? (
          <span className="font-inter-tight text-tagline-new text-black">{child}</span>
        ) : (
          child
        )
      )}
    </button>
  );
};

export default AccordionAction;
