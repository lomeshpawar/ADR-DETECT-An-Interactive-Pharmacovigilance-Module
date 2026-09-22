import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Send, AlertTriangle } from 'lucide-react';
import { useCaseContext } from '../context/CaseContext';
import { caseService } from '../services/caseService';
import { assessmentService } from '../services/assessmentService';
import { reportService } from '../services/reportService';
import { scoreService } from '../services/scoreService';
import { StationNav } from '../components/layout/StationNav';
import { Button } from '../components/common/Button';
import { PatientProfile } from '../components/patient/PatientProfile';
import { MedicineList } from '../components/patient/MedicineList';
import { SymptomsList } from '../components/patient/SymptomsList';
import { ClueBox } from '../components/detective/ClueBox';
import { SuspectedDrugSelector } from '../components/assessment/SuspectedDrugSelector';
import { ReactionSelector } from '../components/assessment/ReactionSelector';
import { ReactionTypeSelector } from '../components/assessment/ReactionTypeSelector';
import { SeveritySelector } from '../components/assessment/SeveritySelector';
import { CausalitySelector } from '../components/assessment/CausalitySelector';
import { InterventionSelector } from '../components/intervention/InterventionSelector';
import { ADRReportForm } from '../components/reporting/ADRReportForm';

export const StationWorkflow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    currentCase,
    currentStation,
    setCurrentStation,
    discoveredClues,
    discoverClue,
    discoverAllClues,
    assessmentData,
    setAssessmentData,
    reportData,
    setReportData,
    setResultData,
    resetCaseSession
  } = useCaseContext();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (!currentCase || currentCase.id !== Number(id)) {
      setLoading(true);
      caseService.getCaseById(id).then(res => {
        resetCaseSession(res.data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading || !currentCase) {
    return (
      <div className="py-20 text-center text-slate-500 font-bold">
        Loading clinical case file...
      </div>
    );
  }

  const handleNext = () => {
    setValidationError('');
    if (currentStation === 3) {
      if (!assessmentData.suspectedDrug) {
        setValidationError('Please select the suspected drug before proceeding.');
        return;
      }
      if (!assessmentData.reaction) {
        setValidationError('Please select the adverse reaction.');
        return;
      }
      if (!assessmentData.reactionType) {
        setValidationError('Please select a Reaction Type (A - F).');
        return;
      }
      if (!assessmentData.severity) {
        setValidationError('Please select a severity level.');
        return;
      }
      if (!assessmentData.causality) {
        setValidationError('Please select a WHO-UMC causality category.');
        return;
      }
      setReportData(prev => ({
        ...prev,
        suspectedDrug: assessmentData.suspectedDrug,
        reaction: assessmentData.reaction,
        severity: assessmentData.severity,
        causality: assessmentData.causality
      }));
    }
    if (currentStation === 4) {
      if (!assessmentData.interventions || assessmentData.interventions.length === 0) {
        setValidationError('Please select at least one pharmacist intervention.');
        return;
      }
    }
    setCurrentStation(prev => Math.min(5, prev + 1));
  };

  const handlePrev = () => {
    setValidationError('');
    setCurrentStation(prev => Math.max(1, prev - 1));
  };

  const handleSubmitFinal = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setValidationError('');
    if (!reportData.suspectedDrug || !reportData.reaction || !reportData.reporterName) {
      setValidationError('Please fill in the required report fields (Suspected Drug, Reaction, Reporter Name).');
      return;
    }

    setSubmitting(true);
    try {
      await reportService.submitReport({
        caseId: currentCase.id,
        ...reportData
      });

      const evalRes = await assessmentService.submitAssessment(currentCase.id, {
        userId: 'student-demo',
        ...assessmentData
      });

      setResultData(evalRes.data);
      scoreService.saveLocalScore(evalRes.data);

      navigate('/result');
    } catch (err) {
      console.error('Submission failed:', err);
      setValidationError('Failed to complete evaluation. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <span className="text-xs font-black text-blue-600 uppercase tracking-wider">{currentCase.caseNumber}</span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">{currentCase.title}</h1>
        </div>
        <Button variant="outline" size="sm" onClick={() => navigate('/cases')}>
          Exit Case
        </Button>
      </div>

      <StationNav
        currentStation={currentStation}
        onSelectStation={(st) => setCurrentStation(st)}
        maxAllowedStation={5}
      />

      {validationError && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-900 text-xs sm:text-sm font-semibold animate-in fade-in">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{validationError}</span>
        </div>
      )}

      <div className="min-h-[400px]">
        {currentStation === 1 && (
          <div className="space-y-6">
            <PatientProfile patient={currentCase.patient} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MedicineList medications={currentCase.medications} />
              <SymptomsList symptoms={currentCase.symptoms} />
            </div>
          </div>
        )}

        {currentStation === 2 && (
          <ClueBox
            clues={currentCase.clues || []}
            discoveredClues={discoveredClues}
            onDiscoverClue={discoverClue}
            onDiscoverAll={discoverAllClues}
          />
        )}

        {currentStation === 3 && (
          <div className="space-y-6 bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">Station 3: ADR Assessment</h3>
              <p className="text-xs text-slate-500">Analyze the clinical evidence and complete all 5 diagnostic questions.</p>
            </div>

            <SuspectedDrugSelector
              medications={currentCase.medications || []}
              selectedDrug={assessmentData.suspectedDrug}
              onSelect={(drug) => setAssessmentData(prev => ({ ...prev, suspectedDrug: drug }))}
            />

            <ReactionSelector
              selectedReaction={assessmentData.reaction}
              onSelect={(rxn) => setAssessmentData(prev => ({ ...prev, reaction: rxn }))}
            />

            <ReactionTypeSelector
              selectedType={assessmentData.reactionType}
              onSelect={(type) => setAssessmentData(prev => ({ ...prev, reactionType: type }))}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <SeveritySelector
                selectedSeverity={assessmentData.severity}
                onSelect={(sev) => setAssessmentData(prev => ({ ...prev, severity: sev }))}
              />
              <CausalitySelector
                selectedCausality={assessmentData.causality}
                onSelect={(caus) => setAssessmentData(prev => ({ ...prev, causality: caus }))}
              />
            </div>
          </div>
        )}

        {currentStation === 4 && (
          <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">Station 4: Pharmacist Clinical Intervention</h3>
              <p className="text-xs text-slate-500">Choose all actionable clinical decisions required to ensure patient safety.</p>
            </div>
            <InterventionSelector
              selectedInterventions={assessmentData.interventions}
              onToggle={(intId) => {
                setAssessmentData(prev => {
                  const exists = prev.interventions.includes(intId);
                  const updated = exists ? prev.interventions.filter(i => i !== intId) : [...prev.interventions, intId];
                  return { ...prev, interventions: updated };
                });
              }}
            />
          </div>
        )}

        {currentStation === 5 && (
          <form onSubmit={handleSubmitFinal} className="space-y-6">
            <ADRReportForm
              formData={reportData}
              onChange={(e) => {
                const { name, value } = e.target;
                setReportData(prev => ({ ...prev, [name]: value }));
              }}
            />
          </form>
        )}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStation === 1}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Previous Station
        </Button>

        {currentStation < 5 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            className="gap-2"
          >
            Continue to Station {currentStation + 1} <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            variant="danger"
            size="lg"
            onClick={handleSubmitFinal}
            disabled={submitting}
            className="gap-2 shadow-lg shadow-rose-500/30"
          >
            <Send className="w-4 h-4" /> {submitting ? 'Submitting & Evaluating...' : 'Submit Report & Get Score'}
          </Button>
        )}
      </div>
    </div>
  );
};
