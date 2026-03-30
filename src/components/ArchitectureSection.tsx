const dimensions = [
  {
    name: "Architecture",
    enhanced: "Legacy monolith with AI microservices bolted on. AI layer is additive and often optional. Core system predates AI by years or decades.",
    powered: "AI models are central to the processing pipeline but serve a traditional application layer. Backend is AI-first; frontend is conventional.",
    native: "AI is the architecture. No legacy system underneath. Data layer, reasoning layer, and interface are built as one unified intelligence system.",
  },
  {
    name: "User Experience",
    enhanced: "Traditional menus, screens, forms, and function codes. AI surfaces as autocomplete, suggestions, or a sidebar chatbot. Users still navigate the same UI they always have.",
    powered: "Improved search, smart filters, AI-generated summaries on traditional dashboards. Faster paths to the same destinations. Still requires knowing what to look for.",
    native: "Natural language is the interface. Users express intent; the system reasons and responds. No screens to memorize, no navigation to learn. New hires are productive in hours, not months.",
  },
  {
    name: "Data Integration",
    enhanced: "Siloed databases. Each screen pulls from one data source. Cross-referencing requires manual export and reassembly. Schemas are fixed and rigid.",
    powered: "Better search across one or a few data sources. Can find connections within a dataset but doesn't reason across fundamentally different data types.",
    native: "Unified reasoning across all data sources simultaneously. The system connects a patent filing to a clinical trial to an earnings transcript to a regulatory submission in a single query.",
  },
  {
    name: "Time to Insight",
    enhanced: "Hours to days. Analyst opens multiple tools, exports data, builds spreadsheets, manually cross-references, writes memo. 5–15 steps per insight.",
    powered: "Minutes to hours. AI accelerates the search and filtering phases but the analyst still assembles the final picture. 3–8 steps per insight.",
    native: "Seconds to minutes. One question, one synthesized answer with citations. The system does the cross-referencing, the reconciliation, and the synthesis. 1 step.",
  },
  {
    name: "Scalability of Intelligence",
    enhanced: "Linear. Adding more data requires more screens, more function codes, more training. Complexity grows with each addition. Users can only hold so much in working memory.",
    powered: "Sub-linear improvement. Better models improve results marginally, but the search-and-filter paradigm has diminishing returns. Each new dataset is a new silo.",
    native: "Compounding. Each new data source makes every existing source more valuable because the reasoning layer can create new cross-links. Intelligence scales super-linearly with data breadth.",
  },
  {
    name: "Defensible Moat",
    enhanced: "Brand and data volume. Anyone can license the same datasets and bolt on the same AI models. Switching costs are the moat, not technology.",
    powered: "Data quality and model fine-tuning. Proprietary NLP models and curated datasets create some differentiation, but the paradigm is replicable.",
    native: "Cross-linked intelligence layer. The moat is not any single dataset but the connections between all datasets and the reasoning that emerges from those connections. This is extraordinarily difficult to replicate.",
  },
  {
    name: "Onboarding Curve",
    enhanced: "Weeks to months. Bloomberg Terminal training is a rite of passage. Users must memorize function codes, keyboard shortcuts, and screen navigation.",
    powered: "Days to weeks. Dashboards are more intuitive than terminal UIs, but users still need to learn the filter taxonomy, understand data source coverage, and build saved views.",
    native: "Minutes to hours. If you can describe what you want in natural language, you can use the product. The learning curve is the user's domain expertise, not the tool's interface.",
  },
  {
    name: "Failure Mode",
    enhanced: "AI feature gives wrong suggestion; user ignores it and continues working in the traditional interface. Low-stakes failure.",
    powered: "AI returns irrelevant search results or misclassifies data. User must evaluate results and apply judgment. Medium-stakes failure.",
    native: "Must provide citations and confidence signals so users can verify. Transparency and explainability are architecturally essential, not afterthoughts.",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
            Detailed Comparison
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Detailed Comparison
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            How the three levels differ across every dimension that matters for enterprise software evaluation.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 pr-6 w-[160px] text-mono text-xs tracking-widest uppercase text-foreground font-semibold">
                  Dimension
                </th>
                <th className="text-left py-4 px-6 text-mono text-xs tracking-widest uppercase text-muted-foreground font-medium">
                  AI-Enhanced
                </th>
                <th className="text-left py-4 px-6 text-mono text-xs tracking-widest uppercase text-primary/70 font-medium">
                  AI-Powered
                </th>
                <th className="text-left py-4 pl-6 text-mono text-xs tracking-widest uppercase text-primary font-semibold">
                  AI-Native
                </th>
              </tr>
            </thead>
            <tbody>
              {dimensions.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-5 pr-6 align-top">
                    <span className="font-semibold text-sm text-foreground">{row.name}</span>
                  </td>
                  <td className="py-5 px-6 align-top">
                    <p className="text-sm text-muted-foreground leading-relaxed">{row.enhanced}</p>
                  </td>
                  <td className="py-5 px-6 align-top">
                    <p className="text-sm text-muted-foreground leading-relaxed">{row.powered}</p>
                  </td>
                  <td className="py-5 pl-6 align-top bg-primary/[0.03] rounded-r-lg">
                    <p className="text-sm text-foreground font-medium leading-relaxed">{row.native}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
