import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const tableData = [
  { compound: "Sotorasib", sponsor: "Amgen", phase: "Phase III", trial: "CodeBreaK 201", designation: "Breakthrough", orr: "21.1%", nPatients: 428, status: "Active", approvalProb: "44%", estApproval: "Q1 2029" },
  { compound: "Divarasib", sponsor: "Roche / Genentech", phase: "Phase III", trial: "GDC-6036-001", designation: "Breakthrough", orr: "44.4%", nPatients: 80, status: "Enrolling", approvalProb: "38%", estApproval: "Q2 2029" },
  { compound: "RMC-6236", sponsor: "Revolution Medicines", phase: "Phase II", trial: "RMC-6236-001", designation: "Fast Track", orr: "42.0%", nPatients: 210, status: "Enrolling", approvalProb: "25%", estApproval: "2030" },
  { compound: "Adagrasib", sponsor: "BMS / Mirati", phase: "Phase II", trial: "KRYSTAL-10", designation: "Breakthrough", orr: "33.3%", nPatients: 120, status: "At Risk", approvalProb: "12%", estApproval: "Unlikely" },
  { compound: "JDQ443", sponsor: "Novartis", phase: "Phase II", trial: "KontRASt-02", designation: "—", orr: "18.2%", nPatients: 55, status: "Active", approvalProb: "15%", estApproval: "2031+" },
  { compound: "D-1553", sponsor: "InventisBio", phase: "Phase II", trial: "D-1553-002", designation: "—", orr: "25.7%", nPatients: 70, status: "Active", approvalProb: "10%", estApproval: "2031+" },
];

const tableColumns = [
  { key: "compound", label: "Compound", width: "140px" },
  { key: "sponsor", label: "Sponsor", width: "150px" },
  { key: "phase", label: "Phase", width: "90px" },
  { key: "trial", label: "Trial ID", width: "130px" },
  { key: "designation", label: "FDA Designation", width: "120px" },
  { key: "orr", label: "ORR", width: "70px" },
  { key: "nPatients", label: "N", width: "60px" },
  { key: "status", label: "Status", width: "90px" },
  { key: "approvalProb", label: "P(Approval)", width: "95px" },
  { key: "estApproval", label: "Est. Approval", width: "110px" },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  Active: { bg: "hsl(0 0% 100% / 0.08)", text: "hsl(0 0% 75%)" },
  Enrolling: { bg: "hsl(0 0% 100% / 0.08)", text: "hsl(0 0% 85%)" },
  "At Risk": { bg: "hsl(0 50% 50% / 0.12)", text: "hsl(0 60% 65%)" },
};

const designationStyles: Record<string, { bg: string; text: string }> = {
  Breakthrough: { bg: "hsl(0 0% 100% / 0.1)", text: "hsl(0 0% 90%)" },
  "Fast Track": { bg: "hsl(0 0% 100% / 0.06)", text: "hsl(0 0% 65%)" },
  "—": { bg: "transparent", text: "hsl(0 0% 30%)" },
};

const stats = [
  { value: "4", label: "Breakthrough Designations" },
  { value: "44%", label: "Highest Approval Probability", sub: "Sotorasib (from Phase III)" },
  { value: "Q1 2029", label: "Earliest PDAC Approval" },
  { value: "2", label: "Active Registrational Programs", sub: "Phase III randomized" },
];

