import PrincipalSection from '../parts/principal-section';
import StrategySection from '../parts/strategy-section';
import ServiceSection from '../parts/service-section';
import AboutSection from '../parts/about-section';
import LastsPostsSection from '../parts/lasts-posts';
import ContactSection from '../parts/contact-section.scss';

import WhatsappWidgetButton from '../components/whatsapp_widget_button';

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