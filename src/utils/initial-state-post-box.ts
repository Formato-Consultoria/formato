import { PropsArticle } from "@/@types/article";
import { BnrAlternative, Person } from "@/components/images";

export const initStateArticle: PropsArticle = {
    id: NaN,
    title: '(nome do artigo)',
    slug: '',
    description: '',
    updatedAt: new Date(''),
  
    cover: {
        name: 'nome da imagem de banner',
        alternativeText: 'banner do artigo',
        url: BnrAlternative.src
    },
    category: {
        name: '(categoria)',
        slug: '',
        description: '(descrição)',
    },
    author: {
        name: '(nome do altor)',
        avatar: Person.src,
        email: '',
    },
    body: []
}