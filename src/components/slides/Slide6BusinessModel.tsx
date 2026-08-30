import React, { useState } from "react";
import { SlideData } from "../../types";
import {
  Building,
  Landmark,
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  PieChart,
  Lock,
  DollarSign
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide6BusinessModel: React.FC<SlideProps> = ({ slide }) => {
  const [activeModel, setActiveModel] = useState<"developer" | "bank">("bank");

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          Business Model & The Fintech Wedge
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Slide Title */}
      <div className="space-y-1 z-10">
        <span className="text-emerald-400 text-xs font-mono font-medium tracking-widest uppercase">
          Monetization & Institutional Moat
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white">
          B2B SaaS Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Project Finance Underwriting</span>.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 font-light">
          {slide.subheadline}
        </p>
      </div>

      {/* Two Distinct Columns: Developers (SaaS) vs Commercial Banks (API/Underwriting) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-auto z-10 items-stretch">
        {/* Column 1: Real Estate Developers (SaaS) */}
        <div
          onClick={() => setActiveModel("developer")}
          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
            activeModel === "developer"
              ? "bg-slate-900 border-amber-400 shadow-xl shadow-amber-950/20"
              : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-amber-400" /> REAL ESTATE DEVELOPERS
              </span>
              <span className="text-xs font-mono text-slate-400">Subscription SaaS</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Rapid Feasibility & Scenario Planning
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Self-serve subscription for developers, quantity surveyors, and architectural studios to model 50+ site scenarios per month.
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Starter Tier (5 Sites/mo)</span>
                <span className="font-mono text-amber-400 font-bold">$199 / month</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Studio Pro (Unlimited Feasibility)</span>
                <span className="font-mono text-amber-400 font-bold">$499 / month</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Enterprise / Gov Agency</span>
                <span className="font-mono text-amber-400 font-bold">$1,499 / month</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>High ACV & Rapid Cashflow</span>
            <span className="text-amber-400 font-semibold">Immediate Top-Line</span>
          </div>
        </div>

        {/* Column 2: Commercial Banks (API Underwriting - The Killer Wedge) */}
        <div
          onClick={() => setActiveModel("bank")}
          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
            activeModel === "bank"
              ? "bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 border-emerald-400 shadow-xl shadow-emerald-950/30"
              : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
          }`}
        >
          {/* Top highlight badge */}
          <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-bl-lg font-mono">
            ★ THE KILLER WEDGE
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-emerald-400" /> PROJECT FINANCE BANKS
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">API / Risk Underwriting</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              The "Bankability Risk Score" API
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Banks lose millions on stalled construction loans. We provide a real-time risk score (0-100) calibrating title security, zoning, cost realism, and ESG readiness.
            </p>

            {/* Interactive Scorecard Preview */}
            <div className="p-3 rounded-xl bg-slate-950/90 border border-emerald-500/30 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">Bankability Score:</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-extrabold text-sm border border-emerald-500/30">
                  88 / 100 (Prime)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400 pt-1">
                <div>• Zoning Law RAG: <span className="text-emerald-400">94%</span></div>
                <div>• Title Verification: <span className="text-emerald-400">86%</span></div>
                <div>• Cost Realism Index: <span className="text-emerald-400">91%</span></div>
                <div>• ESG / Solar Matrix: <span className="text-emerald-400">A-</span></div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Model: Origination Fee Share (0.5% - 1.5%)</span>
            <span className="text-emerald-400 font-bold">Massive Institutional Moat</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-emerald-400 font-medium">
          The ultimate moat: Becoming the mandatory underwriting engine for African construction finance.
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
