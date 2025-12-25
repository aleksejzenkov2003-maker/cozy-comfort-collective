import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PriceSection from "@/components/PriceSection";
import TargetSection from "@/components/TargetSection";
import CooperationSection from "@/components/CooperationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <PriceSection />
      <TargetSection />
      <CooperationSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
