import '../../styles/global.scss';

import type { AppProps } from 'next/app';

import Layout from '../ui/layout';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster
        position="bottom-left"
        reverseOrder={true}
      />
    </Layout>
  )
}