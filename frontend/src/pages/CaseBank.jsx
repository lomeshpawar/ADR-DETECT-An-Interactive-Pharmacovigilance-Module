import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Play, Search, PlusCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { caseService } from '../services/caseService';
import { CaseCreatorModal } from '../components/case/CaseCreatorModal';

export const CaseBank = () => {
  const [cases, setCases] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadCases = () => {
    caseService.getAllCases().then(res => setCases(res.data));
  };

  useEffect(() => {
    loadCases();
  }, []);

  const handleCaseAdded = async (newCaseData) => {
    await caseService.createCase(newCaseData);
    loadCases();
  };

  const filtered = cases.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (c.category && c.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (c.caseNumber && c.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDiff = difficultyFilter === 'ALL' || c.difficulty === difficultyFilter;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="space-y-6 py-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Case Bank</h1>
          <p className="text-xs sm:text-sm text-slate-500">Select a clinical scenario or create custom educational patient cases.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <Button
            size="sm"
            variant="purple"
            onClick={() => setIsModalOpen(true)}
            className="gap-1.5 shadow-sm"
          >
            <PlusCircle className="w-4 h-4" /> Pharmacist: Add Case
          </Button>

          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cases, drugs, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            />
          </div>

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="ALL">All Difficulties</option>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between p-6"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
                  {item.caseNumber}
                </span>
                <Badge variant={item.difficulty ? item.difficulty.toLowerCase() : 'neutral'}>
                  {item.difficulty || 'Medium'}
                </Badge>
              </div>

              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {item.category}
              </span>

              <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {item.summary}
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 mb-6">
                <strong>Patient:</strong> {item.patientName} &bull; {item.patientAge} yrs &bull; {item.patientGender}
              </div>
            </div>

            <Link to={`/workflow/${item.id}`} className="block w-full">
              <Button size="md" className="w-full gap-2">
                <Play className="w-4 h-4 fill-current" /> Start Case Investigation
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <CaseCreatorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCaseAdded={handleCaseAdded}
      />
    </div>
  );
};
