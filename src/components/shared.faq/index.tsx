import { HeaderShared } from "@/@types/article"

import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export interface PropsFAQ extends HeaderShared {
    title: string
    content: string,
}
  
export function FAQ({
    id,
    title,
    content
}: PropsFAQ) {
    return (
        <AccordionItem value={`value-${id}`} className="bg-gray-400/30 px-5">
            <AccordionTrigger className="text-2xl">
                {title}
            </AccordionTrigger>
            <AccordionContent className="text-xl">
                {content}
            </AccordionContent>
        </AccordionItem>
    )
}