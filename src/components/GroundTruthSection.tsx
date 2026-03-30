import { useState } from "react";

type AccessType = "DONE" | "FREE" | "LICENSE" | "BUILD";

interface Source {
  name: string;
  size?: string;
  access: AccessType;
  notes: string;
}

interface Category {
  number: string;
  title: string;
  sources: Source[];
  output?: string;
}

const categories: Category[] = [
  {
    number: "01",
    title: "Research Papers & Metadata",
    sources: [
      { name: "OpenAlex", access: "DONE", notes: "300M+ papers, metadata, citations" },
      { name: "Semantic Scholar metadata", access: "DONE", notes: "Merged into papers table" },
      { name: "S2 Abstracts", size: "~22 GB", access: "FREE", notes: "Next ingestion after s2_id backfill" },
      { name: "S2 Citations", size: "~354 GB", access: "FREE", notes: "Powers citation graph properly" },
      { name: "PubMed / MEDLINE", size: "~30-40 GB", access: "FREE", notes: "MeSH terms, publication types, author affiliations. More structured metadata than OA for biomedical" },
    ],
  },
  {
    number: "02",
    title: "Clinical Trials",
    sources: [
      { name: "AACT (ClinicalTrials.gov)", size: "~10 GB", access: "FREE", notes: "500K+ trials, 46 relational tables. Endpoints, results, adverse events, sponsors, sites" },
      { name: "WHO ICTRP", size: "~1-2 GB", access: "FREE", notes: "Global trial registry. Catches non-US trials missing from CT.gov" },
      { name: "EU CTIS/CTR", size: "~0.5-1 GB", access: "FREE", notes: "European trials, increasingly mandatory for EU-submitted drugs" },
    ],
  },
  {
    number: "03",
    title: "Biomarker & Target Databases",
    sources: [
      { name: "OncoKB", size: "~0.5 GB", access: "LICENSE", notes: "4,000+ annotated cancer gene alterations with FDA actionability levels" },
      { name: "CIViC", size: "~0.3 GB", access: "FREE", notes: "Community-curated clinical variant evidence. API available" },
      { name: "Open Targets Platform", size: "~25-40 GB", access: "FREE", notes: "Gene-disease associations, tractability scores, safety data. THE target validation database" },
      { name: "DisGeNET", size: "~3-4 GB", access: "FREE", notes: "1.1M gene-disease associations from curated + text-mined sources" },
      { name: "PharmGKB", size: "~2-3 GB", access: "FREE", notes: "Drug-gene interactions, pharmacogenomic annotations, dosing guidelines" },
      { name: "ClinVar", size: "~3 GB", access: "FREE", notes: "Clinical variant significance classifications" },
    ],
  },
  {
    number: "04",
    title: "Drug & Compound Data",
    sources: [
      { name: "ChEMBL v36", size: "~35 GB", access: "FREE", notes: "2.4M compounds, 20.5M activity measurements, 15.5K targets. Gold standard for drug-target binding data" },
      { name: "DrugBank", size: "~0.5 GB", access: "LICENSE", notes: "Comprehensive drug encyclopedia. Links drugs to targets to pathways to interactions. ~$20K/yr commercial" },
      { name: "FDA Orange Book", size: "~0.2 GB", access: "FREE", notes: "Patent listings, exclusivity, therapeutic equivalence. Essential for patent window scoring" },
    ],
  },
  {
    number: "05",
    title: "Patent Intelligence",
    sources: [
      { name: "USPTO bulk (pharma CPC)", size: "~20-30 GB", access: "FREE", notes: "Full text patents for A61K, A61P35 classes. Parse claims, filing dates, assignees" },
      { name: "Lens.org", size: "~6-10 GB", access: "FREE", notes: "Patent-paper linkage graph. Maps papers cited in patents, proxy for commercial interest" },
      { name: "FDA Purple Book", size: "~0.01 GB", access: "FREE", notes: "Biosimilar reference products + exclusivity" },
      { name: "FDA Para IV certifications", size: "~0.01 GB", access: "FREE", notes: "ANDA patent challenges, signals upcoming generic competition" },
    ],
  },
  {
    number: "06",
    title: "Regulatory Intelligence",
    sources: [
      { name: "FDA Drugs@FDA", size: "~0.2 GB", access: "FREE", notes: "Every approved drug: dates, application type, review classification" },
      { name: "FDA designation databases", size: "~0.3 GB", access: "FREE", notes: "Breakthrough, Fast Track, Orphan, RMAT, Accelerated Approval designations with outcomes" },
      { name: "FDA Advisory Committee transcripts", size: "~1-2 GB", access: "BUILD", notes: "Mine voting records, reviewer concerns, panel member profiles. 30-50 GB raw PDFs, NLP extraction" },
      { name: "FDA Complete Response Letters", size: "~0.5 GB", access: "BUILD", notes: "WHY the FDA rejected, gold for understanding regulatory risk. Extract from FOIA, press releases, SEC filings" },
      { name: "EMA EPARs", size: "~2-4 GB", access: "BUILD", notes: "European assessment reports. 20-30 GB raw, structured NLP extraction" },
    ],
  },
  {
    number: "07",
    title: "Protein & Pathway Data",
    sources: [
      { name: "UniProt Swiss-Prot", size: "~2-3 GB", access: "FREE", notes: "573K reviewed protein annotations. Druggability, function, structure" },
      { name: "Reactome", size: "~1-2 GB", access: "FREE", notes: "2,700 human pathways with reaction-level detail" },
      { name: "STRING (human)", size: "~3-5 GB", access: "FREE", notes: "Protein-protein interaction network. Essential for understanding target biology" },
      { name: "Human Protein Atlas", size: "~5-6 GB", access: "FREE", notes: 'Protein expression across tissues. Answers "where is this target expressed?" for safety/toxicity' },
      { name: "AlphaFold DB (human)", size: "~12-15 GB", access: "FREE", notes: "20K predicted protein structures. Relevant for druggability assessment" },
    ],
  },
  {
    number: "07",
    title: "Failed Trial Knowledge Base",
    sources: [
      { name: "ClinicalTrials.gov results", access: "BUILD", notes: "Mine AACT for terminated/failed trials + reported results. Extract reason for termination, primary endpoint miss, safety signals" },
      { name: "Negative publications", access: "BUILD", notes: "NLP on paper corpus, filter for negative/null results" },
      { name: "FDA Complete Response Letters", access: "BUILD", notes: "Extract from press releases + SEC 8-K filings" },
      { name: "Analyst reports on failures", access: "BUILD", notes: "NLP on earnings call transcripts (SEC EDGAR)" },
    ],
    output: "Structured DB: target, mechanism, indication, phase failed, reason, year. No one has this.",
  },
  {
    number: "08",
    title: "Conference Abstract Intelligence",
    sources: [
      { name: "ASCO abstracts", size: "~1-2 GB", access: "BUILD", notes: "Oncology data 6-12 months before journal publication" },
      { name: "AACR abstracts", size: "~0.5-1 GB", access: "BUILD", notes: "Cancer research, more preclinical" },
      { name: "ESMO abstracts", size: "~0.5 GB", access: "BUILD", notes: "European oncology" },
      { name: "ASH abstracts", size: "~0.5 GB", access: "BUILD", notes: "Hematology" },
      { name: "AAN, ACR, EASL, DDW", size: "~1-2 GB", access: "BUILD", notes: "Neuro, rheumatology, liver, GI" },
    ],
  },
  {
    number: "09",
    title: "FDA Reviewer Profiling",
    sources: [
      { name: "FDA review documents", access: "BUILD", notes: "NLP on medical/clinical review sections from Drugs@FDA" },
      { name: "FDA staff directory", access: "FREE", notes: "Public, cross-reference reviewers to divisions" },
      { name: "Historical decisions", access: "BUILD", notes: "Aggregate across all reviews per reviewer" },
    ],
    output: "Reviewer DB: name, division, therapeutic areas, decision history, concern patterns. Consultants charge $50K for one advisory board.",
  },
  {
    number: "10",
    title: "Earnings Call Pipeline Sentiment",
    sources: [
      { name: "SEC EDGAR 8-K/10-K/10-Q", size: "~30-50 GB", access: "FREE", notes: "Every public pharma/biotech quarterly filing + earnings call transcripts" },
    ],
    output: "Sentiment score per drug program per quarter. Language shifts predict failure 1-2 quarters before announcement.",
  },
];

