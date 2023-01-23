import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { ImageProps } from "../../@types/image-gallery";
import cx from "clsx";

import style from "./gallery-section.module.scss";

export default function GallerySection({ images }: { images: ImageProps[] }) {
    const [imgList, setImgList] = useState<ReactElement<HTMLDivElement>[]>()

    useEffect(() => {
        setImgList(
            images.map(({ public_id, format, blurDataUrl }) => (
                <div>
                    <Image
                        style={{ transform: 'translate3d(0, 0, 0)' }}
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                        blurDataURL={blurDataUrl}
                        placeholder="blur"
                        alt="Gallery image"
                        fill
                        loading={"eager"}
                    />
                </div>
            ))
        )
    }, [])

    return (
        <section className={cx(style.gallery_section, style.section)}>
            <div className={style.content}>
                {imgList}
            </div>
        </section>
    )
}