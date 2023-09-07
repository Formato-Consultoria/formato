import Link from "next/link";
import Image from "next/image";

import type { ImageProps } from "@/@types/image-gallery";

import style from "./gallery.module.scss";
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";
import getImagesGallery from "@/utils/get-cloudinary-gallery";

export default async function GalleryPage() {
    // const response = await getImagesGallery();
    // console.log(response);
    
    // const images: ImageProps[] = await response;

    return (
        <>
            <div className={style.img_gallery}>
                {/* {images.map(({ id, public_id, format, blurDataUrl }) => (
                    <Link
                        key={id}
                        href={"#"}
                        shallow
                        className={style.image}
                    >
                        <Image
                            style={{ transform: 'translate3d(0, 0, 0)' }}
                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                            blurDataURL={blurDataUrl}
                            placeholder="blur"
                            alt="Next.js Conf photo"
                            fill
                            loading={id < 4 ? "eager" : "lazy"}
                        />
                    </Link>
                ))} */}
            </div>

            <WhatsappWidgetButton />
        </>
    )
}