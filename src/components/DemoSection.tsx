import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import DemoOutput from "@/components/DemoOutput";

const QUERY_TEXT = "Compare regulatory pathways and approval timelines for KRAS G12C inhibitors in PDAC";

const LOADING_STEPS = [
  { label: "Querying clinical trial registries...", duration: 600 },
  { label: "Cross-referencing FDA designations...", duration: 500 },
  { label: "Analyzing regulatory precedent...", duration: 450 },
  { label: "Synthesizing approval timelines...", duration: 400 },
  { label: "Generating workspace...", duration: 350 },
];

const DemoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [phase, setPhase] = useState<"idle" | "typing" | "loading" | "done">("idle");
  const [typedText, setTypedText] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Start animation when section scrolls into view
  useEffect(() => {
    if (isInView && phase === "idle") {
      const timer = setTimeout(() => setPhase("typing"), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, phase]);

  // Typewriter effect
  useEffect(() => {
    if (phase !== "typing") return;
    if (typedText.length < QUERY_TEXT.length) {
      const speed = 20 + Math.random() * 25;
      const timer = setTimeout(() => {
        setTypedText(QUERY_TEXT.slice(0, typedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setPhase("loading"), 500);
      return () => clearTimeout(timer);
    }
  }, [phase, typedText]);

  // Loading sequence
  const runLoading = useCallback(() => {
    let step = 0;
    let progress = 0;

    const advance = () => {
      if (step >= LOADING_STEPS.length) {
        setLoadingProgress(100);
        setTimeout(() => setPhase("done"), 300);
        return;
      }
      setLoadingStep(step);
      const targetProgress = ((step + 1) / LOADING_STEPS.length) * 100;
      const increment = (targetProgress - progress) / 15;
      let current = progress;

      const tick = () => {
        current += increment;
        if (current >= targetProgress) {
          current = targetProgress;
          setLoadingProgress(current);
          progress = current;
          step++;
          setTimeout(advance, 100);
        } else {
          setLoadingProgress(current);
          requestAnimationFrame(tick);
        }
      };
      setTimeout(tick, LOADING_STEPS[step].duration * 0.3);
    };

    advance();
  }, []);

  useEffect(() => {
    if (phase === "loading") {
      runLoading();
    }
  }, [phase, runLoading]);

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
          <AnimatePresence mode="wait">
            {/* Phase 1: Chat input with typewriter */}
            {(phase === "idle" || phase === "typing") && (
              <motion.div
                key="chat"
                className="px-6 py-16 md:py-24 flex flex-col items-center justify-center min-h-[300px]"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full max-w-3xl">
                  {/* Input bar with typing inside */}
                  <div
                    className="flex items-center gap-3 rounded-xl px-5 py-4"
                    style={{ background: "hsl(0 0% 5%)", border: "1px solid hsl(0 0% 14%)" }}
                  >
                    <div className="flex-1 text-sm md:text-[15px] min-h-[1.5em]" style={{ color: typedText ? "hsl(0 0% 85%)" : "hsl(0 0% 30%)" }}>
                      {typedText || "Ask Alexandria..."}
                      {(phase === "typing" || phase === "idle") && typedText.length > 0 && (
                        <span className="inline-block w-[2px] h-[1em] ml-0.5 align-middle animate-cursor-blink" style={{ background: "hsl(0 0% 60%)" }} />
                      )}
                      {phase === "idle" && typedText.length === 0 && (
                        <span className="inline-block w-[2px] h-[1em] ml-0.5 align-middle animate-cursor-blink" style={{ background: "hsl(0 0% 30%)" }} />
                      )}
                    </div>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: typedText ? "hsl(160 55% 30%)" : "hsl(0 0% 15%)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={typedText ? "white" : "hsl(0, 0%, 35%)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Phase 2: Loading with progress bar */}
            {phase === "loading" && (
              <motion.div
                key="loading"
                className="px-6 py-16 md:py-24 flex flex-col items-center justify-center min-h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full max-w-md">
                  {/* Step label */}
                  <motion.p
                    key={loadingStep}
                    className="text-xs text-center mb-4 font-medium"
                    style={{ color: "hsl(0 0% 55%)" }}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {LOADING_STEPS[loadingStep]?.label}
                  </motion.p>

                  {/* Progress bar track */}
                  <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: "hsl(0 0% 12%)" }}>
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${loadingProgress}%`,
                        background: "linear-gradient(90deg, hsl(160 55% 35%), hsl(160 55% 45%))",
                      }}
                      transition={{ duration: 0.05 }}
                    />
                  </div>

                  {/* Percentage */}
                  <p className="text-mono text-[10px] text-center mt-3" style={{ color: "hsl(0 0% 35%)" }}>
                    {Math.round(loadingProgress)}%
                  </p>

                  {/* Data sources */}
                  <div className="flex flex-wrap justify-center gap-1.5 mt-6">
                    {["AACT", "FDA Drugs@FDA", "SEC EDGAR", "AdCom Records", "OpenAlex"].map((src, i) => (
                      <motion.span
                        key={src}
                        className="text-mono text-[9px] px-2 py-0.5 rounded font-medium"
                        style={{ background: "hsl(0 0% 10%)", color: "hsl(0 0% 35%)", border: "1px solid hsl(0 0% 13%)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: loadingProgress > (i + 1) * 15 ? 1 : 0.3 }}
                        transition={{ duration: 0.3 }}
                      >
                        {src}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Phase 3: Workspace */}
            {phase === "done" && (
              <motion.div
                key="workspace"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <DemoOutput darkMode />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
