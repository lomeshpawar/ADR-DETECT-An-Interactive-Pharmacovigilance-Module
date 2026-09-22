import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, Scale, FileText, ArrowRight, Sparkles, CheckCircle2, Play, BookOpen, Layers } from 'lucide-react';
import { Button } from '../components/common/Button';
import { PharmacovigilanceCycle } from '../components/education/PharmacovigilanceCycle';

export const Home = () => {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Section */}
      <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Interactive Pharmacovigilance Educational Simulation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            ADR-DETECT
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-blue-200">
            An Interactive Pharmacovigilance Module
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Step into the role of a Clinical Pharmacist Detective. Investigate real patient scenarios, uncover hidden pharmacological clues, classify Type A&ndash;F adverse reactions, and submit digital ADR reports.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link to="/workflow/1">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 gap-2">
                <Play className="w-5 h-5 fill-current" /> Start Case 01
              </Button>
            </Link>
            <Link to="/cases">
              <Button size="lg" variant="outline" className="text-white border-white/25 hover:bg-white/10 gap-2">
                <Layers className="w-5 h-5" /> Explore Case Bank
              </Button>
            </Link>
            <Link to="/learn">
              <Button size="lg" variant="ghost" className="text-blue-200 hover:text-white hover:bg-white/10 gap-2">
                <BookOpen className="w-5 h-5" /> Learn Pharmacovigilance
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-bold tracking-wider text-slate-300">
            <span className="text-blue-400 uppercase">Core Workflow:</span>
            <span>Detect</span>
            <span>&rarr;</span>
            <span>Assess</span>
            <span>&rarr;</span>
            <span>Intervene</span>
            <span>&rarr;</span>
            <span>Report</span>
          </div>
        </div>
      </section>

      {/* 5 Stations Highlights */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            5 Interactive Investigation Stations
          </h2>
          <p className="text-sm text-slate-600">
            Follow the structured clinical workflow inspired by physical pharmacovigilance training models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl border border-blue-200 bg-white hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center mb-3">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Station 1: Patient Case</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Analyze patient vitals, diagnosis, chief complaints, and medication regimen.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-emerald-200 bg-white hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center mb-3">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Station 2: Detective</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Investigate 6 hidden clues: Timelines, allergies, lab reports, and dechallenge.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-amber-200 bg-white hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center mb-3">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Station 3: ADR Assessment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Identify suspected drug, reaction, Type A&ndash;F classification, severity, and causality.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-purple-200 bg-white hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-black text-sm flex items-center justify-center mb-3">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Station 4: Intervention</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Select appropriate pharmacist clinical actions: Stop, adjust dose, antidote, or monitor.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-rose-200 bg-white hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 font-black text-sm flex items-center justify-center mb-3">
              05
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Station 5: ADR Reporting</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fill and submit the standardized digital ADR reporting form to earn your score.
            </p>
          </div>
        </div>
      </section>

      {/* PV Cycle */}
      <PharmacovigilanceCycle />
    </div>
  );
};
