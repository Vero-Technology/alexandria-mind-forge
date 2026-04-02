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
      className="relative py-32 px-6"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        {/* Header row: title left, stats right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl tracking-tight">
              Alexandria is AI-Native
            </h2>
          </div>
          <div className="flex items-center gap-8 shrink-0">
            <div className="text-right">
              <p className="text-4xl font-display text-foreground tracking-tight">50+</p>
              <p className="text-mono text-[10px] text-muted-foreground mt-1">Indexed Pharmaceutical Sources</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-right">
              <p className="text-4xl font-display text-foreground tracking-tight">540M+</p>
              <p className="text-mono text-[10px] text-muted-foreground mt-1">Academic Resources</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/60 text-lg max-w-2xl mb-20">
          Alexandria is an agentic research platform built on an interconnected web of every major pharmaceutical dataset. Ask complex questions, get decision-ready answers — in hours, not weeks.
        </p>

        {/* Knowledge Domains — left-aligned grid */}
        <div>
          <h3 className="text-xs text-mono uppercase tracking-widest text-muted-foreground mb-8">
            Knowledge Domains
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
            {dataDomains.map((domain) => (
              <p
                key={domain}
                className="text-base text-foreground/60 hover:text-foreground transition-colors duration-200 cursor-default"
              >
                {domain}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;
