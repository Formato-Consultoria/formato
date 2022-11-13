import style from './navbar.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { MagnifyingGlass } from 'phosphor-react';
import PrimaryButton from '../primary_btn';

export default function Navbar() {
    return(
        <nav className={style.nav_bar}>
            <div className={style.logotipo_img}>
                <Image 
                    src="/images/Formato_black.svg"
                    width="30" 
                    height="30" 
                    alt="Formato consultoria"
                />
            </div>
            <div className={style.navigation}>
                <ul className={style.navigation_options}>
                    <li>
                        <Link href="/">inicio</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
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

                <PrimaryButton text="Contratar"/>

                <button className={style.search_btn}>
                    <MagnifyingGlass size={36} />
                </button>
            </div>
        </nav>
    )
}