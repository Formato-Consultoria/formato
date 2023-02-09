import LastArticle from "@/ui/comp-post-box";

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
            typeBox={"LAST_BOX_POST"}
          />

          <div className={style.posts_list}>
            <LastArticle
              id={0}
              bannerImgPath="/teste/store.jpg"
              title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
              href="#"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque."
              typeBox={"BOX_POST"}
            />

            <LastArticle
              id={0}
              bannerImgPath="/teste/elon-musk.jpg"
              title="Elon Musk cree que Netflix perdió suscriptores debido a un virus"
              href="#"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque."
              typeBox={"BOX_POST"}
            />
          </div>
        </div>

        <div className={style.pagination_carousel}>

        </div>
      </div>
    )
}