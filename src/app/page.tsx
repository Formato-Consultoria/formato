import { AboutSection } from "@/ui/section-about";
import { ContactSection } from "@/ui/section-contact";
import { PrincipalSection } from "@/ui/section-principal";
import { StrategySection } from "@/ui/section-strategy";
import { ServiceSection } from "@/ui/service-section";

import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

function PageHome() {
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

export default PageHome;