import React, { useState } from "react";
import { SlideData } from "../../types";
import {
  Sparkles,
  Eye,
  Smartphone,
  Cpu,
  Brain,
  Layers,
  Database,
  ArrowRight,
  Shield,
  Video,
  Activity
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide4Tech: React.FC<SlideProps> = ({ slide }) => {
  const [activeEngine, setActiveEngine] = useState<number>(0);

  const engines = [
    {
      name: "Gemini 1.5 Pro",
      role: "The Knowledge Engine",
      badge: "1M+ Token Context",
      color: "from-blue-500 to-indigo-500",
      accent: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/30",
      icon: Sparkles,
      focus: "Ingesting 500+ page analog legal gazettes, municipal planning bylaws, and land tenure jurisprudence without token truncation.",
      stats: "500+ Page Laws Ingested via RAG",
    },
    {
      name: "Gemini Multimodal Vision",
      role: "The Reality Engine",
      badge: "Drone & Field Vision",
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30",
      icon: Eye,
      focus: "Deciphering low-resolution drone orthophotos, hand-drawn surveyor sketches, topography contours, and physical boundary pegs.",
      stats: "Messy Analog Input Recognition",
    },
    {
      name: "Gemma (Open Models)",
      role: "The Edge Engine",
      badge: "Offline Mobile AI",
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
      icon: Smartphone,
      focus: "Quantized 2B/7B edge models running locally on surveyor smartphones in remote corridors with zero cellular connectivity.",
      stats: "Zero-Bandwidth Offline Inference",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Background DeepTech glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          <Brain className="w-3.5 h-3.5 text-indigo-400" />
          The Technology Stack • Google DeepMind Ecosystem
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Main Grid: Architecture Flow + 3 Deep Tech Engine Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto z-10 items-center">
        {/* Left Column: Stack Overview & Interactive Selector */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <span className="text-indigo-400 text-xs font-mono font-medium tracking-widest uppercase">
              Architectural Moat
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white leading-tight">
              Powered by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Google DeepMind</span> Ecosystem.
            </h2>
          </div>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
            This is not a simple wrapper. We require Google's specific architectural strengths to solve Africa's unstructured data reality.
          </p>

          <div className="space-y-2.5">
            {engines.map((engine, idx) => {
              const Icon = engine.icon;
              const isSelected = activeEngine === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveEngine(idx)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? `${engine.bg} shadow-lg scale-[1.01]`
                      : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isSelected ? "bg-white/10" : "bg-slate-800 text-slate-400"
                      } ${engine.accent}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                          {engine.name}
                          <span className="text-[10px] font-normal text-slate-400 font-mono">
                            ({engine.role})
                          </span>
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300 font-semibold">
                          {engine.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {engine.focus}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Google DeepMind Central Brain Network Diagram */}
        <div className="lg:col-span-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 relative shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
              <span>MULTIMODAL INTELLIGENCE PIPELINE</span>
              <span className="text-indigo-400 font-semibold flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 animate-pulse" /> LIVE ORCHESTRATION
              </span>
            </div>

            {/* Central Brain Hub Diagram */}
            <div className="relative h-64 w-full flex items-center justify-center">
              {/* Central BuildAI Brain Icon */}
              <div className="z-20 p-4 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-2 border-indigo-500/60 shadow-[0_0_30px_rgba(99,102,241,0.3)] text-center w-44">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 mx-auto flex items-center justify-center mb-1.5 border border-indigo-400/40">
                  <Brain className="w-6 h-6 animate-pulse" />
                </div>
                <div className="font-extrabold text-sm text-white font-display">BuildAI Brain</div>
                <div className="text-[10px] text-indigo-300 font-mono mt-0.5">RAG + Neural Feasibility</div>
              </div>

              {/* Orbiting Tech Nodes */}
              {/* Top: Gemini 1.5 Pro Context */}
              <div className="absolute top-0 px-3 py-2 rounded-xl bg-blue-950/80 border border-blue-500/40 text-xs text-blue-300 font-mono flex items-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <div>
                  <div className="font-bold text-white text-[11px]">Gemini 1.5 Pro</div>
                  <div className="text-[9px] text-blue-300">500+ Page Legal RAG</div>
                </div>
              </div>

              {/* Bottom Left: Gemma Edge */}
              <div className="absolute bottom-0 left-0 px-3 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 font-mono flex items-center gap-2 shadow-lg">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="font-bold text-white text-[11px]">Gemma Edge</div>
                  <div className="text-[9px] text-emerald-300">Offline Field Capture</div>
                </div>
              </div>

              {/* Bottom Right: Vision + Veo Video */}
              <div className="absolute bottom-0 right-0 px-3 py-2 rounded-xl bg-amber-950/80 border border-amber-500/40 text-xs text-amber-300 font-mono flex items-center gap-2 shadow-lg">
                <Eye className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="font-bold text-white text-[11px]">Multimodal Vision</div>
                  <div className="text-[9px] text-amber-300">Drone & Hand Sketches</div>
                </div>
              </div>

              {/* Connecting animated circles */}
              <div className="absolute inset-4 rounded-full border border-dashed border-indigo-500/20 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-dashed border-blue-500/20 pointer-events-none" />
            </div>

            {/* Bottom summary bar */}
            <div className="mt-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">Context Window: 1,000,000+ Tokens</span>
              <span className="text-emerald-400">Low-Bandwidth Optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-indigo-400 font-medium">
          Leveraging Google’s massive context window and edge compute to digitize Africa's physical terrain.
        </span>
        <span className="font-mono text-slate-500">Google Africa Applied AI Lab</span>
      </div>
    </div>
  );
};
