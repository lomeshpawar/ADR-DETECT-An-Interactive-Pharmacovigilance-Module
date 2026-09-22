-- ADR-DETECT Seed Data

-- 1. Configurable Reaction Types A to F
INSERT INTO reaction_type_info (code, name, mnemonic, description, mechanism, clinical_examples) VALUES
('A', 'Augmented Pharmacological Effect', 'Dose-related / Predictable', 'Common, dose-dependent reactions predictable from the known pharmacology of the drug. High incidence with low mortality.', 'Exaggerated target receptor binding, excessive therapeutic effect, altered pharmacokinetics, or predictable toxic mechanism.', 'Postural hypotension from ACE inhibitors, bleeding from Warfarin, hypoglycemia from Sulfonylureas, dry cough from ACE inhibitors.'),
('B', 'Bizarre / Idiosyncratic', 'Non-dose-related / Unpredictable', 'Uncommon, unpredictable reactions not related to known pharmacology. Often immune-mediated or genetic. High mortality potential.', 'IgE-mediated hypersensitivity, T-cell mediated allergic skin eruptions, genetic metabolic enzyme polymorphisms.', 'Anaphylaxis from Penicillin, Maculopapular rash from Ofloxacin/Sulfonamides, SJS/TEN from Allopurinol, Agranulocytosis from Clozapine.'),
('C', 'Chronic / Dose & Time Related', 'Dose & Time related', 'Reactions associated with cumulative dose and long-term continuous drug administration.', 'Tissue accumulation, prolonged receptor down-regulation, or slow metabolic organ alteration over months/years.', 'Cushing syndrome with chronic systemic Corticosteroids, Adrenal suppression, Nephropathy from chronic NSAID use.'),
('D', 'Delayed Effects', 'Time related / Latent', 'Reactions that manifest long after drug exposure, including teratogenic or carcinogenic consequences.', 'Germ cell mutations, altered fetal organogenesis, or chromosomal damage with long latency period.', 'Phocomelia from Thalidomide, Clear cell adenocarcinoma from Diethylstilbestrol, secondary leukemias after alkylating chemotherapy.'),
('E', 'End of Use / Withdrawal', 'Withdrawal related', 'Reactions occurring shortly after abrupt cessation of long-term drug therapy.', 'Rebound physiological hyper-reactivity, receptor up-regulation following prolonged blockade, or sudden lack of hormonal feedback.', 'Rebound hypertension upon sudden Clonidine withdrawal, Opioid abstinence syndrome, status epilepticus after abrupt Benzodiazepine stop.'),
('F', 'Failure of Therapy', 'Inefficacy / Unexpected failure', 'Unexpected lack of therapeutic response, often related to drug-drug interactions, counterfeit formulation, resistance, or wrong dose.', 'CYP enzyme induction decreasing active drug concentration, chelation reducing absorption, or antimicrobial target mutations.', 'Pregnancy during combined Oral Contraceptive + Rifampicin therapy due to CYP3A4 induction, failure of antibiotic due to beta-lactamase.');

-- 2. Educational Cases
-- CASE 1: Mr. Ramesh S. (Ofloxacin Skin Rash)
INSERT INTO cases (id, case_number, title, difficulty, category, summary, suspected_drug, reaction_name, reaction_type_code, severity, causality, correct_interventions, outcome, dechallenge_info, rechallenge_info, clinical_explanation, learning_points) VALUES
(1, 'CASE-01', 'Dermatological Reaction in a Diabetic Patient', 'EASY', 'Dermatology & Antimicrobials', 'A 56-year-old male with Type 2 Diabetes Mellitus presented with acute diffuse erythematous rash, severe pruritus, and low-grade fever after starting an oral antimicrobial.', 'Ofloxacin', 'Skin rash', 'B', 'MILD', 'PROBABLE', 'STOP_DRUG,SYMPTOMATIC_TREATMENT,MONITOR_PATIENT', 'Recovered', 'Ofloxacin was discontinued on Day 4. Antihistamine lotion and oral Cetirizine were started. Within 48 hours, rash faded and itching completely resolved.', 'Rechallenge was not performed due to ethical and patient safety guidelines for immune-mediated drug eruptions.', 'The temporal sequence (onset 48-72h post-Ofloxacin initiation), lack of previous rash with chronic Metformin/Glimepiride, positive dechallenge, and known fluoroquinolone hypersensitivity pattern establish a Probable causal association. It is classified as Type B (Bizarre/Unpredictable) because cutaneous hypersensitivity is not an extension of the antibacterial topoisomerase-inhibition pharmacology.', '1. Always map symptom onset timeline against newly introduced medications versus stable chronic regimens.\n2. Fluoroquinolones can trigger allergic dermatological eruptions.\n3. Type B reactions are unpredictable and dose-independent.\n4. Timely dechallenge and reporting prevent progression to severe cutaneous adverse reactions (SCARs).');

