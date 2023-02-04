import  styles from './contact-section.module.scss';
import { inter } from '@/utils/_fonts';

import cx from 'clsx';
import Form from '@/ui/form-section';

export default function ContactSection() {
    return (
        <section id="contato" className={cx(styles.contact, inter.className)}>
            <div className={styles.sideinfo}>
                <div className={styles.contacts}>
                    <h3>Ligue para Nós</h3>
                    <p>+55 (38) 98406-4384</p>
                </div>
                
                <div className={styles.address}>
                    <h3>Localização</h3>
                    <p>R. Noemes Martins Ferreira, 305</p>
                    <p>Sagrada Família</p>
                    <p>Unaí, MG 38616-797</p>
                </div>
            </div>

            <div className={styles.sideform}>
                <Form />
            </div>
        </section>
    )
}