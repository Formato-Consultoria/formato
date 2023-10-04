import Link from "next/link";
import { notFound } from "next/navigation";
import { PropsArticle, PropsCategory } from "@/@types/article";

import { DataFormatter } from "@/utils/format-data-article";

import { Comp } from ".";
import ButttonGlobal from "@/components/button";
import { NoArticle } from "@/components/images";
import NoContent from "@/components/no-content";

export default async function Category({ params }: { params: { category: string } }) {
  const { articles } = await getArticlesByCategory({ category: params.category });

  return (<>
    {articles ? (
      <Comp.ArticleCardContainer>
        {articles.map((article: PropsArticle) => {
          return (
            <Comp.ArticleCard
              key={article.id}
              article={article}
              className={"md:w-96"}
            />
          )
        })}
      </Comp.ArticleCardContainer>
    ) : (
      <NoContent image={NoArticle.src}>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-notcontent-600">204</h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Sem conteúdo 🔎</p>
              <p className="mb-4 text-lg font-light text-gray-500">Desculpe, não há conteúdo disponível nesta página no momento. Verifique novamente mais tarde ou explore outras partes do nosso site.</p>
              <Link href="/" className="inline-flex no-underline">
                <ButttonGlobal className={'bg-notcontent-600 hover:text-notcontent-600 hover:border-notcontent-600'} value="Voltar para o inicio" />
              </Link>
            </div>
          </div>
        </section>
      </NoContent>
    )}
  </>);
}

async function getArticlesByCategory({ category }: { category: string }) {
  const input: RequestInfo | URL = (category !== "all") ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[category][slug][$eq]=${category}&filters[author][id][$ne]=-1&populate=deep` : `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[author][id][$ne]=-1&populate=deep`;
  const options: RequestInit = {
    next: {
      revalidate: 60
    },
  }

  const response = await fetch(input, { ...options });
  const { data } = await response.json();

  if (!response || !data) return { articles: null };
  else {
    const articles: Array<PropsArticle> = DataFormatter.formatArticleData(data);
    return { articles }
  }
}