import { ReactNode } from "react";
import style from "./pillar-box-card.module.scss";

type PropsPlrBxCrd = {
    src: string,
    value: string
}

export default function PillarBoxCard({ src, value }: PropsPlrBxCrd) {
    return (
        <div className={style.cardBox}>
            <img src={src} alt={value} />

            <p>{value}</p>
        </div>
    )
}