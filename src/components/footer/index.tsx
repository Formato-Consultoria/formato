'use client'
import style from './footer.module.scss';
import { inter } from '@/utils/_fonts';
import cx from 'clsx';

import Link from 'next/link';

import { InstagramLogo, LinkedinLogo } from "@/components/images/phosphor";
import { LightLogotipo } from '../images';

export default function Footer() {
    return (
        <footer className={cx(style.footer, inter.className)}>
            <div className={style.navigation_container}>
                <div className={style.logotipo_img}>
                    <img src={LightLogotipo.src} alt="Formato consultoria"/>
                </div>
            </div>

            <div className={style.network_and_copy}>
                <div>
                    <Link href="https://www.instagram.com/consultoria.formato" target="_blank">
                        <InstagramLogo size={36} weight="fill" />
                    </Link>

                    <Link href="https://www.linkedin.com/company/formato-consultoria" target="_blank">
                        <LinkedinLogo size={36} weight="fill" />
                    </Link>
                </div>
                <p><span>Formato Consultoria</span> &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}