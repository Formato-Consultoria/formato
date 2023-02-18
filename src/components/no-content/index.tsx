import style from "./error.module.scss";

import Image from "next/image";
import { NoArticle } from "@/components/images";

export default function NotContent() {
    return (
        <div className={style.container_articles}>
            <div className={style.image_error}>
                <Image
                    src={NoArticle.src}
                    fill
                    alt={"Esta pagina não foi encontrada!"}
                />

                <h2>Desculpe, ainda não temos nenhum conteudo! 🔎</h2>
            </div>
        </div>
    )
}