const compounds = [
  {
    name: "Sotorasib",
    company: "Amgen",
    type: "Covalent KRAS G12C",
    status: "Approved",
    statusColor: "hsl(0 0% 100%)",
    approvalProb: "44%",
    approvalColor: "hsl(142 60% 45%)",
    trial: {
      registrationalTrial: "CodeBreaK 201 (NCT05XXXXXX)",
      design: "Sotorasib + FOLFIRI vs FOLFIRI alone",
      phase: "III (randomized)",
      primaryEndpoint: "Overall Survival",
      enrollment: "490 patients (82% enrolled)",
      sites: "142 sites across 18 countries",
      estPrimaryCompletion: "Q4 2027",
      dataReadout: "H1 2028",
    },
    regulatory: {
      designations: [
        { label: "Breakthrough (NSCLC, May 2020)", color: "hsl(142 60% 45%)" },
        { label: "Fast Track (NSCLC, Nov 2020)", color: "hsl(210 60% 55%)" },
        { label: "Orphan Drug (PDAC, Dec 2024)", color: "hsl(142 60% 45%)" },
      ],
      regulatoryPrecedent: "Only G12C inhibitor with Orphan designation for PDAC — 7-year market exclusivity",
      adcomOutlook: "ODAC review likely. Historical PDAC votes: 67% favorable. Key factor: magnitude of OS benefit vs SOC",
      earliestApproval: "Q1 2029",
      reviewPathway: "Priority Review likely (Breakthrough + Orphan)",
    },
    insight: "Strongest regulatory position — only compound with randomized Phase III, OS endpoint, AND Orphan exclusivity. If OS crosses HR<0.80, approval highly likely.",
  },
  {
    name: "Divarasib",
    company: "Roche",
    type: "Next-gen covalent KRAS G12C",
    status: "Phase III",
    statusColor: "hsl(0 0% 70%)",
    approvalProb: "38%",
    approvalColor: "hsl(142 60% 45%)",
    trial: {
      registrationalTrial: "GDC-6036 Phase III (with cetuximab)",
      design: "Divarasib + cetuximab vs investigator's choice",
      phase: "III",
      primaryEndpoint: "PFS (OS key secondary)",
      enrollment: "80 PDAC patients (PDAC is a cohort within larger solid tumor trial)",
      sites: "89 sites across 14 countries",
      estPrimaryCompletion: "Q2 2027",
      dataReadout: "H2 2027",
    },
    regulatory: {
      designations: [
        { label: "Breakthrough (G12C solid tumors, Mar 2024)", color: "hsl(142 60% 45%)" },
      ],
      regulatoryPrecedent: "Cetuximab combination has regulatory precedent in CRC (ERBITUX approval pathway)",
      adcomOutlook: "Combination design may bypass ODAC if PFS benefit is clear. FDA has accepted PFS in similar settings",
      earliestApproval: "Q2 2029",
      reviewPathway: "Priority Review possible (Breakthrough)",
    },
    insight: "Best-in-class potency (0.84 nM IC50) but small PDAC cohort (n=80) is a regulatory risk. May need confirmatory trial post-approval.",
  },
  {
    name: "RMC-6236",
    company: "Revolution Medicines",
    type: "Pan-RAS(ON) multi-variant",
    status: "Phase II",
    statusColor: "hsl(0 0% 55%)",
    approvalProb: "25%",
    approvalColor: "hsl(36 80% 50%)",
    trial: {
      registrationalTrial: "Phase II expansion (RMC-6236-001)",
      design: "Single-arm, open-label, multi-cohort",
      phase: "II (not yet registrational)",
      primaryEndpoint: "ORR (investigator-assessed)",
      enrollment: "~200 across KRAS variants (G12C, G12D, G12V, G13C)",
      sites: "62 sites, US/EU/Japan",
      estPrimaryCompletion: "Q4 2026",
      dataReadout: "H1 2027",
      phaseIIIStatus: "Registrational trial design ongoing. Monotherapy vs combination undecided.",
    },
    regulatory: {
      designations: [
        { label: "Fast Track (KRAS-mutant PDAC, Sep 2024)", color: "hsl(36 80% 50%)" },
      ],
      regulatoryPrecedent: "No precedent for variant-agnostic KRAS approval. FDA may require variant-specific efficacy data",
      adcomOutlook: "Novel mechanism likely triggers ODAC. Variant-agnostic claim will face scrutiny on subgroup consistency",
      earliestApproval: "H2 2030",
      reviewPathway: "Standard review unless Breakthrough granted",
    },
    insight: "Highest strategic upside — variant-agnostic label would capture 10x larger patient population than G12C-only. But longest regulatory path and no randomized data yet.",
  },
  {
    name: "Adagrasib",
    company: "BMS / Mirati",
    type: "Covalent KRAS G12C",
    status: "At Risk",
    statusColor: "hsl(0 60% 60%)",
    approvalProb: "12%",
    approvalColor: "hsl(0 60% 55%)",
    trial: {
      registrationalTrial: "KRYSTAL-10 (Phase II, 1L PDAC)",
      design: "Adagrasib + gemcitabine/nab-paclitaxel",
      phase: "II (single-arm combination)",
      primaryEndpoint: "ORR",
      enrollment: "120 patients (45% enrolled)",
      sites: "38 sites, US/EU",
      estPrimaryCompletion: "H2 2027",
      dataReadout: "H1 2028",
      phaseIIIStatus: "No Phase III planned for PDAC",
    },
    regulatory: {
      designations: [
        { label: "Breakthrough (NSCLC, Jun 2021)", color: "hsl(142 60% 45%)" },
      ],
      regulatoryPrecedent: "No PDAC-specific designations",
      adcomOutlook: "No randomized comparator. ORR-based endpoint. Single-arm Phase II unlikely sufficient for full approval",
      earliestApproval: "Unlikely for PDAC",
      reviewPathway: "Would require Phase III for full approval",
      earningsSentiment: "BMS sentiment declining 3 consecutive quarters (-1.4 score). Language analysis detects strategic deprioritization signals",
    },
    insight: "Weakest regulatory position. No Phase III, no PDAC designations, declining sponsor commitment. High risk of PDAC program discontinuation.",
  },
];

