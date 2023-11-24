'use client';
import Image from "next/image";
import cx from "clsx";

import { ImageProps } from "@/@types/image-gallery";
import { use, useEffect, useRef, useState } from "react";
import { useLastViewedPhoto } from "@/utils/useLastViewedPhoto";
import Modal from "./comp/Modal";
import Link from "next/link";

export function GallerySection() {
  const { images } = use(getImages());

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageSelected, setImageSelected] = useState(0);

  const onClose = () => {
    setTimeout(() => {
      if (isOpenModal) setIsOpenModal(false);
    }, 200);
  };

  const onOpen = () => {
    setTimeout(() => {
      if (!isOpenModal) setIsOpenModal(true);
    }, 200);
  };

  if (!images) return;

  return (<>
    <Modal
      images={images}
      currentIndex={imageSelected}
      onClose={onClose}
      isOpen={isOpenModal}
    />
    <section className={cx("w-full h-auto px-5 py-10 flex flex-wrap items-center justify-center", 'section')}>
      <div className={"flex flex-wrap gap-4 items-center justify-center"}>
        {images?.map(({ id, public_id, format, blurDataUrl }, index) => (
          <button
            key={id}
            className={"relative w-64 h-72 outline outline-1	outline-[var(--primary-color-50)] border-2 border-solid border-transparent rounded-sm"}
            onClick={() => {
              setImageSelected(index);
              onOpen();
            }}
          >
            {/* src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`} */}
            <Image
              alt="Gallery image"
              className={"object-cover"}
              style={{ transform: 'translate3d(0, 0, 0)' }}
              src={"https://res.cloudinary.com/dmbxnzbdu/image/upload/v1693840011/formato-consultoria/2022-02-04_5_esxkhd_i8ufxe.jpg"}
              blurDataURL={blurDataUrl}
              placeholder="blur"
              fill
              loading={"eager"}
            />
          </button>
        ))}
      </div>
    </section>
  </>);
}

async function getImages() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/galeria`, {
      next: {
        revalidate: 30
      }
    });
    if (!response) return { images: null };

    const images: Array<ImageProps> = await response.json();
    if (images.length === 0) return { images: null };

    return { images };
  } catch (error) {
    console.error("Error ao buscar imagens de '/api/galeria': ", error);
    return { images: null };
  }
}