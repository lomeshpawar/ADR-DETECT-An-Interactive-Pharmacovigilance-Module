import React from 'react';
import { ShieldCheck, CheckSquare, Square } from 'lucide-react';
import { INTERVENTION_OPTIONS } from '../../utils/constants';

export const InterventionSelector = ({ selectedInterventions = [], onToggle }) => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-purple-900 text-xs sm:text-sm">
        <strong>Clinical Action Plan:</strong> Select all pharmacist interventions appropriate for this patient case. Multiple selections are permitted.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {INTERVENTION_OPTIONS.map((opt) => {
          const isSelected = selectedInterventions.includes(opt.id);
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onToggle(opt.id)}
              className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                isSelected
                  ? 'border-purple-500 bg-purple-50/80 text-purple-950 font-bold ring-2 ring-purple-500/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSelected ? (
                  <CheckSquare className="w-5 h-5 text-purple-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold">{opt.label}</h4>
                <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">{opt.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
