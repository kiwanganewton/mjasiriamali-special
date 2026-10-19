import Hero from "@/components/landing/hero/hero";
import TrustConsultationBar from "@/components/landing/TrustConsultationBar/TrustConsultationBar";
import Newsletter from "@/components/landing/newsletter-tab/newsletter-tab";
import WhatsAppFloatingCta from "@/components/landing/whatsapp-floating-cta/whatsapp-floating-cta";
import ChatbotFloatingButton from "@/components/chatbot/ChatbotFloatingButton";
import About from "@/components/landing/about/about";
import PackFeatures from "@/components/landing/pack-features/pack-features";
import AddonServices from "@/components/landing/addon-services/addon-services";
import Faq from "@/components/landing/faq/faq";
import CtaBanner from "@/components/landing/cta-banner/CtaBanner";


import Footer from "@/components/footer/footer";

import CookieConsent from "@/components/cookie-consent/CookieConsent";
import Navbar from "@/components/navigation/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

     {/* Mobile: About only
    Desktop: TrustConsultationBar → About */}
<div className="flex flex-col">

  {/* Trust bar: desktop only */}
  <div className="hidden lg:block">
    <ScrollReveal>
      <TrustConsultationBar />
    </ScrollReveal>
  </div>

  {/* About: all screen sizes */}
  <div>
    <ScrollReveal>
      <About />
    </ScrollReveal>
  </div>

</div>

      <Newsletter />
      <WhatsAppFloatingCta />
      <ChatbotFloatingButton />

      <PackFeatures />

<CtaBanner />

      <AddonServices />

      <ScrollReveal>
        <Faq />
      </ScrollReveal>

      <CookieConsent />
       

      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  );
}
