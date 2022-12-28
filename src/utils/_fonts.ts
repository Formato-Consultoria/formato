import { Inter, Blinker } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';

export const inter: NextFont = Inter({
    weight: ['400', '500', '600', '700'],
    fallback: ['sans-serif']
});

export const blinker: NextFont = Blinker({
  weight: ['100', '200', '300', '400', '600', '700'],
});