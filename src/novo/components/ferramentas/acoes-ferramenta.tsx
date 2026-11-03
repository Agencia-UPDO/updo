'use client';

import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import { Download, Loader2 } from 'lucide-react';

// Botões do fim do resultado, iguais em todas as ferramentas: "Quero ajuda no meu marketing" e "Baixar PDF".
// Lado a lado quando o card tem espaço (o PDF no tamanho do texto, o "Quero ajuda" com o resto) (pela largura do card, não da tela); um embaixo do outro quando não tem.
export default function AcoesFerramenta({ onAjuda, onPdf, gerando }: { onAjuda: () => void; onPdf: () => void; gerando: boolean }) {
  return (
    <div className="@container rounded-3xl bg-white p-4 md:p-5">
      <div className="grid gap-3 @[29rem]:grid-cols-[1fr_auto]">
        <ButtonPrimarySubmit type="button" onClick={onAjuda} text="Quero ajuda no meu marketing" className="h-14 w-full text-[0.9375rem] [&>span]:w-full [&>span]:gap-x-2 [&>span]:pl-5" />
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
