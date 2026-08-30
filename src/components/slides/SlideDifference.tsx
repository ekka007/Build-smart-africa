import React from "react";
import { SlideData } from "../../types";
import { 
  Camera, 
  Database, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  Sparkles, 
  Zap, 
  Globe 
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const SlideDifference: React.FC<SlideProps> = ({ slide }) => {
  const pipelineSteps = [
    {
      step: 1,
      title: "RAW LAND",
      sub: "Photo + coordinates",
      desc: "Smartphone photos, drone video, GPS coordinates & boundary sketches.",
      icon: Camera,
      badge: "6°27'N, 3°23'E",
      color: "from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30",
      accent: "bg-amber-500/20 text-amber-300",
    },
    {
      step: 2,
      title: "LOCAL EVIDENCE",
      sub: "Codes + costs + context",
      desc: "Ingesting state zoning bylaws, setback rules & live regional material indices.",
      icon: Database,
      badge: "Lagos Master Plan",
      color: "from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30",
      accent: "bg-blue-500/20 text-blue-300",
    },
    {
      step: 3,
      title: "AI SCENARIO",
      sub: "Plan + cost + phasing",
      desc: "Multimodal site massing, dynamic bill of quantities & solar/energy modeling.",
      icon: Cpu,
      badge: "Gemini 1.5 Pro",
      color: "from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30",
      accent: "bg-purple-500/20 text-purple-300",
    },
    {
      step: 4,
      title: "HUMAN REVIEW",
      sub: "Architect + planner + lender",
      desc: "Professional signoff, surveyor verification & pre-underwriting audit trail.",
      icon: ShieldCheck,
      badge: "Institutional Audit",
      color: "from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/30",
      accent: "bg-emerald-500/20 text-emerald-300",
    },
  ];

  const whyItMatters = [
    {
      title: "Local data matters as much as model capability",
      desc: "Generic models fail on informal land tenure, seasonal drainage, and paper zoning. Deep local context is the model's true anchor.",
      icon: Database,
    },
    {
      title: "Low-bandwidth workflows must be designed in—not added later",
      desc: "Field surveyors operate in zero-connectivity corridors. Lightweight edge processing and offline-first sync are mandatory.",
      icon: Zap,
    },
    {
      title: "AI should accelerate professionals, not pretend to replace them",
      desc: "We empower architects, quantity surveyors, and lenders with a verified first-pass baseline in 60 seconds instead of 45 days.",
      icon: Sparkles,
    },
    {
      title: "Every verified project strengthens the evidence layer for the next one",
      desc: "Continuous flywheels turn real-world project completions into richer training benchmarks for pan-African construction finance.",
      icon: Layers,
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden select-none">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            THE BUILDAI DIFFERENCE
          </span>
          <span className="text-xs text-slate-400 font-mono">
            SLIDE {slide.slideNumber} OF 14
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
          From raw land to an intelligent development decision—without waiting weeks for the first structured answer.
        </h2>
      </div>

      {/* 4-Step Pipeline */}
      <div className="relative z-10 my-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`relative rounded-xl p-3.5 bg-gradient-to-b ${step.color} bg-slate-900/80 border transition-all duration-300 hover:scale-[1.02] shadow-lg flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold font-mono tracking-widest text-slate-300">
                        0{step.step}
                      </span>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${step.accent}`}>
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-medium text-amber-300/90 mb-1.5">
                    ({step.sub})
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow to next item on large screens */}
                {idx < pipelineSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-slate-800 border border-slate-600 items-center justify-center shadow-md">
                    <ArrowRight className="w-3 h-3 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Why This Matters for Africa Section */}
      <div className="relative z-10 bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
        <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" />
          Why this matters for Africa
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {whyItMatters.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-slate-300">
              <span className="text-emerald-400 font-bold text-sm leading-none mt-0.5">•</span>
              <div>
                <span className="text-white font-semibold">{item.title}. </span>
                <span className="text-slate-400 text-[11px]">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Milestone Banner */}
      <div className="relative z-10 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-amber-500/30 rounded-lg py-2 px-4 flex items-center justify-center text-center shadow-md">
        <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-amber-300 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span>90 DAYS</span>
          <span className="text-slate-600">•</span>
          <span>5 BETA PARTNERS</span>
          <span className="text-slate-600">•</span>
          <span>1 LIVE PROTOTYPE</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400">NIGERIA FIRST</span>
        </div>
      </div>
    </div>
  );
};
