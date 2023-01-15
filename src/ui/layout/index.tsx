import Head from "next/head";
import styles from "./layout.module.scss";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

import cx from "clsx";
import { useRouter } from "next/router"
import { ReactNode } from "react";
import { inter } from "../../utils/_fonts";

type PropsChildren = {
    children: ReactNode
}

export default function Layout({ children }: PropsChildren) {
    const router = useRouter();

    return (
        <div className={inter.className}>
            <Head>
                <title>Formato Consultoria</title>
            </Head>
            
            <Navbar />

            <main className={cx(styles.main, router.pathname == "/" && styles.home_page)}>
                {children}
            </main>

            <Footer />
        </div>
    )
}