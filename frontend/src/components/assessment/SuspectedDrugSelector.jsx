import React from 'react';
import { Pill, Check } from 'lucide-react';

export const SuspectedDrugSelector = ({ medications = [], selectedDrug, onSelect }) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-bold text-slate-800">
        Question 1: Which drug do you suspect is causing the adverse reaction? <span className="text-rose-500">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {medications.map((med) => {
          const isSelected = selectedDrug === med.name;
          return (
            <button
              key={med.id || med.name}
              type="button"
              onClick={() => onSelect(med.name)}
              className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                isSelected
                  ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold ring-2 ring-amber-500/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Pill className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-sm block">{med.name}</span>
                  <span className="text-[11px] text-slate-500 font-normal">{med.dose} &bull; {med.frequency}</span>
                </div>
              </div>
              {isSelected && <Check className="w-4 h-4 text-amber-600 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
