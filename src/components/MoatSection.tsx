import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const MoatSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-32 px-6 overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(0 0% 5%) 0%, hsl(0 0% 3%) 100%)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(0 0% 100% / 0.02) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>

          {/* Pillars */}
          <div className="space-y-0">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: "easeOut" }}
              >
                {i === 0 && (
                  <div className="h-px" style={{ background: "hsl(0 0% 12%)" }} />
                )}
                <div className="py-10 flex gap-8 md:gap-12 items-start">
                  <span
                    className="text-mono text-[11px] tracking-widest pt-1 flex-shrink-0"
                    style={{ color: "hsl(0 0% 25%)" }}
                  >
                    {pillar.number}
                  </span>
                  <div>
                    <h3
                      className="text-lg md:text-xl font-semibold tracking-tight mb-3"
                      style={{ color: "hsl(0 0% 90%)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-sm leading-[1.8] max-w-lg"
                      style={{ color: "hsl(0 0% 42%)" }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <div className="h-px" style={{ background: "hsl(0 0% 12%)" }} />
              </motion.div>
            ))}
          </div>
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
