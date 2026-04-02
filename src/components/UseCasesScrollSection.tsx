import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

const useCases = [
  "Asset Evaluation",
  "Due Diligence",
  "Deal Benchmarking",
  "Competitive Landscaping",
  "Pipeline Gap Analysis",
  "Partner Identification",
];

const ITEM_HEIGHT = 56;
const ITEM_HEIGHT_MOBILE = 44;
const N = useCases.length;

const UseCasesScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const scrollY = useMotionValue(0);
  const [, forceRender] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const itemH = isMobile ? ITEM_HEIGHT_MOBILE : ITEM_HEIGHT;

  useEffect(() => {
    if (!isInView) return;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const target = -step * itemH;
      animate(scrollY, target, {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        onUpdate: () => forceRender((v) => v + 1),
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isInView, scrollY, itemH]);

  const currentScroll = scrollY.get();
  const containerHeight = itemH * 5;
  const totalHeight = N * itemH;

  const items: { text: string; yPos: number; originalIndex: number }[] = [];

  for (let copy = -1; copy <= 2; copy++) {
    for (let i = 0; i < N; i++) {
      const baseY = copy * totalHeight + i * itemH;
      const yPos = baseY + currentScroll;
      if (yPos > -itemH * 2 && yPos < containerHeight + itemH * 2) {
        items.push({ text: useCases[i], yPos, originalIndex: i });
      }
    }
  }

  const centerY = containerHeight / 2 - itemH / 2;

  return (
    <section className="relative py-16 md:py-36 px-6" ref={containerRef}>
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-6 md:gap-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.2] text-center md:text-left">
          Business development teams use Alexandria for
        </h2>

        <div className="relative w-full overflow-hidden" style={{ height: containerHeight }}>
          <div className="absolute top-0 left-0 right-0 h-16 md:h-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)), transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />

          {items.map((item, idx) => {
            const distFromCenter = Math.abs(item.yPos - centerY);
            const normalizedDist = Math.min(distFromCenter / (itemH * 2.5), 1);
            const opacity = Math.max(1 - normalizedDist * 0.75, 0.15);
            const isActive = distFromCenter < itemH * 0.4;

            return (
              <div
                key={`${item.originalIndex}-${idx}`}
                className="absolute left-0 right-0 flex items-center justify-center"
                style={{
                  height: itemH,
                  top: 0,
                  transform: `translateY(${item.yPos}px)`,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                <p
                  className="font-display tracking-tight select-none text-center"
                  style={{
                    fontSize: isMobile ? "clamp(1.3rem, 5vw, 2rem)" : "clamp(1.8rem, 3.5vw, 3rem)",
                    color: isActive ? "hsl(160, 25%, 12%)" : "hsl(0, 0%, 78%)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center md:justify-end">
          <a
            href="https://calendly.com/kenneth-alexandrialabs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium text-background bg-foreground hover:bg-foreground/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCasesScrollSection;
