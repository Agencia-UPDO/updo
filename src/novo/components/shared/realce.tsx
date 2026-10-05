import { cn } from '@/novo/utils/cn';
import type { ReactNode } from 'react';

/** Faixa verde atrás da palavra, igual ao H1 da home. */
export const realceClass =
  'box-decoration-clone bg-[linear-gradient(transparent_60%,var(--color-primary-500)_60%,var(--color-primary-500)_92%,transparent_92%)] px-1';

const realceEscuroClass =
  'box-decoration-clone bg-[linear-gradient(transparent_78%,var(--color-primary-500)_78%,var(--color-primary-500)_90%,transparent_90%)] px-1';

const Faixa = ({ children, tone }: { children: ReactNode; tone: 'light' | 'dark' }) => (
  <span className={cn(tone === 'dark' ? realceEscuroClass : realceClass)}>{children}</span>
);

/**
 * Destaca uma palavra do título com a faixa verde.
 * Use *palavra* no texto para escolher o trecho; sem marcação, destaca a última palavra.
 * Títulos que não são texto puro passam sem alteração.
 */
export const realce = (title: ReactNode, tone: 'light' | 'dark' = 'light'): ReactNode => {
  if (typeof title !== 'string') return title;

  const marcado = title.match(/^(.*?)\*(.+?)\*(.*)$/);
  if (marcado) {
    const [, antes, trecho, depois] = marcado;
    return (
      <>
        {antes}
        <Faixa tone={tone}>{trecho}</Faixa>
        {depois}
      </>
    );
  }

  const fim = title.match(/^(.*?)(\s*)([^\s]+?)([.,!?:;]*)$/);
  if (!fim) return title;
  let [, antes, espaco, palavra] = fim;
  const pontuacao = fim[4];

  // Palavra curta em minúscula (de, da, já) puxa a anterior junto.
  if (palavra.length <= 3 && palavra === palavra.toLowerCase()) {
    const anterior = antes.match(/^(.*?)(\s*)([^\s]+)$/);
    if (anterior) {
      palavra = `${anterior[3]}${espaco}${palavra}`;
      espaco = anterior[2];
      antes = anterior[1];
    }
  }

  return (
    <>
      {antes}
      {espaco}
      <Faixa tone={tone}>{palavra}</Faixa>
      {pontuacao}
    </>
  );
};
