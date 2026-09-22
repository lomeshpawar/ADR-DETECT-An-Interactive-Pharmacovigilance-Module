import React, { useState } from 'react';
import { X, Plus, Trash2, CheckCircle2, AlertCircle, Pill, FileText, Stethoscope } from 'lucide-react';
import { Button } from '../common/Button';
import { CAUSALITY_OPTIONS, SEVERITY_OPTIONS, INTERVENTION_OPTIONS } from '../../utils/constants';

export const CaseCreatorModal = ({ isOpen, onClose, onCaseAdded }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    difficulty: 'EASY',
    category: 'Antimicrobials & General',
    summary: '',
    patientName: '',
    patientAge: 45,
    patientGender: 'Male',
    patientWeight: 70.0,
    diagnosis: '',
    chiefComplaints: '',
    suspectedDrug: '',
    reactionName: '',
    reactionTypeCode: 'B',
    severity: 'MILD',
    causality: 'PROBABLE',
    outcome: 'Recovered',
    clinicalExplanation: '',
    learningPoints: '',
    correctInterventions: ['STOP_DRUG', 'SYMPTOMATIC_TREATMENT', 'MONITOR_PATIENT'],
    medications: [
      { name: '', dose: '500 mg', frequency: 'BD', route: 'Oral', startDay: 'Day 1 (3 days ago)', indication: 'Infection', isSuspected: true },
      { name: 'Paracetamol', dose: '650 mg', frequency: 'SOS', route: 'Oral', startDay: '2 years ago', indication: 'Pain relief', isSuspected: false }
    ],
    clues: [
      { category: 'MEDICINE_HISTORY', title: 'Medication Timeline', content: 'New drug was added 3 days ago while other medicines are chronic.', icon: 'Pill', sortOrder: 1 },
      { category: 'SYMPTOM_TIMELINE', title: 'Symptom Development', content: 'Adverse symptoms began 48 hours after starting the suspected agent.', icon: 'Clock', sortOrder: 2 },
      { category: 'PAST_HISTORY', title: 'Medical History', content: 'No previous underlying chronic conditions related to this reaction.', icon: 'FileText', sortOrder: 3 },
      { category: 'ALLERGY_HISTORY', title: 'Allergy Background', content: 'No prior documented allergies to this drug class.', icon: 'AlertCircle', sortOrder: 4 },
      { category: 'LAB_REPORTS', title: 'Diagnostic Laboratory Findings', content: 'Vital signs and organ function tests recorded.', icon: 'Activity', sortOrder: 5 },
      { category: 'DECHALLENGE_RECHALLENGE', title: 'Dechallenge Response', content: 'Symptoms significantly improved within 48 hours of drug cessation.', icon: 'RefreshCw', sortOrder: 6 }
    ],
    symptoms: [
      { dayOnset: 'Day 1', description: 'Suspected medication initiated.', severity: 'None' },
      { dayOnset: 'Day 3', description: 'Patient developed adverse reaction symptoms.', severity: 'Moderate' }
    ]
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMedChange = (index, field, val) => {
    setFormData(prev => {
      const updated = [...prev.medications];
      updated[index] = { ...updated[index], [field]: val };
      return { ...prev, medications: updated };
    });
  };

  const addMedication = () => {
    setFormData(prev => ({
      ...prev,
      medications: [...prev.medications, { name: '', dose: '1 tab', frequency: 'OD', route: 'Oral', startDay: '1 week ago', indication: '', isSuspected: false }]
    }));
  };

  const removeMedication = (index) => {
    setFormData(prev => ({
      ...prev,
      medications: prev.medications.filter((_, i) => i !== index)
    }));
  };

  const handleClueChange = (index, field, val) => {
    setFormData(prev => {
      const updated = [...prev.clues];
      updated[index] = { ...updated[index], [field]: val };
      return { ...prev, clues: updated };
    });
  };

  const handleInterventionToggle = (intId) => {
    setFormData(prev => {
      const exists = prev.correctInterventions.includes(intId);
      const updated = exists ? prev.correctInterventions.filter(i => i !== intId) : [...prev.correctInterventions, intId];
      return { ...prev, correctInterventions: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.patientName || !formData.suspectedDrug || !formData.reactionName) {
      alert('Please fill in required fields: Case Title, Patient Name, Suspected Drug, and Reaction Name.');
      return;
    }
    setSubmitting(true);
    try {
      await onCaseAdded(formData);
      onClose();
    } catch (err) {
      console.error('Failed to create case', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 shrink-0">
          <div>
            <span className="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
              Pharmacist / Instructor Mode
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Create New Pharmacovigilance Case
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b border-slate-200 my-4 shrink-0 overflow-x-auto gap-2">
          {[
            { id: 1, name: '1. Case & Patient Details' },
            { id: 2, name: '2. Medications' },
            { id: 3, name: '3. Investigation Clues (6)' },
            { id: 4, name: '4. Ground Truth & Evaluation' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-600 text-purple-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto pr-1 space-y-6">
          {activeTab === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Case Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Allergic Eruption Following Cefuroxime"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Difficulty</label>
                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g. Antimicrobials & Dermatology"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Summary</label>
                  <input
                    type="text"
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    placeholder="Brief 1-2 sentence overview"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Patient Demographics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Patient Name *</label>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      placeholder="e.g. Mrs. Priya K."
                      required
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Age</label>
                    <input
                      type="number"
                      name="patientAge"
                      value={formData.patientAge}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Gender</label>
                    <select
                      name="patientGender"
                      value={formData.patientGender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      name="patientWeight"
                      value={formData.patientWeight}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Diagnosis</label>
                    <input
                      type="text"
                      name="diagnosis"
                      value={formData.diagnosis}
                      onChange={handleInputChange}
                      placeholder="e.g. Pharyngitis"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Chief Complaints</label>
                    <input
                      type="text"
                      name="chiefComplaints"
                      value={formData.chiefComplaints}
                      onChange={handleInputChange}
                      placeholder="e.g. Urticarial rash & itching"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Medication Regimen</h4>
                <Button size="sm" variant="outline" onClick={addMedication} className="gap-1">
                  <Plus className="w-3.5 h-3.5" /> Add Medication
                </Button>
              </div>

              <div className="space-y-3">
                {formData.medications.map((med, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Drug name *"
                      value={med.name}
                      onChange={(e) => handleMedChange(idx, 'name', e.target.value)}
                      required
                      className="px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold sm:col-span-2"
                    />
                    <input
                      type="text"
                      placeholder="Dose (e.g. 500 mg)"
                      value={med.dose}
                      onChange={(e) => handleMedChange(idx, 'dose', e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs"
                    />
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="Initiation"
                        value={med.startDay}
                        onChange={(e) => handleMedChange(idx, 'startDay', e.target.value)}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs flex-1 mr-2"
                      />
                      {formData.medications.length > 1 && (
                        <button type="button" onClick={() => removeMedication(idx)} className="text-rose-500 hover:text-rose-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-3">
              {formData.clues.map((clue, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block">{clue.category}</span>
                  <textarea
                    rows={2}
                    value={clue.content}
                    onChange={(e) => handleClueChange(idx, 'content', e.target.value)}
                    placeholder="Clinical evidence for this clue category..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 4 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Suspected Drug *
                  </label>
                  <input
                    type="text"
                    name="suspectedDrug"
                    value={formData.suspectedDrug}
                    onChange={handleInputChange}
                    placeholder="e.g. Cefuroxime"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Reaction Name *
                  </label>
                  <input
                    type="text"
                    name="reactionName"
                    value={formData.reactionName}
                    onChange={handleInputChange}
                    placeholder="e.g. Skin rash"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Reaction Type (A-F)</label>
                  <select
                    name="reactionTypeCode"
                    value={formData.reactionTypeCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-bold focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="A">Type A (Augmented)</option>
                    <option value="B">Type B (Bizarre / Allergic)</option>
                    <option value="C">Type C (Chronic)</option>
                    <option value="D">Type D (Delayed)</option>
                    <option value="E">Type E (End of Use)</option>
                    <option value="F">Type F (Failure)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Severity</label>
                  <select
                    name="severity"
                    value={formData.severity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="MILD">Mild</option>
                    <option value="MODERATE">Moderate</option>
                    <option value="SEVERE">Severe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Causality</label>
                  <select
                    name="causality"
                    value={formData.causality}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="CERTAIN">Certain</option>
                    <option value="PROBABLE">Probable</option>
                    <option value="POSSIBLE">Possible</option>
                    <option value="UNLIKELY">Unlikely</option>
                    <option value="CONDITIONAL">Conditional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Clinical Explanation</label>
                <textarea
                  rows={2}
                  name="clinicalExplanation"
                  value={formData.clinicalExplanation}
                  onChange={handleInputChange}
                  placeholder="Explain the mechanism and timeline..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Learning Points</label>
                <textarea
                  rows={2}
                  name="learningPoints"
                  value={formData.learningPoints}
                  onChange={handleInputChange}
                  placeholder="Key educational takeaways..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-slate-200 shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => setActiveTab(prev => Math.max(1, prev - 1))}
              disabled={activeTab === 1}
            >
              Back
            </Button>

            {activeTab < 4 ? (
              <Button
                type="button"
                variant="purple"
                onClick={() => setActiveTab(prev => Math.min(4, prev + 1))}
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                variant="purple"
                disabled={submitting}
                className="gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> {submitting ? 'Saving Case...' : 'Publish Case to Case Bank'}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
