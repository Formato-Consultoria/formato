import Slider from 'react-slick';

import { HeaderShared } from "@/@types/article";
import Image from "next/image";
import cx from "clsx";

export interface PropsSlider extends HeaderShared {
  files: Array<{
    id: number,
    name: string,
    url: string,
    alternativeText: string
  }>
}

export function ImageSlider({
  files
}: PropsSlider) {
  const settings: any = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="inline-flex items-center justify-center w-full my-7 bg-[var(--white-mediumn)]">
      <div className={"w-11/12 h-auto relative"}>
        <Slider
          {...settings}
        >
          {files.map(_ => (
            <div  key={_.id} className='h-64 md:h-96 w-full relative'>
              <Image
                style={{ objectFit: "cover" }}
                className={"prose-img:object-cover prose-img:w-full prose-img:h-full prose-img:m-0"}
                src={_.url}
                alt={_.alternativeText}
                fill
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

// function SamplePrevArrow(props: any) {
//   const { className, style, onClick } = props;

//   return (
//     <div
//       className={className}
//       style={{...style, display: "block", background: "red" }}
//       onClick={onClick}
//     >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//         </svg>
//         <span className="sr-only">Previous</span>
//       </span>
//     </div>
//   );
// }

// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;

//   return (
//     <div
//       style={{...style}}
//       className={cx("absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group", className)}
//       onClick={onClick}
//     >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//         </svg>
//         <span className="sr-only">Next</span>
//       </span>
//     </div>
//   );
// }




