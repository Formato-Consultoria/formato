import ButttonGlobal from "@/components/button";
import { Dialog } from "@headlessui/react";

import Link from "next/link";
import Image from "next/image";

import cx from "clsx";
import { inter } from "@/utils/_fonts";
import style from "./modal.module.scss";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { services } from "@/content/all-services";

interface ModalProps {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export default function Modal({ isOpen, onOpen, onClose }: ModalProps) {
    const compServices = Object.values(services);

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            as={'div'}
            className={cx(style.dialog, inter.className)}
        >
            <Dialog.Panel className={style.dialog_panel}>
                <ul className={style.container_list_pages}>
                    <li onClick={onClose}>
                        <Link href="/">inicio</Link>
                        <hr />
                    </li>
                    
                    <li onClick={onClose}>
                        <Link href="/clientes">Clientes</Link>
                        <hr />
                    </li>
                    

                    <li onClick={onClose}>
                        <Link href="/sobre">Sobre Nós</Link>
                        <hr />
                    </li>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="Serviços">
                            <AccordionTrigger className={"h-[50px] text-[var(--black-dark-97)] text-[17px] font-[669] hover:no-underline"}>Serviços</AccordionTrigger>

                            <>{compServices.map((_) => (
                                <AccordionContent
                                    key={_.slug}
                                    className="items-center pl-2 text-[var(--black-dark)]"
                                >
                                    <Image
                                        className={"align-middle my-auto"}
                                        src={_.icon}
                                        width={20}
                                        height={20}
                                        alt={`service - ${_.title}`}
                                    />
                                    
                                    <Link
                                        href={`servicos/${_.slug}`}
                                        className={"ml-3 my-auto text-sm text-[var(--black-dark)] no-underline self-center font-medium"}
                                    >{_.title}</Link>
                                </AccordionContent>
                            ))}</>

                            <hr className="w-full border-t-[1px] border-solid border-black/10 box-content" />
                        </AccordionItem>
                    </Accordion>

                    <li onClick={onClose}>
                        <Link href="/artigos">Artigos</Link>
                        <hr />
                    </li>
                    <li onClick={onClose}>
                        <Link href="/galeria">Galeria</Link>
                        <hr />
                    </li>
                    <li onClick={onClose}>
                        <Link href="/#contato">Contatos</Link>
                    </li>
                </ul>

                <Link
                    href="https://wa.me/5538984064384"
                    className={style.anchor_contratar}
                    target={"_blank"}
                >
                    <ButttonGlobal value="Contratar" className={style.contratar_btn} />
                </Link>
            </Dialog.Panel>
        </Dialog>
    )
}