import style from '../all-box-post/post-box.module.scss';
import cx from 'clsx';

import Link from 'next/link';
import Image from 'next/image';

import { PropsArticle } from '@/@types/article';
import { blinker, inter } from '@/utils/_fonts';

import { Time } from '../time';
import { Hearts } from '../hearts';

export function BoxPost({ article }: { article: PropsArticle }) {
    const { slug, title, description, updatedAt, cover, category, author } = article;

    return (
        <div className={cx(style.post, inter.className)}>
            <Link href={`/artigos/${slug}`} className={style.image}>
                <Image
                    src={cover?.url ?? ""}
                    fill
                    alt={cover?.alternativeText ?? ""}
                />
            </Link>

            <div className={style.date_and_category}>
                <Time time={updatedAt} />

                <div className={cx(style.category_box, blinker.className)}>{category?.name}</div>
            </div>

            <h3
                className={cx(style.tex_title, blinker.className)}
            >
                <Link href={`/artigos/${slug}`}>{title}</Link>
            </h3>

            <p className={cx(style.tex_description, blinker.className)}>{description}</p>

            <div className={style.interaction}>
                <div className={style.author_info}>
                    <Link
                        className={style.avatar}
                        href={`mailto:${author?.email}` ?? ""}
                        target={"_blank"}
                    >
                        <Image
                            src={author?.avatar ?? ""}
                            fill
                            alt={author.name}
                        />
                    </Link>

                    <p>{author.name}</p>
                </div>

                <Hearts />
            </div>
        </div>
    )
}