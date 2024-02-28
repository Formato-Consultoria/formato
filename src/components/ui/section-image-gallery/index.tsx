// 'use client';
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import style from "./gallery-section.module.scss";
import { ImageProps } from "@/@types/image-gallery";

export default function GallerySection() {
    // const { images } = use(getImages());

    // if(images)
        return (<>
            <section className={cn(style.gallery_section, style.section)}>
                <div className={style.content}>
                    {/* {images && images.map(({ id, public_id, format, blurDataUrl }) => (
                        <div key={id} className={"group ring-2 ring-transparent hover:ring-[var(--primary-color-50)]"}>
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
    // else return <></>;
}

// async function getImages() {
//     const response = await fetch(`${process.env.BASE_URL}/api/galeria?n=5`, {
//         next: {
//             revalidate: 10
//         }
//     });
//     if(!response) return { images: null };

//     const images: Array<ImageProps> = await response.json();
//     if(images.length === 0) return { images: null };

//     return { images };
// }