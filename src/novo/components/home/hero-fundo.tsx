import { cn } from '@/novo/utils/cn';

// Linhas finas que partem de baixo do hero e se abrem para cima, com um brilho
// percorrendo cada uma. Inspirado no fundo animado da demo ai-marketing do tema,
// redesenhado em SVG + CSS nas cores da UPDO.
const destinos = [-80, 160, 420, 720, 1020, 1280, 1520];

const linhas = destinos.map((x, index) => ({
  d: `M720 980 C720 640 ${x} 520 ${x} -40`,
  duracao: 4.5 + (index % 3) * 1.3,
  atraso: index * 0.7,
  cor: index % 2 === 0 ? 'url(#hero-brilho-menta)' : 'url(#hero-brilho-lilas)',
}));

const HeroFundo = ({ className }: { className?: string }) => (
  <div
    className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full mask-[linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)]"
    >
      <defs>
        <linearGradient id="hero-brilho-menta" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="var(--color-primary-500)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--color-primary-600)" />
        </linearGradient>
        <linearGradient id="hero-brilho-lilas" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="var(--color-lilas-500)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--color-lilas-500)" />
        </linearGradient>
      </defs>

      {linhas.map((linha) => (
        <path
          key={`base-${linha.d}`}
          d={linha.d}
          fill="none"
          strokeWidth="1"
          className="stroke-lilas-200/70"
        />
      ))}

      {linhas.map((linha) => (
        <path
          key={`brilho-${linha.d}`}
          d={linha.d}
          fill="none"
          pathLength={1000}
          stroke={linha.cor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="140 1000"
          style={{
            animationDuration: `${linha.duracao}s`,
            animationDelay: `${linha.atraso}s`,
          }}
          className="animate-[hero-linha_5s_linear_infinite] motion-reduce:hidden"
        />
      ))}
    </svg>

    <div className="bg-primary-500/20 absolute -bottom-24 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full blur-3xl" />
  </div>
);

export default HeroFundo;
