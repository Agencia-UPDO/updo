import { cn } from '@/novo/utils/cn';
import type { ReactNode } from 'react';

/** Faixa verde atrás da palavra, igual ao H1 da home. */
export const realceClass =
  'box-decoration-clone bg-[linear-gradient(transparent_60%,var(--color-primary-500)_60%,var(--color-primary-500)_92%,transparent_92%)] px-1';

const realceEscuroClass =
  'box-decoration-clone bg-[linear-gradient(transparent_78%,var(--color-primary-500)_78%,var(--color-primary-500)_90%,transparent_90%)] px-1';

const Faixa = ({
  children,
  tone,
  className,
}: {
  children: ReactNode;
  tone: 'light' | 'dark';
  className?: string;
}) => (
  <span className={cn(tone === 'dark' ? realceEscuroClass : realceClass, className)}>{children}</span>
);

// A pontuação logo depois do destaque fica presa à última palavra,
// para a vírgula não cair sozinha na linha de baixo.
const Trecho = ({ texto, pontuacao, tone }: { texto: string; pontuacao: string; tone: 'light' | 'dark' }) => {
  if (!pontuacao) return <Faixa tone={tone}>{texto}</Faixa>;
  const corte = texto.lastIndexOf(' ');
  const inicio = texto.slice(0, corte + 1);
  const ultima = texto.slice(corte + 1);
  return (
    <>
      {inicio && (
        <Faixa tone={tone} className="pr-0">
          {inicio}
        </Faixa>
      )}
      <span className="whitespace-nowrap">
        <Faixa tone={tone} className={inicio ? 'pl-0' : undefined}>
          {ultima}
        </Faixa>
        {pontuacao}
      </span>
    </>
  );
};

/**
 * Destaca uma palavra do título com a faixa verde.
 * Use *palavra* no texto para escolher o trecho; sem marcação, destaca a última palavra.
 * Títulos que não são texto puro passam sem alteração.
 */
export const realce = (title: ReactNode, tone: 'light' | 'dark' = 'light'): ReactNode => {
  if (typeof title !== 'string') return title;

  const marcado = title.match(/^(.*?)\*(.+?)\*([.,!?:;]*)(.*)$/);
  if (marcado) {
    const [, antes, trecho, pontuacao, depois] = marcado;
    return (
      <>
        {antes}
        <Trecho texto={trecho} pontuacao={pontuacao} tone={tone} />
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
      <Trecho texto={palavra} pontuacao={pontuacao} tone={tone} />
    </>
  );
};
