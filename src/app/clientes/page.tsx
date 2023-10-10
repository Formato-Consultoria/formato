import style from "./clients.module.scss";
import BannerTitle from "@/components/title-page-banner";

import Image from "next/image";
import cx from "clsx";

import {
  cdl,
  farMelhor,
  garanti,
  maisBr,
  nexa,
  sebrae,
} from "@/components/images";
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

import { QuoteSection } from "@/components/ui/section-quote";
import { InfiniteScrollCarousel } from "@/components/ui/section-infinite-scroll-carousel";
import { TestimonialsBox } from "@/components/ui/comp-feedbacks-box";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Clientes",
  description: "Conheça alguns dos nossos clientes satisfeitos e veja como podemos ajudar você também.",
}

export default function Clients() {
    return (
      <>
        <BannerTitle
          src="/images/cliente_hero.jpg"
        >
          <p className={'text-2xl md:text-3xl text-white'}>Nossos clientes</p>
        </BannerTitle>

        <WhatsappWidgetButton />

        <section className={cx(style.container_clients, style.section)}>
          <QuoteSection
            img={"/teste/clientes_hero.jpg"}
          >
            Se existe um único segredo do sucesso, ele está
            na capacidade de ver as coisas do ponto de vista de
            outra pessoa.
          </QuoteSection>
          
          <div className={style.container_images_gallery}>
            <div className={style.images_gallery}>
                <div>
                  <Image
                    src={"/teste/B4.jpeg"}
                    fill
                    alt="hero4 img"
                  />
                </div>
                <div>
                  <Image
                    src={"/teste/B2.jpeg"}
                    fill
                    alt="hero2 img"
                  />
              </div>
            </div>

            <div className={style.images_gallery}>
                <div>
                  <Image
                    src={"/teste/B5.jpeg"}
                    fill
                    alt="hero5 img"
                  />
                </div>
                <div>
                  <Image
                    src={"/teste/B3.jpeg"}
                    fill
                    alt="her3 img" 
                  />
                </div>
                <div>
                  <Image
                    src={"/teste/B1.jpeg"}
                    fill
                    alt="hero1 img"
                  />
                </div>
            </div>
          </div>

          {/* video */}

          <InfiniteScrollCarousel
            images={[
              nexa.src,
              sebrae.src,
              farMelhor.src,
              cdl.src,
              garanti.src,
              maisBr.src
            ]}
          />

          <div className={style.depositions_section}>
            <h2>Veja os depoimentos de nossos clientes</h2>

            <div className={style.container_testimonials_box}>
              <TestimonialsBox
                imgBnr={"/teste/Dp1.jpeg"}
                companyName={"Aniplex"}
                personImg={"/teste/Robert.png"}
                personName={"Bob Robert"}
                personProfession={"Gerente de projetos"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>

              <TestimonialsBox
                imgBnr={"/teste/Dp2.jpeg"}
                companyName={"Mercearia do Marcos"}
                personImg={"/teste/Marcos.jpeg"}
                personName={"Marcos"}
                personProfession={"Gerente geral"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>

              <TestimonialsBox
                imgBnr={"/teste/Dp2.jpeg"}
                companyName={"Mercearia do Marcos"}
                personImg={"/teste/Marcos.jpeg"}
                personName={"Marcos"}
                personProfession={"Gerente geral"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>

              <TestimonialsBox
                imgBnr={"/teste/Dp1.jpeg"}
                companyName={"Aniplex"}
                personImg={"/teste/Robert.png"}
                personName={"Bob Robert"}
                personProfession={"Gerente de projetos"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>

              <TestimonialsBox
                imgBnr={"/teste/Dp2.jpeg"}
                companyName={"Mercearia do Marcos"}
                personImg={"/teste/Marcos.jpeg"}
                personName={"Marcos"}
                personProfession={"Gerente geral"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>

              <TestimonialsBox
                imgBnr={"/teste/Dp2.jpeg"}
                companyName={"Mercearia do Marcos"}
                personImg={"/teste/Marcos.jpeg"}
                personName={"Marcos"}
                personProfession={"Gerente geral"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>

              <TestimonialsBox
                imgBnr={"/teste/Dp2.jpeg"}
                companyName={"Mercearia do Marcos"}
                personImg={"/teste/Marcos.jpeg"}
                personName={"Marcos"}
                personProfession={"Gerente geral"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>

              <TestimonialsBox
                imgBnr={"/teste/Dp2.jpeg"}
                companyName={"Mercearia do Marcos"}
                personImg={"/teste/Marcos.jpeg"}
                personName={"Marcos"}
                personProfession={"Gerente geral"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                Necessitatibus illum esse praesentium quia. Deserunt quis itaque dolores odio, repellendus
                enim est laudantium, illo fugit nemo velit error, eius magnam cupiditate.
              </TestimonialsBox>
            </div>
          </div>
        </section>
      </>
    )
}