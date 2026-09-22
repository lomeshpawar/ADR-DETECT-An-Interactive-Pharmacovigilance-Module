import React from 'react';

export const ProgressBar = ({ current, total, label = 'Progress' }) => {
  const percentage = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1 text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span>{current} / {total} ({percentage}%)</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
