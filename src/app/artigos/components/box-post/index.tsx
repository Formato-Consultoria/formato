import cx from 'clsx';

import Link from 'next/link';
import Image from 'next/image';

import { PropsArticle } from '@/@types/article';
import { blinker, inter } from '@/utils/_fonts';

import { Time } from '../time';
import { Hearts } from '../hearts';

import {
    InstagramLogo,
    LinkedinLogo,
    LinkBreak,
    FacebookLogo,
    TwitterLogo,
    WhatsappLogo,
    MediumLogo,
    TiktokLogo,
    SnapchatLogo,
    PinterestLogo,
    YoutubeLogo,
    RedditLogo,
    WechatLogo,
    DiscordLogo,
    Vibrate
} from '@/components/images/phosphor';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function BoxPost({ article }: { article: PropsArticle }) {
    const { slug, title, description, updatedAt, cover, category, author } = article;

    const SocialMediaArray = Object.entries(SocialMedia);

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

            <div className={"h-11 w-full pl-2 pr-3 mt-auto flex items-center justify-between"}>
                <div className={"flex items-center gap-1"}>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Avatar className='w-6 h-6 ring-1 ring-[var(--link-color-60)] cursor-pointer'>
                                <AvatarImage src={author.avatar} alt={author.name} />
                                <AvatarFallback className='text-xs p-1 pb-0 font-semibold'>{acronymGenerator(author.name)}</AvatarFallback>
                            </Avatar>
                        </HoverCardTrigger>
                        <HoverCardContent className="h-auto w-80 p-0 rounded border border-gray-300 bg-white/80 backdrop-blur-sm">
                            <div className='relative w-full h-14 rounded-t'>
                                <Image
                                    className={'object-cover rounded-t'}
                                    src={author.avatar ?? "/images/alternative-banner-user-popover.png"}
                                    fill
                                    alt={`Banner ${author.name}`}
                                />
                            </div>

                            <div className='flex items-center justify-center flex-wrap gap-2 w-full px-2 py-5'>
                                {SocialMediaArray.map(([key, MediaElement]) => (
                                    <Link key={key} href={"#"}>
                                        {MediaElement}
                                    </Link>
                                ))}
                            </div>
                        </HoverCardContent>
                    </HoverCard>

                    <p className={"text-sm font-medium text-[var(--black-dark-80)]"}>{author.name}</p>
                </div>

                <Hearts />
            </div>
        </div>
    )
}

const SocialMedia = {
    InstagramLogo: <InstagramLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    LinkedinLogo: <LinkedinLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    LinkBreak: <LinkBreak size={22} color={"var(--blue-dark-50)"} weight="bold" />,
    FacebookLogo: <FacebookLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    TwitterLogo: <TwitterLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    WhatsappLogo: <WhatsappLogo size={22} color={"var(--blue-dark-50)"} />,
    MediumLogo: <MediumLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    TiktokLogo: <TiktokLogo size={22} color={"var(--blue-dark-50)"} />,
    SnapchatLogo: <SnapchatLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    PinterestLogo: <PinterestLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    YoutubeLogo: <YoutubeLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    RedditLogo: <RedditLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    WechatLogo: <WechatLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    DiscordLogo: <DiscordLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
    Vibrate: <Vibrate size={22} color={"var(--blue-dark-50)"} weight="fill" />,
}

const acronymGenerator = (name: string) => {
    const matches = name.match(/\S+/g);

    if(matches && matches.length === 1)
        return name[0];
    else if (matches) {
        return name[0].toUpperCase() + matches.pop()![0].toUpperCase();
    }

    return ""
}
