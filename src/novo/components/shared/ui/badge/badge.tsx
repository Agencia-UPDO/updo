import { cn } from '@/novo/utils/cn';
import type { ComponentPropsWithoutRef } from 'react';

interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  text: string;
  tone?: 'light' | 'dark';
}

const Badge = ({ text, tone = 'light', className, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-x-2.5 rounded-full border py-1.5 pr-3.5 pl-2.5',
        tone === 'light' ? 'border-stroke-3 bg-white/70' : 'border-white/15 bg-white/5',
        className
      )}
      {...props}
    >
      <span className="bg-primary-500 ring-primary-500/30 block size-2 shrink-0 rounded-full ring-4" />
      <span
        className={cn(
          'font-texto text-tagline-2 font-medium',
          tone === 'light' ? 'text-secondary' : 'text-white'
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default Badge;
