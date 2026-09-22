import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, CheckCircle2, TrendingUp, Play, BookOpen, Clock, Star } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { scoreService } from '../services/scoreService';

export const Dashboard = () => {
  const [stats, setStats] = useState({
    casesCompleted: 0,
    totalCases: 5,
    averageScore: 0,
    bestScore: 0,
    badges: [],
    recentScores: []
  });

  useEffect(() => {
    scoreService.getUserStats().then(res => setStats(res.data));
  }, []);

  return (
    <div className="space-y-8 py-4">
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-200 block">Pharmacovigilance Dashboard</span>
          <h1 className="text-2xl sm:text-3xl font-black">Welcome, Pharmacy Learner!</h1>
          <p className="text-sm text-blue-100 max-w-xl">
            Track your diagnostic accuracy, causality assessment skills, and pharmacovigilance mastery.
          </p>
        </div>

        <Link to="/cases">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-md font-extrabold gap-2">
            <Play className="w-4 h-4 fill-current" /> Continue Cases
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Cases Solved</span>
              <span className="text-2xl font-black text-slate-900">{stats.casesCompleted} / {stats.totalCases}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </Card>

        <Card className="border-emerald-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Average Score</span>
              <span className="text-2xl font-black text-slate-900">{stats.averageScore}%</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </Card>

        <Card className="border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Best Score</span>
              <span className="text-2xl font-black text-slate-900">{stats.bestScore} / 100</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5" />
            </div>
          </div>
        </Card>

        <Card className="border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Badges Earned</span>
              <span className="text-2xl font-black text-slate-900">{stats.badges.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
          </div>
        </Card>
      </div>

      <Card title="Achievement Badges" subtitle="Unlocked milestone credentials based on clinical accuracy" icon={Award}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'ADR Detective', desc: 'Solved first patient case', icon: CheckCircle2, unlocked: stats.badges.includes('ADR Detective') },
            { name: 'Causality Expert', desc: 'Maintained 80%+ average', icon: TrendingUp, unlocked: stats.badges.includes('Causality Expert') },
            { name: 'Safe Pharmacist', desc: 'Completed 3+ cases', icon: Award, unlocked: stats.badges.includes('Safe Pharmacist') },
            { name: 'Reporting Champion', desc: 'Scored 95+ on a case', icon: Trophy, unlocked: stats.badges.includes('Reporting Champion') }
          ].map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  b.unlocked
                    ? 'border-amber-300 bg-amber-50/60 shadow-sm'
                    : 'border-slate-200 bg-slate-50/50 opacity-40'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl mx-auto mb-2 flex items-center justify-center ${
                  b.unlocked ? 'bg-amber-500 text-white shadow-md' : 'bg-slate-200 text-slate-500'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">{b.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{b.desc}</p>
                <span className={`inline-block mt-2 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                  b.unlocked ? 'bg-amber-200 text-amber-900' : 'bg-slate-200 text-slate-600'
                }`}>
                  {b.unlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
