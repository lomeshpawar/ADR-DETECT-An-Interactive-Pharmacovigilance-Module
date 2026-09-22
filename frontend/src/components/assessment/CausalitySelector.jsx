import React from 'react';
import { CAUSALITY_OPTIONS } from '../../utils/constants';

export const CausalitySelector = ({ selectedCausality, onSelect }) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-bold text-slate-800">
        Question 5: What is the WHO-UMC Causality Category? <span className="text-rose-500">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CAUSALITY_OPTIONS.map((opt) => {
          const isSelected = selectedCausality === opt.value;
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
              <span className="text-sm font-bold block mb-1">{opt.label}</span>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{opt.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
