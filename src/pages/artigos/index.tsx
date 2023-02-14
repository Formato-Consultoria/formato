import { PropsArticle } from "@/@types/article";
import { fetcher } from "@/lib/strapi-api";
import PostBox from "@/ui/comp-post-box";
import { id } from "date-fns/locale";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

import style from "./articles.module.scss";
import cx from "clsx";
import { NoArticle } from "@/components/images";
import FormatDataArticle from "@/utils/format-data-article";
import { initStateArticle } from "@/utils/initial-state-post-box";

import useSWR from "swr";

export default function Articles({ articles }: { articles: PropsArticle[] }) {
  const [lastPost, setLastPost] = useState<PropsArticle>(initStateArticle);
  const [allLatestPosted, setAllLatestPosted] = useState<PropsArticle[]>([initStateArticle]);

  const [containData, setContainData] = useState(false);
  
  // const [pageIndex, setPageIndex] = useState(1);
  // const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=5`, fetcher, {
  //     fallbackData: articles
  //   })
  
  useEffect(() => {
    setContainData(articles.length > 0);
    setLastPost(articles[0]);
    setAllLatestPosted(articles.slice(1));
  }, [])
  
  return (
    <div className={style.container_articles}>{containData ?
      <div className={style.containt}>
        <PostBox 
          id={lastPost.id}
          title={cx(lastPost.title)}
          slug={lastPost.slug}
          description={lastPost.description}
          updatedAt={new Date(lastPost.updatedAt)}
          cover={lastPost.cover}
          category={lastPost.category}
          author={lastPost.author}
          typeBox={"LAST_BOX_POST"}
        />

        <div className={style.posts_list}>
          {allLatestPosted.map((post: PropsArticle) => (
            <PostBox 
              key={post.id}
              id={post.id}
              title={cx(post.title)}
              slug={post.slug}
              description={post.description}
              updatedAt={new Date(post.updatedAt)}
              cover={post.cover}
              category={post.category}
              author={post.author}
              typeBox={"BOX_POST"}
            />
          ))}
        </div>

      {/* <div className={style.pagination_carousel}></div> */}
      </div>
      :
      <div className={style.image_content_notfound}>
          <Image
            src={NoArticle.src}
            fill
            alt={"imagem para nenhum artigo postado ainda"}
          />

          <h2>Nehum artigo postado ainda! :(</h2>
      </div>
    }</div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&pagination[page]=1&pagination[pageSize]=5`);
  const articles = FormatDataArticle(data).reverse();

  return {
    props: {
      articles,
    },
    revalidate: 30
  }
}