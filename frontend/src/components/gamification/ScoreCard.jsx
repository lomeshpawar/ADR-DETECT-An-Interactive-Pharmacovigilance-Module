import React from 'react';
import { Award, Star, CheckCircle, AlertTriangle } from 'lucide-react';

export const ScoreCard = ({ result }) => {
  if (!result) return null;

  const total = result.totalScore || 0;
  const max = result.maxScore || 100;
  const stars = result.stars || 1;
  const percentage = Math.round(result.percentage || (total / max) * 100);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-center">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-extrabold uppercase tracking-widest border border-blue-400/30 mb-3">
          Pharmacovigilance Case Solved
        </span>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
          {result.caseTitle || 'Case Completed'}
        </h2>

        {/* Score badge */}
        <div className="my-6 inline-flex flex-col items-center justify-center">
          <div className="text-6xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            {total}
            <span className="text-2xl sm:text-3xl font-bold text-slate-400">/{max}</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-blue-200 mt-1 uppercase tracking-wider">
            {percentage}% Total Accuracy
          </span>
        </div>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`w-7 h-7 ${
                s <= stars ? 'text-amber-400 fill-amber-400 drop-shadow-md' : 'text-slate-700'
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          {total >= 85
            ? 'Outstanding investigation! You demonstrated excellent pharmacovigilance reasoning and accurate clinical decision-making.'
            : total >= 65
            ? 'Good attempt! You identified key adverse reaction features. Review the detailed feedback below to master causality and classification.'
            : 'Case completed. Review the pharmacological explanation and learning points below to strengthen your ADR detection skills.'}
        </p>
      </div>
    </div>
  );
};
