import { Heart } from "@/components/images/phosphor";

export function Hearts() {
    return (
        <div className={'flex items-center gap-1'}>
            <Heart
                size={25}
                color="rgb(118, 18, 134)"
                weight="fill"
            />

            <small className={"text-xs"}>1259</small> {/* {likes} *proveniente da api do strapi? */}
        </div>
    )
}