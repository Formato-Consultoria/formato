import { ReactNode } from "react";

/**
 * CEL - Consultoria para empresas locais
 * MT - Mentoria Técnica
 */
export type typeService = 'WORKSHOPS' | 'CEL' | 'MT';

export interface contentService {
    slug: string,
    icon: string,
    title: string,
    bannerImg: string,
    description: string,
    content: ReactNode,
    typeService: typeService
}