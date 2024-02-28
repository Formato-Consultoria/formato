import { PropsMedia } from "@/components/shared.media";
import { PropsQuote } from "@/components/shared.quote";
import { PropsRichText } from "@/components/shared.rich-text";
import { PropsSlider } from "@/components/shared.slider";
import { Video } from "@/components/shared.video";
import { PropsFeedback } from "@/components/shared.feedback";

import { PropsCover } from "./article";

export interface PropsAboutPage {
    id: number,
    title: string,
    description: string,
    cover?: PropsCover,

    body?: string,
    blocks?: Array<PropsMedia | PropsRichText | PropsQuote | PropsSlider | Video | PropsFeedback>
}