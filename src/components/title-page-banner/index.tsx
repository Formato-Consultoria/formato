import style from './banner-title-page.module.scss';

import cx from 'clsx';
import { inter } from '../../utils/_fonts';

type PropsBnrTlt = {
    value: string,
    src?: string
}

export default function BannerTitle({ value, src }: PropsBnrTlt) {
    return (
        <section
            className={cx(style.bannerTitle, inter)}
            style={{
                background: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"}}
        >
            <span className={style.bg_shadow}></span>
            <h2>{value}</h2>
        </section>
    )
}