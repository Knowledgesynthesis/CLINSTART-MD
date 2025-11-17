import type { CaseScenario } from '@/types';

export const cases: CaseScenario[] = [
  {
    id: 'case-acs-1',
    conditionId: 'acs',
    title: 'Crushing Chest Pain',
    presentation: `A 58-year-old male presents to the ED with 2 hours of substernal chest pressure radiating to his left arm. He describes it as "an elephant sitting on my chest." He is diaphoretic and nauseated. He has a history of hypertension and hyperlipidemia. He smokes 1 pack per day.`,
    vitals: {
      hr: 98,
      bp: '148/92',
      rr: 20,
      temp: 37.1,
      spo2: 96
    },
    correctStabilization: [
      'Aspirin 325mg chewed',
      'IV access',
      'Continuous cardiac monitoring',
      'Nitroglycerin SL (if BP permits)'
    ],
    correctInitialTests: [
      'ECG immediately',
      'Troponin',
      'Chest X-ray'
    ],
    correctMostAccurateTest: 'Coronary angiography',
    feedback: {
      stabilization: 'Aspirin should be given immediately and chewed for faster absorption. Nitroglycerin can help with ischemic pain but check BP first. IV access and continuous monitoring are essential.',
      initialTests: 'ECG is the most important initial test and must be obtained within 10 minutes. Serial troponins are needed (single value insufficient). CXR helps exclude other causes.',
      mostAccurateTest: 'Coronary angiography is the gold standard for visualizing coronary anatomy and identifying the culprit lesion. It is both diagnostic and therapeutic (PCI).'
    }
  },
  {
    id: 'case-pe-1',
    conditionId: 'pulmonary-embolism',
    title: 'Sudden Dyspnea Post-Flight',
    presentation: `A 42-year-old woman presents with sudden onset dyspnea and pleuritic chest pain that started 2 hours after a long international flight. She has no significant past medical history but is on oral contraceptives. She appears anxious and tachypneic.`,
    vitals: {
      hr: 115,
      bp: '128/76',
      rr: 26,
      temp: 37.4,
      spo2: 91
    },
    correctStabilization: [
      'Oxygen to maintain SpO2 >90%',
      'IV access',
      'Anticoagulation if high suspicion'
    ],
    correctInitialTests: [
      'Wells score calculation',
      'D-dimer',
      'ECG',
      'Chest X-ray'
    ],
    correctMostAccurateTest: 'CT pulmonary angiography (CTPA)',
    feedback: {
      stabilization: 'Provide supplemental oxygen for hypoxemia. If clinical suspicion is high (recent flight, OCPs, pleuritic chest pain), consider starting anticoagulation before imaging if no contraindications.',
      initialTests: 'Risk stratify first using Wells or PERC. D-dimer is useful if low-to-moderate risk. ECG may show tachycardia or S1Q3T3 pattern. CXR often normal but helps exclude other causes.',
      mostAccurateTest: 'CTPA is the gold standard imaging modality for PE diagnosis. V/Q scan is an alternative if contrast is contraindicated.'
    }
  },
  {
    id: 'case-stroke-1',
    conditionId: 'stroke-ischemic',
    title: 'Sudden Weakness and Slurred Speech',
    presentation: `A 67-year-old male with atrial fibrillation (not on anticoagulation) presents with sudden onset right-sided weakness and slurred speech that began 90 minutes ago while watching TV. His wife noticed he couldn't lift his right arm. NIHSS score is 8.`,
    vitals: {
      hr: 88,
      bp: '182/94',
      rr: 16,
      temp: 36.8,
      spo2: 98
    },
    correctStabilization: [
      'Airway assessment',
      'Permissive hypertension (do not lower BP unless >220/120)',
      'IV access',
      'NPO',
      'Glucose check'
    ],
    correctInitialTests: [
      'STAT non-contrast head CT',
      'Glucose',
      'PT/INR, PTT',
      'CBC',
      'ECG'
    ],
    correctMostAccurateTest: 'MRI brain with diffusion-weighted imaging (DWI)',
    feedback: {
      stabilization: 'Do NOT lower blood pressure unless >220/120 mmHg - permissive hypertension maintains cerebral perfusion. Check glucose immediately (hypoglycemia can mimic stroke). Keep patient NPO in case of dysphagia.',
      initialTests: 'Non-contrast CT is FIRST to exclude hemorrhage before considering tPA. Must be done STAT. Glucose, coags, and CBC needed before tPA. ECG may reveal AF.',
      mostAccurateTest: 'MRI with DWI is most sensitive for acute ischemic stroke (shows restricted diffusion). However, CT is first because it is faster and adequate to exclude hemorrhage for tPA decision. Patient is within tPA window (4.5 hours).'
    }
  },
  {
    id: 'case-dka-1',
    conditionId: 'dka',
    title: 'Abdominal Pain and Altered Mental Status in Diabetic',
    presentation: `A 28-year-old woman with type 1 diabetes presents with 2 days of polyuria, polydipsia, nausea, vomiting, and abdominal pain. She ran out of insulin 3 days ago. She is lethargic and has deep, rapid breathing. Her breath has a fruity odor.`,
    vitals: {
      hr: 118,
      bp: '98/62',
      rr: 28,
      temp: 37.2,
      spo2: 99
    },
    correctStabilization: [
      'Aggressive IV normal saline',
      'IV insulin (AFTER fluids started)',
      'Potassium monitoring and replacement',
      'Identify precipitant'
    ],
    correctInitialTests: [
      'Basic metabolic panel',
      'Glucose',
      'Venous blood gas',
      'Beta-hydroxybutyrate or urine ketones',
      'Anion gap calculation'
    ],
    correctMostAccurateTest: 'Beta-hydroxybutyrate',
    feedback: {
      stabilization: 'Start IV fluids FIRST - this is the most important initial intervention. Start insulin AFTER fluids to avoid vascular collapse. Monitor potassium closely and replace as needed (insulin drives K into cells). Kussmaul respirations (deep rapid breathing) are compensatory.',
      initialTests: 'BMP shows elevated glucose, elevated anion gap, and helps calculate gap. VBG adequate for pH assessment (no need for ABG). Beta-hydroxybutyrate is preferred over urine ketones. Diagnosis requires: glucose >250, pH <7.3, and positive ketones.',
      mostAccurateTest: 'Beta-hydroxybutyrate is the most specific marker of ketosis and guides resolution. Urine ketones can remain positive even after ketoacidosis resolves.'
    }
  },
  {
    id: 'case-sepsis-1',
    conditionId: 'sepsis',
    title: 'Fever and Hypotension in Elderly Patient',
    presentation: `A 74-year-old woman from a nursing home presents with fever, confusion, and decreased urine output for 1 day. She has a history of recurrent UTIs and dementia. She appears ill and has warm, flushed skin.`,
    vitals: {
      hr: 124,
      bp: '84/52',
      rr: 24,
      temp: 38.9,
      spo2: 94
    },
    correctStabilization: [
      'IV fluid resuscitation (30mL/kg crystalloid)',
      'Broad-spectrum IV antibiotics within 1 hour',
      'Blood cultures BEFORE antibiotics',
      'Lactate level',
      'Vasopressors if hypotension persists'
    ],
    correctInitialTests: [
      'Blood cultures (2 sets)',
      'Lactate',
      'CBC',
      'Basic metabolic panel',
      'Urinalysis and culture',
      'Chest X-ray'
    ],
    correctMostAccurateTest: 'Blood culture and source culture',
    feedback: {
      stabilization: 'This is septic shock. Give 30mL/kg IV crystalloid rapidly (about 2L for average adult). Start broad-spectrum antibiotics within 1 hour BUT get blood cultures first. If hypotension persists after fluids, start vasopressors (norepinephrine first-line). Lactate helps assess severity and guides resuscitation.',
      initialTests: 'Draw 2 sets of blood cultures from different sites before antibiotics. Lactate >2 suggests tissue hypoperfusion. CBC, CMP guide management. UA/UCx likely source given history. CXR rules out pneumonia.',
      mostAccurateTest: 'Culture from the suspected source (blood, urine) is gold standard for identifying the pathogen and guiding antibiotic therapy. However, do not delay empiric antibiotics waiting for culture results.'
    }
  },
  {
    id: 'case-upper-gi-bleed-1',
    conditionId: 'upper-gi-bleed',
    title: 'Hematemesis and Melena',
    presentation: `A 56-year-old man with cirrhosis and known esophageal varices presents with multiple episodes of hematemesis over the past 2 hours. He has also noticed black, tarry stools for 2 days. He takes no medications currently. He appears pale and diaphoretic.`,
    vitals: {
      hr: 128,
      bp: '88/58',
      rr: 22,
      temp: 36.5,
      spo2: 96
    },
    correctStabilization: [
      'Two large-bore IVs',
      'Aggressive crystalloid resuscitation',
      'Type and cross-match',
      'Transfuse PRBCs',
      'IV PPI',
      'Octreotide (for variceal bleeding)',
      'Antibiotics (for variceal bleeding)'
    ],
    correctInitialTests: [
      'CBC',
      'Type and cross-match',
      'PT/INR, PTT',
      'Basic metabolic panel',
      'Liver function tests'
    ],
    correctMostAccurateTest: 'Upper endoscopy (EGD)',
    feedback: {
      stabilization: 'Patient is in hemorrhagic shock. Get 2 large-bore IVs immediately. Resuscitate aggressively with crystalloid and blood products. Given history of varices, start octreotide and prophylactic antibiotics (ceftriaxone). PPI infusion for all upper GI bleeds. Reverse coagulopathy.',
      initialTests: 'CBC shows degree of anemia. Type and cross for transfusion. Coags assess bleeding risk and guide reversal. LFTs confirm cirrhosis and help assess synthetic function.',
      mostAccurateTest: 'EGD is both diagnostic and therapeutic. Perform urgently (within 24h, sooner if high-risk). Can band varices, inject bleeding ulcers, or cauterize bleeding sources.'
    }
  }
];
