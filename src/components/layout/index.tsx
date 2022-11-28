import Head from 'next/head';
import styles from './layout.module.scss';

import Footer from '../footer';
import Navbar from '../navbar';

export default function Layout({children}: any) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Formato Consultoria</title>
            </Head>
            
            <Navbar />

            <main className={styles.main}>
                {children}
            </main>

            <Footer />
        </>
    )
}