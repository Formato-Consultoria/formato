import style from "./about.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";
import PillarBoxCard from "../../ui/pillar-box-card";

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

      <section className={cx(style.pillarsContainer, style.section)}>
        <h2>Estrategia</h2>

        <div className={style.pillarsContent}>
          <PillarBoxCard src={"/icons/descoberta.png"} title={"DESCOBERTA"} />
          <PillarBoxCard src={"/icons/ideacao.png"} title={"IDEAÇÃO"} />
          <PillarBoxCard src={"/icons/modelagem.png"} title={"MODELAGEM"} />
          <PillarBoxCard src={"/icons/implantacao.png"} title={"IMPLANTAÇÃO"} />
        </div>
      </section>

      <section className={style.mediaContent}>
        {/* <span className={style.bg_shadow}></span> */}

        <video src="https://www.youtube.com/watch?v=IAnzAWt5tCI&ebc=ANyPxKqUTB50iYbBANBb2q5OZ4Wvd8Fqjwh6K8eHTtZy3Qc6WuTDwcGReeSL80QH3hRSeev0zBZmtJOc8mmGk0TsSpHzHmCNAg"></video>
      </section>
    </>
  )
}