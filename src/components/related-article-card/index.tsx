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
  tags,
  pageSlug,
}: { categorySlug: string, tags: Array<string>, pageSlug: string }) {
  const { relatedArticleDatas } = use(getRelatedArticleData({ categorySlug, pageSlug }));
  
  if(!relatedArticleDatas || relatedArticleDatas?.length === 0) return <></>;
  else
    return (<>
      <hr style={{ height: "1px", width: "90%", outline: "none", margin: "25px auto", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }} />
      <h3 className={cx("md:self-start sm:ml-10 lg:ml-20 text-xl font-semibold md:text-2xl tracking-wide leading-relaxed mb-5 md:mb-0 text-[var(--black-80)]", blinker.className)}>RELACIONADOS</h3>

      <ArticleCardContainer className="md:gap-x-3">
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
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[category][slug][$eq]=${categorySlug}&filters[slug][$ne]=${pageSlug}&filters[author][id][$ne]=-1&pagination[page]=1&pagination[pageSize]=4&populate=deep`);
    const { data } = await response.json();
    
    if (!response || !data) return { relatedArticleDatas: null };
    else {
      const articles: Array<PropsArticle> = DataFormatter.formatMultipleArticleData(data);
      return { relatedArticleDatas: articles }
    }
  } catch(error) {
    console.log(error);
    return { relatedArticleDatas: null };
  }
}