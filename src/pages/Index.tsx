import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import BonusSection from "@/components/landing/BonusSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <WhatIsSection />
      <WhatYouGetSection />
      <BonusSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
