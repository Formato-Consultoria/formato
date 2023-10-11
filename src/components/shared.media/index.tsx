'use client';
import dynamic from "next/dynamic";
const ReactPlayerElement = dynamic(() => import("react-player"), { ssr: false });
import style from "./style.module.scss";
import cx from "clsx";

import Link from "next/link";
import Image from "next/image";

import { HeaderShared } from "@/app/api/@types/article";
import { useMediaQuery } from "react-responsive";
import DownloadLink from "react-download-link";
import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineFilePdf,
  AiOutlineFileWord,
  AiOutlineFileExcel,
  AiOutlineFilePpt
} from 'react-icons/ai';

export interface PropsMedia extends HeaderShared {
  file: {
      id: number,
      name: string,
      url: string,
      alternativeText: string,
      caption?: string,
      mimeType: string,
      fileExtension: string,
      previewUrl?: string
  }
}

export function MediaContentRender({
  file
}: PropsMedia) {
  const { name, url, alternativeText, caption, mimeType, fileExtension, previewUrl } = file;
  const extractFileSubType = (str: string) => str.split('/')[0];

  switch(extractFileSubType(mimeType)) {
    case "image":
      return <ImageRender src={url} alt={alternativeText} />;
    case "video":
      return <VideoRender url={url} />;
    case "audio":
      return <AudioRender mimeType={mimeType} url={url} />;
    case "text":
      return <DefaultRender fileName={name} mimeType={mimeType} fileUrl={url} fileExc={fileExtension} />;
    case "application":
      return <DefaultRender fileName={name} mimeType={mimeType} fileUrl={url} fileExc={fileExtension} />;
    default:
      return <DefaultRender fileName={name} mimeType={mimeType} fileUrl={url} fileExc={fileExtension} />;
  }
}

// @Icons

const getIconByExtension = (extension: string) => {
  switch (extension) {
    case 'pdf':
      return (
        <IconContext.Provider
          value={{ className: "h-6 w-6 text-[var(--black-dark-90)] group-hover:text-[var(--primary-color)]" }}
        >
          <div>
            <AiOutlineFilePdf />
          </div>
        </IconContext.Provider>
      );
    case 'doc':
    case 'docx':
      return (
        <IconContext.Provider
          value={{ className: "h-5 w-6 text-[var(--black-dark-90)] group-hover:text-[var(--primary-color)]" }}
        >
          <div className={"bg-white rounded-full p-2"}>
            <AiOutlineFileWord />
          </div>
        </IconContext.Provider>
      );
    case 'xls':
    case 'xlsx':
      return (
        <IconContext.Provider
          value={{ className: "h-5 w-6 text-[var(--black-dark-90)] group-hover:text-[var(--primary-color)]" }}
        >
          <div className={"bg-white rounded-full p-2"}>
            <AiOutlineFileExcel />
          </div>
        </IconContext.Provider>
      );
    case 'ppt':
    case 'pptx':
      return (
        <IconContext.Provider
          value={{ className: "h-5 w-6 text-[var(--black-dark-90)] group-hover:text-[var(--primary-color)]" }}
        >
          <div className={"bg-white rounded-full p-2"}>
            <AiOutlineFilePpt />
          </div>
        </IconContext.Provider>
      );
    default:
      return (
        <IconContext.Provider
          value={{ className: "h-5 w-6 text-[var(--black-dark-90)] group-hover:text-[var(--primary-color)]" }}
        >
          <div className={"bg-white rounded-full p-2"}>
            <AiOutlineFileText />
          </div>
        </IconContext.Provider>
      );
  }
};

// @Components

function DefaultRender({ fileName, mimeType, fileExc, fileUrl }: { fileName: string, mimeType: string, fileExc: string, fileUrl: string }) {
  // const fileText = await fetch(fileUrl)
  //   .then(res => res.text())
  
  // const blob = new Blob([fileText], {
  //   type: mimeType
  // })

  // const blobUrl = URL.createObjectURL(blob)
  // console.log(blobUrl);

  return (
    <div className={cx("group h-14 w-72 px-2.5 my-3 text-xs text-[var(--black)] group-hover:text-[var(--link-color)] ring-2 ring-[var(--black-dark-20)] hover:ring-[var(--primary-color-75)] hover:rounded flex items-center gap-2 justify-stretch transition-all duration-150 ease-linear bg-[var(--white-mediumn)] cursor-pointer")}>
      {getIconByExtension(fileExc.slice(1))}
      <DownloadLink
        style={{ textDecoration: 'none', color: 'rgb(8, 12, 16, 0.7)', fontWeight: "bold" }}
        label={`DOWNLOAD arquivo ${fileName}`}
        filename={fileName}
        exportFile={async () => {
          const res = await fetch(fileUrl);
          return await res.blob();
        }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" className={"h-6 w-6 justify-self-end fill-[var(--black-dark-80)] group-hover:fill-[var(--primary-color)]"} viewBox="0 0 24 24"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z"/></svg>
    </div>
  )
}

function ImageRender({ src, alt }: { src: string, alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
    />
  )
}

function VideoRender({ url }: { url: string }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return (
    <ReactPlayerElement
      className={cx("my-2 md:my-5 border-2 border-solid border-transparent outline outline-1 outline-[var(--black-10)] bg-[var(--white-mediumn)]", style.react_player)}
      url={url}
      controls
      height={isMobile ? "260px" : "380px"}
      width="100%"
    />
  )
}

function AudioRender({
  url, mimeType
}: {  url: string, mimeType: string }) {
  return (
    <div className={"w-full my-3 py-4 flex items-center justify-center flex-col gap-3 bg-[var(--white-mediumn)]"}>
      <svg className="h-6 w-6 fill-black" viewBox="0 0 512 512"><path d="M384 288h-32c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h32c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zm32 127.88c0 17.68-14.36 32.06-32 32.06h-32V320.06h32c17.64 0 32 14.38 32 32.06v63.76zM160 288h-32c-35.35 0-64 28.71-64 64.12v63.76C64 451.29 92.65 480 128 480h32c17.67 0 32-14.35 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm0 159.94h-32c-17.64 0-32-14.38-32-32.06v-63.76c0-17.68 14.36-32.06 32-32.06h32v127.88zM256 32C114.84 32 0 146.85 0 288v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V288C32 164.48 132.5 64 256 64s224 100.48 224 224v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V288c0-141.15-114.84-256-256-256z"></path></svg>
      
      <audio controls className={"w-2/5"}>
        <source type={mimeType} src={url}  />
      </audio>
    </div>
  )
}