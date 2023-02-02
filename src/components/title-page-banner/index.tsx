import style from "./banner-title-page.module.scss";

import cx from "clsx";
import { inter } from "@/utils/_fonts";
import { ReactNode } from "react";
import Image from "next/image";

type PropsBnrTlt = {
    value: string | ReactNode,
    src: string
}

export default function BannerTitle({ value, src }: PropsBnrTlt) {
    return (
        <section
            className={cx(style.bannerTitle, inter)}
        >
            <div className={style.image}>
                <Image
                    src={src}
                    fill
                    alt={`imagem banner de ${value}`}
                    priority
                />
            </div>

            <div className={style.title}>{value}</div>
        </section>
    )
}