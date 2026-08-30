import React from "react";
import { SlideData } from "../../types";
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Coins, 
  Radio, 
  Boxes, 
  Briefcase, 
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const SlideLiveDemoDecision: React.FC<SlideProps> = ({ slide }) => {
  const keyFactors = [
    { label: "Planning feasibility", rating: "High", badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
    { label: "Site / infrastructure", rating: "Medium", badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
    { label: "Construction economics", rating: "Medium", badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
    { label: "Market assumptions", rating: "Medium", badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
    { label: "Data confidence", rating: "Medium", badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
  ];

  const evidenceFlow = [
    {
      num: 1,
      title: "LOCAL RULES",
      sub: "Planning / zoning / codes",
      icon: FileText,
      detail: "State setbacks, allowable FAR, environmental easements",
    },
    {
      num: 2,
      title: "COST EVIDENCE",
      sub: "Materials / labour / assumptions",
      icon: Coins,
      detail: "Lagos cement indices, rebar tariffs, regional craft rates",
    },
    {
      num: 3,
      title: "SITE SIGNALS",
      sub: "Access / terrain / utilities",
      icon: Radio,
      detail: "Drainage slope, transformer distance, road width clearance",
    },
    {
      num: 4,
      title: "SCENARIOS",
      sub: "Concept / phasing / energy",
      icon: Boxes,
      detail: "Cashflow sequencing, solar offset, high-yield massing",
    },
    {
      num: 5,
      title: "REVIEW PACK",
      sub: "Assumptions / risks / confidence",
      icon: Briefcase,
      detail: "Standardized bank pre-underwriting credit committee brief",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden select-none">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE DEMO • DECISION DASHBOARD
          </span>
          <span className="text-xs text-slate-400 font-mono">
            SLIDE {slide.slideNumber} OF 14
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
          BuildAI does not make the investment decision—it makes the evidence easier to evaluate.
        </h2>
      </div>

      {/* Center 2-Column Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 my-2 flex-1 items-stretch">
        {/* Left: BANKABILITY READINESS Score Box */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                BANKABILITY READINESS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-bold">
                SIGNAL READY
              </span>
            </div>

            {/* Circular Gauge Display */}
            <div className="flex items-center gap-4 bg-slate-950/70 border border-slate-800 rounded-xl p-3 mb-3">
              <div className="relative w-16 h-16 rounded-full bg-slate-900 border-4 border-emerald-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                <span className="text-2xl font-black font-mono text-emerald-400">78</span>
              </div>
              <div>
                <div className="text-xs font-bold text-white font-mono">
                  SCORE 78 / 100
                </div>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  <span className="text-amber-300 font-semibold">ILLUSTRATIVE:</span> A structured pre-underwriting signal—not a loan approval.
                </p>
              </div>
            </div>

            {/* KEY FACTORS Breakdown List */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                KEY FACTORS:
              </div>
              {keyFactors.map((factor) => (
                <div
                  key={factor.label}
                  className="flex items-center justify-between py-1 px-2 rounded bg-slate-950/40 border border-slate-800/60 text-xs"
                >
                  <span className="text-slate-300 text-[11px] font-mono">{factor.label}</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${factor.badgeColor}`}>
                    {factor.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono flex items-center justify-between">
            <span>Audit Trail: Immutable Hash</span>
            <span className="text-emerald-400 font-semibold">Verified Source</span>
          </div>
        </div>

        {/* Right: EVIDENCE -> DECISION (5-Stage Framework) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              EVIDENCE → DECISION
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              5-Stage Structured Pipeline
            </span>
          </div>

          <div className="space-y-2 my-2">
            {evidenceFlow.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex items-center gap-3 p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                >
                  {/* Number Badge */}
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                    {step.num}
                  </div>

                  {/* Title & Sub */}
                  <div className="min-w-[130px] shrink-0">
                    <div className="text-xs font-bold text-white font-mono flex items-center gap-1">
                      <Icon className="w-3 h-3 text-emerald-400" />
                      {step.title}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {step.sub}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-3 h-3 text-slate-600 shrink-0 hidden sm:block" />

                  {/* Detail */}
                  <div className="text-[11px] text-slate-300 font-mono truncate flex-1">
                    {step.detail}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-[10px] font-mono text-slate-400 text-center">
            Standardizes credit evaluation for African commercial banks and infrastructure funds.
          </div>
        </div>
      </div>

      {/* Bottom Product Wedge Banner */}
      <div className="relative z-10 bg-gradient-to-r from-emerald-950/70 via-slate-900 to-emerald-950/70 border border-emerald-500/30 rounded-lg py-2 px-4 text-center shadow">
        <span className="text-xs font-mono font-bold tracking-wider text-emerald-300">
          THE PRODUCT WEDGE: faster feasibility today → standardized evidence for underwriting tomorrow
        </span>
      </div>
    </div>
  );
};
