'use client'
import "./global.scss";
import styles from "./layout.module.scss";

import cx from "clsx";
import { Toaster } from "react-hot-toast";
import { inter } from "@/utils/_fonts";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import VLibras from "@djpfs/react-vlibras";

import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const currentPathname = usePathname();

    return (
        <html lang="pt-br">
            <body>
                <div className={inter.className}>                    
                    <Navbar />

                    <main className={cx(styles.main, currentPathname === "/" && styles.home_page)}>
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