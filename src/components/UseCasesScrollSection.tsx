import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const useCases = [
  "Asset Evaluation",
  "Due Diligence",
  "Deal Benchmarking",
  "Competitive Landscaping",
  "Pipeline Gap Analysis",
  "Partner Identification",
];

const UseCasesScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="relative py-28 px-6" ref={containerRef}>
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
        {/* Left text */}
        <p className="text-foreground/80 text-lg md:text-xl max-w-[280px] leading-relaxed md:pt-20 flex-shrink-0">
          R&D teams use Alexandria for
        </p>

        {/* Right scrolling list */}
        <div className="flex flex-col items-start gap-2">
          {useCases.map((useCase, i) => {
            const distance = Math.abs(i - activeIndex);
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.35 : 0.15;
            const scale = distance === 0 ? 1 : distance === 1 ? 0.95 : 0.9;

            return (
              <motion.p
                key={useCase}
                className="font-display tracking-tight cursor-default select-none"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
                animate={{
                  opacity,
                  scale,
                  color: distance === 0 ? "hsl(160, 25%, 12%)" : "hsl(0, 0%, 75%)",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {useCase}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesScrollSection;
