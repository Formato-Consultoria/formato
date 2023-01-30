import styles from "./whatsapppWidget.module.scss";

import cx from 'clsx';
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function WhatsappWidgetButton() {
    const [didScroll, setDidiScroll] = useState(false);
    
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

    return (
        <>
            <Link
                href="https://wa.me/5538984064384"
                className={cx(styles.widget_button, didScroll && styles.after_principal_section)}
                target="_blank"
                rel="Whatsapp"
            >
                <img src="/icons/whatsapp.png" alt="botão widget para whatsapp" />
            </Link>
        </>
    );
}