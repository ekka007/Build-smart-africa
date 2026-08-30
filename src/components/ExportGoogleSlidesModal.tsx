import React, { useState } from "react";
import { SlideData } from "../types";
import {
  getGoogleAccessToken,
  exportToGoogleSlides,
  downloadDeckJSON
} from "../services/googleSlidesService";
import confetti from "canvas-confetti";
import {
  X,
  Sparkles,
  ExternalLink,
  Download,
  Printer,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
}

export const ExportGoogleSlidesModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  slides,
}) => {
  const [status, setStatus] = useState<
    "idle" | "authorizing" | "creating" | "success" | "error"
  >("idle");
  const [progress, setProgress] = useState<number>(0);
  const [progressText, setProgressText] = useState<string>("");
  const [presentationUrl, setPresentationUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  if (!isOpen) return null;

  const handleExportToGoogleSlides = async () => {
    try {
      setStatus("authorizing");
      setProgress(15);
      setProgressText("Connecting to Google Slides OAuth...");
      setErrorMessage("");

      const token = await getGoogleAccessToken();

      setStatus("creating");
      const result = await exportToGoogleSlides(slides, token, (pct, text) => {
        setProgress(pct);
        setProgressText(text);
      });

      setPresentationUrl(result.presentationUrl);
      setStatus("success");
      setProgress(100);
      setProgressText("Complete!");

      // Fire celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err: any) {
      console.error("Export error:", err);
      setStatus("error");
      setErrorMessage(
        err.message ||
          "Failed to export to Google Slides. Please check OAuth permissions or use the PDF / JSON export option below."
      );
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    downloadDeckJSON(slides);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-white space-y-5 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Export to Google Slides
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                BuildAI Africa • {slides.length} Slide Deck
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

        {/* Content Body */}
        {status === "idle" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Google Workspace Integration
              </div>
              <p>
                This will create a new Google Slides presentation with all {slides.length} formatted slides, typography, color themes, and complete speaker notes in your Google Drive.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  ✔ {slides.length} Formatted Slides
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  ✔ Full Speaker Notes
                </div>
              </div>
            </div>

            <button
              onClick={handleExportToGoogleSlides}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all font-sans cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Authorize & Create Google Slides
            </button>
          </div>
        )}

        {(status === "authorizing" || status === "creating") && (
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-4">
            <Loader2 className="w-10 h-10 text-amber-400 animate-spin mx-auto" />
            <div>
              <div className="text-sm font-bold text-white font-mono">
                {progressText}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Generating layout primitives & formatting...
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="space-y-4 text-center">
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-white font-display">
                Presentation Created in Google Slides!
              </h4>
              <p className="text-xs text-slate-300">
                All 11 slides, structured layouts, and speaker notes have been published to your Google Drive.
              </p>

              <a
                href={presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-colors mt-2"
              >
                Open in Google Slides <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 space-y-2 text-xs text-red-200">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Google Slides Export Note
              </div>
              <p>{errorMessage}</p>
            </div>

            <button
              onClick={handleExportToGoogleSlides}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Retry Google Slides Connection
            </button>
          </div>
        )}

        {/* Alternative Offline Export Options */}
        <div className="pt-2 border-t border-slate-800">
          <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
            Alternative Export Formats:
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlePrintPDF}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              Print / Save PDF
            </button>
            <button
              onClick={handleDownloadJSON}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              Download Deck JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
