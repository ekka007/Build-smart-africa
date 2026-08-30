import React, { useState } from "react";
import { SlideData } from "../types";
import {
  X,
  Brain,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Award,
  Loader2,
  Send,
  Zap
} from "lucide-react";

interface PitchCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: SlideData;
  slideIndex: number;
}

export const PitchCoachModal: React.FC<PitchCoachModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  slideIndex,
}) => {
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [coachResponse, setCoachResponse] = useState<any>(null);

  if (!isOpen) return null;

  const handleAskCoach = async (customPrompt?: string) => {
    setLoading(true);
    setCoachResponse(null);

    const query = customPrompt || question || "Give me top delivery advice and tough VC questions for this slide.";

    try {
      const res = await fetch("/api/ai/pitch-coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slideIndex,
          slideTitle: currentSlide.headline,
          currentNotes: currentSlide.speakerNotes,
          userQuestion: query,
        }),
      });

      const json = await res.json();
      setCoachResponse(json);
    } catch (err: any) {
      console.warn("Coach error:", err);
      setCoachResponse({
        deliveryTip:
          "Open with high conviction. Emphasize that African real estate development is held back not by lack of capital, but by lack of structured ground intelligence.",
        suggestedInvestorQuestion:
          "Why won't top commercial banks build this in-house or rely on external audit firms?",
        winningAnswer:
          "Audit firms take 60 days and cost $30,000 per report. Banks want an API-native standard that underwrites in minutes while standardizing risk across their loan book.",
        suggestedPunchline:
          "BuildAI transforms unindexed analog land into verified, bankable infrastructure in 60 seconds.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-white space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                AI Pitch & Investor Q&A Coach
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Coaching for Slide {slideIndex + 1}: {currentSlide.headline.slice(0, 40)}...
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

        {/* Current Speaker Notes preview */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
          <span className="text-amber-400 font-mono text-[10px] uppercase font-bold">
            Current Speaker Notes:
          </span>
          <p className="text-slate-300 mt-1 italic leading-relaxed">
            "{currentSlide.speakerNotes}"
          </p>
        </div>

        {/* Quick Trigger Chips */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => handleAskCoach("What is the toughest VC question for this slide?")}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            ⚡ Hardest Investor Question
          </button>
          <button
            onClick={() => handleAskCoach("How should I pace my voice and body language here?")}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            🎙️ Delivery & Pacing Tip
          </button>
          <button
            onClick={() => handleAskCoach("Give me a memorable 10-second punchline.")}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            ✨ 10-Second Punchline
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="p-8 text-center space-y-3">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
            <div className="text-xs text-slate-400 font-mono">
              Analyzing slide with Gemini Investor Persona...
            </div>
          </div>
        )}

        {/* Coach Output */}
        {coachResponse && !loading && (
          <div className="space-y-3 animate-in fade-in duration-300">
            {coachResponse.deliveryTip && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-indigo-500/30 text-xs space-y-1">
                <span className="text-indigo-400 font-mono font-bold text-[10px] uppercase flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-indigo-400" /> Delivery & Tone Tip
                </span>
                <p className="text-slate-200 leading-relaxed">
                  {coachResponse.deliveryTip}
                </p>
              </div>
            )}

            {coachResponse.suggestedInvestorQuestion && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 text-xs space-y-1">
                <span className="text-amber-400 font-mono font-bold text-[10px] uppercase flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Tough Investor Question
                </span>
                <p className="text-white font-semibold leading-relaxed">
                  "{coachResponse.suggestedInvestorQuestion}"
                </p>
                {coachResponse.winningAnswer && (
                  <div className="pt-2 mt-2 border-t border-slate-800 text-slate-300">
                    <span className="text-emerald-400 font-mono font-bold text-[10px] uppercase block mb-0.5">
                      Winning Response:
                    </span>
                    {coachResponse.winningAnswer}
                  </div>
                )}
              </div>
            )}

            {coachResponse.suggestedPunchline && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-medium">
                  <strong>Punchline:</strong> "{coachResponse.suggestedPunchline}"
                </span>
              </div>
            )}
          </div>
        )}

        {/* Custom prompt input */}
        <div className="pt-2 flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAskCoach()}
            placeholder="Ask anything about pitching this slide..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 font-sans"
          />
          <button
            onClick={() => handleAskCoach()}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <Send className="w-3.5 h-3.5" /> Ask
          </button>
        </div>
      </div>
    </div>
  );
};
