import React, { useEffect, useState } from 'react';
import { Tag } from 'lucide-react';
import { educationService } from '../../services/educationService';

export const ReactionTypeSelector = ({ selectedType, onSelect }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    educationService.getReactionTypes().then(res => {
      setTypes(res.data);
    });
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-bold text-slate-800">
          Question 3: Classify the Reaction Type (A - F): <span className="text-rose-500">*</span>
        </label>
        <span className="text-xs text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded">Core Feature &bull; 20 Pts</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {types.map((t) => {
          const isSelected = selectedType === t.code;
          return (
            <button
              key={t.code}
              type="button"
              onClick={() => onSelect(t.code)}
              className={`p-3.5 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? 'border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className={`w-7 h-7 rounded-lg font-black text-sm flex items-center justify-center ${
                  isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-800'
                }`}>
                  {t.code}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <span className="text-[10px] text-slate-500 font-medium">{t.mnemonic}</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                {t.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
