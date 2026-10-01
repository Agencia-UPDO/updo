import { ArrowUpRightIcon } from '@/novo/components/shared/icons';
import { cn } from '@/novo/utils/cn';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonPrimaryV2Props = {
  text: string;
} & ComponentPropsWithoutRef<'span'>;

const ButtonPrimaryV2 = ({ text, className, ...props }: ButtonPrimaryV2Props) => {
  return (
    <span
      className={cn(
        'group border-stroke-1 font-texto text-tagline-1 font-medium text-secondary ease-bouncy inline-flex h-14 cursor-pointer items-center rounded-full border p-1.5 font-normal transition-transform duration-400 active:scale-[0.98]',
        className
      )}
      data-button-wrapper
      {...props}
    >
      <span className="bg-primary-500 flex h-full min-w-0 items-center justify-between gap-x-4 rounded-full py-1.5 pr-[6px] pl-6">
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

        <span className="to-background-4 flex h-7.5 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-white shadow-[0_8px_12px_0_rgba(0,0,0,0.16)]">
          <ArrowUpRightIcon className="ease-bouncy size-6 stroke-black transition-transform duration-400 group-hover:rotate-45" />
        </span>
      </span>
    </span>
  );
};

export default ButtonPrimaryV2;
