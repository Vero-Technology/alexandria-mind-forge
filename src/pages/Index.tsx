import HeroSection from "@/components/HeroSection";
import DrugPlatformsSection from "@/components/DrugPlatformsSection";
import GeneralAISection from "@/components/GeneralAISection";
import ArchitectureSection from "@/components/ArchitectureSection";
import GroundTruthSection from "@/components/GroundTruthSection";
import UseCasesSection from "@/components/UseCasesSection";
import MoatSection from "@/components/MoatSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DrugPlatformsSection />
      <GeneralAISection />
      <ArchitectureSection />
      <GroundTruthSection />
      <UseCasesSection />
      <MoatSection />
    </main>
  );
};

export default Index;
