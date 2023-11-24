import Link from "next/link";
import { notFound } from "next/navigation";
import { PropsArticle } from "@/@types/article";

import { DataFormatter } from "@/utils/format-data-article";

import { Comp } from ".";
import ButttonGlobal from "@/components/button";
import { NoArticle } from "@/components/images";
import NoContent from "@/components/no-content";

export default async function Category({ params }: { params: { category: string } }) {
  const { articles } = await getArticlesByCategory({ category: params.category });

  const content = articles ? (
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
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[var(--primary-color)]">204</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Sem conteúdo 🔎</p>
            <p className="mb-4 text-lg font-normal text-gray-500">Desculpe, não há conteúdo disponível nesta página no momento. Verifique novamente mais tarde ou explore outras partes do nosso site.</p>
            <Link href="/" className="inline-flex no-underline">
              <ButttonGlobal className={'bg-[var(--primary-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'} value="Voltar para o inicio" />
            </Link>
          </div>
        </div>
      </section>
    </NoContent>
  )

  return content;
}

async function getArticlesByCategory({ category }: { category: string }) {
  try {
    const input: RequestInfo | URL = (category === "all") ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[category][slug][$ne]=-1&filters[author][id][$ne]=-1&populate=deep` : `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[category][slug][$eq]=${category}&filters[author][id][$ne]=-1&populate=deep`;
    const response = await fetch(input);
    if(!response) notFound();
  
    const { data } = await response.json();
  
    if (!data) return { articles: null };
    else {
      const articles: Array<PropsArticle> = DataFormatter.formatMultipleArticleData(data);
      return { articles }
    }
  } catch(error) {
    console.error("Error ao buscar artigo por categoria: ", error);
    return { articles: null };
  }
}