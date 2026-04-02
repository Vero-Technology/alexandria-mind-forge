import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DemoOutput from "@/components/DemoOutput";

const DemoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(160 30% 8%) 0%, hsl(160 25% 5%) 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(160 55% 20% / 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(160 50% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(160 50% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "hsl(160 55% 50%)" }}>
            Live Example
          </p>
          <h2 className="text-3xl md:text-5xl tracking-tight mb-3" style={{ color: "hsl(0 0% 95%)" }}>
            What a Query Looks Like
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "hsl(160 10% 60%)" }}>
            One question. Multiple datasets. Decision-ready output.
          </p>
        </motion.div>

        {/* Demo card with glow border */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-xl overflow-hidden"
          style={{
            border: "1px solid hsl(160 30% 20%)",
            boxShadow: "0 0 60px -15px hsl(160 55% 20% / 0.25), 0 25px 50px -12px rgba(0,0,0,0.5)",
            background: "hsl(160 20% 10%)",
          }}
        >
          <DemoOutput darkMode />
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
