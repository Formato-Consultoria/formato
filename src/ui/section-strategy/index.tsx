import styles from './strategy-section.module.scss';
import { blinker } from '@/utils/_fonts';

import cx from 'clsx';

export function StrategySection() {
    return (
      <section className={cx(styles.strategy, blinker.className)}>
        <div className={styles.title_and_description}>
          <h2>ESTRATEGIA</h2>
          <p>O que foi visto ontem pode não ser suficiente para enfrentar hoje. Estamos sempre abertos a novas perspectivas e buscamos simplicidade e eficiência. Focamos no essencial e enfrentamos problemas complexos com abordagens estratégicas e inovadoras. Planejamos para ter sucesso ao invés de esperar que aconteça por acaso, definimos condições para evolução e aprendemos ao longo do caminho.</p>
        </div>

        <div className={styles.strategys_and_image}>
          <div className={styles.first_block}>
            <div className={styles.mindset}>
              <h3>1. MINDSET</h3>
              <p>Ideias brilhantes podem fracassar se não houver uma empresa preparada para colocá-las em prática. Por isso, buscamos alinhar nossos objetivos e estabelecer uma conexão empática com as necessidades e perspectivas dos outros. Estamos sempre abertos ao crescimento e é essa mentalidade que enriquece nossa jornada.</p>
            </div>

            <div className={styles.estrategia}>
              <h3>2. ESTRATÉGIA</h3>
              <p>A rotina empresarial pode obscurecer a criatividade. Líderes inovadores mantêm-se abertos a novos pontos de vista e criam um ambiente propício para ideias brilhantes se desenvolverem. Conectamos as pessoas de forma autêntica à essa jornada, fomentando a inovação e o crescimento.</p>
            </div>
          </div>

          <div className={styles.secound_block}>
            <div className={styles.metricas}>
              <h3>3. MÉTRICAS</h3>
              <p>As escolhas influenciam nossas descobertas e nos motivam a definir objetivos. Experimentar traz resultados inesperados que podem ser acompanhados. Isso nos permite constantemente nos adaptarmos e criarmos soluções relevantes para nossos clientes, priorizando o que é importante.</p>
            </div>

            <div className={styles.evolucao}>
              <h3>4. EVOLUÇÃO</h3>
              <p>Estamos sempre evoluindo e combinando elementos para criar. Respeitamos a jornada de vida e objetivos de cada pessoa. Aprimoramos nossas ações com pequenas melhorias e mudanças são bem-vindas. Ajudamos as pessoas a se envolver em um ambiente de colaboração e melhoria constante, sentindo que fazem parte de um objetivo maior.</p>
            </div>
          </div>
        </div>
      </section>
    )
}