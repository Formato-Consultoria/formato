import { ArrowRight } from "@/components/images/phosphor";

import style from "./services-section-box.module.scss";
import Image from "next/image";
import Link from "next/link";

import ButttonGlobal from "@/components/button";

type PropsServieSectionBox = {
    children: string,
    url: string,
    icon: string,
    title: string,
    bannerImg: string
}

export function ServicesSectionBox({
    children,
    url,
    icon,
    title,
    bannerImg
}: PropsServieSectionBox) {
    
    return (
        <div className={style.services_section_box}>
            <div className={style.banner_img}>
                <Image
                    src={bannerImg}
                    fill
                    alt={`${title} banner`}
                />
            </div>

            <div className={style.boxcontent}>
                <div className={style.icon_and_title}>
                    <div className={style.container_svg}>
                        <Image
                            src={icon}
                            width={50}
                            height={50}
                            alt={`${title} icon`}
                        />
                    </div>
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