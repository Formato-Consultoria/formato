import { ReactElement } from "react";
import cx from "clsx";

import style from "./services.module.scss";
import { contentService, typeService } from "@/@types/services";

import BannerTitle from "@/components/title-page-banner";
import ServicesSessionBox from "@/ui/section-services-box";

import { services } from "@/content/all-services";
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

export default function Services() {
  const listServiceByType = (
    type: typeService
  ): ReactElement<contentService>[] => {

    const arrServices = Object.values(services).filter(service => service.typeService === type);

    return (
      arrServices.map((s: contentService) => (
        <ServicesSessionBox
          key={s.slug}
          url={`/servicos/${s.slug}`}
          icon={s.icon}
          title={s.title}
          bannerImg={s.bannerImg}
        >
          {s.description}
        </ServicesSessionBox>
      ))
    )
  }

  return (
    <>
      <BannerTitle
        value="Serviços"
        src="/images/services_hero.jpg"
      />
      
      <WhatsappWidgetButton />

      <section className={cx(style.serviceContainer, style.section)}>
        <h2>Conheça todos os nossos serviços</h2>

        <div className={style.sectionServices}>
          <>
            <h3>Consultorias para Empresas Locais</h3>
            <p>Melhore a performance e rentabilidade da sua empresa com os serviços de consultoria da Formato Consultoria. Nossa equipe de consultores altamente qualificados em finanças, marketing, recursos humanos e operações pode ajudá-lo a identificar oportunidades de crescimento, otimizar processos, aumentar a eficiência e produtividade, reduzir custos e criar soluções personalizadas e sustentáveis para as suas necessidades empresariais. Trabalharemos juntos para alcançar resultados tangíveis e duradouros para o seu negócio.</p>
            
            {listServiceByType('CEL')}
          </>
        </div>

        <div className={style.sectionServices}>
          <h3>Workshops</h3>
          <p>Capacite sua equipe para atingir metas mais ambiciosas com os workshops práticos e interativos da Formato Consultoria. Com uma ampla gama de tópicos, desde liderança até marketing digital e finanças empresariais, nossos workshops são adaptados às suas necessidades específicas. Desenvolva habilidades críticas em um ambiente de aprendizado colaborativo e hands-on para o sucesso empresarial.</p>

          {listServiceByType('WORKSHOPS')}
        </div>

        <div className={style.sectionServices}>
          <h3>Mentoria Técnica</h3>
          <p>Enfrente desafios técnicos específicos em sua empresa com a mentoria técnica da Formato Consultoria. Nossos mentores técnicos são profissionais experientes em tecnologia da informação, engenharia, design e outras áreas técnicas, prontos para oferecer conhecimento especializado, conselhos e direcionamento personalizado. Trabalhando juntos, encontraremos soluções práticas e eficazes para seus desafios empresariais complexos.</p>

          {listServiceByType('MT')}
        </div>
      </section>
    </>
  )
}