INSERT INTO patients (id, case_id, name, age, gender, weight, diagnosis, chief_complaints) VALUES
(1, 1, 'Mr. Ramesh S.', 56, 'Male', 68.0, 'Type 2 Diabetes Mellitus & Acute Urinary Tract Infection', 'Diffuse red maculopapular rashes across torso and arms, severe itching (pruritus), low-grade fever (99.4°F), and mild nausea.');

INSERT INTO medications (id, case_id, name, dose, frequency, route, start_day, indication, is_suspected) VALUES
(1, 1, 'Metformin', '500 mg', 'BD (Twice Daily)', 'Oral', '3 years ago', 'Type 2 Diabetes Mellitus', false),
(2, 1, 'Glimepiride', '2 mg', 'OD (Once Daily)', 'Oral', '1 year ago', 'Type 2 Diabetes Mellitus', false),
(3, 1, 'Ofloxacin', '200 mg', 'BD (Twice Daily)', 'Oral', 'Day 1 (4 days ago)', 'Acute Urinary Tract Infection', true),
(4, 1, 'Paracetamol', '650 mg', 'SOS (As needed)', 'Oral', 'Day 3', 'Fever & Malaise', false),
(5, 1, 'Ranitidine', '150 mg', 'BD (Twice Daily)', 'Oral', '2 years ago', 'Gastric hyperacidity', false);

INSERT INTO symptoms (id, case_id, day_onset, description, severity) VALUES
(1, 1, 'Day 1', 'Ofloxacin 200 mg BD prescribed and initiated for UTI symptoms.', 'None'),
(2, 1, 'Day 2', 'Patient noticed mild localized itching on forearms in the evening.', 'Mild'),
(3, 1, 'Day 3', 'Erythematous maculopapular rash erupted over chest, abdomen, and arms with intensified pruritus.', 'Mild'),
(4, 1, 'Day 4', 'Low-grade fever (99.4°F) and nausea noted; patient reported back to clinic.', 'Moderate');

INSERT INTO clues (id, case_id, category, title, content, icon, sort_order) VALUES
(1, 1, 'MEDICINE_HISTORY', 'Prescription Timeline Review', 'Metformin and Glimepiride have been taken continuously for over 12 months with excellent glycemic control and zero adverse events. Ofloxacin 200 mg BD is the only newly added chemical agent, started 4 days ago for dysuria.', 'Pill', 1),
(2, 1, 'SYMPTOM_TIMELINE', 'Temporal Correlation', 'Day 1: Ofloxacin started -> Day 2: Pruritus begins -> Day 3: Erythematous rash spreads -> Day 4: Patient seeks medical evaluation. Distinct temporal relationship between new drug introduction and reaction onset.', 'Clock', 2),
(3, 1, 'PAST_HISTORY', 'Chronic Medical History', 'Known diabetic for 5 years. No previous history of eczema, psoriasis, asthma, or food allergies. No family history of hereditary skin disorders.', 'FileText', 3),
(4, 1, 'ALLERGY_HISTORY', 'Previous Drug Exposure', 'No known drug allergies (NKDA) documented in past hospital visits. This is the patient''s first lifetime exposure to fluoroquinolone antimicrobials.', 'AlertCircle', 4),
(5, 1, 'LAB_REPORTS', 'Laboratory Investigation', 'HbA1c: 7.1%. Fasting Blood Sugar: 128 mg/dL. CBC: Mild peripheral eosinophilia (6.8%, reference 1-4%), Normal Platelet count (240,000/mcL). Renal & Liver function tests normal.', 'Activity', 5),
(6, 1, 'DECHALLENGE_RECHALLENGE', 'Dechallenge Observation', 'Positive dechallenge: Ofloxacin was stopped on Day 4. With oral Cetirizine 10 mg OD and Calamine lotion, the rash diminished significantly within 36 hours and fully cleared by Day 7 without residual scarring.', 'RefreshCw', 6);

