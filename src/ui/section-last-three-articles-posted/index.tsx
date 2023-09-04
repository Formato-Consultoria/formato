'use client'
import styles from "./lasts-posts-section.module.scss";
import { inter, blinker } from "@/utils/_fonts";

import cx from "clsx";

import ButttonGlobal from "@/components/button";
import { ArrowRight } from "phosphor-react";

export function LastsPostsSection() {
    return (
        <section className={cx(styles.lasts_posts, inter.className)}>
            <div className={styles.headler_}>
                <h2 className={blinker.className}>ULTIMAS POSTAGEMS</h2>
            
                <ButttonGlobal 
                    value="Veja todos" 
                    icone={<ArrowRight size={20}/>} 
                    isSecondary
                />
            </div>

            <div className={styles.boxs_news}>
            <div className={styles.custom_box}>
                <div className={styles.bg_shadow}></div>
                <img className={styles.bg_image} src="/teste/elon-musk.jpg" alt="elon musk" />
                
                <div className={styles.content}>
                <ButttonGlobal value={
                    <div>
                    mais <div>sobre...</div>
                    </div>}

                    isCustommer
                />

                <h3 className={inter.className}>Elon Musk cree que Netflix perdió suscriptores debido a un virus</h3>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</small>
                </div>
            </div>

            <div className={styles.custom_box}>
                <div className={styles.bg_shadow}></div>
                <img className={styles.bg_image} src="/teste/domain-transfer.jpg" alt="domain-transfer" />

                <div className={styles.content}>
                <ButttonGlobal value={
                    <div>
                    mais <div>sobre...</div>
                    </div>}

                    isCustommer
                />

                <h3 className={inter.className}>Transferir seu portfólio de domínios nunca foi tão fácil</h3>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</small>
                </div>
            </div>

            <div className={styles.custom_box}>
                <div className={styles.bg_shadow}></div>
                <img className={styles.bg_image} src="/teste/store.jpg" alt="store" />
                
                <div className={styles.content}>
                <ButttonGlobal value={
                    <div>
                    mais <div>sobre...</div>
                    </div>}

                    isCustommer
                />

                <h3 className={inter.className}>7 passos para fazer o cliente comprar novamente na sua loja</h3>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</small>
                </div>
            </div>
            </div>
        </section>
    )
}