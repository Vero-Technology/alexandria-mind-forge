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
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Alexandria is AI-Native
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mb-3">
            Alexandria is an agentic research platform built on an interconnected web of every major pharmaceutical dataset. Ask complex questions, get decision-ready answers — in hours, not weeks.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <p className="text-foreground/50 text-sm max-w-2xl">
            Every answer traces back to indexed, verifiable data across {dataDomains.length} knowledge domains.
          </p>
          <div className="flex gap-6 flex-shrink-0">
            <div>
              <p className="text-2xl font-display text-primary">50+</p>
              <p className="text-mono text-[10px] text-muted-foreground">Indexed Sources</p>
            </div>
            <div>
              <p className="text-2xl font-display text-primary">540M+</p>
              <p className="text-mono text-[10px] text-muted-foreground">Academic Resources</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {dataDomains.map((domain) => (
            <span
              key={domain}
              className="text-mono text-[11px] px-3.5 py-2 rounded-lg border border-border bg-card/40 text-foreground/70 hover:bg-card/80 hover:text-foreground transition-colors duration-200"
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
