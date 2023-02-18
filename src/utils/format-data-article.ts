import { PropsArticle } from "@/@types/article";

export default function FormatDataArticle(data: Object[]): PropsArticle[] {
    return data.map((article: any) => {
        
        // desconsiderar após adicionar o CK Editor
        // let contentBody = data.attributes.blocks.map((block: any) => {
        //   return {
        //     component: block.__component,
        //     content: block.body,
        //   }
        // })

        return {
            id: article?.id,
            title: article?.attributes?.title,
            slug: article?.attributes?.slug,
            description: article?.attributes?.description,
            updatedAt: article?.attributes?.updatedAt,
            cover: {
                name: article?.attributes?.cover?.data?.attributes?.name,
                alternativeText: article?.attributes?.cover?.data?.attributes?.alternativeText,
                url: article?.attributes?.cover?.data?.attributes?.url,
            },
            category: {
                name: article?.attributes?.category?.data?.attributes?.name,
                slug: article?.attributes?.category?.data?.attributes?.slug,
                description: article?.attributes?.category?.data?.attributes?.description,
            },
            author: {
                name: article?.attributes?.author?.data?.attributes?.name,
                avatar: article?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url,
                email: article?.attributes?.author?.data?.attributes?.email
            },
            // body: article?.attributes?.body
        }
    });
}