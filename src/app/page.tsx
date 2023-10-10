import { AboutSection } from "@/components/ui/section-about";
import { ContactSection } from "@/components/ui/section-contact";
import { PrincipalSection } from "@/components/ui/section-principal";
import { StrategySection } from "@/components/ui/section-strategy";
import { ServiceSection } from "@/components/ui/service-section";

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