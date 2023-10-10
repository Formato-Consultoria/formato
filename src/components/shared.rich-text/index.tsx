export interface PropsRichText {
  id: number,
  component: string
  body: string
}

export function RichText({
  body
}: PropsRichText) {
  return (
    <div dangerouslySetInnerHTML={{ __html: body }}></div>
  )
}