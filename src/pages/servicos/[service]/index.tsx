import style from "./service-page.module.scss";

import { contentService } from "../../../@types/services";
import BannerTitle from "../../../components/title-page-banner";
import { services } from '../../../content/all-services';

import cx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { House, Shield } from "phosphor-react";
import { useState } from "react";

const Service = () => {
    const [dontIcon, setdontIcon] = useState(false);

    const router = useRouter();
    const { service } = router.query;

    const srv: contentService | undefined = services.find((srv) => srv.slug === service);

    return (
        <>
            <BannerTitle
                value={
                    <div
                        className={style.title_custom}
                        style={{ display: "flex", alignItems: "center", opacity: ".8"}}
                    >
                        <Link href="/servicos" style={{ fontSize: "2.3px", color: "#FFF", textDecoration: "underline"}}>
                            <Shield size={35} />
                        </Link><span style={{margin: "0 15px"}}>·</span>{srv?.title}
                    </div> ?? "serviço indisponivel"
                }
                src={srv?.bannerImg}
            />

            <section className={cx(style.service_page, style.section)}>
                <div className={style.title_service}>
                    <div className={style.iconImg}>
                        {!dontIcon ?
                            <Image
                                src={srv?.icon ?? ("" && setdontIcon(true))}
                                width={46}
                                height={46}
                                alt={`service - ${srv?.title}`} 
                            /> : <Shield size={46} />
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