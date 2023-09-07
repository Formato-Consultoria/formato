import { NextResponse } from "next/server";
import getImagesGallery from "@/utils/get-cloudinary-gallery";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const qntImgs = searchParams.get('n');
    
    let images;
    if (qntImgs)
        images = (await getImagesGallery(Number(qntImgs))).images;
    else images = (await getImagesGallery()).images;

    return NextResponse.json(images);
}