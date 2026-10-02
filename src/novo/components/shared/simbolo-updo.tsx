import { cn } from '@/novo/utils/cn';

interface SimboloUpdoProps {
  className?: string;
  /** Desenha só o contorno do círculo e as setas, sem preenchimento */
  contorno?: boolean;
  /** Anima as setas "subindo" em loop */
  animado?: boolean;
}

// Símbolo da UPDO (círculo com as duas setas para cima), redesenhado em traço
// para poder ser usado grande como marca d'água sem perder nitidez.
const SimboloUpdo = ({ className, contorno = false, animado = false }: SimboloUpdoProps) => (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={cn('overflow-visible', className)}>
    <circle
      cx="50"
      cy="50"
      r="46"
      className={contorno ? 'stroke-current' : 'fill-current'}
      strokeWidth={contorno ? 0.8 : 0}
      fillOpacity={contorno ? 0 : 1}
    />
    <g
      className={cn(
        contorno ? 'stroke-current' : 'stroke-secondary',
        animado && 'animate-[simbolo-sobe_2.8s_ease-in-out_infinite] motion-reduce:animate-none'
      )}
      strokeWidth={contorno ? 1.4 : 11}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="27,78 50,52 73,78" />
      <polyline points="27,52 50,26 73,52" />
    </g>
  </svg>
);

export default SimboloUpdo;
