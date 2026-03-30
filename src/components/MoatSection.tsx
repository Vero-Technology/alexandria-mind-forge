const MoatSection = () => {
  return (
    <>
      <section className="relative py-32 px-6">
        <div className="absolute top-0 left-6 right-6 h-px bg-border" />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <div>
              <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
                Compounding Moat
              </span>
              <h2 className="text-4xl md:text-5xl tracking-tight mb-8">
                Super-Linear Value
              </h2>
              <div className="space-y-5 text-foreground/60 leading-relaxed">
                <p>
                  Each new dataset added to Alexandria doesn't create linear value — it creates exponential connections. A patent database alone is useful. A patent database cross-referenced with clinical trial outcomes, adverse event signals, and regulatory decisions becomes an intelligence layer.
                </p>
                <p>
                  The denser the data web, the more novel the insights that emerge from every query. Connections that would take a human analyst weeks to hypothesize surface in seconds.
                </p>
              </div>
            </div>

            {/* Right: chart */}
            <div className="border border-border rounded-lg p-8 bg-card">
              <div className="flex items-end gap-1.5 h-40">
                {[1, 2, 3, 5, 8, 13, 21, 34, 55].map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/15 rounded-t-sm transition-all hover:bg-primary/30"
                    style={{ height: `${(v / 55) * 100}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-border">
                <span className="text-mono text-xs text-muted-foreground">1 dataset</span>
                <span className="text-mono text-xs text-muted-foreground">22 datasets</span>
              </div>
              <p className="text-mono text-xs text-muted-foreground mt-2 text-center">
                Cross-referential connections (super-linear growth)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built to Disappear */}
      <section className="relative py-28 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl tracking-tight mb-12">
            Built to <span className="text-primary/50 italic">Disappear.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="border border-border rounded-lg p-6 bg-card">
              <p className="text-sm font-semibold text-foreground mb-2">Architecture, not a feature</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                22 datasets indexed into one unified layer. A single query cross-references trials, safety, patents, and deals simultaneously.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <p className="text-sm font-semibold text-foreground mb-2">Unreplicable by design</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Legacy platforms cannot replicate this by adding AI on top. It would require unifying databases that were never built to connect.
              </p>
            </div>
            <div className="sm:col-span-2 border border-border rounded-lg p-6 bg-card">
              <p className="text-sm font-semibold text-foreground mb-2">No interface to learn</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Write your query in plain language. The tool disappears into the workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6">
        <div className="absolute top-0 left-6 right-6 h-px bg-border" />
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-display text-xl tracking-tight mb-2">Alexandria</p>
          <p className="text-mono text-xs text-muted-foreground">
            The intelligence layer for R&D strategy.
          </p>
        </div>
      </footer>
    </>
  );
};

export default MoatSection;
