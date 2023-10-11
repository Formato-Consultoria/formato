import style from "./about.module.scss";
import Image from "next/image";

import {
  Collaboration,
  Commitment,
  CriticalThinking,
  Dialogue,
  OpennessChallenges,
  Respect,
  Willpower
} from "@/components/images";

import WhatsappWidgetButton from "@/components/whatsapp-widget-button";
import ReactPlayerMedia from "@/components/react-player";
import BannerTitle from "@/components/title-page-banner";
import cx from "clsx";

import { PillarBoxCard } from "@/components/ui/comp-pillar-box";
import { ContactSection } from "@/components/ui/section-contact";

import GallerySection from "@/components/ui/section-image-gallery";
import { Metadata } from "next";
import { blinker } from "@/utils/_fonts";
import { StrategySection } from "@/components/ui/section-strategy";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Descubra quem somos, nossa jornada, valores e compromisso com a excelência. Conheça a equipe por trás da nossa empresa e saiba como estamos fazendo a diferença.",
}

// TODO: não funciona a animação e toggle do btn de Play para o btn Pouse
export default async function PageAbout() {
  const videos = [
    "https://youtu.be/IAnzAWt5tCI",
    "https://youtu.be/Cm9QLc1azl4"
]

  return (
    <>
      <BannerTitle
        src={"/images/quem_somos_hero.jpg"}
        height={"200px"}
        styles={{
          containner: { width: '100%', outline: '1px solid rgba(0, 0, 0, .2)' },
        }}
      >
        <h1 className={cx("line-clamp-3 leading-tight md:leading-snug my-1 text-center text-white", blinker.className)}>Quem somos?</h1>
      </BannerTitle>
      
      <WhatsappWidgetButton />

      <section className={cx(style.about, style.section)}>
        <h2>Um pouco da nossa história</h2>

        <div>
          <p>Desde 2017 atuamos no segmento de consultoria empresarial. Entendemos que a gestão pode ser feita de forma simples e também prazerosa.</p>
          <br />
          <p>Estamos sempre em busca de estratégias que reduzem a complexidade e focam no essencial. Somos apaixonados por negócios, temos uma vontade genuína de trabalhar pelo sucesso dos nossos clientes e fazer a diferença na vida de cada pessoa que está conosco.</p>
          <br />
          <p>Acreditamos que a inovação é essencial para nos conduzir ao futuro. Nossas intervenções são estratégicas e com ações conectadas com o que realmente importa. Desenvolvemos soluções personalizadas, que respeitam o momento de vida e os objetivos do seu negócio.Estamos abertos a novos desafios e acreditamos que juntos podemos criar um mundo cada vez melhor.</p>
        </div>
      </section>

      {/* Section Estrategia!! */}

      <section className={cx(style.logotipoAndInspirationMessage)}>
        <div className={style.logotipo_img}>
          <Image
            src={"/images/Logotipo_light.jpg"}
            fill
            alt="Logotipo"
          />
        </div>

        <div className={style.message}>
          <p>&ldquo;Ajudamos pessoas a se conectarem de forma genuína com seus negócios. Percebemos a gestão como um elemento simples e muito prazeroso. Focamos no essencial e abraçamos desafios através de abordagens inovadoras. Nos importamos com cada pessoa e fornecemos caminhos para impulsioná-las a serem mais prósperas e bem-sucedidas.&rdquo;</p>
        </div>
      </section>

      <StrategySection />

      <section className={cx(style.mediaContent, style.section)}>
        <ReactPlayerMedia videos={videos} />
      </section>

      <section className={cx(style.valueContainer, style.section)}>
        <div className={style.containerBox}>
          <h2>VALORES</h2>

          <div>
            <PillarBoxCard src={Respect.src} value={"Respeito"} />
            <PillarBoxCard src={OpennessChallenges.src} value={"Abertura a desafios"} />
            <PillarBoxCard src={Willpower.src} value={"Vontade"} />
            <PillarBoxCard src={Collaboration.src} value={"Colaboração"} />
            <PillarBoxCard src={CriticalThinking.src} value={"Pensamento Crítico"} />
            <PillarBoxCard src={Commitment.src} value={"Compromisso"} />
            <PillarBoxCard src={Dialogue.src} value={"Diálogo"} />
          </div>
        </div>
      </section>

      <GallerySection />
      <ContactSection />
    </>
  )
}