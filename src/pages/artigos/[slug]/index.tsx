
import { PropsArticle } from "@/@types/article";
import { fetcher } from "@/lib/strapi-api";
import { FormatSingleArticleData } from "@/utils/format-data-article";
import style from "./article.module.scss";

export default function Article({ article }: { article: PropsArticle }) {
    return (
        <div className={style.article_page}>
            <h2>{article.title}</h2>

            <code>{JSON.stringify(article)}</code>
        </div>
    )
}

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/article/${slug}?populate=deep`);

    const { data } = articleResponse;
    const article: PropsArticle = FormatSingleArticleData(data);

    return {
        props: {
            article
        }
    }
}