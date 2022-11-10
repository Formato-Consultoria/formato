import style from '../../styles/components/navbar.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { MagnifyingGlass } from 'phosphor-react';

export default function Navbar() {
    return(
        <nav>
            <div>
                <Image 
                    src="/images/Formato.png"
                    width="30" 
                    height="30" 
                    alt="Formato consultoria"
                />
            </div>
            <ul>
                <li>
                    <Link href="/">inicio</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/clients">Clientes</Link>
                </li>
                <li>
                    <Link href="/services">Serviços</Link>
                </li>
                <li>
                    <Link href="/about">Sobre Nós</Link>
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