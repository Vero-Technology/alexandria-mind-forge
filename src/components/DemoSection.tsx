import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DemoOutput from "@/components/DemoOutput";

const DemoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 6%) 0%, hsl(0 0% 4%) 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(0 0% 100% / 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "hsl(0 0% 55%)" }}>
            Live Example
          </p>
          <h2 className="text-3xl md:text-5xl tracking-tight mb-3" style={{ color: "hsl(0 0% 95%)" }}>
            Insights that move the needle.
          </h2>
          <p className="text-base max-w-2xl" style={{ color: "hsl(0 0% 50%)" }}>
            One question. Multiple datasets. Decision-ready output.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-xl overflow-hidden"
          style={{
            border: "1px solid hsl(0 0% 15%)",
            boxShadow: "0 0 60px -15px hsl(0 0% 100% / 0.05), 0 25px 50px -12px rgba(0,0,0,0.6)",
            background: "hsl(0 0% 8%)",
          }}
        >
          <DemoOutput darkMode />
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
