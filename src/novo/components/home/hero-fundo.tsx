import { cn } from '@/novo/utils/cn';

// Grade fina no lado direito do hero, com feixes de luz correndo pelas linhas.
// Fica atrás dos números e some antes de chegar no título.
const CELULA = 72;

const feixes = [
  { eixo: 'x', posicao: 2, duracao: 6, atraso: 0, cor: 'via-primary-500' },
  { eixo: 'x', posicao: 5, duracao: 8, atraso: 2.5, cor: 'via-lilas-500' },
  { eixo: 'x', posicao: 8, duracao: 7, atraso: 4, cor: 'via-primary-500' },
  { eixo: 'y', posicao: 3, duracao: 7, atraso: 1, cor: 'via-lilas-500' },
  { eixo: 'y', posicao: 7, duracao: 6, atraso: 3.5, cor: 'via-primary-500' },
  { eixo: 'y', posicao: 11, duracao: 9, atraso: 5, cor: 'via-lilas-500' },
] as const;

const HeroFundo = ({ className }: { className?: string }) => (
  <div
    className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
    aria-hidden="true"
  >
    <div className="absolute inset-y-0 right-0 w-full mask-[radial-gradient(ellipse_55%_65%_at_78%_38%,#000_35%,transparent_80%)] lg:w-[62%]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-lilas-200) 1px, transparent 1px), linear-gradient(to bottom, var(--color-lilas-200) 1px, transparent 1px)',
          backgroundSize: `${CELULA}px ${CELULA}px`,
        }}
      />

      {feixes.map((feixe) =>
        feixe.eixo === 'x' ? (
          <span
            key={`x-${feixe.posicao}`}
            style={{
              top: feixe.posicao * CELULA,
              animationDuration: `${feixe.duracao}s`,
              animationDelay: `${feixe.atraso}s`,
            }}
            className={cn(
              'absolute left-0 h-0.5 w-56 -translate-y-px animate-[feixe-x_6s_linear_infinite] bg-linear-to-r from-transparent to-transparent motion-reduce:hidden',
              feixe.cor
            )}
          />
        ) : (
          <span
            key={`y-${feixe.posicao}`}
            style={{
              left: feixe.posicao * CELULA,
              animationDuration: `${feixe.duracao}s`,
              animationDelay: `${feixe.atraso}s`,
            }}
            className={cn(
              'absolute top-0 h-56 w-0.5 -translate-x-px animate-[feixe-y_6s_linear_infinite] bg-linear-to-b from-transparent to-transparent motion-reduce:hidden',
              feixe.cor
            )}
          />
        )
      )}
    </div>

    <div className="bg-primary-500/15 absolute top-40 right-[12%] size-72 rounded-full blur-3xl" />
    <div className="bg-lilas-500/10 absolute top-10 right-[38%] size-56 rounded-full blur-3xl" />
  </div>
);

export default HeroFundo;
