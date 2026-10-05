'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Numera os títulos de seção da página atual ("[ 01 / 08 ]"):
 * escreve a posição de cada um e o total de seções.
 */
const ContadorSecoes = () => {
  const pathname = usePathname();

  useEffect(() => {
    const preencher = () => {
      const numeros = document.querySelectorAll<HTMLElement>('main [data-contador-n]');
      const totais = document.querySelectorAll<HTMLElement>('main [data-contador-total]');
      const doisDigitos = (n: number) => String(n).padStart(2, '0');
      const total = doisDigitos(numeros.length);
      numeros.forEach((el, index) => {
        const numero = doisDigitos(index + 1);
        if (el.textContent !== numero) el.textContent = numero;
      });
      totais.forEach((el) => {
        if (el.textContent !== total) el.textContent = total;
      });
      // Página com uma seção só: "[ 01 / 01 ]" não informa nada, então fica só o nome.
      document.querySelectorAll<HTMLElement>('main [data-contador-bloco]').forEach((el) => {
        el.style.display = numeros.length < 2 ? 'none' : '';
      });
    };

    preencher();
    // Seções que entram depois (ex.: carregamento tardio) também recebem o total.
    const observer = new MutationObserver(preencher);
    const main = document.querySelector('main');
    if (main) observer.observe(main, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ContadorSecoes;
