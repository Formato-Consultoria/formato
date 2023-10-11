import { PropsArticle, PropsCategory } from "@/app/api/@types/article";
import { mdToHtml } from "@/lib/md-to-html";

export class DataFormatter {
  static formatSingleArticleDataHeader(articleData: any): PropsArticle {
    return {
      id: articleData?.id,
      title: articleData?.attributes?.title,
      slug: articleData?.attributes?.slug,
      description: articleData?.attributes?.description,
      updatedAt: articleData?.attributes?.updatedAt,
      publishedAt: articleData?.attributes?.publishedAt,
      cover: {
        name: articleData?.attributes?.cover?.data?.attributes?.name,
        alternativeText: articleData?.attributes?.cover?.data?.attributes?.alternativeText,
        url: articleData?.attributes?.cover?.data?.attributes?.url,
      },
      category: {
        id: articleData?.attributes?.category?.data?.id,
        name: articleData?.attributes?.category?.data?.attributes?.name,
        slug: articleData?.attributes?.category?.data?.attributes?.slug,
        description: articleData?.attributes?.category?.data?.attributes?.description,
      },
      tags: [...articleData?.attributes?.Tags],
      author: {
        name: articleData?.attributes?.author?.data?.attributes?.name,
        avatar: articleData?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url,
        email: articleData?.attributes?.author?.data?.attributes?.email,
        socialMedia: {
          Email: articleData?.attributes?.author?.data?.attributes?.email && `mailto:${articleData?.attributes?.author?.data?.attributes?.email}`,
          Instagram: articleData?.attributes?.author?.data?.attributes?.Instagram && `https://www.instagram.com/${articleData?.attributes?.author?.data?.attributes?.Instagram}`,
          Discord: articleData?.attributes?.author?.data?.attributes?.Discord && `${articleData?.attributes?.author?.data?.attributes?.Discord}`,
          Medium: articleData?.attributes?.author?.data?.attributes?.Medium && `${articleData?.attributes?.author?.data?.attributes?.Medium}`,
          Pinterest: articleData?.attributes?.author?.data?.attributes?.Pinterest && `${articleData?.attributes?.author?.data?.attributes?.Pinterest}`,
          Snapchat: articleData?.attributes?.author?.data?.attributes?.Snapchat && `${articleData?.attributes?.author?.data?.attributes?.Snapchat}`,
          TikTok: articleData?.attributes?.author?.data?.attributes?.TikTok && `${articleData?.attributes?.author?.data?.attributes?.TikTok}`,
          Twitter: articleData?.attributes?.author?.data?.attributes?.Twitter && `${articleData?.attributes?.author?.data?.attributes?.Twitter}`,
          YouTube: articleData?.attributes?.author?.data?.attributes?.YouTube && `${articleData?.attributes?.author?.data?.attributes?.YouTube}`,
          Whatsapp: articleData?.attributes?.author?.data?.attributes?.Whatsapp && `${articleData?.attributes?.author?.data?.attributes?.Whatsapp}`
        }
      },
    }
  }

  static async formatSingleArticleData(articleData: any): Promise<PropsArticle> {
    return {
      ...DataFormatter.formatSingleArticleDataHeader(articleData),
      body: await mdToHtml(articleData?.attributes?.body),
      blocks: await Promise.all(articleData?.attributes?.blocks?.map(async (block: any) => {
        switch (block.__component) {
          case 'shared.rich-text':
            return {
              id: block.id,
              component: block.__component,
              body: await mdToHtml(block.body)
            }
          case 'shared.quote':
            return {
              id: block.id,
              component: block.__component,
              body: block.body,
            }
          case "shared.media":
            return {
              id: block.id,
              component: block.__component,
              file: {
                id: block.file.data.id,
                name: block.file.data.attributes.name,
                url: block.file.data.attributes.url,
                alternativeText: block.file.data.attributes.alternativeText,
                caption: block.file.data.attributes.caption,
                fileExtension: block.file.data.attributes.ext,
                mimeType: block.file.data.attributes.mime,
                previewUrl: block.file.data.attributes.previewUrls
              }
            }
          case "shared.slider":
            return {
              id: block.id,
              component: block.__component,
              files: block.files.data.map((image: any) => {
                return {
                  id: image.id,
                  name: image.attributes.name,
                  url: image.attributes.url,
                  alternativeText: image.attributes.alternativeText
                }
              })
            }
          case "shared.video":
            return {
              id: block.id,
              component: block.__component,
              ...block,
            }
          default:
            return null
        }
      }))
    };
  }

  static formatMultipleArticleData(data: Array<any>): Array<PropsArticle> {
    return data.map((article: any) => {
      return DataFormatter.formatSingleArticleDataHeader(article);
    });
  }

  // body: await mdToHtml(articleData?.attributes?.body), // função alternativa

  static formatCategoryData(categoryData: any, slug = ""): PropsCategory {
    const articles = categoryData?.attributes?.articles;
    return {
      id: categoryData?.id,
      name: categoryData?.attributes?.name,
      slug: categoryData?.attributes?.slug,
      description: categoryData?.attributes?.description,
      articles: articles ? DataFormatter.formatMultipleArticleData(articles.data
        .filter((article: any) => {
          return article?.attributes?.slug != slug;
        }).slice(0, 4)
      ) : undefined
    };
  }

  static formatCategoriesData(categoryData: Array<any>): Array<PropsCategory> {
    return categoryData.map((category: any) => {
      return {
        id: category?.id,
        name: category?.attributes?.name,
        slug: category?.attributes?.slug,
        description: category?.attributes?.description,
        articles: DataFormatter.formatMultipleArticleData(category?.attributes?.articles?.data)
      };
    });
  }
}