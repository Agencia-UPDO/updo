import { ArrowUpRightIcon } from '@/novo/components/shared/icons';
import { cn } from '@/novo/utils/cn';
import type { ComponentPropsWithoutRef } from 'react';

interface ButtonPrimaryProps extends ComponentPropsWithoutRef<'span'> {
  text: string;
}

const ButtonPrimary = ({ text, className, ...props }: ButtonPrimaryProps) => {
  return (
    <span
      className={cn(
        'group border-stroke-1 font-texto text-tagline-1 font-medium text-secondary ease-bouncy inline-flex h-16 max-w-full cursor-pointer items-center rounded-full border p-1.5 transition-transform duration-400 active:scale-[0.98] max-md:h-auto max-md:min-h-16',
        // No celular o texto quebra em vez de vazar do botão.
        'max-md:[&_[data-button-lower-text]]:hidden max-md:[&_[data-button-upper-text]]:text-wrap',
        className
      )}
      data-button-wrapper
      {...props}
    >
      <span className="bg-primary-500 flex h-full w-full min-w-0 items-center justify-between gap-x-4 rounded-full py-1.5 pr-[6px] pl-6 max-md:min-h-[50px] max-md:pl-5">
        <span className="relative inline-block overflow-hidden leading-[1.2]">
          <span
            data-button-upper-text
            className="ease-bouncy block text-nowrap transition-transform duration-400 group-hover:-translate-y-full"
          >
            {text}
          </span>
          <span
            data-button-lower-text
            className="ease-bouncy absolute top-full left-0 block text-nowrap transition-transform duration-400 group-hover:-translate-y-full"
          >
            {text}
          </span>
        </span>
        <span className="to-background-4 flex h-10 w-13.5 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-white shadow-[0_8px_12px_0_rgba(0,0,0,0.16)]">
          <ArrowUpRightIcon className="ease-bouncy size-6 stroke-black transition-transform duration-400 group-hover:rotate-45" />
        </span>
      </span>
    </span>
  );
};

export default ButtonPrimary;
