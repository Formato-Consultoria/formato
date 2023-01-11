import style from "./quote-section.module.scss";

import { QuoteEnd, QuoteStart } from "../images/svgs";

type PropsQuoteSection = {
    children: string
    img: string
}

export default function QuoteSection({ children, img }: PropsQuoteSection) {
    return (
        <div className={style.quote_section}>
            <p>
                <QuoteStart />
                    {children}
                <QuoteEnd />
            </p>

            <div className={style.image_box}>
                <img src={img} alt="Image quote" />
            </div>
        </div>
    )
}