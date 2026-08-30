import React, { useState } from "react";
import { SlideData } from "../types";
import { X, Save, Edit3, Plus, Trash2, CheckCircle } from "lucide-react";

interface EditSlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  onSaveSlide: (updated: SlideData) => void;
}

export const EditSlideModal: React.FC<EditSlideModalProps> = ({
  isOpen,
  onClose,
  slide,
  onSaveSlide,
}) => {
  const [headline, setHeadline] = useState<string>(slide.headline);
  const [subheadline, setSubheadline] = useState<string>(slide.subheadline || "");
  const [speakerNotes, setSpeakerNotes] = useState<string>(slide.speakerNotes);
  const [keyTakeaway, setKeyTakeaway] = useState<string>(slide.keyTakeaway || "");
  const [category, setCategory] = useState<string>(slide.category);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSave = () => {
    const updated: SlideData = {
      ...slide,
      headline,
      subheadline,
      speakerNotes,
      keyTakeaway,
      category,
    };
    onSaveSlide(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-white space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Edit Slide {slide.slideNumber} Content
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Updates live in presentation & Google Slides export
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

        {/* Form Fields */}
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-400 font-mono uppercase mb-1">
              Category Tag:
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-400 font-mono uppercase mb-1">
              Headline:
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-bold text-sm focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-400 font-mono uppercase mb-1">
              Subheadline / Context:
            </label>
            <input
              type="text"
              value={subheadline}
              onChange={(e) => setSubheadline(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-400 font-mono uppercase mb-1">
              Speaker Notes (Spoken Delivery Script):
            </label>
            <textarea
              rows={4}
              value={speakerNotes}
              onChange={(e) => setSpeakerNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 leading-relaxed focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-400 font-mono uppercase mb-1">
              Core Takeaway:
            </label>
            <input
              type="text"
              value={keyTakeaway}
              onChange={(e) => setKeyTakeaway(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-1.5 transition-colors shadow-lg shadow-amber-500/20"
          >
            {savedSuccess ? (
              <>
                <CheckCircle className="w-4 h-4 text-black" /> Saved!
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
