import { auth_api } from "@/config/strapi-cms";
import { fetcher } from "@/lib/strapi-api";
import PostBox from "@/ui/comp-post-box";
import { GetStaticProps } from "next";

import style from "./articles.module.scss";

export default function Articles() {
    return (
      <div className={style.container_articles}>
        <div className={style.containt}>
          <PostBox
            id={0}
            cover="/teste/elon-musk.jpg"
            title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
            slug="#"
            description="Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat. Praesent in mauris eu."
            updatedAt={new Date('Sat Feb 10 2023 20:00:00 GMT-0300 (Horário Padrão de Brasília)')}
            category={"techs"}
            author={{
              id: 1,
              name: "Diego C. Silva",
              avatar: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1676077854/thumb_1920_917627_0bb1cff3b5.jpg",
              email: "diegocaetano444@outlook.com"
            }}
            typeBox={"LAST_BOX_POST"}
          />

          <div className={style.posts_list}>
            <PostBox
              id={1}
              cover="/teste/elon-musk.jpg"
              title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
              slug="#"
              description="Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat. Praesent in mauris eu."
              updatedAt={new Date('Sat Feb 11 2023 18:45:33 GMT-0300 (Horário Padrão de Brasília)')}
              category={"techs"}
              author={{
                id: 1,
                name: "Diego C. Silva",
                avatar: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1676077854/thumb_1920_917627_0bb1cff3b5.jpg",
                email: "diegocaetano444@outlook.com"
              }}
              typeBox={"BOX_POST"}
            />

            <PostBox
              id={2}
              cover="/teste/elon-musk.jpg"
              title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
              slug="#"
              description="Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat. Praesent in mauris eu."
              updatedAt={new Date('Sat Feb 11 2023 18:45:33 GMT-0300 (Horário Padrão de Brasília)')}
              category={"techs"}
              author={{
                id: 1,
                name: "Diego C. Silva",
                avatar: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1676077854/thumb_1920_917627_0bb1cff3b5.jpg",
                email: "diegocaetano444@outlook.com"
              }}
              typeBox={"BOX_POST"}
            />
            
            <PostBox
              id={3}
              cover="/teste/elon-musk.jpg"
              title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
              slug="#"
              description="Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat. Praesent in mauris eu."
              updatedAt={new Date('Sat Feb 11 2023 18:45:33 GMT-0300 (Horário Padrão de Brasília)')}
              category={"techs"}
              author={{
                id: 1,
                name: "Diego C. Silva",
                avatar: "https://res.cloudinary.com/dyxtcsnna/image/upload/v1676077854/thumb_1920_917627_0bb1cff3b5.jpg",
                email: "diegocaetano444@outlook.com"
              }}
              typeBox={"BOX_POST"}
            />
          </div>
        </div>

        <div className={style.pagination_carousel}></div>
      </div>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const articlesResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`, auth_api);
//   const categoriesResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`, auth_api);
//   const authorsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/authors`, auth_api);

//   const articles = articlesResponse.data.map((article: any) => article.attributes);
//   const categories = categoriesResponse.data.map((categorie: any) => categorie.attributes);
//   const authors = authorsResponse.data.map((author: any) => author.attributes);

//   console.log(articles);
//   console.log(categories);
//   console.log(authors);

//   return {
//     props: {
//       articles: articlesResponse,
//       categories: categoriesResponse,
//       authors: authorsResponse
//     }
//   }
// }