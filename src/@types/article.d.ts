

type TypeBox = "LAST_BOX_POST" | "BOX_POST";

export interface PropsArticle {
    id: number,
    cover: string,
    title: string,
    slug: string,
    description: string,
    updatedAt: Date,
    category: string,

    author: PropsAuthor,
    typeBox: TypeBox
}

export interface PropsAuthor {
    id: number,
    name: string,
    avatar: string,
    email: string,
}