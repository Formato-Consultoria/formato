'use client';
import { PropsArticle } from "@/@types/article";
import cx from "clsx";
import { ArticleCard } from "../article-card";
import { DataFormatter } from "@/utils/format-data-article";
import { blinker } from "@/utils/_fonts";
import { ArticleCardContainer } from "../article-card-container";

import { useQuery } from "react-query";

export function RelatedArticleCards({
  categorySlug,
  tags,
  pageSlug,
}: { categorySlug: string, tags: Array<string>, pageSlug: string }) {
  const { data, error } = useQuery('telated_articles', async () => {
    const res = await getRelatedArticleData({ categorySlug, pageSlug })
    return res.relatedArticleDatas;
  });

  const relatedArticleDatas = data;
  
  if(error || !relatedArticleDatas || relatedArticleDatas.length === 0) return <></>;

  else
    return (<>
      <h3 className={cx(
        "md:self-start sm:ml-8 lg:ml-16 text-2xl font-semibold tracking-wide leading-relaxed my-5 md:mb-0 text-[var(--black-80)]",
        blinker.className
      )}>RELACIONADOS</h3>

      <ArticleCardContainer className="md:grid-cols-3 md:px-0 md:gap-x-2 lg:grid-cols-4">
        {relatedArticleDatas?.map((article: PropsArticle) => {
            return (
              <ArticleCard
                key={article.id}
                article={article}
              />
            )
        })}
      </ArticleCardContainer>
    </>);
}

// TODO: Filtrar os artigos por 'tags' em vez de 'category'
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