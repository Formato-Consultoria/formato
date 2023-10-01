import { ReactNode } from "react";

import { PropsCategory } from "@/@types/article";
import { DataFormatter } from "@/utils/format-data-article";

import BannerTitle from "@/components/title-page-banner";

export default async function LayoutArticles({
  children,
  params
}: {
  children: ReactNode,
  params: { category: string }
}) {
  const { category } = await getCategoryBySlug({ categorySlug: params.category });

  return (
    <>
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
        <p className={"w-full sm:w-[500px] text-sm sm:text-base font-normal text-white/70"}>{category ? category.description : `Explore nossos artigos informativos e descubra insights valiosos sobre estratégias de negócios, inovação, gestão e muito mais. A Formato Consultoria está aqui para ajudá-lo a alcançar o sucesso empresarial.`}</p>
      </BannerTitle>
            
      {children}
    </>
  )
}

async function getCategoryBySlug({ categorySlug }: { categorySlug: string }): Promise<{ category: PropsCategory|null }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/category/${categorySlug}`, {
    next: {
      revalidate: 60
    }
  })

  const { data } = await response.json();

  if (!response || !data) return { category: null };
  else {
    const category: PropsCategory = DataFormatter.formatCategoryData(data);
    return { category }
  };
}