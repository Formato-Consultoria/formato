import { auth_api } from "@/config/strapi-auth-api";
import { fetcher } from "@/lib/strapi";
import LastArticle from "@/ui/comp-post-box";
import { GetStaticProps } from "next";

import style from "./articles.module.scss";

export default function Articles({
  articles,
  categories,
  authors
}: any) {
    return (
      <div className={style.container_articles}>
        <div className={style.containt}>
          <LastArticle
            id={0}
            bannerImgPath="/teste/elon-musk.jpg"
            title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
            href="#"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque."
            typeBox={"LAST_BOX_POST"}
          />

          <div className={style.posts_list}>
            <LastArticle
              id={1}
              bannerImgPath="/teste/store.jpg"
              title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
              href="#"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque."
              typeBox={"BOX_POST"}
            />

            <LastArticle
              id={2}
              bannerImgPath="/teste/elon-musk.jpg"
              title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
              href="#"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque."
              typeBox={"BOX_POST"}
            />
          </div>
        </div>

        <div className={style.pagination_carousel}>

        </div>
      </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const articlesResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`, auth_api);
  const categoriesResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`, auth_api);
  const authorsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/authors`, auth_api);

  const articles = articlesResponse.data.map((article: any) => article.attributes);
  const categories = categoriesResponse.data.map((categorie: any) => categorie.attributes);
  const authors = authorsResponse.data.map((author: any) => author.attributes);

  console.log(articles);
  console.log(categories);
  console.log(authors);

  return {
    props: {
      articles: articlesResponse,
      categories: categoriesResponse,
      authors: authorsResponse
    }
  }
}