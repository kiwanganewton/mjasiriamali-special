import Hero from "@/components/landing/hero/hero";
import TrustConsultationBar from "@/components/landing/TrustConsultationBar/TrustConsultationBar";

import About from "@/components/landing/about/about";
import PackFeatures from "@/components/landing/pack-features/pack-features";


export default function Home() {
  return (
    <main>

      <Hero />
      <TrustConsultationBar />
     
      <About />

      <PackFeatures />
     

      
    </main>
  );
}