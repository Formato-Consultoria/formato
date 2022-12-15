import styles from "./whatsapppWidget.module.scss";
import { useState } from "react";
import cx from 'clsx';

export default function WhatsappWidgetButton() {
    // aplicar visibilidade somente após 100vh do window.scrollY
    const [didScroll, setDidScroll] = useState(true);

    return (
        <>
            <a 
                href="https://wa.me/556293128216"
                className={cx(styles.widget_button, didScroll && styles.after_principal_section)}
                target="_blank"
            >
                <img src="/icons/whatsapp.png" alt="botão widget para whatsapp" />
            </a>
        </>
    );
}