import { cn } from '@/novo/utils/cn';

/** Marcador "+" nos cruzamentos da grade. */
const Mais = ({ className }: { className?: string }) => (
  <span className={cn('absolute size-[11px]', className)} aria-hidden="true">
    <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
    <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
  </span>
);

/**
 * Moldura de planta atrás da seção: linhas finas nas bordas do conteúdo,
 * uma linha no topo e "+" nos cruzamentos. A seção precisa ser relative.
 */
const MolduraGrade = ({ tone = 'light' }: { tone?: 'light' | 'dark' }) => (
  <div
    className={cn(
      'pointer-events-none absolute inset-0 -z-10 hidden md:block',
      tone === 'dark' ? 'text-white/25' : 'text-secondary/25'
    )}
    aria-hidden="true"
  >
    <div className={cn('absolute inset-x-0 top-0 h-px', tone === 'dark' ? 'bg-white/8' : 'bg-secondary/8')} />
    <div className="main-container h-full">
      <div
        className={cn(
          'relative h-full border-x',
          tone === 'dark' ? 'border-white/8' : 'border-secondary/8'
        )}
      >
        <Mais className="-top-[5px] -left-[6px]" />
        <Mais className="-top-[5px] -right-[6px]" />
      </div>
    </div>
  </div>
);

export default MolduraGrade;
