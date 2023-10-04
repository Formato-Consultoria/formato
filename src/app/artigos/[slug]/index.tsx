import { ArticleCard } from "@/components/article-card";
import { ArticleCardContainer } from "@/components/article-card-container";
import { ArticleContent } from "@/components/article-content";
import { UserAvatar } from "@/components/avatar";
import { Breadcrumb } from "@/components/breadcrumbs";
import { RelatedArticleCards } from "@/components/related-article-card";
import { Time } from "@/components/time";

import { Quote } from "@/components/shared-quote";
import { RichText } from "@/components/shared-rich-text";
import { Media } from "@/components/shared-media";
import { Slider } from "@/components/shared-slider";

import { ReactElement } from "react";

export const Comp = {
    ArticleCardContainer: ArticleCardContainer,
    ArticleCard: ArticleCard,
    RelatedArticleCards: RelatedArticleCards,
    UserAvatar: UserAvatar,
    Time: Time,
    ArticleContent: ArticleContent,
    Breadcrumb: Breadcrumb
}

export const Shared: { [key: string]: (props: any) => ReactElement<any> } = {
    "shared.quote": Quote,
    "shared.rich-text": RichText,
    "shared.media": Media,
    "shared.slider": Slider,
    "shared.video": () => <></>
}