import style from "./navbar.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import { List, X } from "phosphor-react";

import ButttonGlobal from "../button";
import { useCallback, useState, useEffect } from "react";
import { blinker } from "../../utils/_fonts";
import { DarkIcon, DarkLogotipo } from "../images";

import cx from "clsx";

export default function Navbar() {
    const [didScroll, setDidiScroll] = useState(false);
    // const [isMobileResponsiveness, setIsMobileResponsiveness] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const router = useRouter();

    const onScroll = useCallback(() => {
        const { scrollY } = window;
        
        if (scrollY > 25) {
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

    // function changeStateModal() {
    //     setIsOpenModal(!isOpenModal);
    // }

    return(
        <header className={cx(style.header, (didScroll && style.onScroll), blinker.className)}>
            <nav className={style.nav_bar}>
                <div className={style.logotipo_img}>
                    <Link href="/">
                        <img
                            src={cx(didScroll ? DarkIcon.src : DarkLogotipo.src)}
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
                            <Link href="/galeria">Galeria</Link>
                        </li>
                        <li>
                            <Link href="/#contato">Contatos</Link>
                        </li>
                    </ul>

                    <ButttonGlobal value="Contratar" className={style.contratar_btn} />
                    
                    <button
                        onClick={() => setIsOpenModal(!isOpenModal)}
                        className={style.hamburgerIcon}
                    >
                        {isOpenModal ?  <X size={26} /> : <List size={26} />}
                    </button>

                    {/* <button className={style.search_btn}>
                        <MagnifyingGlass size={36} />
                    </button> */}
                </div>
            </nav>
        </header>
    )
}