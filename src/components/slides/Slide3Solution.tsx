import React, { useState } from "react";
import { SlideData } from "../../types";
import {
  Sparkles,
  Camera,
  Layers,
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Cpu,
  BarChart3,
  Sun,
  ShieldCheck
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
  onOpenDemo?: () => void;
}

export const Slide3Solution: React.FC<SlideProps> = ({ slide, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<"siteplan" | "costs" | "zoning">("siteplan");

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          The Multimodal Solution • Co-Pilot for African Real Estate
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Main Grid: Value Proposition + Sleek Dashboard Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto z-10 items-center">
        {/* Left Column: Headline, Subheadline & 3 Pillars */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <span className="text-emerald-400 text-xs font-mono font-medium tracking-widest uppercase">
              The Intelligent First Layer
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white leading-tight">
              From Analog Reality to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Digital Intelligence</span> in Minutes.
            </h2>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-light">
            {slide.subheadline}
          </p>

          <div className="space-y-2.5">
            {slide.bullets?.map((bullet, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    {idx === 0 && <Camera className="w-4 h-4" />}
                    {idx === 1 && <Cpu className="w-4 h-4" />}
                    {idx === 2 && <Users className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      {bullet.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {bullet.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Positioning Badge */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>The Positioning:</strong> We are not replacing architects — we augment the workforce with speed & intelligence.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Interactive Dashboard Mockup */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden">
            {/* Top Mockup Bar */}
            <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-slate-400 text-[11px] ml-2">BuildAI Co-Pilot • Lekki Project Feasibility</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                LIVE ENGINE
              </span>
            </div>

            {/* Ingest Bar (Input Simulation) */}
            <div className="p-3.5 bg-slate-950/60 border-b border-slate-800/80 text-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center text-amber-400">
                  <Camera className="w-4 h-4" />
                </div>
                <div className="font-mono text-[11px]">
                  <span className="text-slate-400">INPUT:</span> 1 Drone Orthophoto + 2,500 sqm + Mixed-Use
                </div>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                <span>60s INFERENCE</span>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="px-4 pt-3 flex items-center gap-2 border-b border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab("siteplan")}
                className={`pb-2 px-3 font-semibold transition-colors border-b-2 ${
                  activeTab === "siteplan"
                    ? "border-emerald-400 text-emerald-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                3D Massing & Solar
              </button>
              <button
                onClick={() => setActiveTab("costs")}
                className={`pb-2 px-3 font-semibold transition-colors border-b-2 ${
                  activeTab === "costs"
                    ? "border-emerald-400 text-emerald-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                Localized BOQ & Yield
              </button>
              <button
                onClick={() => setActiveTab("zoning")}
                className={`pb-2 px-3 font-semibold transition-colors border-b-2 ${
                  activeTab === "zoning"
                    ? "border-emerald-400 text-emerald-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                Zoning & Permitting RAG
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-4 min-h-[210px] flex flex-col justify-between">
              {activeTab === "siteplan" && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-200">Recommended Massing Envelope</div>
                      <div className="text-[11px] text-slate-400">4-Floor Mixed-Use • 68% Ground Coverage • 18 Units</div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-bold">FAR 3.2 (Compliant)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-slate-400 text-[10px] uppercase font-mono flex items-center gap-1">
                        <Sun className="w-3 h-3 text-amber-400" /> Solar Rooftop Yield
                      </div>
                      <div className="text-slate-100 font-bold mt-1">42 kWp Microgrid</div>
                      <div className="text-[10px] text-emerald-400">Covers 85% daytime common load</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-slate-400 text-[10px] uppercase font-mono flex items-center gap-1">
                        <BarChart3 className="w-3 h-3 text-emerald-400" /> Capital Yield
                      </div>
                      <div className="text-emerald-400 font-bold mt-1">18.4% Net Annual ROI</div>
                      <div className="text-[10px] text-slate-400">Payback: 5.2 Years</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "costs" && (
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-300 font-medium">Substructure & Coastal Piling</span>
                    <span className="font-mono text-white font-bold">₦75,000,000</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-300 font-medium">Superstructure & Local Blockwork</span>
                    <span className="font-mono text-white font-bold">₦195,000,000</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-300 font-medium">Solar Microgrid & MEP</span>
                    <span className="font-mono text-white font-bold">₦65,000,000</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-emerald-950/60 border border-emerald-800/60 font-semibold">
                    <span className="text-emerald-300">Total Estimated Budget</span>
                    <span className="font-mono text-emerald-400 font-bold">₦445,000,000 ($330k)</span>
                  </div>
                </div>
              )}

              {activeTab === "zoning" && (
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">Lagos State Urban Regional Planning Law 2019</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Front setback 9.0m, rear setback 4.5m compliant with Lekki corridor gazette.</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">Environmental Impact Assessment (EIA)</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Automated drainage retention pond included for wet season flood prevention.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action bar inside mockup */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 text-[11px]">
                <span className="text-slate-400 font-mono">Gemini Multimodal Vision Ingestion</span>
                {onOpenDemo && (
                  <button
                    onClick={onOpenDemo}
                    className="px-2.5 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center gap-1 transition-colors"
                  >
                    Try Live Co-Pilot Demo <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-emerald-400 font-medium">
          Compressing 45-day feasibility workflows into 60 seconds with data-backed accuracy.
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
