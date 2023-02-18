import { PropsArticle, PropsPagination } from "@/@types/article";
import { fetcher } from "@/lib/strapi-api";
import PostBox from "@/ui/comp-post-box";
import { useEffect, useState } from "react";

import style from "./articles.module.scss";
import cx from "clsx";

// import { BnrAlternative, NoArticle, Person } from "@/components/images";
import FormatDataArticle from "@/utils/format-data-article";

import useSWR from "swr";
import NotContent from "@/components/no-content";
import ButttonGlobal from "@/components/button";
import { ArrowLeft, ArrowRight } from "phosphor-react";

export default function Articles({ articles, meta }: { articles: PropsArticle[], meta: PropsPagination }) {
  const [allPosted, setAllPosted] = useState<PropsArticle[]>([]);
  const firstArticle: PropsArticle = articles[0];
  
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=5`,
    fetcher, { fallbackData: articles.slice(1) }
  )

  useEffect(() => {
    setAllPosted(data);
  }, [data])
  
  return (
    <div className={style.container_articles}>{
      (articles.length > 0) ? (
        <div className={style.containt}>
          <PostBox
            id={firstArticle?.id}
            title={firstArticle?.title}
            slug={firstArticle?.slug}
            description={firstArticle?.description}
            updatedAt={new Date(firstArticle?.updatedAt ?? InitialProps.updatedAt)}
            cover={firstArticle?.cover}
            category={firstArticle?.category}
            author={firstArticle?.author}
          />

          <div className={style.posts_list_1}>
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
              onClick={() => setPageIndex(pageIndex -1)}
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
              disabled={pageIndex === (data && meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex +1)}
            />

            <span>{`${pageIndex} de ${data && meta.pagination.pageCount}`}</span>
          </div>
        </div>
      ) : ( <NotContent />)
    }</div>
  )
}

export async function getStaticProps() {
  const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&pagination[page]=1&pagination[pageSize]=5`);

  if(!articleResponse) {
    return {
      notFound: true
    }
  }

  const { data } = articleResponse;
  const articles: PropsArticle[] = FormatDataArticle(data).reverse();
  
  const { meta } = articleResponse;
  
  return {
    props: {
      articles,
      meta,
    },
    revalidate: 30
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