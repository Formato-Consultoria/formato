import style from "./no-content.module.scss";
import Image from "next/image";

import cx from "clsx";

interface PropsNoContent {
    image: string,
    widht?: number,
    height?: number,
    isFilter?: boolean,
    children?: string
}

export default function NoContent({
    image,
    width,
    height,
    isFilter = false,
    children
}: PropsNoContent) {
    return (
        <div className={style.container_articles}>
            <div
                className={cx(style.image_error, isFilter && style.filter)}
                style={{ width: width, height: height }}
            >
                <Image
                    src={image}
                    fill
                    alt={"Imamge de pagina de error"}
                />

                <h2>{children ?? ""}</h2>
            </div>
        </div>
    )
}