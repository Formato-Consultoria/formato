import style from "./services-session-box.module.scss";
import { ReactNode } from "react";

type PropsServieSessionBox = {
    id: string
    children: string,
    icon: ReactNode,
    title: string,
    bannerImg?: string
}

export default function ServicesSessionBox({
    id,
    children,
    icon,
    title,
    bannerImg
}: PropsServieSessionBox) {
    
    return (
        <div id={id} className={style.services_session_box}>
            <div className={style.titles}>
                {icon} <h3>{title}</h3>
            </div>

            <p className={style.text}>
                {children}
            </p>

            <div className={style.banner_img}>
                <img src={bannerImg} alt={title} />
            </div>
        </div>
    )
}