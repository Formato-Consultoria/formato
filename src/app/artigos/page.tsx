import { PropsArticle } from "@/@types/article";
import { fetcher } from "@/lib/strapi-api";
import { notFound } from "next/navigation";

import style from "./articles.module.scss";
import cx from "clsx";

import FormatArticleData from "@/utils/format-data-article";

import useSWR from "swr";
import NoContent from "@/components/no-content";
import ButttonGlobal from "@/components/button";

import { ArrowLeft, ArrowRight } from "@/components/images/phosphor";
import { NoArticle } from "@/components/images";

import Comp from './components';
import BannerTitle from "@/components/title-page-banner";

// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

import { Faker, pt_BR } from '@faker-js/faker';

const faker = new Faker({
  locale: [pt_BR]
})

export function generateArticle() {
    return {
        id: faker.number.int(),
        title: faker.lorem.words(5),
        slug: faker.lorem.slug(),
        description: faker.lorem.sentence(),
        updatedAt: faker.date.past(),
        cover: {
            name: faker.lorem.words(3),
            alternativeText: faker.lorem.words(3),
            url: faker.image.url(),
        },
        category: {
            name: faker.lorem.word(),
            slug: faker.lorem.slug(),
            description: faker.lorem.sentence(),
        },
        author: {
            name: faker.person.fullName(),
            avatar: faker.internet.avatar(),
            email: faker.internet.email(),
        },
        body: faker.lorem.paragraphs(3),
    };
}

export default async function Articles() {
  // const [firstPosted, setFirstPosted] = useState<PropsArticle>(articles[0]);
  // const [allPosted, setAllPosted] = useState<PropsArticle[]>([]);
  // const [metaPagination, setMetaPagination] = useState<PropsPagination>(meta);
  // const refPostList = useRef<HTMLDivElement>(null);
  
  // const [pageIndex, setPageIndex] = useState(1);
  // const { data, isLoading } = useSWR(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=${pageIndex}&pagination[pageSize]=3`,
  //   fetcher,
  //   { fallbackData: articles }
  // )

  // TODO: Implementar skeleton loading
  // useEffect(() => {
    // async function exec() {
    //   if (!isLoading) {
    //     setMetaPagination(data.meta);
  
    //     if(pageIndex === 1) {
    //       setFirstPosted((await FormatArticleData(data.data))[0]);
    //       setAllPosted((await FormatArticleData(data.data)).slice(1));
    //     } else {
    //       setAllPosted(await FormatArticleData(data.data));
    //     }
    //   }
    // }
    // exec();

  //   if(pageIndex === 1)
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   else {
  //     refPostList.current?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // }, [data]);

  // -----------------------------------------------------------------------------

  // const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=3`);
  
  // if(!articleResponse || !articleResponse.data) notFound();

  // const { data } = articleResponse;
  // const articles: Array<PropsArticle> = FormatArticleData(data);
  // const { meta } = articleResponse;
  
  return (<>
      <BannerTitle
        src="/images/article-banner-image-01.png"
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
      
      {GetAllArticles().then((items) => {
        const articles: Array<PropsArticle> = items as Array<PropsArticle>

        return (<>
          <Comp.AllBoxPost>
            {articles.map((article: PropsArticle) => {
                return (
                  <Comp.BoxPost key={article.id} article={article} />
                )
            })}
          </Comp.AllBoxPost>
          {/* <Comp.Pagination meta={meta}/> */}
        </>)
      }).catch((err: any) => {
          return (
              <NoContent
                  image={NoArticle.src}
                  width={250}
                  height={250}
                  isFilter
              >Desculpe, ainda não temos nenhum conteudo! 🔎</NoContent>
          )
      })}
  </>)
}

// export async function getStaticProps() {
//   const articleResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=3`);
  
//   if(!articleResponse || !articleResponse.data) {
//     return {
//       notFound: true
//     }
//   }
  
//   const { data } = articleResponse;
//   const articles: Array<PropsArticle> = FormatArticleData(data);
//   const { meta } = articleResponse;
  
//   return {
//     props: {
//       articles,
//       meta
//     },
//     revalidate: 60
//   }
// }

const GetAllArticles = async () => {
  const articles = new Promise((resolve, reject) => {
      const articles: Array<PropsArticle> = faker.helpers.multiple(() => generateArticle(), { count: 5 });
      resolve(articles);
  }).catch((err: any) => {
      throw Error(err);
  })

  return articles;
}