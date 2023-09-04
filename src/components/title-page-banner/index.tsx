import style from "./banner-title-page.module.scss";

import cx from "clsx";
import { inter } from "@/utils/_fonts";
import { CSSProperties, ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "phosphor-react";

type PropsBnrTlt = {
    value?: string | ReactNode,
    src: string,
    height?: string,
    width?: string,
    isBannerArticle?: boolean,
    title?: string,
    styleBnr?: CSSProperties,
}

// TODO: Criar uam função para transoformar o titulo em formato slug

export default function BannerTitle({
    src,
    value = "",
    height = "300px",
    width = "100%",
    isBannerArticle = false,
    title = "",
    styleBnr
}: PropsBnrTlt) {

    return (
        <section
            className={cx(style.bannerTitle, isBannerArticle && style.bannerArticle, inter)}
            style={{...styleBnr, height: height}}
        >
            <figure
                className={style.image}
                style={{height: height, width: width}}
            >
                <Image
                    src={src}
                    fill
                    alt={`imagem banner de ${value}`}
                    priority
                />

                <figcaption style={{ display: title ? "flex" : "none", alignItems: 'center'  }}>
                    <Link href="/artigos">Artigos</Link>
                    <CaretRight size={13} color="rgba(8, 12, 16, .7)" weight="bold" />
                    <p style={{ cursor: 'pointer' }}>{title}</p>
                </figcaption>
            </figure>

            <div className={style.title}>{value}</div>
        </section>
    )
}