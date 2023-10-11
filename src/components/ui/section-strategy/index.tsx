import styles from './strategy-section.module.scss';
import { blinker } from '@/utils/_fonts';

import cx from 'clsx';

export function StrategySection() {
    return (
      <section className={cx(styles.strategy, blinker.className)}>
        <div className={cx(styles.strategys)}>
          <div className={cx(styles.mindset, "ring-1 ring-zinc-950/10 hover:ring-[var(--primary-color-50)] duration-500 ease-in-out")}>
            <h3>1. MINDSET</h3>
            <p>Ideias exclusivas exigem uma empresa preparada para modificações. Buscamos alinhar objetivos, compreender as necessidades dos outros e abraçar o crescimento constante em nossa jornada.</p>
          </div>

          <div className={cx(styles.estrategia, "ring-1 ring-zinc-950/10 hover:ring-[var(--primary-color-50)] duration-500 ease-in-out")}>
            <h3>2. ESTRATÉGIA</h3>
            <p>A rotina empresarial pode obscurecer a criatividade, mas líderes inovadores mantêm-se abertos a novos pontos de vista e criam um ambiente propício para ideias brilhantes se desenvolverem. Conectamos as pessoas de forma autêntica à essa jornada, fomentando a inovação e o crescimento.</p>
          </div>

          <div className={cx(styles.metricas, "ring-1 ring-zinc-950/10 hover:ring-[var(--primary-color-50)] duration-500 ease-in-out")}>
            <h3>3. MÉTRICAS</h3>
            <p>Nossas escolhas moldam descobertas, impulsionam objetivos e geram resultados inesperados. Essa adaptabilidade nos permite criar soluções relevantes para nossos clientes, priorizando o que importa.</p>
          </div>

          <div className={cx(styles.evolucao, "ring-1 ring-zinc-950/10 hover:ring-[var(--primary-color-50)] duration-500 ease-in-out")}>
            <h3>4. EVOLUÇÃO</h3>
            <p>Constantemente nos atualizamos, respeitando a jornada de cada pessoa, buscando melhorias e promovendo trabalho em direção a um objetivo maior.</p>
          </div>
        </div>
      </section>
    )
}