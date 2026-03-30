const datasets = [
  "ClinicalTrials.gov", "FAERS", "Orange Book", "EMA EPARs",
  "USPTO Patents", "WHO Drug Info", "PubMed", "DrugBank",
  "OpenFDA", "PMDA", "TGA", "Health Canada",
  "Cortellis", "GlobalData", "IQVIA", "Pharmaprojects",
  "SEC Filings", "EMA Signals", "FDA AdComm", "Biosimilar DB",
  "MedDRA", "ICD-11",
];

const GroundTruthSection = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Divider */}
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: The Problem */}
          <div>
            <span className="text-mono text-xs tracking-[0.3em] uppercase text-primary/60 block mb-4">
              Ground Truth
            </span>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-8">
              Evidentiary Precision, Not Probabilistic Guessing
            </h2>

            <div className="space-y-6 text-foreground/60 leading-relaxed">
              <p>
                General-purpose LLMs fabricate medical citations at an alarming rate. Studies show a{" "}
                <span className="text-highlight font-medium">47% hallucination rate</span>{" "}
                for biomedical references. They lack access to primary drug datasets: FAERS adverse event signals, Orange Book exclusivity data, EMA regulatory assessments.
              </p>
              <p>
                For R&D consulting, this isn't a minor inconvenience. It's a disqualifying flaw. Technical advancement claims and scientific uncertainty assessments demand verifiable, indexed source data, not pattern-matched approximations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="border border-border rounded-lg p-5 bg-card/30">
                <p className="text-3xl font-display text-primary">22</p>
                <p className="text-mono text-xs text-muted-foreground mt-1">Indexed Datasets</p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-card/30">
                <p className="text-3xl font-display text-primary">540M+</p>
                <p className="text-mono text-xs text-muted-foreground mt-1">Indexed Academic Resources</p>
              </div>
            </div>
          </div>

          {/* Right: Dataset list */}
          <div className="flex flex-col justify-center">
            <p className="text-mono text-xs text-muted-foreground mb-6 tracking-wider uppercase">
              Unified Data Layer · 22 Sources and Growing
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {datasets.map((ds, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-border/50">
                  <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="text-mono text-sm text-foreground/70">{ds}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-foreground/40 italic">
              Validating Technical Advancement and Identifying Scientific Uncertainty through verifiable data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundTruthSection;
