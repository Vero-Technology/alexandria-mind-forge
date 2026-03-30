import { useState, useEffect, useRef, useCallback } from "react";
import demoOutput from "@/assets/demo-output.png";

const QUERY_TEXT =
  "Compare all KRAS G12C inhibitors with active Phase III programs — overlay FDA breakthrough designations, patent expiry windows, and projected approval timelines across APAC and US markets";

type Phase = "idle" | "typing" | "processing" | "results";

const processingSteps = [
  "Indexing ClinicalTrials.gov...",
  "Cross-referencing FDA designations...",
  "Mapping patent landscapes...",
  "Synthesizing regulatory signals...",
  "Compiling compound pathway analysis...",
];

const UseCasesSection = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedChars, setTypedChars] = useState(0);
  const [processingStep, setProcessingStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  const startAnimation = useCallback(() => {
    if (hasTriggered.current) return;
    hasTriggered.current = true;
    setPhase("typing");
    setTypedChars(0);
    setProcessingStep(0);
    setShowResults(false);
  }, []);

  // Intersection observer to trigger on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startAnimation();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  // Typing effect
  useEffect(() => {
    if (phase !== "typing") return;
    if (typedChars >= QUERY_TEXT.length) {
      const timeout = setTimeout(() => setPhase("processing"), 600);
      return () => clearTimeout(timeout);
    }
    const speed = Math.random() * 25 + 18;
    const timeout = setTimeout(() => setTypedChars((c) => c + 1), speed);
    return () => clearTimeout(timeout);
  }, [phase, typedChars]);

  // Processing steps
  useEffect(() => {
    if (phase !== "processing") return;
    if (processingStep >= processingSteps.length) {
      const timeout = setTimeout(() => {
        setPhase("results");
        setTimeout(() => setShowResults(true), 100);
      }, 400);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(
      () => setProcessingStep((s) => s + 1),
      700 + Math.random() * 400
    );
    return () => clearTimeout(timeout);
  }, [phase, processingStep]);

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
          In Action
        </span>
        <h2 className="text-4xl md:text-5xl tracking-tight mb-6 max-w-3xl">
          From Query to Strategic Insight
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-14">
          Watch Alexandria reason across 42 datasets in real time — a single
          agentic query produces a complete regulatory and trial pathway
          analysis.
        </p>

        {/* Terminal / demo area */}
        <div className="border border-border rounded-lg overflow-hidden bg-card border-glow">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/10" />
            <span className="ml-3 text-mono text-xs text-muted-foreground">
              alexandria · workspace
            </span>
          </div>

          {/* Query input area */}
          <div className="px-6 py-5 border-b border-border">
            <div className="flex items-start gap-3">
              <span className="text-mono text-xs text-primary flex-shrink-0 mt-0.5">
                alexandria&gt;
              </span>
              <div className="text-sm font-mono text-foreground leading-relaxed min-h-[3rem]">
                {phase === "idle" && (
                  <span className="text-muted-foreground/40">
                    Enter a strategic query...
                  </span>
                )}
                {phase !== "idle" && (
                  <>
                    <span>{QUERY_TEXT.slice(0, typedChars)}</span>
                    {phase === "typing" && (
                      <span className="inline-block w-2 h-4 ml-0.5 bg-primary animate-cursor-blink align-middle" />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Processing state */}
          {(phase === "processing" || phase === "results") && (
            <div className="px-6 py-4 border-b border-border bg-secondary/30">
              <div className="space-y-1.5">
                {processingSteps.map((step, i) => {
                  const visible =
                    phase === "results" ? true : i < processingStep;
                  const current =
                    phase === "processing" && i === processingStep;
                  if (!visible && !current) return null;
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-mono text-xs transition-opacity duration-300 ${
                        visible
                          ? "text-muted-foreground"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      <span className="text-primary">
                        {visible ? "✓" : "⟳"}
                      </span>
                      <span>{step}</span>
                    </div>
                  );
                })}
                {phase === "processing" &&
                  processingStep < processingSteps.length && (
                    <div className="flex items-center gap-2 text-mono text-xs text-muted-foreground/50">
                      <span className="inline-block w-3 h-3 border border-primary/40 border-t-primary rounded-full animate-spin" />
                      <span>{processingSteps[processingStep]}</span>
                    </div>
                  )}
              </div>
            </div>
          )}

          {/* Results — demo output image */}
          {phase === "results" && (
            <div
              className={`transition-all duration-700 ease-out ${
                showResults
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="px-6 py-4">
                <p className="text-mono text-[10px] tracking-widest uppercase text-primary/60 mb-3">
                  ✦ Analysis Complete — 28 trials · 8 FDA designations · 6
                  compounds tracked
                </p>
              </div>
              <div className="px-4 pb-6">
                <div className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={demoOutput}
                    alt="KRAS G12C Regulatory & Trial Pathway Analysis — showing executive summary, breakthrough designations, approval probabilities, compound pathways for Sotorasib and Divarasib"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
