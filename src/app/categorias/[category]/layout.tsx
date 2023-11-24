import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Comp } from ".";
import BannerTitle from "@/components/title-page-banner";

import { DataFormatter } from "@/utils/format-data-article";
import { PropsCategory } from "@/@types/article";
import { NoArticle } from "@/components/images";
import NoContent from "@/components/no-content";
import Link from "next/link";
import ButttonGlobal from "@/components/button";
import { Metadata } from "next";

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await getCategoryBySlug({ categorySlug: params.category });

  if(category) {
    return {
      title: `Artigos sobre ${category.name}`,
      description: category.description,
    }
  }

  return {
    title: 'Todos os Artigos',
    description: "Explore nossos artigos informativos e descubra insights valiosos sobre estratégias de negócios, inovação, gestão e muito mais. Estamos aqui para ajudá-lo a alcançar seu sucesso empresarial.",
  }
}

export const revalidate = 60;

export default async function LayoutCategory({ children, params }: {
  children: ReactNode,
  params: { category: string }
}) {
  const { categorias, isNotAllEmpty } = await getCategories();
  const category  = categorias?.find((_) => _.slug === params.category);

  const content = (isNotAllEmpty || categorias) ? (
    <>
      <Comp.CategoryHashContainer>
        <Comp.CategoryHash name="All" categorySlug="all" active={"all" === params.category} />
  
        <>{categorias?.map((_) => (
          <Comp.CategoryHash
            key={_.slug}
            name={_.name}
            categorySlug={_.slug}
            active={_.slug === params.category}
          />
        ))}</>
      </Comp.CategoryHashContainer>

      {children}
    </>
  ):(
    <NoContent image={NoArticle.src}>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-notcontent-600">204</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Sem conteúdo 🔎</p>
            <p className="mb-4 text-lg font-light text-gray-500">Desculpe, não há conteúdo disponível nesta página no momento. Verifique novamente mais tarde ou explore outras partes do nosso site.</p>
            <Link href="/" className="inline-flex no-underline">
              <ButttonGlobal className={'bg-notcontent-600 hover:text-notcontent-600 hover:border-notcontent-600'} value="Voltar para o inicio" />
            </Link>
          </div>
        </div>
      </section>
    </NoContent>
  );

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
      <h2 className={"text-xl sm:text-2xl text-white"}>
        Bem-vindo a pagina de artigos <br className="hidden sm:block" />{category ? `sobre ${category.name}` : "da Formato"}
      </h2>
      <p className={"w-full sm:w-[500px] text-sm sm:text-base font-normal text-white/70"}>{category ? category.description : `Explore nossos artigos informativos e descubra insights valiosos sobre estratégias de negócios, inovação, gestão e muito mais. Estamos aqui para ajudá-lo a alcançar seu sucesso empresarial.`}</p>
    </BannerTitle>

    {content}

  </>)
}


async function getCategories() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?filters[articles][id][$ne]=-1&populate=deep`);
    if(!response) notFound();
    const { data, meta } = await response.json();
    
    if (data.length === 0) return { categorias: null, isNotAllEmpty: false };
    else {
      const categorias: Array<PropsCategory> = DataFormatter.formatCategoriesData(data);
  
      for(let category of categorias) {
        if(category.articles?.length === 0) {
          return { categorias: null, isNotAllEmpty: false };
        }
      }
      
      return { categorias, meta, isNotAllEmpty: true }
    }
  } catch(error) {
    console.error("Error ao buscar todas as categorias: ", error);
    return { categorias: null, isNotAllEmpty: false }
  }
}

async function getCategoryBySlug({ categorySlug }: { categorySlug: string }): Promise<{ category: PropsCategory|null }> {
  try {
    const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/category/${categorySlug}`;
    const response = await fetch(input);
  
    if(response) {
      const { data } = await response.json();
      if (!data || data.length === 0) return { category: null };
      else {
        const category: PropsCategory = DataFormatter.formatCategoryData(data);
        return { category }
      };
    }
  
    return { category: null };
  } catch (error) {
    console.error("Error ao buscar categoria pela slug: ", error);
    return { category: null };
  }
}