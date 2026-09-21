import Hero from "@/components/landing/hero/hero";
import TrustConsultationBar from "@/components/landing/TrustConsultationBar/TrustConsultationBar";
import Newsletter from "@/components/landing/newsletter-tab/newsletter-tab";
import About from "@/components/landing/about/about";
import PackFeatures from "@/components/landing/pack-features/pack-features";
import AddonServices from "@/components/landing/addon-services/addon-services";
import CtaBanner from "@/components/landing/cta-banner/CtaBanner";

import Footer from "@/components/footer/footer";

import CookieConsent from "@/components/cookie-consent/CookieConsent";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

     {/* Mobile: About only
    Desktop: TrustConsultationBar → About */}
<div className="flex flex-col">

  {/* Trust bar: desktop only */}
  <div className="hidden lg:block">
    <TrustConsultationBar />
  </div>

  {/* About: all screen sizes */}
  <div>
    <About />
  </div>

</div>

      <Newsletter />

      <PackFeatures />

<CtaBanner />

      <AddonServices />

      <CookieConsent />

      <Footer />

    </main>
  );
}