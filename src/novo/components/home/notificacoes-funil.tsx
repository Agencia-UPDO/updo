'use client';

import { cn } from '@/novo/utils/cn';
import { CalendarCheck, Handshake, UserPlus, type LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const eventos: { icon: LucideIcon; titulo: string; detalhe: string; tom: string }[] = [
  {
    icon: UserPlus,
    titulo: 'Novo lead qualificado',
    detalhe: 'Google Ads · perfil ideal',
    tom: 'bg-primary-500 text-secondary',
  },
  {
    icon: CalendarCheck,
    titulo: 'Reunião agendada',
    detalhe: 'pelo agente de IA no WhatsApp',
    tom: 'bg-lilas-500 text-white',
  },
  {
    icon: Handshake,
    titulo: 'Venda fechada',
    detalhe: 'registrada no CRM',
    tom: 'bg-secondary text-primary-500',
  },
];

// Pequenos avisos que aparecem em sequência sobre a foto do hero, mostrando
// o caminho do lead até a venda.
const NotificacoesFunil = () => {
  const [ativa, setAtiva] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setAtiva((atual) => (atual + 1) % eventos.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute top-5 right-5 left-5 flex flex-col items-start gap-2.5 md:right-auto">
      {eventos.map((evento, index) => {
        const visivel = index <= ativa;
        const Icone = evento.icon;

        return (
          <div
            key={evento.titulo}
            className={cn(
              'shadow-3 flex w-[250px] items-center gap-3 rounded-2xl bg-white/95 p-3 backdrop-blur transition-all duration-500 ease-out',
              visivel ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-3 scale-95 opacity-0',
              index === ativa && 'ring-primary-500 ring-2'
            )}
          >
            <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-xl', evento.tom)}>
              <Icone className="size-4.5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="text-tagline-2 text-secondary block font-medium">{evento.titulo}</span>
              <span className="text-tagline-3 text-secondary/60 block truncate">{evento.detalhe}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NotificacoesFunil;
