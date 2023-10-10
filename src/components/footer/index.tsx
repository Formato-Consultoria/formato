'use client'
import style from './footer.module.scss';
import { inter } from '@/utils/_fonts';
import cx from 'clsx';

import Link from 'next/link';

import {
    InstagramLogo,
    LinkedinLogo,
    FacebookLogo,
    YoutubeLogo,
    TwitterLogo,
    GithubLogo
} from "@/components/images/phosphor";
import { LightLogotipo } from '../images';
import LogoFormato from '../logo';
import siteMetadata from '@/utils/siteMetadata';

export default function Footer() {
    const socialMedia = [
        { href: siteMetadata.instagram, icon: <InstagramLogo size={36} weight="fill" /> },
        { href: siteMetadata.facebook, icon: <FacebookLogo size={36} weight="fill" /> },
        { href: siteMetadata.linkedin, icon: <LinkedinLogo size={36} weight="fill" /> },
        { href: siteMetadata.youtube, icon: <YoutubeLogo size={36} weight="fill" /> },
        { href: siteMetadata.twitter, icon: <TwitterLogo size={36} weight="fill" /> },
        { href: siteMetadata.github, icon: <GithubLogo size={36} weight="fill" /> }
    ]

    return (
        <footer className={cx(style.footer, inter.className)}>
            <div className={style.navigation_container}>
                <LogoFormato
                    src={LightLogotipo.src}
                    style={{
                        height: 52,
                        width: 170,
                        marginLeft: 8,
                    }}
                />
            </div>

            <div className={style.network_and_copy}>
                <div>{socialMedia.filter(_ => _.href !== '').map((_, index) => (
                    <Link key={index} href={_.href} target="_blank">
                        {_.icon}
                    </Link>
                ))}</div>

                <p><span>Formato Consultoria</span> &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}