import { ReactNode } from "react";

export interface contentService {
    slug: string,
    icon: string,
    title: string,
    bannerImg: string,
    description: string,
    content: ReactNode,
}