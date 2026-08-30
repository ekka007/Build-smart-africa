import React, { useState } from "react";
import { SlideData } from "../../types";
import { Sparkles, ArrowRight, Layers, MapPin, Zap, CheckCircle2 } from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide1Title: React.FC<SlideProps> = ({ slide }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header info */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Google Africa Applied AI Lab • Demo Day
        </div>
        <div className="text-xs text-slate-400 font-mono tracking-wide">
          PITCH DECK • SLIDE 01
        </div>
      </div>

      {/* Main Content Grid: Left Title / Right Interactive Split-Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto z-10 items-center">
        {/* Left column: Typography & Value Hook */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-2">
            <span className="text-amber-400 font-mono font-medium text-sm tracking-widest uppercase">
              Intelligence for Africa’s Next Generation of Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              BuildAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400">Africa</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            {slide.subheadline}
          </p>

          <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="text-amber-400 font-bold text-sm">60 Seconds</div>
              <div className="text-slate-400 mt-0.5">Raw Plot to Feasibility</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="text-emerald-400 font-bold text-sm">Bankability API</div>
              <div className="text-slate-400 mt-0.5">Institutional Risk Scoring</div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Visual Simulation (Raw Land vs. Glowing Digital Twin) */}
        <div className="lg:col-span-6">
          <div
            className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group cursor-ew-resize"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
              setSliderPos((x / rect.width) * 100);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Raw Land (Background / Left) */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-stone-900/90 text-stone-300 border border-stone-700 font-mono">
                  ANALOG REALITY
                </span>
                <span className="text-stone-400 text-[11px] font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-500" /> Lekki Corridor, Lagos
                </span>
              </div>

              {/* Raw Site Visual Simulation */}
              <div className="relative my-auto flex flex-col items-center justify-center p-4 border border-dashed border-stone-700 rounded-lg bg-stone-950/50">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-stone-500 mb-2">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="text-stone-300 font-semibold text-sm">Raw Vacant Plot (2,500 sqm)</div>
                <div className="text-stone-500 text-xs text-center mt-1">
                  Unindexed paper zoning • Manual surveyor bottleneck • $25k feasibility fee
                </div>
              </div>

              <div className="text-[11px] text-stone-400 font-mono">
                Status: Stalled Feasibility (Day 34)
              </div>
            </div>

            {/* AI Digital Twin (Foreground / Right Layer with Clip Path) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/70 to-emerald-950/40 p-5 flex flex-col justify-between transition-all duration-75"
              style={{
                clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
              }}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono flex items-center gap-1 ml-auto">
                  <Zap className="w-3 h-3 text-emerald-400" /> BUILDAI DIGITAL TWIN
                </span>
              </div>

              {/* Glowing 3D Digital Twin Visual */}
              <div className="relative my-auto flex flex-col items-center justify-center p-4 border border-emerald-500/40 rounded-lg bg-emerald-950/30 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm flex items-center gap-1.5">
                      Mixed-Use Commercial & Residential
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-emerald-400 text-xs font-mono">
                      Zoning FAR 3.2 • 18 Units • Solar Microgrid
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full mt-1 text-center text-[11px] font-mono">
                  <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700">
                    <div className="text-slate-400">Est. Cost</div>
                    <div className="text-white font-bold">₦460M ($340k)</div>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700">
                    <div className="text-slate-400">Net Yield</div>
                    <div className="text-emerald-400 font-bold">18.4% ROI</div>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700">
                    <div className="text-slate-400">Bank Score</div>
                    <div className="text-amber-400 font-bold">88 / 100</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300">
                <span>Gemini 1.5 Pro Context Verified</span>
                <span>Ready to Underwrite</span>
              </div>
            </div>

            {/* Interactive Drag Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-[10px] shadow-lg">
                ↔
              </div>
            </div>

            {/* Helper label */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-400/80 bg-black/60 px-2 py-0.5 rounded-full pointer-events-none">
              {isHovered ? "Drag to compare analog plot vs. AI digital twin" : "Hover or drag to see AI transformation"}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Key takeaway footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Multimodal Development Intelligence for African Real Estate</span>
        </div>
        <div className="font-mono text-slate-400">
          buildai.africa
        </div>
      </div>
    </div>
  );
};
