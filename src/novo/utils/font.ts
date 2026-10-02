import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

export const texto = Inter({
  variable: '--font-texto-src',
  subsets: ['latin'],
});

export const titulo = Plus_Jakarta_Sans({
  variable: '--font-titulo-src',
  subsets: ['latin'],
});

export const fontVariables = `${texto.variable} ${titulo.variable}`;
