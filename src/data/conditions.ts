import type { Condition } from '@/types';

export const conditions: Condition[] = [
  // CARDIOLOGY
  {
    id: 'acs',
    name: 'Acute Coronary Syndrome (ACS)',
    specialty: 'cardiology',
    chiefComplaints: ['chest-pain'],
    stabilization: [
      'Oxygen only if SpO2 <90%',
      'Aspirin 325mg chewed immediately',
      'Nitroglycerin SL if BP permits',
      'IV access',
      'Continuous cardiac monitoring'
    ],
    initialTests: [
      'ECG within 10 minutes',
      'Troponin (serial measurements)',
      'Chest X-ray',
      'Basic metabolic panel',
      'CBC'
    ],
    mostAccurateTests: [
      'Coronary angiography (gold standard)'
    ],
    redFlags: [
      'ST elevation',
      'Cardiogenic shock',
      'New heart failure',
      'Syncope with chest pain',
      'Ventricular arrhythmias'
    ],
    pitfalls: [
      'Delaying ECG',
      'Using single troponin value',
      'Missing posterior MI',
      'Giving oxygen to all patients',
      'Delaying aspirin'
    ],
    notes: 'ECG is always the first test in chest pain suspicious for ACS. Never delay it. Serial troponins improve sensitivity.',
    keywords: ['myocardial infarction', 'MI', 'STEMI', 'NSTEMI', 'unstable angina', 'chest pain']
  },
  {
    id: 'chf',
    name: 'Congestive Heart Failure (CHF) / Acute Decompensation',
    specialty: 'cardiology',
    chiefComplaints: ['dyspnea'],
    stabilization: [
      'Upright positioning',
      'Oxygen or CPAP/BiPAP if hypoxemic',
      'IV diuretics (furosemide)',
      'Nitroglycerin if hypertensive',
      'Monitor I/O'
    ],
    initialTests: [
      'Chest X-ray',
      'BNP or NT-proBNP',
      'ECG',
      'Basic metabolic panel',
      'Troponin'
    ],
    mostAccurateTests: [
      'Echocardiography',
      'Right heart catheterization (hemodynamics)'
    ],
    redFlags: [
      'Hypotension',
      'Altered mental status',
      'Severe hypoxemia',
      'Acute MI',
      'Arrhythmias'
    ],
    pitfalls: [
      'Missing acute MI as trigger',
      'Over-diuresing causing AKI',
      'Not checking electrolytes',
      'Delaying NIV in respiratory distress'
    ],
    notes: 'BNP/NT-proBNP helps distinguish cardiac from non-cardiac dyspnea. Echo is most accurate for assessment of cardiac function.',
    keywords: ['pulmonary edema', 'flash pulmonary edema', 'volume overload', 'dyspnea']
  },
  {
    id: 'af-rvr',
    name: 'Atrial Fibrillation with Rapid Ventricular Response',
    specialty: 'cardiology',
    chiefComplaints: ['palpitations', 'dyspnea', 'chest-pain'],
    stabilization: [
      'Assess hemodynamic stability',
      'IV access',
      'Rate control (beta-blocker or CCB) if stable',
      'Synchronized cardioversion if unstable',
      'Anticoagulation consideration'
    ],
    initialTests: [
      'ECG',
      'Electrolytes, Mg, Ca',
      'TSH',
      'Troponin',
      'Chest X-ray'
    ],
    mostAccurateTests: [
      'Echocardiography',
      'TEE (for LA thrombus assessment before cardioversion)'
    ],
    redFlags: [
      'Hypotension',
      'Chest pain',
      'Severe dyspnea',
      'Altered mental status',
      'Signs of stroke'
    ],
    pitfalls: [
      'Missing WPW on ECG',
      'Cardioversion without anticoagulation',
      'Over-aggressive rate control causing hypotension',
      'Not checking thyroid function'
    ],
    notes: 'ECG confirms AF. Unstable patients need immediate cardioversion. TEE most accurate for excluding LA thrombus.',
    keywords: ['AFib', 'atrial fibrillation', 'RVR', 'palpitations', 'tachycardia']
  },
  {
    id: 'hypertensive-emergency',
    name: 'Hypertensive Emergency',
    specialty: 'cardiology',
    chiefComplaints: ['headache', 'altered-mental-status', 'chest-pain', 'dyspnea'],
    stabilization: [
      'IV antihypertensive (nicardipine, labetalol)',
      'Gradual BP reduction (max 25% in first hour)',
      'Continuous BP monitoring',
      'Assess for end-organ damage'
    ],
    initialTests: [
      'ECG',
      'Chest X-ray',
      'Basic metabolic panel',
      'Urinalysis',
      'Troponin',
      'Non-contrast head CT if neuro symptoms'
    ],
    mostAccurateTests: [
      'Echocardiography',
      'MRI brain (if stroke suspected)',
      'Fundoscopic exam for papilledema'
    ],
    redFlags: [
      'Encephalopathy',
      'Papilledema',
      'Acute MI',
      'Acute kidney injury',
      'Aortic dissection',
      'Pulmonary edema'
    ],
    pitfalls: [
      'Reducing BP too rapidly',
      'Missing aortic dissection',
      'Not distinguishing urgency from emergency',
      'Using oral agents in emergency'
    ],
    notes: 'True emergency requires evidence of end-organ damage. CT head first if neuro symptoms. IV agents required.',
    keywords: ['HTN', 'malignant hypertension', 'hypertensive crisis']
  },

  // PULMONOLOGY
  {
    id: 'copd-exacerbation',
    name: 'COPD Exacerbation',
    specialty: 'pulmonology',
    chiefComplaints: ['dyspnea'],
    stabilization: [
      'Oxygen (target SpO2 88-92%)',
      'Nebulized bronchodilators (albuterol, ipratropium)',
      'Systemic corticosteroids',
      'Consider NIV if respiratory distress',
      'Antibiotics if signs of infection'
    ],
    initialTests: [
      'Chest X-ray',
      'ABG or VBG',
      'ECG',
      'Basic metabolic panel',
      'CBC'
    ],
    mostAccurateTests: [
      'Pulmonary function tests (in stable state)',
      'CT chest (for complications)'
    ],
    redFlags: [
      'Altered mental status',
      'Severe hypoxemia despite oxygen',
      'Hypercapnia with acidosis',
      'Pneumothorax',
      'Hemodynamic instability'
    ],
    pitfalls: [
      'Over-oxygenating causing CO2 retention',
      'Missing pneumonia on CXR',
      'Delaying NIV',
      'Not giving steroids early'
    ],
    notes: 'Target oxygen saturation 88-92% in COPD. ABG assesses for hypercapnia. CXR rules out complications.',
    keywords: ['chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'SOB']
  },
  {
    id: 'asthma-exacerbation',
    name: 'Acute Asthma Exacerbation',
    specialty: 'pulmonology',
    chiefComplaints: ['dyspnea'],
    stabilization: [
      'Oxygen to maintain SpO2 >90%',
      'Nebulized albuterol (continuous if severe)',
      'Ipratropium',
      'Systemic corticosteroids',
      'Consider IV magnesium if severe',
      'Consider epinephrine if life-threatening'
    ],
    initialTests: [
      'Peak flow or FEV1',
      'Pulse oximetry',
      'Chest X-ray (if severe or atypical)',
      'ABG if severe'
    ],
    mostAccurateTests: [
      'Pulmonary function tests (spirometry)',
      'Methacholine challenge (for diagnosis)'
    ],
    redFlags: [
      'Silent chest',
      'Altered mental status',
      'Unable to speak in sentences',
      'Peak flow <50% predicted',
      'Hypercapnia'
    ],
    pitfalls: [
      'Missing life-threatening features',
      'Delaying steroids',
      'Under-dosing bronchodilators',
      'Not recognizing silent chest'
    ],
    notes: 'Peak flow helps gauge severity. Silent chest is ominous. Early steroids reduce relapse.',
    keywords: ['reactive airway disease', 'bronchospasm', 'wheeze', 'SOB']
  },
  {
    id: 'pneumonia',
    name: 'Community-Acquired Pneumonia (CAP)',
    specialty: 'pulmonology',
    chiefComplaints: ['fever', 'dyspnea'],
    stabilization: [
      'Oxygen if hypoxemic',
      'IV fluids',
      'Early antibiotics (within 4 hours)',
      'Sepsis protocol if indicated'
    ],
    initialTests: [
      'Chest X-ray',
      'Pulse oximetry',
      'CBC',
      'Basic metabolic panel',
      'Blood cultures before antibiotics',
      'Sputum culture (if severe)'
    ],
    mostAccurateTests: [
      'CT chest (if complicated)',
      'Bronchoscopy with BAL (if immunocompromised)'
    ],
    redFlags: [
      'Hypotension',
      'Hypoxemia',
      'Altered mental status',
      'Multilobar involvement',
      'Empyema'
    ],
    pitfalls: [
      'Delaying antibiotics',
      'Missing sepsis',
      'Not obtaining blood cultures',
      'Inadequate fluid resuscitation'
    ],
    notes: 'CXR is initial test. Early antibiotics improve outcomes. CURB-65 guides disposition.',
    keywords: ['CAP', 'lung infection', 'infiltrate', 'fever', 'cough']
  },
  {
    id: 'pulmonary-embolism',
    name: 'Pulmonary Embolism (PE)',
    specialty: 'pulmonology',
    chiefComplaints: ['dyspnea', 'chest-pain'],
    stabilization: [
      'Oxygen if hypoxemic',
      'IV access',
      'Anticoagulation if high suspicion',
      'Vasopressors if massive PE with shock',
      'Consider thrombolytics if massive PE'
    ],
    initialTests: [
      'Clinical risk stratification (Wells, PERC)',
      'D-dimer if low/intermediate risk',
      'ECG',
      'Chest X-ray',
      'Troponin, BNP'
    ],
    mostAccurateTests: [
      'CT pulmonary angiography (CTPA)',
      'V/Q scan (if contrast contraindicated)',
      'Pulmonary angiography (rarely needed)'
    ],
    redFlags: [
      'Hypotension',
      'Severe hypoxemia',
      'RV strain on echo',
      'Elevated troponin/BNP',
      'Syncope'
    ],
    pitfalls: [
      'Over-reliance on D-dimer in high-risk patients',
      'Missing saddle embolus',
      'Delaying anticoagulation',
      'Not recognizing massive PE'
    ],
    notes: 'Risk stratify first. D-dimer only useful if low/intermediate risk. CTPA is gold standard.',
    keywords: ['PE', 'DVT', 'venous thromboembolism', 'VTE', 'clot']
  },
  {
    id: 'pneumothorax',
    name: 'Pneumothorax',
    specialty: 'pulmonology',
    chiefComplaints: ['dyspnea', 'chest-pain'],
    stabilization: [
      'Oxygen',
      'Immediate needle decompression if tension PTX',
      'Chest tube if large or symptomatic',
      'Observation if small and stable'
    ],
    initialTests: [
      'Chest X-ray (upright if possible)',
      'Clinical exam'
    ],
    mostAccurateTests: [
      'CT chest (for small or questionable PTX)',
      'Ultrasound (absence of lung sliding)'
    ],
    redFlags: [
      'Hypotension',
      'Severe hypoxemia',
      'Tracheal deviation',
      'JVD',
      'Tension physiology'
    ],
    pitfalls: [
      'Missing tension PTX',
      'Delaying needle decompression',
      'Not getting upright CXR',
      'Misinterpreting skin folds'
    ],
    notes: 'Tension PTX is clinical diagnosis - do NOT delay for CXR. Needle decompression is lifesaving.',
    keywords: ['PTX', 'collapsed lung', 'tension pneumothorax']
  },

  // NEUROLOGY
  {
    id: 'stroke-ischemic',
    name: 'Acute Ischemic Stroke',
    specialty: 'neurology',
    chiefComplaints: ['altered-mental-status', 'weakness', 'headache'],
    stabilization: [
      'Airway protection',
      'Blood pressure management (permissive hypertension unless >220/120)',
      'IV access',
      'Glucose check',
      'NPO',
      'tPA consideration within 4.5 hours'
    ],
    initialTests: [
      'Non-contrast head CT (STAT)',
      'Glucose',
      'ECG',
      'CBC, PT/PTT, INR',
      'Basic metabolic panel'
    ],
    mostAccurateTests: [
      'MRI brain with DWI (most sensitive)',
      'CT/MR angiography (vessel imaging)',
      'CT perfusion'
    ],
    redFlags: [
      'Hemorrhagic conversion',
      'Malignant edema',
      'Herniation',
      'Large vessel occlusion',
      'Posterior circulation'
    ],
    pitfalls: [
      'Delaying imaging',
      'Over-aggressive BP lowering',
      'Missing stroke mimics',
      'Not considering thrombectomy window (up to 24h)'
    ],
    notes: 'Non-contrast CT first to rule out hemorrhage. MRI DWI most sensitive. Time is brain - tPA within 4.5h, thrombectomy up to 24h.',
    keywords: ['CVA', 'cerebrovascular accident', 'brain attack', 'TPA', 'thrombolytics']
  },
  {
    id: 'status-epilepticus',
    name: 'Status Epilepticus',
    specialty: 'neurology',
    chiefComplaints: ['altered-mental-status'],
    stabilization: [
      'Airway protection',
      'Benzodiazepine (lorazepam or diazepam)',
      'Glucose check',
      'IV access',
      'Load antiepileptic (fosphenytoin, levetiracetam)',
      'Continuous EEG monitoring'
    ],
    initialTests: [
      'Glucose',
      'Electrolytes, Mg, Ca',
      'Antiepileptic drug levels',
      'Toxicology screen',
      'Non-contrast head CT',
      'CBC'
    ],
    mostAccurateTests: [
      'EEG (continuous)',
      'MRI brain (for etiology)',
      'LP (if infection suspected)'
    ],
    redFlags: [
      'Refractory seizures',
      'Hypoxemia',
      'Hyperthermia',
      'Rhabdomyolysis',
      'Non-convulsive status'
    ],
    pitfalls: [
      'Delaying benzodiazepines',
      'Under-dosing antiepileptics',
      'Not checking glucose',
      'Missing non-convulsive status'
    ],
    notes: 'Benzodiazepines first-line. Early loading of second agent. EEG gold standard for diagnosis and monitoring.',
    keywords: ['seizure', 'epilepsy', 'convulsion', 'AMS']
  },
  {
    id: 'meningitis',
    name: 'Bacterial Meningitis',
    specialty: 'neurology',
    chiefComplaints: ['fever', 'headache', 'altered-mental-status'],
    stabilization: [
      'IV antibiotics immediately (do not delay for LP)',
      'Dexamethasone before/with first antibiotics',
      'Airway management if altered',
      'IV fluids',
      'Seizure precautions'
    ],
    initialTests: [
      'Blood cultures',
      'Non-contrast head CT (if concern for mass/herniation)',
      'Lumbar puncture',
      'CBC, CMP',
      'Coagulation studies'
    ],
    mostAccurateTests: [
      'CSF analysis (cell count, protein, glucose, Gram stain, culture)',
      'CSF PCR (viral, bacterial)'
    ],
    redFlags: [
      'Altered mental status',
      'Seizures',
      'Focal neurologic deficits',
      'Papilledema',
      'Immunocompromised'
    ],
    pitfalls: [
      'Delaying antibiotics for LP',
      'Missing HSV encephalitis',
      'Not giving dexamethasone',
      'Inadequate empiric coverage'
    ],
    notes: 'Never delay antibiotics for LP. CSF is gold standard but give empiric treatment first if delayed.',
    keywords: ['CNS infection', 'meningismus', 'nuchal rigidity']
  },

  // GASTROENTEROLOGY
  {
    id: 'upper-gi-bleed',
    name: 'Upper GI Bleed',
    specialty: 'gastroenterology',
    chiefComplaints: ['abdominal-pain', 'bleeding'],
    stabilization: [
      'Two large-bore IVs',
      'Crystalloid resuscitation',
      'Type and cross-match',
      'Transfuse if unstable or Hgb <7',
      'PPI infusion',
      'Correct coagulopathy',
      'Consider vasoactive drugs if variceal'
    ],
    initialTests: [
      'CBC',
      'Type and screen',
      'PT/INR, PTT',
      'Basic metabolic panel',
      'Liver function tests',
      'NG lavage (optional)'
    ],
    mostAccurateTests: [
      'Upper endoscopy (EGD)'
    ],
    redFlags: [
      'Hemodynamic instability',
      'Massive hematemesis',
      'Altered mental status',
      'Variceal bleeding',
      'Ongoing bleeding'
    ],
    pitfalls: [
      'Under-resuscitating',
      'Delaying endoscopy',
      'Not correcting coagulopathy',
      'Missing variceal etiology'
    ],
    notes: 'Resuscitate first. EGD is therapeutic and diagnostic gold standard. PPIs reduce rebleeding.',
    keywords: ['hematemesis', 'coffee ground emesis', 'melena', 'GI bleeding']
  },
  {
    id: 'lower-gi-bleed',
    name: 'Lower GI Bleed',
    specialty: 'gastroenterology',
    chiefComplaints: ['abdominal-pain', 'bleeding'],
    stabilization: [
      'IV access',
      'Fluid resuscitation',
      'Type and cross',
      'Transfuse if needed',
      'Assess hemodynamic status'
    ],
    initialTests: [
      'CBC',
      'Type and screen',
      'PT/INR, PTT',
      'Basic metabolic panel'
    ],
    mostAccurateTests: [
      'Colonoscopy',
      'CT angiography (if active bleeding)',
      'Tagged RBC scan (if slower bleed)'
    ],
    redFlags: [
      'Hemodynamic instability',
      'Massive bleeding',
      'Diverticular bleed',
      'Ischemic colitis'
    ],
    pitfalls: [
      'Assuming lower source without excluding upper',
      'Delaying colonoscopy',
      'Inadequate resuscitation'
    ],
    notes: 'NG lavage may help exclude upper source. Colonoscopy is gold standard if stable.',
    keywords: ['hematochezia', 'rectal bleeding', 'bright red blood per rectum', 'BRBPR']
  },
  {
    id: 'cholangitis',
    name: 'Acute Cholangitis',
    specialty: 'gastroenterology',
    chiefComplaints: ['fever', 'abdominal-pain'],
    stabilization: [
      'IV fluids',
      'IV antibiotics (broad-spectrum)',
      'IV access',
      'NPO',
      'Biliary decompression planning (ERCP)'
    ],
    initialTests: [
      'CBC',
      'Liver function tests',
      'Basic metabolic panel',
      'Blood cultures',
      'Right upper quadrant ultrasound'
    ],
    mostAccurateTests: [
      'MRCP',
      'ERCP (therapeutic and diagnostic)'
    ],
    redFlags: [
      'Septic shock',
      'Altered mental status (Reynolds pentad)',
      'Hypotension',
      'Severe sepsis'
    ],
    pitfalls: [
      'Delaying antibiotics',
      'Missing need for urgent ERCP',
      'Inadequate fluid resuscitation'
    ],
    notes: 'Charcot triad: fever, jaundice, RUQ pain. ERCP both diagnostic and therapeutic.',
    keywords: ['biliary infection', 'cholecystitis', 'Charcot triad', 'Reynolds pentad']
  },
  {
    id: 'pancreatitis',
    name: 'Acute Pancreatitis',
    specialty: 'gastroenterology',
    chiefComplaints: ['abdominal-pain'],
    stabilization: [
      'Aggressive IV fluid resuscitation',
      'NPO',
      'Pain control',
      'Antiemetics',
      'Electrolyte monitoring'
    ],
    initialTests: [
      'Lipase',
      'CBC',
      'Basic metabolic panel',
      'Liver function tests',
      'Triglycerides',
      'Calcium',
      'Abdominal ultrasound (for gallstones)'
    ],
    mostAccurateTests: [
      'Contrast-enhanced CT abdomen (after 48-72h)',
      'MRCP (for biliary etiology)'
    ],
    redFlags: [
      'Hypotension',
      'Hypoxemia',
      'Organ failure',
      'Necrosis',
      'Hemorrhagic pancreatitis'
    ],
    pitfalls: [
      'Under-resuscitating',
      'Early CT (wait 48-72h for complications)',
      'Missing gallstone etiology',
      'Not assessing severity scores'
    ],
    notes: 'Lipase >3x normal suggests pancreatitis. Early aggressive fluids reduce mortality. CT best after 48h.',
    keywords: ['pancreatic inflammation', 'epigastric pain', 'elevated lipase']
  },

  // ENDOCRINOLOGY
  {
    id: 'dka',
    name: 'Diabetic Ketoacidosis (DKA)',
    specialty: 'endocrinology',
    chiefComplaints: ['altered-mental-status', 'abdominal-pain'],
    stabilization: [
      'IV fluids (aggressive normal saline)',
      'IV insulin after fluids started',
      'Potassium replacement',
      'Monitor glucose hourly',
      'Identify and treat precipitant'
    ],
    initialTests: [
      'Basic metabolic panel',
      'Glucose',
      'Venous blood gas',
      'Beta-hydroxybutyrate or urine ketones',
      'Anion gap calculation',
      'Urinalysis'
    ],
    mostAccurateTests: [
      'Beta-hydroxybutyrate (most specific for ketosis)',
      'ABG (if severe)'
    ],
    redFlags: [
      'Severe acidosis (pH <7.0)',
      'Altered mental status',
      'Hypotension',
      'Hypokalemia',
      'Cerebral edema (pediatrics)'
    ],
    pitfalls: [
      'Starting insulin before fluids',
      'Not repleting potassium',
      'Closing anion gap too quickly',
      'Missing cerebral edema in children'
    ],
    notes: 'Fluids first, then insulin. Monitor glucose AND anion gap. Beta-hydroxybutyrate most accurate.',
    keywords: ['hyperglycemia', 'acidosis', 'ketones', 'diabetes']
  },
  {
    id: 'hhs',
    name: 'Hyperosmolar Hyperglycemic State (HHS)',
    specialty: 'endocrinology',
    chiefComplaints: ['altered-mental-status'],
    stabilization: [
      'Aggressive IV fluid resuscitation',
      'IV insulin (lower rates than DKA)',
      'Electrolyte monitoring and replacement',
      'Identify precipitant'
    ],
    initialTests: [
      'Basic metabolic panel',
      'Glucose',
      'Serum osmolality',
      'Urinalysis',
      'Calculate effective osmolality'
    ],
    mostAccurateTests: [
      'Serum osmolality (>320 mOsm/kg)',
      'Glucose >600'
    ],
    redFlags: [
      'Severe dehydration',
      'Altered mental status',
      'Hypotension',
      'Acute kidney injury',
      'Thrombotic complications'
    ],
    pitfalls: [
      'Correcting hyperglycemia too rapidly',
      'Under-resuscitating fluids',
      'Not correcting sodium for hyperglycemia',
      'Missing underlying infection'
    ],
    notes: 'More common in type 2 DM. Higher glucose, less acidosis than DKA. Requires massive fluid resuscitation.',
    keywords: ['hyperglycemia', 'hyperosmolar', 'HONK', 'diabetes']
  },
  {
    id: 'adrenal-crisis',
    name: 'Adrenal Crisis',
    specialty: 'endocrinology',
    chiefComplaints: ['altered-mental-status', 'weakness', 'abdominal-pain'],
    stabilization: [
      'IV hydrocortisone immediately',
      'Aggressive IV normal saline',
      'Dextrose if hypoglycemic',
      'Correct electrolytes',
      'Vasopressors if refractory shock'
    ],
    initialTests: [
      'Basic metabolic panel',
      'Glucose',
      'Cortisol level (before giving steroids if possible)',
      'ACTH',
      'CBC'
    ],
    mostAccurateTests: [
      'ACTH stimulation test (cosyntropin)',
      'Random cortisol <5 suggests deficiency'
    ],
    redFlags: [
      'Hypotension refractory to fluids',
      'Hyperkalemia',
      'Hypoglycemia',
      'Eosinophilia',
      'Altered mental status'
    ],
    pitfalls: [
      'Delaying steroids for testing',
      'Using dexamethasone instead of hydrocortisone acutely',
      'Missing precipitant (infection, trauma)',
      'Under-resuscitating'
    ],
    notes: 'Do not delay steroids. Give hydrocortisone empirically if suspected. Random cortisol helps but treat first.',
    keywords: ['Addison disease', 'adrenal insufficiency', 'hypotension', 'hyperkalemia']
  },
  {
    id: 'thyroid-storm',
    name: 'Thyroid Storm',
    specialty: 'endocrinology',
    chiefComplaints: ['fever', 'altered-mental-status', 'palpitations'],
    stabilization: [
      'IV fluids',
      'Cooling measures',
      'Beta-blocker (propranolol or esmolol)',
      'PTU or methimazole',
      'Iodine (1 hour after antithyroid drug)',
      'Hydrocortisone',
      'Treat precipitant'
    ],
    initialTests: [
      'TSH, free T4, free T3',
      'Basic metabolic panel',
      'CBC',
      'Glucose',
      'Calcium',
      'Liver function tests'
    ],
    mostAccurateTests: [
      'Free T4 and T3 (markedly elevated)',
      'TSH (suppressed)'
    ],
    redFlags: [
      'High fever (>40°C)',
      'Altered mental status',
      'Tachycardia out of proportion',
      'Atrial fibrillation',
      'Heart failure'
    ],
    pitfalls: [
      'Giving iodine before antithyroid drug',
      'Not giving beta-blocker',
      'Missing precipitant',
      'Under-cooling'
    ],
    notes: 'Clinical diagnosis. Give antithyroid drug first, then iodine 1 hour later. Beta-blockade essential.',
    keywords: ['hyperthyroidism', 'thyrotoxicosis', 'Graves disease']
  },

  // INFECTIOUS DISEASE
  {
    id: 'sepsis',
    name: 'Sepsis / Septic Shock',
    specialty: 'infectious-disease',
    chiefComplaints: ['fever', 'altered-mental-status'],
    stabilization: [
      'IV fluid resuscitation (30mL/kg crystalloid)',
      'Early broad-spectrum antibiotics (within 1 hour)',
      'Blood cultures before antibiotics',
      'Source control',
      'Vasopressors if refractory hypotension',
      'Lactate monitoring'
    ],
    initialTests: [
      'Blood cultures (2 sets)',
      'Lactate',
      'CBC',
      'Basic metabolic panel',
      'Procalcitonin',
      'Urinalysis and culture',
      'Chest X-ray',
      'Other cultures based on source'
    ],
    mostAccurateTests: [
      'Culture from suspected source',
      'Blood culture (gold standard for bacteremia)'
    ],
    redFlags: [
      'Hypotension',
      'Lactate >4',
      'Altered mental status',
      'Severe hypoxemia',
      'Oliguria'
    ],
    pitfalls: [
      'Delaying antibiotics',
      'Inadequate fluid resuscitation',
      'Not obtaining cultures',
      'Missing source control need'
    ],
    notes: 'Early antibiotics (within 1 hour) and fluids reduce mortality. Lactate guides resuscitation.',
    keywords: ['infection', 'SIRS', 'shock', 'bacteremia']
  },
  {
    id: 'febrile-neutropenia',
    name: 'Febrile Neutropenia',
    specialty: 'infectious-disease',
    chiefComplaints: ['fever'],
    stabilization: [
      'Immediate broad-spectrum antibiotics (anti-pseudomonal)',
      'Blood cultures',
      'IV fluids',
      'Neutropenic precautions'
    ],
    initialTests: [
      'CBC with differential',
      'Blood cultures (2 sets including central line if present)',
      'Basic metabolic panel',
      'Chest X-ray',
      'Urinalysis and culture'
    ],
    mostAccurateTests: [
      'Blood cultures',
      'Bone marrow biopsy (if indicated)'
    ],
    redFlags: [
      'ANC <500',
      'Hypotension',
      'Pneumonia',
      'Mucositis',
      'Central line infection'
    ],
    pitfalls: [
      'Delaying antibiotics',
      'Using inadequate empiric coverage',
      'Missing fungal infection',
      'Not checking central line'
    ],
    notes: 'Medical emergency. Start antibiotics within 1 hour. ANC <500 defines neutropenia.',
    keywords: ['chemotherapy', 'immunosuppressed', 'neutropenic fever']
  },
  {
    id: 'necrotizing-fasciitis',
    name: 'Necrotizing Fasciitis',
    specialty: 'infectious-disease',
    chiefComplaints: ['fever'],
    stabilization: [
      'Immediate surgical consultation',
      'Broad-spectrum antibiotics including clindamycin',
      'IV fluids',
      'Pain control',
      'Prepare for urgent surgery'
    ],
    initialTests: [
      'CBC',
      'Basic metabolic panel',
      'CRP',
      'Blood cultures',
      'Imaging (X-ray, CT, MRI)',
      'LRINEC score calculation'
    ],
    mostAccurateTests: [
      'Surgical exploration (gold standard)',
      'MRI (most sensitive imaging)',
      'CT with contrast'
    ],
    redFlags: [
      'Pain out of proportion',
      'Rapid progression',
      'Skin changes (hemorrhagic bullae, crepitus)',
      'Systemic toxicity',
      'Gas on imaging'
    ],
    pitfalls: [
      'Delaying surgical consultation',
      'Mistaking for cellulitis',
      'Inadequate antibiotic coverage',
      'Waiting for imaging'
    ],
    notes: 'Surgical emergency. Pain out of proportion is classic. Do not delay surgery for imaging.',
    keywords: ['flesh-eating bacteria', 'soft tissue infection', 'gas gangrene']
  },

  // NEPHROLOGY
  {
    id: 'aki',
    name: 'Acute Kidney Injury (AKI)',
    specialty: 'nephrology',
    chiefComplaints: ['weakness'],
    stabilization: [
      'IV fluids if pre-renal',
      'Discontinue nephrotoxic medications',
      'Treat underlying cause',
      'Monitor electrolytes',
      'Consider dialysis if indicated'
    ],
    initialTests: [
      'Basic metabolic panel',
      'Urinalysis with microscopy',
      'Urine sodium, FENa, FEUrea',
      'Renal ultrasound',
      'CBC'
    ],
    mostAccurateTests: [
      'Kidney biopsy (if intrinsic renal disease)',
      'Renal ultrasound (for obstruction)'
    ],
    redFlags: [
      'Severe hyperkalemia',
      'Volume overload',
      'Uremia',
      'Metabolic acidosis',
      'Oliguria/anuria'
    ],
    pitfalls: [
      'Not distinguishing pre-renal, intrinsic, post-renal',
      'Missing obstruction',
      'Delaying dialysis',
      'Continued nephrotoxic agents'
    ],
    notes: 'Urinalysis and FENa help distinguish etiology. Ultrasound rules out obstruction.',
    keywords: ['renal failure', 'azotemia', 'elevated creatinine']
  },
  {
    id: 'hyperkalemia',
    name: 'Severe Hyperkalemia',
    specialty: 'nephrology',
    chiefComplaints: ['weakness', 'palpitations'],
    stabilization: [
      'Continuous cardiac monitoring',
      'IV calcium gluconate if ECG changes',
      'Insulin + dextrose',
      'Albuterol nebulizer',
      'Sodium bicarbonate if acidotic',
      'Diuretics or dialysis for removal'
    ],
    initialTests: [
      'Basic metabolic panel',
      'ECG',
      'Repeat potassium',
      'ABG/VBG',
      'Medication review'
    ],
    mostAccurateTests: [
      'Serum potassium (not hemolyzed)',
      'ECG changes'
    ],
    redFlags: [
      'K >6.5',
      'ECG changes (peaked T waves, wide QRS)',
      'Muscle weakness',
      'Arrhythmias'
    ],
    pitfalls: [
      'Hemolyzed specimen',
      'Delaying calcium if ECG changes',
      'Not addressing underlying cause',
      'Under-treating severe hyperkalemia'
    ],
    notes: 'ECG changes require immediate calcium. Insulin/glucose and albuterol shift K intracellularly.',
    keywords: ['high potassium', 'peaked T waves', 'arrhythmia']
  },
  {
    id: 'hyponatremia',
    name: 'Severe Hyponatremia',
    specialty: 'nephrology',
    chiefComplaints: ['altered-mental-status', 'weakness'],
    stabilization: [
      'Assess volume status',
      'Hypertonic saline if severe symptoms',
      'Correct slowly (max 8-10 mEq/L per 24h)',
      'Monitor sodium frequently',
      'Fluid restriction if euvolemic/hypervolemic'
    ],
    initialTests: [
      'Basic metabolic panel',
      'Serum osmolality',
      'Urine sodium',
      'Urine osmolality',
      'TSH, cortisol'
    ],
    mostAccurateTests: [
      'Serum and urine osmolality',
      'Urine sodium (helps classify)'
    ],
    redFlags: [
      'Na <120',
      'Seizures',
      'Severe neurologic symptoms',
      'Rapid onset'
    ],
    pitfalls: [
      'Correcting too rapidly (osmotic demyelination)',
      'Not assessing volume status',
      'Using hypertonic saline without indication',
      'Missing SIADH'
    ],
    notes: 'Classify by volume status and urine sodium. Correct slowly to avoid osmotic demyelination.',
    keywords: ['low sodium', 'SIADH', 'seizure', 'confusion']
  },

  // HEMATOLOGY-ONCOLOGY
  {
    id: 'dvt',
    name: 'Deep Vein Thrombosis (DVT)',
    specialty: 'hematology-oncology',
    chiefComplaints: ['weakness'],
    stabilization: [
      'Anticoagulation if high suspicion',
      'Elevation',
      'Assess for PE'
    ],
    initialTests: [
      'Clinical risk scoring (Wells)',
      'D-dimer if low/moderate risk',
      'Compression ultrasound'
    ],
    mostAccurateTests: [
      'Compression ultrasound with Doppler',
      'Venography (rarely used)'
    ],
    redFlags: [
      'Massive swelling',
      'Phlegmasia cerulea dolens',
      'Concurrent PE',
      'Bilateral involvement'
    ],
    pitfalls: [
      'Over-reliance on D-dimer in high-risk',
      'Delayed anticoagulation',
      'Missing PE',
      'Inadequate ultrasound'
    ],
    notes: 'Wells score guides testing. Ultrasound is gold standard. Start anticoagulation if high suspicion.',
    keywords: ['leg swelling', 'venous thrombosis', 'clot']
  },

  // OBSTETRICS-GYNECOLOGY
  {
    id: 'ectopic-pregnancy',
    name: 'Ectopic Pregnancy',
    specialty: 'obstetrics-gynecology',
    chiefComplaints: ['abdominal-pain', 'bleeding'],
    stabilization: [
      'IV access (2 large bore if unstable)',
      'Fluid resuscitation',
      'Type and cross',
      'Transfuse if needed',
      'Surgical consultation if ruptured'
    ],
    initialTests: [
      'Quantitative beta-hCG',
      'CBC',
      'Type and screen',
      'Transvaginal ultrasound'
    ],
    mostAccurateTests: [
      'Transvaginal ultrasound',
      'Serial beta-hCG (rises abnormally)',
      'Laparoscopy (if needed)'
    ],
    redFlags: [
      'Hypotension',
      'Peritoneal signs',
      'Hemodynamic instability',
      'Free fluid in abdomen'
    ],
    pitfalls: [
      'Missing ruptured ectopic',
      'Not getting quantitative hCG',
      'Delaying surgical consultation',
      'Inadequate resuscitation'
    ],
    notes: 'Beta-hCG + ultrasound diagnostic. No IUP with hCG >1500-2000 suggests ectopic.',
    keywords: ['pregnancy complication', 'pelvic pain', 'vaginal bleeding']
  },
  {
    id: 'preeclampsia',
    name: 'Preeclampsia with Severe Features',
    specialty: 'obstetrics-gynecology',
    chiefComplaints: ['headache'],
    stabilization: [
      'IV magnesium sulfate for seizure prophylaxis',
      'IV antihypertensive if BP >160/110',
      'OB consultation',
      'Delivery planning',
      'Monitor fetus'
    ],
    initialTests: [
      'Blood pressure',
      'Urinalysis (proteinuria)',
      'CBC (platelets)',
      'Liver function tests',
      'Creatinine',
      'Uric acid'
    ],
    mostAccurateTests: [
      '24-hour urine protein (gold standard)',
      'Protein/creatinine ratio (faster)'
    ],
    redFlags: [
      'BP >160/110',
      'Headache/visual changes',
      'RUQ pain',
      'Thrombocytopenia',
      'Elevated LFTs',
      'Pulmonary edema',
      'Seizure (eclampsia)'
    ],
    pitfalls: [
      'Not giving magnesium',
      'Delaying delivery',
      'Over-aggressive BP lowering',
      'Missing HELLP syndrome'
    ],
    notes: 'Magnesium prevents eclampsia. Delivery is definitive treatment. Monitor for HELLP.',
    keywords: ['pregnancy hypertension', 'PIH', 'eclampsia', 'HELLP']
  },
  {
    id: 'postpartum-hemorrhage',
    name: 'Postpartum Hemorrhage',
    specialty: 'obstetrics-gynecology',
    chiefComplaints: ['bleeding'],
    stabilization: [
      'Uterine massage',
      'IV access (2 large bore)',
      'Crystalloid resuscitation',
      'Oxytocin',
      'Type and cross, transfuse PRN',
      'OB consultation'
    ],
    initialTests: [
      'CBC',
      'Type and cross',
      'PT/INR, PTT',
      'Fibrinogen',
      'Visual estimation of blood loss'
    ],
    mostAccurateTests: [
      'Quantitative blood loss measurement',
      'Ultrasound (retained products)'
    ],
    redFlags: [
      'Hemodynamic instability',
      'Massive hemorrhage',
      'Coagulopathy',
      'Uterine atony refractory to treatment'
    ],
    pitfalls: [
      'Underestimating blood loss',
      'Delaying transfusion',
      'Not activating massive transfusion protocol',
      'Missing retained products'
    ],
    notes: 'Uterine atony most common. Oxytocin first-line. Early massive transfusion protocol if severe.',
    keywords: ['PPH', 'uterine atony', 'obstetric hemorrhage']
  },

  // PEDIATRICS
  {
    id: 'bronchiolitis',
    name: 'Bronchiolitis (Pediatric)',
    specialty: 'pediatrics',
    chiefComplaints: ['dyspnea', 'fever'],
    stabilization: [
      'Oxygen if hypoxemic',
      'Nasal suctioning',
      'Hydration (IV if unable to feed)',
      'Supportive care',
      'Monitor work of breathing'
    ],
    initialTests: [
      'Pulse oximetry',
      'Clinical diagnosis (usually <2 years)',
      'Viral testing (RSV) if needed for cohorting',
      'Chest X-ray only if atypical'
    ],
    mostAccurateTests: [
      'Nasopharyngeal swab for RSV',
      'Viral respiratory panel'
    ],
    redFlags: [
      'Apnea',
      'Severe respiratory distress',
      'Hypoxemia',
      'Dehydration',
      'Age <3 months'
    ],
    pitfalls: [
      'Over-using bronchodilators (not effective)',
      'Routine CXR (not needed)',
      'Antibiotics (not indicated unless bacterial superinfection)',
      'Missing apnea in young infants'
    ],
    notes: 'Clinical diagnosis. Supportive care mainstay. RSV most common. Monitor for apnea in young infants.',
    keywords: ['RSV', 'wheezing infant', 'viral respiratory infection']
  },
  {
    id: 'croup',
    name: 'Croup (Laryngotracheobronchitis)',
    specialty: 'pediatrics',
    chiefComplaints: ['dyspnea'],
    stabilization: [
      'Dexamethasone (oral or IM)',
      'Nebulized epinephrine if severe',
      'Minimize agitation',
      'Oxygen if needed',
      'Cool mist (traditional but limited evidence)'
    ],
    initialTests: [
      'Clinical diagnosis',
      'Pulse oximetry',
      'Lateral neck X-ray only if atypical (steeple sign)'
    ],
    mostAccurateTests: [
      'Clinical diagnosis',
      'Lateral neck X-ray (steeple sign)'
    ],
    redFlags: [
      'Stridor at rest',
      'Severe respiratory distress',
      'Drooling (suggests epiglottitis)',
      'Toxic appearance',
      'Hypoxemia'
    ],
    pitfalls: [
      'Not giving dexamethasone',
      'Missing epiglottitis',
      'Routine X-rays',
      'Delaying epinephrine in severe cases'
    ],
    notes: 'Barky cough classic. Dexamethasone reduces symptoms and ED revisits. Epinephrine for severe stridor.',
    keywords: ['barking cough', 'stridor', 'laryngotracheobronchitis']
  },
  {
    id: 'febrile-infant',
    name: 'Fever in Infant <90 Days',
    specialty: 'pediatrics',
    chiefComplaints: ['fever'],
    stabilization: [
      'Assess for serious bacterial infection',
      'Empiric antibiotics if high-risk or <28 days',
      'Lumbar puncture consideration',
      'IV access',
      'Supportive care'
    ],
    initialTests: [
      'CBC with differential',
      'Blood culture',
      'Urinalysis and culture (catheterized)',
      'Lumbar puncture (age/risk dependent)',
      'Chest X-ray if respiratory signs',
      'Procalcitonin (some protocols)'
    ],
    mostAccurateTests: [
      'Blood culture',
      'CSF culture',
      'Urine culture'
    ],
    redFlags: [
      'Age <28 days',
      'Ill appearance',
      'Hypotension',
      'Apnea',
      'Respiratory distress',
      'Seizure'
    ],
    pitfalls: [
      'Not doing full sepsis workup in high-risk',
      'Missing UTI',
      'Bagged urine specimen (inadequate)',
      'Delaying antibiotics in young infants'
    ],
    notes: '<28 days: always do full workup and admit. 29-60 days: risk-stratify. Urine must be catheterized.',
    keywords: ['neonatal fever', 'sepsis workup', 'young infant']
  }
];
