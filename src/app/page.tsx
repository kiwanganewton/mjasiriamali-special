import Hero from "@/components/landing/hero/hero";
import TrustConsultationBar from "@/components/landing/TrustConsultationBar/TrustConsultationBar";
import Newsletter from "@/components/landing/newsletter-tab/newsletter-tab";
import About from "@/components/landing/about/about";
import PackFeatures from "@/components/landing/pack-features/pack-features";

import CookieConsent from "@/components/cookie-consent/CookieConsent";

export default function Home() {
  return (
    <main>

      <Hero />
      <TrustConsultationBar />
      <Newsletter />
      <About />

      <PackFeatures />
     
  <CookieConsent />
      
    </main>
  );
}