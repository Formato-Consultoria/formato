import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import type { PropsService } from "@/@types/service";

import { ArticleContent } from "@/components/article-components/article-content";
import { PropsMedia } from "@/components/shared.media";
import { PropsRichText } from "@/components/shared.rich-text";
import { PropsQuote } from "@/components/shared.quote";
import { PropsSlider } from "@/components/shared.slider";
import { Shared } from "@/components/article-components";

import { cn } from "@/lib/utils";
import { DataFormatter } from "@/utils/format-data-article";
import siteMetadata from "@/utils/siteMetadata";

type Props = {
    params: { service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { serviceData } = await getdServiceData(params);

    if(!serviceData) return {}
    return {
        title: `${serviceData.title} Serviço`,
        description: serviceData.description,
        openGraph: {
            title: serviceData.title,
            description: serviceData.description,
            url: `${siteMetadata.siteUrl}/servicos/${serviceData.slug}`,
            siteName: siteMetadata.title,
            locale: 'pt_BR',
            images: [serviceData.cover?.url ?? ''],
        },
    }
}

export default async function ServicePage({ params }: Props){
    const { serviceData } = await getdServiceData(params);

    if(!serviceData) notFound();
    const { title, description, body, blocks, icon, cover } = serviceData;

    return (<>
        <div className="prose prose-2xl">
            <section className={cn("w-full flex flex-col items-center justify-center", icon?.url ? "pt-0" : 'pt-16')}>
                {icon?.url && <Image
                    className="mb-0"
                    src={icon.url}
                    alt={icon.alternativeText}
                    width={100}
                    height={100}
                />}

                <div className={"w-full flex flex-col px-5 text-center"}>
                    <h2 className={"prose-h2:mb-1 text-3xl md:text-4xl text-balance	text-black"}>{
                        title ?? "Bem-vindo à Nossa Página de Serviços de Consultoria Empresarial"
                    }</h2>

                    <p className={"text-base md:text-lg lg:mx-auto font-normal text-balance text-black/70"}>{
                        description ?? "Na formato, nós capacitamos negócios para alcançar e exceder suas metas,"
                        + "transformando desafios em oportunidades. Com uma abordagem personalizada, nosso objetivo "
                        + "é fornecer soluções estratégicas que impulsionam o crescimento, a inovação e a eficiência operacional."
                    }</p>
                </div>
            </section>

            <hr className="w-full my-5 mx-auto border-black/10" />

            {cover?.url && <div className="relative w-full h-96">
                <Image
                    className="m-0 object-cover w-full h-full brightness-75"
                    src={cover?.url}
                    alt={cover.alternativeText}
                    fill
                />
            </div>}

            <ArticleContent className={"relative max-w-full  px-5 self-center"}>
                <div dangerouslySetInnerHTML={{ __html: body! }}></div>

                {blocks?.map((block: PropsMedia | PropsRichText | PropsQuote | PropsSlider) => {
                    if (!block) return <p className={"text-lg my-5 font-bold text-[#fce100]"}>⚠️ Bloco de dado não suportado ainda! :(</p>
                    const Component = Shared[block.component];

                    if (Component) return <Component key={block.id} {...block} />;
                    else return <></>;
                })}
            </ArticleContent>
        </div>
    </>)
}


async function getdServiceData(params: { service: string }) {
    const TIMEOUT = 3000;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
    
    try {
        const { service } = params;

        const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/service/${service}?populate=deep`;
        const response = await fetch(input, {
            signal: controller.signal,
            next: {
                revalidate: 60 * 8 // 8 min
            }
        });

        if (response.status !== 200) throw Error((await response.json()).error.message);
        const serviceResponse = await response.json();

        const { data } = serviceResponse;
    
        if (!data) throw Error((await response.json()).error.message);
        else {
            const serviceData: PropsService = await DataFormatter.formatSingleServiceData(data);
            return { serviceData }
        }
    } catch(error) {
        console.error(error);
        return { serviceData: null };
    } finally {
        clearTimeout(timeoutId)
    }
}