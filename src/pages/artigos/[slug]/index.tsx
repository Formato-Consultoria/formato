import { fetcher } from "@/lib/strapi-api";

import { PropsArticle, PropsCategory } from "@/@types/article";
import BannerTitle from "@/components/title-page-banner";

import { FormatCategoryData, FormatSingleArticleData } from "@/utils/format-data-article";
import formatDateTime from "@/utils/format-date-time";
import { blinker } from "@/utils/_fonts";

import cx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./article.module.scss";
import PostBox from "@/ui/comp-post-box";

export default function Article({
    article,
    relatedArticles
}: {
    article: PropsArticle,
    relatedArticles: PropsArticle[]
}) {
    const [updatedDateAt, setUpdatedDateAt] = useState('');
    const { slug, title, description, body, updatedAt, cover, category, author } = article;
    
    useEffect(() => {
        const interval = setInterval(() => {
            setUpdatedDateAt(formatDateTime(new Date(updatedAt)));
        }, 1000);

        return () => clearInterval(interval);
    }, [updatedAt]);

    useEffect(() => {
        console.log(relatedArticles);
    }, [])

    return (<>
        <div className={style.article_page}>
            <BannerTitle
                src={cover.url}
                title={title}
                height={"250px"}
                width={"95%"}
                isBannerArticle
                styleBnr={{gridArea: "banner"}}
            />
            
            <div className={style.header}>
                <div className={style.date_and_category}>
                    <p>{updatedDateAt}</p>

                    <div className={cx(style.category_box, blinker.className)}>{category?.name}</div>
                </div>

                <h1 className={style.title}>
                    {article.title}
                </h1>

                {author ? (<div className={style.author_info}>
                    <Link
                        className={style.avatar}
                        href={`mailto:${author?.email}` ?? ""}
                        target={"_blank"}
                    >
                        <Image
                            src={author?.avatar ?? ""}
                            fill
                            alt={author?.name ?? "avatar do author"}
                        />
                    </Link>

                    <p>{author?.name}</p>
                </div>) : null}
            </div>

            <div className={style.headlings}>
                <p className={blinker.className}>Nessa pagina</p>
                {/* map de todos os headings dentro do body */}
            </div>
            
            <hr style={{ height: "1px", width: "90%", outline: "none", margin: "5px 20px", borderTop: "1px solid rgba(0, 0, 0, 0.1)", gridColumn: 2}} />

            <div className={style.content}>
                {/* <MDXContent /> */}
                
                {body}
            </div>
        </div>

        <hr style={{ height: "1px", width: "90%", outline: "none", margin: "25px auto", borderTop: "1px solid rgba(0, 0, 0, 0.1)"}} />

        <div className={style.related_articles}>{relatedArticles.map((
            {id, title, slug, description, updatedAt, cover, category, author}: PropsArticle,
            index
        ) => (
            <PostBox
                key={index}
                id={id}
                title={title}
                slug={slug}
                description={description}
                updatedAt={new Date(updatedAt ?? new Date())}
                cover={cover}
                category={category}
                author={author}
                typeBox={"RELATED_BOX_POST"}
            />
        ))}</div>
    </>);
}

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/article/${slug}?populate=deep`);
    
    const idCategory = articleResponse?.data?.attributes?.category?.data?.id ?? 0;
    const articlesByCategoryResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories/${idCategory}?populate=deep,4`);

    if(!articleResponse && !articlesByCategoryResponse) {
        return {
          notFound: true
        }
    }

    const { data } = articleResponse;
    const article: PropsArticle = FormatSingleArticleData(data);

    const  { articles }: PropsCategory = FormatCategoryData(articlesByCategoryResponse.data, slug);
    const relatedArticles = articles;

    return {
        props: {
            article,
            relatedArticles
        }
    }
}