'use client';
import { PropsCategory, PropsCover } from "@/@types/article"
import BannerTitle from "@/components/title-page-banner"
import { useMediaQuery } from "react-responsive"
import { Comp } from ".."
import cx from "clsx";
import { blinker } from "@/utils/_fonts";

export function BannerTitleArticle({
  title,
  cover,
  category
}: { title: string, cover: PropsCover, category: PropsCategory }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 950px)'
  })
  
  return (
    <BannerTitle
        src={cover.url}
        height={"180px"}
        styles={{
            containner: { width: '100%', marginBottom: `${isMobile ? '50px' : '20px'}`, outline: '1px solid rgba(0, 0, 0, .2)' },
            image: { filter: 'none' },
            content: "flex flex-col items-center justify-center gap-3 p-5 h-max w-11/12  md:w-[700px] absolute z-10 -bottom-1/4 bg-white ring-1 ring-[var(--black-10)] shadow-inner"
        }}
    >
        <h1 className={cx("line-clamp-3 leading-tight md:leading-snug my-1 text-center", blinker.className)}>{title}</h1>
        <Comp.Breadcrumb categorySlug={category.slug} categoryName={category.name} />
    </BannerTitle>
  )
}