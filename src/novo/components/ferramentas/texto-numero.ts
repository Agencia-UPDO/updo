'use client';

import { type ChangeEvent, useState } from 'react';

// Campo de número que aceita o zero digitado: guarda o que a pessoa escreveu ("0", "1,5", vazio) e repassa o número.
// Antes, o 0 virava campo vazio e parecia que não dava para informar zero.
export function useTextoNumero(valor: number, onChange: (v: number) => void) {
  const [texto, setTexto] = useState(valor ? String(valor) : '');
  const [anterior, setAnterior] = useState(valor);
  // O valor mudou por fora (exemplo, limpar, outro produto): o campo acompanha
  if (valor !== anterior) {
    setAnterior(valor);
    if ((texto === '' ? 0 : Number(texto)) !== valor) setTexto(valor ? String(valor) : '');
  }
  return {
    value: texto,
    onChange: (ev: ChangeEvent<HTMLInputElement>) => {
      // "0150" vira "150" (o zero da frente some), mas o "0" sozinho e o "0,5" ficam
      const t = ev.target.value.replace(/^0+(?=\d)/, '');
      setTexto(t);
      onChange(t === '' ? 0 : Number(t));
    },
  };
}
