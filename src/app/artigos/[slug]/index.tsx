import { ReactElement } from "react";

import { ArticleCard } from "@/components/article-card";
import { ArticleCardContainer } from "@/components/article-card-container";
import { BannerTitleArticle } from "./banner-title-article";
import { ArticleContent } from "@/components/article-content";
import { UserAvatar } from "@/components/avatar";
import { Breadcrumb } from "@/components/breadcrumbs";
import { RelatedArticleCards } from "@/components/related-article-card";
import { Headlings } from "@/components/headlings";
import { Time } from "@/components/time";

import { Quote } from "@/components/shared.quote";
import { RichText } from "@/components/shared.rich-text";
import { MediaContentRender } from "@/components/shared.media";
import { ImageSlider } from "@/components/shared.slider";
import { Video } from "@/components/shared.video";

export const Comp = {
    ArticleCardContainer: ArticleCardContainer,
    BannerTitle: BannerTitleArticle,
    Breadcrumb: Breadcrumb,
    Time: Time,
    UserAvatar: UserAvatar,
    Headlings: Headlings,
    ArticleContent: ArticleContent,
    ArticleCard: ArticleCard,
    RelatedArticleCards: RelatedArticleCards,
    
}

export const Shared: { [key: string]: (props: any) => ReactElement<any> } = {
    "shared.quote": Quote,
    "shared.rich-text": RichText,
    "shared.media": MediaContentRender,
    "shared.slider": ImageSlider,
    "shared.video": Video
}