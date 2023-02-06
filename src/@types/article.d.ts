

type TypeBox = "LAST_BOX_POST" | "BOX_POST";

export interface PropsArticle {
    id: number,
    bannerImgPath: string,
    title: string,
    href: string,
    description: string,
    typeBox: TypeBox
}