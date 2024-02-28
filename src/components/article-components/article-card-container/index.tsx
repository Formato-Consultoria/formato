import { ReactElement } from "react";
import { ArticleCard } from "../article-card";
import cx from "clsx";

export function ArticleCardContainer({
    children,
    className
}: {
    children:  ReactElement<typeof ArticleCard>|Array<ReactElement<typeof ArticleCard>>
    className?: string
}) {
    return (
        <div className={cx("grid auto-rows-auto	grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto w-full md:w-11/12 py-5 px-4 gap-y-4 gap-x-2 sm:gap-x-3 md:gap-x-5", className)}>
            {children}
        </div>
    )
}