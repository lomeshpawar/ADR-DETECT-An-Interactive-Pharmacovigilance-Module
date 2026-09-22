import React from 'react';
import { User, Activity, Weight, Calendar, Stethoscope, AlertCircle } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const PatientProfile = ({ patient }) => {
  if (!patient) return null;

  return (
    <Card title="Patient Profile & Vitals" icon={User} className="border-blue-200">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100 mb-6">
        <div>
          <span className="text-xs text-slate-500 font-medium block">Patient Name</span>
          <span className="font-bold text-slate-900 text-sm">{patient.name}</span>
        </div>
        <div>
          <span className="text-xs text-slate-500 font-medium block">Age / Gender</span>
          <span className="font-bold text-slate-900 text-sm">{patient.age} yrs / {patient.gender}</span>
        </div>
        <div>
          <span className="text-xs text-slate-500 font-medium block">Body Weight</span>
          <span className="font-bold text-slate-900 text-sm">{patient.weight ? `${patient.weight} kg` : 'N/A'}</span>
        </div>
        <div>
          <span className="text-xs text-slate-500 font-medium block">Admission Type</span>
          <span className="font-bold text-slate-900 text-sm">Outpatient Clinic</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
            <Stethoscope className="w-4 h-4 text-blue-600" /> Primary Clinical Diagnosis
          </h4>
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-sm font-semibold text-slate-800">
            {patient.diagnosis}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-600" /> Chief Complaints & Presentation
          </h4>
          <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200 text-sm text-amber-950">
            {patient.chiefComplaints}
          </div>
        </div>
      </div>
    </Card>
  );
};
