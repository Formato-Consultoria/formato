import { PropsArticle, PropsPagination } from "@/@types/article";
import { fetcher } from "@/lib/strapi-api";
import PostBox from "@/ui/comp-post-box";
import { useEffect, useRef, useState } from "react";

import style from "./articles.module.scss";
import cx from "clsx";

import FormatArticleData from "@/utils/format-data-article";

import useSWR from "swr";
import NoContent from "@/components/no-content";
import ButttonGlobal from "@/components/button";
import { NoArticle } from "@/components/images";
import { ArrowLeft, ArrowRight } from "phosphor-react";

export default function Articles({
  articles,
  meta
}: {
  articles: PropsArticle[],
  meta: PropsPagination
}) {
  const [firstPosted, setFirstPosted] = useState<PropsArticle>(articles[0]);
  const [allPosted, setAllPosted] = useState<PropsArticle[]>([]);
  const [metaPagination, setMetaPagination] = useState<PropsPagination>(meta);
  const refPostList = useRef<HTMLDivElement>(null);
  
  const [pageIndex, setPageIndex] = useState(1);
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=${pageIndex}&pagination[pageSize]=3`,
    fetcher, {
      fallbackData: articles,
    }
  )
    
  useEffect(() => {
    if (!isLoading) {
      setMetaPagination(data.meta);

      if(pageIndex === 1) {
        setFirstPosted(FormatArticleData(data.data)[0]);
        setAllPosted(FormatArticleData(data.data).slice(1));
      } else {
        setAllPosted(FormatArticleData(data.data));
      }
    }

    if(pageIndex === 1)
      window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      refPostList.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [data]);
  
  return (
    <div className={style.container_articles}>{
      (articles.length > 0) ? (
        <div className={style.containt}>
          <PostBox
            id={firstPosted?.id}
            title={firstPosted?.title}
            slug={firstPosted?.slug}
            description={firstPosted?.description}
            updatedAt={new Date(firstPosted?.updatedAt ?? InitialProps.updatedAt)}
            cover={firstPosted?.cover}
            category={firstPosted?.category}
            author={firstPosted?.author}
          />

          <div
            ref={refPostList}
            className={style.posts_list_1}
          >
            {allPosted.map((post: PropsArticle, index) => (
              <PostBox 
                key={index}
                id={post.id}
                title={post.title}
                slug={post.slug}
                description={post.description}
                updatedAt={new Date(post.updatedAt ?? InitialProps.updatedAt)}
                cover={post.cover}
                category={post.category}
                author={post.author}
                typeBox={"BOX_POST"}
              />
            ))}
          </div>

          <div className={style.pagination_btn}>
            <ButttonGlobal
              className={style.button_pag}
              value={
                <ArrowLeft
                  size={25}
                  color="rgb(118, 18, 134)"
                  weight="fill"
                />
              }
              disabled={pageIndex === 1}
              onClick={() => {
                setPageIndex(pageIndex -1);
              }}
            />

            <ButttonGlobal
              className={style.button_pag}
              value={
                <ArrowRight
                  size={25}
                  color="rgb(118, 18, 134)"
                  weight="fill"
                />
              }
              disabled={pageIndex === (data && metaPagination.pagination.pageCount)}
              onClick={() => {
                setPageIndex(pageIndex +1);
              }}
            />

            <span>{`${pageIndex} de ${data && metaPagination.pagination.pageCount}`}</span>
          </div>
        </div>
      ) : (
        <NoContent
          image={NoArticle.src}
          width={250}
          height={250}
          isFilter
        >Desculpe, ainda não temos nenhum conteudo! 🔎</NoContent>
      )
    }</div>
  )
}

export async function getStaticProps() {
  const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=3`);

  if(!articleResponse.data) {
    return {
      notFound: true
    }
  }

  const { data } = articleResponse;
  const articles: PropsArticle[] = FormatArticleData(data);

  const { meta } = articleResponse;
  
  return {
    props: {
      articles,
      meta
    },
    revalidate: 60
  }
}

const InitialProps = {
  id: 0,
  title: '',
  slug: '',
  description: '',
  updatedAt: new Date(),
  cover: {
    name: '',
    alternativeText: '',
    url: ''
  },
  category:{
    name: '',
    slug: '',
    description: ''
  },
  author: {
    name: '',
    slug: '',
    description: ''
  }
}