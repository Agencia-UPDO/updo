import { cn } from '@/novo/utils/cn';
import type { LucideIcon } from 'lucide-react';

export type IconChipTone = 'menta' | 'lilas' | 'navy' | 'claro';

const tones: Record<IconChipTone, string> = {
  menta: 'bg-primary-100 text-secondary',
  lilas: 'bg-lilas-100 text-lilas-700',
  navy: 'bg-secondary text-primary-500',
  claro: 'bg-white/10 text-primary-500',
};

const sizes = {
  sm: 'size-9 rounded-lg [&_svg]:size-4.5',
  md: 'size-12 rounded-xl [&_svg]:size-5.5',
  lg: 'size-14 rounded-2xl [&_svg]:size-6.5',
};

interface IconChipProps {
  icon: LucideIcon;
  tone?: IconChipTone;
  size?: keyof typeof sizes;
  className?: string;
}

const IconChip = ({ icon: Icon, tone = 'menta', size = 'md', className }: IconChipProps) => (
  <span
    className={cn('flex shrink-0 items-center justify-center', tones[tone], sizes[size], className)}
  >
    <Icon strokeWidth={1.75} aria-hidden="true" />
  </span>
);

export default IconChip;
