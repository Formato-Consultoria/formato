'use client'
import style from "./banner-title-page.module.scss";

import cx from "clsx";
import { inter } from "@/utils/_fonts";
import { CSSProperties, ReactNode } from "react";

import Image from "next/image";

type PropsBnrTlt = {
    children?: ReactNode
    src: string
    height?: string
    width?: string
    styles?: {
        containner?: CSSProperties
        content?: string
        imageContain?: CSSProperties
        image?: CSSProperties
    }
}

export default function BannerTitle({
    src,
    children,
    height = "300px",
    width = "100%",
    styles,
}: PropsBnrTlt) {
    return (
        <section
            className={cx(style.bannerTitle, inter.className)}
            style={{...styles?.containner, height: height}}
        >
            <div
                className={cx(style.image, styles?.imageContain)}
                style={{ height: height, width: width }}
            >
                <Image
                    style={styles?.image}
                    src={src}
                    alt={`imagem banner`}
                    priority
                    fill
                />
            </div>

            <div className={styles?.content as string}>{children}</div>
        </section>
    )
}