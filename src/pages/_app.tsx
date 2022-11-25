import '../../styles/global.scss';
import type { AppProps } from 'next/app';

import { Inter } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';

import Layout from '../parts/layout';

const inter: NextFont = Inter({
  weight: ['400', '500', '600', '700'],
  fallback: ['sans-serif']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  )
}