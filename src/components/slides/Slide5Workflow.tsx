import React, { useState } from "react";
import { SlideData } from "../../types";
import {
  UploadCloud,
  SearchCode,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileCheck,
  Zap,
  ShieldCheck,
  Compass
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide5Workflow: React.FC<SlideProps> = ({ slide }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      step: "01",
      name: "Ingest",
      title: "Field & Terrain Ingestion",
      icon: UploadCloud,
      desc: "User uploads raw site photos, drone orthomosaics, inputs land size (sqm/acres), and dictates development budget & goals via text or voice.",
      details: [
        "Drone & smartphone photos",
        "Boundary GPS pegs & land size",
        "Target asset class (Residential / Commercial / Industrial)",
      ],
      color: "from-blue-500/20 to-indigo-500/20",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      step: "02",
      name: "Analyze",
      title: "Contextual Cross-Referencing",
      icon: SearchCode,
      desc: "Gemini cross-references regional master plans, setbacks, FAR rules, current regional material indices (cement, steel, sandcrete), and grid proximity.",
      details: [
        "Lagos/Accra/Nairobi building code RAG",
        "Live local commodity price indices",
        "Drainage, solar & grid accessibility check",
      ],
      color: "from-amber-500/20 to-orange-500/20",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    },
    {
      step: "03",
      name: "Generate",
      title: "Bankable Feasibility Package",
      icon: Layers,
      desc: "Outputs conceptual 3D site massing plans, rooftop solar microgrid sizing, itemized BOQ cost ranges, and a dynamic 4-phase construction roadmap.",
      details: [
        "Conceptual 3D block massing & density",
        "Solar microgrid & MEP sizing",
        "Phased capital expenditure & cashflow model",
      ],
      color: "from-emerald-500/20 to-teal-500/20",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5 text-amber-400" />
          The Product Journey • Zero-to-One Feasibility
        </div>
        <div className="text-xs text-slate-400 font-mono">SLIDE 05 / 11</div>
      </div>

      {/* Title */}
      <div className="space-y-1 z-10">
        <span className="text-amber-400 text-xs font-mono font-medium tracking-widest uppercase">
          End-to-End User Experience
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white">
          The Zero-to-One Workflow.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 font-light">
          {slide.subheadline}
        </p>
      </div>

      {/* 3-Step Interactive Chevron Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto z-10">
        {workflowSteps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? "bg-slate-900 border-amber-400 shadow-xl shadow-amber-950/30 scale-[1.02]"
                  : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Top Step Header */}
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${step.badgeColor}`}>
                  STEP {step.step} • {step.name.toUpperCase()}
                </span>
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-amber-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Step Title & Description */}
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {step.desc}
              </p>

              {/* Bullet Sub-details */}
              <div className="space-y-1.5 pt-3 border-t border-slate-800">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Step completion indicator */}
              <div className="mt-4 pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Duration: {idx === 0 ? "30 Secs" : idx === 1 ? "20 Secs" : "10 Secs"}</span>
                <span className="text-amber-400 font-bold">Total: ~60s</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-amber-400 font-medium">
          A friction-free pipeline designed for mobile surveyors in the field and desktop developer teams.
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
