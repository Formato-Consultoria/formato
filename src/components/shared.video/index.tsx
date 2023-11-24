'use client';
import dynamic from "next/dynamic";
const ReactPlayerElement = dynamic(() => import("react-player"), { ssr: false });

import { HeaderShared } from "@/@types/article";
import { useMediaQuery } from "react-responsive";

import cx from "clsx";

export interface PropsVideo extends HeaderShared {
  video: {
      url: string,
      provider: string,
      providerUid: string,
  }
}

export function Video({
  video
}: PropsVideo) {
  const { url } = video;

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <ReactPlayerElement
      className={"my-2 md:my-5 border-2 border-solid border-transparent outline outline-1 outline-[var(--black-10)] bg-[var(--white-mediumn)]"}
      url={url}
      controls
      height={isMobile ? "260px" : "395px"}
      width="100%"
    />
  )
}