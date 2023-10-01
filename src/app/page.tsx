import { AboutSection } from "@/components/ui/section-about";
import { ContactSection } from "@/components/ui/section-contact";
import { PrincipalSection } from "@/components/ui/section-principal";
import { StrategySection } from "@/components/ui/section-strategy";
import { ServiceSection } from "@/components/ui/service-section";

import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Formato Consultoria',
  description: 'Ajudamos a conectar pessoas a seus negócios. Buscamos inovação e crescimento pessoal. Alinhamos objetivos, criamos conexão e colocamos ideias brilhantes em prática.',
}

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