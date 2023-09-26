'use client'
import style from "./navbar.module.scss";

import Link from "next/link";
import Image from "next/image";

import { List, X } from "@/components/images/phosphor";

import ButttonGlobal from "@/components/button";
import React, { useCallback, useState, useEffect } from "react";
import { blinker } from "@/utils/_fonts";
import { DarkIcon, DarkLogotipo } from "@/components/images";

import cx from "clsx";
import Modal from "@/components/modal-section";
import { usePathname } from "next/navigation";

import { MagnifyingGlass } from "@/components/images/phosphor";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { services } from "@/content/all-services";


export default function Navbar() {
    const [didScroll, setDidiScroll] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const pathname = usePathname();

    const compServices = Object.values(services);

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

    return (
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
                
                <NavigationMenu className={style.navigation}>
                    <NavigationMenuList className={"hidden sm:flex sm:gap-4 md:gap-5"}>
                        <NavigationMenuItem>
                            <Link
                                className={cx(`h-full text-lg ${pathname === "/sobre" ? 'text-[var(--link-color)]' : 'text-[var(--black-dark)]'} duration-500 font-medium no-underline hover:underline hover:text-[var(--link-color)] hover:duration-500`, blinker.className)}
                                href="/sobre"
                            >Sobre Nós</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link
                                className={cx(`h-full text-lg duration-500 text-[var(--black-dark)] font-medium no-underline hover:underline hover:text-[var(--link-color)] hover:duration-500`, blinker.className)}
                                href="/#contato"
                            >Contatos</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={cx(
                                    'p-0 m-0',
                                    `h-full bg-transparent text-lg duration-500 text-[var(--black-dark)] font-medium no-underline hover:bg-transparent hover:underline hover:text-[var(--link-color)] hover:duration-500`
                                    , blinker.className
                                )}
                            >Serviços</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-[var(--white-75)]">
                                <ul className="grid bg-transparent w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
                                    {compServices.map((_) => (
                                        <ListItem
                                            key={_.slug}
                                            icon={_.icon}
                                            title={_.title}
                                            href={`servicos/${_.slug}`}
                                        >
                                            {_.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link
                                className={cx(`h-full text-lg ${pathname === "/clientes" ? 'text-[var(--link-color)]' : 'text-[var(--black-dark)]'} duration-500 font-medium no-underline hover:underline hover:text-[var(--link-color)] hover:duration-500`, blinker.className)}
                                href="/clientes"
                            >Clientes</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link
                                className={cx(`h-full text-lg ${pathname === "/artigos" ? 'text-[var(--link-color)]' : 'text-[var(--black-dark)]'} duration-500 font-medium no-underline hover:underline hover:text-[var(--link-color)] hover:duration-500`, blinker.className)}
                                href="/artigos"
                            >Artigos</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link
                                className={cx(`h-full text-lg ${pathname === "/galeria" ? 'text-[var(--link-color)]' : 'text-[var(--black-dark)]'} duration-500 font-medium no-underline hover:underline hover:text-[var(--link-color)] hover:duration-500`, blinker.className)}
                                href="/galeria"
                            >Galeria</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hidden sm:flex">
                            <Link
                                href="https://wa.me/5538984064384"
                                className="button"
                                target={"_blank"}
                            >
                                <ButttonGlobal value="Contratar" className={style.contratar_btn} />
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <button
                        onClick={onToggle}
                        className={style.hamburgerIcon}
                    >
                        {isOpenModal ? <X size={26} /> : <List size={26} />}
                    </button>

                    <Modal
                        onClose={onClose}
                        onOpen={onOpen}
                        isOpen={isOpenModal}
                    />

                    <button className={"self-center"}>
                        <MagnifyingGlass size={25} />
                    </button>
                </NavigationMenu>
            </nav>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, icon, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cx(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className={"flex gap-1 items-center"}>
                        <Image
                            src={icon}
                            width={20}
                            height={20}
                            alt={`service - ${title}`}
                        />
                        <div className={cx("text-sm text-[var(--black-dark)] hover:text-[var(--link-color)] font-medium leading-none", blinker.className)}>{title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem";