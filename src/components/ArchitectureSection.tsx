import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y, scale }}
      className="relative py-10 px-6"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        {/* Big stats row */}
        <div className="grid grid-cols-2 gap-6 mb-20">
          <div className="border border-border rounded-lg p-8 flex flex-col items-center justify-center">
            <p className="text-6xl md:text-7xl font-display text-foreground tracking-tight">50+</p>
            <p className="text-mono text-[11px] text-muted-foreground mt-3 tracking-wide">Indexed Pharmaceutical Sources</p>
          </div>
          <div className="border border-border rounded-lg p-8 flex flex-col items-center justify-center">
            <p className="text-6xl md:text-7xl font-display text-foreground tracking-tight">540M+</p>
            <p className="text-mono text-[11px] text-muted-foreground mt-3 tracking-wide">Academic Resources</p>
          </div>
        </div>

        {/* Title + description */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Alexandria is AI-Native
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl">
            An agentic research platform built on an interconnected web of every major pharmaceutical dataset. Ask complex questions, get decision-ready answers — in hours, not weeks.
          </p>
        </div>

        {/* Knowledge domains — compact inline tags */}
        <div className="flex flex-wrap gap-2">
          {dataDomains.map((domain) => (
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
