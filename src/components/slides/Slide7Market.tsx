import React, { useState } from "react";
import { SlideData } from "../../types";
import {
  Globe,
  BarChart3,
  MapPin,
  TrendingUp,
  Building,
  Target,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide7Market: React.FC<SlideProps> = ({ slide }) => {
  const [selectedHub, setSelectedHub] = useState<string>("lagos");

  const hubs = [
    {
      id: "lagos",
      name: "Lagos, Nigeria",
      phase: "Phase 1 (Immediate Beta)",
      marketSize: "$42B Pipeline",
      stat: "24M Population • 15 Beta Devs",
      focus: "High-density residential, coastal piling feasibility, Lagos State Planning Law compliance.",
      active: true,
      color: "border-amber-400 text-amber-400",
    },
    {
      id: "accra",
      name: "Accra, Ghana",
      phase: "Phase 2 (Q1 Expansion)",
      marketSize: "$12B Pipeline",
      stat: "Demo Day Host • GREDA Partners",
      focus: "Diaspora real estate demand, land registry digitization, eco-resort master planning.",
      active: false,
      color: "border-emerald-400 text-emerald-400",
    },
    {
      id: "nairobi",
      name: "Nairobi, Kenya",
      phase: "Phase 2 (Q2 Expansion)",
      marketSize: "$28B Pipeline",
      stat: "Silicon Savannah Hub",
      focus: "East African industrial parks, logistics corridors, green building code standards.",
      active: false,
      color: "border-blue-400 text-blue-400",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          Market Opportunity & Go-To-Market
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Title */}
      <div className="space-y-1 z-10">
        <span className="text-amber-400 text-xs font-mono font-medium tracking-widest uppercase">
          Continental Mega-Trend
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white">
          Riding the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Largest Urbanization Event</span> in History.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 font-light">
          {slide.subheadline}
        </p>
      </div>

      {/* Main Grid: TAM/SAM/SOM + Phased GTM Map Hubs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch">
        {/* Left Column: TAM / SAM / SOM Market Breakdown */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>MARKET SIZING (AFRICA PROPTECH & INFRASTRUCTURE)</span>
              <Target className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* TAM */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">TAM (Total Addressable)</div>
                <div className="text-sm font-bold text-white">African Infrastructure Boom</div>
              </div>
              <span className="text-base font-extrabold font-mono text-amber-400">$1.4 Trillion</span>
            </div>

            {/* SAM */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">SAM (Serviceable Addressable)</div>
                <div className="text-sm font-bold text-white">Feasibility, Design & Permitting</div>
              </div>
              <span className="text-base font-extrabold font-mono text-amber-300">$84 Billion</span>
            </div>

            {/* SOM */}
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-emerald-400 uppercase">SOM (Initial Serviceable Obtainable)</div>
                <div className="text-sm font-bold text-white">Top 3 Hubs (NG, GH, KE)</div>
              </div>
              <span className="text-base font-extrabold font-mono text-emerald-400">$420 Million</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-amber-400 font-extrabold text-lg">2x</div>
              <div className="text-slate-300 font-medium text-[11px]">Population by 2050</div>
              <div className="text-[10px] text-slate-400 mt-0.5">1.3B New Urban Residents</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-emerald-400 font-extrabold text-lg">&gt;10%</div>
              <div className="text-slate-300 font-medium text-[11px]">African GDP</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Construction & Real Estate</div>
            </div>
          </div>
        </div>

        {/* Right Column: Phased GTM Strategy & Key Hubs */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>GO-TO-MARKET EXPANSION CORRIDORS</span>
            <span className="text-amber-400 font-semibold">PHASED EXECUTION</span>
          </div>

          {hubs.map((hub) => (
            <div
              key={hub.id}
              onClick={() => setSelectedHub(hub.id)}
              className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                selectedHub === hub.id
                  ? "bg-slate-900 border-amber-400 shadow-lg shadow-amber-950/20"
                  : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-slate-800 text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{hub.name}</h4>
                    <span className="text-[10px] text-slate-400 font-mono">{hub.phase}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-amber-400">{hub.marketSize}</span>
                  <div className="text-[10px] text-slate-400 font-mono">{hub.stat}</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 pl-7 leading-relaxed">
                {hub.focus}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-amber-400 font-medium">
          Targeting the fastest-growing urban centers with localized zoning engines and developer networks.
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