-- CASE 2: Mrs. Sunita D. (Enalapril Dry Cough)
INSERT INTO cases (id, case_number, title, difficulty, category, summary, suspected_drug, reaction_name, reaction_type_code, severity, causality, correct_interventions, outcome, dechallenge_info, rechallenge_info, clinical_explanation, learning_points) VALUES
(2, 'CASE-02', 'Persistent Nocturnal Cough in a Hypertensive Patient', 'EASY', 'Cardiovascular & Respiratory', 'A 48-year-old female presents with a non-productive, hacking cough worsening at night for 3 weeks, following initiation of antihypertensive monotherapy.', 'Enalapril', 'Dry cough', 'A', 'MILD', 'PROBABLE', 'STOP_DRUG,REFER_PHYSICIAN,MONITOR_PATIENT', 'Recovered', 'Enalapril was switched to Losartan (an ARB). The dry cough completely ceased after 8 days.', 'Not performed; known class effect mechanism well documented.', 'ACE inhibitors prevent the enzymatic breakdown of Bradykinin and Substance P in pulmonary airways, leading to local airway irritation and persistent dry cough in 5-20% of patients. Because this is a direct pharmacological consequence of ACE enzyme inhibition, it is classified as Type A (Augmented).', '1. ACE-inhibitor induced dry cough is non-productive and resistant to standard cough syrups.\n2. Mechanism is accumulation of airway bradykinin, an expected pharmacological consequence (Type A).\n3. Switching to an Angiotensin Receptor Blocker (ARB) such as Losartan or Telmisartan resolves symptoms without losing blood pressure control.');

INSERT INTO patients (id, case_id, name, age, gender, weight, diagnosis, chief_complaints) VALUES
(2, 2, 'Mrs. Sunita D.', 48, 'Female', 62.0, 'Essential Hypertension (Stage 1)', 'Persistent, dry, tickling cough predominantly at night disturbing sleep for 3 weeks. No sputum production, no fever, no shortness of breath.');

INSERT INTO medications (id, case_id, name, dose, frequency, route, start_day, indication, is_suspected) VALUES
(6, 2, 'Enalapril', '5 mg', 'OD (Once Daily)', 'Oral', '4 weeks ago', 'Essential Hypertension', true),
(7, 2, 'Calcium + Vitamin D3', '500 mg', 'OD (Once Daily)', 'Oral', '6 months ago', 'Osteopenia prophylaxis', false),
(8, 2, 'Dextromethorphan syrup', '10 ml', 'TDS', 'Oral', '1 week ago', 'Self-treatment for cough', false);

INSERT INTO symptoms (id, case_id, day_onset, description, severity) VALUES
(5, 2, 'Week 1', 'Initiated Enalapril 5 mg OD for elevated BP (148/94 mmHg).', 'None'),
(6, 2, 'Week 2', 'Noticed tickling sensation in throat with sporadic dry cough.', 'Mild'),
(7, 2, 'Week 3-4', 'Intense nocturnal hacking cough causing insomnia. OTC cough syrup ineffective.', 'Moderate');

