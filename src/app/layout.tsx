'use client'
import styles from "./layout.module.scss";

import { Metadata } from "next";
import { usePathname } from "next/navigation";

import cx from "clsx";
import { Toaster } from "react-hot-toast";
import { inter } from "@/utils/_fonts";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// export const metadata: Metadata = {
//     title: 'Formato Consultoria',
//     description: 'Ajudamos a conectar pessoas a seus negócios. Buscamos inovação e crescimento pessoal. Alinhamos objetivos, criamos conexão e colocamos ideias brilhantes em prática.',
// }

export function RootLayout({ children }: { children: React.ReactNode }) {
    const currentPathname = usePathname();
    // metadata.title = `${currentPathname != '/' ? "Formato - "+currentPathname?.slice(1) : "Formato Consultoria"}`;

    return (
        <html lang="pt-br">
            <body>
                <div className={inter.className}>                    
                    <Navbar />

                    <main className={cx(styles.main, currentPathname == "/" && styles.home_page)}>
                        {children}
                    </main>

                    <Footer />

                    <Toaster
                        position="bottom-left"
                        reverseOrder={true}
                    />
                </div>

                <div className="enabled">
                    <div vw-access-button className="active"></div>


                    <div vw-plugin-wrapper>
                        <div className="vw-plugin-top-wrapper"></div>
                    </div>
                </div>

                <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
                
                <script>
                    new window.VLibras.Widget('https://vlibras.gov.br/app');
                </script>
            </body>
        </html>
    )
}