import styles from './principal-section.module.scss';
import { inter } from '../../utils/_fonts';

import cx from 'clsx';
import ButttonGlobal from '../../components/button';

export default function PrincipalSection() {
    return (
        <section className={cx(styles.principal, inter.className)}>
            <div className={styles.titulo_and_apresentation}>
                <h1>
                    Formato
                    <span>Consultoria</span>
                </h1>

                <h3>&quot;Ajudamos pessoas a se conectarem de forma genuína com seus negócios. Percebemos a gestão como um elemento simples e muito prazeroso&ldquo;</h3>
                <p>&quot;Focamos no essencial e abraçamos desafios através de abordagens inovadoras. Nos importamos com cada pessoa e fornecemos caminhos para impulsioná-las a serem mais prósperas e bem-sucedidas&ldquo;</p>

                <ButttonGlobal text="Saiba Mais"/>
            </div>

            <div className={styles.box_imgs}>

            <img src="/images/box-imgs-office-of-the-main-section.png" alt="man climbing ladder"/>
            <img src="/images/box-imgs-man-climbing-ladder.png" alt="man climbing ladder"/>
            <img src="/images/box-imgs-main-section-building.png" alt="man climbing ladder"/>
            </div>
        </section>
    )
}