import style from "./services.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";

import ServicesSessionBox from "../../ui/services-session-box";
import { Finance, Marketing } from "../../ui/svgs";

export default function Services() {
  return (
    <>
      <BannerTitle
        value="Serviços"
        src="/images/services_hero.jpg"
      />

      <section className={cx(style.serviceContainer, style.section)}>
        <h2>Conheça todos os nossos serviços</h2>

        <ServicesSessionBox
          id={"financas"}
          icon={<Finance />}
          title={"Finanças"}
          bannerImg="/teste/finance.jpg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti fugit ullam libero natus nulla ad molestiae rem provident,
          atque sed aliquam architecto ipsam error qui est, debitis unde consequatur sequi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti fugit ullam libero natus nulla ad molestiae rem provident,
          atque sed aliquam architecto ipsam error qui est, debitis unde consequatur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti fugit ullam libero natus nulla ad molestiae rem provident,
          atque sed aliquam architecto ipsam error qui est, debitis unde consequatur sequi.
        </ServicesSessionBox>

        <ServicesSessionBox
          id={"marketing"}
          icon={<Marketing />}
          title={"Marketing"}
          bannerImg="/teste/marketing.jpg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti fugit ullam libero natus nulla ad molestiae rem provident,
          atque sed aliquam architecto ipsam error qui est, debitis unde consequatur sequi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti fugit ullam libero natus nulla ad molestiae rem provident,
          atque sed aliquam architecto ipsam error qui est, debitis unde consequatur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti fugit ullam libero natus nulla ad molestiae rem provident,
          atque sed aliquam architecto ipsam error qui est, debitis unde consequatur sequi.
        </ServicesSessionBox>
      </section>
    </>
    )
}