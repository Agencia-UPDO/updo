'use client';

import { cn } from '@/novo/utils/cn';
import { useAccordionItem } from './accordion-item';

interface AccordionIconProps {
  className?: string;
}

const AccordionIcon = ({ className }: AccordionIconProps) => {
  const { isOpen } = useAccordionItem();

  return (
    <span
      data-faq-icon
      data-expend={isOpen ? 'true' : undefined}
      className={cn(
        'border-stroke-3 flex size-7 shrink-0 items-center justify-center rounded border transition-all duration-500 data-[expend=true]:border-transparent data-[expend=true]:bg-white data-[expend=true]:shadow-[0_8px_6px_rgba(0,0,0,0.16)]',
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        className="size-4 stroke-black transition-transform duration-500 group-data-[expend=true]/faq:rotate-180"
      >
        <path d="M13 6L8 11L3 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
};

export default AccordionIcon;
