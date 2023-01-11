import styles from './principal-section.module.scss';
import { inter } from '../../utils/_fonts';

import cx from 'clsx';
import ButttonGlobal from '../../components/button';
import Link from 'next/link';

export default function PrincipalSection() {
    return (
        <section className={cx(styles.principal, inter.className)}>
            <div className={styles.titulo_and_apresentation}>
                <h1>
                    Formato
                    <span>Consultoria</span>
                </h1>

                <p>
                    {/* &quot; */}
                        Ajudamos cada pessoa a se conectar de forma genuína com seus negócios.
                        Abraçamos desafios e focamos em caminhos mais simples e estratégicos
                    {/* &quot; */}
                </p>

                <Link href={"/sobre"}>
                    <ButttonGlobal value="Saiba Mais"/>
                </Link>
            </div>

            <div className={styles.box_imgs}>
                <img src="/images/box-imgs-office-of-the-main-section.png" alt="man climbing ladder" />
                <img src="/images/box-imgs-man-climbing-ladder.png" alt="man climbing ladder" />
                <img src="/images/box-imgs-main-section-building.png" alt="man climbing ladder" />
            </div>
        </section>
    )
}