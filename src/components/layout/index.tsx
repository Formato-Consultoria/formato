import Head from 'next/head';
import style from './layout.module.scss';

import { Blinker } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';

import Footer from '../footer';
import Navbar from '../navbar';

const blinker: NextFont = Blinker({
  weight: ['300', '400', '600', '700'],
});

export default function Layout({children}: any) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Formato Consultoria</title>
            </Head>
            
            <header className={`${style.header} ${blinker.className}`}>
                <Navbar />
            </header>

            <main className={style.main}>
                {children}
            </main>

            <Footer />
        </>
    )
}