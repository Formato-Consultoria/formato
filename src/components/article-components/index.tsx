import { ReactElement } from "react";

import { ArticleCard } from "@/components/article-components/article-card";
import { ArticleCardContainer } from "@/components/article-components/article-card-container";
import { BannerTitleArticle } from "@/components/article-components/banner-title-article";
import { ArticleContent } from "@/components/article-components/article-content";
import { UserAvatar } from "@/components/article-components/avatar";
import { Breadcrumb } from "@/components/article-components/breadcrumbs";
import { RelatedArticleCards } from "@/components/article-components/related-article-card";
import { Headlings } from "@/components/article-components/headlings";
import { Time } from "@/components/article-components/time";

import { Quote } from "@/components/shared.quote";
import { RichText } from "@/components/shared.rich-text";
import { MediaContentRender } from "@/components/shared.media";
import { ImageSlider } from "@/components/shared.slider";
import { Video } from "@/components/shared.video";
import { Feedback } from "@/components/shared.feedback";

export const ArticleComp = {
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
    "shared.video": Video,
    "shared.service-feedback": Feedback
}