import React from 'react';
import { Check, X, Info, Pill, AlertTriangle, Tag, Activity, Scale, ShieldCheck, FileText } from 'lucide-react';
import { Card } from '../common/Card';

export const ScoreBreakdown = ({ result }) => {
  if (!result) return null;

  const items = [
    {
      title: 'Suspected Drug',
      score: result.suspectedDrugScore,
      max: 15,
      correct: result.drugCorrect,
      yourAnswer: result.submittedDrug,
      correctAnswer: result.correctDrug,
      icon: Pill
    },
    {
      title: 'ADR Identification',
      score: result.reactionScore,
      max: 15,
      correct: result.reactionCorrect,
      yourAnswer: result.submittedReaction,
      correctAnswer: result.correctReaction,
      icon: AlertTriangle
    },
    {
      title: 'Reaction Type (A-F)',
      score: result.reactionTypeScore,
      max: 20,
      correct: result.reactionTypeCorrect,
      yourAnswer: `Type ${result.submittedReactionType}`,
      correctAnswer: `Type ${result.correctReactionType}`,
      icon: Tag,
      note: result.reactionTypeDefinition
    },
    {
      title: 'Severity Assessment',
      score: result.severityScore,
      max: 15,
      correct: result.severityCorrect,
      yourAnswer: result.submittedSeverity,
      correctAnswer: result.correctSeverity,
      icon: Activity
    },
    {
      title: 'WHO-UMC Causality',
      score: result.causalityScore,
      max: 15,
      correct: result.causalityCorrect,
      yourAnswer: result.submittedCausality,
      correctAnswer: result.correctCausality,
      icon: Scale
    },
    {
      title: 'Pharmacist Intervention',
      score: result.interventionScore,
      max: 10,
      correct: result.interventionsCorrect,
      yourAnswer: (result.submittedInterventions || []).join(', ') || 'None selected',
      correctAnswer: (result.correctInterventions || []).join(', '),
      icon: ShieldCheck
    },
    {
      title: 'Digital ADR Reporting',
      score: result.reportingScore,
      max: 10,
      correct: true,
      yourAnswer: 'Completed & Submitted',
      correctAnswer: 'Form Validated',
      icon: FileText
    }
  ];

  return (
    <div className="space-y-6">
      <Card title="Score Breakdown & Verification" subtitle="Detailed point allocation across all 7 evaluation criteria">
        <div className="divide-y divide-slate-100">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      item.correct ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <span className="text-xs font-semibold text-slate-500">
                        Earned: <strong className={item.correct ? 'text-emerald-700' : 'text-slate-700'}>{item.score}</strong> / {item.max} pts
                      </span>
                    </div>
                  </div>

                  <div>
                    {item.correct ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <Check className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                        <X className="w-3.5 h-3.5" /> Incorrect
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-medium block">Your Answer:</span>
                    <span className={`font-bold ${item.correct ? 'text-slate-800' : 'text-rose-700'}`}>
                      {item.yourAnswer}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                    <span className="text-emerald-800 font-medium block">Correct Answer:</span>
                    <span className="font-bold text-emerald-900">
                      {item.correctAnswer}
                    </span>
                  </div>
                </div>

                {item.note && (
                  <div className="mt-2 text-xs text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200 leading-relaxed">
                    <strong>Definition:</strong> {item.note}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Clinical Explanation & Learning Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Clinical Rationale & Mechanism" className="border-blue-200 bg-blue-50/30">
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            {result.clinicalExplanation}
          </p>
        </Card>

        <Card title="Key Educational Learning Points" className="border-indigo-200 bg-indigo-50/30">
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            {result.learningPoints}
          </p>
        </Card>
      </div>
    </div>
  );
};
