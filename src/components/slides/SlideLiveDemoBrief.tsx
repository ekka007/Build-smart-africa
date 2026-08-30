import React from "react";
import { SlideData } from "../../types";
import { 
  MapPin, 
  Compass, 
  Building2, 
  Home, 
  Layers, 
  ArrowDown, 
  ArrowRight,
  Maximize2,
  FileCheck
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const SlideLiveDemoBrief: React.FC<SlideProps> = ({ slide }) => {
  const siteInputs = [
    { label: "SITE AREA", value: "6,690 m²", highlight: true, icon: Maximize2 },
    { label: "ORIENTATION", value: "South-facing main road", icon: Compass },
    { label: "SECOND ROAD", value: "East side (Secondary access)", icon: ArrowRight },
    { label: "OBJECTIVE", value: "Commercial frontage + residential development", icon: Building2 },
    { label: "DESIGN INTENT", value: "Striking 3-storey commercial facade; duplex-style homes behind", icon: Home },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden select-none">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE DEMO • A REAL AFRICAN SITE BRIEF
          </span>
          <span className="text-xs text-slate-400 font-mono">
            SLIDE {slide.slideNumber} OF 14
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
          From 6,690 m² of raw land to a structured development scenario
        </h2>
      </div>

      {/* Center Layout: Left Input Specs & Right Visual Schematic */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 my-2 flex-1 items-center">
        {/* Left Column: SITE INPUT Card */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between h-full max-h-[300px]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" />
                SITE INPUT
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Lagos Corridor
              </span>
            </div>

            <div className="space-y-2.5">
              {siteInputs.map((item) => (
                <div key={item.label} className="flex items-start gap-2.5 text-xs">
                  <span className="text-slate-400 font-mono font-semibold min-w-[105px] text-[11px] shrink-0">
                    {item.label}:
                  </span>
                  <span className={`font-medium ${item.highlight ? "text-emerald-300 font-bold text-sm font-mono" : "text-slate-200"}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>COORDINATES: 6.4521° N, 3.5832° E</span>
            <span className="text-amber-400 font-semibold">STATUS: UNINDEXED PARCEL</span>
          </div>
        </div>

        {/* Right Column: WHAT THE AI RECEIVES Graphic Card */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between h-full max-h-[300px]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold font-mono tracking-widest text-amber-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              WHAT THE AI RECEIVES
            </span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-500/30 border border-emerald-400" /> Duplex Plot
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-amber-500/30 border border-amber-400 ml-2" /> Commercial
            </div>
          </div>

          {/* Plot Visual Map Container */}
          <div className="my-2 relative w-full h-[180px] bg-slate-950/80 rounded-xl border border-slate-700/80 p-3 overflow-hidden flex flex-col justify-between">
            {/* North Compass in Top Right */}
            <div className="absolute top-2 right-2 flex flex-col items-center bg-slate-900/90 border border-slate-700 px-1.5 py-0.5 rounded shadow text-[9px] font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">N</span>
              <Compass className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* Rear Residential Grid (6 duplex lots) */}
            <div className="grid grid-cols-3 gap-2 flex-1 mb-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="bg-emerald-950/40 border border-emerald-500/40 rounded-lg p-1.5 flex flex-col items-center justify-center hover:border-emerald-400 transition-colors shadow-inner"
                >
                  <span className="text-[10px] font-bold text-emerald-300 font-mono">
                    RES / RES
                  </span>
                  <span className="text-[9px] text-emerald-400/80 font-mono">
                    Lot #{num} • Duplex
                  </span>
                </div>
              ))}
            </div>

            {/* Commercial Frontage Bar */}
            <div className="w-full bg-gradient-to-r from-amber-700/50 via-amber-600/40 to-amber-700/50 border border-amber-500/50 rounded-lg py-1.5 px-3 flex items-center justify-center text-center mb-2 shadow">
              <span className="text-[11px] font-bold text-amber-200 tracking-wider font-mono flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                COMMERCIAL FRONTAGE (3-STOREY)
              </span>
            </div>

            {/* Road Boundary Indicators */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
              <div className="bg-slate-800/90 border border-slate-700 rounded px-2.5 py-0.5 flex items-center gap-1.5">
                <ArrowDown className="w-3 h-3 text-slate-400" />
                MAIN ROAD • SOUTH (PRIMARY ACCESS)
              </div>
              <div className="bg-slate-800/90 border border-slate-700 rounded px-2 py-0.5 flex items-center gap-1">
                EAST ROAD
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="relative z-10 bg-slate-900/60 border border-slate-800 rounded-lg py-2 px-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
        <span className="text-amber-400 font-semibold">AI inputs:</span>
        <span className="text-slate-300">
          image <span className="text-slate-600">/</span> coordinates <span className="text-slate-600">/</span> objective <span className="text-slate-600">/</span> budget <span className="text-slate-600">/</span> voice brief <span className="text-slate-600">/</span> local evidence
        </span>
        <span className="text-emerald-400 font-semibold hidden sm:inline">
          Latency: &lt;60s
        </span>
      </div>
    </div>
  );
};
