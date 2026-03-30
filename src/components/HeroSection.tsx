const terminalLines = [
  { prompt: "alexandria>", command: "query --cross-ref", dim: false },
  { prompt: "", command: '  "Compare mechanisms of action for all Phase 3', dim: false },
  { prompt: "", command: '   KRAS G12C inhibitors with expiring patents', dim: false },
  { prompt: "", command: '   in APAC markets (2025-2028)"', dim: false },
  { prompt: "", command: "", dim: true },
  { prompt: "├─", command: " Indexing: ClinicalTrials.gov ✓  FAERS ✓  Orange Book ✓", dim: true },
  { prompt: "├─", command: " Cross-referencing: 14,892 patent claims × 347 active trials", dim: true },
  { prompt: "├─", command: " Synthesizing regulatory signals across FDA, EMA, PMDA...", dim: true },
  { prompt: "└─", command: " 3 strategic insights generated. 22 datasets queried.", dim: true },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* Eyebrow */}
        <div className="animate-fade-up mb-8">
          <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/70">
            AI-Native Research Terminal
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl mb-8">
          Reasoning Across the Global R&D Landscape.
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-1 text-lg md:text-xl max-w-2xl text-foreground/70 leading-relaxed mb-16">
          Eliminate the workflow of manual cross-referencing. Move from raw data to technical synthesis in seconds, not weeks.
        </p>

        {/* Terminal */}
        <div className="animate-fade-up-delay-2 max-w-3xl">
          <div className="border border-border rounded-lg overflow-hidden bg-background/80 backdrop-blur-sm border-glow">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/10" />
              <span className="ml-3 text-mono text-xs text-muted-foreground">alexandria — cross-reference engine</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              {terminalLines.map((line, i) => (
                <div key={i} className={`${line.dim ? 'text-muted-foreground' : 'text-terminal'}`}>
                  {line.prompt && (
                    <span className={line.dim ? 'text-terminal-dim' : 'text-primary'}>{line.prompt} </span>
                  )}
                  <span>{line.command}</span>
                  {i === 0 && <span className="inline-block w-2 h-4 ml-1 bg-terminal animate-cursor-blink" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
