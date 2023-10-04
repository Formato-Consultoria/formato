import { PropsRichText } from "@/@types/article";

export function RichText({
  body
}: PropsRichText) {
  return (
    <div dangerouslySetInnerHTML={{ __html: body }}></div>
  )
}