import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import UseCasesScrollSection from "@/components/UseCasesScrollSection";
import DemoSection from "@/components/DemoSection";
import MoatSection from "@/components/MoatSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ArchitectureSection />
      <UseCasesScrollSection />
      <DemoSection />
      <MoatSection />
    </main>
  );
};

export default Index;
