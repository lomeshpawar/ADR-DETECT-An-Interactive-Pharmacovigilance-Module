import React, { useEffect, useState } from 'react';
import { Tag, BookOpen } from 'lucide-react';
import { Card } from '../common/Card';
import { educationService } from '../../services/educationService';

export const ReactionTypeGuide = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    educationService.getReactionTypes().then(res => setTypes(res.data));
  }, []);

  return (
    <Card title="Classification of Adverse Drug Reactions (Type A - F)" subtitle="Dynamic standard clinical classification guide" icon={Tag}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {types.map((t) => (
          <div key={t.code} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-sm">
                {t.code}
              </span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                <span className="text-xs text-blue-600 font-semibold">{t.mnemonic}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
              <div>
                <strong className="text-slate-700 block">Mechanism:</strong>
                <span className="text-slate-600">{t.mechanism}</span>
              </div>
              <div>
                <strong className="text-slate-700 block">Examples:</strong>
                <span className="text-slate-500">{t.clinicalExamples}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
