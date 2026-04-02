import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

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

const compounds = [
  { name: "Sotorasib", company: "Amgen · Covalent KRAS G12C inhibitor", timeline: sotorasibTimeline },
  { name: "Divarasib", company: "Roche · Next-gen covalent KRAS G12C inhibitor", timeline: divarasibTimeline },
  { name: "RMC-6236", company: "Revolution Medicines · Pan-RAS(ON) tri-complex inhibitor", timeline: rmc6236Timeline },
  { name: "Adagrasib", company: "BMS / Mirati · Covalent KRAS G12C inhibitor", timeline: adagrasibTimeline },
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
        className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
        style={{ background: "hsl(160 55% 40%)" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.06 + 0.1, type: "spring" }}
      />
      {!isLast && <div className="w-px flex-1 mt-1" style={{ background: "hsl(160 30% 25%)" }} />}
    </div>
    <div className="pb-5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold text-sm" style={{ color: "hsl(0 0% 90%)" }}>{item.title}</span>
        {item.badge && (
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            item.badge === "Warning"
              ? "bg-red-500/20 text-red-400"
              : item.badge === "Potential"
              ? "bg-amber-500/20 text-amber-400"
              : "text-emerald-300"
          }`} style={item.badge !== "Warning" && item.badge !== "Potential" ? { background: "hsl(160 55% 20%)" } : {}}>
            {item.badge}
          </span>
        )}
      </div>
      <p className="text-xs mt-0.5" style={{ color: "hsl(160 10% 50%)" }}>{item.desc}</p>
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

  const borderColor = "hsl(160 20% 18%)";
  const textPrimary = "hsl(0 0% 92%)";
  const textSecondary = "hsl(160 10% 50%)";
  const accentColor = "hsl(160 55% 40%)";
  const cardBg = "hsl(160 15% 8%)";
  const hoverBg = "hsl(160 15% 12%)";

  return (
    <div ref={containerRef} className="rounded-lg" style={{ background: darkMode ? "hsl(160 20% 10%)" : undefined }}>
      {/* Header tags */}
      <motion.div
        className="px-6 pt-6 flex gap-2"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span
          className="text-mono text-[10px] px-2.5 py-1 rounded-full font-medium"
          style={{ background: "hsl(160 55% 20% / 0.2)", color: accentColor }}
        >
          Regulatory + Trial Strategy
        </span>
        <span
          className="text-mono text-[10px] px-2.5 py-1 rounded-full font-medium"
          style={{ background: "hsl(160 55% 20% / 0.2)", color: accentColor }}
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
        <h3 className="text-xl md:text-2xl tracking-tight" style={{ color: textPrimary }}>
          KRAS G12C — Regulatory &amp; Trial Pathway Analysis
        </h3>
        <p className="text-xs mt-1" style={{ color: textSecondary }}>
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
        <div className="rounded-lg p-5" style={{ border: `1px solid ${borderColor}`, background: cardBg }}>
          <p className="font-semibold text-sm mb-2" style={{ color: textPrimary }}>Executive Summary</p>
          <p className="text-xs leading-relaxed" style={{ color: textSecondary }}>
            This workspace combines clinical trial intelligence with regulatory pathway data to provide an integrated view of each compound's path to approval. By overlaying FDA designations, phase transition probabilities, and AdCom precedent onto active trial timelines, Alexandria enables real-time assessment of regulatory risk and competitive positioning.
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="px-6 pb-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="rounded-lg p-4 text-center cursor-default group"
            style={{ border: `1px solid ${borderColor}`, background: cardBg }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
            whileHover={{ scale: 1.03, borderColor: accentColor, transition: { duration: 0.2 } }}
          >
            <p className="text-2xl md:text-3xl font-bold" style={{ color: accentColor }}>{s.value}</p>
            <p className="text-xs mt-1" style={{ color: textSecondary }}>{s.label}</p>
            {s.sub && <p className="text-[10px] mt-0.5" style={{ color: "hsl(160 10% 38%)" }}>{s.sub}</p>}
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
        <div className="flex gap-6" style={{ borderBottom: `1px solid ${borderColor}` }}>
          {(["pathways", "regulatory"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-sm pb-2.5 border-b-2 transition-all duration-300 relative"
              style={{
                borderColor: activeTab === tab ? accentColor : "transparent",
                color: activeTab === tab ? textPrimary : textSecondary,
                fontWeight: activeTab === tab ? 500 : 400,
              }}
            >
              {tab === "pathways" ? "Compound Pathways" : "Regulatory Comparison"}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Animated Tab Content */}
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
                className="rounded-lg p-5 cursor-pointer transition-all duration-300"
                style={{
                  border: `1px solid ${expandedCard === ci ? accentColor : borderColor}`,
                  background: expandedCard === ci ? hoverBg : cardBg,
                  boxShadow: expandedCard === ci ? `0 0 30px -10px hsl(160 55% 20% / 0.2)` : "none",
                }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: ci * 0.1 }}
                onClick={() => setExpandedCard(expandedCard === ci ? null : ci)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-base" style={{ color: textPrimary }}>{compound.name}</p>
                    <p className="text-xs mb-4" style={{ color: textSecondary }}>{compound.company}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCard === ci ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs"
                    style={{ color: textSecondary }}
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
                      {compound.timeline.map((item, i) => (
                        <TimelineItem key={i} item={item} isLast={i === compound.timeline.length - 1} index={i} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
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
            {/* Comparison table */}
            <div className="rounded-lg overflow-x-auto" style={{ border: `1px solid ${borderColor}` }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "hsl(160 15% 12%)" }}>
                    <th className="text-left px-4 py-3 font-semibold text-xs" style={{ color: textPrimary }}>Regulatory Dimension</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs" style={{ color: textPrimary }}>Sotorasib</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs" style={{ color: textPrimary }}>Divarasib</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs" style={{ color: textPrimary }}>RMC-6236</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs" style={{ color: textPrimary }}>Adagrasib</th>
                  </tr>
                </thead>
                <tbody className="text-xs" style={{ color: textSecondary }}>
                  {regulatoryData.map((row, i) => (
                    <motion.tr
                      key={i}
                      style={{ borderTop: `1px solid ${borderColor}` }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="hover:brightness-125 transition-all"
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: textPrimary }}>{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td
                          key={j}
                          className="px-4 py-3"
                          style={row[0] === "Approval probability" ? { color: accentColor, fontWeight: 500 } : {}}
                        >
                          {cell}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Regulatory Analysis */}
            <motion.div
              className="rounded-lg p-5"
              style={{ border: `1px solid ${borderColor}`, background: cardBg }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="font-semibold text-sm mb-2" style={{ color: textPrimary }}>Regulatory Analysis</p>
              <p className="text-xs leading-relaxed" style={{ color: textSecondary }}>
                Sotorasib has the most de-risked regulatory pathway — the only compound with a randomized Phase III (CodeBreaK 201) using OS as primary endpoint, plus Orphan Drug exclusivity. Divarasib is the strongest clinical performer (44.4% ORR) but its PDAC cohort (n=80) may be too small for standalone approval. RMC-6236 has the most transformative potential (variant-agnostic) but is furthest from registration. Adagrasib is at highest risk of PDAC abandonment given BMS's declining investment signals.
              </p>
            </motion.div>

            {/* Source tags */}
            <div className="flex flex-wrap gap-2">
              {["AACT", "FDA Drugs@FDA", "FDA Designations", "SEC EDGAR", "AdCom Records"].map((src, i) => (
                <motion.span
                  key={src}
                  className="text-mono text-[10px] px-2.5 py-1 rounded"
                  style={{ background: "hsl(160 15% 14%)", color: textSecondary }}
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
