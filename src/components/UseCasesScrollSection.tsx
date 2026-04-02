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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="relative py-28 px-6" ref={containerRef}>
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Left heading */}
        <h2 className="text-3xl md:text-4xl tracking-tight flex-shrink-0 max-w-[300px] leading-[1.2]">
          Business development teams use Alexandria for
        </h2>

        {/* Right wheel */}
        <div className="relative flex-1 w-full" style={{ height: "320px" }}>
          <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)), transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />

          <div className="absolute inset-0 flex flex-col items-start justify-center overflow-hidden">
            {useCases.map((useCase, i) => {
              const rawDist = i - activeIndex;
              const wrappedDist =
                ((rawDist + useCases.length / 2) % useCases.length) - useCases.length / 2;
              const absDist = Math.abs(wrappedDist);

              const opacity = absDist === 0 ? 1 : absDist === 1 ? 0.45 : absDist === 2 ? 0.12 : 0.05;
              const yPos = wrappedDist * 68;

              return (
                <motion.p
                  key={useCase}
                  className="absolute font-display tracking-tight select-none whitespace-nowrap"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                  animate={{
                    y: yPos,
                    opacity,
                    color: absDist === 0 ? "hsl(160, 25%, 12%)" : "hsl(0, 0%, 78%)",
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {useCase}
                </motion.p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesScrollSection;
