import React from 'react';
import { Activity, Clock } from 'lucide-react';
import { Card } from '../common/Card';

export const SymptomsList = ({ symptoms = [] }) => {
  return (
    <Card title="Symptom Development Timeline" icon={Clock}>
      <div className="space-y-3">
        {symptoms.map((sym, idx) => (
          <div key={sym.id || idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 text-xs font-bold shrink-0">
              {sym.dayOnset}
            </div>
            <div className="flex-1 text-sm text-slate-800 font-medium">
              {sym.description}
            </div>
            {sym.severity && sym.severity !== 'None' && (
              <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                sym.severity === 'Severe' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {sym.severity}
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
