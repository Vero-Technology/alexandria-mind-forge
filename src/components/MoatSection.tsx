const MoatSection = () => {
  return (
    <>
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
                42 datasets indexed into one unified layer. A single query cross-references trials, safety, patents, and deals simultaneously.
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
      <footer className="relative py-20 px-6">
        <div className="absolute top-0 left-6 right-6 h-px bg-border" />
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-display text-xl tracking-tight mb-2">Alexandria</p>
          <p className="text-mono text-xs text-muted-foreground mb-8">
            The intelligence layer for R&D strategy.
          </p>
          <span className="text-mono text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-3">Inquiries</span>
          <a href="mailto:logan@alexandrialabs.uk" className="text-lg md:text-xl font-display tracking-tight text-foreground hover:text-primary transition-colors">
            logan@alexandrialabs.uk
          </a>
        </div>
      </footer>
    </>
  );
};

export default MoatSection;
