import { blinker, inter } from "@/utils/_fonts";

import cx from "clsx";
import style from "./last-article.module.scss";
import Image from "next/image";

import { ArrowDown } from "phosphor-react";
import ButttonGlobal from "@/components/button";
import Link from "next/link";

interface PropsLastArticle {
    id: number,
    bannerImgPath: string,
    title: string,
    href: string,
    description: string
}

export default function LastArticle({
    bannerImgPath,
    href,
    title,
    description
}: PropsLastArticle) {
    return(
        <div className={cx(style.last_post_article, inter.className)}>
            <div className={style.image}>
                <Image
                    src={bannerImgPath}
                    fill
                    alt={title}
                />
            </div>

            <h2
                className={style.tex_title}
            >
                <Link href={href}>{title}</Link>
            </h2>

            <p className={cx(style.tex_description, blinker.className)}>{description}</p>

            <div className={style.interaction}>
                {/* Aqui vira um componente com a data e hora da postagem e a quantidade de curtida, identificada pelo id */}
            </div>
        </div>
    )
}