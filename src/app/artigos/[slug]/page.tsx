import { fetcher } from "@/lib/strapi-api";

import { PropsArticle, PropsCategory } from "@/@types/article";
import BannerTitle from "@/components/title-page-banner";

import { FormatCategoryData, FormatSingleArticleData } from "@/utils/format-data-article";
import formatDateTime from "@/utils/format-date-time";
import { blinker } from "@/utils/_fonts";

import cx from "clsx";
import Link from "next/link";
import Image from "next/image";

import style from "./article.module.scss";
import { Time } from "../components/time";

import Comp from "../components";
import { notFound } from "next/navigation";

export default async function Article({ params }: { params: { slug: string } }) {
    const responseArticle = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/article/${params.slug}?populate=deep`, {
        next: {
            revalidate: 60
        }
    });
    const articleResponse = await responseArticle.json();

    const idCategory = articleResponse?.data?.attributes?.category?.data?.id ?? 0;
    const responseByCategory = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories/${idCategory}?populate=deep,4`);

    const articlesByCategoryResponse = await responseByCategory.json();
    console.log(articlesByCategoryResponse)

    if(!articleResponse || !articlesByCategoryResponse.data) notFound();

    const { data } = articleResponse;
    const article: PropsArticle = await FormatSingleArticleData(data);

    const { articles }: PropsCategory = FormatCategoryData(articlesByCategoryResponse.data, params.slug);
    const relatedArticles = articles;

    const { slug, title, description, body, updatedAt, cover, category, author } = article;
    
    return (<>
        <div className={style.article_page}>
            <BannerTitle src={cover.url} />

            <div className={style.header}>
                <div className={style.date_and_category}>
                    <Time time={new Date(updatedAt)}/>

                    <div style={{ fontSize: 13 }} className={cx(style.category_box, blinker.className)}>{category?.name}</div>
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

                    <p style={{ color: 'rgba(8, 12, 16, .)', fontWeight: 'mediumn' }}>{author?.name}</p>
                </div>) : null}
            </div>

            <div className={style.headlings}>
                <p className={blinker.className}>Nessa pagina</p>
            </div>

            <hr style={{ height: "1px", width: "90%", outline: "none", margin: "5px 20px", borderTop: "1px solid rgba(0, 0, 0, 0.1)", gridColumn: 2 }} />

            <article className={style.content}>
                {/* <MDXContent /> */}

                <div dangerouslySetInnerHTML={{ __html: article.body ?? "" }}></div>
            </article>
        </div>

        <hr style={{ height: "1px", width: "90%", outline: "none", margin: "25px auto", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />

        {relatedArticles && <Comp.AllBoxPost>
            {relatedArticles.map((article: PropsArticle) => {
                return (
                    <Comp.BoxPost key={article.id} article={article} />
                )
            })}
        </Comp.AllBoxPost>}
    </>);
}

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/article/${slug}?populate=deep`);

    const idCategory = articleResponse?.data?.attributes?.category?.data?.id ?? 0;
    const articlesByCategoryResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories/${idCategory}?populate=deep,4`);

    if (!articleResponse || !articlesByCategoryResponse.data) {
        return {
            notFound: true
        }
    }

    const { data } = articleResponse;
    const article: PropsArticle = await FormatSingleArticleData(data);

    const { articles }: PropsCategory = FormatCategoryData(articlesByCategoryResponse.data, slug);
    const relatedArticles = articles;

    return {
        props: {
            article,
            relatedArticles
        }
    }
}