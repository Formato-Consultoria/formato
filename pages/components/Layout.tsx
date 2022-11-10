import Head from 'next/head'

import Footer from './footer'
import Navbar from './Navbar'

export default function Layout({children}: any) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Formato Consultoria</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}