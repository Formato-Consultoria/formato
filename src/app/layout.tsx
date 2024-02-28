import "./global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Metadata } from "next"; 
import siteMetadata from "@/utils/siteMetadata";
import { CustomRootLayout } from "@/components/root-layout";

// import { ComVLibras } from "@/components/v-libras";

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
                <CustomRootLayout>
                    {children}
                </CustomRootLayout>

                {/* <ComVLibras /> */}
            </body>
        </html>
    )
}