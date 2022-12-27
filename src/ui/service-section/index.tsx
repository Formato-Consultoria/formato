import styles from './service-section.module.scss';
import { inter } from '../../utils/_fonts';
import { ArrowRight, Buildings } from 'phosphor-react';

import ButttonGlobal from '../../components/button';
import Image from 'next/image';
import cx from 'clsx';
import Link from 'next/link';

export default function ServiceSection() {
    return (
        <section className={cx(styles.services, inter.className)}>
        <div className={styles.container_services}>
          <div className={cx(styles.box_services, styles.black)}>
            <Image
              src="/icons/consultor.png"
              alt="consultoria"
              width={40}
              height={40}
            />

            <p>Consultorias Empresarial</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={styles.box_services}>
            <Image
              src="/icons/workshop.png"
              alt="workshop"
              width={40}
              height={40}
            />
            <p>Workshop</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={cx(styles.box_services, styles.black)}>
            <Image
              src="/icons/mentoria_tecnica.png"
              alt="mentoria técnica"
              width={40}
              height={40}
            />
            <p>Mentoria Técnica</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>
        </div>
        
        {/* <Link href="/"> */}
          <ButttonGlobal text="Veja todos os serviços" icone={<ArrowRight size={20}/>} />
        {/* </Link> */}
      </section>
    )
}