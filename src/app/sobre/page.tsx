import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DataFormatter } from "@/utils/format-data-article";
import { PropsAboutPage } from "@/@types/about-page";

import { Shared } from "@/components/article-components";
import { PropsMedia } from "@/components/shared.media";
import { PropsRichText } from "@/components/shared.rich-text";
import { PropsQuote } from "@/components/shared.quote";
import { PropsSlider } from "@/components/shared.slider";
import { Feedback, PropsFeedback } from "@/components/shared.feedback";

import { ArticleContent } from "@/components/article-components/article-content";

import siteMetadata from "@/utils/siteMetadata";
import { PropsCover } from "@/@types/article";

export async function generateMetadata(): Promise<Metadata> {
    const { aboutPage } = await getInfoServicePage();
    if(!aboutPage) return {}

    let listImages: Array<PropsCover | string> = [siteMetadata.socialBanner];
    if (aboutPage.cover) {
        listImages = [aboutPage.cover];
    }
    const ogImages = listImages.map((img: any) => {
        const urlImg = img?.url ?? null;

        if (urlImg)
            return { url: urlImg };
        else
            return { url: img.includes("http") ? img : siteMetadata.siteUrl + img }
    });

    return {
        title: aboutPage.title,
        description: aboutPage.description,
        openGraph: {
            title: aboutPage.title,
            description: aboutPage.description,
            url: '/sobre',
            siteName: siteMetadata.title,
            locale: 'pt_BR',
            type: 'website',
            images: ogImages,
        },
    }
}

export default async function AboutPage() {
    const { aboutPage } = await getInfoServicePage();

    if(!aboutPage) notFound();
    let { title, description, cover, blocks, body }: PropsAboutPage = aboutPage;

    const feedbacks = blocks?.filter(fee => fee.component === "shared.service-feedback");
    blocks = blocks?.filter(fee => fee.component !== "shared.service-feedback");

    return (
        <div className="prose prose-2xl">
            {cover?.url && <div className="relative w-full h-96 md:border-2 md:border-solid md:border-black/10">
                <Image
                    className="m-0 object-cover w-full h-full brightness-75"
                    src={cover?.url}
                    alt={cover.alternativeText}
                    fill
                />
            </div>}

            <section className={"w-full flex flex-col items-center justify-center"}>
                <div className={"w-full flex flex-col px-5 text-center"}>
                    <h2 className={"prose-h2:mb-1 text-3xl md:text-4xl text-balance	text-black"}>{title}</h2>
                    <p className={"text-base md:text-lg lg:mx-auto font-normal text-balance text-black/70"}>{description}</p>
                </div>
            </section>
            
            <hr className="w-11/12 lg:w-full my-5 mx-auto border-black/10" />

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

            <section className="not-prose px-5 my-20">
                <h3 className={"mb-10 text-xl md:text-3xl font-medium text-black"}>
                    Feedbacks de clientes:
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                    {feedbacks?.map((feedback: PropsFeedback) => {
                        return (
                            <Feedback
                                key={feedback.id}
                                className="h-full"
                                {...feedback}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

async function getInfoServicePage() {
    const TIMEOUT = 3000;
  
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
  
    try {
      const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/about?populate=deep`
  
      const response = await fetch(input, {
        signal: controller.signal,
        next: {
            revalidate: 60 * 5 // 5 min
        }
      });

      if(!response) notFound();
      const { data } = await response.json();

      if (!data) return { aboutPage: null };
      else {
        const aboutPage: PropsAboutPage = await DataFormatter.formatAboutPageData(data);
        return { aboutPage }
      }
    } catch(error) {
      console.error("Error ao buscar conteudo da pagina sobre: ", error);
      return { aboutPage: null };
    } finally {
      clearTimeout(timeoutId);
    }
}