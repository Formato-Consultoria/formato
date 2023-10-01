import Link from "next/link";
import Image from "next/image";

import cx from "clsx";
import { CSSProperties } from "react";

export default function LogoFormato({ src, style, className }: { src: string, style?: CSSProperties, className?: string }) {
  return (
    <Link
      href="/"
      className={cx("relative mb-1 h-[50px] w-36 md:h-10 duration-200 ease-in hover:cursor-pointer transition", className)}
      style={style}
    >
        <Image
            className="object-contain"
            src={src}
            alt="Formato consultoria"
            fill
        />
    </Link>
  )
}