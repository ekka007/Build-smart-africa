import React, { useState, useEffect, useCallback } from "react";
import { SlideData } from "./types";
import { INITIAL_SLIDES } from "./data/pitchDeckData";
import { DeckHeader } from "./components/DeckHeader";
import { SlideViewer } from "./components/SlideViewer";
import { ExportGoogleSlidesModal } from "./components/ExportGoogleSlidesModal";
import { FeasibilityDemoModal } from "./components/FeasibilityDemoModal";
import { PitchCoachModal } from "./components/PitchCoachModal";
import { PresenterNotesModal } from "./components/PresenterNotesModal";
import { SlideGridModal } from "./components/SlideGridModal";
import { EditSlideModal } from "./components/EditSlideModal";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Brain,
  Mic,
  LayoutGrid,
  FileSpreadsheet
} from "lucide-react";

export default function App() {
  const [slides, setSlides] = useState<SlideData[]>(INITIAL_SLIDES);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Modals
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [isCoachModalOpen, setIsCoachModalOpen] = useState<boolean>(false);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState<boolean>(false);
  const [isGridModalOpen, setIsGridModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "p") {
        e.preventDefault();
        setIsNotesModalOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === "g") {
        e.preventDefault();
        setIsGridModalOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === "c") {
        e.preventDefault();
        setIsCoachModalOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        setIsDemoModalOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === "e") {
        e.preventDefault();
        setIsEditModalOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsExportModalOpen(false);
        setIsDemoModalOpen(false);
        setIsCoachModalOpen(false);
        setIsNotesModalOpen(false);
        setIsGridModalOpen(false);
        setIsEditModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const handleSaveSlide = (updated: SlideData) => {
    setSlides((prev) =>
      prev.map((s) => (s.id === updated.id ? updated : s))
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      {/* Top Header Navigation */}
      <DeckHeader
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        isFullscreen={isFullscreen}
        onPrev={handlePrev}
        onNext={handleNext}
        onToggleFullscreen={toggleFullscreen}
        onOpenExport={() => setIsExportModalOpen(true)}
        onOpenGrid={() => setIsGridModalOpen(true)}
        onOpenNotes={() => setIsNotesModalOpen(true)}
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenCoach={() => setIsCoachModalOpen(true)}
        onOpenEdit={() => setIsEditModalOpen(true)}
      />

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        <SlideViewer
          slides={slides}
          currentSlideIndex={currentSlideIndex}
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onExportSlides={() => setIsExportModalOpen(true)}
        />
      </main>

      {/* Bottom Floating Control Ribbon (For touch devices & quick access) */}
      <footer className="no-print w-full py-2.5 px-4 bg-slate-950/80 border-t border-slate-800/80 backdrop-blur-md flex items-center justify-between text-xs z-30">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
          <span className="hidden md:inline">Key Shortcuts:</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Space/→</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">P (Notes)</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">G (Grid)</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">F (Full)</span>
        </div>

        {/* Center pagination dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                currentSlideIndex === idx
                  ? "w-6 bg-amber-400"
                  : "w-1.5 bg-slate-700 hover:bg-slate-500"
              }`}
              title={`Jump to Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Quick Floating Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ExportGoogleSlidesModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        slides={slides}
      />

      <FeasibilityDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <PitchCoachModal
        isOpen={isCoachModalOpen}
        onClose={() => setIsCoachModalOpen(false)}
        currentSlide={currentSlide}
        slideIndex={currentSlideIndex}
      />

      <PresenterNotesModal
        isOpen={isNotesModalOpen}
        onClose={() => setIsNotesModalOpen(false)}
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        onNextSlide={handleNext}
        onPrevSlide={handlePrev}
        onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
      />

      <SlideGridModal
        isOpen={isGridModalOpen}
        onClose={() => setIsGridModalOpen(false)}
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
      />

      <EditSlideModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        slide={currentSlide}
        onSaveSlide={handleSaveSlide}
      />
    </div>
  );
}
