const levels = [
  {
    level: "Level 1",
    label: "AI-Enhanced",
    description: "Features bolted onto legacy tools. Search gets a chatbot. Spreadsheets get autocomplete. The core product remains unchanged.",
    opacity: "opacity-40",
    border: "border-border",
  },
  {
    level: "Level 2",
    label: "AI-Powered",
    description: "Automation of traditional tasks. Summarization, classification, extraction — efficiency gains on existing workflows.",
    opacity: "opacity-60",
    border: "border-border",
  },
  {
    level: "Level 3",
    label: "AI-Native",
    description: "The architecture is the product. Reasoning across 22+ datasets simultaneously. No legacy system underneath — every layer designed for cross-referential intelligence.",
    opacity: "opacity-100",
    border: "border-primary/50",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
            Architecture
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
            The Architecture of Reasoning
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Three levels of AI integration define the competitive landscape. Most tools sit at Level 1 or 2. Alexandria exists solely at Level 3.
          </p>
        </div>

        {/* Levels */}
        <div className="grid gap-4 mb-16">
          {levels.map((item, i) => (
            <div
              key={i}
              className={`${item.opacity} border ${item.border} rounded-lg p-6 md:p-8 bg-card/50 backdrop-blur-sm transition-all hover:opacity-100`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex-shrink-0">
                  <span className="text-mono text-xs text-muted-foreground">{item.level}</span>
                  <h3 className="text-xl md:text-2xl tracking-tight">{item.label}</h3>
                </div>
                <p className="text-foreground/60 leading-relaxed md:max-w-xl md:ml-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Test */}
        <div className="border border-primary/20 rounded-lg p-8 bg-primary/5">
          <p className="text-mono text-xs text-primary/70 mb-3 tracking-wider uppercase">The Key Test</p>
          <p className="text-2xl md:text-3xl font-display tracking-tight leading-snug">
            "If you removed the AI, would the product still work?"
          </p>
          <p className="mt-4 text-foreground/50 max-w-2xl">
            For AI-Enhanced tools, the answer is yes. For Alexandria, the answer is definitively no. The reasoning engine{" "}
            <em className="text-primary">is</em> the product — built to eliminate the Cross-Reference Tax inherent in R&D.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
