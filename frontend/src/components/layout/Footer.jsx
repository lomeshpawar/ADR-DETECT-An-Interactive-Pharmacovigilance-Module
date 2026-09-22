import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
      {/* Medical Safety Disclaimer Ribbon */}
      <div className="bg-amber-950/70 border-b border-amber-800/60 px-4 py-3 text-center text-xs text-amber-200/90">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Educational Simulation:</strong> ADR-DETECT is strictly for educational and training purposes. It does not replace professional medical judgment, official ADR reporting systems (PvPI / MedWatch), or institutional clinical protocols.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-white tracking-wide">ADR-DETECT</span>
            <span className="text-xs text-slate-400">| Detect &rarr; Assess &rarr; Intervene &rarr; Report</span>
          </div>

          <p className="text-xs text-slate-400">
            &ldquo;Good Pharmacovigilance Helps in Patient Safety&rdquo;
          </p>

          <p className="text-xs text-slate-500">
            Interactive Pharmacovigilance Educational Platform
          </p>
        </div>
      </div>
    </footer>
  );
};
