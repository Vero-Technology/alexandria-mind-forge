import { useState } from "react";

const queries = [
  {
    tag: "State-of-the-Art Benchmarking",
    query: "Compare all active Phase 2 oncology trials for G12C inhibitors against existing patent landscapes",
    datasets: ["ClinicalTrials.gov", "USPTO Patents", "Orange Book", "Cortellis"],
    insights: [
      "14 active Phase 2 trials identified across 6 distinct molecular entities",
      "3 patent families expiring 2026-2027 creating biosimilar opportunity windows",
      "Mechanism overlap detected between AMG 510 derivatives and 2 novel candidates",
    ],
  },
  {
    tag: "Technical Gap Analysis",
    query: "Identify failed clinical programs where the mechanism of action overlaps with current manufacturing patents",
    datasets: ["FAERS", "FDA AdComm", "USPTO Patents", "PubMed"],
    insights: [
      "27 discontinued programs with viable MOA-patent intersections",
      "Safety signal patterns suggest formulation, not mechanism, as failure driver in 12 cases",
      "4 manufacturing patents with unexercised claims in oncology applications",
    ],
  },
  {
    tag: "Regulatory Risk Assessment",
    query: "Synthesize FDA advisory committee signals and safety data for biosimilar opportunities",
    datasets: ["FDA AdComm", "FAERS", "EMA EPARs", "Biosimilar DB"],
    insights: [
      "8 reference biologics with advisory committee concerns flagged in post-market surveillance",
      "FAERS signal-to-noise ratio elevated for 3 biosimilar candidates in immunology",
      "EMA-FDA regulatory divergence identified in 2 therapeutic areas",
    ],
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState(0);
  const q = queries[active];

  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
          Use Cases
        </span>
        <h2 className="text-4xl md:text-5xl tracking-tight mb-16 max-w-3xl">
          Strategic Benchmarking in Action
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {queries.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-md text-mono text-xs transition-all ${
                active === i
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "bg-card/50 text-muted-foreground border border-border hover:border-primary/20"
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* Active query display */}
        <div className="border border-border rounded-lg bg-card/30 overflow-hidden">
          {/* Query */}
          <div className="p-6 md:p-8 border-b border-border">
            <p className="text-mono text-xs text-muted-foreground mb-3">QUERY</p>
            <p className="text-lg md:text-xl font-display leading-relaxed text-terminal">
              "{q.query}"
            </p>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Datasets queried */}
            <div className="p-6">
              <p className="text-mono text-xs text-muted-foreground mb-4">SOURCES</p>
              <div className="space-y-2">
                {q.datasets.map((ds, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span className="text-mono text-xs text-foreground/60">{ds}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div className="p-6 md:p-8">
              <p className="text-mono text-xs text-muted-foreground mb-4">SYNTHESIS</p>
              <div className="space-y-4">
                {q.insights.map((insight, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-mono text-xs text-primary/50 mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-foreground/70 leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
