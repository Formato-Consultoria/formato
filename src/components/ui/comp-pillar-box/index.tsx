import style from './pillar-box-card.module.scss';
import Image from 'next/image';
import { CSSProperties } from 'react';

type PropsPlrBxCrd = {
    src: string,
    value: string,
    customStyle?: CSSProperties | undefined
}

export function PillarBoxCard({ src, value, customStyle }: PropsPlrBxCrd) {
    return (
        <div className={style.cardBox} style={customStyle}>
            <div className={style.image}>
                <Image
                    src={src}
                    fill
                    alt={value}
                />
            </div>

            <p>{value}</p>
        </div>
    )
}