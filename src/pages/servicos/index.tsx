import { ReactElement } from 'react';
import cx from 'clsx';

import style from './services.module.scss';
import { contentService, typeService } from '../../@types/services';

import BannerTitle from '../../components/title-page-banner';
import ServicesSessionBox from '../../ui/services-session-box';

import { services } from '../../content/all-services';

export default function Services() {
  const listServiceByType = (
    type: typeService
  ): ReactElement<contentService>[] => {

    const arrServices = Object.values(services).filter(service => service.typeService === type);

    return (
      arrServices.map((s: contentService) => (
        <ServicesSessionBox
          key={s.slug}
          url={`/servicos/${s.slug}`}
          icon={s.icon}
          title={s.title}
          bannerImg={s.bannerImg}
        >
          {s.description}
        </ServicesSessionBox>
      ))
    )
  }

  return (
    <>
      <BannerTitle
        value="Serviços"
        src="/images/services_hero.jpg"
      />

      <section className={cx(style.serviceContainer, style.section)}>
        <h2>Conheça todos os nossos serviços</h2>

        <div className={style.sectionServices}>
          <>
            <h3>Consultorias para Empresas Locais</h3>

            {listServiceByType('CEL')}
          </>
        </div>

        <div className={style.sectionServices}>
          <h3>Workshops</h3>

          {listServiceByType('WORKSHOPS')}
        </div>

        <div className={style.sectionServices}>
          <h3>Mentoria Técnica</h3>

          {listServiceByType('MT')}
        </div>
      </section>
    </>
  )
}