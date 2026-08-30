import React from "react";
import { SlideData } from "../../types";
import { TEAM_MEMBERS } from "../../data/pitchDeckData";
import {
  Users,
  Award,
  Code2,
  Building,
  CheckCircle2,
  Briefcase,
  Sparkles,
  MapPin
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
}

export const Slide9Team: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white select-none">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5 text-amber-400" />
          The Leadership & Domain Team
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Title */}
      <div className="space-y-1 z-10">
        <span className="text-amber-400 text-xs font-mono font-medium tracking-widest uppercase">
          Domain + AI Engineering
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-white">
          Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400">Operators Who Understand the Ground</span>.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 font-light">
          {slide.subheadline}
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto z-10">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              {/* Member Avatar / Role Badge */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 font-bold text-lg font-display">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-amber-400">
                  {member.domain}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                {member.name}
              </h3>
              <div className="text-xs font-semibold text-emerald-400 font-mono mb-2">
                {member.role}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {member.background}
              </p>
            </div>

            {/* Skills Pills */}
            <div className="pt-3 border-t border-slate-800 space-y-1.5">
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advisory Council Callout */}
      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs z-10">
        <div className="flex items-center gap-2 text-slate-300">
          <Award className="w-4 h-4 text-amber-400 shrink-0" />
          <span><strong>Advisory Network:</strong> Former Lagos State Urban Planning Director • Ghana Real Estate Developers Association (GREDA) Leadership.</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 font-semibold shrink-0">
          Deep Local Grounding
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-amber-400 font-medium">
          We combine ground-level construction execution with Google DeepMind AI architectures.
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
