import Image from "next/image";
import { ImageProps } from "@/@types/image-gallery";

import style from "./about.module.scss";
import cx from "clsx";

import {
  Collaboration,
  Commitment,
  CriticalThinking,
  Dialogue,
  Innovation,
  Metrics,
  Mindset,
  OpennessChallenges,
  Respect,
  Strategy,
  Willpower
} from "@/components/images";

import WhatsappWidgetButton from "@/components/whatsapp-widget-button";
import ReactPlayerMedia from "@/components/react-player";
import BannerTitle from "@/components/title-page-banner";

import { PillarBoxCard } from "@/components/ui/comp-pillar-box";
import { ContactSection } from "@/components/ui/section-contact";

import { GallerySection } from "@/components/ui/section-image-gallery";

// TODO: não funciona a animação e toggle do btn de Play para o btn Pouse
export default async function PageAbout() {
  return (
    <>
      <BannerTitle
        src="/images/quem_somos_hero.jpg"
      >
        <p className={'text-2xl md:text-3xl text-white'}>Quem somos?</p>
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

      <section className={cx(style.pillarsContainer, style.section)}>
        <div className={style.pillarsContent}>
          <PillarBoxCard src={Mindset.src} value={"MINDSET"} />
          <PillarBoxCard src={Strategy.src} value={"ESTRATÉGIA"} />
          <PillarBoxCard src={Metrics.src} value={"MÉTRICAS"} />
          <PillarBoxCard src={Innovation.src} value={"EVOLUÇÃO"} />
        </div>
      </section>

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

      <section className={cx(style.mediaContent, style.section)}>
        <ReactPlayerMedia />
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