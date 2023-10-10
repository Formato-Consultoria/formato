import style from "./service-page.module.scss";

import cx from "clsx";
import Image from "next/image";
import Link from "next/link";

import type { contentService } from "@/@types/services";
import BannerTitle from "@/components/title-page-banner";
import { services } from '@/content/all-services';
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";
import NoContent from "@/components/no-content";
import { NoArticle } from "@/components/images";
import ButttonGlobal from "@/components/button";
import { Metadata } from "next";
import siteMetadata from "@/utils/siteMetadata";

type Props = {
    params: { service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const serviceComp: contentService = services.find((srv) => srv.slug === params.service) as contentService;

    return {
        title: `${serviceComp.title} Serviço`,
        description: serviceComp.description,
        openGraph: {
            title: serviceComp.title,
            description: serviceComp.description,
            url: `${siteMetadata.siteUrl}/servicos/${serviceComp.slug}`,
            siteName: siteMetadata.title,
            locale: 'pt_BR',
            images: [serviceComp.bannerImg],
        },
    }
}

const Service = ({ params }: Props) => {
    const serviceComp: contentService = services.find((srv) => srv.slug === params.service) as contentService;

    if(serviceComp) {
        return (<>
            <BannerTitle
                styles={{ containner: {
                    borderBottomWidth: '1.5px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'rgba(255, 255, 255, .5)'
                } }}
                height="200px"
                src={serviceComp.bannerImg}
            >
                <div className={"absolute -bottom-9 left-[43%] sm:left-12 md:left-14 rounded-full p-[10px] bg-[var(--white)] ring-1 ring-zinc-300"}>
                    <Image
                        src={serviceComp.icon}
                        width={45}
                        height={45}
                        alt={`service - ${serviceComp.title}`}
                    />
                </div>
            </BannerTitle>

            <WhatsappWidgetButton />

            <section className={cx(style.service_page, style.section)}>
                <div className={style.title_service}>    
                    <h3>{serviceComp.title}</h3>
                </div>

                <div className={style.content}>
                    {serviceComp.content}
                </div>
            </section>
        </>)
    } else {
        return (
            <NoContent image={NoArticle.src}>
                <section>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-notcontent-600">204</h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Sem conteúdo 🔎</p>
                            <p className="mb-4 text-lg font-light text-gray-500">Desculpe, não há conteúdo disponível nesta página no momento. Verifique novamente mais tarde ou explore outras partes do nosso site.</p>
                            <Link href="/" className="inline-flex no-underline">
                                <ButttonGlobal className={'bg-notcontent-600 hover:text-notcontent-600 hover:border-notcontent-600'} value="Voltar para o inicio"/>
                            </Link>
                        </div>   
                    </div>
                </section>
            </NoContent>
        )
    }
    
}

export default Service;