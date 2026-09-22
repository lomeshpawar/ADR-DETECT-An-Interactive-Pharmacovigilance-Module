import React from 'react';
import { Eye, CheckCircle2, Lock, Pill, Clock, FileText, AlertCircle, Activity, RefreshCw } from 'lucide-react';

const CATEGORY_ICONS = {
  MEDICINE_HISTORY: Pill,
  SYMPTOM_TIMELINE: Clock,
  PAST_HISTORY: FileText,
  ALLERGY_HISTORY: AlertCircle,
  LAB_REPORTS: Activity,
  DECHALLENGE_RECHALLENGE: RefreshCw
};

const CATEGORY_NAMES = {
  MEDICINE_HISTORY: '1. Medicine History',
  SYMPTOM_TIMELINE: '2. Symptom Timeline',
  PAST_HISTORY: '3. Past Medical History',
  ALLERGY_HISTORY: '4. Allergy History',
  LAB_REPORTS: '5. Lab Reports & Diagnostics',
  DECHALLENGE_RECHALLENGE: '6. Dechallenge / Rechallenge'
};

export const ClueCard = ({ clue, isDiscovered, onDiscover }) => {
  const Icon = CATEGORY_ICONS[clue.category] || Activity;
  const categoryLabel = CATEGORY_NAMES[clue.category] || clue.category;

  return (
    <div
      onClick={() => !isDiscovered && onDiscover(clue.id)}
      className={`rounded-2xl border transition-all duration-300 p-5 ${
        isDiscovered
          ? 'bg-white border-emerald-300 shadow-sm'
          : 'bg-gradient-to-br from-slate-50 to-emerald-50/40 border-slate-200 hover:border-emerald-400 hover:shadow-md cursor-pointer group'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold ${
            isDiscovered ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors'
          }`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {categoryLabel}
            </span>
            <h4 className="text-sm font-bold text-slate-900">{clue.title}</h4>
          </div>
        </div>

        <div>
          {isDiscovered ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Revealed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 group-hover:border-emerald-400 group-hover:text-emerald-700 transition-colors">
              <Eye className="w-3.5 h-3.5" /> Click to Reveal
            </span>
          )}
        </div>
      </div>

      <div className="mt-3">
        {isDiscovered ? (
          <div className="text-sm text-slate-700 bg-emerald-50/40 p-3.5 rounded-xl border border-emerald-100/80 leading-relaxed animate-in fade-in duration-300">
            {clue.content}
          </div>
        ) : (
          <div className="h-16 bg-slate-100/80 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-xs font-semibold text-slate-400 gap-2 group-hover:border-emerald-400 group-hover:text-emerald-600 transition-colors">
            <Lock className="w-4 h-4" /> Click card to unlock clinical clue
          </div>
        )}
      </div>
    </div>
  );
};
