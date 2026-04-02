import { useState } from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Architecture, not a feature",
    description:
      "12+ datasets indexed into one unified reasoning layer. A single query cross-references trials, safety, patents, and regulatory filings simultaneously — no tabs, no exports, no manual synthesis.",
  },
  {
    title: "Unreplicable by design",
    description:
      "Legacy platforms cannot replicate this by adding AI on top. It would require unifying databases that were never designed to connect — a rebuild, not an upgrade.",
  },
  {
    title: "No interface to learn",
    description:
      "Write your question in plain language. Get a structured, cited answer. The tool disappears into the workflow — the best software is the kind you forget you're using.",
  },
];

const MoatSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{ background: "hsl(0 0% 4%)" }}
      >
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

        <div
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {pillars.map((pillar, i) => {
            const isHovered = hoveredIndex === i;
            const isFaded = hoveredIndex !== null && !isHovered;
            const shade = 4 + i * 3;

            return (
              <motion.div
                key={i}
                className="w-full flex items-center cursor-default"
                style={{
                  minHeight: "140px",
                  padding: "2.5rem 0",
                  background: `hsl(0 0% ${shade}%)`,
                  borderTop: i > 0 ? "1px solid hsl(0 0% 12%)" : "none",
                }}
                animate={{
                  opacity: isFaded ? 0.3 : 1,
                  backgroundColor: isHovered ? `hsl(0 0% ${shade + 4}%)` : `hsl(0 0% ${shade}%)`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                <div className="max-w-5xl mx-auto px-6 w-full">
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
            );
          })}
        </div>
      </section>

    </>
  );
};

export default MoatSection;
