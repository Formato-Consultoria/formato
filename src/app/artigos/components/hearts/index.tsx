import { Heart } from "@/components/images/phosphor";

export function Hearts() {
    return (
        <div className={''}>
        {/* <div className={style.likes}> */}
            <Heart
                size={25}
                color="rgb(118, 18, 134)"
                weight="fill"
            />

            <small>1259</small> {/* {likes} *proveniente da api do strapi? */}
        </div>
    )
}