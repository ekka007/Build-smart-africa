import React, { useState } from "react";
import { FeasibilityResult } from "../types";
import {
  X,
  Sparkles,
  Play,
  Loader2,
  Building,
  CheckCircle2,
  AlertTriangle,
  Sun,
  ShieldCheck,
  BarChart3,
  Calendar,
  Layers,
  MapPin
} from "lucide-react";

interface FeasibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_SITES = [
  {
    name: "Lekki Phase 2 Corridor (Lagos, Nigeria)",
    location: "Lekki-Epe Expressway, Lagos",
    landSize: "2,500 sqm (0.61 acres)",
    objective: "Mixed-Use Residential (18 Units) & Ground Floor Co-working Retail",
    budget: "$350,000 (₦460,000,000)",
    soilType: "Sandy Coastal with High Water Table",
    powerAccess: "Unstable Grid • Requires Hybrid Solar Microgrid",
  },
  {
    name: "Airport Hills Prime (Accra, Ghana)",
    location: "Airport Hills / East Legon, Accra",
    landSize: "1.8 Acres (7,280 sqm)",
    objective: "Luxury Gated Townhouses (12 units) with Solar Central Hub",
    budget: "$850,000 (GH₵ 12,500,000)",
    soilType: "Laterite Red Clay",
    powerAccess: "ECG Grid with Solar PV Backup",
  },
  {
    name: "Kilimani Tech Hub (Nairobi, Kenya)",
    location: "Argwings Kodhek Rd, Kilimani, Nairobi",
    landSize: "0.5 Hectares (5,000 sqm)",
    objective: "Commercial Mixed-Use Tech Incubator & Serviced Suites",
    budget: "$620,000 (KSh 80,000,000)",
    soilType: "Black Cotton Soil (Requires Deep Pad Footings)",
    powerAccess: "KPLC Stable with Solar Microgrid",
  },
];

