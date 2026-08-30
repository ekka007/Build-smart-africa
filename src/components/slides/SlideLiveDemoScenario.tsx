import React from "react";
import { SlideData } from "../../types";
import { 
  Building2, 
  Home, 
  Car, 
  Compass, 
  SunMedium, 
  AlertTriangle, 
  Calendar, 
  Route, 
  Layers, 
  CheckCircle2 
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const SlideLiveDemoScenario: React.FC<SlideProps> = ({ slide }) => {
  const outputs = [
    {
      label: "DEVELOPMENT MIX",
      value: "Commercial frontage + residential rear",
      desc: "Optimizes road frontage yield while preserving privacy for high-density duplex living behind.",
      icon: Building2,
      color: "text-emerald-400",
    },
    {
      label: "ACCESS LOGIC",
      value: "South primary / east secondary",
      desc: "Separates commercial customer ingress on Main Road from residential private traffic on East lane.",
      icon: Route,
      color: "text-blue-400",
    },
    {
      label: "PHASING",
      value: "Frontage first → residential second",
      desc: "Unlocks early rental cashflow from retail ground floor to self-fund residential phase 2 capex.",
      icon: Calendar,
      color: "text-amber-400",
    },
    {
      label: "ENERGY",
      value: "Estimate demand and solar-ready strategy",
      desc: "45 kVA peak load calculation + rooftop solar PV orientation to mitigate national grid unreliability.",
      icon: SunMedium,
      color: "text-yellow-400",
    },
    {
      label: "KEY RISKS",
      value: "Planning, utilities, market and cost uncertainty",
      desc: "Highlights setback variance requirement and local cement price inflation hedge.",
      icon: AlertTriangle,
      color: "text-rose-400",
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden select-none">
      {/* Background Accent glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE DEMO • AI-GENERATED FIRST SCENARIO
          </span>
          <span className="text-xs text-slate-400 font-mono">
            SLIDE {slide.slideNumber} OF 14
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
          One site. Multiple viable strategies. Evidence attached to every assumption.
        </h2>
      </div>

      {/* Center 2-Column Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 my-2 flex-1 items-stretch">
        {/* Left: CONCEPTUAL SITE STRATEGY visual schematic */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              CONCEPTUAL SITE STRATEGY
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
              Scenario #1 • Mixed-Use
            </span>
          </div>

          {/* Detailed Schematic Graphic */}
          <div className="my-2 relative w-full flex-1 min-h-[200px] bg-slate-950/90 rounded-xl border border-slate-700/80 p-3 flex flex-col justify-between">
            {/* North Indicator */}
            <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
              NORTH ↑
            </div>

            {/* 8 Residential Duplex Units (2 rows of 4) */}
            <div>
              <div className="text-[10px] font-mono font-semibold text-emerald-400/90 mb-1 flex items-center gap-1">
                <Home className="w-3 h-3" />
                RESIDENTIAL REAR (8 DUPLEX UNITS)
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-1.5">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="bg-emerald-950/50 border border-emerald-500/40 rounded py-1 px-1 text-center">
                    <span className="text-[9px] font-bold font-mono text-emerald-300">DUPLEX {n}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-2">
                {[5, 6, 7, 8].map((n) => (
                  <div key={n} className="bg-emerald-950/50 border border-emerald-500/40 rounded py-1 px-1 text-center">
                    <span className="text-[9px] font-bold font-mono text-emerald-300">DUPLEX {n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Circulation & 7 Parking Bays */}
            <div className="bg-slate-900 border border-dashed border-slate-700 rounded p-1.5 my-1">
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
                <span className="flex items-center gap-1">
                  <Car className="w-3 h-3 text-slate-300" />
                  INTERNAL DRIVEWAY & PARKING (7 BAYS)
                </span>
                <span className="text-slate-500">6m Wide Lane</span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((p) => (
                  <div key={p} className="bg-slate-800 border border-slate-600/80 rounded py-0.5 text-center">
                    <span className="text-[9px] font-mono font-bold text-amber-300">P</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Frontage Bar */}
            <div className="bg-gradient-to-r from-amber-700/60 via-amber-600/50 to-amber-700/60 border border-amber-500/60 rounded-lg py-1.5 px-3 flex items-center justify-center text-center shadow">
              <span className="text-[11px] font-bold font-mono text-amber-200 tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                3-STOREY COMMERCIAL FRONTAGE
              </span>
            </div>

            {/* Road Perimeter */}
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 mt-1">
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">SOUTH • MAIN ROAD (PRIMARY INGRESS)</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">EAST (RESIDENTIAL EXIT)</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1">
            <span>FAR: 2.1 | Setback: 6m Front / 3m Side</span>
            <span className="text-emerald-400">Ground Coverage: 48%</span>
          </div>
        </div>

        {/* Right: FIRST-PASS OUTPUT Table */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold font-mono tracking-widest text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              FIRST-PASS OUTPUT
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Confidence Index: 89%
            </span>
          </div>

          <div className="space-y-2.5 my-2">
            {outputs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-2.5 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Icon className={`w-3 h-3 ${item.color}`} />
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-white font-mono">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-4.5">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-lg p-2 text-center text-[10px] text-emerald-300 font-mono">
            Every metric tied to verified Nigerian building gazettes and live price benchmarks.
          </div>
        </div>
      </div>
    </div>
  );
};
