import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Architecture, not a feature",
    description:
      "50+ datasets indexed into one unified reasoning layer. A single query cross-references trials, safety, patents, and regulatory filings simultaneously — no tabs, no exports, no manual synthesis.",
  },
  {
    number: "02",
    title: "Unreplicable by design",
    description:
      "Legacy platforms cannot replicate this by adding AI on top. It would require unifying databases that were never designed to connect — a rebuild, not an upgrade.",
  },
  {
    number: "03",
    title: "No interface to learn",
    description:
      "Write your question in plain language. Get a structured, cited answer. The tool disappears into the workflow — the best software is the kind you forget you're using.",
  },
];

const StickyCard = ({
  pillar,
  index,
  total,
}: {
  pillar: (typeof pillars)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [60, 0]);

  // Each card stacks slightly offset
  const topOffset = 140 + index * 40;

  return (
    <div ref={cardRef} className="h-[70vh] flex items-start" style={{ marginTop: index === 0 ? 0 : "-20vh" }}>
      <motion.div
        className="sticky w-full max-w-2xl mx-auto rounded-2xl p-8 md:p-10"
        style={{
          top: `${topOffset}px`,
          opacity,
          y,
          background: `hsl(0 0% ${5 + index * 2}%)`,
          border: "1px solid hsl(0 0% 14%)",
          boxShadow: "0 20px 60px -15px rgba(0,0,0,0.5)",
          zIndex: total - index,
        }}
      >
        <div className="flex items-start gap-6">
          <span
            className="text-mono text-[11px] tracking-widest pt-1 flex-shrink-0"
            style={{ color: "hsl(0 0% 28%)" }}
          >
            {pillar.number}
          </span>
          <div>
            <h3
              className="text-xl md:text-2xl tracking-tight mb-4"
              style={{ color: "hsl(0 0% 92%)" }}
            >
              {pillar.title}
            </h3>
            <p
              className="text-sm md:text-base leading-[1.8]"
              style={{ color: "hsl(0 0% 45%)" }}
            >
              {pillar.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const MoatSection = () => {
  return (
    <>
      <section
        className="relative px-6 overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(0 0% 5%) 0%, hsl(0 0% 3%) 100%)" }}
      >
        {/* Title — not sticky, scrolls away */}
        <div className="max-w-4xl mx-auto pt-32 pb-10 text-center">
          <h2
            className="text-5xl md:text-7xl tracking-tight mb-6"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            Built to{" "}
            <span className="italic" style={{ color: "hsl(0 0% 40%)" }}>
              Disappear.
            </span>
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "hsl(0 0% 40%)" }}
          >
            The best tools don't demand attention. They deliver answers and get out of the way.
          </p>
        </div>

        {/* Sticky cards */}
        <div className="pb-[30vh]">
          {pillars.map((pillar, i) => (
            <StickyCard key={pillar.number} pillar={pillar} index={i} total={pillars.length} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative py-20 px-6"
        style={{ background: "hsl(0 0% 3%)" }}
      >
        <div className="h-px absolute top-0 left-6 right-6" style={{ background: "hsl(0 0% 10%)" }} />
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="font-display text-xl tracking-tight mb-2"
            style={{ color: "hsl(0 0% 80%)" }}
          >
            Alexandria
          </p>
          <p
            className="text-mono text-xs mb-8"
            style={{ color: "hsl(0 0% 35%)" }}
          >
            The intelligence layer for R&D strategy.
          </p>
          <span
            className="text-mono text-[10px] tracking-[0.3em] uppercase block mb-3"
            style={{ color: "hsl(0 0% 30%)" }}
          >
            Inquiries
          </span>
          <a
            href="mailto:logan@alexandrialabs.uk"
            className="text-lg md:text-xl font-display tracking-tight transition-colors duration-300"
            style={{ color: "hsl(0 0% 70%)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100%)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 70%)")}
          >
            logan@alexandrialabs.uk
          </a>
        </div>
      </footer>
    </>
  );
};

export default MoatSection;
