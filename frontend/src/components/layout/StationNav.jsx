import React from 'react';
import { Check, ChevronRight, User, Search, AlertTriangle, ShieldCheck, FileText } from 'lucide-react';
import { STATIONS } from '../../utils/constants';

const ICONS = {
  1: User,
  2: Search,
  3: AlertTriangle,
  4: ShieldCheck,
  5: FileText
};

export const StationNav = ({ currentStation, onSelectStation, maxAllowedStation = 5 }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3 md:p-4 mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 md:gap-3">
        {STATIONS.map((station) => {
          const Icon = ICONS[station.id];
          const isCurrent = currentStation === station.id;
          const isPassed = currentStation > station.id;
          const isClickable = station.id <= maxAllowedStation;

          let colorClasses = 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100';
          if (isCurrent) {
            if (station.id === 1) colorClasses = 'border-blue-500 bg-blue-50/80 text-blue-700 shadow-sm ring-2 ring-blue-500/20';
            if (station.id === 2) colorClasses = 'border-emerald-500 bg-emerald-50/80 text-emerald-700 shadow-sm ring-2 ring-emerald-500/20';
            if (station.id === 3) colorClasses = 'border-amber-500 bg-amber-50/80 text-amber-800 shadow-sm ring-2 ring-amber-500/20';
            if (station.id === 4) colorClasses = 'border-purple-500 bg-purple-50/80 text-purple-700 shadow-sm ring-2 ring-purple-500/20';
            if (station.id === 5) colorClasses = 'border-rose-500 bg-rose-50/80 text-rose-700 shadow-sm ring-2 ring-rose-500/20';
          } else if (isPassed) {
            colorClasses = 'border-emerald-200 bg-emerald-50/40 text-emerald-800';
          }

          return (
            <button
              key={station.id}
              onClick={() => isClickable && onSelectStation(station.id)}
              disabled={!isClickable}
              className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${colorClasses} ${
                !isClickable ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs ${
                isPassed 
                  ? 'bg-emerald-600 text-white' 
                  : isCurrent 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-200 text-slate-600'
              }`}>
                {isPassed ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">
                  {station.badge}
                </span>
                <span className="text-xs font-bold truncate block">
                  {station.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
