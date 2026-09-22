import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Layers, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCaseContext } from '../context/CaseContext';
import { ScoreCard } from '../components/gamification/ScoreCard';
import { ScoreBreakdown } from '../components/gamification/ScoreBreakdown';
import { Button } from '../components/common/Button';

export const Result = () => {
  const { resultData, currentCase } = useCaseContext();

  useEffect(() => {
    if (resultData && resultData.totalScore >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  }, [resultData]);

  if (!resultData) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-slate-600 font-semibold">No assessment result found.</p>
        <Link to="/cases">
          <Button>Go to Case Bank</Button>
        </Link>
      </div>
    );
  }

  const nextCaseId = currentCase && currentCase.id < 5 ? currentCase.id + 1 : 1;

  return (
    <div className="space-y-8 py-4">
      <ScoreCard result={resultData} />

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link to={`/workflow/${nextCaseId}`}>
          <Button size="lg" className="gap-2">
            <Play className="w-5 h-5 fill-current" /> Next Case #{nextCaseId}
          </Button>
        </Link>
        <Link to="/cases">
          <Button size="lg" variant="secondary" className="gap-2">
            <Layers className="w-5 h-5" /> Case Bank
          </Button>
        </Link>
        <Link to="/learn">
          <Button size="lg" variant="outline" className="gap-2">
            <BookOpen className="w-5 h-5" /> Learn & Remember
          </Button>
        </Link>
      </div>

      <ScoreBreakdown result={resultData} />
    </div>
  );
};
