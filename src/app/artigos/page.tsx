import { PropsArticle, PropsCategory } from "@/@types/article";
import { fetcher } from "@/lib/strapi-api";
import { notFound } from "next/navigation";
import Link from "next/link";

import style from "./articles.module.scss";
import cx from "clsx";
import { inter } from "@/utils/_fonts";

import FormatArticleData from "@/utils/format-data-article";

import useSWR from "swr";
import NoContent from "@/components/no-content";
import ButttonGlobal from "@/components/button";

import { ArrowLeft, ArrowRight } from "@/components/images/phosphor";
import { NoArticle } from "@/components/images";

import Comp from './components';
import BannerTitle from "@/components/title-page-banner";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Faker, pt_BR } from '@faker-js/faker';

const faker = new Faker({
  locale: [pt_BR]
})

export function generateArticle(categorias: Array<PropsCategory>) {
    const randomIndex = Math.floor(Math.random() * categorias.length);

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
        category: categorias[randomIndex],
        author: {
          name: faker.person.fullName(),
          avatar: faker.internet.avatar(),
          email: faker.internet.email(),
        },
        body: faker.lorem.paragraphs(3),
    };
}

function generateCategory(): PropsCategory {
  return {
    name: faker.lorem.word(),
    slug: faker.lorem.slug(),
    description: faker.lorem.sentence(),
    articles: []
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

  // const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=3`, {
  //   next: {
  //     revalidate: 60
  //   }
  // });

  let hasResponse: boolean = true;
  // const articleResponse = await response.json();
  // if(!articleResponse || !articleResponse.data) notFound();

  // const { data } = articleResponse;
  // const articles: Array<PropsArticle> = FormatArticleData(data);
  // const { meta } = articleResponse;
  const { articles, categorias } = GetAllArticles();
  if(articles.length === 0) hasResponse = false;
  
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
      
      {hasResponse?
        <Tabs defaultValue="account" className="w-full md:w-11/12 mt-8">
          <TabsList className="w-full h-auto px-5 border-solid border-0 border-b-2 border-[#b50cfb]/20 overflow-y-hidden overflow-x-auto">
            {categorias.filter((_) => _.articles?.length !== 0).map((_) => (
              <TabsTrigger className={cx("h-12 border-solid border-0 data-[state=active]:border-b-2 data-[state=active]:border-[#b50cfb]", inter.className)} value={_.slug}>{_.name}</TabsTrigger>
            ))}
          </TabsList>

          {categorias.map((_) => (
            <TabsContent className={"px-5 pb-7"} value={_.slug}>
              <Comp.AllBoxPost>
                {articles.filter((artigo: PropsArticle) => artigo.category.slug === _.slug).map((article: PropsArticle) => {
                    return (
                      <Comp.BoxPost key={article.id} article={article} />
                    )
                })}
              </Comp.AllBoxPost>
            </TabsContent>
          ))}
        </Tabs>
      :
        <NoContent image={NoArticle.src}>
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

// teste
const GetAllArticles = () => {
  const categorias: Array<PropsCategory> = faker.helpers.multiple(() => generateCategory(), { count: 5 });
  const articlesGen: Array<PropsArticle> = faker.helpers.multiple(() => generateArticle(categorias), { count: 10 });

  categorias.forEach((categoria) => {
    const { articles } = categoria;
    const articlesFiltered = articlesGen.filter((_) => categoria.slug === _.category.slug);

    articles?.push(...articlesFiltered);
  })

  return { articles: articlesGen, categorias };
}