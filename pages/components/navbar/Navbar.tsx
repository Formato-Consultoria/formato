import style from './navbar.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { MagnifyingGlass } from 'phosphor-react';

export default function Navbar() {
    return(
        <nav className={style.nav_bar}>
            <div className={style.logotipo_img}>
                <Image 
                    src="/images/Formato.svg"
                    width="30" 
                    height="30" 
                    alt="Formato consultoria"
                />
            </div>
            <ul className={style.navigation_options}>
                <li>
                    <Link className={style.link} href="/">inicio</Link>
                </li>
                <li>
                    <Link className={style.link} href="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={style.link} href="/clients">Clientes</Link>
                </li>
                <li>
                    <Link className={style.link} href="/services">Serviços</Link>
                </li>
                <li>
                    <Link className={style.link} href="/about">Sobre Nós</Link>
                </li>
                <li className={style.primary_btn}>
                    <Link href="/subscribe">Contratar</Link>
                </li>
                <li>
                    <button>
                        <MagnifyingGlass size={36} />
                    </button>
                </li>
            </ul>
        </nav>
    )
}