'use client'
import "./global.scss";
import styles from "./layout.module.scss";

import { usePathname } from "next/navigation";

import cx from "clsx";
import { Toaster } from "react-hot-toast";
import { inter } from "@/utils/_fonts";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import VLibras from "@djpfs/react-vlibras";

// export const metadata: Metadata = {
//     title: 'Formato Consultoria',
//     description: 'Ajudamos a conectar pessoas a seus negócios. Buscamos inovação e crescimento pessoal. Alinhamos objetivos, criamos conexão e colocamos ideias brilhantes em prática.',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const currentPathname = usePathname();
    // metadata.title = `${currentPathname != '/' ? "Formato - "+currentPathname?.slice(1) : "Formato Consultoria"}`;

    return (
        <html lang="pt-br">
            <body>
                <div className={inter.className}>                    
                    <Navbar />

                    <main className={cx(styles.main, currentPathname == "/" && styles.home_page)}>
                        {children}

                        <Toaster
                            position="bottom-left"
                            reverseOrder={true}
                        />
                    </main>
                    <Footer />
                </div>
                
                <VLibras forceOnload={true} />
            </body>
        </html>
    )
}