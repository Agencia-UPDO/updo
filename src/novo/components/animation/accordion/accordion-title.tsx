import { cn } from '@/novo/utils/cn';
import type { ReactNode } from 'react';

interface AccordionTitleProps {
  children: ReactNode;
  className?: string;
}

const AccordionTitle = ({ children, className }: AccordionTitleProps) => {
  return <h3 className={cn('w-full cursor-pointer', className)}>{children}</h3>;
};

export default AccordionTitle;
