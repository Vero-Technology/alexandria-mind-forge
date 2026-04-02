import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import GroundTruthSection from "@/components/GroundTruthSection";
import LeanTeamsSection from "@/components/LeanTeamsSection";
import MoatSection from "@/components/MoatSection";
import TextParallaxContentExample from "@/components/TextParallaxContent";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ArchitectureSection />
      <GroundTruthSection />
      <LeanTeamsSection />
      <MoatSection />
      <TextParallaxContentExample />
    </main>
  );
};

export default Index;
