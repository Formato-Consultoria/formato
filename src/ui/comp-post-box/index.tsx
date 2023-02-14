import { blinker, inter } from "@/utils/_fonts";

import cx from "clsx";
import style from "./post-box.module.scss";
import Image from "next/image";

import Link from "next/link";
import { PropsArticle } from "@/@types/article";
import { Heart } from "phosphor-react";
import formatDateTime from "@/utils/format-date-time";
import { useEffect, useState } from "react";
import { initStateArticle } from "@/utils/initial-state-post-box";

export default function PostBox({
    slug,
    title,
    description,
    updatedAt,
    cover,
    category,
    author,
    typeBox
}: PropsArticle) {
    const time = formatDateTime(new Date());
    const [updatedDateAt, setUpdatedDateAt] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            setUpdatedDateAt(formatDateTime(updatedAt));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className={cx(style.post, style[typeBox ?? ""], inter.className)}>
            <Link href={`/artigos/${slug ?? initStateArticle.slug}`} className={style.image}>
                <Image
                    src={cover.url ?? initStateArticle.cover.url}
                    fill
                    alt={cover.alternativeText ?? initStateArticle.cover.alternativeText}
                />
            </Link>

            <div className={style.date_and_category}>
                <p>{updatedDateAt ?? initStateArticle.updatedAt}</p>

                <div className={cx(style.category_box, blinker.className)}>{category.name ?? initStateArticle.category.name}</div>
            </div>

            <h3
                className={cx(style.tex_title, blinker.className)}
            >
                <Link href={`/artigos/${slug ?? initStateArticle.slug}`}>{title ?? initStateArticle.title}</Link>
            </h3>

            <p className={cx(style.tex_description, blinker.className)}>{description ?? initStateArticle.description}</p>

            <div className={style.interaction}>
                <div className={style.author_info}>
                    <Link
                        className={style.avatar ?? initStateArticle.author.avatar}
                        href={`mailto:${author.email ?? initStateArticle.author.email}`}
                        target={"_blank"}
                    >
                        <Image
                            src={cx(author.avatar ?? initStateArticle.author.avatar)}
                            fill
                            alt={author.name ?? initStateArticle.author.name}
                        />
                    </Link>

                    <p>{author.name ?? initStateArticle.author.name}</p>
                </div>

                <div className={style.likes}>
                    {/* <Heart
                        size={25}
                        color="rgb(118, 18, 134)"
                        weight="fill"
                    /> */}

                    <small>1259</small> {/* {likes} *proveniente de uma api diferente */}
                </div>
            </div>
        </div>
    )
}