import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const dataDomains = [
  { name: "Pharma Research Papers", count: "100M+" },
  { name: "Clinical Trials", count: "900K+" },
  { name: "Biomarkers", count: "10M+" },
  { name: "Drug & Compound Data", count: "24M+" },
  { name: "Pharma Patents", count: "1M+" },
  { name: "Protein & Pathways", count: "13M+" },
  { name: "FDA & EMA Records", count: "100K+" },
  { name: "Failed Trials", count: "60K+" },
  { name: "Conference Abstracts", count: "250K+" },
];

const domainPills = [
  "Research Papers",
  "Clinical Trials",
  "Biomarkers",
  "Drug Data",
  "Patents",
  "Regulatory",
  "Protein & Pathways",
  "Failed Trials",
  "Conference Abstracts",
  "FDA Profiling",
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
      className="relative py-16 px-6"
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

        {/* Stats */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Static stat */}
          <div className="flex flex-col items-center justify-center py-6 px-8">
            <p className="text-4xl md:text-5xl font-display text-foreground tracking-tight">50+</p>
            <p className="text-mono text-sm text-muted-foreground tracking-wide mt-2">Indexed Pharmaceutical Sources</p>
          </div>

          {/* Rotating stat */}
          <div className="flex flex-col items-center justify-center py-6 px-8 overflow-hidden">
            <div className="h-12 relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-4xl md:text-5xl font-display text-foreground tracking-tight absolute"
                >
                  {dataDomains[currentIndex].count}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="h-6 relative flex items-center justify-center mt-2">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-mono text-sm text-muted-foreground tracking-wide absolute whitespace-nowrap"
                >
                  {dataDomains[currentIndex].name}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Knowledge domain pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {domainPills.map((domain) => (
            <span
              key={domain}
              className="px-4 py-2 text-sm text-foreground/50 border border-border rounded-full hover:text-foreground hover:border-foreground/30 transition-colors duration-200 cursor-default"
            >
              {domain}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;
