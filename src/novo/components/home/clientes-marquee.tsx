'use client';

import { clientes } from '@/novo/data/home';
import Image from 'next/image';
import FastMarquee from 'react-fast-marquee';

const ClientesMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="from-background-13 pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-linear-to-r to-transparent" />
      <div className="from-background-13 pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-linear-to-l to-transparent" />

      <FastMarquee autoFill speed={35} gradient={false} pauseOnHover>
        <div className="flex w-max items-center gap-x-12 pl-12">
          {clientes.map((cliente) => (
            <figure key={cliente.name} className="relative h-16 w-36 shrink-0 md:h-20 md:w-44">
              <Image
                src={cliente.src}
                alt={cliente.name}
                fill
                sizes="176px"
                className="object-contain"
              />
            </figure>
          ))}
        </div>
      </FastMarquee>
    </div>
  );
};

export default ClientesMarquee;
