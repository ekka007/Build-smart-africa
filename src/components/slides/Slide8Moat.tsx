import React from "react";
import { SlideData } from "../../types";
import {
  ShieldCheck,
  Database,
  Lock,
  XCircle,
  CheckCircle2,
  Globe,
  Sparkles,
  Layers
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide8Moat: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Defensibility & Competitive Moat
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Title */}
      <div className="space-y-1 z-10">
        <span className="text-emerald-400 text-xs font-mono font-medium tracking-widest uppercase">
          Structural Advantage
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white">
          Western Tech <span className="text-red-400 line-through decoration-red-500/60 mr-2">Cannot</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Easily Copy This</span>.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 font-light">
          {slide.subheadline}
        </p>
      </div>

      {/* Main Grid: 2 Core Moat Pillars + Comparative Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch">
        {/* Left Column: The 2 Core Pillars */}
        <div className="lg:col-span-6 space-y-3">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  1. Proprietary Data Structuring
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">UNINDEXED DATA</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  We are digitizing the ground reality: regional supplier price indexes, local sandcrete formulations, and unindexed municipal zoning gazettes that Western APIs have zero access to.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  2. Hyper-Localization & Climate AI
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">AFRICA REALITY</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Our models understand informal land tenure customs (family titles, excision gazettes), heavy tropical monsoon soil hydrology, and off-grid hybrid solar microgrid loads.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Matrix Table */}
        <div className="lg:col-span-6">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>COMPETITIVE COMPARISON</span>
              <span className="text-emerald-400 font-semibold font-mono">BUILDAI ADVANTAGE</span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Header Row */}
              <div className="grid grid-cols-12 text-[11px] font-mono text-slate-400 pb-1 border-b border-slate-800 px-2">
                <div className="col-span-5">Capability</div>
                <div className="col-span-3 text-center">Global PropTech</div>
                <div className="col-span-4 text-center font-bold text-emerald-400">BuildAI Africa</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-12 items-center p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                <div className="col-span-5 font-medium">Unstructured Field Ingest</div>
                <div className="col-span-3 text-center text-red-400 font-mono flex items-center justify-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Fails
                </div>
                <div className="col-span-4 text-center text-emerald-400 font-mono font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Multimodal
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 items-center p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                <div className="col-span-5 font-medium">Local African Zoning RAG</div>
                <div className="col-span-3 text-center text-red-400 font-mono flex items-center justify-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> 0% Data
                </div>
                <div className="col-span-4 text-center text-emerald-400 font-mono font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 500+ Codes
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 items-center p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                <div className="col-span-5 font-medium">Bank Risk Scoring API</div>
                <div className="col-span-3 text-center text-red-400 font-mono flex items-center justify-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> None
                </div>
                <div className="col-span-4 text-center text-emerald-400 font-mono font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Calibrated
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-12 items-center p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                <div className="col-span-5 font-medium">Offline Mobile Edge</div>
                <div className="col-span-3 text-center text-red-400 font-mono flex items-center justify-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Cloud-Only
                </div>
                <div className="col-span-4 text-center text-emerald-400 font-mono font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Gemma 2B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-emerald-400 font-medium">
          Our ground-level data structuring and banking integration create an unassailable defensive moat.
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
