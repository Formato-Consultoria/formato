import { ReactNode } from "react";
import style from "./pillar-box-card.module.scss";

type PropsPlrBxCrd = {
    src: string,
    title: string
}

export default function PillarBoxCard({ src, title }: PropsPlrBxCrd) {
    return (
        <div className={style.cardBox}>
            <img src={src} alt={title} />

            <p>{title}</p>
        </div>
    )
}