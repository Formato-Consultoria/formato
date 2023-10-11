import styles from "./about-section.module.scss";
import { inter, blinker } from "@/utils/_fonts";

import Image from "next/image";
import cx from "clsx";

export function AboutSection() {
    return(
        <section className={cx(styles.about, inter.className)}>
            <h2 className={blinker.className}>SOBRE A HISOTÓRIA DA FORMATO</h2>

            <div className={styles.content}>
                <div className={cx(styles.image, "ring-1 ring-zinc-950/10")}>
                    <Image
                        src="/images/Logotipo_light.jpg"
                        fill
                        alt="sobre a nossa empresa image banner"
                    />
                </div>

                <div>
                    <p>Desde 2017 atuamos no segmento de consultoria empresarial.</p>
                    <br/>
                    <p>Simplificando a gestão e a tornando um processo prazeroso.</p>
                    <br/>
                    <p>Somos apaixonados por negócios, com uma vontade sincera de trabalhar pelo sucesso dos nossos clientes e fazer a diferença na vida de cada pessoa que está conosco.</p>
                    <br/>
                    <p>Acreditamos na inovação e desenvolvemos soluções personalizadas, que respeitam o momento de vida e objetivos de cada um, para assim, criar um mundo melhor juntos.</p>
                </div>
            </div>
        </section>
    )
}