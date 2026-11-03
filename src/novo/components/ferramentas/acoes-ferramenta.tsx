'use client';

import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import { Download, Loader2 } from 'lucide-react';

// Botões do fim do resultado, iguais em todas as ferramentas: "Quero ajuda no meu marketing" e "Baixar PDF".
// Lado a lado, meio a meio e com a mesma fonte quando o card tem espaço (pela largura do card, não da tela); um embaixo do outro
// quando não tem. Em cards estreitos o texto do botão verde encurta para "Quero ajuda", em vez de diminuir a fonte.
export default function AcoesFerramenta({ onAjuda, onPdf, gerando }: { onAjuda: () => void; onPdf: () => void; gerando: boolean }) {
  return (
    <div className="@container rounded-3xl bg-white p-4 md:p-5">
      <div className="grid gap-3 @[40rem]:grid-cols-2">
        <ButtonPrimarySubmit type="button" onClick={onAjuda} text="Quero ajuda no meu marketing" className="h-14 w-full [&>span]:w-full @[40rem]:hidden @[46rem]:block" />
        <ButtonPrimarySubmit type="button" onClick={onAjuda} text="Quero ajuda" className="hidden h-14 w-full [&>span]:w-full @[40rem]:block @[46rem]:hidden" />
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
