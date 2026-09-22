import React from 'react';
import { Search, Scale, ShieldCheck, FileText, RotateCw, Activity } from 'lucide-react';
import { Card } from '../common/Card';

export const PharmacovigilanceCycle = () => {
  const steps = [
    { num: '01', title: 'Detect', desc: 'Identify unexpected symptoms and abnormal timing sequences.', icon: Search, color: 'border-blue-500 bg-blue-50 text-blue-700' },
    { num: '02', title: 'Assess', desc: 'Determine causality, severity, and A-F reaction classification.', icon: Scale, color: 'border-amber-500 bg-amber-50 text-amber-700' },
    { num: '03', title: 'Intervene', desc: 'Discontinue drug, adjust dose, or provide antidote/care.', icon: ShieldCheck, color: 'border-purple-500 bg-purple-50 text-purple-700' },
    { num: '04', title: 'Report', desc: 'Submit standardized ADR forms to national pharmacovigilance centers.', icon: FileText, color: 'border-rose-500 bg-rose-50 text-rose-700' },
    { num: '05', title: 'Monitor & Prevent', desc: 'Track safety signals, update labeling, and safeguard public health.', icon: RotateCw, color: 'border-emerald-500 bg-emerald-50 text-emerald-700' }
  ];

  return (
    <Card title="The Pharmacovigilance (PV) Cycle" subtitle="Continuous systematic cycle ensuring drug safety and patient protection" icon={RotateCw}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className={`p-4 rounded-2xl border ${s.color} transition-all hover:scale-102 flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black opacity-60 tracking-wider">STAGE {s.num}</span>
                  <div className="w-8 h-8 rounded-xl bg-white/80 flex items-center justify-center shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-extrabold text-base mb-1">{s.title}</h4>
                <p className="text-xs opacity-90 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
