import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

const dataDomains = [
  "Research Papers & Metadata",
  "Clinical Trials",
  "Biomarker & Target Databases",
  "Drug & Compound Data",
  "Patent Intelligence",
  "Regulatory Intelligence",
  "Protein & Pathway Data",
  "Failed Trial Knowledge Base",
  "Conference Abstracts",
  "FDA Reviewer Profiling",
  "Earnings Call Sentiment",
];

const ArchitectureSection = () => {
  const { ref, opacity, y, scale } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y, scale }}
      className="relative py-32 px-6"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        {/* Stats — top right, at section border */}
        <div className="flex justify-end gap-10 -mt-10 mb-14">
          <div className="text-right">
            <p className="text-4xl font-display text-foreground tracking-tight">50+</p>
            <p className="text-mono text-[10px] text-muted-foreground mt-1">Indexed Pharmaceutical Sources</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-right">
            <p className="text-4xl font-display text-foreground tracking-tight">540M+</p>
            <p className="text-mono text-[10px] text-muted-foreground mt-1">Academic Resources</p>
          </div>
        </div>

        {/* Title */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Alexandria is AI-Native
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl">
            Alexandria is an agentic research platform built on an interconnected index of every major pharmaceutical dataset. Ask complex questions, get decision-ready answers — in hours, not weeks.
          </p>
        </div>

        {/* Knowledge Domains */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <h3 className="text-2xl md:text-3xl tracking-tight mb-6 text-center">
              Knowledge Domains
            </h3>
            <div className="relative">
              <div
                className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, hsl(var(--background)), transparent)" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-14 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
              />

              <div
                ref={scrollRef}
                className="overflow-y-auto max-h-[320px] py-6 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="space-y-5">
                  {dataDomains.map((domain) => (
                    <p
                      key={domain}
                      className="text-center text-lg font-medium text-foreground/65 hover:text-foreground transition-colors duration-200 cursor-default"
                    >
                      {domain}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </motion.section>
  );
};

export default ArchitectureSection;
