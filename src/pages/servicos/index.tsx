import style from "./services.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";

export default function Services() {
    return (
      <>
        <BannerTitle
          value="Serviços"
          src="/images/services_hero.jpg"
        />

        <section className={cx(style.serviceContainer, style.section)}>

        </section>
      </>
    )
  }