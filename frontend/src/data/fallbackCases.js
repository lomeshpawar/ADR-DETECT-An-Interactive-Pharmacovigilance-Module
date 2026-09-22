export const FALLBACK_CASES = [
  {
    id: 1,
    caseNumber: 'CASE-01',
    title: 'Dermatological Reaction in a Diabetic Patient',
    difficulty: 'EASY',
    category: 'Dermatology & Antimicrobials',
    summary: 'A 56-year-old male with Type 2 Diabetes Mellitus presented with acute diffuse erythematous rash, severe pruritus, and low-grade fever after starting an oral antimicrobial.',
    patient: {
      name: 'Mr. Ramesh S.',
      age: 56,
      gender: 'Male',
      weight: 68.0,
      diagnosis: 'Type 2 Diabetes Mellitus & Acute Urinary Tract Infection',
      chiefComplaints: 'Diffuse red maculopapular rashes across torso and arms, severe itching (pruritus), low-grade fever (99.4°F), and mild nausea.'
    },
    medications: [
      { id: 1, name: 'Metformin', dose: '500 mg', frequency: 'BD', route: 'Oral', startDay: '3 years ago', indication: 'Type 2 Diabetes Mellitus', isSuspected: false },
      { id: 2, name: 'Glimepiride', dose: '2 mg', frequency: 'OD', route: 'Oral', startDay: '1 year ago', indication: 'Type 2 Diabetes Mellitus', isSuspected: false },
      { id: 3, name: 'Ofloxacin', dose: '200 mg', frequency: 'BD', route: 'Oral', startDay: 'Day 1 (4 days ago)', indication: 'Acute Urinary Tract Infection', isSuspected: true },
      { id: 4, name: 'Paracetamol', dose: '650 mg', frequency: 'SOS', route: 'Oral', startDay: 'Day 3', indication: 'Fever & Malaise', isSuspected: false },
      { id: 5, name: 'Ranitidine', dose: '150 mg', frequency: 'BD', route: 'Oral', startDay: '2 years ago', indication: 'Gastric hyperacidity', isSuspected: false }
    ],
    symptoms: [
      { id: 1, dayOnset: 'Day 1', description: 'Ofloxacin 200 mg BD prescribed and initiated for UTI symptoms.', severity: 'None' },
      { id: 2, dayOnset: 'Day 2', description: 'Patient noticed mild localized itching on forearms in the evening.', severity: 'Mild' },
      { id: 3, dayOnset: 'Day 3', description: 'Erythematous maculopapular rash erupted over chest, abdomen, and arms with intensified pruritus.', severity: 'Mild' },
      { id: 4, dayOnset: 'Day 4', description: 'Low-grade fever (99.4°F) and nausea noted; patient reported back to clinic.', severity: 'Moderate' }
    ],
    clues: [
      { id: 1, category: 'MEDICINE_HISTORY', title: 'Prescription Timeline Review', content: 'Metformin and Glimepiride have been taken continuously for over 12 months with excellent glycemic control and zero adverse events. Ofloxacin 200 mg BD is the only newly added chemical agent, started 4 days ago for dysuria.', icon: 'Pill', sortOrder: 1 },
      { id: 2, category: 'SYMPTOM_TIMELINE', title: 'Temporal Correlation', content: 'Day 1: Ofloxacin started -> Day 2: Pruritus begins -> Day 3: Erythematous rash spreads -> Day 4: Patient seeks medical evaluation. Distinct temporal relationship between new drug introduction and reaction onset.', icon: 'Clock', sortOrder: 2 },
      { id: 3, category: 'PAST_HISTORY', title: 'Chronic Medical History', content: 'Known diabetic for 5 years. No previous history of eczema, psoriasis, asthma, or food allergies. No family history of hereditary skin disorders.', icon: 'FileText', sortOrder: 3 },
      { id: 4, category: 'ALLERGY_HISTORY', title: 'Previous Drug Exposure', content: 'No known drug allergies (NKDA) documented in past hospital visits. This is the patient’s first lifetime exposure to fluoroquinolone antimicrobials.', icon: 'AlertCircle', sortOrder: 4 },
      { id: 5, category: 'LAB_REPORTS', title: 'Laboratory Investigation', content: 'HbA1c: 7.1%. Fasting Blood Sugar: 128 mg/dL. CBC: Mild peripheral eosinophilia (6.8%, reference 1-4%), Normal Platelet count (240,000/mcL). Renal & Liver function tests normal.', icon: 'Activity', sortOrder: 5 },
      { id: 6, category: 'DECHALLENGE_RECHALLENGE', title: 'Dechallenge Observation', content: 'Positive dechallenge: Ofloxacin was stopped on Day 4. With oral Cetirizine 10 mg OD and Calamine lotion, the rash diminished significantly within 36 hours and fully cleared by Day 7 without residual scarring.', icon: 'RefreshCw', sortOrder: 6 }
    ],
    expectedAnswers: {
      suspectedDrug: 'Ofloxacin',
      reactionName: 'Skin rash',
      reactionType: 'B',
      severity: 'MILD',
      causality: 'PROBABLE',
      interventions: ['STOP_DRUG', 'SYMPTOMATIC_TREATMENT', 'MONITOR_PATIENT'],
      outcome: 'Recovered',
      explanation: 'The temporal sequence (onset 48-72h post-Ofloxacin initiation), lack of previous rash with chronic Metformin/Glimepiride, positive dechallenge, and known fluoroquinolone hypersensitivity pattern establish a Probable causal association. It is classified as Type B (Bizarre/Unpredictable) because cutaneous hypersensitivity is not an extension of the antibacterial topoisomerase-inhibition pharmacology.',
      learningPoints: '1. Always map symptom onset timeline against newly introduced medications versus stable chronic regimens.\n2. Fluoroquinolones can trigger allergic dermatological eruptions.\n3. Type B reactions are unpredictable and dose-independent.\n4. Timely dechallenge and reporting prevent progression to severe cutaneous adverse reactions (SCARs).'
    }
  },
  {
    id: 2,
    caseNumber: 'CASE-02',
    title: 'Persistent Nocturnal Cough in a Hypertensive Patient',
    difficulty: 'EASY',
    category: 'Cardiovascular & Respiratory',
    summary: 'A 48-year-old female presents with a non-productive, hacking cough worsening at night for 3 weeks, following initiation of antihypertensive monotherapy.',
    patient: {
      name: 'Mrs. Sunita D.',
      age: 48,
      gender: 'Female',
      weight: 62.0,
      diagnosis: 'Essential Hypertension (Stage 1)',
      chiefComplaints: 'Persistent, dry, tickling cough predominantly at night disturbing sleep for 3 weeks. No sputum production, no fever, no shortness of breath.'
    },
    medications: [
      { id: 6, name: 'Enalapril', dose: '5 mg', frequency: 'OD', route: 'Oral', startDay: '4 weeks ago', indication: 'Essential Hypertension', isSuspected: true },
      { id: 7, name: 'Calcium + Vitamin D3', dose: '500 mg', frequency: 'OD', route: 'Oral', startDay: '6 months ago', indication: 'Osteopenia prophylaxis', isSuspected: false },
      { id: 8, name: 'Dextromethorphan syrup', dose: '10 ml', frequency: 'TDS', route: 'Oral', startDay: '1 week ago', indication: 'Self-treatment for cough', isSuspected: false }
    ],
    symptoms: [
      { id: 5, dayOnset: 'Week 1', description: 'Initiated Enalapril 5 mg OD for elevated BP (148/94 mmHg).', severity: 'None' },
      { id: 6, dayOnset: 'Week 2', description: 'Noticed tickling sensation in throat with sporadic dry cough.', severity: 'Mild' },
      { id: 7, dayOnset: 'Week 3-4', description: 'Intense nocturnal hacking cough causing insomnia. OTC cough syrup ineffective.', severity: 'Moderate' }
    ],
    clues: [
      { id: 7, category: 'MEDICINE_HISTORY', title: 'Antihypertensive Initiation', content: 'Enalapril 5 mg daily was started 4 weeks ago. Blood pressure decreased to 126/82 mmHg, but cough began ~7-10 days after starting.', icon: 'Pill', sortOrder: 1 },
      { id: 8, category: 'SYMPTOM_TIMELINE', title: 'Onset Timing', content: 'Onset began in week 2 of Enalapril therapy. Progressively increased in frequency. Refractory to antihistamines and Dextromethorphan.', icon: 'Clock', sortOrder: 2 },
      { id: 9, category: 'PAST_HISTORY', title: 'Respiratory History', content: 'No history of asthma, COPD, gastroesophageal reflux (GERD), or chronic post-nasal drip. Non-smoker.', icon: 'FileText', sortOrder: 3 },
      { id: 10, category: 'ALLERGY_HISTORY', title: 'Allergy Background', content: 'No history of seasonal rhinitis, food allergies, or atopy.', icon: 'AlertCircle', sortOrder: 4 },
      { id: 11, category: 'LAB_REPORTS', title: 'Chest X-Ray & Labs', content: 'Chest X-Ray: Clear lung fields, normal bronchovascular markings. Serum Creatinine: 0.9 mg/dL. Serum Potassium: 4.4 mEq/L.', icon: 'Activity', sortOrder: 5 },
      { id: 12, category: 'DECHALLENGE_RECHALLENGE', title: 'Dechallenge & Drug Substitution', content: 'Positive dechallenge: Enalapril was stopped and replaced by Losartan 50 mg OD. Cough completely subsided within 8 days.', icon: 'RefreshCw', sortOrder: 6 }
    ],
    expectedAnswers: {
      suspectedDrug: 'Enalapril',
      reactionName: 'Dry cough',
      reactionType: 'A',
      severity: 'MILD',
      causality: 'PROBABLE',
      interventions: ['STOP_DRUG', 'REFER_PHYSICIAN', 'MONITOR_PATIENT'],
      outcome: 'Recovered',
      explanation: 'ACE inhibitors prevent the enzymatic breakdown of Bradykinin and Substance P in pulmonary airways, leading to local airway irritation and persistent dry cough in 5-20% of patients. Because this is a direct pharmacological consequence of ACE enzyme inhibition, it is classified as Type A (Augmented).',
      learningPoints: '1. ACE-inhibitor induced dry cough is non-productive and resistant to standard cough syrups.\n2. Mechanism is accumulation of airway bradykinin, an expected pharmacological consequence (Type A).\n3. Switching to an Angiotensin Receptor Blocker (ARB) such as Losartan or Telmisartan resolves symptoms without losing blood pressure control.'
    }
  },
  {
    id: 3,
    caseNumber: 'CASE-03',
    title: 'Severe Muscle Weakness & Dark Urine Following Antibiotic Addition',
    difficulty: 'HARD',
    category: 'Drug Interactions & Musculoskeletal',
    summary: 'A 62-year-old male on high-dose Atorvastatin developed severe bilateral thigh pain, generalized weakness, and dark cola-colored urine 5 days after adding Clarithromycin for bronchitis.',
    patient: {
      name: 'Mr. Rajesh K.',
      age: 62,
      gender: 'Male',
      weight: 74.0,
      diagnosis: 'Coronary Artery Disease & Acute Bacterial Bronchitis',
      chiefComplaints: 'Severe aching pain in bilateral thighs and calves, profound fatigue, difficulty standing from a seated position, and dark brown (tea-colored) urine.'
    },
    medications: [
      { id: 9, name: 'Atorvastatin', dose: '40 mg', frequency: 'HS', route: 'Oral', startDay: '2 years ago', indication: 'Dyslipidemia & Secondary CAD Prevention', isSuspected: true },
      { id: 10, name: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral', startDay: '2 years ago', indication: 'Antiplatelet therapy', isSuspected: false },
      { id: 11, name: 'Clarithromycin', dose: '500 mg', frequency: 'BD', route: 'Oral', startDay: '5 days ago', indication: 'Acute Exacerbation of Chronic Bronchitis', isSuspected: false },
      { id: 12, name: 'Pantoprazole', dose: '40 mg', frequency: 'OD', route: 'Oral', startDay: '1 year ago', indication: 'Gastroprotection', isSuspected: false }
    ],
    symptoms: [
      { id: 8, dayOnset: 'Day 1', description: 'Started Clarithromycin 500 mg BD for persistent cough and purulent sputum.', severity: 'None' },
      { id: 9, dayOnset: 'Day 3', description: 'Began experiencing progressive symmetrical calf and thigh soreness.', severity: 'Moderate' },
      { id: 10, dayOnset: 'Day 5', description: 'Severe muscle weakness preventing walking, accompanied by passage of dark tea-colored urine.', severity: 'Severe' }
    ],
    clues: [
      { id: 13, category: 'MEDICINE_HISTORY', title: 'Drug-Drug Interaction Analysis', content: 'Patient took Atorvastatin 40 mg safely for 2 years. 5 days ago, Clarithromycin 500 mg BD was added. Clarithromycin is a potent CYP3A4 inhibitor that blocks Atorvastatin elimination.', icon: 'Pill', sortOrder: 1 },
      { id: 14, category: 'SYMPTOM_TIMELINE', title: 'Rapid Onset of Myopathy', content: 'Day 1: Antibiotic started -> Day 3: Myalgias manifest -> Day 5: Overt weakness, CPK surge, myoglobinuria.', icon: 'Clock', sortOrder: 2 },
      { id: 15, category: 'PAST_HISTORY', title: 'Cardiovascular History', content: 'Post-PTCA stenting 2 years ago. No prior muscle disorders, neuromuscular disease, or renal disease.', icon: 'FileText', sortOrder: 3 },
      { id: 16, category: 'ALLERGY_HISTORY', title: 'Allergy Background', content: 'No drug or food allergies documented.', icon: 'AlertCircle', sortOrder: 4 },
      { id: 17, category: 'LAB_REPORTS', title: 'Critical Lab Values', content: 'Serum Creatine Phosphokinase (CPK): 18,400 IU/L (Normal: 30-200 IU/L). Serum Creatinine: 2.1 mg/dL (Baseline 0.9 mg/dL). Urine Dipstick: Positive for blood without intact RBCs (Myoglobinuria).', icon: 'Activity', sortOrder: 5 },
      { id: 18, category: 'DECHALLENGE_RECHALLENGE', title: 'Urgent Intervention & Dechallenge', content: 'Atorvastatin was stopped immediately. With vigorous IV saline hydration, CPK dropped below 500 IU/L within 7 days, and renal function normalized.', icon: 'RefreshCw', sortOrder: 6 }
    ],
    expectedAnswers: {
      suspectedDrug: 'Atorvastatin',
      reactionName: 'Rhabdomyolysis',
      reactionType: 'A',
      severity: 'SEVERE',
      causality: 'PROBABLE',
      interventions: ['STOP_DRUG', 'REFER_PHYSICIAN', 'SYMPTOMATIC_TREATMENT', 'MONITOR_PATIENT'],
      outcome: 'Recovered',
      explanation: 'Clarithromycin is a potent inhibitor of hepatic CYP3A4 and OATP1B1 transporters. Co-administration dramatically increases plasma concentrations of Atorvastatin by 400-500%, precipitating dose-dependent statin myopathy and skeletal muscle necrosis (Rhabdomyolysis). As an exaggerated pharmacokinetic interaction, it is Type A.',
      learningPoints: '1. Macrolides (Clarithromycin/Erythromycin) are potent CYP3A4 inhibitors that increase statin toxicity.\n2. Dark/tea-colored urine with myalgia is a clinical hallmark of myoglobinuria in rhabdomyolysis.\n3. Prompt cessation and vigorous IV hydration prevent myoglobin-induced acute tubular necrosis.'
    }
  },
  {
    id: 4,
    caseNumber: 'CASE-04',
    title: 'Delayed Jaundice & Pruritus Following Dental Antibiotic Course',
    difficulty: 'MEDIUM',
    category: 'Hepatic & Antimicrobials',
    summary: 'A 31-year-old female developed yellow discoloration of sclera, dark urine, pale stools, and generalized pruritus 2 weeks after finishing a 7-day course of Amoxicillin-Clavulanate for a dental abscess.',
    patient: {
      name: 'Ms. Ananya M.',
      age: 31,
      gender: 'Female',
      weight: 54.0,
      diagnosis: 'Recent Dental Infection (Resolved)',
      chiefComplaints: 'Deep yellowing of eyes and skin, pale clay-colored stools, dark amber urine, and persistent whole-body itching for 4 days.'
    },
    medications: [
      { id: 13, name: 'Amoxicillin-Clavulanate', dose: '625 mg', frequency: 'TDS', route: 'Oral', startDay: '3 weeks ago (7-day course)', indication: 'Periapical Dental Abscess', isSuspected: true },
      { id: 14, name: 'Ibuprofen', dose: '400 mg', frequency: 'SOS', route: 'Oral', startDay: '3 weeks ago (3 days only)', indication: 'Dental Pain', isSuspected: false },
      { id: 15, name: 'Oral Contraceptive Pill', dose: '1 tab', frequency: 'OD', route: 'Oral', startDay: '1 year ago', indication: 'Contraception', isSuspected: false }
    ],
    symptoms: [
      { id: 11, dayOnset: 'Day 1-7', description: 'Completed 7-day course of Co-Amoxiclav 625 mg TDS for tooth abscess. Tooth healed well.', severity: 'None' },
      { id: 12, dayOnset: 'Day 18', description: 'Mild fatigue and loss of appetite noted.', severity: 'Mild' },
      { id: 13, dayOnset: 'Day 21', description: 'Overt scleral icterus, dark urine, pale stools, and intense itching developed.', severity: 'Moderate' }
    ],
    clues: [
      { id: 19, category: 'MEDICINE_HISTORY', title: 'Recent Antimicrobial Exposure', content: 'Patient took Amoxicillin-Clavulanate 625 mg TDS for 7 days, finished 2 weeks ago. Currently only on long-term OCP.', icon: 'Pill', sortOrder: 1 },
      { id: 20, category: 'SYMPTOM_TIMELINE', title: 'Delayed Latency Characteristic', content: 'Reaction presented 14 days AFTER finishing the antimicrobial course. This latency window is highly characteristic of Clavulanate-induced cholestasis.', icon: 'Clock', sortOrder: 2 },
      { id: 21, category: 'PAST_HISTORY', title: 'Medical & Social History', content: 'No history of alcohol abuse, hepatitis, cholelithiasis (gallstones), or autoimmune disease.', icon: 'FileText', sortOrder: 3 },
      { id: 22, category: 'ALLERGY_HISTORY', title: 'Allergy Background', content: 'No previous history of drug reactions or jaundice.', icon: 'AlertCircle', sortOrder: 4 },
      { id: 23, category: 'LAB_REPORTS', title: 'Liver Function Panel', content: 'Total Bilirubin: 6.8 mg/dL (Direct: 5.1 mg/dL). ALP: 480 IU/L (Ref: 40-125). GGT: 310 IU/L. Viral Hepatitis Serology (A, B, C, E): Negative. Abdominal Ultrasound: Normal biliary tree.', icon: 'Activity', sortOrder: 5 },
      { id: 24, category: 'DECHALLENGE_RECHALLENGE', title: 'Clinical Recovery', content: 'With supportive care and cessation of non-essential medications, jaundice and liver enzymes steadily normalized at 6-week follow-up.', icon: 'RefreshCw', sortOrder: 6 }
    ],
    expectedAnswers: {
      suspectedDrug: 'Amoxicillin-Clavulanate',
      reactionName: 'Cholestatic jaundice',
      reactionType: 'B',
      severity: 'MODERATE',
      causality: 'PROBABLE',
      interventions: ['STOP_DRUG', 'SYMPTOMATIC_TREATMENT', 'REFER_PHYSICIAN', 'MONITOR_PATIENT'],
      outcome: 'Recovered',
      explanation: 'Amoxicillin-Clavulanate is a classic cause of idiosyncratic cholestatic drug-induced liver injury (DILI), primarily driven by the clavulanate component. It characteristically exhibits a delayed latency of 1 to 4 weeks after drug discontinuation. It is a Type B idiosyncratic immune-mediated reaction.',
      learningPoints: '1. Drug-induced liver injury (DILI) can present weeks AFTER finishing an antibiotic course.\n2. Amoxicillin-Clavulanic acid is one of the most common causes of idiosyncratic cholestatic jaundice.\n3. Elevated Alkaline Phosphatase (ALP) and GGT with high direct bilirubin indicate a cholestatic pattern.'
    }
  },
  {
    id: 5,
    caseNumber: 'CASE-05',
    title: 'Nausea, Xanthopsia & Bradycardia in Congestive Heart Failure',
    difficulty: 'HARD',
    category: 'Cardiovascular & Electrolytes',
    summary: 'A 70-year-old male with chronic heart failure developed severe nausea, blurred yellow-tinged vision (xanthopsia), confusion, and marked bradycardia after increasing his loop diuretic dose.',
    patient: {
      name: 'Mr. Mohan P.',
      age: 70,
      gender: 'Male',
      weight: 60.0,
      diagnosis: 'Congestive Heart Failure (NYHA Class III) & Atrial Fibrillation',
      chiefComplaints: 'Severe nausea, loss of appetite, seeing yellow-green rings around lights (xanthopsia), dizziness, palpitations, and heart rate of 44 bpm.'
    },
    medications: [
      { id: 16, name: 'Digoxin', dose: '0.25 mg', frequency: 'OD', route: 'Oral', startDay: '1 year ago', indication: 'Atrial Fibrillation & Heart Failure', isSuspected: true },
      { id: 17, name: 'Furosemide', dose: '80 mg', frequency: 'OD', route: 'Oral', startDay: '10 days ago (doubled)', indication: 'Peripheral Edema & Volume Overload', isSuspected: false },
      { id: 18, name: 'Ramipril', dose: '2.5 mg', frequency: 'OD', route: 'Oral', startDay: '1 year ago', indication: 'Heart Failure', isSuspected: false },
      { id: 19, name: 'Carvedilol', dose: '6.25 mg', frequency: 'BD', route: 'Oral', startDay: '6 months ago', indication: 'Heart Failure', isSuspected: false }
    ],
    symptoms: [
      { id: 14, dayOnset: 'Day 1', description: 'Furosemide dose increased from 40 mg to 80 mg OD for pedal edema.', severity: 'None' },
      { id: 15, dayOnset: 'Day 6', description: 'Patient lost appetite and complained of persistent nausea.', severity: 'Moderate' },
      { id: 16, dayOnset: 'Day 10', description: 'Visual halos (yellow-tinted vision), dizziness, confusion, and pulse rate dropped to 44 bpm.', severity: 'Severe' }
    ],
    clues: [
      { id: 25, category: 'MEDICINE_HISTORY', title: 'Diuretic Escalation', content: 'Furosemide was doubled from 40 mg to 80 mg daily 10 days ago without adding a potassium supplement or potassium-sparing agent.', icon: 'Pill', sortOrder: 1 },
      { id: 26, category: 'SYMPTOM_TIMELINE', title: 'Electrolyte Depletion & Toxicity', content: 'Day 1: Diuretic increased -> Day 5-6: Polyuria & hypokalemia develops -> Day 6: Nausea -> Day 10: Visual disturbances & heart block.', icon: 'Clock', sortOrder: 2 },
      { id: 27, category: 'PAST_HISTORY', title: 'Cardiac History', content: 'Ischemic cardiomyopathy, permanent atrial fibrillation, chronic biventricular systolic dysfunction (LVEF 32%).', icon: 'FileText', sortOrder: 3 },
      { id: 28, category: 'ALLERGY_HISTORY', title: 'Allergy Background', content: 'No allergies to digitalis or sulfonamide diuretics.', icon: 'AlertCircle', sortOrder: 4 },
      { id: 29, category: 'LAB_REPORTS', title: 'Serum Electrolytes & Digoxin Level', content: 'Serum Potassium: 2.8 mEq/L (Critical Low, Ref: 3.5-5.0). Serum Digoxin: 2.6 ng/mL (Toxic, Ref: 0.8-2.0 ng/mL). ECG: Junctional bradycardia at 44 bpm with scooped ST depression.', icon: 'Activity', sortOrder: 5 },
      { id: 30, category: 'DECHALLENGE_RECHALLENGE', title: 'Correction & Recovery', content: 'Digoxin was held and slow IV Potassium chloride infusion administered. Heart rate returned to sinus rhythm (72 bpm) and visual halos resolved over 48 hours.', icon: 'RefreshCw', sortOrder: 6 }
    ],
    expectedAnswers: {
      suspectedDrug: 'Digoxin',
      reactionName: 'Digoxin toxicity',
      reactionType: 'A',
      severity: 'SEVERE',
      causality: 'PROBABLE',
      interventions: ['STOP_DRUG', 'DOSE_ADJUSTMENT', 'REFER_PHYSICIAN', 'SYMPTOMATIC_TREATMENT', 'MONITOR_PATIENT'],
      outcome: 'Recovered',
      explanation: 'Loop diuretics like Furosemide cause renal potassium and magnesium wasting. Hypokalemia drastically sensitizes myocardial Na+/K+ ATPase pumps to Digoxin binding, precipitating severe Digoxin toxicity even at borderline-therapeutic serum concentrations. As an exaggerated pharmacological consequence of electrolyte disruption, it is Type A.',
      learningPoints: '1. Loop diuretics (Furosemide) induce hypokalemia which potentiates Digoxin toxicity.\n2. Xanthopsia (yellow-green halos) and gastrointestinal distress are hallmark early signs of digitalis intoxication.\n3. Serum potassium and renal function must be monitored routinely in patients taking digitalis.'
    }
  }
];

export const FALLBACK_REACTION_TYPES = [
  { code: 'A', name: 'Augmented Pharmacological Effect', mnemonic: 'Dose-related / Predictable', description: 'Common, dose-dependent reactions predictable from the known pharmacology of the drug. High incidence with low mortality.', mechanism: 'Exaggerated target receptor binding, excessive therapeutic effect, altered pharmacokinetics, or predictable toxic mechanism.', clinicalExamples: 'Postural hypotension from ACE inhibitors, bleeding from Warfarin, hypoglycemia from Sulfonylureas, dry cough from ACE inhibitors.' },
  { code: 'B', name: 'Bizarre / Idiosyncratic', mnemonic: 'Non-dose-related / Unpredictable', description: 'Uncommon, unpredictable reactions not related to known pharmacology. Often immune-mediated or genetic. High mortality potential.', mechanism: 'IgE-mediated hypersensitivity, T-cell mediated allergic skin eruptions, genetic metabolic enzyme polymorphisms.', clinicalExamples: 'Anaphylaxis from Penicillin, Maculopapular rash from Ofloxacin/Sulfonamides, SJS/TEN from Allopurinol, Agranulocytosis from Clozapine.' },
  { code: 'C', name: 'Chronic / Dose & Time Related', mnemonic: 'Dose & Time related', description: 'Reactions associated with cumulative dose and long-term continuous drug administration.', mechanism: 'Tissue accumulation, prolonged receptor down-regulation, or slow metabolic organ alteration over months/years.', clinicalExamples: 'Cushing syndrome with chronic systemic Corticosteroids, Adrenal suppression, Nephropathy from chronic NSAID use.' },
  { code: 'D', name: 'Delayed Effects', mnemonic: 'Time related / Latent', description: 'Reactions that manifest long after drug exposure, including teratogenic or carcinogenic consequences.', mechanism: 'Germ cell mutations, altered fetal organogenesis, or chromosomal damage with long latency period.', clinicalExamples: 'Phocomelia from Thalidomide, Clear cell adenocarcinoma from Diethylstilbestrol, secondary leukemias after alkylating chemotherapy.' },
  { code: 'E', name: 'End of Use / Withdrawal', mnemonic: 'Withdrawal related', description: 'Reactions occurring shortly after abrupt cessation of long-term drug therapy.', mechanism: 'Rebound physiological hyper-reactivity, receptor up-regulation following prolonged blockade, or sudden lack of hormonal feedback.', clinicalExamples: 'Rebound hypertension upon sudden Clonidine withdrawal, Opioid abstinence syndrome, status epilepticus after abrupt Benzodiazepine stop.' },
  { code: 'F', name: 'Failure of Therapy', mnemonic: 'Inefficacy / Unexpected failure', description: 'Unexpected lack of therapeutic response, often related to drug-drug interactions, counterfeit formulation, resistance, or wrong dose.', mechanism: 'CYP enzyme induction decreasing active drug concentration, chelation reducing absorption, or antimicrobial target mutations.', clinicalExamples: 'Pregnancy during combined Oral Contraceptive + Rifampicin therapy due to CYP3A4 induction, failure of antibiotic due to beta-lactamase.' }
];
