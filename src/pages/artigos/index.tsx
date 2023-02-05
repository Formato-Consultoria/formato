import LastArticle from "@/ui/section-last-article-posted";

import style from "./articles.module.scss";

export default function Articles() {
    return (
      <div className={style.container_articles}>
        <div className={style.containt}>
          <LastArticle
            id={0}
            bannerImgPath="/teste/elon-musk.jpg"
            title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
            href="#"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque."
          />
        </div>
      </div>
    )
}