import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import medicalSummit from "@/assets/medical-summit.jpeg";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left column — text content */}
          <div className="flex flex-col justify-center py-4">
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
              Alexandria is AI-Native
            </h2>
            <p className="text-foreground/50 text-lg max-w-md mb-10">
              An agentic research platform built on an interconnected web of every major pharmaceutical dataset.
            </p>

            <div className="space-y-0">
              {[
                { label: "50+ indexed pharmaceutical sources", bold: true },
                { label: "AI-powered cross-dataset linkage", bold: false },
                { label: "Decision-ready answers in minutes, not weeks", bold: false },
                { label: "Full traceability on every data point", bold: true, description: "Every result shows its source, when it was indexed, and how often it refreshes." },
                { label: "Structured for instant analysis", bold: false },
              ].map((item, i) => (
                <div key={i} className="border-t border-border py-4">
                  <p className={`text-sm ${item.bold ? 'text-foreground font-medium' : 'text-foreground/40'}`}>
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="text-sm text-foreground/40 mt-1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image with overlay card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[520px]">
            <img
              src={medicalSummit}
              alt="Medical summit conference"
              className="w-full h-full object-cover absolute inset-0"
            />

            {/* Floating overlay card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg">
              <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-1">
                Indexed Data
              </p>

              <div className="mb-4">
                <div className="h-10 relative">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`count-${currentIndex}`}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-3xl font-display text-foreground tracking-tight absolute"
                    >
                      {dataDomains[currentIndex].count}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <div className="h-5 relative">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`name-${currentIndex}`}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-sm text-foreground/50 absolute"
                    >
                      {dataDomains[currentIndex].name}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Domain pills inside card */}
              <div className="flex flex-wrap gap-1.5">
                {domainPills.map((domain) => (
                  <span
                    key={domain}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors duration-300 ${
                      dataDomains[currentIndex]?.name.toLowerCase().includes(domain.toLowerCase().split(" ")[0].toLowerCase())
                        ? "bg-foreground text-background border-foreground"
                        : "text-foreground/40 border-border"
                    }`}
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;
