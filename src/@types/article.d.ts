type TypeBox = "LAST_BOX_POST" | "BOX_POST";

export interface PropsAuthor {
    name: string,
    avatar?: string,
    email?: string,
}

export interface PropsComponent {
    component: string,
    content: string
}

export interface PropsArticle {
    id: number,
    title: string,
    slug: string,
    description: string,
    updatedAt: Date,
    
    cover: {
        name: string,
        alternativeText: string,
        url: string
    },
    category: {
        name: string,
        slug: string,
        description?: string
    },
    author: PropsAuthor,
    body?: PropsComponent[],

    typeBox?: TypeBox
}