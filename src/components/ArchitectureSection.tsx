const dimensions = [
  {
    name: "Architecture",
    enhanced: "Legacy monolith with AI bolted on.",
    powered: "AI-first backend, conventional frontend.",
    native: "Data, reasoning, and interface as one unified system.",
  },
  {
    name: "User Experience",
    enhanced: "Menus, forms, function codes. AI is a sidebar.",
    powered: "Smart filters and dashboards. Still requires knowing what to look for.",
    native: "Natural language in, synthesized answer out. No screens to learn.",
  },
  {
    name: "Data Integration",
    enhanced: "Siloed databases. Manual cross-referencing.",
    powered: "Better search within a dataset, but no cross-type reasoning.",
    native: "One query spans patents, trials, safety, deals, and regulatory filings.",
  },
  {
    name: "Time to Insight",
    enhanced: "Hours to days. 5–15 steps.",
    powered: "Minutes to hours. 3–8 steps.",
    native: "Seconds. 1 step.",
  },
  {
    name: "Scalability",
    enhanced: "Linear. More data = more complexity.",
    powered: "Sub-linear. Each new dataset is a new silo.",
    native: "Super-linear. Each source makes every other source more valuable.",
  },
  {
    name: "Defensible Moat",
    enhanced: "Brand and switching costs.",
    powered: "Proprietary models. Replicable paradigm.",
    native: "Cross-linked intelligence layer. Extraordinarily hard to replicate.",
  },
  {
    name: "Onboarding",
    enhanced: "Weeks to months.",
    powered: "Days to weeks.",
    native: "Minutes to hours.",
  },
  {
    name: "Failure Mode",
    enhanced: "Wrong suggestion; user ignores it.",
    powered: "Irrelevant results; user applies judgment.",
    native: "Citations and confidence signals for verification.",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
            Where Alexandria Sits
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Alexandria is AI-Native
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mb-3">
            Most tools add AI to an existing product. Alexandria was built from the ground up as a reasoning engine. There is no legacy system underneath. Here's what that means in practice:
          </p>
        </div>

        {/* Level indicator */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <span className="text-mono text-xs text-muted-foreground">Level 1 · AI-Enhanced</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted">
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="text-mono text-xs text-muted-foreground">Level 2 · AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-mono text-xs text-primary font-medium">Level 3 · AI-Native · Alexandria</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 pr-4 w-[140px] text-mono text-[10px] tracking-widest uppercase text-foreground font-semibold">
                  Dimension
                </th>
                <th className="text-left py-3 px-4 text-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">
                  AI-Enhanced
                </th>
                <th className="text-left py-3 px-4 text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  AI-Powered
                </th>
                <th className="text-left py-3 pl-4 text-mono text-[10px] tracking-widest uppercase text-primary font-semibold">
                  AI-Native ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {dimensions.map((row, i) => (
                <tr key={i} className="border-b border-border/70">
                  <td className="py-4 pr-4 align-top">
                    <span className="text-sm font-semibold text-foreground">{row.name}</span>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <p className="text-sm text-muted-foreground/60 leading-relaxed">{row.enhanced}</p>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <p className="text-sm text-muted-foreground leading-relaxed">{row.powered}</p>
                  </td>
                  <td className="py-4 pl-4 align-top bg-primary/[0.04]">
                    <p className="text-sm text-foreground font-medium leading-relaxed">{row.native}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key test callout */}
        <div className="mt-10 border border-primary/20 rounded-lg p-6 bg-primary/[0.03] max-w-2xl">
          <p className="text-mono text-[10px] tracking-widest uppercase text-primary/70 mb-2">The Key Test</p>
          <p className="text-lg font-display tracking-tight">
            "If you removed the AI, would the product still work?"
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            For Cortellis and Citeline, yes. The search interface remains. For Alexandria, no. The reasoning engine <em className="text-primary font-medium">is</em> the product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
