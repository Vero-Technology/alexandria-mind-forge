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

const StickyStrip = ({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const shade = 4 + index * 3;

  const topPos = index * 140;

  return (
    <div ref={ref} style={{ height: "50vh" }}>
      <motion.div
        className="sticky w-full flex items-center"
        style={{
          top: `${topPos}px`,
          opacity,
          minHeight: "140px",
          padding: "2.5rem 0",
          background: `hsl(0 0% ${shade}%)`,
          borderTop: index > 0 ? "1px solid hsl(0 0% 12%)" : "none",
          zIndex: 10 + index,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 w-full flex items-start gap-8 md:gap-16">
          <span
            className="text-mono text-[11px] tracking-widest pt-1 flex-shrink-0"
            style={{ color: "hsl(0 0% 25%)" }}
          >
            {pillar.number}
          </span>
          <div className="max-w-xl">
            <h3
              className="text-lg md:text-2xl tracking-tight mb-2"
              style={{ color: "hsl(0 0% 93%)" }}
            >
              {pillar.title}
            </h3>
            <p
              className="text-sm leading-[1.7]"
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
        className="relative overflow-hidden"
        style={{ background: "hsl(0 0% 4%)" }}
      >
        {/* Title — scrolls away */}
        <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 text-center">
          <h2
            className="text-5xl md:text-7xl tracking-tight"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            Built to{" "}
            <span className="italic" style={{ color: "hsl(0 0% 40%)" }}>
              Disappear.
            </span>
          </h2>
        </div>

        {/* Sticky full-width strips */}
        {pillars.map((pillar, i) => (
          <StickyStrip key={pillar.number} pillar={pillar} index={i} />
        ))}
      </section>

      {/* Footer */}
      <footer
        className="relative py-20 px-6"
        style={{ background: "hsl(0 0% 3%)", zIndex: 20 }}
      >
        <div className="h-px absolute top-0 left-6 right-6" style={{ background: "hsl(0 0% 10%)" }} />
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-display text-xl tracking-tight mb-2" style={{ color: "hsl(0 0% 80%)" }}>
            Alexandria
          </p>
          <p className="text-mono text-xs mb-8" style={{ color: "hsl(0 0% 35%)" }}>
            The intelligence layer for R&D strategy.
          </p>
          <span className="text-mono text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: "hsl(0 0% 30%)" }}>
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
