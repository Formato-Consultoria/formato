import style from './pillar-box-card.module.scss';
import Image from 'next/image';

type PropsPlrBxCrd = {
    src: string,
    value: string
}

export default function PillarBoxCard({ src, value }: PropsPlrBxCrd) {
    return (
        <div className={style.cardBox}>
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