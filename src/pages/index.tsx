import PrincipalSection from "@/ui/section-principal";
import StrategySection from "@/ui/section-strategy";
import ServiceSection from "@/ui/service-section";
import AboutSection from "@/ui/section-about";
// import LastsPostsSection from "../parts/lasts-posts";
import ContactSection from "@/ui/section-contact";

import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

export default function Home() {
  return (
    <>
      <PrincipalSection />
      <WhatsappWidgetButton />

      <StrategySection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}