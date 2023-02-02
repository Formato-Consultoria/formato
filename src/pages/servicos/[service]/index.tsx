import style from "./service-page.module.scss";

import cx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { House, Shield } from "phosphor-react";
import {  useState } from "react";
import { useMediaQuery } from "react-responsive";

import type { contentService } from "@/@types/services";
import BannerTitle from "@/components/title-page-banner";
import { services } from '.@/content/all-services';
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

const Service = () => {
    const [dontIcon, setdontIcon] = useState(false);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const router = useRouter();
    const { service } = router.query;

    const srv: contentService | undefined = services.find((srv) => srv.slug === service);
    
    return (
        <>
            <BannerTitle
                value={
                    <div
                        className={style.title_custom}
                        style={{ display: "flex", alignItems: "center", opacity: ".8" }}
                    >
                        <Link
                            href="/servicos"
                            style={{ fontSize: "2.3px", color: "#FFF", textDecoration: "underline" }}
                        >
                            <House size={cx(isMobile ? 29 : 35)} />
                        </Link><span style={{margin: "0 10px"}}>•</span>{srv?.title}
                    </div> ?? "serviço indisponivel"
                }
                src={srv?.bannerImg ?? ""}
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