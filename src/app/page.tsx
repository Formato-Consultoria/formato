'use client'
import Sections from "@/ui";
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

export default function PageHome() {
  return (
    <>
      <Sections.PrincipalSection />
      <WhatsappWidgetButton />

      <Sections.StrategySection />
      <Sections.ServiceSection />
      <Sections.AboutSection />
      <Sections.ContactSection />
    </>
  )
}