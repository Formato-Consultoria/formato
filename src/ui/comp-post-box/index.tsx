import { blinker, inter } from "@/utils/_fonts";

import cx from "clsx";
import style from "./post-box.module.scss";
import Image from "next/image";

import Link from "next/link";
import { PropsArticle } from "@/@types/article";

export default function PostBox({
    cover,
    slug,
    title,
    description,
    typeBox
}: PropsArticle) {
    return(
        <div className={cx(style[typeBox], inter.className)}>
            <Link href={slug} className={style.image}>
                <Image
                    src={cover}
                    fill
                    alt={title}
                />
            </Link>

            <h3
                className={style.tex_title}
            >
                <Link href={slug}>{title}</Link>
            </h3>

            <p className={cx(style.tex_description, blinker.className)}>{description}</p>

            <div className={style.interaction}>
                {/* Aqui vira um componente com a data e hora da postagem e a quantidade de curtida, identificada pelo id */}
            </div>
        </div>
    )
}