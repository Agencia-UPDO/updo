import { Inter_Tight } from 'next/font/google';

export const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
});

export const fontVariables = interTight.variable;
