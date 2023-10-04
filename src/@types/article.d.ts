export interface PropsArticle {
    id: number,
    title: string,
    slug: string,
    description: string,
    updatedAt: Date,

    cover: PropsCover,
    category: PropsCategory,
    author: PropsAuthor,
    body?: string,
    blocks?: Array<PropsMedia | PropsRichText | PropsQuote | PropsSlider>
}

export interface PropsCover {
    name: string,
    alternativeText: string,
    url: string,
    blurUrl?: string
}

interface HeaderShared {
    id: number,
    component: string
}

export interface PropsMedia extends HeaderShared {
    file: {
        id: id,
        name: string,
        url: string,
        alternativeText: string,
        caption?: string,
        // typeFile: string,
        // fileExtension: string,
        previewUrl?: string
    }
}
export interface PropsRichText extends HeaderShared {
    body: string
}
export interface PropsQuote extends HeaderShared {
    body: string,
    title?: string
}

export interface PropsSlider extends HeaderShared {
    files: Array<{
        id: number,
        name: string,
        url: string,
        alternativeText: string
    }>
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