import style from "./about.module.scss";
import BannerTitle from "../../components/title-page-banner";
// 
// import play from "/icons/play.svg";

import cx from "clsx";
import PillarBoxCard from "../../ui/pillar-box-card";
import { useState } from "react";

import Image from "next/image";

export default function About() {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <>
      <BannerTitle
        src="/images/quem_somos_hero.jpg"
        value="Quem somos"
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
          <PillarBoxCard src={"/icons/descoberta.png"} value={"DESCOBERTA"} />
          <PillarBoxCard src={"/icons/ideacao.png"} value={"IDEAÇÃO"} />
          <PillarBoxCard src={"/icons/modelagem.png"} value={"MODELAGEM"} />
          <PillarBoxCard src={"/icons/implantacao.png"} value={"IMPLANTAÇÃO"} />
        </div>
      </section>

      <section className={cx(style.mediaContent, style.section)}>
        {/* <span
          className={style.bg_shadow}
        >
          <button
            onClick={() => setIsPlay(true)}
          >
            <Image src={play} width={100}  height={100} alt="play" />
          </button>
        </span> */}

        <video
          loop
          autoPlay={false}
          muted={false}
          controls={false}
          className={cx(style.media_video)}
        >
          <source src={"/video/inspiration.mp4"} />
        </video>
      </section>
    </>
  )
}