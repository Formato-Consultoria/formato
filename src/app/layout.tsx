import "./global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Toaster } from "react-hot-toast";
import { inter } from "@/utils/_fonts";

import { Main } from "@/components/main";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ComVLibras } from "@/components/v-libras";

import { Metadata } from "next";
import siteMetadata from "@/utils/siteMetadata";

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        template: `%s | ${siteMetadata.title}`,
        default: siteMetadata.title
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: new URL(siteMetadata.siteUrl),
        siteName: siteMetadata.title,
        images: [
            siteMetadata.socialBanner
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        description: siteMetadata.description,
        images: [siteMetadata.socialBanner],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body>
                <div className={inter.className}>
                    <Navbar />

                    <Main>
                        {children}

                        <Toaster
                            position="bottom-left"
                            reverseOrder={true}
                        />
                    </Main>
                    <Footer />
                </div>

                <ComVLibras />
            </body>
        </html>
    )
}