INSERT INTO clues (id, case_id, category, title, content, icon, sort_order) VALUES
(7, 2, 'MEDICINE_HISTORY', 'Antihypertensive Initiation', 'Enalapril 5 mg daily was started 4 weeks ago. Blood pressure decreased to 126/82 mmHg, but cough began ~7-10 days after starting.', 'Pill', 1),
(8, 2, 'SYMPTOM_TIMELINE', 'Onset Timing', 'Onset began in week 2 of Enalapril therapy. Progressively increased in frequency. Refractory to antihistamines and Dextromethorphan.', 'Clock', 2),
(9, 2, 'PAST_HISTORY', 'Respiratory History', 'No history of asthma, COPD, gastroesophageal reflux (GERD), or chronic post-nasal drip. Non-smoker.', 'FileText', 3),
(10, 2, 'ALLERGY_HISTORY', 'Allergy Background', 'No history of seasonal rhinitis, food allergies, or atopy.', 'AlertCircle', 4),
(11, 2, 'LAB_REPORTS', 'Chest X-Ray & Labs', 'Chest X-Ray (PA view): Clear lung fields, normal bronchovascular markings, no consolidation. Serum Creatinine: 0.9 mg/dL. Serum Potassium: 4.4 mEq/L.', 'Activity', 5),
(12, 2, 'DECHALLENGE_RECHALLENGE', 'Dechallenge & Drug Substitution', 'Positive dechallenge: Enalapril was stopped and replaced by Losartan 50 mg OD. Cough completely subsided within 8 days.', 'RefreshCw', 6);

-- CASE 3: Mr. Rajesh K. (Statin-Macrolide Rhabdomyolysis)
INSERT INTO cases (id, case_number, title, difficulty, category, summary, suspected_drug, reaction_name, reaction_type_code, severity, causality, correct_interventions, outcome, dechallenge_info, rechallenge_info, clinical_explanation, learning_points) VALUES
(3, 'CASE-03', 'Severe Muscle Weakness & Dark Urine Following Antibiotic Addition', 'HARD', 'Drug Interactions & Musculoskeletal', 'A 62-year-old male on high-dose Atorvastatin developed severe bilateral thigh pain, generalized weakness, and dark cola-colored urine 5 days after adding Clarithromycin for bronchitis.', 'Atorvastatin', 'Rhabdomyolysis', 'A', 'SEVERE', 'PROBABLE', 'STOP_DRUG,REFER_PHYSICIAN,SYMPTOMATIC_TREATMENT,MONITOR_PATIENT', 'Recovered', 'Both Atorvastatin and Clarithromycin were immediately discontinued. Aggressive IV isotonic hydration with urine alkalinization was initiated. CPK levels normalized over 10 days.', 'Rechallenge is contraindicated due to risk of acute renal failure.', 'Clarithromycin is a potent inhibitor of hepatic CYP3A4 and OATP1B1 transporters. Co-administration dramatically increases plasma concentrations of Atorvastatin by 400-500%, precipitating dose-dependent statin myopathy and skeletal muscle necrosis (Rhabdomyolysis). As an exaggerated pharmacokinetic interaction, it is Type A.', '1. Macrolides (Clarithromycin/Erythromycin) are potent CYP3A4 inhibitors that increase statin toxicity.\n2. Dark/tea-colored urine with myalgia is a clinical hallmark of myoglobinuria in rhabdomyolysis.\n3. Prompt cessation and vigorous IV hydration prevent myoglobin-induced acute tubular necrosis.');

INSERT INTO patients (id, case_id, name, age, gender, weight, diagnosis, chief_complaints) VALUES
(3, 3, 'Mr. Rajesh K.', 62, 'Male', 74.0, 'Coronary Artery Disease & Acute Bacterial Bronchitis', 'Severe aching pain in bilateral thighs and calves, profound fatigue, difficulty standing from a seated position, and dark brown (tea-colored) urine.');

INSERT INTO medications (id, case_id, name, dose, frequency, route, start_day, indication, is_suspected) VALUES
(9, 3, 'Atorvastatin', '40 mg', 'HS (At Bedtime)', 'Oral', '2 years ago', 'Dyslipidemia & Secondary CAD Prevention', true),
(10, 3, 'Aspirin', '75 mg', 'OD (Once Daily)', 'Oral', '2 years ago', 'Antiplatelet therapy', false),
(11, 3, 'Clarithromycin', '500 mg', 'BD (Twice Daily)', 'Oral', '5 days ago', 'Acute Exacerbation of Chronic Bronchitis', false),
(12, 3, 'Pantoprazole', '40 mg', 'OD (Once Daily)', 'Oral', '1 year ago', 'Gastroprotection', false);

