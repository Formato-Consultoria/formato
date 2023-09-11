import style from '../all-box-post/post-box.module.scss';
import cx from 'clsx';

import Link from 'next/link';
import Image from 'next/image';

import { PropsArticle } from '@/@types/article';
import { blinker, inter } from '@/utils/_fonts';

import { Time } from '../time';
import { Hearts } from '../hearts';

import { User } from '@/components/images/phosphor';

export function BoxPost({ article }: { article: PropsArticle }) {
    const { slug, title, description, updatedAt, cover, category, author } = article;

    return (
        <div className={cx("h-auto w-full rounded-md bg-[var(--white-mediumn)]", inter.className)}>
            <div className={"relative w-full h-40 rounded-t-md bg-violet-500"}>
                {cover && <Image
                    className={"object-cover rounded"}
                    src={cover.url}
                    fill
                    alt={cover.alternativeText}
                />}
            </div>

            <Time time={new Date(updatedAt)} />
            <h3 className={cx("group px-2", blinker.className)}>
                <Link className={"text-[var(--primary-color)] group-hover:text-[var(--link-color)] delay-100 ease-in-out no-underline"} href={`/artigos/${slug}`}>{title}</Link>
            </h3>

            <p className={cx("text-base text-[var(--black-dark-50)] px-2 mb-2 line-clamp-4 overflow-hidden whitespace-nowrap overflow-ellipsis", blinker.className)}>{description}</p>

            <div className={cx("text-xs font-semibold w-max mx-2 px-2 mb-1 rounded-full uppercase text-[var(--link-color)] bg-[var(--link-color-60)] ring-1 ring-[var(--link-color)]", blinker.className)}>{category?.name}</div>

            <div className={"h-11 w-full pl-2 pr-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-1"}>
                    <Link
                        className={cx("relative w-6 h-6 rounded-full flex items-center justify-center ring-1 ring-[var(--link-color-60)]")}
                        href={`mailto:${author?.email}` ?? ""}
                        target={"_blank"}
                    >
                        {author?.avatar ? <Image
                            className={"object-cover rounded-full"}
                            src={author.avatar}
                            fill
                            alt={author.name}
                        /> : <User className={"object-cover"} size={21} color="var(--link-color-60)" weight="fill" />}
                    </Link>

                    <p className={"text-sm font-medium text-[var(--black-dark-80)]"}>{author.name}</p>
                </div>

                <Hearts />
            </div>
        </div>
    )
}