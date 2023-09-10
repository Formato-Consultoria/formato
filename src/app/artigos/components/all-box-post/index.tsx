import style from "./post-box.module.scss";

import { ReactElement } from "react";
import { BoxPost } from "../box-post";

export function AllBoxPost({
    children
}: {
    children:  ReactElement<typeof BoxPost>|Array<ReactElement<typeof BoxPost>>
}) {
    return (
        <div className={style.container_articles}>
            {children}
        </div>
    )
}