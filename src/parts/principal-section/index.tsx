import styles from "./principal-section.module.scss";
import { inter } from '../../utils/_fonts';

import ButttonGlobal from '../../components/button';

export default function PrincipalSection() {
    return (
        <section className={`${styles.principal} ${inter.className}`}>
            <div className={styles.titulo_and_apresentation}>
            <h1>
                Formato<span>Consultoria</span>
            </h1>

            <h3>Lorem ipsum dolor sit ametconsectetur adipiscing?Lorem ipsum dolor sit ametconsectetur adipiscing?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie metus tempus neque aliquam hendrerit.</p>
            </div>

            <ButttonGlobal text="Saiba Mais"/>

            <div className={styles.box_imgs}>
            <img src="/images/box-imgs-office-of-the-main-section.png"
            alt="man climbing ladder"/>

            <img src="/images/box-imgs-man-climbing-ladder.png"
                alt="man climbing ladder"/>
                
            <img src="/images/box-imgs-main-section-building.png"
                alt="man climbing ladder"/>
            </div>
        </section>
    )
}