INSERT INTO symptoms (id, case_id, day_onset, description, severity) VALUES
(8, 3, 'Day 1', 'Started Clarithromycin 500 mg BD for persistent cough and purulent sputum.', 'None'),
(9, 3, 'Day 3', 'Began experiencing progressive symmetrical calf and thigh soreness.', 'Moderate'),
(10, 3, 'Day 5', 'Severe muscle weakness preventing walking, accompanied by passage of dark tea-colored urine.', 'Severe');

INSERT INTO clues (id, case_id, category, title, content, icon, sort_order) VALUES
(13, 3, 'MEDICINE_HISTORY', 'Drug-Drug Interaction Analysis', 'Patient took Atorvastatin 40 mg safely for 2 years. 5 days ago, Clarithromycin 500 mg BD was added. Clarithromycin is a potent CYP3A4 inhibitor that blocks Atorvastatin elimination.', 'Pill', 1),
(14, 3, 'SYMPTOM_TIMELINE', 'Rapid Onset of Myopathy', 'Day 1: Antibiotic started -> Day 3: Myalgias manifest -> Day 5: Overt weakness, CPK surge, myoglobinuria.', 'Clock', 2),
(15, 3, 'PAST_HISTORY', 'Cardiovascular History', 'Post-PTCA stenting 2 years ago. No prior muscle disorders, neuromuscular disease, or renal disease.', 'FileText', 3),
(16, 3, 'ALLERGY_HISTORY', 'Allergy Background', 'No drug or food allergies documented.', 'AlertCircle', 4),
(17, 3, 'LAB_REPORTS', 'Critical Lab Values', 'Serum Creatine Phosphokinase (CPK): 18,400 IU/L (Normal: 30-200 IU/L). Serum Creatinine: 2.1 mg/dL (Baseline 0.9 mg/dL). Urine Dipstick: Strongly positive for blood, but microscopic exam shows 0-1 RBCs/HPF (indicates Myoglobinuria).', 'Activity', 5),
(18, 3, 'DECHALLENGE_RECHALLENGE', 'Urgent Intervention & Dechallenge', 'Atorvastatin was stopped immediately. With vigorous IV saline hydration, CPK dropped below 500 IU/L within 7 days, and renal function normalized.', 'RefreshCw', 6);

-- CASE 4: Ms. Ananya M. (Amoxicillin-Clavulanate Cholestatic Jaundice)
INSERT INTO cases (id, case_number, title, difficulty, category, summary, suspected_drug, reaction_name, reaction_type_code, severity, causality, correct_interventions, outcome, dechallenge_info, rechallenge_info, clinical_explanation, learning_points) VALUES
(4, 'CASE-04', 'Delayed Jaundice & Pruritus Following Dental Antibiotic Course', 'MEDIUM', 'Hepatic & Antimicrobials', 'A 31-year-old female developed yellow discoloration of sclera, dark urine, pale stools, and generalized pruritus 2 weeks after finishing a 7-day course of Amoxicillin-Clavulanate for a dental abscess.', 'Amoxicillin-Clavulanate', 'Cholestatic jaundice', 'B', 'MODERATE', 'PROBABLE', 'STOP_DRUG,SYMPTOMATIC_TREATMENT,REFER_PHYSICIAN,MONITOR_PATIENT', 'Recovered', 'Supportive management with Ursodeoxycholic acid and antipruritic therapy was provided. Bilirubin and hepatic enzymes normalized completely over 6 weeks.', 'Rechallenge strictly avoided due to recurrence risk.', 'Amoxicillin-Clavulanate is a classic cause of idiosyncratic cholestatic and mixed drug-induced liver injury (DILI), primarily driven by the clavulanate component. It characteristically exhibits a delayed latency of 1 to 4 weeks after drug discontinuation. It is a Type B idiosyncratic immune-mediated reaction.', '1. Drug-induced liver injury (DILI) can present weeks AFTER finishing an antibiotic course.\n2. Amoxicillin-Clavulanic acid is one of the most common causes of idiosyncratic cholestatic jaundice.\n3. Elevated Alkaline Phosphatase (ALP) and GGT with high direct bilirubin indicate a cholestatic pattern.');

