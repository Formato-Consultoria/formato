import style from "./about.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";

export default function About() {
  return (
    <>
      <BannerTitle
        value="Quem somos"
        src="/images/quem_somos_hero.jpg"
      />

      <section className={cx(style.about, style.section)}>
        <h2>Formato Consultoria</h2>

        <div>
          <p>Desde 2017 atuamos no segmento de consultoria empresarial. Entendemos que a gestão pode ser feita de forma simples e também prazerosa.</p>
          <br />
          <p>Estamos sempre em busca de estratégias que reduzem a complexidade e focam no essencial. Somos apaixonados por negócios, temos uma vontade genuína de trabalhar pelo sucesso dos nossos clientes e fazer a diferença na vida de cada pessoa que está conosco.</p>
          <br />
          <p>Acreditamos que a inovação é essencial para nos conduzir ao futuro. Nossas intervenções são estratégicas e com ações conectadas com o que realmente importa. Desenvolvemos soluções personalizadas, que respeitam o momento de vida e os objetivos do seu negócio.Estamos abertos a novos desafios e acreditamos que juntos podemos criar um mundo cada vez melhor.</p>
        </div>
      </section>

      <section className={cx(style.pillars, style.section)}>
        <h2>Pilares</h2>

        <div className={style.pillarsContent}>
          <div className={style.box}>
          </div>
        </div>
      </section>
    </>
  )
}