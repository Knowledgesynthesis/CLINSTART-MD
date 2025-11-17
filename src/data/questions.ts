import type { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 'q-acs-1',
    type: 'mcq',
    conditionId: 'acs',
    difficulty: 'easy',
    question: 'A 62-year-old man presents with chest pain. What is the FIRST test you should order?',
    options: [
      'Troponin',
      'Chest X-ray',
      'ECG',
      'Coronary angiography',
      'Echocardiogram'
    ],
    correctAnswer: 'ECG',
    explanation: 'ECG should be obtained within 10 minutes of presentation for any patient with chest pain suspicious for ACS. It helps identify STEMI which requires immediate intervention. Troponin is also important but ECG comes first.'
  },
  {
    id: 'q-acs-2',
    type: 'mcq',
    conditionId: 'acs',
    difficulty: 'medium',
    question: 'Which test is the MOST ACCURATE for identifying the culprit lesion in ACS?',
    options: [
      'ECG',
      'Troponin',
      'Stress test',
      'Coronary angiography',
      'CT coronary angiography'
    ],
    correctAnswer: 'Coronary angiography',
    explanation: 'Coronary angiography (cardiac catheterization) is the gold standard for visualizing coronary anatomy and identifying the culprit lesion. It is both diagnostic and therapeutic (allows for PCI).'
  },
  {
    id: 'q-stroke-1',
    type: 'mcq',
    conditionId: 'stroke-ischemic',
    difficulty: 'hard',
    question: 'A patient with suspected acute stroke has BP of 194/98. What is the most appropriate BP management?',
    options: [
      'Lower BP to <140/90 immediately',
      'Lower BP to <160/100',
      'Permissive hypertension - do not treat',
      'Lower BP to <180/105',
      'Give IV labetalol regardless of BP'
    ],
    correctAnswer: 'Permissive hypertension - do not treat',
    explanation: 'In acute ischemic stroke, maintain permissive hypertension to preserve cerebral perfusion. Only treat if BP >220/120 mmHg (or >185/110 if giving tPA). This BP of 194/98 should NOT be lowered.'
  },
  {
    id: 'q-pe-1',
    type: 'mcq',
    conditionId: 'pulmonary-embolism',
    difficulty: 'medium',
    question: 'A patient with suspected PE has a low Wells score. What is the most appropriate INITIAL test?',
    options: [
      'CT pulmonary angiography',
      'V/Q scan',
      'D-dimer',
      'Lower extremity ultrasound',
      'Pulmonary angiography'
    ],
    correctAnswer: 'D-dimer',
    explanation: 'In patients with low or intermediate clinical probability (Wells score), D-dimer is the appropriate initial test. If negative, PE is effectively ruled out. If positive, proceed to CTPA. High-risk patients should go directly to CTPA.'
  },
  {
    id: 'q-dka-1',
    type: 'mcq',
    conditionId: 'dka',
    difficulty: 'hard',
    question: 'What is the FIRST intervention in DKA management?',
    options: [
      'IV insulin',
      'IV fluids',
      'Potassium replacement',
      'Bicarbonate',
      'Phosphate replacement'
    ],
    correctAnswer: 'IV fluids',
    explanation: 'IV fluid resuscitation is the FIRST and most important intervention in DKA. Patients are severely volume depleted. Starting insulin before adequate fluids can cause vascular collapse. Fluids first, then insulin.'
  },
  {
    id: 'q-dka-2',
    type: 'mcq',
    conditionId: 'dka',
    difficulty: 'medium',
    question: 'Which test is MOST SPECIFIC for ketosis in DKA?',
    options: [
      'Urine ketones',
      'Serum ketones',
      'Beta-hydroxybutyrate',
      'Anion gap',
      'Lactate'
    ],
    correctAnswer: 'Beta-hydroxybutyrate',
    explanation: 'Beta-hydroxybutyrate is the most specific marker of ketosis. Urine ketones can remain positive even after ketoacidosis has resolved. Beta-hydroxybutyrate better reflects current status and guides management.'
  },
  {
    id: 'q-sepsis-1',
    type: 'mcq',
    conditionId: 'sepsis',
    difficulty: 'easy',
    question: 'How quickly should antibiotics be administered in sepsis?',
    options: [
      'Within 6 hours',
      'Within 3 hours',
      'Within 1 hour',
      'Within 30 minutes',
      'When culture results return'
    ],
    correctAnswer: 'Within 1 hour',
    explanation: 'The Surviving Sepsis Campaign recommends administration of antibiotics within 1 hour of recognition of sepsis/septic shock. Each hour delay increases mortality. However, obtain blood cultures BEFORE antibiotics if possible.'
  },
  {
    id: 'q-meningitis-1',
    type: 'mcq',
    conditionId: 'meningitis',
    difficulty: 'hard',
    question: 'A patient with suspected bacterial meningitis needs LP, but CT head will be delayed. What should you do?',
    options: [
      'Wait for CT before giving antibiotics',
      'Give antibiotics immediately, delay LP until after CT',
      'Do LP without CT first',
      'Give dexamethasone only',
      'Observe and reassess'
    ],
    correctAnswer: 'Give antibiotics immediately, delay LP until after CT',
    explanation: 'NEVER delay antibiotics for LP or imaging in suspected bacterial meningitis. Give antibiotics (and dexamethasone) immediately. LP can be delayed - it may still be diagnostic even after antibiotics are started. Time to antibiotics is critical for outcomes.'
  },
  {
    id: 'q-pneumothorax-1',
    type: 'mcq',
    conditionId: 'pneumothorax',
    difficulty: 'medium',
    question: 'A patient has sudden dyspnea, absent breath sounds on right, tracheal deviation to left, and hypotension. What should you do FIRST?',
    options: [
      'Get a STAT chest X-ray',
      'Call cardiothoracic surgery',
      'Needle decompression',
      'Place chest tube',
      'Intubate the patient'
    ],
    correctAnswer: 'Needle decompression',
    explanation: 'This is tension pneumothorax - a CLINICAL diagnosis. Do NOT wait for chest X-ray. Immediate needle decompression (2nd intercostal space, midclavicular line) is lifesaving. Follow with chest tube placement.'
  },
  {
    id: 'q-chf-1',
    type: 'mcq',
    conditionId: 'chf',
    difficulty: 'easy',
    question: 'Which biomarker best distinguishes cardiac from non-cardiac dyspnea?',
    options: [
      'Troponin',
      'D-dimer',
      'BNP or NT-proBNP',
      'Lactate',
      'CRP'
    ],
    correctAnswer: 'BNP or NT-proBNP',
    explanation: 'BNP (B-type natriuretic peptide) or NT-proBNP is released in response to ventricular stretch and helps distinguish cardiac from non-cardiac causes of dyspnea. Low levels effectively rule out heart failure.'
  },
  {
    id: 'q-hyperkalemia-1',
    type: 'mcq',
    conditionId: 'hyperkalemia',
    difficulty: 'medium',
    question: 'A patient has K+ of 7.2 and peaked T waves on ECG. What is the FIRST medication to give?',
    options: [
      'Insulin and dextrose',
      'Calcium gluconate',
      'Sodium bicarbonate',
      'Albuterol',
      'Kayexalate'
    ],
    correctAnswer: 'Calcium gluconate',
    explanation: 'With ECG changes (peaked T waves, widened QRS), calcium gluconate should be given FIRST to stabilize the cardiac membrane and prevent fatal arrhythmias. Then use insulin/dextrose, albuterol, and bicarbonate to shift K+ intracellularly.'
  },
  {
    id: 'q-gi-bleed-1',
    type: 'mcq',
    conditionId: 'upper-gi-bleed',
    difficulty: 'medium',
    question: 'What is the MOST ACCURATE test for identifying the source of upper GI bleeding?',
    options: [
      'NG lavage',
      'CT angiography',
      'Upper endoscopy (EGD)',
      'Tagged RBC scan',
      'Angiography'
    ],
    correctAnswer: 'Upper endoscopy (EGD)',
    explanation: 'EGD (esophagogastroduodenoscopy) is the gold standard for upper GI bleeding. It is both diagnostic (identifies source) and therapeutic (can band varices, inject/cauterize bleeding ulcers, etc.). Should be performed within 24 hours, sooner if high-risk.'
  },
  {
    id: 'q-ectopic-1',
    type: 'mcq',
    conditionId: 'ectopic-pregnancy',
    difficulty: 'medium',
    question: 'Transvaginal ultrasound shows no intrauterine pregnancy. Beta-hCG is 2000. What is the most likely diagnosis?',
    options: [
      'Normal early pregnancy',
      'Ectopic pregnancy',
      'Completed abortion',
      'Molar pregnancy',
      'Heterotopic pregnancy'
    ],
    correctAnswer: 'Ectopic pregnancy',
    explanation: 'The discriminatory zone for transvaginal ultrasound is approximately 1500-2000 mIU/mL. If beta-hCG is above this level and no intrauterine pregnancy is seen, ectopic pregnancy is highly likely (assuming single gestation). Requires urgent evaluation and management.'
  },
  {
    id: 'q-af-1',
    type: 'mcq',
    conditionId: 'af-rvr',
    difficulty: 'hard',
    question: 'A patient with new-onset AF with RVR is hemodynamically unstable. What is the appropriate treatment?',
    options: [
      'IV metoprolol',
      'IV diltiazem',
      'Synchronized cardioversion',
      'IV amiodarone',
      'Observation'
    ],
    correctAnswer: 'Synchronized cardioversion',
    explanation: 'Hemodynamically unstable patients with AF with RVR require IMMEDIATE synchronized cardioversion. Do not attempt pharmacologic rate control in unstable patients. Stable patients can receive rate control medications (beta-blockers, calcium channel blockers).'
  },
  {
    id: 'q-sequence-1',
    type: 'sequence',
    conditionId: 'acs',
    difficulty: 'medium',
    question: 'Place the following interventions in the correct order for a patient presenting with chest pain suspicious for ACS:',
    options: [
      '1. Aspirin, 2. ECG, 3. Cardiac catheterization, 4. Troponin',
      '1. ECG, 2. Aspirin, 3. Troponin, 4. Cardiac catheterization',
      '1. Troponin, 2. ECG, 3. Aspirin, 4. Cardiac catheterization',
      '1. Cardiac catheterization, 2. ECG, 3. Aspirin, 4. Troponin'
    ],
    correctAnswer: '1. ECG, 2. Aspirin, 3. Troponin, 4. Cardiac catheterization',
    explanation: 'ECG should be obtained within 10 minutes (first). Aspirin should be given immediately after (unless contraindicated). Troponin is drawn early but is an initial test, not initial stabilization. Cardiac catheterization is the most accurate test but comes later in the sequence after diagnosis is established.'
  }
];
