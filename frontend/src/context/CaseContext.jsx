import React, { createContext, useContext, useState } from 'react';

const CaseContext = createContext(null);

export const CaseProvider = ({ children }) => {
  const [currentCase, setCurrentCase] = useState(null);
  const [currentStation, setCurrentStation] = useState(1);
  const [discoveredClues, setDiscoveredClues] = useState([]);
  
  const [assessmentData, setAssessmentData] = useState({
    suspectedDrug: '',
    reaction: '',
    reactionType: '',
    severity: '',
    causality: '',
    interventions: []
  });

  const [reportData, setReportData] = useState({
    patientInitials: '',
    age: '',
    gender: '',
    suspectedDrug: '',
    reaction: '',
    dateOfOnset: '',
    severity: '',
    causality: '',
    actionTaken: '',
    outcome: '',
    reporterName: 'Student Pharmacist',
    reporterType: 'Pharmacy Student'
  });

  const [resultData, setResultData] = useState(null);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const resetCaseSession = (newCase = null) => {
    setCurrentCase(newCase);
    setCurrentStation(1);
    setDiscoveredClues([]);
    setAssessmentData({
      suspectedDrug: '',
      reaction: '',
      reactionType: '',
      severity: '',
      causality: '',
      interventions: []
    });
    if (newCase && newCase.patient) {
      setReportData({
        patientInitials: newCase.patient.name ? newCase.patient.name.split(' ').map(n => n[0]).join('') : 'PT',
        age: newCase.patient.age || '',
        gender: newCase.patient.gender || '',
        suspectedDrug: '',
        reaction: '',
        dateOfOnset: 'Day 3',
        severity: '',
        causality: '',
        actionTaken: 'Discontinued suspected drug and provided supportive management',
        outcome: 'Recovered',
        reporterName: 'Student Pharmacist',
        reporterType: 'Pharmacist'
      });
    }
    setResultData(null);
  };

  const discoverClue = (clueId) => {
    if (!discoveredClues.includes(clueId)) {
      setDiscoveredClues(prev => [...prev, clueId]);
    }
  };

  const discoverAllClues = () => {
    if (currentCase && currentCase.clues) {
      setDiscoveredClues(currentCase.clues.map(c => c.id));
    }
  };

  return (
    <CaseContext.Provider
      value={{
        currentCase,
        setCurrentCase,
        currentStation,
        setCurrentStation,
        discoveredClues,
        discoverClue,
        discoverAllClues,
        assessmentData,
        setAssessmentData,
        reportData,
        setReportData,
        resultData,
        setResultData,
        resetCaseSession,
        isOfflineMode,
        setIsOfflineMode
      }}
    >
      {children}
    </CaseContext.Provider>
  );
};

export const useCaseContext = () => {
  const context = useContext(CaseContext);
  if (!context) {
    throw new Error('useCaseContext must be used within a CaseProvider');
  }
  return context;
};
