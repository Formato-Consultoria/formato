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
        <div className={cx("flex flex-wrap justify-center h-auto w-full py-5 px-10 sm:px-8 md:px-10 gap-y-4 gap-x-5 lg:gap-x-5", className)}>
            {children}
        </div>
    )
}