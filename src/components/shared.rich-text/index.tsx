import { HeaderShared } from "@/@types/article";

export interface PropsRichText extends HeaderShared {
  body: string
}

export function RichText({
  body
}: PropsRichText) {
  return (
    <div dangerouslySetInnerHTML={{ __html: body }}></div>
  )
}