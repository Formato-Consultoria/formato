import { PropsArticle, PropsCategory } from "@/@types/article";
import { mdToHtml } from "@/lib/md-to-html";

export default function FormatArticleData(data: Object[]): PropsArticle[] {
    return data.map((article: any) => {
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
            body: article?.attributes?.body
        }
    });
}

export async function FormatSingleArticleData(articleData: any): Promise<PropsArticle> {
    return {
        id: articleData?.id,
        title: articleData?.attributes?.title,
        slug: articleData?.attributes?.slug,
        description: articleData?.attributes?.description,
        updatedAt: articleData?.attributes?.updatedAt,
        cover: {
            name: articleData?.attributes?.cover?.data?.attributes?.name,
            alternativeText: articleData?.attributes?.cover?.data?.attributes?.alternativeText,
            url: articleData?.attributes?.cover?.data?.attributes?.url,
        },
        category: {
            name: articleData?.attributes?.category?.data?.attributes?.name,
            slug: articleData?.attributes?.category?.data?.attributes?.slug,
            description: articleData?.attributes?.category?.data?.attributes?.description,
        },
        author: {
            name: articleData?.attributes?.author?.data?.attributes?.name,
            avatar: articleData?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url,
            email: articleData?.attributes?.author?.data?.attributes?.email
        },
        body: await mdToHtml(articleData?.attributes?.body)
    }
}


export function FormatCategoryData(categoryData: any, slug = ""): PropsCategory {
    return {
        name: categoryData?.attributes?.name,
        slug: categoryData?.attributes?.slug,
        description: categoryData?.attributes?.description,
        articles: FormatArticleData(categoryData?.attributes?.articles?.data
            .filter((article: any) => {
                return article?.attributes?.slug != slug
            }).slice(0, 4)
        )
    }
}