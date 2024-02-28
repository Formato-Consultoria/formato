import Image from "next/image";

import { Shared } from "@/components/article-components";
import { ArticleContent } from "@/components/article-components/article-content";
import { PropsMedia } from "@/components/shared.media";
import { PropsQuote } from "@/components/shared.quote";
import { PropsRichText } from "@/components/shared.rich-text";
import { PropsSlider } from "@/components/shared.slider";
import { DataFormatter } from "@/utils/format-data-article";
import { PropsDynamicPage } from "@/@types/dynamic-page";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }: { params: { slug: string } }) {
    const { dynamicPageData } = await getdDynamicPageData(params);

    if(!dynamicPageData) notFound();
    const { title, description, cover, body, blocks  } = dynamicPageData;
    
    return (
        <div className="prose prose-2xl">
            <section className="w-full flex justify-center pt-16">
                <div className={"w-full flex flex-col px-5 md:pl-16 text-center"}>
                    <h2 className={"prose-h2:mb-1 text-3xl md:text-4xl text-balance	text-black"}>
                        {title}
                    </h2>

                    <p className={"text-base md:text-lg lg:w-10/12 lg:mx-auto font-normal text-balance text-black/70"}>
                        {description}
                    </p>
                </div>
            </section>

            <hr className="w-full my-5 mx-auto border-black/10" />

            {cover?.url && <div className="relative w-[98%] md:w-full h-96 mx-auto md:border-2 md:border-solid md:border-black/10">
                <Image
                    className="m-0 object-cover w-full h-full brightness-75"
                    src={cover.url}
                    alt={cover.alternativeText}
                    fill
                />
            </div>}

            <section className="px-5">
                <ArticleContent className={"relative max-w-full sm:px-5 md:p-0 self-center"}>
                    <div dangerouslySetInnerHTML={{ __html: body! }}></div>

                    {blocks?.map((block: PropsMedia | PropsRichText | PropsQuote | PropsSlider) => {
                        if (!block) return <p className={"text-lg my-5 font-bold text-[#fce100]"}>⚠️ Bloco de dado não suportado ainda! :(</p>
                        const Component = Shared[block.component];

                        if (Component) return <Component key={block.id} {...block} />;
                        else return <></>;
                    })}
                </ArticleContent>
            </section>
        </div>
    )
}

async function getdDynamicPageData(params: { slug: string }) {
    const TIMEOUT = 3000;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
    
    try {
        const { slug } = params;

        const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/dynamic-page/${slug}?populate=deep`;
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
            const dynamicPageData: PropsDynamicPage = await DataFormatter.formatDynamicPageData(data);
            return { dynamicPageData }
        }
    } catch(error) {
        console.error(error);
        return { dynamicPageData: null };
    } finally {
        clearTimeout(timeoutId)
    }
}