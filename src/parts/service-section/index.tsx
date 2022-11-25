import styles from './service-section.module.scss';
import { inter } from '../../utils/_fonts';

import { ArrowRight, Buildings } from 'phosphor-react';

import ButttonGlobal from '../../components/button';

export default function ServiceSection() {
    return (
        <section className={`${styles.services} ${inter.className}`}>
        <div className={styles.container_services}>
          <div className={`${styles.box_services} ${styles.black}`}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={styles.box_services}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={`${styles.box_services} ${styles.black}`}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={styles.box_services}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={`${styles.box_services} ${styles.black}`}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={styles.box_services}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>
        </div>
        
        <ButttonGlobal text="Saiba Mais" icone={<ArrowRight size={20}/>} />
      </section>
    )
}