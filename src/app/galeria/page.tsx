import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import type { ImageProps } from "@/@types/image-gallery";

import style from "./gallery.module.scss";
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";
import { NoArticle } from "@/components/images";
import NoContent from "@/components/no-content";
import ButttonGlobal from "@/components/button";

export const metadata: Metadata = {
    title: "Nossa Galeria",
    description: "Explore nossa galeria de imagens e mergulhe em nossa história visual. Veja fotos incríveis que capturam momentos especiais e realizações ao longo do tempo.",
}

export default async function GalleryPage() {
    const { images } = await getImages();

    if(images)
        return (
            <>
                <div className={style.img_gallery}>
                    {images.map(({ id, public_id, format, blurDataUrl }: ImageProps) => (
                        <Link
                            key={id}
                            href={"#"}
                            shallow
                            className={style.image}
                        >
                            <Image
                                style={{ transform: 'translate3d(0, 0, 0)' }}
                                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                                blurDataURL={blurDataUrl ?? '/TesteBlur.jpg'}
                                placeholder="blur"
                                alt="Next.js Conf photo"
                                fill
                                loading={id < 4 ? "eager" : "lazy"}
                            />
                        </Link>
                    ))}
                </div>
    
                <WhatsappWidgetButton />
            </>
        )
    else
        <NoContent image={NoArticle.src}>
            <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-notcontent-600">204</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Sem conteúdo 🔎</p>
                <p className="mb-4 text-lg font-light text-gray-500">Desculpe, não há conteúdo disponível nesta página no momento. Verifique novamente mais tarde ou explore outras partes do nosso site.</p>
                <Link href="/" className="inline-flex no-underline">
                    <ButttonGlobal className={'bg-notcontent-600 hover:text-notcontent-600 hover:border-notcontent-600'} value="Voltar para o inicio" />
                </Link>
                </div>
            </div>
            </section>
        </NoContent>
}

async function getImages() {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/galeria`, {
            next: {
                revalidate: 10
            }
        });

        if(!response) notFound();
        const images: Array<ImageProps> = await response.json();

        if(images.length === 0) return { images: null };

        return { images }
    } catch (error) {
        notFound();
    }
}