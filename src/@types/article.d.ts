import { PropsMedia } from "@/components/shared.media";
import { PropsQuote } from "@/components/shared.quote";
import { PropsRichText } from "@/components/shared.rich-text";
import { PropsSlider } from "@/components/shared.slider";

export interface PropsArticle {
    id: number,
    title: string,
    slug: string,
    description: string,
    updatedAt: Date,
    publishedAt: Date,

    cover: PropsCover,
    category: PropsCategory,
    tags?: Array<string>,
    author: PropsAuthor,
    body?: string,
    blocks?: Array<PropsMedia | PropsRichText | PropsQuote | PropsSlider>
}

export interface HeaderShared {
    id: number,
    component: string
}

export interface PropsCover {
    name: string,
    alternativeText: string,
    url: string,
    blurUrl?: string
}

export interface PropsAuthor {
    name: string,
    avatar?: string,
    email?: string,
    banner?: string,
    socialMedia: { [key: string]: string }
}

export interface PropsCategory {
    id: number,
    name: string,
    slug: string,
    description?: string,
    articles?: PropsArticle[],
}

export interface PropsPagination {
    pagination: {
        page: number,
        pageSize: number,
        pageCount: number,
        total: number
    }
}