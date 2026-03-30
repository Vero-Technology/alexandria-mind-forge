import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import GroundTruthSection from "@/components/GroundTruthSection";
import UseCasesSection from "@/components/UseCasesSection";
import MoatSection from "@/components/MoatSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ArchitectureSection />
      <GroundTruthSection />
      <UseCasesSection />
      <MoatSection />
    </main>
  );
};

export default Index;
