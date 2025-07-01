
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { FeaturedDoctors } from "@/components/FeaturedDoctors";
import { PharmacySection } from "@/components/PharmacySection";
import { LabTestsSection } from "@/components/LabTestsSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EmergencySection } from "@/components/EmergencySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 w-full max-w-full overflow-x-hidden">
      <Header />
      
      <main className="w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <ServicesOverview />
        <FeaturedDoctors />
        <PharmacySection />
        <LabTestsSection />
        <StatisticsSection />
        <TestimonialsSection />
        <EmergencySection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
