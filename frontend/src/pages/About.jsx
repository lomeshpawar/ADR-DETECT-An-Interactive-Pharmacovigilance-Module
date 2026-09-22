import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from '../components/common/Card';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">About ADR-DETECT</h1>
        <p className="text-sm text-slate-600">An Interactive Pharmacovigilance Module</p>
      </div>

      <Card>
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>ADR-DETECT</strong> is a specialized educational web simulation designed to bridge the gap between theoretical pharmacology education and real-world clinical pharmacovigilance practice.
          </p>
          <p>
            Inspired by hands-on physical educational models featuring 5 distinct colored stations, this platform digitalizes the complete investigation process into an engaging, data-driven experience.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">Key Pedagogical Objectives:</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Understand patient cases and identify newly added vs chronic medications.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Investigate timelines, dechallenge/rechallenge data, and laboratory findings.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Classify adverse reactions into Type A, B, C, D, E, or F.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Apply WHO-UMC standardized causality assessment criteria.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Formulate pharmacist interventions and submit standardized digital ADR reports.</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};
