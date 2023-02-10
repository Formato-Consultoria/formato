import Image from "next/image";
import { ImageProps } from "@/@types/image-gallery";
import cx from "clsx";

import style from "./gallery-section.module.scss";

export default function GallerySection({ images }: { images: ImageProps[] }) {
    return (
        <section className={cx(style.gallery_section, style.section)}>
            <div className={style.content}>
                {images.map(({ id, public_id, format, blurDataUrl }) => (
                    <div key={id}>
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
                ))}
            </div>
        </section>
    )
}