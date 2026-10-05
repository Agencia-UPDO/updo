import ClientesMarquee from '@/novo/components/home/clientes-marquee';
import { selosParceiros } from '@/novo/data/home';
import { cn } from '@/novo/utils/cn';
import Image from 'next/image';

// Faixa de logos de clientes e selos de parceiros, usada na home e nas páginas internas.
const ProvaSocial = ({ className }: { className?: string }) => (
  <div className={className}>
    <p className="text-tagline-2 mb-6 text-center">
      Empresas que já estruturaram o crescimento com a UPDO
    </p>
    <ClientesMarquee />

    <div className="mt-10 flex flex-col items-center gap-5 md:mt-12">
      <p className="text-tagline-2 text-center">Parceiros certificados</p>
      <ul className="flex flex-wrap justify-center gap-3">
        {selosParceiros.map((selo) => (
          <li
            key={selo.src}
            className="border-stroke-3 flex h-18 w-40 items-center justify-center rounded-2xl border bg-white px-4 shadow-sm"
          >
            <Image
              src={selo.src}
              alt={selo.alt}
              width={140}
              height={56}
              className={cn(
                'max-h-11 w-auto max-w-[128px] object-contain',
                selo.alt === 'Google Ads Search Certified' && 'max-h-14'
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProvaSocial;
