export const STATIONS = [
  { id: 1, name: 'Patient Case', code: 'PATIENT', path: 'patient', color: 'blue', theme: 'bg-blue-600 text-white', border: 'border-blue-500', lightBg: 'bg-blue-50', badge: 'Station 1' },
  { id: 2, name: 'Detective Station', code: 'DETECTIVE', path: 'detective', color: 'emerald', theme: 'bg-emerald-600 text-white', border: 'border-emerald-500', lightBg: 'bg-emerald-50', badge: 'Station 2' },
  { id: 3, name: 'ADR Assessment', code: 'ASSESSMENT', path: 'assessment', color: 'amber', theme: 'bg-amber-600 text-white', border: 'border-amber-500', lightBg: 'bg-amber-50', badge: 'Station 3' },
  { id: 4, name: 'Pharmacist Intervention', code: 'INTERVENTION', path: 'intervention', color: 'purple', theme: 'bg-purple-600 text-white', border: 'border-purple-500', lightBg: 'bg-purple-50', badge: 'Station 4' },
  { id: 5, name: 'ADR Reporting', code: 'REPORTING', path: 'reporting', color: 'rose', theme: 'bg-rose-600 text-white', border: 'border-rose-500', lightBg: 'bg-rose-50', badge: 'Station 5' }
];

export const CAUSALITY_OPTIONS = [
  { value: 'CERTAIN', label: 'Certain', desc: 'Plausible time sequence, cannot be explained by disease/other drugs, positive dechallenge and rechallenge.' },
  { value: 'PROBABLE', label: 'Probable', desc: 'Reasonable time sequence, unlikely attributable to disease, positive dechallenge, rechallenge not required.' },
  { value: 'POSSIBLE', label: 'Possible', desc: 'Reasonable time sequence, but could also be explained by disease or other medications; dechallenge info unclear.' },
  { value: 'UNLIKELY', label: 'Unlikely', desc: 'Temporal relationship makes causal connection improbable; disease or other drugs provide plausible explanation.' },
  { value: 'CONDITIONAL', label: 'Conditional / Unclassified', desc: 'More data or ongoing tests needed for conclusive determination.' }
];

export const SEVERITY_OPTIONS = [
  { value: 'MILD', label: 'Mild', desc: 'No antidote or hospitalization needed; minimal interference with daily activities.' },
  { value: 'MODERATE', label: 'Moderate', desc: 'Requires change in drug therapy, specific treatment, or short hospital stay.' },
  { value: 'SEVERE', label: 'Severe', desc: 'Potentially life-threatening, causes permanent harm, or requires intensive medical intervention.' }
];

export const INTERVENTION_OPTIONS = [
  { id: 'STOP_DRUG', label: 'Stop Suspected Drug', desc: 'Promptly discontinue the offending pharmaceutical agent.' },
  { id: 'CONTINUE_DRUG', label: 'Continue Drug Unchanged', desc: 'Maintain current medication regimen without modification.' },
  { id: 'DOSE_ADJUSTMENT', label: 'Dose Adjustment', desc: 'Reduce dosage or adjust administration frequency.' },
  { id: 'SYMPTOMATIC_TREATMENT', label: 'Symptomatic / Antidote Treatment', desc: 'Administer antihistamines, steroids, IV fluids, or specific reversal agents.' },
  { id: 'REFER_PHYSICIAN', label: 'Refer to Physician / Specialist', desc: 'Escalate to attending specialist for clinical re-evaluation or alternative regimen.' },
  { id: 'MONITOR_PATIENT', label: 'Monitor Patient Vitals & Labs', desc: 'Conduct close monitoring of symptoms, vitals, and laboratory parameters.' }
];
