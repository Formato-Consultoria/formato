import Image from "next/image";
import cx from "clsx";
import { ReactNode } from "react";

interface PropsNoContent {
    image: string,
    children: ReactNode
}

export default function NoContent({
    image,
    children
}: PropsNoContent) {
    return (
        <div className={cx("w-full flex items-center justify-center relative")}>
            <div
                className={cx("absolute z-10 h-[180px] w-[180px] sm:h-[350px] sm:w-[350px]")}
            >
                <Image
                    className="object-contain grayscale brightness-100 opacity-10"
                    src={image}
                    fill
                    alt={"Imagem, pagina de error"}
                />
            </div>

            <div className={"w-full h-auto z-20 flex flex-col items-center justify-center"}>{children}</div>
        </div>
    )
}