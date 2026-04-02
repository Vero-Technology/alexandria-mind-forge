import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3", label: "Breakthrough Designations" },
  { value: "10.1%", label: "Approval Probability", sub: "Phase I to Approval" },
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

const compounds = [
  { name: "Sotorasib", company: "Amgen", type: "Covalent KRAS G12C inhibitor", timeline: sotorasibTimeline, status: "Approved", statusColor: "hsl(0 0% 100%)" },
  { name: "Divarasib", company: "Roche", type: "Next-gen covalent KRAS G12C inhibitor", timeline: divarasibTimeline, status: "Phase III", statusColor: "hsl(0 0% 70%)" },
  { name: "RMC-6236", company: "Revolution Medicines", type: "Pan-RAS(ON) tri-complex inhibitor", timeline: rmc6236Timeline, status: "Phase II", statusColor: "hsl(0 0% 55%)" },
  { name: "Adagrasib", company: "BMS / Mirati", type: "Covalent KRAS G12C inhibitor", timeline: adagrasibTimeline, status: "At Risk", statusColor: "hsl(0 60% 60%)" },
];

const TimelineItem = ({ item, isLast, index }: { item: typeof sotorasibTimeline[0]; isLast: boolean; index: number }) => (
  <motion.div
    className="flex gap-3"
    initial={{ opacity: 0, x: -15 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
  >
    <div className="flex flex-col items-center">
      <motion.div
        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
        style={{ background: "hsl(0 0% 100%)" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.06 + 0.1, type: "spring" }}
      />
      {!isLast && <div className="w-px flex-1 mt-1" style={{ background: "hsl(0 0% 18%)" }} />}
    </div>
    <div className="pb-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-medium text-[13px]" style={{ color: "hsl(0 0% 85%)" }}>{item.title}</span>
        {item.badge && (
          <span className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
            item.badge === "Warning"
              ? "bg-red-500/15 text-red-400"
              : item.badge === "Potential"
              ? "bg-amber-500/15 text-amber-400"
              : ""
          }`} style={item.badge !== "Warning" && item.badge !== "Potential" ? { background: "hsl(0 0% 100% / 0.1)", color: "hsl(0 0% 80%)" } : {}}>
            {item.badge}
          </span>
        )}
      </div>
      <p className="text-[11px] mt-0.5 leading-relaxed" style={{ color: "hsl(0 0% 40%)" }}>{item.desc}</p>
    </div>
  </motion.div>
);

const regulatoryData = [
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
];

const DemoOutput = ({ darkMode }: { darkMode?: boolean }) => {
  const [activeTab, setActiveTab] = useState<"pathways" | "regulatory">("pathways");
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <div ref={containerRef} className="rounded-lg" style={{ background: darkMode ? "hsl(0 0% 7%)" : undefined }}>
      {/* Header tags */}
      <motion.div
        className="px-6 pt-6 flex gap-2"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span
          className="text-mono text-[10px] px-2.5 py-1 rounded-full font-medium"
          style={{ background: "hsl(0 0% 100% / 0.06)", color: "hsl(0 0% 55%)", border: "1px solid hsl(0 0% 15%)" }}
        >
          Regulatory + Trial Strategy
        </span>
        <span
          className="text-mono text-[10px] px-2.5 py-1 rounded-full font-medium"
          style={{ background: "hsl(0 0% 100% / 0.06)", color: "hsl(0 0% 55%)", border: "1px solid hsl(0 0% 15%)" }}
        >
          Combined Query
        </span>
      </motion.div>

      {/* Title */}
      <motion.div
        className="px-6 pt-4 pb-2"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl md:text-2xl tracking-tight" style={{ color: "hsl(0 0% 93%)" }}>
          KRAS G12C — Regulatory &amp; Trial Pathway Analysis
        </h3>
        <p className="text-xs mt-1" style={{ color: "hsl(0 0% 42%)" }}>
          28 trials · 8 FDA designations · 6 compounds tracked · Updated 1d ago
        </p>
      </motion.div>

      {/* Executive Summary */}
      <motion.div
        className="px-6 py-4"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div
          className="rounded-xl p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 9%) 0%, hsl(0 0% 6%) 100%)",
            border: "1px solid hsl(0 0% 14%)",
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(0 0% 100% / 0.02) 0%, transparent 70%)" }} />
          <p className="font-semibold text-sm mb-2 tracking-wide" style={{ color: "hsl(0 0% 90%)" }}>Executive Summary</p>
          <p className="text-xs leading-[1.7]" style={{ color: "hsl(0 0% 45%)" }}>
            This workspace combines clinical trial intelligence with regulatory pathway data to provide an integrated view of each compound's path to approval. By overlaying FDA designations, phase transition probabilities, and AdCom precedent onto active trial timelines, Alexandria enables real-time assessment of regulatory risk and competitive positioning.
          </p>
        </div>
      </motion.div>

      {/* Stats — upgraded */}
      <div className="px-6 pb-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl p-[1px] cursor-default group"
            style={{
              background: "linear-gradient(135deg, hsl(0 0% 20%) 0%, hsl(0 0% 10%) 50%, hsl(0 0% 20%) 100%)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
            whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
          >
            <div
              className="rounded-[11px] px-4 py-3 h-full relative overflow-hidden"
              style={{ background: "linear-gradient(180deg, hsl(0 0% 9%) 0%, hsl(0 0% 5%) 100%)" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 30%), transparent)" }} />
              <p className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: "hsl(0 0% 100%)" }}>{s.value}</p>
              <p className="text-[10px] mt-1 leading-snug font-medium tracking-wide" style={{ color: "hsl(0 0% 50%)" }}>{s.label}</p>
              {s.sub && <p className="text-[9px] mt-0.5" style={{ color: "hsl(0 0% 30%)" }}>{s.sub}</p>}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <motion.div
        className="px-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex gap-1 p-1 rounded-lg" style={{ background: "hsl(0 0% 5%)", border: "1px solid hsl(0 0% 12%)" }}>
          {(["pathways", "regulatory"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-sm py-2 px-4 rounded-md transition-all duration-300 flex-1"
              style={{
                background: activeTab === tab ? "hsl(0 0% 14%)" : "transparent",
                color: activeTab === tab ? "hsl(0 0% 93%)" : "hsl(0 0% 42%)",
                fontWeight: activeTab === tab ? 500 : 400,
                boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
              }}
            >
              {tab === "pathways" ? "Compound Pathways" : "Regulatory Comparison"}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeTab === "pathways" && (
          <motion.div
            key="pathways"
            className="px-6 py-5 grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {compounds.map((compound, ci) => (
              <motion.div
                key={ci}
                className="relative rounded-xl p-[1px] cursor-pointer"
                style={{
                  background: expandedCard === ci
                    ? "linear-gradient(135deg, hsl(0 0% 28%) 0%, hsl(0 0% 12%) 50%, hsl(0 0% 28%) 100%)"
                    : "linear-gradient(135deg, hsl(0 0% 16%) 0%, hsl(0 0% 10%) 50%, hsl(0 0% 16%) 100%)",
                }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: ci * 0.1 }}
                onClick={() => setExpandedCard(expandedCard === ci ? null : ci)}
                whileHover={{ scale: 1.01 }}
              >
                <div
                  className="rounded-[11px] p-5 relative overflow-hidden"
                  style={{
                    background: expandedCard === ci
                      ? "linear-gradient(180deg, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 100%)"
                      : "linear-gradient(180deg, hsl(0 0% 8%) 0%, hsl(0 0% 5%) 100%)",
                    boxShadow: expandedCard === ci ? "inset 0 1px 0 hsl(0 0% 18%)" : "inset 0 1px 0 hsl(0 0% 12%)",
                  }}
                >
                  {/* Subtle corner glow on expanded */}
                  {expandedCard === ci && (
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(0 0% 100% / 0.03) 0%, transparent 70%)" }} />
                  )}

                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <p className="font-semibold text-[15px] tracking-tight" style={{ color: "hsl(0 0% 93%)" }}>{compound.name}</p>
                        <span
                          className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                          style={{ background: `${compound.statusColor}15`, color: compound.statusColor, border: `1px solid ${compound.statusColor}25` }}
                        >
                          {compound.status}
                        </span>
                      </div>
                      <p className="text-[11px] mb-3" style={{ color: "hsl(0 0% 40%)" }}>
                        <span style={{ color: "hsl(0 0% 55%)" }}>{compound.company}</span> · {compound.type}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === ci ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[10px] mt-1.5 flex-shrink-0"
                      style={{ color: "hsl(0 0% 30%)" }}
                    >
                      ▼
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedCard === ci && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2" style={{ borderTop: "1px solid hsl(0 0% 13%)" }}>
                          <div className="mt-3">
                            {compound.timeline.map((item, i) => (
                              <TimelineItem key={i} item={item} isLast={i === compound.timeline.length - 1} index={i} />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "regulatory" && (
          <motion.div
            key="regulatory"
            className="px-6 py-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="rounded-xl overflow-hidden p-[1px]" style={{ background: "linear-gradient(135deg, hsl(0 0% 18%) 0%, hsl(0 0% 10%) 50%, hsl(0 0% 18%) 100%)" }}>
              <div className="rounded-[11px] overflow-x-auto" style={{ background: "hsl(0 0% 6%)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "hsl(0 0% 8%)", borderBottom: "1px solid hsl(0 0% 14%)" }}>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Regulatory Dimension</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Sotorasib</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Divarasib</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>RMC-6236</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Adagrasib</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs" style={{ color: "hsl(0 0% 42%)" }}>
                    {regulatoryData.map((row, i) => (
                      <motion.tr
                        key={i}
                        style={{ borderTop: "1px solid hsl(0 0% 11%)" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className="transition-colors duration-200"
                        whileHover={{ backgroundColor: "hsl(0 0% 8%)" }}
                      >
                        <td className="px-4 py-3 font-medium" style={{ color: "hsl(0 0% 80%)" }}>{row[0]}</td>
                        {row.slice(1).map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3"
                            style={row[0] === "Approval probability" ? { color: "hsl(0 0% 100%)", fontWeight: 600 } : {}}
                          >
                            {cell}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <motion.div
              className="rounded-xl p-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 5%) 100%)",
                border: "1px solid hsl(0 0% 13%)",
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 25%), transparent)" }} />
              <p className="font-semibold text-sm mb-2 tracking-wide" style={{ color: "hsl(0 0% 90%)" }}>Regulatory Analysis</p>
              <p className="text-xs leading-[1.7]" style={{ color: "hsl(0 0% 45%)" }}>
                Sotorasib has the most de-risked regulatory pathway — the only compound with a randomized Phase III (CodeBreaK 201) using OS as primary endpoint, plus Orphan Drug exclusivity. Divarasib is the strongest clinical performer (44.4% ORR) but its PDAC cohort (n=80) may be too small for standalone approval. RMC-6236 has the most transformative potential (variant-agnostic) but is furthest from registration. Adagrasib is at highest risk of PDAC abandonment given BMS's declining investment signals.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {["AACT", "FDA Drugs@FDA", "FDA Designations", "SEC EDGAR", "AdCom Records"].map((src, i) => (
                <motion.span
                  key={src}
                  className="text-mono text-[10px] px-3 py-1.5 rounded-lg font-medium"
                  style={{ background: "hsl(0 0% 8%)", color: "hsl(0 0% 45%)", border: "1px solid hsl(0 0% 13%)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                >
                  {src}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DemoOutput;
