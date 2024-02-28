import { AboutSection } from "@/components/ui/section-about";
import { ContactSection } from "@/components/ui/section-contact";
import GallerySection from "@/components/ui/section-image-gallery";
import { PrincipalSection } from "@/components/ui/section-principal";
import { ServiceSection } from "@/components/ui/service-section";
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";
import { InfiniteScrollCarousel } from "@/components/ui/section-infinite-scroll-carousel";

import LastPostSection from "@/components/last-posts-section";

import cx from "clsx";

import { PillarBoxCard } from "@/components/ui/comp-pillar-box";
import {
  Innovation,
  Metrics,
  Mindset,
  Strategy,
  cdl,
  farMelhor,
  garanti,
  maisBr,
  nexa,
  sebrae, } from "@/components/images";

const PageHome = () => {
  return (
    <>
      <WhatsappWidgetButton />

      <PrincipalSection />

      <ServiceSection />

      <AboutSection />

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

      <section className={cx(
        "w-full h-auto m-0 mb-0 p-0",
      )}>
        <div className={"w-full flex flex-wrap items-stretch justify-center gap-y-12 md:gap-10 lg:gap-[60px] bg-[var(--white-mediumn)] py-14"}>
          <PillarBoxCard src={Mindset.src} value={"MINDSET"} />
          <PillarBoxCard src={Strategy.src} value={"ESTRATÉGIA"} />
          <PillarBoxCard src={Metrics.src} value={"MÉTRICAS"} />
          <PillarBoxCard src={Innovation.src} value={"EVOLUÇÃO"} />
        </div>
      </section>

      <LastPostSection />

      <ContactSection />
    </>
  )
}

export default PageHome;