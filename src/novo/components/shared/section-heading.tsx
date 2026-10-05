import { balance } from '@/novo/utils/balance';
import { realce } from '@/novo/components/shared/realce';
import RevealAnimation from '@/novo/components/animation/reveal-animation';
import TextReveal from '@/novo/components/animation/text-reveal';
import { cn } from '@/novo/utils/cn';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  badge: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
  className?: string;
  /** Total de seções inicial, antes do ContadorSecoes preencher. */
  contador?: string;
}

const SectionHeading = ({
  badge,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
  contador,
}: SectionHeadingProps) => {
  const centered = align === 'center';

  return (
    <div className={cn('space-y-5', centered && 'text-center', className)}>
      <RevealAnimation delay={0.1}>
        <div className={cn('flex', centered ? 'justify-center' : 'justify-start')}>
          {/* Contador técnico: número e total são preenchidos pelo ContadorSecoes. */}
          <p
            className={cn(
              'font-mono text-xs tracking-[0.14em] uppercase',
              tone === 'dark' ? 'text-white/60' : 'text-secondary/60'
            )}
          >
            <span data-contador-bloco>
              [ <span data-contador-n className="text-lilas-500 font-medium" />
              {' / '}
              <span data-contador-total>{contador ?? ''}</span> ] <span className="mx-1.5">·</span>{' '}
            </span>
            {badge}
          </p>
        </div>
      </RevealAnimation>
      <div className="space-y-3">
        <TextReveal delay={0.2}>
          <h2
            style={balance}
            className={cn(centered && 'mx-auto max-w-[820px]', tone === 'dark' && 'text-white')}
          >
            {realce(title, tone)}
          </h2>
        </TextReveal>
        {description && (
          <TextReveal delay={0.3}>
            <p
              className={cn(
                'max-w-[620px]',
                centered && 'mx-auto',
                tone === 'dark' && 'text-white/60'
              )}
            >
              {description}
            </p>
          </TextReveal>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
