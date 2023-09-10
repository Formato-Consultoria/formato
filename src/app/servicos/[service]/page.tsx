'use client'
import style from "./service-page.module.scss";

import cx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Shield } from "@/components/images/phosphor";
import {  useState } from "react";
import { useMediaQuery } from "react-responsive";

import type { contentService } from "@/@types/services";
import BannerTitle from "@/components/title-page-banner";
import { services } from '@/content/all-services';
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

const Service = () => {
    const [dontIcon, setdontIcon] = useState(false);
    
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const service = usePathname();
    const srv: contentService | undefined = services.find((srv) => srv.slug === service);
    
    return (
        <>
            <BannerTitle
                src={srv?.bannerImg ?? ""}
                styleBnr={{}}
                height=""
            />

            <WhatsappWidgetButton />

            <section className={cx(style.service_page, style.section)}>
                <div className={style.title_service}>
                    <div className={style.iconImg}>
                        {!dontIcon ?
                            <Image
                                src={srv?.icon ?? ("" && setdontIcon(true))}
                                width={43}
                                height={43}
                                alt={`service - ${srv?.title}`}
                            /> : <Shield size={43} />
                        }
                    </div>

                    <h3>{srv?.title}</h3>
                </div>

                <div className={style.content}>
                    {srv?.content}
                </div>
            </section>
        </>
    )
}

export default Service;