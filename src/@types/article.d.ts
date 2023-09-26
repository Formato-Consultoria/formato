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
}

export interface PropsCover {
    name: string,
    alternativeText: string,
    url: string
}

export interface PropsAuthor {
    name: string,
    avatar?: string,
    email?: string,
    banner?: string,
    socialMedia?: Array<{ mediaName: string, mediaLink: string }>
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