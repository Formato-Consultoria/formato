import style from "./testimonials-box.module.scss";

import cx from "clsx";

type PropsPersonProfession = {
    children: string;
    companyName: string;
    imgBnr: string;
    personImg: string;
    personName: string;
    personProfession: string;
}

export default function TestimonialsBox({
    children,
    companyName,
    imgBnr,
    personImg,
    personName,
    personProfession
}: PropsPersonProfession) {
    return (
        <div className={style.testimonials_box}>
            <div
                className={cx(style.banner_img_company)}
                style={{
                    background: `url(${imgBnr})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div>
                    {companyName}
                </div>
            </div>

            <p className={style.comment}>{children}</p>

            <div className={style.footer}>
                <img src={personImg} alt={personName} />

                <div>
                    <p>{personName}</p>
                    <small>{personProfession}</small>
                </div>
            </div>
        </div>
    )
}