export type Specialty =
  | 'cardiology'
  | 'pulmonology'
  | 'neurology'
  | 'gastroenterology'
  | 'endocrinology'
  | 'infectious-disease'
  | 'nephrology'
  | 'hematology-oncology'
  | 'obstetrics-gynecology'
  | 'pediatrics'
  | 'emergency-medicine';

export type ChiefComplaint =
  | 'chest-pain'
  | 'dyspnea'
  | 'abdominal-pain'
  | 'syncope'
  | 'altered-mental-status'
  | 'fever'
  | 'trauma'
  | 'palpitations'
  | 'weakness'
  | 'headache'
  | 'bleeding';

export interface Condition {
  id: string;
  name: string;
  specialty: Specialty;
  chiefComplaints?: ChiefComplaint[];
  stabilization: string[];
  initialTests: string[];
  mostAccurateTests: string[];
  redFlags: string[];
  pitfalls: string[];
  notes: string;
  keywords?: string[];
}

export interface CaseScenario {
  id: string;
  conditionId: string;
  title: string;
  presentation: string;
  vitals: {
    hr: number;
    bp: string;
    rr: number;
    temp: number;
    spo2: number;
  };
  correctStabilization: string[];
  correctInitialTests: string[];
  correctMostAccurateTest: string;
  feedback: {
    stabilization: string;
    initialTests: string;
    mostAccurateTest: string;
  };
}

export interface Question {
  id: string;
  type: 'mcq' | 'matching' | 'sequence';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  conditionId?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  relatedConditions?: string[];
}

export interface UserProgress {
  completedCases: string[];
  assessmentScores: { questionId: string; correct: boolean; timestamp: number }[];
  favoriteConditions: string[];
  lastVisited: string[];
}
