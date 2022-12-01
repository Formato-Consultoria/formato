import style from './navbar.module.scss';
import { Blinker } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';
import localFont from '@next/font/local';

import Link from 'next/link';

import { MagnifyingGlass } from 'phosphor-react';
import ButttonGlobal from '../button';


const blinker: NextFont = Blinker({
    weight: ['300', '400', '600', '700'],
});

// const myFont = localFont({ src: 'fonts/*' });

export default function Navbar() {
    return(
        <header className={`${style.header} ${blinker.className}`}>
            <nav className={style.nav_bar}>
                <div className={style.logotipo_img}>
                    <img src="/icons/Logotipo_dark.png" alt="Formato consultoria" />
                </div>
                <div className={style.navigation}>
                    <ul className={style.navigation_options}>
                        <li>
                            <Link href="/">inicio</Link>
                        </li>
                        <li>
                            <Link href="/article">Artigos</Link>
                        </li>
                        <li>
                            <Link href="/clientes">Clientes</Link>
                        </li>
                        <li>
                            <Link href="/servicos">Serviços</Link>
                        </li>
                        <li>
                            <Link href="/sobre">Sobre Nós</Link>
                        </li>
                    </ul>

                    <ButttonGlobal text="Contratar"/>

                    <button className={style.search_btn}>
                        <MagnifyingGlass size={36} />
                    </button>
                </div>
            </nav>
        </header>
    )
}