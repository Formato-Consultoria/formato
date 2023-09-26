import { ReactElement } from "react";
import { BoxPost } from "../box-post";
import cx from "clsx";

export function AllBoxPost({
    children
}: {
    children:  ReactElement<typeof BoxPost>|Array<ReactElement<typeof BoxPost>>
}) {
    return (
        <div className={cx('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-x-2 md:gap-y-10 lg:gap-x-7')}>
            {children}
        </div>
    )
}