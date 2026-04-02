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
        {/* Header with stats top-right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
              Alexandria is AI-Native
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl">
              Alexandria is an agentic research platform built on an interconnected web of every major pharmaceutical dataset. Ask complex questions, get decision-ready answers — in hours, not weeks.
            </p>
          </div>
          <div className="flex gap-8 flex-shrink-0 md:pt-2">
            <div className="md:text-right">
              <p className="text-3xl font-display text-primary">50+</p>
              <p className="text-mono text-[10px] text-muted-foreground mt-0.5">Indexed Pharmaceutical Sources</p>
            </div>
            <div className="md:text-right">
              <p className="text-3xl font-display text-primary">540M+</p>
              <p className="text-mono text-[10px] text-muted-foreground mt-0.5">Academic Resources</p>
            </div>
          </div>
        </div>

        {/* Source list */}
        <div>
          <p className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-5">
            Knowledge Domains
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
            {dataDomains.map((domain, i) => (
              <div key={domain} className="flex items-center gap-2.5 group">
                <span className="text-mono text-[10px] text-muted-foreground/40 tabular-nums w-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] text-foreground/60 group-hover:text-foreground transition-colors duration-200">
                  {domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;
