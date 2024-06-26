import { HeaderShared } from "@/@types/article";
import cx from "clsx";

export interface PropsQuote extends HeaderShared {
  body: string,
  title?: string
}

export function Quote({
  title, body
}: PropsQuote) {
  return (
    <blockquote className={cx("w-full text-lg font-medium py-5 pr-2 my-5 lg:my-5 border-l-2 md:border-l-4 border-solid border-y-transparent border-r-transparent text-purple-800 border-l-purple-600 bg-purple-500/70")}>
      <div className="inline-flex w-full gap-2 mb-3">
        <svg className={"align-middle"} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="rgb(147 51 234)" d="M17.175 17q-.75 0-1.15-.638t-.05-1.312L17 13h-2q-.825 0-1.413-.588T13 11V8q0-.825.588-1.413T15 6h3q.825 0 1.413.588T20 8v4.525q0 .225-.038.463t-.162.437l-1.425 2.825q-.175.35-.5.55t-.7.2Zm-9 0q-.75 0-1.15-.638t-.05-1.312L8 13H6q-.825 0-1.413-.588T4 11V8q0-.825.588-1.413T6 6h3q.825 0 1.413.588T11 8v4.525q0 .225-.038.463t-.162.437L9.375 16.25q-.175.35-.5.55t-.7.2Z"/></svg>
        <strong className={"not-italic align-middle"}>{title}</strong>
      </div>
      {body}
    </blockquote>
  )
}