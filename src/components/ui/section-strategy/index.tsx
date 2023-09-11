import styles from './strategy-section.module.scss';
import { blinker } from '@/utils/_fonts';

import cx from 'clsx';

export function StrategySection() {
    return (
      <section className={cx(styles.strategy, blinker.className)}>
        <div className={styles.title_and_description}>
          <h2>ESTRATEGIA</h2>
        </div>

        <div className={styles.strategys_and_image}>
          <div className={styles.first_block}>
            <div className={styles.mindset}>
              <h3>1. MINDSET</h3>
              <p>Ideias exclusivas exigem uma empresa preparada para modificações. Buscamos alinhar objetivos, compreender as necessidades dos outros e abraçar o crescimento constante em nossa jornada.</p>
            </div>

            <div className={styles.estrategia}>
              <h3>2. ESTRATÉGIA</h3>
              <p>A rotina empresarial pode obscurecer a criatividade, mas líderes inovadores mantêm-se abertos a novos pontos de vista e criam um ambiente propício para ideias brilhantes se desenvolverem. Conectamos as pessoas de forma autêntica à essa jornada, fomentando a inovação e o crescimento.</p>
            </div>
          </div>

          <div className={styles.secound_block}>
            <div className={styles.metricas}>
              <h3>3. MÉTRICAS</h3>
              <p>Nossas escolhas moldam descobertas, impulsionam objetivos e geram resultados inesperados. Essa adaptabilidade nos permite criar soluções relevantes para nossos clientes, priorizando o que importa.</p>
            </div>

            <div className={styles.evolucao}>
              <h3>4. EVOLUÇÃO</h3>
              <p>Constantemente nos atualizamos, respeitando a jornada de cada pessoa, buscando melhorias e promovendo trabalho em direção a um objetivo maior.</p>
            </div>
          </div>
        </div>
      </section>
    )
}