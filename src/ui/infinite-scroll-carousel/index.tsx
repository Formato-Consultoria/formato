import { ReactElement, ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';

import style from './infinite-scroll-carousel.module.scss';
import { PathImages } from '@/@types/path-image';

export default function InfiniteScrollCarousel({ images }: PathImages) {
    const [imgList, setImgList] = useState<ReactElement<HTMLDivElement>[]>()

    useEffect(() => {
        setImgList(
            images.map((img, index) => (
                <div>
                    <Image
                        key={index}
                        src={img}
                        fill
                        alt={`image_service_${index}`}
                    />
                </div>
            ))
        )
    }, [])

    return (
        <div className={style.carousel_container}>
            <div className={style.carousel_scrolling}>
                <div>
                    {imgList}
                </div>
                <div>
                    {imgList}
                </div>
            </div>
        </div>
    )
}