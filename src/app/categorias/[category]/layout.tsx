import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Comp } from ".";
import BannerTitle from "@/components/title-page-banner";

import { DataFormatter } from "@/utils/format-data-article";
import { PropsCategory } from "@/@types/article";

export default async function LayoutCategory({ children, params }: {
  children: ReactNode,
  params: { category: string }
}) {
  const { categorias } = await getCategories();
  const category  = categorias.find((_) => _.slug === params.category);

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
      <p className={"w-full sm:w-[500px] text-sm sm:text-base font-normal text-white/70"}>{category ? category.description : `Explore nossos artigos informativos e descubra insights valiosos sobre estratégias de negócios, inovação, gestão e muito mais. A Formato Consultoria está aqui para ajudá-lo a alcançar o sucesso empresarial.`}</p>
    </BannerTitle>

    <Comp.CategoryHashContainer>
      <Comp.CategoryHash name="All" categorySlug="all" active={"all" === params.category} />

      <>{categorias.map((_) => (
        <Comp.CategoryHash
          key={_.slug}
          name={_.name}
          categorySlug={_.slug}
          active={_.slug === params.category}
        />
      ))}</>
    </Comp.CategoryHashContainer>

    {children}
  </>)
}

async function getCategories() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories?filters[articles][id][$ne]=-1&populate=deep`, {
    next: {
      revalidate: 60
    }
  })
  const resCategory = await response.json();
  if (!resCategory || !resCategory.data) notFound();

  const categorias: Array<PropsCategory> = DataFormatter.formatCategoriesData(resCategory.data);
  const { meta } = resCategory;

  return { categorias, meta }
}

// async function getCategoryBySlug({ categorySlug }: { categorySlug: string }): Promise<{ category: PropsCategory|null }> {
//   const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/category/${categorySlug}`;
//   const response = await fetch(input, {
//     next: {
//       revalidate: 60
//     }
//   })

//   const { data } = await response.json();

//   if (!response || !data) return { category: null };
//   else {
//     const category: PropsCategory = DataFormatter.formatCategoryData(data);
//     return { category }
//   };
// }