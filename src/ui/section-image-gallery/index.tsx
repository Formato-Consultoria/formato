'use client'
import Image from "next/image";
import cx from "clsx";

import style from "./gallery-section.module.scss";
import getImagesGallery from "@/utils/get-cloudinary-gallery";

// import { ImageProps } from "@/@types/image-gallery";

export function GallerySection() {
    async function exec() {
        const { images } = await getImagesGallery(5);
        // const res = await fetch('/api/gallery?n=5', {
        //     method: 'GET',
        // });

        console.log(images);
    }

    return (<>
        <section className={cx(style.gallery_section, style.section)}>
            <div className={style.content}>
                <button onClick={exec} style={{ fontWeight: 'bold' }}>TESTE</button>
                {/*
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
                ))} */}
            </div>
        </section>
    </>)
}