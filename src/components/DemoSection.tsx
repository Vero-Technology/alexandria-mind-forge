import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DemoOutput from "@/components/DemoOutput";

const DemoSection = () => {
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
          <p className="text-mono text-[10px] tracking-widest uppercase text-primary/70 mb-3">
            Live Example
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight mb-3">
            What a Query Looks Like
          </h2>
          <p className="text-foreground/60 text-base max-w-2xl">
            One question. Multiple datasets. Decision-ready output.
          </p>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          <DemoOutput />
        </div>
      </div>
    </motion.section>
  );
};

export default DemoSection;
