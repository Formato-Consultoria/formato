import style from "./clients.module.scss";
import BannerTitle from "@/components/title-page-banner";

import cx from "clsx";

import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

import { blinker } from "@/utils/_fonts";
import { notFound } from "next/navigation";

export default function Clients() {
    notFound()
    return (
      <>
        <WhatsappWidgetButton />

        <BannerTitle
          src="/images/cliente_hero.jpg"
          height={"200px"}
          styles={{
              containner: { width: '100%', outline: '1px solid rgba(0, 0, 0, .2)' },
          }}
        >
          <h1 className={cx("line-clamp-3 leading-tight md:leading-snug my-1 text-center text-white", blinker.className)}>Nossos clientes</h1>
        </BannerTitle>

        <section className={cx(style.container_clients, style.section)}>
          {/* Conteúdo de pagina de cliente */}
        </section>
      </>
    )
}