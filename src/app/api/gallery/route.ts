import { NextResponse } from "next/server";
import getImagesGallery from "@/utils/get-cloudinary-gallery";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const qntImgs = searchParams.get('n');

    let res;
    if(qntImgs)
        res = await getImagesGallery(Number(qntImgs));
    else 
        res = await getImagesGallery();

    const { images } = res;


    return NextResponse.json({ n: qntImgs, imagens: images });
}