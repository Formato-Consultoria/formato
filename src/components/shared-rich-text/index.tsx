import { PropsRichText } from "@/@types/article";
import cx from "clsx";

export function RichText({
  body
}: PropsRichText) {
  return (
    <div 
      className={cx(
        "relative w-full px-5 bg-[var(--white-blog)]",
        "prose lg:prose-lg prose-zinc", // geral
        "prose-img:object-contain prose-img:h-auto prose-img:w-full prose-img:mx-0 prose-img:my-2 md:prose-img:my-5 prose-img:border-2 prose-img:border-solid prose-img:border-transparent prose-img:outline prose-img:outline-1 prose-img:outline-[var(--black-10)]", // img
        "prose-headings:font-blinker", // headings
        "prose-table:table-auto", // table
        "prose-hr:border-[var(--black-10)] md:prose-hr:my-4",
      )}
      dangerouslySetInnerHTML={{ __html: body }}
    ></div>
  )
}