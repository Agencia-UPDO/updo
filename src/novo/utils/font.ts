import { Funnel_Display, Inter } from 'next/font/google';

export const texto = Inter({
  variable: '--font-texto-src',
  subsets: ['latin'],
});

export const titulo = Funnel_Display({
  variable: '--font-titulo-src',
  subsets: ['latin'],
});

export const fontVariables = `${texto.variable} ${titulo.variable}`;
