import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const useCases = [
  "Asset Evaluation",
  "Due Diligence",
  "Deal Benchmarking",
  "Competitive Landscaping",
  "Pipeline Gap Analysis",
  "Partner Identification",
];

const VISIBLE_COUNT = 5;
const ITEM_HEIGHT = 64;

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

  // Build visible items centered around activeIndex
  const getVisibleItems = () => {
    const items = [];
    const mid = Math.floor(VISIBLE_COUNT / 2);
    for (let offset = -mid; offset <= mid; offset++) {
      const idx = ((activeIndex + offset) % useCases.length + useCases.length) % useCases.length;
      items.push({ index: idx, offset, name: useCases[idx] });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="relative py-28 px-6" ref={containerRef}>
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
        <p className="text-foreground/80 text-lg md:text-xl max-w-[320px] leading-relaxed flex-shrink-0" style={{ paddingTop: `${Math.floor(VISIBLE_COUNT / 2) * ITEM_HEIGHT + 8}px` }}>
          Business development teams use Alexandria for
        </p>

        <div
          className="relative overflow-hidden"
          style={{ height: `${VISIBLE_COUNT * ITEM_HEIGHT}px` }}
        >
          <AnimatePresence initial={false}>
            {visibleItems.map((item) => {
              const distance = Math.abs(item.offset);
              const opacity = distance === 0 ? 1 : distance === 1 ? 0.3 : 0.12;

              return (
                <motion.div
                  key={`${item.index}-${item.offset}`}
                  className="absolute left-0 w-full flex items-center"
                  style={{ height: `${ITEM_HEIGHT}px` }}
                  initial={{
                    y: (item.offset + 1) * ITEM_HEIGHT,
                    opacity: 0,
                  }}
                  animate={{
                    y: item.offset * ITEM_HEIGHT + Math.floor(VISIBLE_COUNT / 2) * ITEM_HEIGHT,
                    opacity,
                  }}
                  exit={{
                    y: (item.offset - 1) * ITEM_HEIGHT + Math.floor(VISIBLE_COUNT / 2) * ITEM_HEIGHT,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <p
                    className="font-display tracking-tight whitespace-nowrap select-none transition-colors duration-500"
                    style={{
                      fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                      color: distance === 0 ? "hsl(160, 25%, 12%)" : "hsl(0, 0%, 78%)",
                      fontWeight: distance === 0 ? 400 : 400,
                    }}
                  >
                    {item.name}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCasesScrollSection;
