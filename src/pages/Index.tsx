import HeroSection from "@/components/HeroSection";
import DrugPlatformsSection from "@/components/DrugPlatformsSection";
import GeneralAISection from "@/components/GeneralAISection";
import ArchitectureSection from "@/components/ArchitectureSection";
import GroundTruthSection from "@/components/GroundTruthSection";

import LeanTeamsSection from "@/components/LeanTeamsSection";
import MoatSection from "@/components/MoatSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DrugPlatformsSection />
      <GeneralAISection />
      <ArchitectureSection />
      
      <GroundTruthSection />
      <LeanTeamsSection />
      <MoatSection />
    </main>
  );
};

export default Index;
