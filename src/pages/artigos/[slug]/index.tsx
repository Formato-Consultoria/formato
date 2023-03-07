
import { PropsArticle } from "@/@types/article";
import BannerTitle from "@/components/title-page-banner";
import { fetcher } from "@/lib/strapi-api";
import { FormatSingleArticleData } from "@/utils/format-data-article";
import style from "./article.module.scss";

export default function Article({ article }: { article: PropsArticle }) {
    const { cover, category, author } = article;

    return (<div className={style.article_page}>
        <BannerTitle
            src={cover.url}
            breadcrumbsSlug={article.slug}
            height={"250px"}
            width={"95%"}
            isBannerArticle
        />

        <h2>{article.title}</h2>
    </div>)
}

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/article/${slug}?populate=deep`);

    if(!articleResponse) {
        return {
          notFound: true
        }
    }

    const { data } = articleResponse;
    const article: PropsArticle = FormatSingleArticleData(data);

    return {
        props: {
            article
        }
    }
}