import style from "./services-session-box.module.scss";
import { ReactNode } from "react";
import Image from "next/image";
import ButttonGlobal from "../../components/button";
import { ArrowRight } from "phosphor-react";
import Link from "next/link";

type PropsServieSessionBox = {
    children: string,
    url: string,
    icon: ReactNode,
    title: string,
    bannerImg?: string
}

export default function ServicesSessionBox({
    children,
    url,
    icon,
    title,
    bannerImg
}: PropsServieSessionBox) {
    
    return (
        <div className={style.services_session_box}>
            <div className={style.banner_img}>
                <img src={bannerImg} alt={title} />
            </div>

            <div className={style.boxcontent}>
                <div className={style.icon_and_title}>
                    {icon}
                    <h4>{title}</h4>
                </div>

                <p>{children}</p>
                
                <Link href={url}>
                    <ButttonGlobal
                        value="saiba mais"
                        icone={<ArrowRight size={20}/>} 
                        isSecondary
                    />
                </Link>
            </div>

            <div className={style.boxcolor}></div>
        </div>
    )
}