INSERT INTO patients (id, case_id, name, age, gender, weight, diagnosis, chief_complaints) VALUES
(4, 4, 'Ms. Ananya M.', 31, 'Female', 54.0, 'Recent Dental Infection (Resolved)', 'Deep yellowing of eyes and skin, pale clay-colored stools, dark amber urine, and persistent whole-body itching for 4 days.');

INSERT INTO medications (id, case_id, name, dose, frequency, route, start_day, indication, is_suspected) VALUES
(13, 4, 'Amoxicillin-Clavulanate', '625 mg', 'TDS (Three times daily)', 'Oral', '3 weeks ago (7-day course)', 'Periapical Dental Abscess', true),
(14, 4, 'Ibuprofen', '400 mg', 'SOS (As needed)', 'Oral', '3 weeks ago (3 days only)', 'Dental Pain', false),
(15, 4, 'Oral Contraceptive Pill', '1 tab', 'OD (Once Daily)', 'Oral', '1 year ago', 'Contraception', false);

INSERT INTO symptoms (id, case_id, day_onset, description, severity) VALUES
(11, 4, 'Day 1-7', 'Completed 7-day course of Co-Amoxiclav 625 mg TDS for tooth abscess. Tooth healed well.', 'None'),
(12, 4, 'Day 18 (11 days post-completion)', 'Mild fatigue and loss of appetite noted.', 'Mild'),
(13, 4, 'Day 21 (14 days post-completion)', 'Overt scleral icterus, dark urine, pale stools, and intense itching developed.', 'Moderate');

INSERT INTO clues (id, case_id, category, title, content, icon, sort_order) VALUES
(19, 4, 'MEDICINE_HISTORY', 'Recent Antimicrobial Exposure', 'Patient took Amoxicillin-Clavulanate 625 mg TDS for 7 days, finished 2 weeks ago. Currently only on long-term OCP.', 'Pill', 1),
(20, 4, 'SYMPTOM_TIMELINE', 'Delayed Latency Characteristic', 'Reaction presented 14 days AFTER finishing the antimicrobial course. This latency window is highly characteristic of Clavulanate-induced cholestasis.', 'Clock', 2),
(21, 4, 'PAST_HISTORY', 'Medical & Social History', 'No history of alcohol abuse, hepatitis, cholelithiasis (gallstones), or autoimmune disease.', 'FileText', 3),
(22, 4, 'ALLERGY_HISTORY', 'Allergy Background', 'No previous history of drug reactions or jaundice.', 'AlertCircle', 4),
(23, 4, 'LAB_REPORTS', 'Liver Function Panel', 'Total Bilirubin: 6.8 mg/dL (Direct: 5.1 mg/dL). ALP: 480 IU/L (Ref: 40-125). GGT: 310 IU/L. ALT: 110 IU/L (Ref: 7-56). AST: 95 IU/L. Viral Hepatitis Serology (A, B, C, E): Negative. Abdominal Ultrasound: Normal biliary tree, no gallstones or ductal dilatation.', 'Activity', 5),
(24, 4, 'DECHALLENGE_RECHALLENGE', 'Clinical Recovery', 'With supportive care and cessation of all non-essential medications, jaundice and liver enzymes steadily improved and completely normalized at 6-week follow-up.', 'RefreshCw', 6);

