import cx from 'clsx';
import Image from 'next/image';

export function CustomImage({ src, alt, className }: {
  src: string,
  alt: string,
  className?: string
}) {
  return (<>
    <div className={cx("relative flex items-center h-96 md:h-[400px] mb-5 w-full ring-4 ring-black bg-slate-900/20", className)}>
      <Image
        className={"object-cover m-0"}
        src={src}
        alt={alt}
        fill
      />
    </div>
  </>)
}