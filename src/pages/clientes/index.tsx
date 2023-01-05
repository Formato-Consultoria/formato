import style from "./clients.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";
import QuoteSection from "../../ui/quote-section";
import TestimonialsBox from "../../ui/testimonials-box";

export default function Clients() {
    return (
      <>
        <BannerTitle
          value="Clientes"
          src="/images/cliente_hero.jpg"
        />

        <section className={cx(style.container_clients, style.section)}>
          <QuoteSection
            img={"/teste/clientes_hero.jpg"}
          >
            Se existe um único segredo do sucesso, ele está
            na capacidade de ver as coisas do ponto de vista de
            outra pessoa.
          </QuoteSection>
          
          <div className={style.container_images}>
            <div className={style.imgs_box}>
                <div><img src={"/teste/B4.jpeg"} alt="hero4 img" /></div>
                <div><img src={"/teste/B2.jpeg"} alt="hero2 img" /></div>
            </div>

            <div className={style.imgs_box}>
                <div><img src={"/teste/B5.jpeg"} alt="hero5 img" /></div>
                <div><img src={"/teste/B3.jpeg"} alt="her3 img" /></div>
                <div><img src={"/teste/B1.jpeg"} alt="hero1 img" /></div>
            </div>
          </div>

          {/* video */}

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