-- CASE 5: Mr. Mohan P. (Furosemide-Digoxin Toxicity)
INSERT INTO cases (id, case_number, title, difficulty, category, summary, suspected_drug, reaction_name, reaction_type_code, severity, causality, correct_interventions, outcome, dechallenge_info, rechallenge_info, clinical_explanation, learning_points) VALUES
(5, 'CASE-05', 'Nausea, Xanthopsia & Bradycardia in Congestive Heart Failure', 'HARD', 'Cardiovascular & Electrolytes', 'A 70-year-old male with chronic heart failure developed severe nausea, blurred yellow-tinged vision (xanthopsia), confusion, and marked bradycardia after increasing his loop diuretic dose.', 'Digoxin', 'Digoxin toxicity', 'A', 'SEVERE', 'PROBABLE', 'STOP_DRUG,DOSE_ADJUSTMENT,REFER_PHYSICIAN,SYMPTOMATIC_TREATMENT,MONITOR_PATIENT', 'Recovered', 'Digoxin and Furosemide were held immediately. IV potassium replacement and continuous ECG monitoring were instituted. Serum Digoxin fell to safe range and heart rate normalized.', 'Rechallenge at lowered, monitored dose with potassium monitoring.', 'Loop diuretics like Furosemide cause renal potassium and magnesium wasting. Hypokalemia drastically sensitizes myocardial Na+/K+ ATPase pumps to Digoxin binding, precipitating severe Digoxin toxicity even at borderline-therapeutic serum concentrations. As an exaggerated pharmacological consequence of electrolyte disruption, it is Type A.', '1. Loop diuretics (Furosemide) induce hypokalemia which potentiates Digoxin toxicity.\n2. Xanthopsia (yellow-green halos) and gastrointestinal distress are hallmark early signs of digitalis intoxication.\n3. Serum potassium and renal function must be monitored routinely in patients taking digitalis.');

INSERT INTO patients (id, case_id, name, age, gender, weight, diagnosis, chief_complaints) VALUES
(5, 5, 'Mr. Mohan P.', 70, 'Male', 60.0, 'Congestive Heart Failure (NYHA Class III) & Atrial Fibrillation', 'Severe nausea, loss of appetite, seeing yellow-green rings around lights (xanthopsia), dizziness, palpitations, and heart rate of 44 bpm.');

INSERT INTO medications (id, case_id, name, dose, frequency, route, start_day, indication, is_suspected) VALUES
(16, 5, 'Digoxin', '0.25 mg', 'OD (Once Daily)', 'Oral', '1 year ago', 'Atrial Fibrillation & Heart Failure', true),
(17, 5, 'Furosemide', '80 mg (doubled from 40mg)', 'OD (Morning)', 'Oral', '10 days ago', 'Peripheral Edema & Volume Overload', false),
(18, 5, 'Ramipril', '2.5 mg', 'OD (Once Daily)', 'Oral', '1 year ago', 'Heart Failure', false),
(19, 5, 'Carvedilol', '6.25 mg', 'BD (Twice Daily)', 'Oral', '6 months ago', 'Heart Failure', false);

INSERT INTO symptoms (id, case_id, day_onset, description, severity) VALUES
(14, 5, 'Day 1', 'Furosemide dose increased from 40 mg to 80 mg OD for pedal edema.', 'None'),
(15, 5, 'Day 6', 'Patient lost appetite and complained of persistent nausea.', 'Moderate'),
(16, 5, 'Day 10', 'Visual halos (yellow-tinted vision), dizziness, confusion, and pulse rate dropped to 44 bpm.', 'Severe');

INSERT INTO clues (id, case_id, category, title, content, icon, sort_order) VALUES
(25, 5, 'MEDICINE_HISTORY', 'Diuretic Escalation', 'Furosemide was doubled from 40 mg to 80 mg daily 10 days ago without adding a potassium supplement or potassium-sparing agent.', 'Pill', 1),
(26, 5, 'SYMPTOM_TIMELINE', 'Electrolyte Depletion & Toxicity', 'Day 1: Diuretic increased -> Day 5-6: Polyuria & hypokalemia develops -> Day 6: Nausea -> Day 10: Visual disturbances & heart block.', 'Clock', 2),
(27, 5, 'PAST_HISTORY', 'Cardiac History', 'Ischemic cardiomyopathy, permanent atrial fibrillation, chronic biventricular systolic dysfunction (LVEF 32%).', 'FileText', 3),
(28, 5, 'ALLERGY_HISTORY', 'Allergy Background', 'No allergies to digitalis or sulfonamide diuretics.', 'AlertCircle', 4),
(29, 5, 'LAB_REPORTS', 'Serum Electrolytes & Digoxin Level', 'Serum Potassium: 2.8 mEq/L (Critical Low, Ref: 3.5-5.0). Serum Magnesium: 1.4 mg/dL (Low). Serum Digoxin: 2.6 ng/mL (Toxic, Ref: 0.8-2.0 ng/mL). ECG: Junctional bradycardia at 44 bpm, prominent scooped ST depression (digitalis effect), frequent ventricular premature beats.', 'Activity', 5),
(30, 5, 'DECHALLENGE_RECHALLENGE', 'Correction & Recovery', 'Digoxin was held and slow IV Potassium chloride infusion administered. Heart rate returned to sinus rhythm (72 bpm) and visual halos resolved over 48 hours.', 'RefreshCw', 6);

