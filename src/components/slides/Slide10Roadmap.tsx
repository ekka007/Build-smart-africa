import React, { useState } from "react";
import { SlideData } from "../../types";
import {
  Calendar,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Database,
  Cpu,
  Sliders,
  Award
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
  onOpenDemo?: () => void;
}

export const Slide10Roadmap: React.FC<SlideProps> = ({ slide, onOpenDemo }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(3); // Default to Demo Day

  const roadmap = [
    {
      month: "Month 1 (Sept)",
      title: "RAG & Legal Ingestion",
      icon: Database,
      deliverable: "Ingest Nigerian building codes & regional historical material databases into Gemini 1.5 Pro.",
      milestones: [
        "Lagos Planning Law 2019 parsed",
        "10-yr construction price index vector database",
        "Setback & FAR automated calculator",
      ],
      color: "border-blue-400 text-blue-400 bg-blue-500/10",
      status: "COMPLETED",
    },
    {
      month: "Month 2 (Oct)",
      title: "Multimodal Vision & Beta",
      icon: Cpu,
      deliverable: "Train multimodal vision models on drone orthomosaics and hand sketches; onboard 5 closed-beta developers.",
      milestones: [
        "5 Lagos pilot developers onboarded",
        "Drone boundary peg vision calibration",
        "Gemma 2B offline edge mobile testing",
      ],
      color: "border-amber-400 text-amber-400 bg-amber-500/10",
      status: "COMPLETED",
    },
    {
      month: "Month 3 (Nov)",
      title: "Bankability Score & UI",
      icon: Sliders,
      deliverable: "Finalize high-density developer UI/UX and calibrate the Bankability Risk Score with 2 commercial pilot banks.",
      milestones: [
        "Bank underwriting API schema",
        "Risk weighting matrix calibrated",
        "Automated PDF & Google Slides exports",
      ],
      color: "border-purple-400 text-purple-400 bg-purple-500/10",
      status: "ACTIVE",
    },
    {
      month: "December (Demo Day)",
      title: "Live 60-Second Demo in Accra",
      icon: Rocket,
      deliverable: "Live demonstration turning a raw smartphone photo of an empty plot into a fully phased, cost-estimated development plan in 60 seconds.",
      milestones: [
        "Live on-stage multimodal demo",
        "Commercial Bank LOI announcement",
        "Seed round open ($1.5M)",
      ],
      color: "border-emerald-400 text-emerald-400 bg-emerald-500/10",
      status: "THE MILESTONE",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          The 90-Day Execution Roadmap (Sept - Dec)
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Title */}
      <div className="space-y-1 z-10">
        <span className="text-emerald-400 text-xs font-mono font-medium tracking-widest uppercase">
          Roadmap to Accra Demo Day
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white">
          Execution Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400">Accra</span>.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 font-light">
          {slide.subheadline}
        </p>
      </div>

      {/* Timeline Gantt Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-auto z-10">
        {roadmap.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = selectedMonth === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelectedMonth(idx)}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? "bg-slate-900 border-amber-400 shadow-xl shadow-amber-950/20 scale-[1.02]"
                  : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                {/* Month header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-amber-400">
                    {item.month}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {item.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg shrink-0 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                  {item.deliverable}
                </p>
              </div>

              {/* Milestones list */}
              <div className="pt-2.5 border-t border-slate-800 space-y-1">
                {item.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* The December Live Demo Callout */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-amber-950/60 border border-emerald-500/40 flex items-center justify-between text-xs z-10">
        <div className="flex items-center gap-2.5 text-white">
          <Rocket className="w-5 h-5 text-emerald-400 shrink-0 animate-bounce" />
          <div>
            <div className="font-bold text-emerald-300">The Demo Day Climax (Accra):</div>
            <div className="text-slate-300 text-[11px]">Live 60-second transformation of a raw vacant plot into an investor-grade, bank-underwritten development plan.</div>
          </div>
        </div>
        {onOpenDemo && (
          <button
            onClick={onOpenDemo}
            className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0"
          >
            Launch Demo Simulator <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-emerald-400 font-medium">
          Quantifiable milestones leading to a live multimodal execution on stage.
        </span>
        <span className="font-mono text-slate-500">Google Africa Applied AI Lab</span>
      </div>
    </div>
  );
};
