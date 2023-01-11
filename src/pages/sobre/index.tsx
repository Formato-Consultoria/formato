import style from "./about.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";
import { useRef, useState } from "react";

import PillarBoxCard from "../../ui/pillar-box-card";
import ReactPlayerMedia from "../../ui/react-player";

import ReactPlayer from "react-player";

import { Play, Pause} from "../../ui/images/svgs";
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
} from "../../ui/images/pngs";

// TODO: Fix: Fazer o play reiniciar quando chegar ao final da reprodução,

export default function About() {
  const [isPlay, setIsPlay] = useState(false);
  const [isNotPlayShadow, setIsNotPlayShadow] = useState(false);

  const playerRef = useRef<ReactPlayer>();

  function changeStartPlayState() {
    playerRef?.current?.seekTo(0, "seconds");

    setIsNotPlayShadow(true);
  }

  function changeEndPlayState() {
    playerRef?.current?.seekTo(0, "seconds");

    setIsPlay(false);
    setIsNotPlayShadow(false);
  }

  return (
    <>
      <BannerTitle
        src="/images/quem_somos_hero.jpg"
        value="Quem somos"
      />

      <section className={cx(style.about, style.section)}>
        <h2>Um pouco sobre a nossa história</h2>

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
          <img src={"/images/Logotipo_light.jpg"} alt="Logotipo dark" />
        </div>

        <div className={style.message}>
          <p>&ldquo;Ajudamos pessoas a se conectarem de forma genuína com seus negócios. Percebemos a gestão como um elemento simples e muito prazeroso. Focamos no essencial e abraçamos desafios através de abordagens inovadoras. Nos importamos com cada pessoa e fornecemos caminhos para impulsioná-las a serem mais prósperas e bem-sucedidas.&rdquo;</p>
        </div>
      </section>

      <section className={cx(style.mediaContent, style.section)}>
        <span
          className={cx(style.bg_shadow)}
          style={isNotPlayShadow ? { display: "none" } : { display: "flex" }}
        >
          <button
            onClick={() => setIsPlay(true)}
            className={cx(isPlay && style.play_ping_animation)}
            onAnimationEnd={changeStartPlayState}
          >
            {isPlay ? <Pause /> : <Play />}
          </button>
        </span>

        <div
          className={cx(style.media_video)}
        >
          <ReactPlayerMedia
            playerref={playerRef}
            url={"https://youtu.be/IAnzAWt5tCI"}
            loop={!isPlay}
            muted={!isPlay}
            // onEnded={changeEndPlayState}
          />
        </div>
      </section>

      <section className={cx(style.valueContainer, style.section)}>
        <div className={style.containerBox}>
          <h2>Nossos Valores</h2>

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
    </>
  )
}