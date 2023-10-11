'use client';
import Image from "next/image";
import cx from 'clsx';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
  Vibrate,
  EnvelopeSimple
} from '@/components/images/phosphor';
import { PropsAuthor } from "@/app/api/@types/article";
import Link from "next/link";
import { ReactNode, memo, useMemo } from "react";

export const UserAvatar = memo(({ author, className }: { author: PropsAuthor, className?: string }) => {
  const { authorData, SocialMedia, SocialMediaKeys } = useMemo(() => {
    const sMedia = author.socialMedia;
    const sMediaKeys = Object.keys(sMedia).filter((_) => {
      return (sMedia[_] !== null)
    })

    return { authorData: author,  SocialMedia: sMedia, SocialMediaKeys: sMediaKeys }
  }, [author])

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className={cx('w-6 h-6 ring-1 ring-[var(--link-color-60)] cursor-pointer', className)}>
          <AvatarImage src={authorData.avatar} alt={authorData.name} />
          <AvatarFallback className='text-xs p-1 pb-0 font-semibold'>{acronymGenerator(authorData.name ?? "teste")}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="h-auto w-80 p-0 rounded border border-gray-300 bg-white/80 backdrop-blur-sm">
        <div className='relative w-full h-14 rounded-t'>
          <Image
            className={'object-cover rounded-t'}
            src={authorData.avatar ?? "/images/alternative-banner-user-popover.png"}
            fill
            alt={`Banner ${authorData.name}`}
          />
        </div>

        <div className='flex items-center justify-center flex-wrap gap-2 w-full px-2 py-5'>
          {SocialMediaKeys.map((sm: any) => (
            <Link key={sm} href={SocialMedia[sm]} target='_blank'>
              {SocialMediaIcons[sm]}
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
})

const SocialMediaIcons: { [key: string]: ReactNode } = {
  'Email': <EnvelopeSimple size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Instagram': <InstagramLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Linkedin': <LinkedinLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'LinkBreak': <LinkBreak size={22} color={"var(--blue-dark-50)"} weight="bold" />,
  'Facebook': <FacebookLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Twitter': <TwitterLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Whatsapp': <WhatsappLogo size={22} color={"var(--blue-dark-50)"} />,
  'Medium': <MediumLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'TikTok': <TiktokLogo size={22} color={"var(--blue-dark-50)"} />,
  'Snapchat': <SnapchatLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Pinterest': <PinterestLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'YouTube': <YoutubeLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Reddit': <RedditLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Wechat': <WechatLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Discord': <DiscordLogo size={22} color={"var(--blue-dark-50)"} weight="fill" />,
  'Vibrate': <Vibrate size={22} color={"var(--blue-dark-50)"} weight="fill" />,
}

const acronymGenerator = (name: string) => {
  const matches = name.match(/\S+/g);

  if(matches && matches.length === 1)
      return name[0];
  else if (matches) {
      return name[0].toUpperCase() + matches.pop()![0].toUpperCase();
  } else return "";
}