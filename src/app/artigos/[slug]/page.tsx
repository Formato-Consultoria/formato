'use client';
import { fetcher } from "@/lib/strapi-api";
import { use } from "react";
import { PropsArticle } from "@/@types/article";
import { notFound } from "next/navigation";
import cx from "clsx";

import { blinker } from "@/utils/_fonts";
import { DataFormatter } from "@/utils/format-data-article";

import BannerTitle from "@/components/title-page-banner";
import { Comp, Shared } from ".";

import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Image from "next/image";

export default function Article({ params }: { params: { slug: string } }) {
    const { articleData } = use(getdArticleData(params));
    const { slug, title, description, body, blocks, updatedAt, cover, category, author } = articleData;

    return (<>
        <div className={"w-full flex flex-col items-center relative bg-white z-0"}>
            <BannerTitle
                src={cover.url}
                height={"180px"}
                styles={{
                    containner: { width: '100%', marginBottom: '50px', outline: '1px solid rgba(0, 0, 0, .2)' },
                    image: { filter: 'none' },
                    content: "flex flex-col items-center justify-center gap-3 p-5 h-max w-11/12  md:w-[700px] absolute z-10 -bottom-1/4 bg-white ring-1 ring-[var(--black-10)] shadow-inner"
                }}
            >
                <h1 className={cx("line-clamp-3 leading-tight md:leading-snug my-1 text-center", blinker.className)}>{title}</h1>
                <Comp.Breadcrumb categorySlug={category.slug} categoryName={category.name} />
            </BannerTitle>

            {/* <div className={style.headlings}>
                <strong className={blinker.className}>Nessa pagina</strong>
            </div> */}

            <div className={"w-full md:w-[800px] flex flex-col gap-3 p-5 bg-[var(--white-mediumn)]"}>
                <div
                    style={{ fontSize: 13 }}
                    className={cx(
                        "text-xs font-semibold w-max px-2 rounded-full uppercase text-[var(--black-dark)] bg-[var(--black-dark-60)] ring-1 ring-[var(--black-dark)]",
                        blinker.className)
                    }
                >{category.name}</div>

                <div className={"flex gap-1 items-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="rgb(8, 12, 16, 0.8)" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"/></svg>
                    <Comp.Time
                        time={new Date(updatedAt)}
                        style={{ margin: 0, padding: 0, fontSize: 14, color:  'var(--black-dark-80)'}}
                    />
                </div>

                {/* <div className={"flex items-center gap-3"}>
                    <Comp.UserAvatar author={author} className="w-8 h-8" />
                    <p style={{ color: 'rgba(8, 12, 16, .)', fontWeight: 'mediumn' }}>{author?.name}</p>
                </div> */}
            </div>

            <Comp.ArticleContent>
                {/* <MDXRemote {...source} /> */}
                
                <div dangerouslySetInnerHTML={{ __html: body ?? "" }}></div>

                {blocks && blocks.map((block) => {
                        const Component = Shared[block.component];

                        if(Component) return <Component key={block.id} {...block} />;
                        else return <></>;
                })}
            </Comp.ArticleContent>
        </div>
        
        <Comp.RelatedArticleCards
            categorySlug={category.slug}
            pageSlug={slug}
        />
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
    const articleResponse = await response.json();
    if (!articleResponse || !articleResponse.data) notFound();

    const { data } = articleResponse;
    const articleData: PropsArticle = await DataFormatter.formatSingleArticleData(data);
    return { articleData }
}