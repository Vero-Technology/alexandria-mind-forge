import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const dataDomains = [
  { name: "Research Papers", count: "42M+" },
  { name: "Clinical Trials", count: "850K+" },
  { name: "Biomarker Databases", count: "12M+" },
  { name: "Drug & Compound Data", count: "38M+" },
  { name: "Patent Intelligence", count: "95M+" },
  { name: "Regulatory Intelligence", count: "6M+" },
  { name: "Protein & Pathway Data", count: "28M+" },
  { name: "Failed Trial Records", count: "320K+" },
  { name: "Conference Abstracts", count: "18M+" },
  { name: "FDA Reviewer Profiles", count: "45K+" },
  { name: "Earnings Call Sentiment", count: "2M+" },
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
  "Earnings Sentiment",
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

        {/* Stacked stats */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Static stat */}
          <div className="border border-border rounded-lg py-6 px-8 flex items-center justify-between">
            <p className="text-mono text-sm text-muted-foreground tracking-wide">Indexed Pharmaceutical Sources</p>
            <p className="text-4xl md:text-5xl font-display text-foreground tracking-tight">50+</p>
          </div>

          {/* Rotating stat */}
          <div className="border border-border rounded-lg py-6 px-8 flex items-center justify-between overflow-hidden">
            <div className="h-6 relative flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-mono text-sm text-muted-foreground tracking-wide absolute whitespace-nowrap"
                >
                  {dataDomains[currentIndex].name}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="h-12 relative flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-4xl md:text-5xl font-display text-foreground tracking-tight absolute right-0"
                >
                  {dataDomains[currentIndex].count}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Knowledge domain pills */}
        <div className="flex flex-wrap gap-2">
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
