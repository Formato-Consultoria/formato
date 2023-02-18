type TypeBox = "LAST_BOX_POST" | "BOX_POST";

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

    typeBox?: TypeBox
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
}

export interface PropsCategory {
    name: string,
    slug: string,
    description?: string
}


export interface PropsPagination {
    pagination: {
        page: number,
        pageSize: number,
        pageCount: number,
        total: number
    }
}