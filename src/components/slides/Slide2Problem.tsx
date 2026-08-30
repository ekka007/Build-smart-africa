import React, { useState } from "react";
import { SlideData } from "../../types";
import {
  FileWarning,
  TrendingDown,
  ShieldAlert,
  HelpCircle,
  AlertTriangle,
  FileText,
  Building2,
  Compass,
  Landmark,
  ArrowRight,
  Clock,
  DollarSign
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide2Problem: React.FC<SlideProps> = ({ slide }) => {
  const [activeFriction, setActiveFriction] = useState<number | null>(null);

  const frictionNodes = [
    {
      id: "architect",
      name: "Architectural Firm",
      delay: "3-4 Weeks",
      cost: "₦8M - ₦15M",
      pain: "Manual CAD block drafts with zero live zoning validation",
      icon: Building2,
      pos: "top-2 left-12",
    },
    {
      id: "surveyor",
      name: "Land Surveyor",
      delay: "2-3 Weeks",
      cost: "₦3M - ₦6M",
      pain: "Analog site visits, boundary disputes & uncalibrated GPS coordinates",
      icon: Compass,
      pos: "top-2 right-12",
    },
    {
      id: "paperwork",
      name: "Municipal Records & Bylaws",
      delay: "4-6 Weeks",
      cost: "Heavy Retainers",
      pain: "Trapped in dusty physical gazettes & unsearchable paper archives",
      icon: FileText,
      pos: "bottom-2 left-12",
    },
    {
      id: "bank",
      name: "Project Finance Bank",
      delay: "2-3 Months",
      cost: "High Loan Friction",
      pain: "Refuses underwriting due to lack of verified risk metrics",
      icon: Landmark,
      pos: "bottom-2 right-12",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Background Accent */}
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-semibold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          The Core Market Bottleneck • The "Data Desert"
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Main Grid: 3 Problem Cards + Interactive Ecosystem Chaos Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto z-10 items-center">
        {/* Left Column: Headline & The 3 Concrete Pain Points */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <span className="text-red-400 text-xs font-mono font-medium tracking-widest uppercase">
              The Reality of African Development
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white leading-tight">
              Development Decisions are <span className="text-red-400 underline decoration-red-500/40">Slow, Fragmented,</span> and Capital-Risky.
            </h2>
          </div>

          <div className="space-y-2.5">
            {slide.bullets?.map((bullet, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-red-500/40 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5 group-hover:bg-red-500/20">
                    {idx === 0 && <FileWarning className="w-4 h-4" />}
                    {idx === 1 && <TrendingDown className="w-4 h-4" />}
                    {idx === 2 && <ShieldAlert className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-red-300 transition-colors">
                        {bullet.title}
                      </h3>
                      {bullet.metric && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-950/60 border border-red-800/60 text-red-400 font-semibold">
                          {bullet.metric}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {bullet.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Diagram showing Developer trapped in fragmented arrows */}
        <div className="lg:col-span-6">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 relative shadow-2xl">
            <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
              <span>FRAGMENTED STATUS QUO</span>
              <span className="text-red-400 font-semibold text-[11px] animate-pulse">● HIGH CAPITAL FRICTION</span>
            </div>

            {/* Diagram Stage */}
            <div className="relative h-64 w-full flex items-center justify-center">
              {/* Central Developer Box */}
              <div className="z-20 p-3.5 rounded-xl bg-slate-950 border-2 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.2)] text-center w-36">
                <div className="w-9 h-9 rounded-full bg-red-500/20 text-red-400 mx-auto flex items-center justify-center mb-1.5">
                  <HelpCircle className="w-5 h-5 animate-bounce" />
                </div>
                <div className="font-bold text-xs text-white">The Developer</div>
                <div className="text-[10px] text-red-400 font-mono mt-0.5">Weeks of Delay</div>
              </div>

              {/* Surrounding Fragmented Nodes */}
              {frictionNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveFriction(i)}
                    onMouseLeave={() => setActiveFriction(null)}
                    className={`absolute ${node.pos} z-10 cursor-pointer transition-all duration-300 p-2.5 rounded-lg bg-slate-900 border ${
                      activeFriction === i ? "border-red-400 shadow-lg shadow-red-950 scale-105" : "border-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-slate-800 text-slate-300">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200">{node.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
                          <span className="text-amber-400">{node.delay}</span> •{" "}
                          <span className="text-red-400">{node.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Connecting dashed arrows / radar lines */}
              <div className="absolute inset-4 rounded-full border border-dashed border-red-500/20 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-dashed border-amber-500/20 pointer-events-none" />
            </div>

            {/* Friction summary box */}
            <div className="mt-2 p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
              <div className="flex items-center justify-between text-slate-300 font-mono">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Clock className="w-3.5 h-3.5" /> Typical Feasibility Lag: 45 - 90 Days
                </span>
                <span className="flex items-center gap-1.5 text-red-400">
                  <DollarSign className="w-3.5 h-3.5" /> Capital Lost: $25,000+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Key takeaway */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-red-400 font-medium">
          Key Bottleneck: Global PropTech assumes clean APIs. Africa is unindexed and analog.
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
