import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const dataDomains = [
  "Research Papers",
  "Clinical Trials",
  "Biomarker Databases",
  "Drug & Compound Data",
  "Patent Intelligence",
  "Regulatory Intelligence",
  "Protein & Pathway Data",
  "Failed Trial Records",
  "Conference Abstracts",
  "FDA Reviewer Profiles",
  "Earnings Call Sentiment",
];

const ArchitectureSection = () => {
  const { ref, opacity, y, scale } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dataDomains.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y, scale }}
      className="relative py-10 px-6"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        {/* Title + description */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Alexandria is AI-Native
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl">
            An agentic research platform built on an interconnected web of every major pharmaceutical dataset. Ask complex questions, get decision-ready answers — in hours, not weeks.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-8 flex flex-col items-center justify-center">
            <p className="text-6xl md:text-7xl font-display text-foreground tracking-tight">50+</p>
            <p className="text-mono text-[11px] text-muted-foreground mt-3 tracking-wide">Indexed Pharmaceutical Sources</p>
          </div>
          <div className="border border-border rounded-lg p-8 flex flex-col items-center justify-center overflow-hidden">
            <p className="text-6xl md:text-7xl font-display text-foreground tracking-tight">540M+</p>
            <div className="h-5 mt-3 relative w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-mono text-[11px] text-muted-foreground tracking-wide absolute"
                >
                  {dataDomains[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;
