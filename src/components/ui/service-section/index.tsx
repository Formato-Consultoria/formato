import styles from './service-section.module.scss';
import { inter } from '@/utils/_fonts';
import { ArrowRight, Buildings } from '@/components/images/phosphor';

import ButttonGlobal from '@/components/button';
import Image from 'next/image';
import cx from 'clsx';
import Link from 'next/link';

export function ServiceSection() {
    return (
      <section className={cx(styles.services, inter.className)}>
        <div className={styles.container_services}>
          <div className={cx(styles.box_services, styles.black, "ring-2 ring-zinc-950/10")}>
            <Image
              src="/icons/consultor.png"
              alt="consultoria"
              width={40}
              height={40}
            />

            <p>Consultorias Empresarial</p>
            <small>Consultores com experiência prática de mercado e especializados em gestão e inovação. Consultorias de finanças, marketing, processos, modelagem de negócios e transformação digital.</small>
          </div>

          <div className={cx(styles.box_services, "ring-2 ring-zinc-950/10")}>
            <Image
              src="/icons/workshop.png"
              alt="workshop"
              width={40}
              height={40}
            />
            <p>Workshop</p>
            <small>Profissionais com know-how em metodologias ativas e expertise gerencial. Atuamos com abordagens inovativas e personalizadas. Conduzimos workshops de elaboração de planejamento estratégico, melhoria da produtividade e gestão por indicadores.</small>
          </div>

          <div className={cx(styles.box_services, styles.black, "ring-2 ring-zinc-950/10")}>
            <Image
              src="/icons/mentoria_tecnica.png"
              alt="mentoria técnica"
              width={40}
              height={40}
            />
            <p>Mentoria Técnica</p>
            <small>Mentoria de negócios focadas em colaborar com objetivos de projetos a serem atingidos. Ajudamos na definição  do desafio, desenhamos um processo de desenvolvimento e contribuímos para acelerar a entrega de resultados.</small>
          </div>
        </div>
        
        <Link href="/servicos">
          <ButttonGlobal
            value="Conhecer todos os serviços"
            icone={<ArrowRight size={20}/>}
          />
        </Link>
      </section>
    )
}