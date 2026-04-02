import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import GroundTruthSection from "@/components/GroundTruthSection";
import LeanTeamsSection from "@/components/LeanTeamsSection";
import MoatSection from "@/components/MoatSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ArchitectureSection />
      <GroundTruthSection />
      <LeanTeamsSection />
      <MoatSection />
    </main>
  );
};

export default Index;
