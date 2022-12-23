import styles from "./whatsapppWidget.module.scss";
// import { useState } from "react";
import cx from 'clsx';
import Link from "next/link";

export default function WhatsappWidgetButton() {
    // aplicar visibilidade somente após 100vh do window.scrollY
    // const [didScroll, setDidScroll] = useState(true);

    return (
        <>
            <Link
                href="https://wa.me/556293128216"
                className={cx(styles.widget_button, styles.after_principal_section)}
                target="_blank"
                rel="Whatsapp"
            >
                <img src="/icons/whatsapp.png" alt="botão widget para whatsapp" />
            </Link>
        </>
    );
}