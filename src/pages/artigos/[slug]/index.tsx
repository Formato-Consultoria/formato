
import style from "./article.module.scss";

export default function Article({ slug }) {
    return (
        <div className={style.article_page}>
            <h2>{slug}</h2>
        </div>
    )
}