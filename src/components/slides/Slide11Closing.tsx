import React from "react";
import { SlideData } from "../../types";
import { PITCH_DECK_META } from "../../data/pitchDeckData";
import {
  Sparkles,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Calendar,
  CheckCircle2
} from "lucide-react";

interface SlideProps {
  slide: SlideData;
  onExportSlides?: () => void;
}

export const Slide11Closing: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Google Africa Applied AI Lab • Closing Vision
        </div>
        <div className="text-xs text-slate-400 font-mono">
          SLIDE {String(slide.slideNumber).padStart(2, "0")} / 14
        </div>
      </div>

      {/* Main Closing Card */}
      <div className="max-w-4xl mx-auto my-auto text-center space-y-6 z-10">
        <div className="space-y-3">
          <span className="text-amber-400 font-mono font-bold text-sm tracking-widest uppercase">
            The Future of African Urbanization
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
            Let’s Build Africa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400">Smarter</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            {slide.subheadline}
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-amber-400 font-mono font-bold text-xs uppercase mb-1">FOR DEVELOPERS</div>
            <div className="text-sm font-bold text-white">Instant Feasibility</div>
            <div className="text-xs text-slate-400 mt-1">Compress 45 days of planning into 60 verified seconds.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-emerald-400 font-mono font-bold text-xs uppercase mb-1">FOR BANKS</div>
            <div className="text-sm font-bold text-white">Bankability Score API</div>
            <div className="text-xs text-slate-400 mt-1">Underwrite construction credit with automated risk metrics.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-blue-400 font-mono font-bold text-xs uppercase mb-1">FOR INVESTORS</div>
            <div className="text-sm font-bold text-white">Massive Market Wedge</div>
            <div className="text-xs text-slate-400 mt-1">Foundational data layer for a $1.4T construction wave.</div>
          </div>
        </div>

        {/* Website only row */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl flex items-center justify-center text-xs font-mono">
          <a
            href={PITCH_DECK_META.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-200 hover:text-amber-400 text-sm font-medium transition-colors group px-4 py-1"
          >
            <Globe className="w-4 h-4 text-emerald-400 group-hover:text-amber-400 transition-colors" />
            <span className="tracking-wide">{PITCH_DECK_META.website}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400 z-10">
        <span className="text-emerald-400 font-medium flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" /> Google Africa Applied AI Lab • Accra Demo Day
        </span>
        <span className="font-mono text-slate-500">BuildAI Africa</span>
      </div>
    </div>
  );
};
