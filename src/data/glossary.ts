import type { GlossaryTerm } from '@/types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'abc',
    term: 'ABCs',
    definition: 'Airway, Breathing, Circulation - the fundamental priorities in initial patient stabilization and emergency medicine.',
    relatedConditions: ['stroke-ischemic', 'status-epilepticus', 'sepsis']
  },
  {
    id: 'acs',
    term: 'Acute Coronary Syndrome (ACS)',
    definition: 'A spectrum of conditions caused by decreased blood flow to the heart muscle, including unstable angina, NSTEMI, and STEMI.',
    relatedConditions: ['acs']
  },
  {
    id: 'anion-gap',
    term: 'Anion Gap',
    definition: 'The difference between measured cations and anions in serum. Elevated in DKA, lactic acidosis, and other conditions. Formula: Na - (Cl + HCO3).',
    relatedConditions: ['dka', 'sepsis']
  },
  {
    id: 'bnp',
    term: 'BNP / NT-proBNP',
    definition: 'B-type Natriuretic Peptide - a hormone released by the heart in response to ventricular stretch. Elevated in heart failure. Helps distinguish cardiac from non-cardiac dyspnea.',
    relatedConditions: ['chf', 'pulmonary-embolism']
  },
  {
    id: 'ctpa',
    term: 'CTPA',
    definition: 'CT Pulmonary Angiography - the gold standard imaging test for diagnosing pulmonary embolism. Uses IV contrast to visualize pulmonary arteries.',
    relatedConditions: ['pulmonary-embolism']
  },
  {
    id: 'd-dimer',
    term: 'D-dimer',
    definition: 'A fibrin degradation product. Highly sensitive but not specific for thrombosis. Useful for ruling out PE and DVT in low-risk patients. High false-positive rate.',
    relatedConditions: ['pulmonary-embolism', 'dvt']
  },
  {
    id: 'dka',
    term: 'Diabetic Ketoacidosis (DKA)',
    definition: 'A life-threatening complication of diabetes characterized by hyperglycemia, ketosis, and metabolic acidosis. More common in type 1 diabetes.',
    relatedConditions: ['dka']
  },
  {
    id: 'egd',
    term: 'EGD',
    definition: 'Esophagogastroduodenoscopy - upper endoscopy that visualizes the esophagus, stomach, and duodenum. Gold standard for upper GI bleeding.',
    relatedConditions: ['upper-gi-bleed']
  },
  {
    id: 'ercp',
    term: 'ERCP',
    definition: 'Endoscopic Retrograde Cholangiopancreatography - both diagnostic and therapeutic procedure for biliary and pancreatic diseases.',
    relatedConditions: ['cholangitis', 'pancreatitis']
  },
  {
    id: 'fena',
    term: 'FENa (Fractional Excretion of Sodium)',
    definition: 'Helps distinguish pre-renal (<1%) from intrinsic renal (>2%) acute kidney injury. Calculated from urine and serum sodium and creatinine.',
    relatedConditions: ['aki']
  },
  {
    id: 'hhs',
    term: 'Hyperosmolar Hyperglycemic State (HHS)',
    definition: 'Life-threatening complication of type 2 diabetes with severe hyperglycemia (>600), high serum osmolality, but minimal ketosis. Requires massive fluid resuscitation.',
    relatedConditions: ['hhs']
  },
  {
    id: 'kussmaul',
    term: 'Kussmaul Respirations',
    definition: 'Deep, labored breathing pattern seen in metabolic acidosis (DKA, uremia). Represents respiratory compensation for metabolic acidosis.',
    relatedConditions: ['dka']
  },
  {
    id: 'nstemi',
    term: 'NSTEMI',
    definition: 'Non-ST Elevation Myocardial Infarction - type of ACS with elevated cardiac biomarkers but no ST elevation on ECG.',
    relatedConditions: ['acs']
  },
  {
    id: 'permissive-htn',
    term: 'Permissive Hypertension',
    definition: 'Allowing elevated blood pressure in acute stroke to maintain cerebral perfusion. Only treat BP if >220/120 (or >185/110 if giving tPA).',
    relatedConditions: ['stroke-ischemic']
  },
  {
    id: 'pci',
    term: 'PCI',
    definition: 'Percutaneous Coronary Intervention - cardiac catheterization with balloon angioplasty and/or stent placement to open blocked coronary arteries.',
    relatedConditions: ['acs']
  },
  {
    id: 'pe',
    term: 'Pulmonary Embolism (PE)',
    definition: 'Blood clot in the pulmonary arteries, often originating from DVT. Can cause sudden dyspnea, chest pain, and hypoxemia.',
    relatedConditions: ['pulmonary-embolism', 'dvt']
  },
  {
    id: 'stemi',
    term: 'STEMI',
    definition: 'ST Elevation Myocardial Infarction - type of heart attack with ST elevation on ECG requiring immediate reperfusion (PCI or thrombolytics).',
    relatedConditions: ['acs']
  },
  {
    id: 'tpa',
    term: 'tPA (Tissue Plasminogen Activator)',
    definition: 'Thrombolytic medication used in acute ischemic stroke (if within 4.5 hours) and STEMI. Dissolves blood clots but carries bleeding risk.',
    relatedConditions: ['stroke-ischemic', 'acs', 'pulmonary-embolism']
  },
  {
    id: 'troponin',
    term: 'Troponin',
    definition: 'Cardiac biomarker released when heart muscle is damaged. Sensitive for myocardial infarction. Requires serial measurements. Elevated in ACS.',
    relatedConditions: ['acs']
  },
  {
    id: 'wells-score',
    term: 'Wells Score',
    definition: 'Clinical decision rule to estimate pre-test probability of PE or DVT. Guides use of D-dimer and imaging.',
    relatedConditions: ['pulmonary-embolism', 'dvt']
  },
  {
    id: 'curb65',
    term: 'CURB-65',
    definition: 'Pneumonia severity score: Confusion, Urea >7, RR ≥30, BP <90/60, age ≥65. Guides disposition and treatment intensity.',
    relatedConditions: ['pneumonia']
  },
  {
    id: 'nihss',
    term: 'NIHSS',
    definition: 'NIH Stroke Scale - standardized neurologic exam to quantify stroke severity (0-42 points). Guides treatment decisions including tPA and thrombectomy.',
    relatedConditions: ['stroke-ischemic']
  }
];
