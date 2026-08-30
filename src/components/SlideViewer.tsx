import React from "react";
import { SlideData } from "../types";
import { Slide1Title } from "./slides/Slide1Title";
import { Slide2Problem } from "./slides/Slide2Problem";
import { Slide3Solution } from "./slides/Slide3Solution";
import { Slide4Tech } from "./slides/Slide4Tech";
import { SlideDifference } from "./slides/SlideDifference";
import { SlideLiveDemoBrief } from "./slides/SlideLiveDemoBrief";
import { SlideLiveDemoScenario } from "./slides/SlideLiveDemoScenario";
import { SlideLiveDemoDecision } from "./slides/SlideLiveDemoDecision";
import { Slide5Workflow } from "./slides/Slide5Workflow";
import { Slide6BusinessModel } from "./slides/Slide6BusinessModel";
import { Slide7Market } from "./slides/Slide7Market";
import { Slide8Moat } from "./slides/Slide8Moat";
import { Slide9Team } from "./slides/Slide9Team";
import { Slide10Roadmap } from "./slides/Slide10Roadmap";
import { Slide11Closing } from "./slides/Slide11Closing";
import { motion, AnimatePresence } from "motion/react";

interface SlideViewerProps {
  slides: SlideData[];
  currentSlideIndex: number;
  onOpenDemo: () => void;
  onExportSlides: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slides,
  currentSlideIndex,
  onOpenDemo,
  onExportSlides,
}) => {
  const currentSlide = slides[currentSlideIndex];

  const renderSlideContent = (slide: SlideData) => {
    switch (slide.layout) {
      case "title":
        return <Slide1Title slide={slide} />;
      case "problem":
        return <Slide2Problem slide={slide} />;
      case "solution":
        return <Slide3Solution slide={slide} onOpenDemo={onOpenDemo} />;
      case "technology":
        return <Slide4Tech slide={slide} />;
      case "difference":
        return <SlideDifference slide={slide} />;
      case "live-demo-brief":
        return <SlideLiveDemoBrief slide={slide} />;
      case "live-demo-scenario":
        return <SlideLiveDemoScenario slide={slide} />;
      case "live-demo-decision":
        return <SlideLiveDemoDecision slide={slide} />;
      case "workflow":
        return <Slide5Workflow slide={slide} />;
      case "business-model":
        return <Slide6BusinessModel slide={slide} />;
      case "market":
        return <Slide7Market slide={slide} />;
      case "moat":
        return <Slide8Moat slide={slide} />;
      case "team":
        return <Slide9Team slide={slide} />;
      case "roadmap":
        return <Slide10Roadmap slide={slide} onOpenDemo={onOpenDemo} />;
      case "closing":
        return <Slide11Closing slide={slide} onExportSlides={onExportSlides} />;
      default:
        return <Slide1Title slide={slide} />;
    }
  };

  return (
    <>
      {/* Screen Interactive 16:9 Presentation Stage */}
      <div className="no-print w-full flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-6xl aspect-[16/9] rounded-2xl md:rounded-3xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden bg-slate-950 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="w-full h-full"
            >
              {renderSlideContent(currentSlide)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Print-Only Multi-Slide Layout for PDF Export */}
      <div className="hidden print:block w-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="w-full h-screen aspect-[16/9] print-page-break border-b border-black p-4"
          >
            {renderSlideContent(slide)}
          </div>
        ))}
      </div>
    </>
  );
};
