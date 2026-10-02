import { cn } from '@/novo/utils/cn';

// Textura de pontos parada no topo e curvas finas só na parte de baixo do hero,
// atrás dos cards, com um brilho lento percorrendo cada uma.
const destinos = [-120, 300, 1140, 1560];

const linhas = destinos.map((x, index) => ({
  d: `M720 1000 C720 620 ${x} 560 ${x} -60`,
  duracao: 7 + (index % 2) * 2,
  atraso: index * 1.5,
  cor: index % 2 === 0 ? 'url(#hero-brilho-menta)' : 'url(#hero-brilho-lilas)',
}));

const HeroFundo = ({ className }: { className?: string }) => (
  <div
    className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-lilas-200)_1px,transparent_1.5px)] bg-size-[26px_26px] mask-[radial-gradient(ellipse_60%_55%_at_75%_25%,#000_20%,transparent_75%)] opacity-70" />

    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full mask-[linear-gradient(to_bottom,transparent_55%,#000_75%,#000_92%,transparent)]"
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
