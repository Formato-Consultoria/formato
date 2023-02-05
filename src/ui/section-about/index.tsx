import styles from "./about-section.module.scss";
import { inter, blinker } from "@/utils/_fonts";

import Image from "next/image";
import cx from "clsx";

export default function AboutSection() {
    return(
        <section className={cx(styles.about, inter.className)}>
            <h2 className={blinker.className}>SOBRE A NOSSA EMPRESA</h2>

            <div className={styles.content}>
                <div className={styles.image}>
                    <Image
                        src="/images/imagem-predio.png"
                        fill
                        alt="sobre a nossa empresa image banner"
                    />
                </div>

                <div>
                    <p>Desde 2017 atuamos no segmento de consultoria empresarial. Entendemos que a gestão pode ser feita de forma simples e também prazerosa. Estamos sempre em busca de estratégias que reduzem a complexidade e focam no essencial.</p>
                    <br/>
                    <p>Somos apaixonados por negócios, temos uma vontade genuína de trabalhar pelo sucesso dos nossos clientes e fazer a diferença na vida de cada pessoa que está conosco.</p>
                    <br/>
                    <p>Acreditamos que a inovação é essencial para nos conduzir ao futuro. Nossas intervenções são estratégicas e com ações conectadas com o que realmente importa.</p>
                    <br/>
                    <p>Desenvolvemos soluções personalizadas, que respeitam o momento de vida e os objetivos do seu negócio. Estamos abertos a novos desafios e acreditamos que juntos podemos cocriar um mundo cada vez melhor.</p>
                </div>
            </div>
        </section>
    )
}