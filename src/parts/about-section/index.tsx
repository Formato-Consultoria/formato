import styles from './about-section.module.scss';
import { inter, blinker } from '../../utils/_fonts';

export default function AboutSection() {
    return(
        <section className={`${styles.about} ${inter.className}`}>
            <h2 className={blinker.className}>SOBRE A NOSSA EMPRESA</h2>

            <div className={styles.content}>
                <img src="/images/imagem-predio.png" alt="imagem de um predio preto" />

                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id lobortis nulla. In in sapien nec ex eleifend efficitur. Praesent et pulvinar nibh. Suspendisse odio arcu, interdum quis luctus non, pretium sed elit.</p>
                <p>Proin vehicula condimentum magna eu porta. Donec id consequat magna, at posuere nisl. Mauris nec feugiat dui. Mauris interdum lacinia laoreet. Mauris aliquet eget diam vel porta.</p>

                <p>Maecenas auctor elementum augue id hendrerit. Duis nunc risus, lacinia et sapien eu, vehicula mattis sem.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id lobortis nulla. In in sapien nec ex eleifend efficitur. Praesent et pulvinar nibh. Suspendisse odio arcu, interdum quis luctus non, pretium sed elit.</p>
                <p>Proin vehicula condimentum magna eu porta. Donec id consequat magna, at posuere nisl. Mauris nec feugiat dui. Mauris interdum lacinia laoreet. Mauris aliquet eget diam vel porta.</p>

                <p>Maecenas auctor elementum augue id hendrerit. Duis nunc risus, lacinia et sapien eu, vehicula mattis sem.</p>

                <p>Lorem diego ipsum dolor sit amet, consectetur adipiscing elit. Nulla id lobortis nulla. In in sapien nec ex eleifend efficitur. Praesent et pulvinar nibh. Suspendisse odio arcu, interdum quis luctus non, pretium sed elit.</p>
                </div>
            </div>
        </section>
    )
}