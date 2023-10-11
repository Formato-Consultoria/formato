import "./article.scss";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PropsRichText } from "@/components/shared.rich-text";
import { PropsMedia } from "@/components/shared.media";
import { PropsQuote } from "@/components/shared.quote";
import { PropsSlider } from "@/components/shared.slider";
import { PropsArticle, PropsCover } from "@/app/api/@types/article";

import { blinker } from "@/utils/_fonts";
import { DataFormatter } from "@/utils/format-data-article";
import cx from "clsx";

import { Comp, Shared } from ".";
import siteMetadata from "@/utils/siteMetadata";

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { articleData } = await getdArticleData(params);

    const publishedAt = new Date(articleData.publishedAt).toISOString();
    const modifiedAt = new Date(articleData.updatedAt).toISOString();

    let listImages: Array<PropsCover | string> = [siteMetadata.socialBanner];
    if (articleData.cover) {
        listImages = [articleData.cover];
    }
    const ogImages = listImages.map((img: any) => {
        const urlImg = img?.url ?? null;

        if (urlImg)
            return { url: urlImg };
        else
            return { url: img.includes("http") ? img : siteMetadata.siteUrl + img }
    });

    const authors = articleData?.author ? [articleData.author.name] : siteMetadata.author;

    return {
        title: articleData.title,
        description: articleData.description,
        openGraph: {
            title: articleData.title,
            description: articleData.description,
            url: `${siteMetadata.siteUrl}/articles/${articleData.slug}`,
            siteName: siteMetadata.title,
            locale: 'pt_BR',
            type: 'article',
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            images: ogImages,
            authors: authors.length > 0 ? authors : [siteMetadata.author]
        },
        twitter: {
            card: 'summary_large_image',
            title: articleData.title,
            description: articleData.description,
            images: ogImages,
        },
    }
}

export default async function Article({ params }: Props) {
    const { articleData } = await getdArticleData(params);
    const { slug, title, description, body, blocks, publishedAt, updatedAt, cover, category, tags, author } = articleData;

    let listImages: Array<PropsCover | string> = [siteMetadata.socialBanner];
    if (articleData.cover) {
        listImages = [articleData.cover];
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": title,
        "description": description,
        "image": listImages,
        "datePublished": new Date(articleData.publishedAt).toISOString(),
        "dateModified": new Date(articleData.updatedAt).toISOString(),
        "author": [{
            "@type": "Person",
            "name": articleData?.author ? [articleData.author.name] : siteMetadata.author,
            "url": `mailto:${author.email}`
        }]
    }

    const HeadlingsContent = generateHeadlingsContent({ body, blocks });

    return (<>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <>
            <div className={"w-full flex flex-col items-center relative bg-gray-50 z-0"}>
                <Comp.BannerTitle
                    title={title}
                    cover={cover}
                    category={category}
                />

                <div className={"w-full lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] flex flex-col gap-3 p-5 sm:p-3 md:p-5 bg-[var(--white-mediumn)] ring-1 ring-zinc-950/10"}>
                    <div
                        style={{ fontSize: 13 }}
                        className={cx(
                            "text-xs font-semibold w-max px-2 rounded-full uppercase text-[var(--black-dark)] bg-[var(--black-dark-60)] ring-1 ring-[var(--black-dark)]",
                            blinker.className)
                        }
                    >{category.name}</div>

                    <div className={"flex gap-1 items-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="rgb(8, 12, 16, 0.8)" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z" /></svg>
                        <Comp.Time
                            time={new Date(updatedAt)}
                            style={{ margin: 0, padding: 0, fontSize: 14, color: 'var(--black-dark-80)' }}
                        />
                    </div>

                    <div className={"flex items-center gap-3"}>
                        <Comp.UserAvatar author={author} className="w-8 h-8" />
                        <p style={{ color: 'rgba(8, 12, 16, .)', fontWeight: 'mediumn' }}>{author?.name}</p>
                    </div>

                    <div className={"flex items-center gap-2 mt-3 flex-wrap w-full"}>{tags?.map((tag: string, index) => (
                        <div key={index} className={cx("max-w-max text-xs px-2 py-.5 rounded-lg ring-1 ring-zinc-950/10 bg-purple-400 text-purple-800 uppercase", blinker.className)}># {tag}</div>
                    ))}</div>
                </div>

                <div className={"flex flex-col md:flex-row justify-center h-auto md:mt-3 lg:mt-5 w-full relative"}>
                    <Comp.Headlings
                        className={cx("order-1 md:h-[500px] max-w-full md:basis-2/6 md:order-2 lg:basis-3/12", blinker.className)}
                        content={HeadlingsContent}
                    />

                    <Comp.ArticleContent className={"order-2 md:order-1 relative max-w-full px-3 md:w-[530px] lg:w-[800px] bg-[var(--white-blog)] self-center ring-1 ring-zinc-950/5"}>
                        <div dangerouslySetInnerHTML={{ __html: body ?? "" }}></div>

                        {blocks && blocks.map((block) => {
                            if (!block) return <p className={"text-lg my-5 font-bold text-[#fce100]"}>⚠️ Bloco de dado não suportado ainda! :(</p>
                            const Component = Shared[block.component];

                            if (Component) return <Component key={block.id} {...block} />;
                            else return <></>;
                        })}
                    </Comp.ArticleContent>
                </div>
            </div>

            <Comp.RelatedArticleCards
                categorySlug={category.slug}
                tags={tags ?? []}
                pageSlug={slug}
            />
        </>
    </>);
}

async function getdArticleData(params: { slug: string }) {
    const options: RequestInit = {
        next: {
            revalidate: 60
        },
    }

    const { slug } = params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/article/${slug}?populate=deep`, {
        ...options,
    });

    if (!response) notFound();
    const articleResponse = await response.json();
    const { data } = articleResponse;

    if (!data) notFound();
    else {
        const articleData: PropsArticle = await DataFormatter.formatSingleArticleData(data);
        return { articleData }
    }
}

function generateHeadlingsContent({ body, blocks }: { body?: string, blocks?: Array<PropsMedia | PropsRichText | PropsQuote | PropsSlider> }) {
    if (body || blocks) {
        const blocksRichText: Array<PropsRichText> | undefined = blocks?.filter(block => block.component === "shared.rich-text") as Array<PropsRichText>;
        return body + '\n' + blocksRichText.map(block => block.body).join('\n');
    } else return '';
}