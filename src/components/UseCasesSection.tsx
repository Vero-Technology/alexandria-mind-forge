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
        <h2 className="text-4xl md:text-5xl tracking-tight mb-6 max-w-3xl">
          Strategic Benchmarking in Action
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-14">
          See how Alexandria synthesizes complex, multi-dataset queries that mirror real R&D consulting workflows.
        </p>

        {/* Cards layout */}
        <div className="grid lg:grid-cols-3 gap-5">
          {queries.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left rounded-lg p-6 transition-all border ${
                  isActive
                    ? "bg-primary/[0.04] border-primary/25 shadow-sm"
                    : "bg-card border-border hover:border-primary/15"
                }`}
              >
                <span
                  className={`inline-block text-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded mb-4 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.tag}
                </span>
                <p className={`text-sm leading-relaxed ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {item.query}
                </p>
              </button>
            );
          })}
        </div>

        {/* Expanded result */}
        <div className="mt-8 border border-border rounded-lg bg-card overflow-hidden">
          {/* Query bar */}
          <div className="px-6 py-5 border-b border-border flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground flex-shrink-0">
              Query
            </span>
            <p className="text-foreground font-medium">
              "{q.query}"
            </p>
          </div>

          <div className="p-6 md:p-8">
            {/* Sources row */}
            <div className="mb-8">
              <p className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-3">
                Sources Queried
              </p>
              <div className="flex flex-wrap gap-2">
                {q.datasets.map((ds, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-mono text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {ds}
                  </span>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div>
              <p className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-4">
                Key Findings
              </p>
              <div className="space-y-3">
                {q.insights.map((insight, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 rounded-lg bg-secondary/50"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-mono text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground/80 leading-relaxed">{insight}</p>
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
