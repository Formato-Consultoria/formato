import { blinker, inter } from "@/utils/_fonts";

import cx from "clsx";
import style from "./post-box.module.scss";
import Image from "next/image";

import Link from "next/link";
import { PropsArticle } from "@/@types/article";

export default function PostBox({
    bannerImgPath,
    href,
    title,
    description,
    typeBox
}: PropsArticle) {
    return(
        <div className={cx(style[typeBox], inter.className)}>
            <Link href={href} className={style.image}>
                <Image
                    src={bannerImgPath}
                    fill
                    alt={title}
                />
            </Link>

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