const TIMELINE_START = 2018;
const TIMELINE_END = 2031;
const TIMELINE_SPAN = TIMELINE_END - TIMELINE_START;
const timelineYears = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031];

function yearToPercent(year: number): number {
  return ((year - TIMELINE_START) / TIMELINE_SPAN) * 100;
}

const raceData = [
  {
    compound: "Sotorasib",
    color: "#059669",
    startYear: 2018,
    endYear: 2029.25,
    probability: 44,
    milestones: [
      { label: "Ph1/II start", year: 2018.5 },
      { label: "Ph1/II data", year: 2020.5 },
      { label: "NSCLC approval", year: 2021.4 },
      { label: "Ph3 start", year: 2023.5 },
      { label: "Data", year: 2028.0 },
      { label: "NDA", year: 2028.5 },
      { label: "Approval", year: 2029.25 },
    ],
  },
  {
    compound: "Divarasib",
    color: "#2563eb",
    startYear: 2020.5,
    endYear: 2029.5,
    probability: 38,
    milestones: [
      { label: "Ph1 start", year: 2020.5 },
      { label: "BT granted", year: 2024.25 },
      { label: "Ph3 start", year: 2024.5 },
      { label: "Interim", year: 2027.5 },
      { label: "NDA", year: 2029.0 },
      { label: "Approval", year: 2029.5 },
    ],
  },
  {
    compound: "RMC-6236",
    color: "#d97706",
    startYear: 2022,
    endYear: 2030.5,
    probability: 25,
    milestones: [
      { label: "Ph1 start", year: 2022 },
      { label: "Ph2 expansion", year: 2023.75 },
      { label: "BT granted", year: 2025.0 },
      { label: "Ph3 start", year: 2027 },
      { label: "Data", year: 2029.5 },
      { label: "Approval", year: 2030.5 },
    ],
  },
  {
    compound: "Adagrasib",
    color: "#dc2626",
    startYear: 2019,
    endYear: 2031,
    probability: 12,
    faded: true,
    milestones: [
      { label: "Ph1 start", year: 2019 },
      { label: "NSCLC approval", year: 2022.9 },
      { label: "Ph2 PDAC start", year: 2023 },
      { label: "No Ph3 planned", year: 2027.5 },
    ],
  },
];

const FieldItem = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-3">
    <p className="text-[10px] font-medium tracking-wide" style={{ color: "hsl(0 0% 45%)" }}>{label}</p>
    <p className="text-[13px]" style={{ color: "hsl(0 0% 88%)" }}>{value}</p>
  </div>
);

