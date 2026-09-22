import React from 'react';
import { SEVERITY_OPTIONS } from '../../utils/constants';

export const SeveritySelector = ({ selectedSeverity, onSelect }) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-bold text-slate-800">
        Question 4: What is the severity of the reaction? <span className="text-rose-500">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {SEVERITY_OPTIONS.map((opt) => {
          const isSelected = selectedSeverity === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold ring-2 ring-amber-500/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold">{opt.label}</span>
                <span className={`w-3 h-3 rounded-full ${
                  opt.value === 'MILD' ? 'bg-emerald-500' : opt.value === 'MODERATE' ? 'bg-amber-500' : 'bg-rose-500'
                }`} />
              </div>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">{opt.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
