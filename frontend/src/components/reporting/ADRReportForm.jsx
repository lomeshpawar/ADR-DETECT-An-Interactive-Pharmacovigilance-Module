import React from 'react';
import { FileText } from 'lucide-react';

export const ADRReportForm = ({ formData, onChange }) => {
  return (
    <div className="space-y-5 bg-white p-6 rounded-2xl border border-rose-200 shadow-sm">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">Adverse Drug Reaction Reporting Form</h3>
          <p className="text-xs text-slate-500">Official Standard Pharmacovigilance Notification</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Patient Initials</label>
          <input
            type="text"
            name="patientInitials"
            value={formData.patientInitials || ''}
            onChange={onChange}
            placeholder="e.g. R.S."
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age || ''}
            onChange={onChange}
            placeholder="e.g. 56"
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender || ''}
            onChange={onChange}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Suspected Drug <span className="text-rose-500">*</span></label>
          <input
            type="text"
            name="suspectedDrug"
            value={formData.suspectedDrug || ''}
            onChange={onChange}
            placeholder="e.g. Ofloxacin"
            required
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Reaction Description <span className="text-rose-500">*</span></label>
          <input
            type="text"
            name="reaction"
            value={formData.reaction || ''}
            onChange={onChange}
            placeholder="e.g. Diffuse skin rash and pruritus"
            required
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Date / Day of Onset</label>
          <input
            type="text"
            name="dateOfOnset"
            value={formData.dateOfOnset || ''}
            onChange={onChange}
            placeholder="e.g. Day 3 of therapy"
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Reaction Severity</label>
          <select
            name="severity"
            value={formData.severity || ''}
            onChange={onChange}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          >
            <option value="">Select Severity</option>
            <option value="MILD">Mild</option>
            <option value="MODERATE">Moderate</option>
            <option value="SEVERE">Severe</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Causality (WHO-UMC)</label>
          <select
            name="causality"
            value={formData.causality || ''}
            onChange={onChange}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          >
            <option value="">Select Causality</option>
            <option value="CERTAIN">Certain</option>
            <option value="PROBABLE">Probable</option>
            <option value="POSSIBLE">Possible</option>
            <option value="UNLIKELY">Unlikely</option>
            <option value="CONDITIONAL">Conditional</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Action Taken</label>
          <input
            type="text"
            name="actionTaken"
            value={formData.actionTaken || ''}
            onChange={onChange}
            placeholder="e.g. Drug withdrawn, Cetirizine started"
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Outcome</label>
          <select
            name="outcome"
            value={formData.outcome || ''}
            onChange={onChange}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          >
            <option value="Recovered">Recovered / Resolved</option>
            <option value="Recovering">Recovering / Resolving</option>
            <option value="Not Recovered">Not Recovered</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Reporter Name <span className="text-rose-500">*</span></label>
          <input
            type="text"
            name="reporterName"
            value={formData.reporterName || ''}
            onChange={onChange}
            placeholder="Your name"
            required
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Reporter Role</label>
          <input
            type="text"
            name="reporterType"
            value={formData.reporterType || ''}
            onChange={onChange}
            placeholder="e.g. Clinical Pharmacist / Pharmacy Student"
            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
