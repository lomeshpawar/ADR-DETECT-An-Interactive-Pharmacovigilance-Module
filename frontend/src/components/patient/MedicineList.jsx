import React from 'react';
import { Pill } from 'lucide-react';
import { Card } from '../common/Card';

export const MedicineList = ({ medications = [] }) => {
  return (
    <Card title="Current & Recent Medication Regimen" subtitle="Review doses, frequencies, and start dates carefully" icon={Pill}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50">
              <th className="py-3 px-4 rounded-l-lg">Medication</th>
              <th className="py-3 px-3">Dose & Route</th>
              <th className="py-3 px-3">Frequency</th>
              <th className="py-3 px-3">Initiation</th>
              <th className="py-3 px-4 rounded-r-lg">Indication</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {medications.map((med, idx) => (
              <tr key={med.id || idx} className="hover:bg-blue-50/30 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {med.name}
                </td>
                <td className="py-3 px-3 text-slate-700">{med.dose} ({med.route || 'Oral'})</td>
                <td className="py-3 px-3 font-semibold text-slate-800">{med.frequency}</td>
                <td className="py-3 px-3 text-slate-600">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    med.startDay && med.startDay.toLowerCase().includes('day 1') || med.startDay.toLowerCase().includes('days ago')
                      ? 'bg-amber-100 text-amber-900 border border-amber-200'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {med.startDay}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">{med.indication}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
