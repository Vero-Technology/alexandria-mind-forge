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
        {/* Header row: title left, stats right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
              Alexandria is AI-Native
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl">
              Alexandria is an agentic research platform built on an interconnected web of every major pharmaceutical dataset. Ask complex questions, get decision-ready answers — in hours, not weeks.
            </p>
          </div>
          <div className="flex gap-10 flex-shrink-0">
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
        </div>

        {/* Knowledge Domains — scrollable with progressive blur */}
        <div>
          <p className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-4">
            Knowledge Domains
          </p>
          <div className="relative">
            {/* Top blur */}
            <div
              className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, hsl(var(--background)), transparent)",
              }}
            />
            {/* Bottom blur */}
            <div
              className="absolute bottom-0 left-0 right-0 h-12 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, hsl(var(--background)), transparent)",
              }}
            />

            <div
              ref={scrollRef}
              className="overflow-y-auto max-h-[220px] py-4 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="space-y-4">
                {dataDomains.map((domain, i) => (
                  <div key={domain} className="flex items-center gap-4 group px-1">
                    <span className="text-mono text-[10px] text-muted-foreground/30 tabular-nums w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-foreground/55 group-hover:text-foreground transition-colors duration-200">
                      {domain}
                    </span>
                  </div>
                ))}
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
