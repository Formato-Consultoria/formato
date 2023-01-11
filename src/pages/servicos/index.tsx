import style from "./services.module.scss";
import BannerTitle from "../../components/title-page-banner";

import cx from "clsx";

import ServicesSessionBox from "../../ui/services-session-box";

import {
  BusinessModeling,
  DigitalMarketing,
  DigitalTransformation,
  Finance,
  IndicatorsMetrics,
  InnovationBusinessModel,
  LeanProduction,
  ManagementOKRS,
  Marketing,
  ProductivityTaskManagement,
  QualityProductivity,
  StrategicPlanning
} from "../../ui/images/pngs";

export default function Services() {
  return (
    <>
      <BannerTitle
        value="Serviços"
        src="/images/services_hero.jpg"
      />

      <section className={cx(style.serviceContainer, style.section)}>
        <h2>Conheça todos os nossos serviços</h2>

        <div className={style.sectionServices}>
          <h3>Consultorias para Empresas Locais</h3>

          <ServicesSessionBox
            url={"/servicos"}
            icon={Finance.src}
            title={"Finanças"}
            bannerImg="/teste/finance.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          <ServicesSessionBox
            url={"/servicos"}
            icon={Marketing.src}
            title={"Marketing"}
            bannerImg="/teste/marketing.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          <ServicesSessionBox
            url={"/servicos"}
            icon={DigitalMarketing.src}
            title={"Marketing digital"}
            bannerImg="/teste/marketing.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          <ServicesSessionBox
            url={"/servicos"}
            icon={BusinessModeling.src}
            title={"Modelagem de negocios"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          <ServicesSessionBox
            url={"/servicos"}
            icon={LeanProduction.src}
            title={"Produção enxuta"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>
        </div>

        <div className={style.sectionServices}>
          <h3>Workshops</h3>

          <ServicesSessionBox
            url={"/servicos"}
            icon={StrategicPlanning.src}
            title={"Planejamento estrategico"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          <ServicesSessionBox
            url={"/servicos"}
            icon={ManagementOKRS.src}
            title={"Gestão por OKRS"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          
          <ServicesSessionBox
            url={"/servicos"}
            icon={ProductivityTaskManagement.src}
            title={"Produtividade e gestão de tarefas"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          <ServicesSessionBox
            url={"/servicos"}
            icon={IndicatorsMetrics.src}
            title={"Indicadores e metricas"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>
        </div>

        <div className={style.sectionServices}>
          <h3>Mentoria Técnica</h3>

          <ServicesSessionBox
            url={"/servicos"}
            icon={InnovationBusinessModel.src}
            title={"Inovação e Modelo de Negócio"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>
          
          <ServicesSessionBox
            url={"/servicos"}
            icon={QualityProductivity.src}
            title={"Qualidade e Produtividade"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>

          <ServicesSessionBox
            url={"/servicos"}
            icon={DigitalTransformation.src}
            title={"Transformação Digital"}
            bannerImg="/teste/business-modeling.jpg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti fugit ullam libero natus nulla ad molestiae rem provident
          </ServicesSessionBox>
        </div>
      </section>
    </>
  )
}