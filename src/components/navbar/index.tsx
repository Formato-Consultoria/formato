import style from './navbar.module.scss';
import cx from 'clsx';
import { blinker } from '../../utils/_fonts';

import Link from 'next/link';

import { MagnifyingGlass } from 'phosphor-react';
import ButttonGlobal from '../button';


export default function Navbar() {
    return(
        <header className={cx(style.header, blinker.className)}>
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