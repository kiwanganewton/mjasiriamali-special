import Hero from "@/components/landing/hero/hero";
import TrustConsultationBar from "@/components/landing/TrustConsultationBar/TrustConsultationBar";
import Newsletter from "@/components/landing/newsletter-tab/newsletter-tab";
import About from "@/components/landing/about/about";
import PackFeatures from "@/components/landing/pack-features/pack-features";

import CookieConsent from "@/components/cookie-consent/CookieConsent";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      {/* Mobile: About → TrustConsultationBar
          Desktop: TrustConsultationBar → About */}
      <div className="flex flex-col">
        <div className="order-2 lg:order-1">
          <TrustConsultationBar />
        </div>

        <div className="order-1 lg:order-2">
          <About />
        </div>
      </div>

      <Newsletter />

      <PackFeatures />

      <CookieConsent />
    </main>
  );
}