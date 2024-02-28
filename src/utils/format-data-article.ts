import { PropsAboutPage } from "@/@types/about-page";
import { PropsArticle, PropsCategory } from "@/@types/article";
import { PropsDynamicPage } from "@/@types/dynamic-page";
import { PropsService, PropsServicePage } from "@/@types/service";
import { mdToHtml } from "@/lib/md-to-html";

export class DataFormatter {

  // Articles
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

  // Categories
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

  // Services
  static async formatSingleServiceData(serviceData: any): Promise<PropsService> {
    return {
      id: serviceData?.id,
      title: serviceData?.attributes?.title,
      slug: serviceData?.attributes?.slug,
      description: serviceData?.attributes?.description,
      icon: {
        name: serviceData?.attributes?.icon?.data?.attributes?.name,
        alternativeText: serviceData?.attributes?.icon?.data?.attributes?.alternativeText,
        url: serviceData?.attributes?.icon?.data?.attributes?.url,
        width: serviceData?.attributes?.icon?.data?.attributes?.width,
        height: serviceData?.attributes?.icon?.data?.attributes?.height
      },
      cover: {
        name: serviceData?.attributes?.cover?.data?.attributes?.name,
        alternativeText: serviceData?.attributes?.cover?.data?.attributes?.alternativeText,
        url: serviceData?.attributes?.cover?.data?.attributes?.url,
        width: serviceData?.attributes?.cover?.data?.attributes?.width,
        height: serviceData?.attributes?.cover?.data?.attributes?.height
      },
      body: await mdToHtml(serviceData?.attributes?.body),
      blocks: await Promise.all(serviceData?.attributes?.blocks?.map(async (block: any) => {
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
  static formatMultipleServiceData(data: Array<any>): Promise<Array<PropsService>> {
    const servicesPromises = data.map((service: any) => DataFormatter.formatSingleServiceData(service));
    return Promise.all(servicesPromises);
  }

  // Service page
  static async formatServicePageData(serviceData: any): Promise<PropsServicePage> {
    return {
      id: serviceData?.id,
      title: serviceData?.attributes?.title,
      slug: serviceData?.attributes?.slug,
      description: serviceData?.attributes?.description,
      FAQ: await Promise.all(serviceData?.attributes?.FAQ?.map(async (block: any) => {
        switch (block.__component) {
          case 'shared.rich-text':
            return {
              id: block.id,
              component: block.__component,
              body: await mdToHtml(block.body)
            }
          case 'shared.faq':
            return {
              id: block.id,
              component: block.__component,
              title: block.title,
              content: block.content
            }
          default:
            return null
        }
      }))
    };
  }

  // About page
  static async formatAboutPageData(serviceData: any): Promise<PropsAboutPage> {
    return {
      id: serviceData?.id,
      title: serviceData?.attributes?.title,
      description: serviceData?.attributes?.description,
      cover: {
        name: serviceData?.attributes?.cover?.data?.attributes?.name,
        alternativeText: serviceData?.attributes?.cover?.data?.attributes?.alternativeText,
        url: serviceData?.attributes?.cover?.data?.attributes?.url,
        width: serviceData?.attributes?.cover?.data?.attributes?.width,
        height: serviceData?.attributes?.cover?.data?.attributes?.height
      },
      body: await mdToHtml(serviceData?.attributes?.body),
      blocks: await Promise.all(serviceData?.attributes?.blocks?.map(async (block: any) => {
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
          case "shared.service-feedback":
              return {
                id: block.id,
                component: block.__component,
                name: block.name,
                email: block.email,
                avatar: {
                  name: block?.avatar?.data?.attributes?.name,
                  alternativeText: block?.avatar?.data?.attributes?.alternativeText,
                  url: block?.avatar?.data?.attributes?.url,
                  width: block?.avatar?.data?.attributes?.width,
                  height: block?.avatar?.data?.attributes?.height
                },
                comment: block.comment
              }
          default:
            return null
        }
      }))
    };
  }

  // Dynamic page
  static async formatDynamicPageData(dynamicPageData: any): Promise<PropsDynamicPage> {
    return {
      id: dynamicPageData?.id,
      title: dynamicPageData?.attributes?.title,
      description: dynamicPageData?.attributes?.description,
      cover: {
        name: dynamicPageData?.attributes?.cover?.data?.attributes?.name,
        alternativeText: dynamicPageData?.attributes?.cover?.data?.attributes?.alternativeText,
        url: dynamicPageData?.attributes?.cover?.data?.attributes?.url,
        width: dynamicPageData?.attributes?.cover?.data?.attributes?.width,
        height: dynamicPageData?.attributes?.cover?.data?.attributes?.height
      },
      body: await mdToHtml(dynamicPageData?.attributes?.body),
      blocks: await Promise.all(dynamicPageData?.attributes?.blocks?.map(async (block: any) => {
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
}