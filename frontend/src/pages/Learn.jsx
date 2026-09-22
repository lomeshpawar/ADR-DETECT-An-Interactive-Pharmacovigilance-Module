import React from 'react';
import { ShieldAlert, Scale } from 'lucide-react';
import { Card } from '../components/common/Card';
import { PharmacovigilanceCycle } from '../components/education/PharmacovigilanceCycle';
import { ReactionTypeGuide } from '../components/education/ReactionTypeGuide';

export const Learn = () => {
  return (
    <div className="space-y-8 py-4">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-black uppercase tracking-widest text-blue-600">Educational Curriculum</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Learn & Remember Pharmacovigilance
        </h1>
        <p className="text-sm text-slate-600">
          Core theoretical foundations, classification guides, and standard clinical decision algorithms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="What is an Adverse Drug Reaction (ADR)?" icon={ShieldAlert}>
          <p className="text-sm text-slate-700 leading-relaxed">
            The World Health Organization (WHO) defines an ADR as: <em>&ldquo;A response to a drug which is noxious and unintended, and which occurs at doses normally used in man for prophylaxis, diagnosis, or therapy of disease.&rdquo;</em>
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600 list-disc list-inside">
            <li><strong>ADR vs Side Effect:</strong> Side effects can be beneficial or harmful; ADRs are always unintended and noxious.</li>
            <li><strong>ADR vs Medication Error:</strong> Medication errors are preventable failures in prescribing, dispensing, or administering.</li>
          </ul>
        </Card>

        <Card title="Why Pharmacovigilance Matters" icon={Scale}>
          <p className="text-sm text-slate-700 leading-relaxed">
            Clinical trials test drugs in limited cohorts. Rare ADRs, complex drug interactions in multimorbid patients, and delayed toxicities emerge post-marketing.
          </p>
          <p className="text-xs text-blue-700 font-bold mt-2">
            &ldquo;Good Pharmacovigilance Helps in Patient Safety.&rdquo;
          </p>
        </Card>
      </div>

      <ReactionTypeGuide />
      <PharmacovigilanceCycle />
    </div>
  );
};
