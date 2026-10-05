import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

export const texto = Inter({
  variable: '--font-texto-src',
  subsets: ['latin'],
});

export const titulo = Plus_Jakarta_Sans({
  variable: '--font-titulo-src',
  subsets: ['latin'],
});

// Rótulos técnicos, como o contador de seção.
export const mono = JetBrains_Mono({
  variable: '--font-mono-src',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const fontVariables = `${texto.variable} ${titulo.variable} ${mono.variable}`;
