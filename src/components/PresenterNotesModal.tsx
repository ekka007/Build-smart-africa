import React, { useState, useEffect } from "react";
import { SlideData } from "../types";
import {
  X,
  Mic,
  Clock,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Volume2,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  currentSlideIndex: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onSelectSlide: (idx: number) => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onNextSlide,
  onPrevSlide,
}) => {
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<"md" | "lg" | "xl">("lg");

  useEffect(() => {
    let interval: any = null;
    if (isRunning && isOpen) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isOpen]);

  if (!isOpen) return null;

  const currentSlide = slides[currentSlideIndex];
  const nextSlide = slides[currentSlideIndex + 1];

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${String(mins).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-white space-y-5">
        {/* Header with Pitch Timer & Controls */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Presenter View & Speaker Teleprompter
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Slide {currentSlideIndex + 1} of {slides.length} • {currentSlide.category}
              </p>
            </div>
          </div>

          {/* Stopwatch Controls */}
          <div className="flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 font-mono text-base font-bold text-amber-400">
              <Clock className="w-4 h-4 text-amber-400" />
              {formatTime(timerSeconds)}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title={isRunning ? "Pause Timer" : "Start Timer"}
              >
                {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setTimerSeconds(0)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Presenter Layout: Left Teleprompter / Right Slide Previews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Speaker Teleprompter Notes */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5" /> Pitch Script / Spoken Delivery
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-slate-400 text-[11px]">Text Size:</span>
                <button
                  onClick={() => setFontSize("md")}
                  className={`px-2 py-0.5 rounded ${
                    fontSize === "md" ? "bg-amber-500 text-black font-bold" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize("lg")}
                  className={`px-2 py-0.5 rounded ${
                    fontSize === "lg" ? "bg-amber-500 text-black font-bold" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize("xl")}
                  className={`px-2 py-0.5 rounded ${
                    fontSize === "xl" ? "bg-amber-500 text-black font-bold" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  A++
                </button>
              </div>
            </div>

            {/* Teleprompter Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 shadow-inner min-h-[220px] flex flex-col justify-between">
              <p
                className={`text-slate-100 font-serif leading-relaxed tracking-wide ${
                  fontSize === "md"
                    ? "text-base"
                    : fontSize === "lg"
                    ? "text-lg md:text-xl font-medium"
                    : "text-xl md:text-2xl font-medium"
                }`}
              >
                "{currentSlide.speakerNotes}"
              </p>

              {currentSlide.keyTakeaway && (
                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span><strong>Core Takeaway:</strong> {currentSlide.keyTakeaway}</span>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={onPrevSlide}
                disabled={currentSlideIndex === 0}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold font-mono flex items-center gap-1.5 transition-colors disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Slide
              </button>

              <span className="text-xs font-mono text-slate-400">
                Target Timing: ~{currentSlide.durationSeconds || 45} seconds
              </span>

              <button
                onClick={onNextSlide}
                disabled={currentSlideIndex === slides.length - 1}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-extrabold font-mono flex items-center gap-1.5 transition-colors disabled:opacity-40"
              >
                Next Slide <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Slide Context & Next Slide Preview */}
          <div className="lg:col-span-4 space-y-4">
            {/* Current Slide Info */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                Current Headline
              </span>
              <h4 className="text-sm font-bold text-white leading-snug">
                {currentSlide.headline}
              </h4>
              {currentSlide.subheadline && (
                <p className="text-xs text-slate-400 font-light">
                  {currentSlide.subheadline}
                </p>
              )}
            </div>

            {/* Next Slide Preview */}
            {nextSlide ? (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
                  Up Next: Slide {currentSlideIndex + 2} • {nextSlide.category}
                </span>
                <h5 className="text-xs font-bold text-slate-200 line-clamp-2">
                  {nextSlide.headline}
                </h5>
                <p className="text-[11px] text-slate-400 italic line-clamp-2">
                  "{nextSlide.speakerNotes}"
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center text-xs text-emerald-300 font-mono">
                Final Slide • Q&A / Closing Ask
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
