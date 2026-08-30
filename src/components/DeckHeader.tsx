import React from "react";
import { SlideData } from "../types";
import {
  Sparkles,
  LayoutGrid,
  Mic,
  Maximize2,
  Minimize2,
  FileSpreadsheet,
  Play,
  Brain,
  Edit3,
  ChevronLeft,
  ChevronRight,
  Printer,
  Compass
} from "lucide-react";

interface DeckHeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  currentSlide: SlideData;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onOpenExport: () => void;
  onOpenGrid: () => void;
  onOpenNotes: () => void;
  onOpenDemo: () => void;
  onOpenCoach: () => void;
  onOpenEdit: () => void;
}

export const DeckHeader: React.FC<DeckHeaderProps> = ({
  currentSlideIndex,
  totalSlides,
  currentSlide,
  isFullscreen,
  onPrev,
  onNext,
  onToggleFullscreen,
  onOpenExport,
  onOpenGrid,
  onOpenNotes,
  onOpenDemo,
  onOpenCoach,
  onOpenEdit,
}) => {
  return (
    <header className="no-print w-full bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md px-4 py-3 sticky top-0 z-40 flex items-center justify-between gap-4">
      {/* Brand & Tagline */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-extrabold font-display shadow-md shadow-amber-500/20">
            B
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm font-display text-white tracking-tight">
                BuildAI Africa
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold">
                Google DeepMind
              </span>
            </div>
            <p className="hidden md:block text-[10px] text-slate-400 font-light truncate max-w-xs">
              Intelligence for Africa’s Next Generation of Development
            </p>
          </div>
        </div>
      </div>

      {/* Center Slide Navigation Controls */}
      <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-2xl border border-slate-800">
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 transition-colors"
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenGrid}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-slate-800 text-xs font-mono text-slate-200 transition-colors"
          title="Slide Overview Grid"
        >
          <span className="text-amber-400 font-bold">
            {String(currentSlideIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{String(totalSlides).padStart(2, "0")}</span>
          <span className="hidden lg:inline text-[11px] text-slate-400 ml-1 font-sans">
            • {currentSlide.category}
          </span>
        </button>

        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 transition-colors"
          title="Next Slide (Right Arrow / Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Action Tools */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Live Feasibility Demo Simulator */}
        <button
          onClick={onOpenDemo}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all shadow-sm"
          title="Try Live AI Feasibility Simulator"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden lg:inline">Co-Pilot Demo</span>
        </button>

        {/* AI Pitch Coach */}
        <button
          onClick={onOpenCoach}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/40 text-indigo-300 text-xs font-semibold transition-all shadow-sm"
          title="AI Pitch & Q&A Coach"
        >
          <Brain className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden xl:inline">Pitch Coach</span>
        </button>

        {/* Presenter Notes & Teleprompter */}
        <button
          onClick={onOpenNotes}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
          title="Presenter Notes & Pitch Timer ('P')"
        >
          <Mic className="w-4 h-4 text-amber-400" />
        </button>

        {/* Slide Overview Grid */}
        <button
          onClick={onOpenGrid}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
          title="Grid View ('G')"
        >
          <LayoutGrid className="w-4 h-4 text-slate-300" />
        </button>

        {/* Edit Slide */}
        <button
          onClick={onOpenEdit}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
          title="Edit Slide Content"
        >
          <Edit3 className="w-4 h-4 text-slate-300" />
        </button>

        {/* Fullscreen / Theater */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
          title="Toggle Fullscreen ('F')"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Export to Google Slides - Prominent Glow */}
        <button
          onClick={onOpenExport}
          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all font-sans cursor-pointer shrink-0"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Export Slides</span>
        </button>
      </div>
    </header>
  );
};
