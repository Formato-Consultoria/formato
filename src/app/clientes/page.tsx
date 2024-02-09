import style from "./clients.module.scss";
import BannerTitle from "@/components/title-page-banner";

import Image from "next/image";
import cx from "clsx";

import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

import { QuoteSection } from "@/components/ui/section-quote";

import { TestimonialsBox } from "@/components/ui/comp-feedbacks-box";
import { Metadata } from "next";
import { blinker } from "@/utils/_fonts";
import { useMediaQuery } from "react-responsive";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Nossos Clientes",
  description: "Conheça alguns dos nossos clientes satisfeitos e veja como podemos ajudar você também.",
}

export default function Clients() {
    notFound();

    return (
      <>
        <WhatsappWidgetButton />

        <BannerTitle
          src="/images/cliente_hero.jpg"
          height={"350px"}
          styles={{
              containner: { width: '100%', outline: '1px solid rgba(0, 0, 0, .2)' },
          }}
        >
          <h1 className={cx("line-clamp-3 leading-tight md:leading-snug my-1 text-center text-white", blinker.className)}>Nossos clientes</h1>
        </BannerTitle>

        <section className={cx(style.container_clients, style.section)}>
          <QuoteSection
            img={"/teste/clientes_hero.jpg"}
          >
            Se existe um único segredo do sucesso, ele está
            na capacidade de ver as coisas do ponto de vista de
            outra pessoa.
          </QuoteSection>
        </section>
      </>
    )
}