const totalSources = categories.reduce((sum, cat) => sum + cat.sources.length, 0);

const accessColors: Record<AccessType, string> = {
  DONE: "bg-primary/20 text-primary border-primary/30",
  FREE: "bg-primary/20 text-primary border-primary/30",
  LICENSE: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  BUILD: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const GroundTruthSection = () => {
  const [openCategories, setOpenCategories] = useState<string[]>(["01"]);

  const toggle = (num: string) => {
    setOpenCategories((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-6 right-6 h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
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

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="border border-border rounded-lg p-5 bg-card/30">
                <p className="text-3xl font-display text-primary">{totalSources}</p>
                <p className="text-mono text-xs text-muted-foreground mt-1">Indexed Sources</p>
              </div>
              <div className="border border-border rounded-lg p-5 bg-card/30">
                <p className="text-3xl font-display text-primary">540M+</p>
                <p className="text-mono text-xs text-muted-foreground mt-1">Indexed Academic Resources</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-mono text-xs text-muted-foreground mb-4 tracking-wider uppercase">
              Unified Data Layer · {totalSources} Sources and Growing
            </p>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Alexandria ingests, normalises, and cross-links {totalSources} primary data sources across research papers, clinical trials, biomarkers, patents, proteins, and regulatory filings. Every answer traces back to indexed, verifiable data.
            </p>
            <div className="flex flex-wrap gap-2">
              {["DONE", "FREE", "LICENSE", "BUILD"].map((type) => (
                <span key={type} className={`text-mono text-[10px] px-2 py-0.5 rounded border ${accessColors[type as AccessType]}`}>
                  {type}
                </span>
              ))}
              <span className="text-mono text-[10px] text-muted-foreground ml-2">= access status</span>
            </div>
          </div>
        </div>

        {/* Accordion categories */}
        <div className="space-y-3">
          {categories.map((cat) => {
            const isOpen = openCategories.includes(cat.number);
            return (
              <div key={cat.number} className="border border-border rounded-lg bg-card/30 overflow-hidden">
                <button
                  onClick={() => toggle(cat.number)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-card/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-mono text-sm text-muted-foreground">{cat.number}</span>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mono text-xs text-muted-foreground border border-border rounded px-3 py-1">
                      {cat.sources.length} {cat.sources.length === 1 ? "source" : "sources"}
                    </span>
                    <span className="text-muted-foreground text-sm">{isOpen ? "▲" : "▼"}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    {/* Table header */}
                    <div className="grid grid-cols-12 gap-4 text-mono text-[10px] tracking-wider uppercase text-primary/60 border-b border-border pb-2 mb-2">
                      <div className="col-span-3">Source</div>
                      <div className="col-span-2">{cat.sources[0]?.size !== undefined || cat.sources.some(s => s.size) ? "Size" : "Method"}</div>
                      <div className="col-span-1">Access</div>
                      <div className="col-span-6">Notes</div>
                    </div>

                    {cat.sources.map((source, i) => (
                      <div key={i} className="grid grid-cols-12 gap-4 items-start py-2.5 border-b border-border/30 last:border-0">
                        <div className="col-span-3 font-medium text-sm">{source.name}</div>
                        <div className="col-span-2 text-mono text-sm text-muted-foreground">{source.size || "–"}</div>
                        <div className="col-span-1">
                          <span className={`text-mono text-[10px] px-2 py-0.5 rounded border ${accessColors[source.access]}`}>
                            {source.access}
                          </span>
                        </div>
                        <div className="col-span-6 text-sm text-foreground/60">{source.notes}</div>
                      </div>
                    ))}

                    {cat.output && (
                      <div className="grid grid-cols-12 gap-4 items-start pt-3 mt-1">
                        <div className="col-span-3 text-primary text-sm font-medium">→ Output</div>
                        <div className="col-span-2" />
                        <div className="col-span-7 text-sm text-foreground/60">
                          <span dangerouslySetInnerHTML={{
                            __html: cat.output.replace(
                              /(No one has this\.|Consultants charge \$50K for one advisory board\.|Language shifts predict failure 1-2 quarters before announcement\.)/g,
                              '<strong class="text-foreground">$1</strong>'
                            ),
                          }} />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-foreground/40 italic text-center">
          Validating Technical Advancement and Identifying Scientific Uncertainty through verifiable data.
        </p>
      </div>
    </section>
  );
};

export default GroundTruthSection;
