import { useState } from "react";

const stats = [
  { value: "3", label: "Breakthrough Designations" },
  { value: "10.1%", label: "Approval Probability (lead compound)", sub: "Phase I to Approval" },
  { value: "Q1 2028", label: "Earliest Projected Approval" },
  { value: "3", label: "Active Phase III Programs" },
];

const sotorasibTimeline = [
  { title: "Phase I (CodeBreaK 100)", desc: "Completed. PDAC cohort ORR 21.1%", badge: null },
  { title: "Breakthrough Designation (NSCLC)", desc: "Granted May 2020. Converted to approval.", badge: "Breakthrough" },
  { title: "FDA Approval (NSCLC)", desc: "Approved May 2021. Accelerated approval.", badge: null },
  { title: "Fast Track (NSCLC)", desc: "Granted Nov 2020.", badge: "Fast Track" },
];

const divarasibTimeline = [
  { title: "Phase I (GDC-6036-001)", desc: "Completed. PDAC cohort ORR 44.4% (n=9). Highest single-agent ORR.", badge: null },
  { title: "Breakthrough Designation", desc: "Granted Mar 2024 for G12C solid tumors.", badge: "Breakthrough" },
  { title: "Phase III (with cetuximab)", desc: "ACTIVE. PDAC cohort n=80. Divarasib + cetuximab vs docetaxel.", badge: null },
  { title: "Projected Interim Analysis", desc: "Estimated Q2 2027.", badge: null },
];

const rmc6236Timeline = [
  { title: "Phase I/II dose escalation", desc: "Completed. PDAC ORR 42% across KRAS variants.", badge: null },
  { title: "Fast Track Designation", desc: "Granted Sep 2024 for KRAS-mutant PDAC.", badge: "Fast Track" },
  { title: "Phase II PDAC expansion", desc: "ACTIVE. Enrolling across G12C, G12D, G12V, G13C. Variant-agnostic.", badge: null },
  { title: "Phase III planning", desc: "Registrational trial design in progress. Key question: monotherapy vs combination.", badge: null },
  { title: "Potential Breakthrough", desc: "If Phase II confirms variant-agnostic activity, BT designation likely.", badge: "Potential" },
  { title: "Projected NDA", desc: "Estimated 2029-2030. Behind sotorasib and divarasib.", badge: null },
  { title: "Regulatory Advantage", desc: "Pan-RAS mechanism could enable broader label (all KRAS mutations, not just G12C). Significantly larger addressable population.", badge: null },
];

const adagrasibTimeline = [
  { title: "Phase I/II (KRYSTAL-1)", desc: "Completed. PDAC cohort ORR 33.3% (n=21).", badge: null },
  { title: "Breakthrough Designation (NSCLC)", desc: "Granted Jun 2021.", badge: "Breakthrough" },
  { title: "FDA Approval (NSCLC)", desc: "Approved Dec 2022. Accelerated approval.", badge: null },
  { title: "Phase II (KRYSTAL-10, 1L PDAC)", desc: "ACTIVE. Adagrasib + gem/nab-pac. First-line. n=120.", badge: null },
  { title: "Earnings Sentiment Warning", desc: "BMS sentiment declining 3 consecutive quarters. Strategic deprioritization risk.", badge: "Warning" },
  { title: "Projected Data", desc: "Interim H2 2026. Full data 2027.", badge: null },
  { title: "Regulatory Risk", desc: "No Phase III planned for PDAC. Phase II may be insufficient for full approval without randomized comparator.", badge: null },
];

