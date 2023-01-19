import Link from "next/link";
import Image from "next/image";

import { GetStaticProps, NextPage } from "next";

import cloudinary from "../../utils/cloudinary";
import { ImageProps } from "../../utils/types";

import style from "./gallery.module.scss";
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder";

const Gallery = ({ images }: { images: ImageProps[] }) => {
    return (
        <div className={style.img_gallery}>
            {images.map(({ id, public_id, format, blurDataUrl }) => (
                <Link
                    key={id}
                    // href={`/?photoId=${id}`}
                    href={"#"}
                    // as={`/p/${id}`}
                    // ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                    shallow
                    className={style.image}
                >
                    <Image
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                        blurDataURL={blurDataUrl}
                        placeholder="blur"
                        alt="Next.js Conf photo"
                        style={{ transform: 'translate3d(0, 0, 0)' }}
                        fill
                        loading={id < 4 ? "eager" : "lazy"}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Gallery;

export const getStaticProps: GetStaticProps = async () => {
    const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(200)
    .execute();

    let reducedResults: ImageProps[] = []
    let i = 0

    for (let result of results.resources) {
        reducedResults.push({
            id: i,
            height: result.height,
            width: result.width,
            public_id: result.public_id,
            format: result.format,
        })

        i++;
    }

    const blurImagePromises = results.resources.map((image: ImageProps) => {
        return getBase64ImageUrl(image);
    })

    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

    for (let i = 0; i < reducedResults.length; i++) {
        reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
    }
    
    return {
        props: {
            images: reducedResults,
        },
    }
}