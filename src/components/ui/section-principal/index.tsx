import styles from "./principal-section.module.scss";
import { inter } from "@/utils/_fonts";

import cx from "clsx";
import ButttonGlobal from "@/components/button";

import Link from "next/link";
import Image from "next/image";

import { HeadlineH1 } from "./HeadlineH1";
import { Paragraph } from "./Paragraph";


export function PrincipalSection() {
    return (
        <section className={cx(styles.principal, inter.className)}>
            <div className={styles.titulo_and_apresentation}>
                <HeadlineH1>
                    Formato
                    <span>Consultoria</span>
                </HeadlineH1>

                <Paragraph>
                    Ajudamos a conectar pessoas a seus negócios. Buscamos inovação e crescimento pessoal. Alinhamos objetivos, criamos conexão e colocamos ideias brilhantes em prática.
                </Paragraph>

                <Link href={"/sobre"}>
                    <ButttonGlobal value="Saiba Mais"/>
                </Link>
            </div>

            <div className={styles.box_imgs}>
                <Image
                    src={"/images/box-imgs-office-of-the-main-section.png"}
                    height={194}
                    width={215}
                    alt="hero 1"
                />
                <Image
                    src={"/images/box-imgs-man-climbing-ladder.png"}
                    height={194}
                    width={194}
                    alt="hero 2"
                />
                <Image
                    src={"/images/box-imgs-main-section-building.png"}
                    height={194}
                    width={215}
                    alt="hero 3"
                />
            </div>
        </section>
    )
}