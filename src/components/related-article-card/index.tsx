'use client';
import { PropsArticle } from "@/@types/article";
import cx from "clsx";
import { ArticleCard } from "../article-card";
import { DataFormatter } from "@/utils/format-data-article";
import { blinker } from "@/utils/_fonts";
import { use } from "react";
import { ArticleCardContainer } from "../article-card-container";

export function RelatedArticleCards({
  categorySlug,
  pageSlug,
}: { categorySlug: string, pageSlug: string }) {
  const { relatedArticleDatas } = use(getRelatedArticleData({ categorySlug, pageSlug }));
  
  if(!relatedArticleDatas || relatedArticleDatas?.length === 0) return <></>;
  else
    return (<>
      <hr style={{ height: "1px", width: "90%", outline: "none", margin: "25px auto", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />
      <h3 className={cx("md:self-start sm:ml-10 lg:ml-20 text-xl font-semibold md:text-2xl tracking-wide leading-relaxed mb-5 md:mb-10 text-[var(--black-80)]", blinker.className)}>RELACIONADOS</h3>

      <ArticleCardContainer>
        {relatedArticleDatas?.map((article: PropsArticle) => {
            return (
              <ArticleCard
                key={article.id}
                className={"sm:w-96"}
                article={article}
              />
            )
        })}
      </ArticleCardContainer>
    </>);
}

async function getRelatedArticleData({
  categorySlug,
  pageSlug
}: { categorySlug: string, pageSlug: string }) {
  const options: RequestInit = {
    next: {
      revalidate: 60
    },
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[category][slug][$eq]=${categorySlug}&filters[slug][$ne]=${pageSlug}&pagination[page]=1&pagination[pageSize]=3&populate=deep`, {...options});
  const { data } = await response.json();
  
  if (!response || !data) return { relatedArticleDatas: null };
  else {
    const articles: Array<PropsArticle> = DataFormatter.formatArticleData(data);
    return { relatedArticleDatas: articles }
  }
}