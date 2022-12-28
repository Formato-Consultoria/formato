import PrincipalSection from '../ui/principal-section';
import StrategySection from '../ui/strategy-section';
import ServiceSection from '../ui/service-section';
import AboutSection from '../ui/about-section';
// import LastsPostsSection from '../parts/lasts-posts';
import ContactSection from '../ui/contact-section.scss';

import WhatsappWidgetButton from '../components/whatsapp-widget-button';

export default function Home() {
  return (
    <>
      <PrincipalSection />
      <WhatsappWidgetButton />

      <StrategySection />
      <ServiceSection />
      <AboutSection />
      {/* <LastsPostsSection /> */}
      <ContactSection />
    </>
  )
}