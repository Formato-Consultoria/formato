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
    <article className={cx("prose w-full prose-lg lg:prose-xl px-5 bg-[var(--white-blog)]", className)}>
      {children}
    </article>
  )
}