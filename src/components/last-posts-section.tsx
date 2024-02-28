'use client';
import { PropsArticle } from "@/@types/article";
import { DataFormatter } from "@/utils/format-data-article";

import { useQuery } from "react-query";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { blinker, inter } from "@/utils/_fonts";
import { Time } from "./article-components/time";
import { UserAvatar } from "./article-components/avatar";

import { ArticleCard } from "./article-components/article-card";
import { ArticleCardContainer } from "./article-components/article-card-container";
import ButttonGlobal from "./button";

export default function LastPostSection () {
    const { data, isLoading } = useQuery('last_articles', async () => {
        const { articles } = await getLastArticles();

        return {
            articles
        }
    }, {
        staleTime: 1000 * 60 * 5 // 10 min
    })

    const articles = data?.articles!

    if(isLoading) {
        return (
            <div className="h-[500px] w-full grid auto-cols-auto grid-cols-5 grid-rows-2 gap-2 py-5 px-4">
                <div className="col-start-1 row-span-full col-end-4 rounded-lg bg-gray-300 animate-pulse" />
                <div className="w-full col-span-2 row-start-1 rounded-lg bg-gray-300 animate-pulse" />
                <div className="w-full col-span-2 row-start-2 rounded-lg bg-gray-300 animate-pulse" />
            </div>
        )
    }

    console.log(articles)

    return (
        <>{(articles && articles?.length != 0) && (
            <section className="flex flex-col w-full h-auto" style={{ margin: '50px 0' }}>
                <div className="px-5 w-full flex justify-between">
                    <h2 className={cn(blinker.className, "text-black/80 text-2xl md:text-3xl font-medium")}>ÚLTIMOS ARTIGOS</h2>

                    <Link
                        href={"/categorias/all"}
                        className="no-underline"
                    >
                        <ButttonGlobal
                            className="hover:text-[var(--primary-color)]"
                            value={"ver todos"}
                        />
                    </Link>
                </div>

                <div className={
                    "hidden lg:grid auto-cols-auto grid-cols-5 grid-rows-2 gap-2 w-full h-[550px] py-5 px-4"
                }>
                    {articles[0] && <ArticleCardCustom
                        article={articles[0]}
                        className={cn(
                            "col-start-1 col-end-4 row-span-full",
                        )}
                    />}

                    {articles[1] && <ArticleCardCustomTwo 
                        article={articles[1]}
                        className="w-full col-span-2 row-start-1"
                    />}
                    
                    {articles[2] && <ArticleCardCustomTwo 
                        article={articles[2]}
                        className="w-full col-span-2 row-start-2"
                    />}
                </div>

                <ArticleCardContainer className={"lg:hidden gap-y-5"}>
                    {articles.map((article: PropsArticle) => {
                        return ( 
                            <ArticleCard
                                key={article.id}
                                article={article}
                            />
                        )
                    })}
                </ArticleCardContainer>
            </section>
        )}</>
    )
}

async function getLastArticles() {
    const TIMEOUT = 3000;
  
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
  
    try {
      const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[category][slug][$ne]=-1&filters[author][id][$ne]=-1&&sort=updatedAt:desc&pagination[page]=1&pagination[pageSize]=3&populate=deep`;
      const response = await fetch(input, { signal: controller.signal });

      if(!response) <></>;
    
      const { data } = await response.json();
    
      if (!data) return { articles: null };
      else {
        const articles: Array<PropsArticle> = DataFormatter.formatMultipleArticleData(data);
        return { articles }
      }
    } catch(error) {
      console.error("Error ao buscar artigo por categoria: ", error);
      return { articles: null };
    } finally {
      clearTimeout(timeoutId);
    }
}

// componentes
function ArticleCardCustom({ article, className }: { article: PropsArticle, className?: string }) {
    const { slug, title, description, updatedAt, cover, category, author } = article;

    return (
        <div
            className={cn("h-auto w-full rounded-lg relative",
                className,
                inter.className
            )}
        >
            <div className={"absolute -z-10 w-full h-full overflow-hidden rounded-2xl bg-violet-500"}> 
                {cover && <Image
                    className={"object-cover rounded-2xl md:scale-125 brightness-50"}
                    src={cover.url}
                    fill
                    alt={cover.alternativeText}
                />}
            </div>

            <div
                className="group md:w-4/5 lg:w-4/6 h-max bg-white/80 absolute right-0 top-1/4 space-y-2 p-5 border border-solid border-y-2 border-l-2 border-white"
            >
                <h3 className={cn("text-3xl px-2", blinker.className)}>
                    <Link
                        className={"text-[var(--primary-color)] group-hover:text-[var(--link-color)] delay-100 ease-in-out no-underline"}
                        href={`/artigos/${slug}`}
                    >{title}</Link>
                </h3>

                <Time time={new Date(updatedAt)} className="text-black/80" />
    
                <p className={cn("text-xl text-black/75 px-2 mb-2 line-clamp-3 leading-snug", blinker.className)}>{description}</p>

                <div className={cn("text-xs font-semibold w-max mx-2 px-2 mb-1 rounded-full uppercase text-white/90 bg-[var(--link-color-60)] ring-1 ring-[var(--link-color)]", blinker.className)}>{category?.name}</div>

                <div className={"h-11 w-full pl-2 pr-3 mt-auto flex items-center justify-between"}>
                    <div className={"flex items-center gap-1"}>
                        <UserAvatar author={author} className='h-5 w-5' />
                        <p className={"text-sm font-medium text-black/80"}>{author.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function ArticleCardCustomTwo({ article, className }: { article: PropsArticle, className?: string }) {
    const { slug, title, description, updatedAt, cover, category, author } = article;

    return (
        <div
            className={cn("flex flex-row group h-auto w-full rounded-lg no-underline", //bg-[var(--white-mediumn)] ring-1 ring-[var(--black-10)] sm:w-72 rounded-md
                className,
                inter.className
            )}
        >
            <div className={"relative md:basis-5/12  lg:basis-1/3 h-full overflow-hidden rounded-xl bg-violet-500"}> 
                {cover && <Image
                    className={"object-cover rounded "}
                    src={cover.url}
                    fill
                    alt={cover.alternativeText}
                />}
            </div>

            <div className="md:basis-7/12 lg:basis-2/3  md:space-y-1.5">
                <Time time={new Date(updatedAt)}  />

                <h3 className={cn("px-2", blinker.className)}>
                    <Link
                        className={"text-[var(--primary-color)] group-hover:text-[var(--link-color)] delay-100 ease-in-out no-underline"}
                        href={`/artigos/${slug}`}
                    >{title}</Link>
                </h3>

                <p className={cn("text-base text-[var(--black-dark-50)] px-2 mb-2 line-clamp-2 leading-snug", blinker.className)}>{description}</p>

                <div className={cn("text-xs font-semibold w-max mx-2 px-2 mb-1 rounded-full uppercase text-white/90 bg-[var(--link-color-60)] ring-1 ring-[var(--link-color)]", blinker.className)}>{category?.name}</div>

                <div className={"h-11 w-full pl-2 pr-3 mt-auto flex items-center justify-between"}>
                    <div className={"flex items-center gap-1"}>
                        <UserAvatar author={author} className='h-5 w-5' />
                        <p className={"text-sm font-medium text-[var(--black-dark-80)]"}>{author.name}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}