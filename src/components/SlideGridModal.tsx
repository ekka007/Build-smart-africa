import React from "react";
import { SlideData } from "../types";
import { X, LayoutGrid, Check } from "lucide-react";

interface SlideGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideGridModal: React.FC<SlideGridModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-white space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Pitch Deck Slide Overview ({slides.length} Slides)
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Click any slide to jump directly to it
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 11 Slide Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slides.map((slide, idx) => {
            const isCurrent = currentSlideIndex === idx;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`relative aspect-[16/10] rounded-xl p-3.5 border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
                  isCurrent
                    ? "bg-slate-950 border-amber-400 shadow-xl shadow-amber-950/40 ring-2 ring-amber-400/40"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-600 hover:bg-slate-950"
                }`}
              >
                {/* Slide Number & Category */}
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-amber-400 font-bold">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 uppercase">
                    {slide.category}
                  </span>
                </div>

                {/* Headline Preview */}
                <div className="my-auto">
                  <div className="text-xs font-bold text-slate-100 line-clamp-2 group-hover:text-amber-300 transition-colors">
                    {slide.headline}
                  </div>
                  {slide.subheadline && (
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-1 font-light">
                      {slide.subheadline}
                    </div>
                  )}
                </div>

                {/* Footer preview */}
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 pt-1 border-t border-slate-900">
                  <span>{slide.durationSeconds}s</span>
                  {isCurrent && (
                    <span className="text-amber-400 font-bold flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> ACTIVE
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