const DemoOutput = ({ darkMode }: { darkMode?: boolean }) => {
  const [activeTab, setActiveTab] = useState<"pathways" | "regulatory" | "risk">("pathways");
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const [selectedRows, setSelectedRows] = useState<number[]>([0, 1]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const toggleRow = (i: number) => {
    setSelectedRows((prev) =>
      prev.includes(i) ? prev.filter((r) => r !== i) : [...prev, i]
    );
  };

  return (
    <div ref={containerRef} className="rounded-lg overflow-hidden" style={{ background: darkMode ? "hsl(0 0% 7%)" : undefined }}>
      {/* Window chrome */}
      <motion.div
        className="px-4 sm:px-5 py-3 flex items-center justify-between"
        style={{ background: "hsl(0 0% 9%)", borderBottom: "1px solid hsl(0 0% 13%)" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <span className="text-mono text-[11px] hidden sm:inline" style={{ color: "hsl(0 0% 40%)" }}>
            alexandria / workspace / kras-pdac-us
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-mono text-[9px] font-semibold px-2 py-0.5 rounded" style={{ background: "hsl(142 70% 35% / 0.2)", color: "hsl(142 70% 55%)" }}>LIVE</span>
          <span className="text-mono text-[10px] hidden sm:inline" style={{ color: "hsl(0 0% 35%)" }}>Updated 2h ago</span>
        </div>
      </motion.div>

      {/* Search bar */}
      <motion.div
        className="px-4 sm:px-6 pt-4 pb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="flex items-center gap-3 rounded-lg px-4 py-3" style={{ background: "hsl(0 0% 5%)", border: "1px solid hsl(0 0% 14%)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 0%, 35%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="text-xs sm:text-sm" style={{ color: "hsl(0 0% 70%)" }}>
            KRAS G12C inhibitors in pancreatic cancer — US regulatory pathway + competitive landscape
          </span>
        </div>
      </motion.div>

      {/* Filter chips */}
      <motion.div
        className="px-4 sm:px-6 pb-3 flex items-start gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <svg className="shrink-0" style={{ marginTop: "6px" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 0%, 40%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
        </svg>
        <div className="flex flex-wrap gap-2">
        {[
          { label: "Region:", value: "United States" },
          { label: "Target:", value: "KRAS G12C" },
          { label: "Indication:", value: "Pancreatic Cancer (PDAC)" },
          { label: "Phase:", value: "Phase II+" },
        ].map((chip) => (
          <span
            key={chip.value}
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md"
            style={{ background: "hsl(0 0% 12%)", color: "hsl(0 0% 65%)", border: "1px solid hsl(0 0% 18%)" }}
          >
            <span style={{ color: "hsl(0 0% 45%)" }}>{chip.label}</span>
            {chip.value}
            <span className="ml-0.5 cursor-pointer" style={{ color: "hsl(0 0% 35%)" }}>&times;</span>
          </span>
        ))}
        </div>
      </motion.div>

      {/* Executive Summary */}
      <motion.div
        className="px-4 sm:px-6 py-3"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.38 }}
      >
        <div
          className="rounded-xl p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 9%) 0%, hsl(0 0% 6%) 100%)",
            border: "1px solid hsl(0 0% 14%)",
          }}
        >
          <p className="font-semibold text-sm mb-2 tracking-wide" style={{ color: "hsl(0 0% 90%)" }}>Executive Summary</p>
          <p className="text-xs leading-[1.7]" style={{ color: "hsl(0 0% 45%)" }}>
            Four KRAS G12C inhibitors are actively pursuing PDAC indications with divergent regulatory strategies. Sotorasib (Amgen) holds the strongest position — the only compound with a randomized Phase III (CodeBreaK 201, n=490, OS primary endpoint), Orphan Drug exclusivity, and three FDA designations. Divarasib (Roche) has best-in-class potency but a small PDAC cohort (n=80). RMC-6236 (Revolution Medicines) offers variant-agnostic potential across all KRAS mutations but lacks randomized data. Adagrasib (BMS) is at highest risk of PDAC abandonment — no Phase III planned and declining sponsor commitment. Earliest projected PDAC approval is Q1 2029 (sotorasib), with approval probabilities ranging from 12% (adagrasib) to 44% (sotorasib).
          </p>
        </div>
      </motion.div>

      {/* Tabs row with metadata + export */}
      <motion.div
        className="px-4 sm:px-6 pb-3"
        style={{ borderBottom: "1px solid hsl(0 0% 10%)" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-1 p-1 rounded-lg" style={{ background: "hsl(0 0% 5%)", border: "1px solid hsl(0 0% 12%)" }}>
            {([
              { key: "pathways" as const, label: "Competitive Landscape", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> },
              { key: "regulatory" as const, label: "Regulatory Pathway", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> },
              { key: "risk" as const, label: "Risk Matrix", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex items-center gap-1.5 text-[11px] sm:text-[12px] py-2 px-3 sm:px-4 rounded-md transition-all duration-300"
                style={{
                  background: activeTab === tab.key ? "hsl(0 0% 14%)" : "transparent",
                  color: activeTab === tab.key ? "hsl(0 0% 93%)" : "hsl(0 0% 42%)",
                  fontWeight: activeTab === tab.key ? 500 : 400,
                  boxShadow: activeTab === tab.key ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[13px] font-medium" style={{ color: "hsl(0 0% 60%)" }}>6 compounds</span>
            <span className="text-[10px]" style={{ color: "hsl(0 0% 30%)" }}>·</span>
            <span className="text-[11px]" style={{ color: "hsl(0 0% 35%)" }}>28 trials · 8 FDA designations</span>
            <button
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] transition-colors ml-2"
              style={{ background: "hsl(0 0% 10%)", color: "hsl(0 0% 55%)", border: "1px solid hsl(0 0% 14%)" }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export
            </button>
          </div>
        </div>
      </motion.div>



      <AnimatePresence mode="wait">
        {activeTab === "pathways" && (
          <motion.div
            key="pathways"
            className="overflow-auto"
            style={{ maxHeight: "380px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <table className="w-full text-[12px]" style={{ minWidth: "900px" }}>
              <thead>
                <tr style={{ background: "hsl(0 0% 7%)", borderBottom: "1px solid hsl(0 0% 12%)" }}>
                  <th className="px-4 py-3 text-left w-10">
                    <div className="w-3.5 h-3.5 rounded border flex items-center justify-center" style={{ borderColor: "hsl(0 0% 25%)" }} />
                  </th>
                  {tableColumns.map((col) => (
                    <th key={col.key} className="px-3 py-3 text-left font-medium whitespace-nowrap" style={{ color: "hsl(0 0% 50%)", width: col.width }}>
                      <span className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        {col.label}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => {
                  const isSelected = selectedRows.includes(i);
                  const sStyle = statusStyles[row.status] || statusStyles.Active;
                  const dStyle = designationStyles[row.designation] || designationStyles["—"];

                  return (
                    <tr
                      key={i}
                      className="cursor-pointer transition-colors duration-150"
                      style={{
                        borderBottom: "1px solid hsl(0 0% 10%)",
                        background: isSelected ? "hsl(0 0% 100% / 0.03)" : "transparent",
                      }}
                      onClick={() => toggleRow(i)}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(0 0% 100% / 0.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = isSelected ? "hsl(0 0% 100% / 0.03)" : "transparent")}
                    >
                      <td className="px-4 py-3">
                        <div
                          className="w-3.5 h-3.5 rounded border flex items-center justify-center transition-all"
                          style={{
                            borderColor: isSelected ? "hsl(0 0% 60%)" : "hsl(0 0% 20%)",
                            background: isSelected ? "hsl(0 0% 100% / 0.15)" : "transparent",
                          }}
                        >
                          {isSelected && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 0%, 90%)" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <span className="font-semibold flex items-center gap-1.5" style={{ color: "hsl(0 0% 93%)" }}>
                          {row.compound}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 0%, 30%)" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        </span>
                      </td>
                      <td className="px-3 py-3" style={{ color: "hsl(0 0% 55%)" }}>{row.sponsor}</td>
                      <td className="px-3 py-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium" style={{ background: "hsl(0 0% 100% / 0.06)", color: "hsl(0 0% 75%)" }}>{row.phase}</span>
                      </td>
                      <td className="px-3 py-3 font-mono" style={{ color: "hsl(0 0% 45%)" }}>{row.trial}</td>
                      <td className="px-3 py-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium" style={{ background: dStyle.bg, color: dStyle.text }}>{row.designation}</span>
                      </td>
                      <td className="px-3 py-3 font-mono font-semibold" style={{ color: "hsl(0 0% 90%)" }}>{row.orr}</td>
                      <td className="px-3 py-3 font-mono" style={{ color: "hsl(0 0% 50%)" }}>{row.nPatients}</td>
                      <td className="px-3 py-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium" style={{ background: sStyle.bg, color: sStyle.text }}>{row.status}</span>
                      </td>
                      <td className="px-3 py-3 font-mono font-bold" style={{ color: Number(row.approvalProb.replace('%','')) > 30 ? "hsl(0 0% 100%)" : "hsl(0 0% 50%)" }}>
                        {row.approvalProb}
                      </td>
                      <td className="px-3 py-3 font-mono" style={{ color: "hsl(0 0% 55%)" }}>{row.estApproval}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        )}

        {activeTab === "regulatory" && (
          <motion.div
            key="regulatory"
            className="px-4 sm:px-6 py-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Timeline Chart */}
            <div className="rounded-xl p-4 sm:p-5 md:p-6 relative overflow-x-auto" style={{ background: "hsl(0 0% 6%)", border: "1px solid hsl(0 0% 13%)" }}>
              <p className="font-display text-lg md:text-xl tracking-tight mb-6" style={{ color: "hsl(0 0% 90%)" }}>
                Race to PDAC Approval — Projected Timeline
              </p>

              <div className="min-w-[600px]">
              {/* Year axis */}
              <div className="relative h-6 mb-2 ml-[100px] md:ml-[120px] mr-[50px] md:mr-[60px]">
                {timelineYears.map((y) => (
                  <div
                    key={y}
                    className="absolute text-[9px] md:text-[11px] font-medium"
                    style={{ left: `${yearToPercent(y)}%`, transform: "translateX(-50%)", color: "hsl(0 0% 45%)" }}
                  >
                    {y}
                  </div>
                ))}
              </div>

              {/* Compound rows */}
              <div className="space-y-3">
                {raceData.map((entry, ci) => (
                  <motion.div
                    key={ci}
                    className="flex items-center gap-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: ci * 0.1 }}
                  >
                    {/* Compound name */}
                    <div className="w-[100px] md:w-[120px] shrink-0 pr-3 text-right">
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "hsl(0 0% 85%)" }}>{entry.compound}</p>
                    </div>

                    {/* Bar area */}
                    <div className="relative flex-1 h-14 mr-[50px] md:mr-[60px]">
                      {/* Grid lines */}
                      {timelineYears.map((y) => (
                        <div
                          key={y}
                          className="absolute top-0 bottom-0 w-px"
                          style={{ left: `${yearToPercent(y)}%`, background: "hsl(0 0% 12%)" }}
                        />
                      ))}

                      {/* Full bar (lighter) */}
                      <div
                        className="absolute top-3 h-7 rounded-md"
                        style={{
                          left: `${yearToPercent(entry.startYear)}%`,
                          width: `${yearToPercent(entry.endYear) - yearToPercent(entry.startYear)}%`,
                          backgroundColor: entry.color,
                          opacity: entry.faded ? 0.15 : 0.12,
                        }}
                      />
                      {/* Current progress bar (darker) */}
                      <div
                        className="absolute top-3 h-7 rounded-md"
                        style={{
                          left: `${yearToPercent(entry.startYear)}%`,
                          width: `${yearToPercent(Math.min(2026.25, entry.endYear)) - yearToPercent(entry.startYear)}%`,
                          backgroundColor: entry.color,
                          opacity: entry.faded ? 0.25 : 0.35,
                        }}
                      />

                      {/* Milestones */}
                      {entry.milestones.map((ms, i) => {
                        const above = i % 2 === 0;
                        return (
                          <div
                            key={i}
                            className="absolute flex flex-col items-center"
                            style={{
                              left: `${yearToPercent(ms.year)}%`,
                              top: 0,
                              transform: "translateX(-50%)",
                            }}
                          >
                            {above && (
                              <span
                                className="text-[7px] md:text-[9px] font-medium whitespace-nowrap"
                                style={{
                                  color: entry.color,
                                  opacity: entry.faded && i > 1 ? 0.4 : 0.85,
                                }}
                              >
                                {ms.label}
                              </span>
                            )}
                            <div
                              className="w-2 h-2 rounded-full border-[1.5px]"
                              style={{
                                borderColor: entry.color,
                                backgroundColor: entry.color,
                                opacity: entry.faded && i > 1 ? 0.35 : 0.9,
                                marginTop: above ? "1px" : "14px",
                              }}
                            />
                            {!above && (
                              <span
                                className="text-[7px] md:text-[9px] font-medium whitespace-nowrap"
                                style={{
                                  color: entry.color,
                                  opacity: entry.faded && i > 1 ? 0.4 : 0.85,
                                  marginTop: "1px",
                                }}
                              >
                                {ms.label}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Probability */}
                    <div className="w-[50px] md:w-[60px] shrink-0 text-right">
                      <p className="text-sm md:text-base font-bold font-mono" style={{ color: entry.color, opacity: entry.faded ? 0.5 : 1 }}>{entry.probability}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              </div>
            </div>

            {/* First-Mover Advantage Analysis */}
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
              <p className="font-semibold text-sm mb-2 tracking-wide font-display" style={{ color: "hsl(0 0% 90%)" }}>First-Mover Advantage Analysis</p>
              <p className="text-xs leading-[1.7]" style={{ color: "hsl(0 0% 45%)" }}>
                Sotorasib is 6-9 months ahead of divarasib, with Orphan Drug exclusivity providing 7-year market protection. If sotorasib achieves first PDAC approval with Orphan exclusivity, competitors face significant market access barriers. However, divarasib's superior ORR (44.4% vs 21.1%) could support a differentiated label if Phase III data is compelling.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {["AACT", "FDA Drugs@FDA", "SEC EDGAR", "AdCom Records", "Research Papers"].map((src, i) => (
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

        {activeTab === "risk" && (
          <motion.div
            key="risk"
            className="px-4 sm:px-6 py-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Risk Matrix Table */}
            <div className="rounded-xl overflow-hidden p-[1px]" style={{ background: "linear-gradient(135deg, hsl(0 0% 18%) 0%, hsl(0 0% 10%) 50%, hsl(0 0% 18%) 100%)" }}>
              <div className="rounded-[11px] overflow-x-auto" style={{ background: "hsl(0 0% 6%)" }}>
                <table className="w-full text-sm min-w-[700px]">
                  <thead>
                    <tr style={{ background: "hsl(0 0% 8%)", borderBottom: "1px solid hsl(0 0% 14%)" }}>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Risk Dimension</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Sotorasib</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Divarasib</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>RMC-6236</th>
                      <th className="text-left px-4 py-3.5 font-semibold text-xs" style={{ color: "hsl(0 0% 90%)" }}>Adagrasib</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {[
                      { dim: "Trial design risk", vals: ["Low (randomized Ph3)", "Medium (small PDAC n=80)", "High (single-arm Ph2)", "High (single-arm, no Ph3)"] },
                      { dim: "Regulatory pathway risk", vals: ["Low (BT + Orphan + FT)", "Medium (BT only)", "Medium (BT, novel mechanism)", "High (no PDAC designations)"] },
                      { dim: "Endpoint risk", vals: ["Low (OS primary)", "Medium (PFS primary, OS secondary)", "High (ORR, investigator-assessed)", "High (ORR only)"] },
                      { dim: "Sponsor commitment", vals: ["High (lead PDAC program)", "High (Roche priority)", "High (lead pipeline asset)", "Low (BMS deprioritizing, -1.4 sentiment)"] },
                      { dim: "Competitive risk", vals: ["Medium (if divarasib ORR is superior)", "Medium (smaller PDAC cohort)", "Low (variant-agnostic differentiator)", "High (behind on all fronts)"] },
                      { dim: "Commercial risk", vals: ["Low (Orphan exclusivity)", "Medium (no exclusivity)", "Low (10\u00D7 larger population if variant-agnostic)", "High (likely abandoned)"] },
                      { dim: "Overall risk level", vals: ["Low-Medium", "Medium", "Medium-High", "High"] },
                    ].map((row, i) => (
                      <motion.tr
                        key={i}
                        style={{ borderTop: "1px solid hsl(0 0% 11%)" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className="transition-colors duration-200"
                      >
                        <td className="px-4 py-3 font-medium" style={{ color: "hsl(0 0% 80%)" }}>{row.dim}</td>
                        {row.vals.map((v, j) => {
                          const lower = v.toLowerCase();
                          const bg = lower.startsWith("low") && !lower.includes("medium")
                            ? "hsl(142 50% 25% / 0.3)"
                            : lower === "medium" || lower.includes("medium")
                            ? "hsl(36 50% 30% / 0.3)"
                            : "hsl(0 50% 30% / 0.3)";
                          const color = lower.startsWith("low") && !lower.includes("medium")
                            ? "hsl(142 60% 55%)"
                            : lower === "medium" || lower.includes("medium")
                            ? "hsl(36 70% 55%)"
                            : "hsl(0 60% 60%)";
                          // "High" for sponsor commitment means good (invert)
                          const isSponsor = row.dim === "Sponsor commitment";
                          const finalBg = isSponsor
                            ? (lower === "high" ? "hsl(142 50% 25% / 0.3)" : "hsl(0 50% 30% / 0.3)")
                            : bg;
                          const finalColor = isSponsor
                            ? (lower === "high" ? "hsl(142 60% 55%)" : "hsl(0 60% 60%)")
                            : color;
                          return (
                            <td key={j} className="px-4 py-3">
                              <span
                                className="text-[10px] font-semibold px-2 py-0.5 rounded"
                                style={{ background: finalBg, color: finalColor }}
                              >
                                {v}
                              </span>
                            </td>
                          );
                        })}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Deal Implications */}
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
              <p className="font-semibold text-sm mb-3 tracking-wide" style={{ color: "hsl(0 0% 90%)" }}>Deal Implications</p>
              <p className="text-xs mb-3" style={{ color: "hsl(0 0% 45%)" }}>
                For a BD&L team evaluating KRAS G12C assets for PDAC:
              </p>
              <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5" style={{ color: "hsl(0 0% 45%)" }}>
                <li>
                  <span className="font-semibold" style={{ color: "hsl(0 0% 85%)" }}>Sotorasib:</span> Most de-risked. Licensing premium justified by Orphan exclusivity and randomized data. Amgen unlikely to out-license.
                </li>
                <li>
                  <span className="font-semibold" style={{ color: "hsl(0 0% 85%)" }}>Divarasib:</span> Best-in-class potency but regulatory uncertainty around PDAC cohort size. Roche may seek co-development partner for PDAC expansion.
                </li>
                <li>
                  <span className="font-semibold" style={{ color: "hsl(0 0% 85%)" }}>RMC-6236:</span> Highest long-term value if variant-agnostic label is achieved. Revolution Medicines is a realistic acquisition target. Due diligence should focus on Phase II subgroup consistency.
                </li>
                <li>
                  <span className="font-semibold" style={{ color: "hsl(0 0% 85%)" }}>Adagrasib:</span> Not recommended for PDAC-focused deal. BMS may divest or out-license the PDAC rights as part of portfolio rationalization.
                </li>
              </ul>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {["AACT", "FDA Drugs@FDA", "SEC EDGAR", "AdCom Records", "Research Papers"].map((src, i) => (
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

      {/* Footer — sources & pagination */}
      <motion.div
        className="px-4 sm:px-5 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid hsl(0 0% 10%)" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <div className="flex items-center gap-2 flex-wrap">
          {["AACT", "FDA Drugs@FDA", "SEC EDGAR", "ClinicalTrials.gov"].map((src) => (
            <span
              key={src}
              className="text-mono text-[10px] px-2 py-1 rounded"
              style={{ background: "hsl(0 0% 8%)", color: "hsl(0 0% 35%)", border: "1px solid hsl(0 0% 12%)" }}
            >
              {src}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[11px]" style={{ color: "hsl(0 0% 35%)" }}>
          <span>1–6 of 6</span>
          <div className="flex gap-1">
            <button className="px-2 py-0.5 rounded" style={{ background: "hsl(0 0% 10%)", border: "1px solid hsl(0 0% 14%)" }}>&lsaquo;</button>
            <button className="px-2 py-0.5 rounded" style={{ background: "hsl(0 0% 10%)", border: "1px solid hsl(0 0% 14%)" }}>&rsaquo;</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoOutput;
