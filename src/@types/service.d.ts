import { PropsMedia } from "@/components/shared.media";
import { PropsQuote } from "@/components/shared.quote";
import { PropsRichText } from "@/components/shared.rich-text";
import { PropsSlider } from "@/components/shared.slider";

import { PropsCover } from "./article";

export interface PropsService {
    id: number,
    title: string,
    slug: string,
    description: string,

    icon?: PropsCover,
    cover?: PropsCover,
    
    body?: string,
    blocks?: Array<PropsMedia | PropsRichText | PropsQuote | PropsSlider>
}

export interface PropsServicePage {
    id: number,
    title: string,
    slug: string,
    description: string,
    FAQ?: Array<PropsRichText | PropsFAQ>
}