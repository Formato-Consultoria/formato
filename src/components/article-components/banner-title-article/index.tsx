'use client';
import { PropsCategory, PropsCover } from "@/@types/article"
import { useMediaQuery } from "react-responsive"
import { ArticleComp } from ".."
import { cn } from "@/lib/utils";
import { blinker, inter } from "@/utils/_fonts";
import Image from "next/image";

export function BannerTitleArticle({
  title,
  cover,
  category
}: { title: string, cover: PropsCover, category: PropsCategory }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 950px)'
  })
  
  return (<>
    <div
      className={cn("w-full h-[200px] flex items-center justify-center text-left relative outline outline-1 outline-black/10", inter.className)}
      style={{ marginBottom: `${isMobile ? '60px' : '30px'}` }}
    >
        <div
          className={cn("relative")}
          style={{ height: '200px', width: '100%' }}
        >
            <Image
                className="object-cover"
                style={{ filter: 'none' }}
                src={cover.url}
                alt={cover.alternativeText}
                priority
                fill
            />
        </div>

        <div className={"flex flex-col items-center justify-center gap-3 px-1 pt-2 pb-5 md:p-5 h-max w-[98%] md:w-[700px] absolute z-10 -bottom-1/4 bg-white ring-1 ring-[var(--black-10)] shadow-inner"}>
          <h1 className={cn("line-clamp-3 leading-tight md:leading-snug my-1 text-center", blinker.className)}>{title}</h1>
          <ArticleComp.Breadcrumb categorySlug={category.slug} categoryName={category.name} />
        </div>
    </div>
  </>)
}