-- 3. Education Modules
INSERT INTO education_content (id, slug, title, summary, content, category, icon) VALUES
(1, 'what-is-adr', 'What is an Adverse Drug Reaction (ADR)?', 'Understanding WHO definition of ADRs versus medication errors and side effects.', 'An Adverse Drug Reaction (ADR) is defined by the World Health Organization (WHO) as: "A response to a drug which is noxious and unintended, and which occurs at doses normally used in man for the prophylaxis, diagnosis, or therapy of disease, or for the modification of physiological function."\n\nKey Distinctions:\n1. Adverse Drug Event (ADE): Any untoward medical occurrence during drug treatment, whether causally related or not.\n2. Adverse Drug Reaction (ADR): An adverse event with at least a reasonable causal relationship to the medicinal product.\n3. Medication Error: Preventable mistake in prescribing, dispensing, or administering a drug.\n4. Side Effect: Any unintended effect occurring at normal doses, which can be beneficial or harmful.', 'Foundations', 'BookOpen'),
(2, 'pharmacovigilance-cycle', 'The Pharmacovigilance (PV) Cycle', 'The cyclical process of detecting, assessing, intervening, reporting, and monitoring drug safety signals.', 'Pharmacovigilance is defined as the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects or any other drug-related problem.\n\nThe 5 Core Phases:\n1. DETECT: Identify unexpected symptoms, timing discrepancies, and laboratory signals in patients.\n2. ASSESS: Evaluate suspected drugs, classify reaction types (A-F), determine severity, and apply WHO-UMC causality scales.\n3. INTERVENE: Formulate actionable clinical decisions (Stop drug, adjust dosage, initiate antidote/symptomatic treatment, refer).\n4. REPORT: Document complete details on national/institutional ADR reporting forms (e.g. PvPI / MedWatch / Yellow Card).\n5. MONITOR & PREVENT: Aggregate data to identify drug safety signals, update package inserts, and safeguard public health.', 'Core Process', 'RotateCw'),
(3, 'who-umc-causality', 'WHO-UMC Causality Assessment Guide', 'Standard criteria for classifying causality into Certain, Probable, Possible, Unlikely, and Conditional.', 'The WHO-UMC (Uppsala Monitoring Centre) standardized causality assessment system categories:\n\n1. CERTAIN: Plausible time relationship; event cannot be explained by disease or other drugs; response to withdrawal clinically plausible (dechallenge); event definitive pharmacologically or phenomenologically; rechallenge satisfactory if necessary.\n2. PROBABLE / LIKELY: Reasonable time sequence; unlikely to be attributed to disease or other drugs; clinically reasonable response to dechallenge; rechallenge not required.\n3. POSSIBLE: Reasonable time sequence; could also be explained by disease or other drugs; information on dechallenge may be lacking or unclear.\n4. UNLIKELY: Temporal relationship that makes a causal relationship improbable; disease or other drugs provide plausible explanations.\n5. CONDITIONAL / UNCLASSIFIED: More data needed for proper assessment, or additional examination ongoing.\n6. UNASSESSABLE / UNCLASSIFIABLE: Information is unresolvable or contradictory.', 'Assessment Scales', 'Scale');

-- Align auto-increment sequences for new case creation
ALTER TABLE cases ALTER COLUMN id RESTART WITH 10;
ALTER TABLE patients ALTER COLUMN id RESTART WITH 10;
ALTER TABLE medications ALTER COLUMN id RESTART WITH 50;
ALTER TABLE clues ALTER COLUMN id RESTART WITH 50;
ALTER TABLE symptoms ALTER COLUMN id RESTART WITH 50;
