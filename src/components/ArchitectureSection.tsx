import { useState } from "react";

const dimensions = [
  {
    name: "Architecture",
    enhanced: "Legacy monolith with AI bolted on. Core system predates AI by years or decades.",
    powered: "AI models central to the pipeline but serving a traditional application layer.",
    native: "AI is the architecture. Data layer, reasoning layer, and interface are one unified system.",
  },
  {
    name: "User Experience",
    enhanced: "Traditional menus, forms, and function codes. AI surfaces as autocomplete or a sidebar chatbot.",
    powered: "Smart filters and AI summaries on dashboards. Faster paths, but still requires knowing what to look for.",
    native: "Natural language is the interface. No screens to memorize. New hires productive in hours, not months.",
  },
  {
    name: "Data Integration",
    enhanced: "Siloed databases. Cross-referencing requires manual export and reassembly.",
    powered: "Better search within a dataset, but doesn't reason across different data types.",
    native: "One query connects a patent filing to a clinical trial to an earnings transcript to a regulatory submission.",
  },
  {
    name: "Time to Insight",
    enhanced: "Hours to days. 5–15 manual steps per insight.",
    powered: "Minutes to hours. 3–8 steps per insight.",
    native: "Seconds to minutes. One question, one synthesized answer with citations. 1 step.",
  },
  {
    name: "Scalability",
    enhanced: "Linear. More data means more screens, more training, more complexity.",
    powered: "Sub-linear. Better models help marginally, but each new dataset is a new silo.",
    native: "Super-linear. Each new source makes every existing source more valuable through cross-links.",
  },
  {
    name: "Defensible Moat",
    enhanced: "Brand and switching costs. Anyone can license the same data and bolt on AI.",
    powered: "Proprietary models and curated data. Some differentiation, but the paradigm is replicable.",
    native: "The connections between all datasets and the reasoning that emerges. Extraordinarily difficult to replicate.",
  },
  {
    name: "Onboarding",
    enhanced: "Weeks to months. Function codes, keyboard shortcuts, screen navigation.",
    powered: "Days to weeks. Filter taxonomies, data source coverage, saved views.",
    native: "Minutes to hours. If you can describe what you want, you can use the product.",
  },
  {
    name: "Failure Mode",
    enhanced: "AI gives wrong suggestion; user ignores it. Low stakes.",
    powered: "Irrelevant results require user judgment. Medium stakes.",
    native: "Citations and confidence signals let users verify. Transparency is architectural.",
  },
];

const ArchitectureSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
            Detailed Comparison
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Three Levels of AI Integration
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            How the three levels differ across every dimension that matters for enterprise software evaluation.
          </p>
        </div>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-[180px_1fr_1fr_1fr] gap-4 mb-2 px-4">
          <div />
          <p className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground">AI-Enhanced</p>
          <p className="text-mono text-[10px] tracking-widest uppercase text-primary/60">AI-Powered</p>
          <p className="text-mono text-[10px] tracking-widest uppercase text-primary font-medium">AI-Native</p>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {dimensions.map((row, i) => {
            const isOpen = expanded === i;
            return (
              <button
                key={i}
                onClick={() => setExpanded(isOpen ? null : i)}
                className="w-full text-left"
              >
                {/* Collapsed: just the dimension name + native summary */}
                <div
                  className={`rounded-lg border transition-all ${
                    isOpen
                      ? "border-primary/20 bg-card shadow-sm"
                      : "border-border bg-card/50 hover:border-primary/15"
                  }`}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <span className="font-semibold text-sm text-foreground">{row.name}</span>
                    <span className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="rounded-lg bg-muted/50 p-4">
                          <p className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2 md:hidden">
                            AI-Enhanced
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{row.enhanced}</p>
                        </div>
                        <div className="rounded-lg bg-muted/50 p-4">
                          <p className="text-mono text-[10px] tracking-widest uppercase text-primary/60 mb-2 md:hidden">
                            AI-Powered
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{row.powered}</p>
                        </div>
                        <div className="rounded-lg bg-primary/[0.06] border border-primary/10 p-4">
                          <p className="text-mono text-[10px] tracking-widest uppercase text-primary mb-2 md:hidden">
                            AI-Native
                          </p>
                          <p className="text-sm text-foreground font-medium leading-relaxed">{row.native}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
