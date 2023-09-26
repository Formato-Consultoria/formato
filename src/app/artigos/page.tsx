'use client'
import Link from "next/link";
import { PropsArticle, PropsCategory, PropsPagination } from "@/@types/article";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";

import { Suspense } from "react";
import Loading from "./loading";
import LoadingBoxPost from "./components/box-post/loading";

import cx from "clsx";
import { inter } from "@/utils/_fonts";
import { FormatArticleData, FormatCategoriesData } from "@/utils/format-data-article";

import NoContent from "@/components/no-content";
import ButttonGlobal from "@/components/button";

import { NoArticle } from "@/components/images";

import Comp from './components';
import BannerTitle from "@/components/title-page-banner";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { Faker, pt_BR } from '@faker-js/faker';
// const faker = new Faker({
//   locale: [pt_BR]
// })

// function generateArticle(categorias: Array<PropsCategory>) {
//     const randomIndex = Math.floor(Math.random() * categorias.length);

//     return {
//         id: faker.number.int(),
//         title: faker.lorem.words(5),
//         slug: faker.lorem.slug(),
//         description: faker.lorem.sentence(),
//         updatedAt: faker.date.past(),
//         cover: {
//             name: faker.lorem.words(3),
//             alternativeText: faker.lorem.words(3),
//             url: faker.image.url(),
//         },
//         category: categorias[randomIndex],
//         author: {
//           name: faker.person.fullName(),
//           avatar: faker.internet.avatar(),
//           email: faker.internet.email(),
//         },
//         body: faker.lorem.paragraphs(3),
//     };
// }

// function generateCategory(): PropsCategory {
//   return {
//     name: faker.lorem.word(),
//     slug: faker.lorem.slug(),
//     description: faker.lorem.sentence(),
//     articles: []
//   };
// }

export default function Articles() {
  const { articles, meta } = use(getArticles());
  const { categorias } = use(getCategories());

  // useState ------------------------------------------------------------------------
  // const [articles, setArticles] = useState<Array<PropsArticle>>(rArticles);
  // const [categories, setCategories] = useState<Array<PropsCategory>>(rCategorias);
  // const [pagination, setPagination] = useState<PropsPagination['pagination']>(rMeta.pagination);

  const [hasResponse, setHasResponse] = useState(true);
  const [disabledBtn, setDisabledBtn] = useState(false);


  // const { articles, categorias } = GetAllArticles();
  if(articles.length === 0) setHasResponse(false);

  return (<>
      <BannerTitle
        src="/images/article-banner-image.png"
        styles={{
          containner: { justifyContent: 'flex-start', padding: '30px 0px' },
          content: "flex flex-col gap-4 px-10",
          image: { filter: 'brightness(1)' },
        }}
        height="100%"
      >
        <h2 className={"text-xl sm:text-2xl font-semibold text-white"}>Bem-vindo a pagina de artigos <br className="hidden sm:block" />da Formato</h2>
        <p className={"w-full sm:w-[500px] text-sm sm:text-base font-normal text-white/70"}>Explore nossos artigos informativos e descubra insights valiosos sobre estratégias de negócios, inovação, gestão e muito mais. A Formato Consultoria está aqui para ajudá-lo a alcançar o sucesso empresarial.</p>
      </BannerTitle>

      {hasResponse?<>
          <Tabs defaultValue="account" className="w-full md:w-11/12 mt-8">
            <TabsList className="w-full h-auto px-5 border-solid border-0 border-b-2 border-[#b50cfb]/20 overflow-y-hidden overflow-x-auto">
              {categorias.filter((_: PropsCategory) => _.articles?.length !== 0).map((_: PropsCategory) => (
                <TabsTrigger
                  key={_.slug}
                  className={cx("h-12 font-medium border-solid border-0 data-[state=active]:border-b-2 data-[state=active]:border-[#b50cfb]", inter.className)}
                  value={_.slug}
                >{_.name.toUpperCase()}</TabsTrigger>
              ))}
            </TabsList>

            {categorias.map((_: PropsCategory, i) => (
              <TabsContent key={i} className={"px-5 pb-7"} value={_.slug}>
                  <Comp.AllBoxPost>
                    {articles.filter((artigo: PropsArticle) => artigo.category.slug === _.slug).map((article: PropsArticle) => {
                        return (
                          <Comp.BoxPost key={article.id} article={article} />
                        )
                    })}
                  </Comp.AllBoxPost>

                  {/* <ButttonGlobal
                    className={"mx-auto my-6"}
                    onClick={() => changeFetchIndexOfArticles(pagination, setPagination, setDisabledBtn)}
                    value={"Carregar mais"}
                    disabled={disabledBtn}
                  /> */}
              </TabsContent>
            ))}
          </Tabs>
        </>
      : <NoContent image={NoArticle.src}>
          <section>
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                  <div className="mx-auto max-w-screen-sm text-center">
                      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-notcontent-600">204</h1>
                      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Sem conteúdo 🔎</p>
                      <p className="mb-4 text-lg font-light text-gray-500">Desculpe, não há conteúdo disponível nesta página no momento. Verifique novamente mais tarde ou explore outras partes do nosso site.</p>
                      <Link href="/" className="inline-flex no-underline">
                        <ButttonGlobal className={'bg-notcontent-600 hover:text-notcontent-600 hover:border-notcontent-600'} value="Voltar para o inicio"/>
                      </Link>
                  </div>   
              </div>
          </section>
        </NoContent>
      }
  </>)
}

