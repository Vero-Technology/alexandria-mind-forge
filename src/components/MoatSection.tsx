const MoatSection = () => {
  return (
    <>
      <section className="relative py-32 px-6">
        <div className="absolute top-0 left-6 right-6 h-px bg-border" />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
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
                  This is the compounding moat: the denser the data web, the more novel the insights that emerge from every query. Connections that would take a human analyst weeks to hypothesize surface in seconds.
                </p>
              </div>

              {/* Network effect visual */}
              <div className="mt-10 border border-border rounded-lg p-6 bg-card/30">
                <div className="flex items-end gap-1 h-24">
                  {[1, 2, 3, 5, 8, 13, 21, 34, 55].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/20 rounded-t-sm transition-all hover:bg-primary/40"
                      style={{ height: `${(v / 55) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-mono text-xs text-muted-foreground">1 dataset</span>
                  <span className="text-mono text-xs text-muted-foreground">22 datasets</span>
                </div>
                <p className="text-mono text-xs text-muted-foreground mt-1 text-center">Cross-referential connections (super-linear)</p>
              </div>
            </div>

            {/* Right: Team */}
            <div className="flex flex-col justify-center">
              <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
                Team
              </span>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-8">
                Built by Researchers, for Researchers
              </h2>

              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6 bg-card/30">
                  <p className="text-foreground/80 font-medium mb-2">2× YC Repeat Founders</p>
                  <p className="text-sm text-foreground/50">
                    Prior exits in developer tools and data infrastructure. Deep understanding of building products that compound in value over time.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6 bg-card/30">
                  <p className="text-foreground/80 font-medium mb-2">British Maths Olympiad Gold Medalists</p>
                  <p className="text-sm text-foreground/50">
                    The reasoning engine is built on first-principles mathematical foundations — not prompt engineering on top of existing models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6">
        <div className="absolute top-0 left-6 right-6 h-px bg-border" />
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl tracking-tight mb-4" style={{ color: 'hsl(140, 12%, 90%)' }}>
            Alexandria
          </p>
          <p className="text-mono text-sm text-muted-foreground">
            Built to disappear into the R&D workflow.
          </p>
        </div>
      </footer>
    </>
  );
};

export default MoatSection;
