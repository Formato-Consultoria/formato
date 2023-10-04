import { ReactNode } from "react";
import { Comp } from ".";
import { notFound } from "next/navigation";
import { DataFormatter } from "@/utils/format-data-article";
import { PropsCategory } from "@/@types/article";

export default async function LayoutCategory({ children, params }: {
  children: ReactNode,
  params: { category: string }
}) {
  const { categorias } = await getCategories();

  return (<>
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
  if(!resCategory || !resCategory.data) notFound();

  const categorias: Array<PropsCategory> = DataFormatter.formatCategoriesData(resCategory.data);
  const { meta } = resCategory;

  return { categorias, meta }
}