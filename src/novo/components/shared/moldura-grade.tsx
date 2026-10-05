import { cn } from '@/novo/utils/cn';

/** Marcador em forma de estrela de quatro pontas, com os cantos internos curvos. */
const Mais = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 12" className={cn('absolute size-[13px]', className)} fill="currentColor" aria-hidden="true">
    <path d="M6 0Q6.7 5.3 12 6Q6.7 6.7 6 12Q5.3 6.7 0 6Q5.3 5.3 6 0Z" />
  </svg>
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
          // Linhas afastadas do conteúdo para não encostar no texto.
          'relative -mx-4 h-full border-x lg:-mx-8 xl:-mx-12',
          tone === 'dark' ? 'border-white/8' : 'border-secondary/8'
        )}
      >
        <Mais className="-top-[6.5px] -left-[7px]" />
        <Mais className="-top-[6.5px] -right-[7px]" />
      </div>
    </div>
  </div>
);

export default MolduraGrade;
