import React from 'react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { ClueCard } from './ClueCard';
import { Button } from '../common/Button';

export const ClueBox = ({ clues = [], discoveredClues = [], onDiscoverClue, onDiscoverAll }) => {
  const discoveredCount = discoveredClues.length;
  const totalClues = clues.length;
  const isComplete = discoveredCount === totalClues && totalClues > 0;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-white shrink-0">
            <Search className="w-6 h-6 text-emerald-300" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold tracking-tight">Investigate Patient Case Clues</h3>
            <p className="text-xs text-emerald-100 mt-0.5">Click on each clinical category below to uncover vital pharmacological evidence.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-emerald-900/60 border border-emerald-500/40 px-3.5 py-1.5 rounded-xl text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-200 block">Clues Discovered</span>
            <span className="text-lg font-black text-white">{discoveredCount} / {totalClues}</span>
          </div>

          {!isComplete && (
            <button
              onClick={onDiscoverAll}
              className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Reveal All
            </button>
          )}
        </div>
      </div>

      {isComplete && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-900">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="text-xs sm:text-sm font-semibold">
            <strong>Investigation Complete!</strong> You have examined all 6 clue categories. You are now ready to proceed to the ADR Assessment station.
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clues.map((clue) => (
          <ClueCard
            key={clue.id}
            clue={clue}
            isDiscovered={discoveredClues.includes(clue.id)}
            onDiscover={onDiscoverClue}
          />
        ))}
      </div>
    </div>
  );
};