const TimelineItem = ({ item, isLast }: { item: typeof sotorasibTimeline[0]; isLast: boolean }) => (
  <div className="flex gap-3">
    <div className="flex flex-col items-center">
      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
      {!isLast && <div className="w-px flex-1 bg-primary/20 mt-1" />}
    </div>
    <div className="pb-5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold text-sm text-foreground">{item.title}</span>
        {item.badge && (
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            item.badge === "Warning"
              ? "bg-destructive/10 text-destructive"
              : item.badge === "Potential"
              ? "bg-highlight/15 text-highlight"
              : "bg-primary text-primary-foreground"
          }`}>
            {item.badge}
          </span>
        )}
      </div>
      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
    </div>
  </div>
);

const DemoOutput = () => {
  const [activeTab, setActiveTab] = useState<"pathways" | "regulatory">("pathways");

  return (
    <div className="bg-background rounded-lg">
      {/* Header tags */}
      <div className="px-6 pt-6 flex gap-2">
        <span className="text-mono text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
          Regulatory + Trial Strategy
        </span>
        <span className="text-mono text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
          Combined Query
        </span>
      </div>

      {/* Title */}
      <div className="px-6 pt-4 pb-2">
        <h3 className="text-xl md:text-2xl tracking-tight">
          KRAS G12C — Regulatory &amp; Trial Pathway Analysis
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          28 trials · 8 FDA designations · 6 compounds tracked · Updated 1d ago
        </p>
      </div>

      {/* Executive Summary */}
      <div className="px-6 py-4">
        <div className="border border-border rounded-lg p-5">
          <p className="font-semibold text-sm mb-2 text-foreground">Executive Summary</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This workspace combines clinical trial intelligence with regulatory pathway data to provide an integrated view of each compound's path to approval. By overlaying FDA designations, phase transition probabilities, and AdCom precedent onto active trial timelines, Alexandria enables real-time assessment of regulatory risk and competitive positioning.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 pb-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="border border-border rounded-lg p-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            {s.sub && <p className="text-[10px] text-muted-foreground/60 mt-0.5">{s.sub}</p>}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="flex gap-6 border-b border-border">
          <button
            onClick={() => setActiveTab("pathways")}
            className={`text-sm pb-2.5 border-b-2 transition-colors ${
              activeTab === "pathways"
                ? "border-foreground text-foreground font-medium"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Compound Pathways
          </button>
          <button
            onClick={() => setActiveTab("regulatory")}
            className={`text-sm pb-2.5 border-b-2 transition-colors ${
              activeTab === "regulatory"
                ? "border-foreground text-foreground font-medium"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Regulatory Comparison
          </button>
        </div>
      </div>

      {/* Compound cards */}
      {activeTab === "pathways" && (
        <div className="px-6 py-5 grid md:grid-cols-2 gap-4">
          {/* Sotorasib */}
          <div className="border border-border rounded-lg p-5">
            <p className="font-semibold text-base text-foreground">Sotorasib</p>
            <p className="text-xs text-muted-foreground mb-4">Amgen · Covalent KRAS G12C inhibitor</p>
            <div>
              {sotorasibTimeline.map((item, i) => (
                <TimelineItem key={i} item={item} isLast={i === sotorasibTimeline.length - 1} />
              ))}
            </div>
          </div>

          {/* Divarasib */}
          <div className="border border-border rounded-lg p-5">
            <p className="font-semibold text-base text-foreground">Divarasib</p>
            <p className="text-xs text-muted-foreground mb-4">Roche · Next-gen covalent KRAS G12C inhibitor</p>
            <div>
              {divarasibTimeline.map((item, i) => (
                <TimelineItem key={i} item={item} isLast={i === divarasibTimeline.length - 1} />
              ))}
            </div>
          </div>

          {/* RMC-6236 */}
          <div className="border border-border rounded-lg p-5">
            <p className="font-semibold text-base text-foreground">RMC-6236</p>
            <p className="text-xs text-muted-foreground mb-4">Revolution Medicines · Pan-RAS(ON) tri-complex inhibitor</p>
            <div>
              {rmc6236Timeline.map((item, i) => (
                <TimelineItem key={i} item={item} isLast={i === rmc6236Timeline.length - 1} />
              ))}
            </div>
          </div>

          {/* Adagrasib */}
          <div className="border border-border rounded-lg p-5">
            <p className="font-semibold text-base text-foreground">Adagrasib</p>
            <p className="text-xs text-muted-foreground mb-4">BMS / Mirati · Covalent KRAS G12C inhibitor</p>
            <div>
              {adagrasibTimeline.map((item, i) => (
                <TimelineItem key={i} item={item} isLast={i === adagrasibTimeline.length - 1} />
              ))}
            </div>
          </div>
      )}

      {activeTab === "regulatory" && (
        <div className="px-6 py-5 space-y-6">
          {/* Comparison table */}
          <div className="border border-border rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/40">
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Regulatory Dimension</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Sotorasib</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Divarasib</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">RMC-6236</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Adagrasib</th>
                </tr>
              </thead>
              <tbody className="text-xs text-muted-foreground">
                {[
                  ["Breakthrough Designation", "Yes (NSCLC)", "Yes (Solid tumors)", "No (Fast Track only)", "Yes (NSCLC)"],
                  ["Fast Track", "Yes", "No", "Yes (PDAC)", "No"],
                  ["Orphan Drug (PDAC)", "Yes", "No", "No", "No"],
                  ["Priority Review likely", "Yes", "Yes", "Possible", "Unlikely"],
                  ["Phase III in PDAC", "Yes (CodeBreaK 201)", "Yes (with cetuximab)", "Planned", "No"],
                  ["Randomized data", "Yes (vs FOLFIRI)", "Yes (vs docetaxel)", "No", "No"],
                  ["OS as primary endpoint", "Yes", "TBD", "TBD", "No (ORR)"],
                  ["Earliest PDAC approval", "Q1 2029", "Q2 2029", "2030", "Unlikely without Ph3"],
                  ["Approval probability", "~44% (from Ph3)", "~38%", "~25%", "~12%"],
                  ["Key regulatory risk", "OS magnitude unclear", "Small PDAC cohort (n=80)", "No randomized data yet", "No Phase III, BMS deprioritizing"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3 ${
                          row[0] === "Approval probability" ? "text-primary font-medium" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Regulatory Analysis */}
          <div className="border border-border rounded-lg p-5">
            <p className="font-semibold text-sm mb-2 text-foreground">Regulatory Analysis</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sotorasib has the most de-risked regulatory pathway — the only compound with a randomized Phase III (CodeBreaK 201) using OS as primary endpoint, plus Orphan Drug exclusivity. Divarasib is the strongest clinical performer (44.4% ORR) but its PDAC cohort (n=80) may be too small for standalone approval. RMC-6236 has the most transformative potential (variant-agnostic) but is furthest from registration. Adagrasib is at highest risk of PDAC abandonment given BMS's declining investment signals.
            </p>
          </div>

          {/* Source tags */}
          <div className="flex flex-wrap gap-2">
            {["AACT", "FDA Drugs@FDA", "FDA Designations", "SEC EDGAR", "AdCom Records"].map((src) => (
              <span key={src} className="text-mono text-[10px] px-2.5 py-1 rounded bg-secondary text-muted-foreground">
                {src}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoOutput;
