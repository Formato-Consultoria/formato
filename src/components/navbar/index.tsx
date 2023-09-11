'use client'
import style from "./navbar.module.scss";

import Link from "next/link";

import { List, X } from "@/components/images/phosphor";

import ButttonGlobal from "@/components/button";
import { useCallback, useState, useEffect } from "react";
import { blinker } from "@/utils/_fonts";
import { DarkIcon, DarkLogotipo } from "@/components/images";

import cx from "clsx";
import Modal from "@/components/modal-section";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [didScroll, setDidiScroll] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const pathname = usePathname();

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

    const onClose = () => {
        setIsOpenModal(false);
    };

    const onOpen = () => {
        setIsOpenModal(true);
    };

    const onToggle = () => {
        setIsOpenModal(!isOpenModal);
    }

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
                            <Link style={{
                                color: pathname === "/sobre" ? "var(--link-color)" : "var(--black-dark)",
                            }} href="/sobre">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link href="/#contato">Contatos</Link>
                        </li>
                        <li>
                            <Link style={{
                                color: pathname === "/servicos" ? "var(--link-color)" : "var(--black-dark)",
                            }} href="/servicos">Serviços</Link>
                        </li >
                        <li>
                            <Link style={{
                                color: pathname === "/clientes" ? "var(--link-color)" : "var(--black-dark)",
                            }} href="/clientes">Clientes</Link>
                        </li>
                        <li>
                            <Link style={{
                                color: pathname === "/artigos" ? "var(--link-color)" : "var(--black-dark)",
                            }} href="/artigos">Artigos</Link>
                        </li>
                        <li >
                            <Link style={{
                                color: pathname === "/galeria" ? "var(--link-color)" : "var(--black-dark)",
                            }} href="/galeria">Galeria</Link>
                        </li>
                    </ul>
                    
                    <Link
                        href="https://wa.me/5538984064384"
                        className="button"
                        target={"_blank"}
                    >
                        <ButttonGlobal value="Contratar" className={style.contratar_btn} />
                    </Link>
                    
                    <button
                        onClick={onToggle}
                        className={style.hamburgerIcon}
                    >
                        {isOpenModal ?  <X size={26} /> : <List size={26} />}
                    </button>

                    {/* <button className={style.search_btn}>
                        <MagnifyingGlass size={36} />
                    </button> */}
                    
                    <Modal
                        onClose={onClose}
                        onOpen={onOpen}
                        isOpen={isOpenModal}
                    />
                </div>
            </nav>
        </header>
    )
}