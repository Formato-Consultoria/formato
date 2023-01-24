import styles from './strategy-section.module.scss';
import { blinker } from '../../utils/_fonts';

import cx from 'clsx';

export default function StrategySection() {
    return (
      <section className={cx(styles.strategy, blinker.className)}>
        <div className={styles.title_and_description}>
          <h2>ESTRATEGIA</h2>
          <p>O que vimos ontem, pode não ser suficiente para encarar o que nos espera hoje. Estamos sempre abertos a novas perspectivas. Nos desafiamos a ser mais simples e efetivos. Focamos no essencial e abraçamos problemas complexos através de abordagens estratégicas e inovadoras. Não esperamos que bons negócios aconteçam por acaso, em vez disso, planejamos, definimos condições para evolução e aprendemos ao longo do caminho.</p>
        </div>

        <div className={styles.strategys_and_image}>
          <div className={styles.first_block}>
            <div className={styles.mindset}>
              <h3>1. MINDSET</h3>
              <p>Grandes ideias falham quando não temos uma empresa preparada para recebê-las. Nos aproximamos do nosso propósito e nos conectamos com que o outro pensa e sente. Somos abertos ao crescimento, é isso que enriquece a nossa caminhada.</p>
            </div>

            <div className={styles.estrategia}>
              <h3>2. ESTRATÉGIA</h3>
              <p>A rotina que absorvemos em nossos negócios pode nos fazer perder o apetite pela inovação. Bons líderes estão abertos a novas perspectivas. Juntos, criamos condição para que boas ideias tenham oportunidade de se estabelecerem. Ajudar cada pessoa a se conectar de forma genuína a esta jornada.</p>
            </div>
          </div>

          <div className={styles.secound_block}>
            <div className={styles.metricas}>
              <h3>3. MÉTRICAS</h3>
              <p>As descobertas que fazemos com nossas escolhas podem influenciar no que fazemos no próximo passo. Definir pontos de evolução, nos instiga mesmo nos momentos que não estamos tão engajados. Não existe frustração em experimentar, o que existem são resultados inesperados que podem ser monitorados. É assim que constantemente nos adaptamos e criamos soluções relevantes para nossos clientes, olhando para o que realmente importa!</p>
            </div>

            <div className={styles.evolucao}>
              <h3>4. EVOLUÇÃO</h3>
              <p>Todos estamos em constante evolução, cada um pode combinar vários elementos para construir algo. Buscamos respeitar o momento de vida e os objetivos de cada pessoa. Nossas ações estão suportadas em pequenas e constantes melhorias, reformulações são bem vindas. Ajudamos as pessoas a promoverem esse ambiente, no qual com colaboração e através de aprimoramento constante, sentem que são parte de um objetivo maior.</p>
            </div>
          </div>
        </div>
      </section>
    )
}