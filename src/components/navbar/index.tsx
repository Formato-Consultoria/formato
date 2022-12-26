import style from './navbar.module.scss';
import cx from 'clsx';
import { blinker } from '../../utils/_fonts';

import Link from 'next/link';

import { MagnifyingGlass } from 'phosphor-react';

import ButttonGlobal from '../button';
import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Navbar() {
    const [didScroll, setDidiScroll] = useState(false);
    const router = useRouter();

    const onScroll = useCallback(() => {
        const { scrollY } = window;
        
        if (scrollY > 85) {
            setDidiScroll(true);
        } else {
            setDidiScroll(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return(
        <header className={cx(
            style.header,
            (didScroll && router.pathname == "/" && style.onScroll) ?? style.absolutePosition, blinker.className
        )}>
            <nav className={style.nav_bar}>
                <div className={style.logotipo_img}>
                    <Link href="/">
                        <img
                            src={cx(didScroll ? "/icons/icone_dark.png" : "/icons/Logotipo_dark.png")}
                            alt="Formato consultoria"
                        />
                    </Link>
                </div>
                <div className={style.navigation}>
                    <ul className={style.navigation_options}>
                        <li>
                            <Link href="/">inicio</Link>
                        </li>
                        {/* <li>
                            <Link href="/artigos">Artigos</Link>
                        </li> */}
                        <li>
                            <Link href="/clientes">Clientes</Link>
                        </li>
                        <li>
                            <Link href="/servicos">Serviços</Link>
                        </li>
                        <li>
                            <Link href="/sobre">Sobre Nós</Link>
                        </li>

                        <li>
                            <Link href="/#contato">Contatos</Link>
                        </li>
                    </ul>

                    <ButttonGlobal text="Contratar" />

                    {/* <button className={style.search_btn}>
                        <MagnifyingGlass size={36} />
                    </button> */}
                </div>
            </nav>
        </header>
    )
}