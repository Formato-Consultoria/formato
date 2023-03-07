import style from "./banner-title-page.module.scss";

import cx from "clsx";
import { inter } from "@/utils/_fonts";
import { ReactNode, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "phosphor-react";

type PropsBnrTlt = {
    value?: string | ReactNode,
    src: string,
    breadcrumbsSlug?: string,
    height?: string,
    width?: string,
    isBannerArticle?: boolean
}

export default function BannerTitle({
    src,
    value = "",
    breadcrumbsSlug = "",
    height = "300px",
    width = "100%",
    isBannerArticle = false
}: PropsBnrTlt) {
    const slug = breadcrumbsSlug;

    return (
        <section
            className={cx(style.bannerTitle, isBannerArticle && style.bannerArticle, inter)}
            style={{height: height}}
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

                <figcaption style={{display: slug ? "flex" : "none"}}>
                    <Link href="/artigos">Artigos</Link>
                    <CaretRight size={13} color="#080c10" weight="bold" />
                    <Link href={`/artigos/${slug}`}>{slug}</Link>
                </figcaption>
            </figure>

            <div className={style.title}>{value}</div>
        </section>
    )
}