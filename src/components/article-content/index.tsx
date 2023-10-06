import cx from "clsx";
import { ReactNode } from "react";

export function ArticleContent({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <article className={cx(
      "relative w-full px-5 bg-[var(--white-blog)]",
      "prose lg:prose-lg prose-zinc", // geral
      "prose-img:object-contain prose-img:h-auto prose-img:w-full prose-img:mx-0 prose-img:my-2 md:prose-img:my-3 prose-img:border-2 prose-img:border-solid prose-img:border-transparent prose-img:outline prose-img:outline-1 prose-img:outline-[var(--black-10)]", // img
      "prose-headings:font-blinker", // headings
      "prose-table:table-auto prose-table:border prose-table:border-solid prose-table:border-[var(--black-10)] prose-tr:bg-[var(--white-mediumn)] prose-tr:pl-5 transition-all duration-150 ease-linear	prose-tr:brightness-90 hover:prose-tr:brightness-95", // table
      "prose-hr:border-[var(--black-10)] md:prose-hr:my-7", // hr
      "hover:prose-a:text-[var(--primary-color)]", // a
      className
    )}>
      {children}
    </article>
  )
}