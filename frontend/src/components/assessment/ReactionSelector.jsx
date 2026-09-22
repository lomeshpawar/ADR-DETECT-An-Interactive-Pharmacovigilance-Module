import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ReactionSelector = ({ selectedReaction, onSelect, customOptions = [] }) => {
  const defaultOptions = [
    'Skin rash',
    'Dry cough',
    'Rhabdomyolysis',
    'Cholestatic jaundice',
    'Digoxin toxicity',
    'Hypoglycemia',
    'Postural hypotension',
    'Gastrointestinal bleeding'
  ];

  const options = Array.from(new Set([...customOptions, ...defaultOptions]));

  return (
    <div className="space-y-3">
      <label className="block text-sm font-bold text-slate-800">
        Question 2: What adverse reaction has occurred? <span className="text-rose-500">*</span>
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {options.map((option) => {
          const isSelected = selectedReaction === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`p-3 rounded-xl border text-xs sm:text-sm font-bold text-center transition-all ${
                isSelected
                  ? 'border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
