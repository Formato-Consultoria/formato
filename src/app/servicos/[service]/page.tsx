import style from "./service-page.module.scss";

import cx from "clsx";
import Image from "next/image";
import Link from "next/link";

import type { contentService } from "@/app/api/@types/services";
import BannerTitle from "@/components/title-page-banner";
import { services } from '@/content/all-services';
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";
import NoContent from "@/components/no-content";
import { NoArticle } from "@/components/images";
import ButttonGlobal from "@/components/button";
import { Metadata } from "next";
import siteMetadata from "@/utils/siteMetadata";
import { blinker } from "@/utils/_fonts";

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
                src={serviceComp.bannerImg}
                height={"200px"}
                styles={{
                    containner: { width: '100%', outline: '1px solid rgba(0, 0, 0, .2)' },
                }}
            >
                <div className={"absolute -bottom-9 left-[5%] sm:left-12 md:left-14 rounded-full p-[10px] bg-[var(--white)] ring-1 ring-zinc-300"}>
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
                <div className={cx(style.title_service, "prose prose-base md:prose-xl lg:prose-2xl")}>
                    <h3 className={blinker.className}>{serviceComp.title}</h3>
                </div>

                <article className={cx("prose prose-base md:prose-xl lg:prose-2xl prose-zinc prose-p:leading-8", style.content)}>
                    {serviceComp.content}
                </article>
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