// function changeFetchIndexOfArticles(
//   pagination: PropsPagination['pagination'],
//   setPagination: React.Dispatch<React.SetStateAction<PropsPagination['pagination']>>,
//   setDisabledBtn: React.Dispatch<React.SetStateAction<boolean>>
// ) {
//   // if(pagination.page === pagination.total) setDisabledBtn(false);
//   setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
// }

async function getArticles(props?: { page?: number, size?: number }) {
  // const nPage = props?.page ?? 1;
  // const sizePage = props?.size ?? 3;

  // &pagination[page]=${nPage}&pagination[pageSize]=${sizePage}

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc`, {
    next: {
      revalidate: 60
    }
  })

  const resArticle = await response.json();
  if(!resArticle || !resArticle.data) notFound();

  const articles: Array<PropsArticle> = FormatArticleData(resArticle.data);
  const { meta } = resArticle;

  return { articles, meta };
}

// async function getArticlesBycategory({ slugCategory }: { slugCategory: string }) {
//   const { rCategorias } = await getCategories();
//   const { articles } = rCategorias.filter(item => item.slug === slugCategory)[0];

//   return { articles }
// }

async function getCategories() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?populate=deep`, {
    next: {
      revalidate: 60
    }
  })
  const resCategory = await response.json();
  if(!resCategory || !resCategory.data) notFound();

  const categorias: Array<PropsCategory> = FormatCategoriesData(resCategory.data);
  const { meta } = resCategory;

  return { categorias, meta }
}

// Fins de teste
// const GetAllArticles = () => {
//   const categorias: Array<PropsCategory> = faker.helpers.multiple(() => generateCategory(), { count: 5 });
//   const articlesGen: Array<PropsArticle> = faker.helpers.multiple(() => generateArticle(categorias), { count: 10 });

//   categorias.forEach((categoria) => {
//     const { articles } = categoria;
//     const articlesFiltered = articlesGen.filter((_) => categoria.slug === _.category.slug);

//     articles?.push(...articlesFiltered);
//   })

//   return { articles: articlesGen, categorias };
// }

// { meta }: { meta: PropsPagination }
// export function Pagination({ meta }: { meta: PropsPagination }) {
//   return (
//       <div className={"flex items-center justify-center gap-6 h-14"}>
//           <ButttonGlobal
//               className={"rounded w-max px-3"}
//               value={
//                   <ArrowLeft
//                       className={"m-0"}
//                       size={18}
//                       color="rgb(118, 18, 134)"
//                       weight="fill"
//                   />
//               }
//               disabled
//               // onClick={() => {
//               //     setPageIndex(pageIndex - 1);
//               // }}
//           />

//           <ButttonGlobal
//               className={"rounded w-max px-3"}
//               value={
//                   <ArrowRight
//                       className={"m-0"}
//                       size={18}
//                       color="rgb(118, 18, 134)"
//                       weight="fill"
//                   />
//               }
//               // disabled={pageIndex === (data && metaPagination?.pagination?.pageCount)}
//               // onClick={() => {
//               //     setPageIndex(pageIndex + 1);
//               // }}
//           />

//           {/* <span>{`${pageIndex} de ${data && metaPagination?.pagination?.pageCount}`}</span> */}
//       </div>
//   )
// }