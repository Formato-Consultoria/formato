import { Inter, Blinker } from 'next/font/google';

export const inter = Inter({
    weight: ['400', '500', '600', '700'],
    fallback: ['sans-serif'],
    subsets: ['latin'],
});

export const blinker = Blinker({
  weight: ['100', '200', '300', '400', '600', '700'],
  subsets: ['latin'],
});