

type TypeBox = "LAST_BOX_POST" | "BOX_POST";

export interface PropsArticle {
    id: number,
    cover: string,
    title: string,
    slug: string,
    description: string,
    typeBox: TypeBox
}