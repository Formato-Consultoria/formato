import style from "./clients.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";

export default function Clients() {
    return (
      <>
        <BannerTitle
          value="Clientes"
          src="/images/cliente_hero.jpg"
        />

        <section className={cx(style.containerClients, style.section)}>
          
        </section>
      </>
    )
}