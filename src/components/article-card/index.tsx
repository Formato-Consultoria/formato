import cx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

import { PropsArticle } from '@/app/api/@types/article';
import { blinker, inter } from '@/utils/_fonts';

import { Time } from '../time';
import { Hearts } from '../hearts';
import { UserAvatar } from '../avatar';

export function ArticleCard({ article, className }: { article: PropsArticle, className?: string }) {
    const { slug, title, description, updatedAt, cover, category, author } = article;

    return (
        <div
            className={cx("group h-auto w-full sm:w-72 rounded-md bg-[var(--white-mediumn)] ring-1 ring-[var(--black-10)] no-underline",
                className,
                inter.className
            )}
        >
            <Link href={`/artigos/${slug}`}>
                <div className={"relative w-full h-40 overflow-hidden rounded-t-md bg-violet-500"}>
                        {cover && <Image
                            className={"object-cover rounded transition-all duration-500 ease md:scale-125 md:blur-sm md:rotate-6 group-hover:blur-none group-hover:scale-100 group-hover:rotate-0"}
                            src={cover.url}
                            fill
                            alt={cover.alternativeText}
                        />}
                </div>
            </Link>

            <Time time={new Date(updatedAt)} />

            <h3 className={cx("px-2", blinker.className)}>
                <Link
                    className={"text-[var(--primary-color)] group-hover:text-[var(--link-color)] delay-100 ease-in-out no-underline"}
                    href={`/artigos/${slug}`}
                >{title}</Link>
            </h3>

            <p className={cx("text-base text-[var(--black-dark-50)] px-2 mb-2 line-clamp-2 leading-snug", blinker.className)}>{description}</p>

            <div className={cx("text-xs font-semibold w-max mx-2 px-2 mb-1 rounded-full uppercase text-[var(--link-color)] bg-[var(--link-color-60)] ring-1 ring-[var(--link-color)]", blinker.className)}>{category?.name}</div>

            <div className={"h-11 w-full pl-2 pr-3 mt-auto flex items-center justify-between"}>
                <div className={"flex items-center gap-1"}>
                    <UserAvatar author={author} className='h-5 w-5' />
                    <p className={"text-sm font-medium text-[var(--black-dark-80)]"}>{author.name}</p>
                </div>

                {/* <Hearts /> */}
            </div>
        </div>
    )
}
