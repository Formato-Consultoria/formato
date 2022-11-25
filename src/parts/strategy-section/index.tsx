import styles from './strategy-section.module.scss';
import { blinker } from '../../utils/_fonts';

export default function StrategySection() {
    return (
        <section className={`${styles.strategy} ${blinker.className}`}>
        <div className={styles.title_and_description}>
          <h2>ESTRATEGIA</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</p>
        </div>

        <div className={styles.strategys_an_image}>
          <div className={styles.first_block}>
            <div className={styles.descoberta}>
              <h3>1. DESCOBERTA</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className={styles.modelagem}>
              <h3>2. MODELAGEM</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>

          <div className={styles.secound_block}>
            <div className={styles.implantacao}>
              <h3>3. IMPLANTAÇÃO</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className={styles.ideacao}>
              <h3>4. IDEAÇÃO</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>
        </div>
      </section>
    )
}