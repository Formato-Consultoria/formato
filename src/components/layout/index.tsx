import Head from 'next/head';
import styles from './layout.module.scss';

import Footer from '../footer';
import Navbar from '../navbar';

import cx from 'clsx';
import { useRouter } from 'next/router'
import { ReactNode } from 'react';

interface PropsChildren {
    children: ReactNode
}

export default function Layout({children}: PropsChildren) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Formato Consultoria</title>
            </Head>
            
            <Navbar />

            <main className={cx(styles.main, router.pathname == "/" && styles.home_page)}>
                {children}
            </main>

            <Footer />
        </>
    )
}