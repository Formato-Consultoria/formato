import ButttonGlobal from "@/components/button";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

import cx from "clsx";
import { inter } from "utils/_fonts";
import style from "./modal.module.scss";
import { useMediaQuery } from "react-responsive";

interface ModalProps {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export default function Modal({ isOpen, onOpen, onClose }: ModalProps) {
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
                        <Link href="/servicos">Serviços</Link>
                        <hr />
                    </li>
                    <li onClick={onClose}>
                        <Link href="/sobre">Sobre Nós</Link>
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