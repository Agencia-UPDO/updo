'use client';

import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import type { Ajuda } from '@/novo/components/ferramentas/cadastro';
import { Download, Loader2 } from 'lucide-react';

// Botões do fim do resultado, iguais em todas as ferramentas: "Quero ajuda no meu marketing" e "Baixar PDF".
// Lado a lado, meio a meio e com a mesma fonte quando o card tem espaço (pela largura do card, não da tela); um embaixo do outro
// quando não tem. Em cards estreitos o texto do botão verde encurta para "Quero ajuda", em vez de diminuir a fonte.
export default function AcoesFerramenta({ ajuda, onPdf, gerando }: { ajuda: Ajuda; onPdf: () => void; gerando: boolean }) {
  return (
    <div className="@container rounded-3xl bg-white p-4 md:p-5">
      <div className="grid gap-3 @[40rem]:grid-cols-2">
        <a href={ajuda.href} target="_blank" rel="noopener noreferrer" onClick={ajuda.aoClicar} className="flex @[40rem]:hidden @[46rem]:flex">
          <ButtonPrimary text="Quero ajuda no meu marketing" className="h-14 w-full max-md:h-14 max-md:min-h-0 max-md:text-tagline-1 [&>span]:max-md:min-h-0" />
        </a>
        <a href={ajuda.href} target="_blank" rel="noopener noreferrer" onClick={ajuda.aoClicar} className="hidden @[40rem]:flex @[46rem]:hidden">
          <ButtonPrimary text="Quero ajuda" className="h-14 w-full" />
        </a>
        <button
          type="button"
          onClick={onPdf}
          disabled={gerando}
          className="text-tagline-1 border-stroke-3 text-secondary hover:border-secondary hover:bg-background-2 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border px-6 font-medium whitespace-nowrap transition-all duration-300 active:scale-[0.98] disabled:opacity-60"
        >
          {gerando ? <Loader2 className="size-5 animate-spin" /> : <Download className="size-5" />}
          {gerando ? 'Gerando PDF…' : 'Baixar PDF'}
        </button>
      </div>
    </div>
  );
}
