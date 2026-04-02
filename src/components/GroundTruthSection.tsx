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

const GroundTruthSection = () => {
  const { ref, opacity, y, scale } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y, scale }}
      className="relative py-20 px-6"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-mono text-[10px] tracking-[0.3em] uppercase text-primary/60 block mb-2">
              Ground Truth
            </span>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Evidentiary Precision
            </h2>
          </div>
          <div className="flex gap-6">
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

        <p className="text-foreground/50 text-sm max-w-2xl mb-8">
          Every answer traces back to indexed, verifiable data across {dataDomains.length} knowledge domains.
        </p>

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

export default GroundTruthSection;
