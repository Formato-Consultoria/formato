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
      "prose lg:prose-xl prose-zinc",
      "prose-img:object-contain prose-img:h-auto prose-img:w-full prose-img:mx-0 prose-img:my-2 md:prose-img:my-3 prose-img:border-2 prose-img:border-solid prose-img:border-transparent prose-img:outline prose-img:outline-1 prose-img:outline-[var(--black-10)]", // img
      "prose-headings:font-blinker prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h1:mt-2 prose-h1:mb-3.5 prose-h2:mt-2 prose-h2:mb-3", // headings
      "prose-thead:uppercase prose-thead:bg-gray-50 prose-tr:border prose-tr:border-x-0 prose-tr:border-t-0 prose-tr:border-b-2 prose-tr:border-solid prose-tr:border-black", // table
      "prose-hr:border-[var(--black-10)] md:prose-hr:my-7", // hr
      "hover:prose-a:text-[var(--primary-color)] prose-a:underline", // a
      className
    )}>
      {children}
    </article>
  )
}