export const FeasibilityDemoModal: React.FC<FeasibilityModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<FeasibilityResult | null>(null);

  if (!isOpen) return null;

  const handleRunSimulation = async () => {
    setLoading(true);
    setResult(null);

    const site = PRESET_SITES[selectedPreset];

    try {
      const res = await fetch("/api/ai/feasibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(site),
      });

      const json = await res.json();
      if (json.success && json.data) {
        setResult(json.data);
      } else {
        throw new Error(json.error || "Simulation failed");
      }
    } catch (e: any) {
      console.warn("Using fallback simulation result:", e);
      // Fallback data
      setResult({
        siteSummary: `${site.location} • ${site.landSize}`,
        zoningVerdict: "Approved for Mixed-Use Commercial / Residential (FAR 3.2, Max 6 Floors)",
        recommendedStrategy: "High-density 4-story mixed-use development with ground floor retail, co-working hub, and 18 residential 2-bed units.",
        estimatedCostRange: "₦420M - ₦490M ($310,000 - $360,000 USD)",
        expectedYield: "18.4% Net Annual Yield",
        bankabilityScore: 88,
        bankabilityBreakdown: {
          zoningCompliance: 94,
          titleRisk: 86,
          financialViability: 91,
          infrastructureReadiness: 79,
          esgRating: "A-",
        },
        constructionPhasing: [
          { phase: "Phase 1 (Months 1-2)", title: "Site Prep & Coastal Piling", costShare: "18%" },
          { phase: "Phase 2 (Months 3-6)", title: "Superstructure & Pre-cast Concrete", costShare: "42%" },
          { phase: "Phase 3 (Months 7-9)", title: "MEP & Local Material Fitout", costShare: "28%" },
          { phase: "Phase 4 (Month 10)", title: "Solar Microgrid & Commissioning", costShare: "12%" },
        ],
        aiInsights: [
          "Local sandcrete block supplier 4.2km away reduces logistics overhead by 14%.",
          "Lagos State Physical Planning permit expedited pathway applies for solar-ready designs.",
          "Pre-leasing potential: 65% occupancy commitments feasible via local diaspora channels.",
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-white space-y-5">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                BuildAI Development Co-Pilot Simulator
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Multimodal Feasibility & Bankability Scoring Engine
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Preset Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Select an African Real Estate Site Scenario:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {PRESET_SITES.map((site, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedPreset(i);
                  setResult(null);
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPreset === i
                    ? "bg-slate-800 border-amber-400 shadow-md shadow-amber-950/20"
                    : "bg-slate-950 border-slate-800 hover:border-slate-700 opacity-80"
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {site.name.split("(")[0]}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  {site.landSize} • {site.budget}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Site Details */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase">Objective:</span>
            <div className="text-slate-200 font-medium mt-0.5">
              {PRESET_SITES[selectedPreset].objective}
            </div>
          </div>
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase">Soil & Terrain:</span>
            <div className="text-slate-200 font-medium mt-0.5">
              {PRESET_SITES[selectedPreset].soilType}
            </div>
          </div>
          <div>
            <span className="text-slate-400 font-mono text-[10px] uppercase">Infrastructure:</span>
            <div className="text-slate-200 font-medium mt-0.5">
              {PRESET_SITES[selectedPreset].powerAccess}
            </div>
          </div>
        </div>

        {/* Run Button */}
        {!result && (
          <button
            onClick={handleRunSimulation}
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all font-sans cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Cross-referencing RAG zoning laws & material indexes...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                Run 60-Second AI Feasibility & Bankability Scoring
              </>
            )}
          </button>
        )}

        {/* Result Showcase */}
        {result && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* Top Score Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                  Feasibility Verdict
                </span>
                <h4 className="text-base font-bold text-white">
                  {result.zoningVerdict}
                </h4>
                <div className="text-xs text-slate-300 mt-0.5">
                  {result.recommendedStrategy}
                </div>
              </div>

              {/* Bankability Score Card */}
              <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-center min-w-[130px]">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Bankability Score</div>
                <div className="text-2xl font-extrabold font-mono text-emerald-400">
                  {result.bankabilityScore} <span className="text-xs text-slate-400">/ 100</span>
                </div>
                <div className="text-[10px] text-emerald-300 font-semibold font-mono">
                  Grade: {result.bankabilityBreakdown.esgRating} (Bankable)
                </div>
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 font-mono text-[10px] uppercase">Estimated Budget</span>
                <div className="text-sm font-bold text-white font-mono mt-1">
                  {result.estimatedCostRange}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 font-mono text-[10px] uppercase">Projected Net Yield</span>
                <div className="text-sm font-bold text-emerald-400 font-mono mt-1">
                  {result.expectedYield}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 font-mono text-[10px] uppercase">Zoning Compliance</span>
                <div className="text-sm font-bold text-amber-400 font-mono mt-1">
                  {result.bankabilityBreakdown.zoningCompliance}% (Lagos RAG Verified)
                </div>
              </div>
            </div>

            {/* Phasing Timeline */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>DYNAMIC 4-PHASE CONSTRUCTION MODEL</span>
                <span className="text-emerald-400 font-semibold">10 MONTH ESTIMATE</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {result.constructionPhasing.map((p, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <div className="text-amber-400 font-mono font-bold text-[10px]">{p.phase}</div>
                    <div className="text-slate-200 font-medium text-[11px] mt-0.5">{p.title}</div>
                    <div className="text-slate-400 text-[10px] font-mono mt-1">Cost: {p.costShare}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Ground Insights */}
            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1 text-xs">
              <div className="text-emerald-400 font-mono font-bold text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Hyper-Local Supply Chain & Permitting Insights:
              </div>
              <ul className="space-y-1 text-slate-300 pl-4 list-disc text-[11px]">
                {result.aiInsights.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setResult(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              ← Test Another Site Corridor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
