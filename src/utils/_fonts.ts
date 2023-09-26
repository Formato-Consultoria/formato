import { Inter } from 'next/font/google';
import { Blinker } from 'next/font/google';

export const inter = Inter({
    fallback: ['sans-serif'],
    subsets: ['latin'],
});

export const blinker = Blinker({
  fallback: ['sans-serif'],
  weight: ['100', '200', '300', '400', '600', '700', '800'],
  subsets: ['latin'],
});