import cloudinary from "@/config/cloudinary";

import type { ImageProps } from "@/@types/image-gallery";
import { getBase64RemoteImage } from "@/lib/plaiceholder";

export default async function getImagesGallery(qntImage = 200) {
    const results = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER_GALLERY}`)
        .sort_by('public_id', 'desc')
        .max_results(qntImage)
        .execute();

    let reducedResults: Array<ImageProps> = [], i = 0;

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
        let url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`;

        return getBase64RemoteImage(url);
    })

    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

    for (let i = 0; i < reducedResults.length; i++) {
        reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
    }
    
    return {
        images: reducedResults,
    }
}