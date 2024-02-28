import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

import { PropsArticle } from '@/@types/article';
import { blinker, inter } from '@/utils/_fonts';

import { Time } from '../time';
import { UserAvatar } from '../avatar';

export function ArticleCard({ article, className }: { article: PropsArticle, className?: string }) {
    const { slug, title, description, updatedAt, cover, category, author } = article;

    return (
        <div
            className={cn("group h-auto w-full rounded-lg no-underline space-y-1.5", //bg-[var(--white-mediumn)] ring-1 ring-[var(--black-10)] sm:w-72 rounded-md
                className,
                inter.className
            )}
        >
            <Link href={`/artigos/${slug}`}>
                <div className={"relative w-full h-52 overflow-hidden rounded-xl bg-violet-500"}> 
                    {cover && <Image
                        className={"object-cover rounded-xl transition-all duration-500 ease md:scale-125 lg:blur-sm md:rotate-6 group-hover:blur-none group-hover:scale-100 group-hover:rotate-0"}
                        src={cover.url}
                        fill
                        alt={cover.alternativeText}
                    />}
                </div>
            </Link>

            <Time time={new Date(updatedAt)}  />

            <h3 className={cn("px-2", blinker.className)}>
                <Link
                    className={"text-[var(--primary-color)] group-hover:text-[var(--link-color)] delay-100 ease-in-out no-underline"}
                    href={`/artigos/${slug}`}
                >{title}</Link>
            </h3>

            <p className={cn("text-base text-[var(--black-dark-50)] px-2 mb-2 line-clamp-2 leading-snug", blinker.className)}>{description}</p>

            <div className={cn("text-xs font-semibold w-max mx-2 px-2 mb-1 rounded-full uppercase text-white/90 bg-[var(--link-color-60)] ring-1 ring-[var(--link-color)]", blinker.className)}>{category?.name}</div>

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
